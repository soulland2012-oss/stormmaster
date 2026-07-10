'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'

interface ArticleHeroProps {
  title: string
  subtitle: string
  tagline: string
  description: string
  atmosphere?: 'light' | 'dark' | 'neutral' | 'aura' | 'magic' | 'memory' | 'void'
  tags?: string[]
  heroImage?: string
}

const atmosphereStyles = {
  light: {
    bg: `
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(255,245,190,0.28) 0%, transparent 58%),
      radial-gradient(ellipse 70% 40% at 15% 60%, rgba(212,175,55,0.12) 0%, transparent 50%),
      linear-gradient(180deg, #0D0A04 0%, #1E1506 35%, #140F04 65%, #0A0702 100%)
    `,
    particleR: 212, particleG: 175, particleB: 55,
    rayColor: 'rgba(255, 240, 170',
    accentColor: '#D4AF37',
    tagBg: 'rgba(212,175,55,0.12)',
    tagBorder: 'rgba(212,175,55,0.4)',
    tagColor: '#D4AF37',
    fadeFrom: '#0D0A04',
  },
  dark: {
    bg: `
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(42,74,127,0.35) 0%, transparent 58%),
      radial-gradient(ellipse 70% 40% at 85% 60%, rgba(90,143,204,0.1) 0%, transparent 50%),
      linear-gradient(180deg, #04060D 0%, #060A14 35%, #040810 65%, #020408 100%)
    `,
    particleR: 90, particleG: 143, particleB: 204,
    rayColor: 'rgba(120, 160, 220',
    accentColor: '#5A8FCC',
    tagBg: 'rgba(90,143,204,0.12)',
    tagBorder: 'rgba(90,143,204,0.4)',
    tagColor: '#5A8FCC',
    fadeFrom: '#04060D',
  },
  neutral: {
    bg: `linear-gradient(180deg, #0A0A0A 0%, #141414 40%, #0A0A0A 100%)`,
    particleR: 160, particleG: 160, particleB: 160,
    rayColor: 'rgba(200, 200, 200',
    accentColor: '#C0C0C0',
    tagBg: 'rgba(192,192,192,0.1)',
    tagBorder: 'rgba(192,192,192,0.35)',
    tagColor: '#C0C0C0',
    fadeFrom: '#0A0A0A',
  },
  aura: {
    bg: `
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(56,189,248,0.32) 0%, transparent 58%),
      radial-gradient(ellipse 70% 40% at 80% 55%, rgba(14,165,233,0.14) 0%, transparent 50%),
      radial-gradient(ellipse 50% 30% at 20% 70%, rgba(56,189,248,0.08) 0%, transparent 50%),
      linear-gradient(180deg, #010810 0%, #021020 35%, #010C18 65%, #000408 100%)
    `,
    particleR: 56, particleG: 189, particleB: 248,
    rayColor: 'rgba(100, 200, 255',
    accentColor: '#38BDF8',
    tagBg: 'rgba(56,189,248,0.12)',
    tagBorder: 'rgba(56,189,248,0.4)',
    tagColor: '#38BDF8',
    fadeFrom: '#010810',
  },
  magic: {
    bg: `
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(167,139,250,0.35) 0%, transparent 58%),
      radial-gradient(ellipse 70% 40% at 15% 55%, rgba(139,92,246,0.14) 0%, transparent 50%),
      radial-gradient(ellipse 50% 30% at 85% 70%, rgba(167,139,250,0.08) 0%, transparent 50%),
      linear-gradient(180deg, #050110 0%, #0A0320 35%, #070215 65%, #02010A 100%)
    `,
    particleR: 167, particleG: 139, particleB: 250,
    rayColor: 'rgba(180, 150, 255',
    accentColor: '#A78BFA',
    tagBg: 'rgba(167,139,250,0.12)',
    tagBorder: 'rgba(167,139,250,0.4)',
    tagColor: '#A78BFA',
    fadeFrom: '#050110',
  },
  memory: {
    bg: `
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(184,147,90,0.30) 0%, transparent 58%),
      radial-gradient(ellipse 70% 40% at 80% 60%, rgba(139,111,66,0.16) 0%, transparent 50%),
      linear-gradient(180deg, #0D0904 0%, #1A1208 35%, #120D06 65%, #080502 100%)
    `,
    particleR: 184, particleG: 147, particleB: 90,
    rayColor: 'rgba(205, 170, 115',
    accentColor: '#B8935A',
    tagBg: 'rgba(184,147,90,0.12)',
    tagBorder: 'rgba(184,147,90,0.4)',
    tagColor: '#C9A876',
    fadeFrom: '#0D0904',
  },
  void: {
    bg: `
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(110,122,138,0.20) 0%, transparent 58%),
      radial-gradient(ellipse 60% 35% at 20% 70%, rgba(60,66,76,0.18) 0%, transparent 50%),
      linear-gradient(180deg, #020203 0%, #06070A 35%, #030304 65%, #000000 100%)
    `,
    particleR: 110, particleG: 122, particleB: 138,
    rayColor: 'rgba(90, 100, 115',
    accentColor: '#6E7A8A',
    tagBg: 'rgba(110,122,138,0.10)',
    tagBorder: 'rgba(110,122,138,0.35)',
    tagColor: '#8B96A8',
    fadeFrom: '#020203',
  },
}

export default function ArticleHero({
  title,
  subtitle,
  tagline,
  description,
  atmosphere = 'light',
  tags = [],
  heroImage,
}: ArticleHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y         = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity   = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const style     = atmosphereStyles[atmosphere]

  return (
    <div
      ref={ref}
      className="relative h-[92vh] min-h-[640px] flex items-end overflow-hidden"
      style={{ background: style.bg }}
    >
      {/* Effects */}
      <ParticleField
        count={60}
        r={style.particleR}
        g={style.particleG}
        b={style.particleB}
        className="z-0"
      />
      <LightRays rayCount={14} color={style.rayColor} originY={0} widthScale={2.2} className="z-0" />

      {/* Illustration placeholder — replace with <Image> once artwork is ready */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-full opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 50% 70% at 65% 40%, ${style.accentColor}30 0%, transparent 60%),
              repeating-linear-gradient(
                -30deg,
                transparent,
                transparent 60px,
                ${style.accentColor}08 60px,
                ${style.accentColor}08 61px
              )
            `,
          }}
        />
        {/* Silhouette placeholder */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-20 opacity-10"
          style={{
            background: `radial-gradient(ellipse 45% 80% at 70% 50%, ${style.accentColor}60 0%, transparent 65%)`,
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${style.fadeFrom} 0%, ${style.fadeFrom}B3 30%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-16 lg:pb-20"
      >
        {/* Tags */}
        {tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-cinzel text-[0.58rem] tracking-[0.28em] px-3 py-1"
                style={{
                  fontFamily: 'var(--font-cinzel, serif)',
                  color: style.tagColor,
                  background: style.tagBg,
                  border: `1px solid ${style.tagBorder}`,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${style.accentColor}90` }}
        >
          {subtitle.toUpperCase()}
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel font-bold text-white mb-4 leading-none"
          style={{
            fontFamily: 'var(--font-cinzel, serif)',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            textShadow: `0 0 80px ${style.accentColor}40`,
          }}
        >
          {title}
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-5 origin-left"
        >
          <div
            className="h-px w-20"
            style={{ background: `linear-gradient(90deg, ${style.accentColor}80, transparent)` }}
          />
          <span
            className="font-cinzel text-[0.6rem] tracking-[0.3em] italic"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${style.accentColor}70` }}
          >
            {tagline}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="text-stone-300/70 text-base lg:text-lg max-w-2xl leading-8 font-light"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  )
}
