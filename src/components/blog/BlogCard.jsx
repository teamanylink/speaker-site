import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'

export default function BlogCard({ post }) {
  return (
    <Card className="group overflow-hidden border-gray-200 hover:shadow-xl transition-shadow rounded-2xl">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
          <img
            src={post.coverImageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="p-5">
          <div className="text-xs uppercase tracking-wide text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-gray-900">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags?.map((t) => (
              <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                {t}
              </span>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

