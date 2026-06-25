'use client'

import { useEffect, useRef } from 'react'

interface LightRaysProps {
  rayCount?: number
  color?: string
  originY?: number
  className?: string
}

export default function LightRays({
  rayCount = 8,
  color = 'rgba(255, 240, 180',
  originY = 0,
  className = '',
}: LightRaysProps) {
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

    const rays = Array.from({ length: rayCount }, (_, i) => ({
      angle:     ((i / rayCount) * Math.PI * 2 - Math.PI / 2) * 0.6 + Math.PI / 2,
      width:     Math.random() * 80 + 40,
      opacity:   Math.random() * 0.08 + 0.03,
      speed:     Math.random() * 0.0008 + 0.0003,
      phase:     Math.random() * Math.PI * 2,
    }))

    let animId: number
    let t = 0

    const draw = () => {
      t += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = (originY / 100) * canvas.height

      for (const ray of rays) {
        const currentAngle = ray.angle + Math.sin(t * ray.speed + ray.phase) * 0.08
        const halfW = (ray.width / 2 / canvas.width) * Math.PI

        const x1 = cx + Math.cos(currentAngle - halfW) * canvas.height * 2
        const y1 = cy + Math.sin(currentAngle - halfW) * canvas.height * 2
        const x2 = cx + Math.cos(currentAngle + halfW) * canvas.height * 2
        const y2 = cy + Math.sin(currentAngle + halfW) * canvas.height * 2

        const pulse = ray.opacity * (0.7 + 0.3 * Math.sin(t * ray.speed * 2 + ray.phase))

        const grad = ctx.createLinearGradient(cx, cy, (x1 + x2) / 2, (y1 + y2) / 2)
        grad.addColorStop(0,   `${color}, ${pulse})`)
        grad.addColorStop(0.4, `${color}, ${pulse * 0.5})`)
        grad.addColorStop(1,   `${color}, 0)`)

        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [rayCount, color, originY])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
