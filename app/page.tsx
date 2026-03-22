import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thales Zago',
  description:
    'Personal portfolio and blog of Thales Zago, a Systems Architect building clean and useful things for the web.',
}

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
      {/* Hero */}
      <section className="mb-20">
        <p
          style={{ color: 'var(--accent)' }}
          className="text-sm font-medium mb-4 tracking-widest uppercase"
        >
          I work with tech ¯\_(ツ)_/¯
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight">
          Hi, I&apos;m{' '}
          <span style={{ color: 'var(--accent)' }}>Thales</span>
        </h1>
        <p
          style={{ color: 'var(--muted)' }}
          className="text-xl leading-relaxed mb-10 max-w-lg"
        >
          My mind developed here. 
          Keeping the passion of development alive while building clean and useful things for the web.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap gap-5 text-sm font-medium">
          {[
            { href: 'https://github.com/ThalesZago', label: 'GitHub', external: true },
            { href: 'https://linkedin.com/in/thales-zago-de-souza-091900150', label: 'LinkedIn', external: true },
            { href: 'mailto:zagothales@gmail.com', label: 'Email', external: false },
          ].map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{ color: 'var(--foreground)' }}
              className="underline underline-offset-4 hover:opacity-50 transition-opacity"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Quick-nav cards */}
      <section className="grid sm:grid-cols-2 gap-4">
        {[
          {
            href: '/projects',
            title: 'Projects',
            desc: 'Things I have built — side projects, experiments, and tools.',
          },
          {
            href: '/blog',
            title: 'Blog',
            desc: 'Thoughts on code, tools, and the process of building software.',
          },
        ].map(({ href, title, desc }) => (
          <Link
            key={href}
            href={href}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
            }}
            className="group rounded-xl p-6 flex flex-col gap-2 hover:border-[color:var(--accent)] transition-colors"
          >
            <h2 className="font-semibold text-base group-hover:text-[color:var(--accent)] transition-colors">
              {title} →
            </h2>
            <p style={{ color: 'var(--muted)' }} className="text-sm leading-relaxed">
              {desc}
            </p>
          </Link>
        ))}
      </section>
    </div>
  )
}

