import { useEffect, useState } from 'react'

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [visible])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    >
      <div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 0.25 : 0,
          background:
            'radial-gradient(200px 200px at center, rgba(147,51,234,0.35), rgba(59,130,246,0.0))',
          filter: 'blur(20px)'
        }}
      />
    </div>
  )
}

export default CursorGlow
