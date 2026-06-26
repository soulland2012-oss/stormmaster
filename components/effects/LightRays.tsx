'use client'

import { useEffect, useRef } from 'react'

interface LightRaysProps {
  rayCount?: number
  color?: string
  originY?: number
  widthScale?: number
  className?: string
}

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

const FAN_START = 0.04 * Math.PI
const FAN_SPAN  = 0.92 * Math.PI

export default function LightRays({
  rayCount = 16,
  color = 'rgba(255, 240, 180',
  originY = 0,
  widthScale = 1,
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

    const zoneW = FAN_SPAN / rayCount

    const rays = Array.from({ length: rayCount }, (_, i) => {
      const r = (n: number) => sr(i * 41 + n)
      // Each ray owns a zone; its starting angle is random within that zone
      const zoneCenter = FAN_START + (i + 0.5) * zoneW
      return {
        zoneCenter,
        angle:       zoneCenter + (r(1) - 0.5) * zoneW * 0.8,
        lastCycle:   -1,
        driftAmp:    (r(2) - 0.5) * 0.06,
        driftFreq:   0.0003 + r(3) * 0.0009,
        driftPhase:  r(4) * Math.PI * 2,
        halfWidth:   (0.005 + r(5) * r(5) * 0.07) * widthScale,
        length:      1.5 + r(6) * 0.9,
        maxOpacity:  0.10 + r(7) * 0.22,
        cycleLen:    Math.floor(100 + r(8) * 280),
        phaseOffset: Math.floor(r(9) * 700),
        fadeIn:      0.15 + r(10) * 0.15,
        fadeOut:     0.15 + r(11) * 0.15,
      }
    })

    let animId: number
    let t = 0

    const draw = () => {
      t += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx  = canvas.width  / 2
      const cy  = (originY / 100) * canvas.height
      const dim = canvas.height

      // ── Outer bloom ────────────────────────────────────────────────────────
      const bloomR = dim * 0.48
      const bloom  = ctx.createRadialGradient(cx, cy, 0, cx, cy, bloomR)
      bloom.addColorStop(0,    `${color}, 0.34)`)
      bloom.addColorStop(0.12, `${color}, 0.18)`)
      bloom.addColorStop(0.4,  `${color}, 0.06)`)
      bloom.addColorStop(1,    `${color}, 0)`)
      ctx.beginPath()
      ctx.arc(cx, cy, bloomR, 0, Math.PI * 2)
      ctx.fillStyle = bloom
      ctx.fill()

      // ── Core (bigger) ──────────────────────────────────────────────────────
      const coreR = dim * 0.13
      const core  = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR)
      core.addColorStop(0,    `rgba(255,255,255, 0.98)`)
      core.addColorStop(0.20, `rgba(255,255,210, 0.80)`)
      core.addColorStop(0.50, `${color}, 0.38)`)
      core.addColorStop(1,    `${color}, 0)`)
      ctx.beginPath()
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2)
      ctx.fillStyle = core
      ctx.fill()

      // Inner flicker
      const flicker = 0.6 + 0.4 * Math.sin(t * 0.08)
      const pin = ctx.createRadialGradient(cx, cy, 0, cx, cy, dim * 0.03)
      pin.addColorStop(0,   `rgba(255,255,255, ${flicker})`)
      pin.addColorStop(0.5, `rgba(255,252,200, ${flicker * 0.5})`)
      pin.addColorStop(1,   `rgba(255,255,255, 0)`)
      ctx.beginPath()
      ctx.arc(cx, cy, dim * 0.03, 0, Math.PI * 2)
      ctx.fillStyle = pin
      ctx.fill()

      // ── Rays ───────────────────────────────────────────────────────────────
      for (const ray of rays) {
        const rawTime  = t + ray.phaseOffset
        const cycleNum = Math.floor(rawTime / ray.cycleLen)
        const progress = (rawTime % ray.cycleLen) / ray.cycleLen

        // New cycle → new angle within THIS ray's zone only
        if (cycleNum !== ray.lastCycle) {
          ray.lastCycle = cycleNum
          ray.angle = ray.zoneCenter + (Math.random() - 0.5) * zoneW * 0.8
        }

        let opacity: number
        if (progress < ray.fadeIn) {
          opacity = (progress / ray.fadeIn) * ray.maxOpacity
        } else if (progress < 1 - ray.fadeOut) {
          opacity = ray.maxOpacity
        } else {
          opacity = ((1 - progress) / ray.fadeOut) * ray.maxOpacity
        }
        if (opacity < 0.003) continue

        const angle = ray.angle
          + ray.driftAmp * Math.sin(t * ray.driftFreq + ray.driftPhase)

        const reach = canvas.height * ray.length
        const hw    = ray.halfWidth
        const x1 = cx + Math.cos(angle - hw) * reach
        const y1 = cy + Math.sin(angle - hw) * reach
        const x2 = cx + Math.cos(angle + hw) * reach
        const y2 = cy + Math.sin(angle + hw) * reach
        const mx = (x1 + x2) / 2
        const my = (y1 + y2) / 2

        // Glow pass
        ctx.shadowBlur  = 28
        ctx.shadowColor = `${color}, ${opacity * 0.7})`
        const glowGrad = ctx.createLinearGradient(cx, cy, mx, my)
        glowGrad.addColorStop(0,   `${color}, ${opacity * 0.55})`)
        glowGrad.addColorStop(0.3, `${color}, ${opacity * 0.25})`)
        glowGrad.addColorStop(1,   `${color}, 0)`)
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.closePath()
        ctx.fillStyle = glowGrad
        ctx.fill()
        ctx.shadowBlur = 0

        // Sharp core of ray
        const sharpHw = hw * 0.25
        const sx1 = cx + Math.cos(angle - sharpHw) * reach
        const sy1 = cy + Math.sin(angle - sharpHw) * reach
        const sx2 = cx + Math.cos(angle + sharpHw) * reach
        const sy2 = cy + Math.sin(angle + sharpHw) * reach
        const sharpGrad = ctx.createLinearGradient(cx, cy, mx, my)
        sharpGrad.addColorStop(0,   `rgba(255,255,220, ${opacity * 0.8})`)
        sharpGrad.addColorStop(0.2, `${color}, ${opacity * 0.5})`)
        sharpGrad.addColorStop(0.7, `${color}, ${opacity * 0.15})`)
        sharpGrad.addColorStop(1,   `${color}, 0)`)
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(sx1, sy1)
        ctx.lineTo(sx2, sy2)
        ctx.closePath()
        ctx.fillStyle = sharpGrad
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
