'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, BookOpen, Map } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'
import KaslanaCrest from '@/components/icons/KaslanaCrest'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollDown = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255,240,180,0.06) 0%, transparent 55%),
          radial-gradient(ellipse 80% 40% at 80% 80%, rgba(212,175,55,0.05) 0%, transparent 45%),
          linear-gradient(180deg, #0A0806 0%, #1C1408 40%, #120D05 70%, #080603 100%)
        `,
      }}
    >
      {/* Particle fields */}
      <ParticleField count={70} r={212} g={175} b={55} className="z-0" />
      <LightRays rayCount={10} originY={0} className="z-0" />

      {/* Subtle marble texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px,
              transparent 1px, transparent 60px
            )
          `,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <KaslanaCrest size={64} className="text-gold-500 animate-breathe" animated />
        </motion.div>

        {/* Eyebrow line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-5 mb-8"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500/60" />
          <span
            className="font-cinzel text-[0.6rem] tracking-[0.4em] text-gold-500/80"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            ОФИЦИАЛЬНАЯ ЭНЦИКЛОПЕДИЯ
          </span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500/60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 60, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.14em' }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel font-bold text-white mb-4 leading-none"
          style={{
            fontFamily: 'var(--font-cinzel, serif)',
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
          }}
        >
          <span className="gold-text">STORMMASTER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-cinzel text-stone-300/70 mb-14"
          style={{
            fontFamily: 'var(--font-cinzel, serif)',
            fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
            letterSpacing: '0.38em',
          }}
        >
          АРХИВ · ЭНЦИКЛОПЕДИЯ ИЗВЕСТНОГО МИРА
        </motion.p>

        {/* Decorative rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-500/80" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-500/70" />
          <div className="h-px w-40 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-500/80" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-stone-400 text-base lg:text-lg max-w-xl mx-auto leading-8 mb-14 font-light"
        >
          Тысячи лет истории, легенд и летописей — от основания Великих Домов
          до последнего мерцания Вечного Пламени.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/lore/house-kaslana" className="btn-gold">
            <BookOpen size={14} />
            ОТКРЫТЬ АРХИВ
          </Link>
          <Link href="/world" className="btn-ghost">
            <Map size={14} />
            ИССЛЕДОВАТЬ МИР
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-500/50 hover:text-gold-500 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-cinzel text-[0.55rem] tracking-[0.3em]" style={{ fontFamily: 'var(--font-cinzel, serif)' }}>
          ЛИСТАТЬ
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      {/* Bottom atmospheric fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-marble-warm to-transparent z-0 pointer-events-none" />
    </section>
  )
}
