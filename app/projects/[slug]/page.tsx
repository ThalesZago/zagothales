import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllProjects, getProject } from '@/lib/projects'
import MDXContent from '@/components/MDXContent'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Back link */}
      <Link
        href="/projects"
        style={{ color: 'var(--muted)' }}
        className="text-sm inline-flex items-center gap-1.5 mb-10 hover:opacity-70 transition-opacity"
      >
        ← All projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3">
          {project.title}
        </h1>
        <p style={{ color: 'var(--muted)' }} className="text-base mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: 'var(--border)',
                color: 'var(--muted)',
              }}
              className="text-xs px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-5 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
              className="font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              View on GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
              className="font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Live Demo →
            </a>
          )}
        </div>
      </header>

      <hr style={{ borderColor: 'var(--border)' }} className="mb-10" />

      {/* Content */}
      <MDXContent source={project.content} />
    </article>
  )
}
