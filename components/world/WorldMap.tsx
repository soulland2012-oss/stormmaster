'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const MAP_W = 1280
const MAP_H = 778
const N_SECTORS = 10   // angular sectors for edge-pillar detection
const N_FLIES   = 24   // fireflies per territory

interface Territory {
  id: string; name: string; file: string; color: string
}

const TERRITORIES: Territory[] = [
  { id: 'unknown',     name: 'Неизведанные Земли',         file: 'UnknownLands.webp',              color: '#884488' },
  { id: 'uninhabited', name: 'Безлюдные Земли',            file: 'UninhabitedLand.webp',           color: '#55ddcc' },
  { id: 'whiteland',   name: '',                           file: 'whiteland.webp',                 color: '#dddddd' },
  { id: 'fenridia',    name: 'Фенридия',                   file: 'Fenridia.webp',                  color: '#ffee22' },
  { id: 'orclands',    name: 'Земли Орков',                file: 'Orclands.webp',                  color: '#778833' },
  { id: 'forstelfs',   name: 'Королевство Лесных Эльфов', file: 'ForstElfKingdom.webp',           color: '#88ee44' },
  { id: 'highmagi',    name: 'Высшая Коллегия Чародеев',  file: 'Higher CollegeofMagicians.webp', color: '#44ff99' },
  { id: 'alliance',    name: 'Альянс',                     file: 'Alliance.webp',                  color: '#aa44ff' },
  { id: 'dvro',        name: 'Двофландия',                 file: 'Dvroflandia.webp',               color: '#aaaaaa' },
  { id: 'criest',      name: 'Синдикат Крестов',           file: 'CriestSyndicate.webp',           color: '#00cccc' },
  { id: 'ukl',         name: 'ЮКЛ',                       file: 'UKL.webp',                       color: '#cc99ff' },
  { id: 'diamonds',    name: 'Бубновый Дом',               file: 'HouseofDiamonds.webp',           color: '#ff4444' },
  { id: 'order',       name: 'Волевой Орден',              file: 'OrderofWill.webp',               color: '#cccccc' },
  { id: 'dragonia',    name: 'Таладраххар',                file: 'Dragonia.webp',                  color: '#ff7722' },
]

interface EdgePoint {
  x: number; y: number
  delay: number     // random 0–2s
  dur:   number     // random 1.1–2.4s
  ph:    number     // pillar height as % of map height (random 8–20%)
  thick: number     // pillar width px (random 1.5–4)
}

interface Firefly {
  x: number; y: number   // % coords, inside territory
  delay: number           // random 0–5s
  dur:   number           // random 0.9–2.5s
  dx:    number           // horizontal drift px
  size:  number           // dot radius px
}

interface TerritoryData {
  hit:        Uint8ClampedArray
  centroid:   { x: number; y: number }
  edgePoints: EdgePoint[]
  fireflies:  Firefly[]
}

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [ready,   setReady]   = useState(false)
  const dataRef      = useRef<Map<string, TerritoryData>>(new Map())
  const containerRef = useRef<HTMLDivElement>(null)
  const doneRef      = useRef(0)

  useEffect(() => {
    const total = TERRITORIES.length

    TERRITORIES.forEach(t => {
      const img = new window.Image()
      img.crossOrigin = 'anonymous'

      const finish = () => { if (++doneRef.current === total) setReady(true) }
      img.onerror = finish

      img.onload = () => {
        const c = document.createElement('canvas')
        c.width = MAP_W; c.height = MAP_H
        const ctx = c.getContext('2d')!
        ctx.drawImage(img, 0, 0, MAP_W, MAP_H)
        const { data } = ctx.getImageData(0, 0, MAP_W, MAP_H)

        // ── Pass 1: hit map + centroid ─────────────────────────────────
        const hit = new Uint8ClampedArray(MAP_W * MAP_H)
        let sx = 0, sy = 0, n = 0

        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] > 32) {
            const pi = i >> 2
            hit[pi] = 1
            sx += pi % MAP_W
            sy += Math.floor(pi / MAP_W)
            n++
          }
        }

        const cxPx    = n > 0 ? sx / n : MAP_W / 2
        const cyPx    = n > 0 ? sy / n : MAP_H / 2
        const centroid = { x: cxPx / MAP_W * 100, y: cyPx / MAP_H * 100 }

        // ── Pass 2: edge detection + interior sampling ─────────────────
        // Sample interior pixels on a grid (~5px spacing) for firefly spawn
        const stride = 5
        const buckets    = new Array<{ x: number; y: number } | null>(N_SECTORS).fill(null)
        const bucketD2   = new Float64Array(N_SECTORS)
        const interiorPx: [number, number][] = []

        for (let y = 1; y < MAP_H - 1; y++) {
          for (let x = 1; x < MAP_W - 1; x++) {
            const pi = y * MAP_W + x
            if (!hit[pi]) continue

            const isBorder = !hit[pi - 1] || !hit[pi + 1] || !hit[pi - MAP_W] || !hit[pi + MAP_W]

            if (isBorder) {
              // Assign to angular sector; keep outermost pixel per sector
              const dx = x - cxPx, dy = y - cyPx
              const d2 = dx * dx + dy * dy
              const angle = Math.atan2(dy, dx)                   // -π … π
              const b = Math.min(
                N_SECTORS - 1,
                Math.max(0, Math.floor((angle + Math.PI) / (2 * Math.PI) * N_SECTORS))
              )
              if (buckets[b] === null || d2 > bucketD2[b]) {
                buckets[b] = { x: x / MAP_W * 100, y: y / MAP_H * 100 }
                bucketD2[b] = d2
              }
            } else if (y % stride === 0 && x % stride === 0) {
              interiorPx.push([x, y])
            }
          }
        }

        // Edge pillars — each with fully random animation params
        const edgePoints: EdgePoint[] = buckets
          .filter((b): b is { x: number; y: number } => b !== null)
          .map(ep => ({
            ...ep,
            delay: Math.random() * 2.2,
            dur:   1.0 + Math.random() * 1.2,
            ph:    5  + Math.random() * 7,    // 5–12% height max
            thick: 1  + Math.random() * 1.5,  // 1–2.5px — thin beam
          }))

        // Fireflies — random interior positions, fully chaotic timing
        const fireflies: Firefly[] = Array.from({ length: N_FLIES }, () => {
          const p = interiorPx.length > 0
            ? interiorPx[Math.floor(Math.random() * interiorPx.length)]
            : [cxPx, cyPx] as [number, number]
          return {
            x:     p[0] / MAP_W * 100,
            y:     p[1] / MAP_H * 100,
            delay: Math.random() * 5.0,
            dur:   0.9 + Math.random() * 1.6,
            dx:    (Math.random() - 0.5) * 32,
            size:  1.5 + Math.random() * 2.5,
          }
        })

        dataRef.current.set(t.id, { hit, centroid, edgePoints, fireflies })
        finish()
      }

      img.src = `/images/map/${encodeURIComponent(t.file)}`
    })
  }, [])

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = containerRef.current?.getBoundingClientRect()
    if (!r) return
    const px = Math.floor(((e.clientX - r.left) / r.width)  * MAP_W)
    const py = Math.floor(((e.clientY - r.top)  / r.height) * MAP_H)
    if (px < 0 || px >= MAP_W || py < 0 || py >= MAP_H) { setHovered(null); return }
    const pi = py * MAP_W + px
    for (let i = TERRITORIES.length - 1; i >= 0; i--) {
      if (dataRef.current.get(TERRITORIES[i].id)?.hit[pi]) { setHovered(TERRITORIES[i].id); return }
    }
    setHovered(null)
  }, [])

  const ht = hovered ? TERRITORIES.find(t => t.id === hovered) ?? null : null
  const hd = hovered ? dataRef.current.get(hovered) ?? null : null

  return (
    <>
      <style>{`
        @keyframes sm-pillar {
          0%   { transform: scaleY(0);  opacity: 0;   }
          15%  { opacity: 1; }
          68%  { transform: scaleY(1);  opacity: 0.7; }
          100% { transform: scaleY(1);  opacity: 0;   }
        }
        @keyframes sm-fly {
          0%   { transform: translate(0, 0) scale(1);                   opacity: 0; }
          18%  { opacity: 1; }
          100% { transform: translate(var(--dx), -52px) scale(0.1);    opacity: 0; }
        }
      `}</style>

      {/*
        max-width uses viewport height to ensure the map+namebar fits on screen:
        map_width = map_height × (1280/778 ≈ 1.646)
        we want map_height ≤ 63vh  →  max-width = min(100%, 63vh × 1.646)
      */}
      <div style={{
        maxWidth:     'min(100%, calc(74vh * 1.646))',
        margin:       '0 auto',
        paddingTop:   12,
        background:   'radial-gradient(ellipse 80% 60% at 40% 50%, #0e1828 0%, #06101a 60%, #040810 100%)',
        border:       '1px solid rgba(212,175,55,0.18)',
        borderRadius: 2,
        boxShadow:    '0 0 70px rgba(0,0,0,0.85), inset 0 0 40px rgba(0,0,0,0.3)',
      }}>

        {/* ── Map canvas ───────────────────────────────────────────── */}
        <div
          ref={containerRef}
          style={{
            position:    'relative',
            width:       '100%',
            aspectRatio: `${MAP_W} / ${MAP_H}`,
            cursor:      hovered ? 'pointer' : 'default',
          }}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Territory image layers */}
          {TERRITORIES.map((t, idx) => {
            const on = hovered === t.id
            return (
              <div
                key={t.id}
                style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  zIndex:     on ? 20 : idx + 1,
                  transform:  on ? 'translateY(-0.85%)' : 'none',
                  transition: 'transform 0.22s ease, filter 0.22s ease',
                  filter:     on
                    ? `brightness(1.25) drop-shadow(0 0 12px ${t.color}ee) drop-shadow(0 0 35px ${t.color}66) drop-shadow(0 7px 16px #000c)`
                    : 'brightness(0.58)',
                }}
              >
                <img
                  src={`/images/map/${encodeURIComponent(t.file)}`}
                  alt="" aria-hidden draggable={false}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
              </div>
            )
          })}

          {/* Hover effects */}
          {ht && hd && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 50 }}>

              {/* Light pillars — at real edge pixels, fully random timing */}
              {hd.edgePoints.map((ep, i) => (
                <div
                  key={i}
                  style={{
                    position:           'absolute',
                    left:               `${ep.x}%`,
                    top:                `calc(${ep.y}% - ${ep.ph}%)`,
                    width:              `${ep.thick}px`,
                    height:             `${ep.ph}%`,
                    // Solid color core → transparent top, pure light beam look
                    background:         `linear-gradient(to top, ${ht.color} 0%, ${ht.color}cc 35%, ${ht.color}44 75%, transparent 100%)`,
                    boxShadow:          `0 0 8px 3px ${ht.color}cc, 0 0 3px 1px ${ht.color}`,
                    transformOrigin:    'bottom center',
                    animation:          `sm-pillar ${ep.dur}s ${ep.delay}s ease-out infinite`,
                    // Holds first keyframe (scaleY:0, opacity:0) during delay
                    animationFillMode:  'backwards',
                  }}
                />
              ))}

              {/* Fireflies — random interior positions, fully chaotic timing */}
              {hd.fireflies.map((f, i) => (
                <div
                  key={i}
                  style={{
                    position:          'absolute',
                    left:              `${f.x}%`,
                    top:               `${f.y}%`,
                    width:             `${f.size}px`,
                    height:            `${f.size}px`,
                    borderRadius:      '50%',
                    background:        ht.color,
                    boxShadow:         `0 0 ${Math.round(f.size * 3)}px ${Math.round(f.size * 1.5)}px ${ht.color}`,
                    '--dx':            `${f.dx}px`,
                    animation:         `sm-fly ${f.dur}s ${f.delay}s ease-in-out infinite`,
                    // Invisible during delay — holds initial keyframe opacity:0
                    animationFillMode: 'backwards',
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}

          {/* Loading overlay */}
          {!ready && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 100,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#06101a',
            }}>
              <span style={{
                color: 'rgba(212,175,55,0.4)', fontFamily: 'Georgia,serif',
                fontSize: 11, letterSpacing: '0.18em',
              }}>
                ЗАГРУЗКА…
              </span>
            </div>
          )}
        </div>

        {/* ── Territory name — below map ───────────────────────────── */}
        <div style={{
          height:         54,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          borderTop:      '1px solid rgba(212,175,55,0.10)',
        }}>
          {ht?.name ? (
            <span style={{
              fontFamily:    'var(--font-cinzel, Georgia, serif)',
              fontSize:      'clamp(11px, 1.3vw, 17px)',
              fontWeight:    700,
              letterSpacing: '0.18em',
              color:         ht.color,
              textShadow:    `0 0 8px ${ht.color}, 0 0 28px ${ht.color}88`,
            }}>
              {ht.name}
            </span>
          ) : (
            <span style={{
              color: 'rgba(212,175,55,0.22)', fontFamily: 'Georgia,serif',
              fontSize: 9, letterSpacing: '0.25em',
            }}>
              {ready ? 'НАВЕДИ НА ГОСУДАРСТВО' : ''}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
