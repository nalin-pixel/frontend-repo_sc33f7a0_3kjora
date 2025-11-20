import { ArrowRight, CheckCircle2, Lightbulb, Rocket, Wrench } from 'lucide-react'

function Step({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 text-purple-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white">{title}</h4>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  )
}

function Process() {
  const steps = [
    { icon: Lightbulb, title: 'Discovery', desc: 'Workshops to understand goals, users, and success metrics.' },
    { icon: Wrench, title: 'Design & Build', desc: 'Rapid iterations across UI, motion, and code with weekly demos.' },
    { icon: CheckCircle2, title: 'QA', desc: 'Accessibility, performance, and reliability checks throughout.' },
    { icon: Rocket, title: 'Launch', desc: 'Smooth handoff, documentation, and ongoing support if needed.' },
  ]

  return (
    <section id="process" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_280px_at_15%_0%,rgba(168,85,247,0.2),transparent),radial-gradient(700px_280px_at_85%_0%,rgba(59,130,246,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How we work</h2>
          <p className="mt-3 text-white/70">A collaborative, transparent process focused on outcomes, not output.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <Step key={s.title} {...s} />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white">
            Let’s talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
