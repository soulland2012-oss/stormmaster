'use client'

import { motion } from 'framer-motion'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'

export function WorldHero() {
  return (
    <div
      className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,100,60,0.2) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 20% 70%, rgba(45,140,90,0.1) 0%, transparent 50%),
          linear-gradient(180deg, #040C08 0%, #0A1810 40%, #060E0A 100%)
        `,
      }}
    >
      <ParticleField count={40} r={100} g={190} b={130} className="z-0" />
      <LightRays rayCount={14} color="rgba(80, 180, 110" originY={0} widthScale={2.2} className="z-0" />

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#040C08] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-14"
      >
        <p
          className="font-cinzel text-[0.6rem] tracking-[0.32em] mb-3"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(80,200,130,0.7)' }}
        >
          STORMMASTER ARCHIVE
        </p>
        <h1
          className="font-cinzel font-bold text-white mb-3"
          style={{
            fontFamily: 'var(--font-cinzel, serif)',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            letterSpacing: '0.06em',
          }}
        >
          The Known World
        </h1>
        <p className="text-stone-300/65 text-base max-w-xl leading-7">
          From the golden citadels of the Aurean Realm to the fog-shrouded Unlit Wastes — a guide to the territories of the Stormmaster universe.
        </p>
      </motion.div>
    </div>
  )
}
