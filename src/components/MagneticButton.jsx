import { useRef } from 'react'

function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${relX * 0.08}px, ${relY * 0.08}px)`
  }
  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden rounded-xl px-5 py-3 font-semibold transition-transform will-change-transform ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600" />
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-40 mix-blend-screen" style={{
        background: 'radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.45), rgba(255,255,255,0))'
      }} />
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
    </button>
  )
}

export default MagneticButton
