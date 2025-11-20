import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mt-4 rounded-2xl border backdrop-blur supports-[backdrop-filter]:bg-white/5 transition-all ${
            scrolled
              ? 'border-white/15 bg-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
              : 'border-white/10 bg-white/5'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                <Sparkles className="h-5 w-5" />
                <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/20" />
              </div>
              <span className="text-lg font-semibold tracking-tight">UI studio</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a href="#contact" className="relative inline-flex items-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] transition-transform hover:scale-[1.02]">
                Start a project
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="block md:hidden text-white/80">
              {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
