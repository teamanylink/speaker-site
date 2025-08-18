import fs from 'fs/promises'
import path from 'path'

const STORE_PATH = path.join('/tmp', 'blog.json')

async function readStore() {
  const raw = await fs.readFile(STORE_PATH, 'utf8').catch(() => '[]')
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export default async function handler(req, res) {
  const { slug } = req.query || {}
  if (!slug) return res.status(400).json({ error: 'Missing slug' })

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const posts = await readStore()
    const post = posts.find((p) => p.slug === slug)
    if (!post) return res.status(404).json({ error: 'Not found' })
    res.setHeader('Content-Type', 'application/json')
    return res.status(200).send(JSON.stringify(post))
  } catch {
    return res.status(500).json({ error: 'Failed to load post' })
  }
}

