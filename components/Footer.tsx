export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}
      className="mt-auto"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Thales Zago. All rights reserved.</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/ThalesZago"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/thales-zago-de-souza-091900150"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zagothales@gmail.com"
            className="hover:opacity-60 transition-opacity"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
