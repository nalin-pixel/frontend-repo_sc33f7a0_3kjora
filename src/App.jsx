import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(1200px_600px_at_90%_10%,rgba(59,130,246,0.2),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
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
