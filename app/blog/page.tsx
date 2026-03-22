import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on software development, tools, and the craft of building.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p style={{ color: 'var(--muted)' }} className="mb-14 text-base">
        {posts.length} post{posts.length !== 1 ? 's' : ''} on software, code,
        and process.
      </p>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>No posts yet. Check back soon.</p>
      ) : (
        <ol
          className="divide-y"
          style={{ borderColor: 'var(--border)' }}
        >
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-7 hover:opacity-90 transition-opacity"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-lg leading-snug mb-1.5 group-hover:text-[color:var(--accent)] transition-colors">
                      {post.title}
                    </h2>
                    <p
                      style={{ color: 'var(--muted)' }}
                      className="text-sm mb-3 leading-relaxed line-clamp-2"
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: 'var(--accent-light)',
                            color: 'var(--accent)',
                          }}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right pt-0.5">
                    <time
                      style={{ color: 'var(--muted)' }}
                      dateTime={post.date}
                      className="text-xs whitespace-nowrap block"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span
                      style={{ color: 'var(--muted)' }}
                      className="text-xs mt-0.5 block"
                    >
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
