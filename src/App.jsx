import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white selection:bg-purple-500/30">
      {/* ambient washes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.22),transparent),radial-gradient(1200px_600px_at_90%_10%,rgba(59,130,246,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* interactive cursor glow */}
      <CursorGlow />

      <Navbar />

      <main>
        <Hero />

        {/* marquee strip */}
        <section aria-label="marquee" className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Marquee items={[
              'Product Design',
              'Web Apps',
              'Branding',
              '3D & Motion',
              'Design Systems',
              'AI Interfaces',
              'Marketing Sites',
              'Accessibility',
            ]} speed={40} />
          </div>
        </section>

        <Services />
        <Work />
        <Process />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-white/60">© {new Date().getFullYear()} UI studio. All rights reserved.</p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#process" className="hover:text-white">Process</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
