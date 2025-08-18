import fs from 'fs/promises';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:4173';
const MAX_PAGES = Number(process.env.MAX_PAGES || 5000);
const TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 12000);
const CHECK_EXTERNAL = process.env.CHECK_EXTERNAL !== 'false';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise, ms, url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  return Promise.race([
    promise(controller.signal),
    (async () => {
      await sleep(ms + 1);
      throw new Error(`Timeout after ${ms}ms`);
    })(),
  ]).finally(() => clearTimeout(timeout)).catch(err => {
    throw new Error(`Fetch error for ${url}: ${err.message}`);
  });
}

function isHtml(contentType) {
  if (!contentType) return false;
  return contentType.includes('text/html') || contentType.includes('application/xhtml');
}

function extractLinks(html, base) {
  const links = new Set();
  const anchorRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = anchorRegex.exec(html)) !== null) {
    const rawHref = match[1].trim();
    try {
      // Resolve relative and hash links against page URL
      const resolved = new URL(rawHref, base);
      links.add(resolved.href);
    } catch {
      // ignore malformed
    }
  }
  return Array.from(links);
}

function extractFragments(html) {
  const ids = new Set();
  const idRegex = /\b(?:id|name)=["']([A-Za-z0-9_\-:]+)["']/gi;
  let m;
  while ((m = idRegex.exec(html)) !== null) ids.add(m[1]);
  return ids;
}

async function readSitemapPaths() {
  const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  try {
    const xml = await fs.readFile(sitemapPath, 'utf8');
    const locRegex = /<loc>\s*([^<]+)\s*<\/loc>/g;
    const paths = new Set(['/']);
    let match;
    while ((match = locRegex.exec(xml)) !== null) {
      try {
        const urlObj = new URL(match[1].trim());
        paths.add(urlObj.pathname.replace(/\/$/, '') || '/');
      } catch {
        // ignore
      }
    }
    return Array.from(paths);
  } catch {
    return ['/'];
  }
}

async function headOrGet(url) {
  try {
    const res = await withTimeout((signal) => fetch(url, { method: 'HEAD', redirect: 'follow', signal }), TIMEOUT_MS, url);
    return res;
  } catch {
    const res = await withTimeout((signal) => fetch(url, { method: 'GET', redirect: 'follow', signal }), TIMEOUT_MS, url);
    return res;
  }
}

async function crawl() {
  const origin = new URL(BASE_URL).origin;
  const seedPaths = await readSitemapPaths();
  const toVisit = seedPaths.map(p => new URL(p, origin).href);
  const visited = new Set();
  const internalBroken = [];
  const externalBroken = [];
  const fragmentBroken = [];

  while (toVisit.length && visited.size < MAX_PAGES) {
    const current = toVisit.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    let res;
    try {
      res = await withTimeout((signal) => fetch(current, { method: 'GET', redirect: 'follow', signal }), TIMEOUT_MS, current);
    } catch (err) {
      internalBroken.push({ url: current, error: err.message });
      continue;
    }

    if (res.status >= 400) {
      internalBroken.push({ url: current, status: res.status });
      continue;
    }

    const contentType = res.headers.get('content-type') || '';
    if (!isHtml(contentType)) continue;

    const html = await res.text();
    const pageLinks = extractLinks(html, current);
    const fragments = extractFragments(html);

    for (const link of pageLinks) {
      try {
        const u = new URL(link);
        const isInternal = u.origin === origin;
        if (u.hash) {
          const frag = u.hash.slice(1);
          if (frag && !fragments.has(frag)) {
            fragmentBroken.push({ page: current, href: link, missingId: frag });
          }
        }
        if (isInternal) {
          const normalized = u.href.replace(/\/$/, '') || origin + '/';
          if (!visited.has(normalized)) toVisit.push(normalized);
        } else if (CHECK_EXTERNAL) {
          try {
            const extRes = await headOrGet(u.href);
            if (extRes.status >= 400) {
              externalBroken.push({ from: current, url: u.href, status: extRes.status });
            }
          } catch (err) {
            externalBroken.push({ from: current, url: u.href, error: err.message });
          }
        }
      } catch {
        // ignore malformed link
      }
    }
  }

  return { scannedPages: Array.from(visited), internalBroken, externalBroken, fragmentBroken };
}

(async () => {
  const result = await crawl();
  const reportPath = path.resolve(process.cwd(), 'tmp', 'link-report.json');
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, JSON.stringify(result, null, 2), 'utf8');
  const summary = {
    pagesScanned: result.scannedPages.length,
    internalBroken: result.internalBroken.length,
    externalBroken: result.externalBroken.length,
    fragmentBroken: result.fragmentBroken.length,
    report: reportPath,
  };
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(summary, null, 2));
})();

