'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header
      style={{
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}
      className="sticky top-0 z-10 backdrop-blur-sm"
    >
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          style={{ color: 'var(--foreground)' }}
          className="font-semibold text-sm tracking-tight hover:opacity-60 transition-opacity"
        >
          thales.zago
        </Link>

        <ul className="flex gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{ color: isActive ? 'var(--foreground)' : 'var(--muted)' }}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
