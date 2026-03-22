import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Thales Zago — background, skills, and experience as a Systems Architect.',
}

const SKILLS = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Git',
  'REST APIs',
  'GraphQL',
]

const TIMELINE = [
  { year: '2024 – present', role: 'Senior Developer', place: 'Company Name' },
  { year: '2022 – 2024', role: 'Full-Stack Developer', place: 'Previous Company' },
  { year: '2020 – 2022', role: 'Junior Developer', place: 'First Company' },
]

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold mb-2">About</h1>
      <p style={{ color: 'var(--muted)' }} className="mb-14 text-base">
        A bit about who I am and what I do.
      </p>

      {/* Bio */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-5">Biography</h2>
        <div
          style={{ color: 'var(--foreground)' }}
          className="space-y-4 text-base leading-relaxed"
        >
          <p>
            I&apos;m a software developer with a passion for building clean,
            purposeful products. I focus on the web — from backend APIs to
            polished user interfaces — and care deeply about code quality,
            developer experience, and the details that make software feel right.
          </p>
          <p>
            When I&apos;m not coding, I enjoy writing about what I&apos;m
            learning, exploring open-source projects, and occasionally tinkering
            with side projects that may or may not ever ship.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-5">Skills &amp; Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
              }}
              className="text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-7">Experience</h2>
        <ol
          className="relative border-l"
          style={{ borderColor: 'var(--border)' }}
        >
          {TIMELINE.map(({ year, role, place }) => (
            <li key={year} className="ml-6 mb-8 last:mb-0">
              <div
                className="absolute w-2.5 h-2.5 rounded-full -left-[5px] mt-1.5"
                style={{ background: 'var(--accent)' }}
              />
              <time
                style={{ color: 'var(--muted)' }}
                className="text-xs font-medium uppercase tracking-wider"
              >
                {year}
              </time>
              <h3 className="text-base font-semibold mt-0.5">{role}</h3>
              <p style={{ color: 'var(--muted)' }} className="text-sm">
                {place}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
