import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BLOG_POSTS, sortPostsByDate } from '@/data/blog'
import BlogList from '@/components/blog/BlogList'

export default function BlogIndex() {
  const [posts, setPosts] = React.useState(sortPostsByDate(BLOG_POSTS))

  React.useEffect(() => {
    let isMounted = true
    fetch('/api/blog')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (!isMounted || !Array.isArray(data)) return
        setPosts(sortPostsByDate(data))
      })
      .catch(() => {
        // Fallback to seeded posts already shown
      })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Helmet>
        <title>The Movement Blog</title>
        <meta name="description" content="Simple ideas to help you move out, move up, move forward, and move on." />
      </Helmet>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          The Movement Blog
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Simple ideas to help you move out, move up, move forward, and move on.
        </p>
      </div>
      <div className="mt-10">
        <BlogList posts={posts} />
      </div>
    </section>
  )
}

