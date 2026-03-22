import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects')

export interface ProjectMeta {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  date: string
}

export interface Project extends ProjectMeta {
  content: string
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf8')
      const { data } = matter(raw)

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        tags: (data.tags as string[]) ?? [],
        github: data.github as string | undefined,
        demo: data.demo as string | undefined,
        date: data.date as string,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getProject(slug: string): Project | null {
  const filepath = path.join(PROJECTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    github: data.github as string | undefined,
    demo: data.demo as string | undefined,
    date: data.date as string,
    content,
  }
}
