'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  drift: number
  life: number
  maxLife: number
}

interface ParticleFieldProps {
  count?: number
  r?: number
  g?: number
  b?: number
  className?: string
}

export default function ParticleField({
  count = 55,
  r = 212,
  g = 175,
  b = 55,
  className = '',
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    Math.random() * 1.8 + 0.4,
      speed:   Math.random() * 0.45 + 0.15,
      opacity: Math.random() * 0.55 + 0.15,
      drift:   (Math.random() - 0.5) * 0.25,
      life:    Math.random() * 200,
      maxLife: 180 + Math.random() * 120,
    }))

    let animId: number
    let frame = 0

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.y    -= p.speed
        p.x    += p.drift
        p.life += 1

        if (p.life > p.maxLife) {
          p.life    = 0
          p.y       = canvas.height + 10
          p.x       = Math.random() * canvas.width
          p.size    = Math.random() * 1.8 + 0.4
          p.speed   = Math.random() * 0.45 + 0.15
          p.opacity = Math.random() * 0.55 + 0.15
          p.drift   = (Math.random() - 0.5) * 0.25
          p.maxLife = 180 + Math.random() * 120
        }

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }

        const progress = p.life / p.maxLife
        const fade = progress < 0.1
          ? progress / 0.1
          : progress > 0.85
            ? (1 - progress) / 0.15
            : 1

        ctx.globalAlpha = p.opacity * fade
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${r},${g},${b})`
        ctx.fill()

        if (p.size > 1.2 && frame % 3 === 0) {
          ctx.globalAlpha = p.opacity * fade * 0.3
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgb(${r},${g},${b})`
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [count, r, g, b])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
