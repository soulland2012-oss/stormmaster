'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

interface GalleryItem {
  title: string
  caption: string
  aspect: string
  src?: string
}

interface GalleryProps {
  items: GalleryItem[]
  accentColor?: string
}

const gradients = [
  'from-amber-950/80 via-stone-900/60 to-stone-950/80',
  'from-stone-900/80 via-amber-950/50 to-stone-950/80',
  'from-yellow-950/80 via-stone-900/60 to-amber-950/80',
  'from-orange-950/80 via-stone-900/70 to-stone-950/80',
  'from-stone-950/80 via-amber-900/50 to-stone-950/80',
  'from-amber-900/80 via-stone-950/60 to-yellow-950/80',
]

export default function Gallery({ items, accentColor = '#D4AF37' }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        {items.map((item, i) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden rounded-sm text-left cursor-zoom-in"
            style={{
              aspectRatio: item.aspect.replace('/', ' / '),
              border: `1px solid ${accentColor}20`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
            }}
          >
            {/* Image or placeholder */}
            {item.src ? (
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            ) : (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${accentColor}12 0%, transparent 65%)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cinzel text-[0.55rem] tracking-[0.3em] opacity-30" style={{ fontFamily: 'var(--font-cinzel, serif)', color: accentColor }}>
                    ILLUSTRATION
                  </span>
                </div>
              </>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn
                size={22}
                className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>

            {/* Caption bar */}
            <div
              className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.85), transparent)' }}
            >
              <p
                className="font-cinzel text-white text-[0.68rem] font-semibold tracking-wider leading-tight"
                style={{ fontFamily: 'var(--font-cinzel, serif)' }}
              >
                {item.title}
              </p>
              <p className="text-stone-300 text-[0.62rem] mt-0.5 leading-tight">
                {item.caption}
              </p>
            </div>

            {/* Frame border trace */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: `inset 0 0 0 1px ${accentColor}40` }}
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/85 backdrop-blur-lg"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>

              {/* Image */}
              <div
                className="w-full rounded-sm overflow-hidden"
                style={{
                  aspectRatio: selected.aspect.replace('/', ' / '),
                  background: selected.src
                    ? `url(${selected.src}) center/cover no-repeat`
                    : 'linear-gradient(135deg, #1a1208, #0d0a04)',
                  border: `1px solid ${accentColor}30`,
                }}
              >
                {!selected.src && (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-cinzel text-[0.7rem] tracking-[0.4em] opacity-30" style={{ fontFamily: 'var(--font-cinzel, serif)', color: accentColor }}>
                      ARTWORK PLACEHOLDER
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <p
                  className="font-cinzel text-white text-sm font-semibold tracking-wider mb-1"
                  style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                >
                  {selected.title}
                </p>
                <p className="text-stone-400 text-sm">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
