import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of projects I have built as a software developer — side projects, experiments, and tools.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p style={{ color: 'var(--muted)' }} className="mb-14 text-base">
        Things I&apos;ve built — side projects, experiments, and tools.
      </p>

      {projects.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>No projects yet. Check back soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
              className="group rounded-xl p-5 flex flex-col gap-3 hover:border-[color:var(--accent)] transition-colors"
            >
              <div>
                <h2 className="font-semibold text-base mb-1.5 group-hover:text-[color:var(--accent)] transition-colors">
                  {project.title}
                </h2>
                <p
                  style={{ color: 'var(--muted)' }}
                  className="text-sm leading-relaxed line-clamp-3"
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'var(--border)',
                      color: 'var(--muted)',
                    }}
                    className="text-xs px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex gap-4 text-xs font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {project.github && <span>GitHub →</span>}
                {project.demo && <span>Live demo →</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
