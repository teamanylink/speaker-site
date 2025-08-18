## Contact

- Website: https://denisestimon.com
- Speaking Inquiries: Available through website contact form

## Blog system

- Pages:
  - `/blog` – list of posts
  - `/blog/:slug` – single post page
- Content source: `src/data/blog.js` (seeded from Movement Sheet; third-grade reading level)
- API:
  - `GET /api/blog` – list posts
  - `GET /api/blog/[slug]` – get a post
  - `POST /api/blog` – create a post (send JSON `{ title, excerpt, content: string[], tags?: string[], coverImageUrl?: string, slug?: string, publishedAt?: string }`)
    - Optional header: `x-admin-token: <BLOG_ADMIN_TOKEN>` if you set `BLOG_ADMIN_TOKEN` env var
- Storage: Ephemeral JSON in `/tmp/blog.json` (replace with DB for persistence)