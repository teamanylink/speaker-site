import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { BLOG_POSTS } from '@/data/blog'

export default function BlogPost() {
  const { slug } = useParams()

  const fallbackPost = useMemo(() => BLOG_POSTS.find((p) => p.slug === slug), [slug])
  const [post, setPost] = React.useState(fallbackPost)

  React.useEffect(() => {
    let isMounted = true
    fetch(`/api/blog/${slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (!isMounted) return
        setPost(data)
      })
      .catch(() => {
        setPost(fallbackPost || null)
      })
    return () => {
      isMounted = false
    }
  }, [slug, fallbackPost])

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Post not found</h1>
        <p className="mt-3 text-gray-600">This post does not exist.</p>
        <Link className="mt-6 inline-block text-sm text-black underline" to="/blog">
          Back to blog
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Helmet>
        <title>{post.title} • The Movement Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="mb-6 text-xs uppercase tracking-wide text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString()}
      </div>
      <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-4">
        <img
          src={post.coverImageUrl}
          alt={post.title}
          className="aspect-[16/9] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="prose prose-zinc mt-8 max-w-none">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="text-lg leading-relaxed text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-10">
        <Link className="text-sm text-black underline" to="/blog">
          Back to blog
        </Link>
      </div>
    </article>
  )
}

