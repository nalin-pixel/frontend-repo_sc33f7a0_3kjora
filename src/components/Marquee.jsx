import { useMemo } from 'react'

function Marquee({ items = [], speed = 35 }) {
  const doubled = useMemo(() => [...items, ...items], [items])
  return (
    <div className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.02] to-transparent" />
      <div className="flex gap-10 animate-[marquee_linear_infinite]" style={{
        '--duration': `${speed}s`
      }}>
        {doubled.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span className="text-sm tracking-wide uppercase">{item}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-[marquee_linear_infinite] { animation: marquee var(--duration) linear infinite; width: max-content; }
      `}</style>
    </div>
  )
}

export default Marquee
