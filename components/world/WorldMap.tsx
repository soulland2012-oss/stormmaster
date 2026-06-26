'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// Source map canvas dimensions (original image size)
const MAP_W = 688
const MAP_H = 418

interface TerritoryDef {
  id: string
  name: string
  file: string
  color: string      // hex fill
  glowColor: string  // hover glow
  lx: number         // label X as % of MAP_W
  ly: number         // label Y as % of MAP_H
  fs?: number        // font-size override
}

// Declared bottom→top (last = rendered on top, checked first for hits)
const TERRITORIES: TerritoryDef[] = [
  { id: 'phenridia',   name: 'Фенридия',                    file: 'Phenridia.png',       color: '#5a4a08', glowColor: '#f5d030', lx: 24, ly: 46 },
  { id: 'orcs',        name: 'Орки',                        file: 'orcs.png',             color: '#1a3a14', glowColor: '#55cc44', lx: 83, ly: 49 },
  { id: 'aliance',     name: 'Альянс',                      file: 'aliance.png',          color: '#3a1560', glowColor: '#cc88ff', lx: 64, ly: 23 },
  { id: 'dvarflandia', name: 'Дворфландия',                 file: 'Dvarflandia.png',      color: '#3c3020', glowColor: '#c8b080', lx: 62, ly: 44 },
  { id: 'whiteland',   name: 'Белые Земли',                 file: 'whiteland.png',        color: '#1e3848', glowColor: '#aaccee', lx: 37, ly: 32 },
  { id: 'ukl',         name: 'Объединённая Коалиция Людей', file: 'UKL.png',              color: '#14243a', glowColor: '#7799cc', lx: 54, ly: 71, fs: 8 },
  { id: 'elfs',        name: 'Эльфы',                       file: 'Elfs.png',             color: '#1e3e10', glowColor: '#88ee44', lx: 33, ly: 65 },
  { id: 'magi',        name: 'Объединение Магов',           file: 'Magi.png',             color: '#0a3020', glowColor: '#22ddaa', lx: 44, ly: 70, fs: 9 },
  { id: 'sindikat',    name: 'Синдикат Крестов',            file: 'criest syndicate.png', color: '#004848', glowColor: '#22ddcc', lx: 40, ly: 57, fs: 8 },
  { id: 'bubn',        name: 'Бубновый Дом',                file: 'Bubn.png',             color: '#6a1414', glowColor: '#ff5544', lx: 9,  ly: 69, fs: 9 },
  { id: 'dragons',     name: 'Драконы',                     file: 'Dragons.png',          color: '#5a0a0a', glowColor: '#ff3311', lx: 89, ly: 67 },
]

function hexToRgb(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  }
}

export default function WorldMap() {
  const [hovered, setHovered]   = useState<string | null>(null)
  const [dataUrls, setDataUrls] = useState<Record<string, string>>({})
  const hitDataRef               = useRef<Map<string, Uint8ClampedArray>>(new Map())
  const containerRef             = useRef<HTMLDivElement>(null)

  // ── Preprocess all PNGs: white→transparent, recolor to solid ──────────────
  useEffect(() => {
    const results: Record<string, string> = {}
    let done = 0

    function finish() {
      done++
      if (done === TERRITORIES.length) setDataUrls({ ...results })
    }

    TERRITORIES.forEach(t => {
      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.onerror = finish

      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width  = MAP_W
        canvas.height = MAP_H
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0, MAP_W, MAP_H)

        const imageData = ctx.getImageData(0, 0, MAP_W, MAP_H)
        const d = imageData.data
        const fc = hexToRgb(t.color)
        // Compact hit-test map: 1 byte per pixel
        const hit = new Uint8ClampedArray(MAP_W * MAP_H)

        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3]
          const pi = i >> 2

          // Already transparent
          if (a < 32) { hit[pi] = 0; continue }

          // White (or near-white) background → transparent
          if (r > 248 && g > 248 && b > 248) {
            d[i + 3] = 0; hit[pi] = 0; continue
          }

          // Territory pixel: recolor preserving luminance for border structure
          const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255
          const sc  = 0.35 + lum * 0.65
          d[i]     = Math.min(255, Math.round(fc.r * sc))
          d[i + 1] = Math.min(255, Math.round(fc.g * sc))
          d[i + 2] = Math.min(255, Math.round(fc.b * sc))
          d[i + 3] = 255
          hit[pi]  = 1
        }

        ctx.putImageData(imageData, 0, 0)
        hitDataRef.current.set(t.id, hit)
        results[t.id] = canvas.toDataURL()
        finish()
      }

      img.src = `/images/map/${encodeURIComponent(t.file)}`
    })
  }, [])

  // ── Pixel-perfect hover detection ─────────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const px = Math.floor(((e.clientX - rect.left) / rect.width)  * MAP_W)
    const py = Math.floor(((e.clientY - rect.top)  / rect.height) * MAP_H)

    if (px < 0 || px >= MAP_W || py < 0 || py >= MAP_H) {
      setHovered(null)
      return
    }

    const pi = py * MAP_W + px
    for (let i = TERRITORIES.length - 1; i >= 0; i--) {
      const hit = hitDataRef.current.get(TERRITORIES[i].id)
      if (hit?.[pi]) { setHovered(TERRITORIES[i].id); return }
    }
    setHovered(null)
  }, [])

  const ready = Object.keys(dataUrls).length === TERRITORIES.length

  return (
    // Outer wrapper gives 10px headroom above for the float animation
    <div
      style={{
        paddingTop: '10px',
        background: 'radial-gradient(ellipse 80% 60% at 40% 50%, #0e1828 0%, #06101a 60%, #040810 100%)',
        border: '1px solid rgba(212,175,55,0.18)',
        borderRadius: '2px',
        boxShadow: '0 0 70px rgba(0,0,0,0.85), inset 0 0 40px rgba(0,0,0,0.3)',
      }}
    >
      <div
        ref={containerRef}
        className="relative w-full"
        style={{
          aspectRatio: `${MAP_W} / ${MAP_H}`,
          cursor: hovered ? 'pointer' : 'default',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Territory image layers */}
        {TERRITORIES.map((t, i) => {
          const on  = hovered === t.id
          const url = dataUrls[t.id]
          if (!url) return null

          return (
            <div
              key={t.id}
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: on ? 20 : i + 1,
                transform: on ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.22s ease, filter 0.22s ease',
                filter: on
                  ? `drop-shadow(0 0 8px ${t.glowColor}cc) drop-shadow(0 0 18px ${t.glowColor}66) drop-shadow(0 5px 10px rgba(0,0,0,0.7))`
                  : 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
              }}
            >
              <img
                src={url}
                alt=""
                aria-hidden
                draggable={false}
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: on ? 0.95 : 0.72,
                  transition: 'opacity 0.22s ease',
                }}
              />
            </div>
          )
        })}

        {/* Territory name labels */}
        {TERRITORIES.map(t => {
          const on = hovered === t.id
          const fs = t.fs ?? 12
          return (
            <div
              key={`lbl-${t.id}`}
              className="absolute pointer-events-none select-none"
              style={{
                left: `${t.lx}%`,
                top:  `${t.ly}%`,
                zIndex: 30,
                transform: `translate(-50%, -50%)${on ? ' translateY(-5px)' : ''}`,
                transition: 'transform 0.22s ease',
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: `${fs}px`,
                fontWeight: on ? 'bold' : 'normal',
                color: on ? t.glowColor : 'rgba(245,235,215,0.55)',
                letterSpacing: on ? '0.06em' : '0.02em',
                textShadow: on
                  ? `0 0 5px ${t.glowColor}, 0 0 10px ${t.glowColor}, 0 0 20px ${t.glowColor}88`
                  : '0 1px 4px rgba(0,0,0,0.95)',
                whiteSpace: 'nowrap',
              }}
            >
              {t.name}
            </div>
          )
        })}

        {/* Loading state */}
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span style={{
              color: 'rgba(212,175,55,0.4)',
              fontFamily: 'Georgia, serif',
              fontSize: '11px',
              letterSpacing: '0.18em',
            }}>
              ЗАГРУЗКА…
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
