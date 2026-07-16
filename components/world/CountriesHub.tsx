'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'
import { countries, type CountrySummary } from '@/data/countries/index'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

function CountryCard({ country }: { country: CountrySummary }) {
  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Link href={country.href} className="block h-full">
        <div
          className="relative h-full min-h-[420px] overflow-hidden rounded-sm cursor-pointer"
          style={{ boxShadow: `0 4px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient}`} />
          <div className="absolute inset-0 overflow-hidden">
            <ParticleField count={20} r={country.particleR} g={country.particleG} b={country.particleB} className="z-0" />
          </div>
          <div className="absolute inset-0 bg-black/35" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${country.glowBg} 0%, transparent 70%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 45% at 50% -10%, ${country.accent}14 0%, transparent 60%)` }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 0 1px ${country.accent}45` }}
          />

          <div className="relative z-10 p-7 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-cinzel text-[0.55rem] tracking-[0.24em] px-2.5 py-1"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: country.accent, border: `1px solid ${country.accent}50`, background: `${country.accent}15` }}
                >
                  {country.tag}
                </span>
              </div>
              <p className="font-cinzel text-[0.56rem] tracking-[0.2em] mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${country.accent}80` }}>
                {country.category.toUpperCase()}
              </p>
              <h2
                className="font-cinzel font-bold text-white mb-3 leading-none"
                style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)', textShadow: `0 2px 12px rgba(0,0,0,0.8)`, letterSpacing: '0.05em' }}
              >
                {country.title}
              </h2>
              <div className="h-px w-10 mb-3" style={{ background: `linear-gradient(90deg, ${country.accent}70, transparent)` }} />
              <p className="text-stone-100/85 leading-6 text-[0.85rem]">{country.description}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {country.traits.map((trait) => (
                  <span key={trait} className="text-[0.62rem] px-2 py-0.5 rounded-sm" style={{ color: 'rgba(200,210,230,0.70)', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.08)` }}>
                    {trait}
                  </span>
                ))}
              </div>
              <div
                className="flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.15em] transition-all duration-300 group-hover:gap-3"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: country.accent }}
              >
                ЧИТАТЬ СТАТЬЮ
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CountriesHub() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 20% 20%, rgba(212,175,55,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 55% 50% at 80% 30%, rgba(167,139,250,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 45% 45% at 45% 70%, rgba(192,192,192,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #050305 0%, #08070A 40%, #040305 100%)
          `,
        }}
      >
        <ParticleField count={50} r={180} g={165} b={130} className="z-0" />
        <LightRays rayCount={8} color="rgba(190, 170, 130" originY={0} widthScale={2.2} className="z-0" />

        <div
          className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #050305 0%, #050305B3 25%, transparent 100%)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-14"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,190,150,0.60)' }}
          >
            МИР
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', textShadow: '0 0 80px rgba(190,170,130,0.30)' }}
          >
            Государства
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-stone-400/70 text-base lg:text-lg max-w-xl leading-8 font-light"
          >
            Державы и земли известного мира Stormmaster — от Фенридийской Федерации до независимых ЮКЛ и Дворфляндии.
          </motion.p>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ background: 'rgb(246 245 250)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {countries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
