function Work() {
  const projects = [
    {
      title: 'Fintech Dashboard',
      tag: 'Product UI',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'AI Marketing Site',
      tag: 'Website',
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: '3D Launch Visuals',
      tag: 'Art Direction',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(168,85,247,0.1),transparent),radial-gradient(800px_400px_at_90%_80%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected work</h2>
            <p className="mt-3 text-white/70">A glimpse into products and visuals we recently shipped.</p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white sm:block">Work with us</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              </div>
              <div className="p-5">
                <span className="text-xs text-purple-300">{p.tag}</span>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
