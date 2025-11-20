import { Code2, Palette, Smartphone, Rocket } from 'lucide-react'

function Services() {
  const items = [
    {
      icon: Palette,
      title: 'Brand & UI Design',
      desc: 'Design systems, product UI, and brand identities that feel premium and unmistakable.'
    },
    {
      icon: Code2,
      title: 'Web Apps',
      desc: 'Blazing fast React frontends with robust APIs. Clean code, accessible, and scalable.'
    },
    {
      icon: Smartphone,
      title: 'Mobile & 3D',
      desc: 'Cross‑platform experiences, interactive 3D, and motion for immersive product stories.'
    },
    {
      icon: Rocket,
      title: 'Launch & Growth',
      desc: 'Performance, SEO, analytics and iteration to ship with confidence and learn fast.'
    }
  ]

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(168,85,247,0.12),transparent),radial-gradient(800px_400px_at_80%_70%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Capabilities</h2>
          <p className="mt-3 text-white/70">Strategy, visuals, and code working together from day one.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 text-purple-300 ring-1 ring-inset ring-white/15">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
