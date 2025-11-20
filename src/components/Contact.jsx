import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! We’ll get back to you within 24 hours.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please email hello@uistudio.dev')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_280px_at_20%_0%,rgba(168,85,247,0.18),transparent),radial-gradient(700px_280px_at_80%_0%,rgba(59,130,246,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tell us about your project</h2>
          <p className="mt-3 text-white/70">A few details help us prepare the right approach and team.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70">Company</label>
              <input type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Acme Inc." />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70">Project details</label>
              <textarea required rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Goals, timeline, budget..." />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-white/60">Prefer email? hello@uistudio.dev</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white">
              Send message
            </button>
          </div>

          {status && (
            <p className="mt-4 text-sm text-white/80">{status}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
