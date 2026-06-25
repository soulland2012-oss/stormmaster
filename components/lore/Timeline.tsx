'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { TimelineEvent } from '@/data/house-kaslana'

interface TimelineProps {
  events: TimelineEvent[]
  accentColor?: string
}

const significanceStyles = {
  major:   { dot: 'w-4 h-4 border-2', glow: true,  label: 'MAJOR EVENT' },
  turning: { dot: 'w-5 h-5 border-2', glow: true,  label: 'TURNING POINT' },
  minor:   { dot: 'w-3 h-3 border',   glow: false, label: 'EVENT' },
}

export default function Timeline({ events, accentColor = '#D4AF37' }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical spine */}
      <div
        className="absolute left-[7px] lg:left-1/2 top-0 bottom-0 w-px"
        style={{ background: `linear-gradient(180deg, transparent, ${accentColor}40, ${accentColor}40, transparent)` }}
      />

      <div className="space-y-10 lg:space-y-0">
        {events.map((event, i) => {
          const sig     = significanceStyles[event.significance]
          const isLeft  = i % 2 === 0
          const isRight = !isLeft

          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex lg:items-center pl-10 lg:pl-0 lg:mb-12"
            >
              {/* Mobile: dot on left */}
              <div className="absolute left-0 top-1.5 lg:hidden">
                <div
                  className={cn('rounded-full', sig.dot)}
                  style={{
                    background: accentColor,
                    borderColor: accentColor,
                    boxShadow: sig.glow ? `0 0 12px ${accentColor}70` : 'none',
                  }}
                />
              </div>

              {/* Desktop: centered dot */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className={cn('rounded-full', sig.dot)}
                  style={{
                    background: accentColor,
                    borderColor: accentColor,
                    boxShadow: sig.glow ? `0 0 16px ${accentColor}70` : 'none',
                  }}
                />
              </div>

              {/* Left content (desktop even items) */}
              <div
                className={cn(
                  'w-full lg:w-[46%]',
                  isLeft ? 'lg:pr-12 lg:text-right' : 'lg:ml-[54%] lg:pl-12',
                )}
              >
                <div
                  className="rounded-sm p-5 group hover:shadow-card transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${accentColor}18`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className={cn('flex items-start gap-3 mb-3', isLeft && 'lg:flex-row-reverse')}>
                    <div>
                      <span
                        className="font-cinzel text-[0.6rem] tracking-[0.25em]"
                        style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${accentColor}80` }}
                      >
                        {sig.label}
                      </span>
                      <p
                        className="font-cinzel font-bold text-sm tracking-wide text-stone-800 mt-0.5"
                        style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                      >
                        {event.year}
                      </p>
                    </div>
                  </div>

                  <h4
                    className="font-cinzel font-semibold text-base mb-2 text-stone-900"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}
                  >
                    {event.title}
                  </h4>

                  <p className="text-stone-500 text-sm leading-7">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
