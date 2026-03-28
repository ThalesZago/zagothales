import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import 'highlight.js/styles/atom-one-dark.css'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
