#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateStateSitemap, generateRobotsTxt } from '../src/utils/generateStateSitemap.js';
import { generateLLMsTxt } from '../src/utils/generateLLMsTxt.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function writeFileSyncSafe(targetPath, content) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, content, 'utf8');
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(projectRoot, 'public');
  const distPublicDir = path.join(projectRoot, 'dist');

  const sitemap = generateStateSitemap();
  const robots = generateRobotsTxt();
  const llms = generateLLMsTxt();

  writeFileSyncSafe(path.join(publicDir, 'sitemap.xml'), sitemap);
  writeFileSyncSafe(path.join(publicDir, 'robots.txt'), robots);
  writeFileSyncSafe(path.join(publicDir, 'llms.txt'), llms);

  // Also write into dist if it exists (useful for local preview)
  if (fs.existsSync(distPublicDir)) {
    writeFileSyncSafe(path.join(distPublicDir, 'sitemap.xml'), sitemap);
    writeFileSyncSafe(path.join(distPublicDir, 'robots.txt'), robots);
    writeFileSyncSafe(path.join(distPublicDir, 'llms.txt'), llms);
  }

  console.log('SEO assets generated: sitemap.xml, robots.txt, llms.txt');
}

main();

