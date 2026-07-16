'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'
import { federatsiyaFenridiyaData, type FederationMember } from '@/data/countries/federatsiya-fenridiya'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

function MemberCard({ member }: { member: FederationMember }) {
  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Link href={member.href} className="block h-full">
        <div
          className="relative h-full min-h-[400px] overflow-hidden rounded-sm cursor-pointer"
          style={{ boxShadow: `0 4px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`} />
          <div className="absolute inset-0 overflow-hidden">
            <ParticleField count={20} r={member.particleR} g={member.particleG} b={member.particleB} className="z-0" />
          </div>
          <div className="absolute inset-0 bg-black/35" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${member.glowBg} 0%, transparent 70%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 45% at 50% -10%, ${member.accent}14 0%, transparent 60%)` }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 0 1px ${member.accent}45` }}
          />

          <div className="relative z-10 p-7 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-cinzel text-[0.55rem] tracking-[0.24em] px-2.5 py-1"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: member.accent, border: `1px solid ${member.accent}50`, background: `${member.accent}15` }}
                >
                  {member.tag}
                </span>
              </div>
              <p className="font-cinzel text-[0.56rem] tracking-[0.2em] mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${member.accent}80` }}>
                {member.category.toUpperCase()}
              </p>
              <h2
                className="font-cinzel font-bold text-white mb-3 leading-none"
                style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)', textShadow: `0 2px 12px rgba(0,0,0,0.8)`, letterSpacing: '0.05em' }}
              >
                {member.title}
              </h2>
              <div className="h-px w-10 mb-3" style={{ background: `linear-gradient(90deg, ${member.accent}70, transparent)` }} />
              <p className="text-stone-100/85 leading-6 text-[0.85rem]">{member.description}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.traits.map((trait) => (
                  <span key={trait} className="text-[0.62rem] px-2 py-0.5 rounded-sm" style={{ color: 'rgba(200,210,230,0.70)', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.08)` }}>
                    {trait}
                  </span>
                ))}
              </div>
              <div
                className="flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.15em] transition-all duration-300 group-hover:gap-3"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: member.accent }}
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

export default function FederationHub() {
  const d = federatsiyaFenridiyaData

  return (
    <div>
      {/* Hero */}
      <div
        className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 20% 20%, rgba(212,175,55,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 55% 50% at 80% 30%, rgba(110,122,138,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 45% 45% at 45% 70%, rgba(184,147,90,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #050305 0%, #08070A 40%, #040305 100%)
          `,
        }}
      >
        <ParticleField count={50} r={212} g={175} b={55} className="z-0" />
        <LightRays rayCount={8} color="rgba(212, 175, 55" originY={0} widthScale={2.2} className="z-0" />

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
            {d.subtitle.toUpperCase()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', textShadow: '0 0 80px rgba(212,175,55,0.30)' }}
          >
            {d.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-stone-400/70 text-base lg:text-lg max-w-2xl leading-8 font-light"
          >
            {d.heroDescription}
          </motion.p>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ background: 'rgb(246 245 250)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="inline-block w-1 h-7 rounded-full shrink-0" style={{ background: '#D4AF37' }} />
            <div>
              <h2 className="font-cinzel text-xl lg:text-2xl font-bold text-stone-800" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}>
                Государства Федерации
              </h2>
              <p className="text-stone-500 text-xs mt-1">Пять государств одного континента</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {d.members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
