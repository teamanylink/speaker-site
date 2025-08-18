// Blog API: GET returns list of posts; POST creates a new post
// Storage: ephemeral JSON file in /tmp for now. For production, connect a real DB or Vercel KV.

import fs from 'fs/promises'
import path from 'path'

const STORE_PATH = path.join('/tmp', 'blog.json')

function seedPosts() {
  return [
    {
      slug: 'what-is-a-move',
      title: 'What Is a Move?',
      excerpt:
        'A move is a change. You shift, you decide, and you go. Small moves make big change over time.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-01',
      tags: ['Move', 'Start'],
      content: [
        'A move is when you change your place or your path. You shift, you turn, you pick a new way. You make a choice. You take a step.',
        'A move can be big or small. It can be a whisper or a roar. What matters is that you start.',
        'You do not have to stay where you started. You do not have to stop where you are. There is no better time than now. There is no better person than you. Let’s move!'
      ]
    },
    {
      slug: 'why-we-move',
      title: 'Why We Move',
      excerpt:
        'We move for two big reasons: duty or chance. We move from, toward, for, and with. Your why gives your move power.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-02',
      tags: ['Why', 'Purpose'],
      content: [
        'People move for two big reasons. Some move because they must. Some move because they can. We move from, we move toward, we move for, and we move with.',
        'Move from what holds you back. Move toward what calls you forward. Move for what matters. Move with the people who help you grow.',
        'This is the human why: we want our lives to count. We want our lives to have meaning. This is called significance.'
      ]
    },
    {
      slug: 'paradox-of-purpose',
      title: 'The Paradox of Purpose',
      excerpt:
        'Purpose is not your job. Purpose is your reason. Who you are should guide what you do, not the other way around.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-03',
      tags: ['Purpose', 'Identity'],
      content: [
        'Purpose is not what you do. Purpose is why you were made. Your job can change. Your purpose does not.',
        'Do not let what you do tell you who you are. Let who you are tell you what to do.',
        'Purpose is not what you strive for — it is where you start from.'
      ]
    },
    {
      slug: 'posture-of-purpose',
      title: 'The Posture of Purpose',
      excerpt:
        'Make moves — but do not let your moves make you. Stay true to who you are as you grow.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-04',
      tags: ['Purpose', 'Character'],
      content: [
        'Make moves. Try new things. Take brave steps. But do not let your moves make you. Your worth is not your wins.',
        'Keep your heart steady while your hands work. Grow on the inside while you build on the outside.'
      ]
    },
    {
      slug: 'four-moves',
      title: 'Four Moves: Out, Up, Forward, On',
      excerpt:
        'These four simple moves help you grow. Move Out. Move Up. Move Forward. Move On.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-05',
      tags: ['Framework', 'Growth'],
      content: [
        'Move Out: Step out of what keeps you small.',
        'Move Up: Learn, improve, and raise your view.',
        'Move Forward: Take the next right step, even if it is small.',
        'Move On: Let go of what you cannot keep. Make room for what is next.'
      ]
    },
    {
      slug: 'anatomy-of-a-movement',
      title: 'The Anatomy of a Movement: Head, Heart, Hands, Habits, Halo',
      excerpt:
        'Change starts inside and spills out. Think it. Feel it. Do it. Repeat it. Share it.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-06',
      tags: ['Framework', 'Movement'],
      content: [
        'Head (clarity): What you believe and why it matters. “As a man thinks so is he.”',
        'Heart (conviction): Why you care enough to act when it is hard. “Add value to that which you value, care for that which you claim to care about.”',
        'Hands (practice): The small, repeatable moves.',
        'Habits (cadence): When those moves happen (daily or weekly).',
        'Halo (spillover): How others sense it and join.'
      ]
    },
    {
      slug: 'now-is-the-time',
      title: 'Now Is the Time. You Are the One.',
      excerpt:
        'The tragedy is to move but never see movement. Let today be the day you start your movement.',
      coverImageUrl: '/assets/movement-leader.jpg',
      publishedAt: '2025-01-07',
      tags: ['Action', 'Encouragement'],
      content: [
        'The tragedy of life is to do but not be, to survive but not thrive, to exist but not live, to move but never see a movement take place in your life.',
        'If you want to see a movement take place, you must first move. Now is the time. This is the place. You are the one to be what you were made to be: a movement.'
      ]
    }
  ]
}

async function ensureStore() {
  try {
    await fs.access(STORE_PATH)
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify(seedPosts(), null, 2), 'utf8')
  }
}

async function readStore() {
  await ensureStore()
  const raw = await fs.readFile(STORE_PATH, 'utf8')
  return JSON.parse(raw)
}

async function writeStore(posts) {
  await fs.writeFile(STORE_PATH, JSON.stringify(posts, null, 2), 'utf8')
}

function slugify(input = '') {
  return input
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function validatePost(body) {
  if (!body || typeof body !== 'object') return 'Invalid body'
  if (!body.title || typeof body.title !== 'string') return 'Missing title'
  if (!body.excerpt || typeof body.excerpt !== 'string') return 'Missing excerpt'
  if (!Array.isArray(body.content) || body.content.length === 0) return 'Missing content paragraphs'
  return null
}

export default async function handler(req, res) {
  const method = req.method || 'GET'

  if (method === 'GET') {
    try {
      const posts = await readStore()
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      res.setHeader('Content-Type', 'application/json')
      return res.status(200).send(JSON.stringify(posts))
    } catch (err) {
      return res.status(500).json({ error: 'Failed to load posts' })
    }
  }

  if (method === 'POST') {
    const adminToken = process.env.BLOG_ADMIN_TOKEN
    if (adminToken && req.headers['x-admin-token'] !== adminToken) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    let body = req.body
    if (!body) {
      try {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        const raw = Buffer.concat(chunks).toString('utf8')
        body = raw ? JSON.parse(raw) : null
      } catch {
        return res.status(400).json({ error: 'Invalid JSON' })
      }
    }

    const validationError = validatePost(body)
    if (validationError) return res.status(400).json({ error: validationError })

    try {
      const posts = await readStore()
      const nowIso = new Date().toISOString().slice(0, 10)
      const slug = body.slug ? slugify(body.slug) : slugify(body.title)
      if (posts.some((p) => p.slug === slug)) {
        return res.status(409).json({ error: 'Slug already exists' })
      }

      const post = {
        slug,
        title: body.title,
        excerpt: body.excerpt,
        coverImageUrl: body.coverImageUrl || '/assets/movement-leader.jpg',
        publishedAt: body.publishedAt || nowIso,
        tags: Array.isArray(body.tags) ? body.tags : [],
        content: body.content,
      }

      const updated = [post, ...posts]
      await writeStore(updated)
      return res.status(201).json(post)
    } catch (err) {
      return res.status(500).json({ error: 'Failed to save post' })
    }
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: 'Method not allowed' })
}

