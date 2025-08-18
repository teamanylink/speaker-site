import React from 'react'
import BlogCard from './BlogCard'

export default function BlogList({ posts }) {
  if (!posts?.length) {
    return <p className="text-center text-gray-600">No posts yet.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

