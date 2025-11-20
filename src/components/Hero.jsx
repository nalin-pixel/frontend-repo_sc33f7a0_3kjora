import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28" id="home">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(168,85,247,0.18),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6))]" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              Interactive 3D. Premium UI. Real impact.
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              UI studio
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400"> — Design & Development</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              We craft bold, futuristic digital products. From brand to build, we blend
              world‑class design with solid engineering to ship experiences people love.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(99,102,241,0.7)] transition-transform hover:scale-[1.02]">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white">See our work</a>
            </div>
          </div>

          {/* Right: Spline 3D scene */}
          <div className="relative h-[380px] w-full sm:h-[480px] lg:h-[560px]">
            <div className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-blue-500/20 blur-2xl" />
            <div className="h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50">
              <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
