'use client'

import { motion } from 'framer-motion'
import { Lock, HelpCircle } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'
import SectionDivider from '@/components/lore/SectionDivider'
import { godsData, pantheonInfo, type GodData, type GodStatus } from '@/data/gods'

const PURPLE = '#C4A8F4'
const GOLD   = '#D4AF37'

const CARD_SPARKS = [
  { left: '7%',  top: '70%', delay: 0,   dur: 3.1 },
  { left: '24%', top: '80%', delay: 1.3, dur: 2.8 },
  { left: '55%', top: '74%', delay: 0.6, dur: 3.4 },
  { left: '78%', top: '66%', delay: 1.9, dur: 2.6 },
  { left: '90%', top: '78%', delay: 0.8, dur: 3.0 },
]

function Fireflies({ color }: { color: string }) {
  return (
    <>
      {CARD_SPARKS.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', left: s.left, top: s.top,
            width: '3px', height: '3px', borderRadius: '50%',
            background: color, boxShadow: `0 0 5px 2px ${color}`,
            pointerEvents: 'none', zIndex: 2,
          }}
          animate={{ y: [0, -50, -110], x: [0, 6, -4], opacity: [0, 0.9, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}

// ── Status badge ──────────────────────────────────────────────────────────────
const STATUS_MAP: Record<GodStatus, { label: string; color: string }> = {
  full:    { label: 'ПОЛНЫЙ ЛОР',  color: '#D4AF37' },
  partial: { label: 'ЧАСТИЧНЫЙ',   color: '#C4A8F4' },
  pending: { label: 'ОЖИДАЕТСЯ',   color: '#6B7280' },
  mystery: { label: 'ТАЙНА',       color: '#9B6FD4' },
}

function StatusBadge({ status }: { status: GodStatus }) {
  const s = STATUS_MAP[status]
  return (
    <span
      className="text-[0.52rem] tracking-[0.18em] px-2 py-0.5 rounded-sm shrink-0"
      style={{ color: s.color, background: `${s.color}18`, border: `1px solid ${s.color}35` }}
    >
      {s.label}
    </span>
  )
}

// ── Compact card for the pantheon grid ───────────────────────────────────────
function GodCard({ god }: { god: GodData }) {
  const isPending = god.status === 'pending'
  const isMystery = god.status === 'mystery'

  return (
    <motion.div
      className="relative rounded-sm overflow-hidden"
      style={{
        background: 'rgba(212,175,55,0.06)',
        border: '1px solid rgba(212,175,55,0.28)',
        boxShadow: isPending ? 'none' : '0 0 0 1px rgba(212,175,55,0.18), 0 0 24px 8px rgba(212,175,55,0.26), 0 0 64px 20px rgba(212,175,55,0.11)',
        opacity: isPending ? 0.55 : 1,
      }}
      whileHover={
        !isPending
          ? { boxShadow: '0 0 0 1px rgba(212,175,55,0.30), 0 0 24px 8px rgba(212,175,55,0.42), 0 0 64px 20px rgba(212,175,55,0.18)', borderColor: 'rgba(212,175,55,0.50)' }
          : undefined
      }
      transition={{ duration: 0.35 }}
    >
      <Fireflies color="rgba(212,175,55,0.95)" />

      {isPending ? (
        /* Pending — blurred content + lock */
        <div className="relative" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '160px' }}>
          <div style={{ filter: 'blur(3px)', userSelect: 'none' }}>
            <p
              className="font-cinzel font-bold leading-tight mb-1"
              style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)', letterSpacing: '0.10em', color: '#D4AF37' }}
            >
              {god.name.toUpperCase()}
            </p>
            <div style={{ height: '1px', width: '65%', marginBottom: '12px', background: 'linear-gradient(90deg, rgba(212,175,55,0.5), transparent)', boxShadow: '0 0 6px 1px rgba(212,175,55,0.30)' }} />
            <p style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(0.6rem, 0.8vw, 0.85rem)', letterSpacing: '0.25em', color: 'rgba(196,168,244,0.80)' }}>{god.domain.toUpperCase()}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock size={18} style={{ color: 'rgba(212,175,55,0.6)' }} />
          </div>
        </div>
      ) : (
        /* Full / partial / mystery — anchor link */
        <a href={`#${god.id}`} className="group" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem', minHeight: '160px' }}>
          {isMystery && (
            <div className="absolute top-4 right-4">
              <HelpCircle size={14} style={{ color: '#D4AF37', opacity: 0.65 }} />
            </div>
          )}
          <div>
            <p
              className="font-cinzel font-bold leading-tight mb-1"
              style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)', letterSpacing: '0.10em', color: '#D4AF37', textShadow: '0 0 18px rgba(212,175,55,0.45)' }}
            >
              {god.name.toUpperCase()}
            </p>
            {/* Glowing underline */}
            <div style={{
              height: '1px',
              width: '65%',
              marginTop: '6px',
              marginBottom: '12px',
              background: 'linear-gradient(90deg, rgba(212,175,55,0.75), transparent)',
              boxShadow: '0 0 8px 2px rgba(212,175,55,0.38)',
            }} />
            <p style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(0.6rem, 0.8vw, 0.85rem)', letterSpacing: '0.25em', color: 'rgba(196,168,244,0.88)' }}>
              {god.domain.toUpperCase()}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2" style={{ marginTop: '1.2rem' }}>
            <StatusBadge status={god.status} />
            <span style={{ fontSize: 'clamp(0.5rem, 0.6vw, 0.7rem)', color: 'rgba(180,170,200,0.65)' }} className="truncate">{god.player}</span>
          </div>
        </a>
      )}
    </motion.div>
  )
}

// ── Pending placeholder section ───────────────────────────────────────────────
function PendingSection({ god }: { god: GodData }) {
  return (
    <div
      id={god.id}
      className="p-6 rounded-sm"
      style={{ background: 'rgba(212,175,55,0.05)', border: '1px dashed rgba(212,175,55,0.25)' }}
    >
      <h3
        className="font-cinzel font-bold text-xl mb-2"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.65)' }}
      >
        {god.name}
      </h3>
      <p className="text-stone-400/80 text-xs font-cinzel tracking-[0.2em]" style={{ fontFamily: 'var(--font-cinzel, serif)' }}>
        ДОМЕН: {god.domain.toUpperCase()}
      </p>
      <p className="text-stone-400/60 text-xs italic mt-3">Информация ожидается...</p>
    </div>
  )
}

// ── Mystery section ────────────────────────────────────────────────────────────
function MysterySection({ god }: { god: GodData }) {
  return (
    <motion.div
      id={god.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-sm p-8"
      style={{ background: `${god.accent}09`, border: `1px solid ${god.accent}22` }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 50% 50%, ${god.accent}12 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex flex-wrap items-baseline gap-4 mb-3">
          <h3
            className="font-cinzel font-bold"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: god.accent,
              textShadow: `0 0 40px ${god.accent}38`,
            }}
          >
            {god.name}
          </h3>
          <span
            className="font-cinzel text-[0.58rem] tracking-[0.25em]"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${god.accent}65` }}
          >
            БОГ {god.domain.toUpperCase()} · ТАЙНА
          </span>
        </div>
        {god.quote && (
          <p
            className="italic text-stone-200/75 text-sm leading-7 max-w-xl pl-4"
            style={{ borderLeft: `2px solid ${god.accent}35` }}
          >
            «{god.quote}»
          </p>
        )}
        <p
          className="mt-5 font-cinzel text-[0.55rem] tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${god.accent}35` }}
        >
          ✦ АРХИВНЫЕ ДАННЫЕ ЗАСЕКРЕЧЕНЫ ✦
        </p>
      </div>
    </motion.div>
  )
}

// ── Info block (Внешность / Культ / Отношения / Примечание) ──────────────────
function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="p-5 rounded-sm"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(212,175,55,0.06)',
        border: '1px solid rgba(212,175,55,0.30)',
        boxShadow: '0 0 0 1px rgba(212,175,55,0.18), 0 0 24px 8px rgba(212,175,55,0.26), 0 0 64px 20px rgba(212,175,55,0.11)',
      }}
    >
      <Fireflies color="rgba(212,175,55,0.95)" />
      <div style={{ position: 'relative', zIndex: 3 }}>
      <p
        className="font-cinzel tracking-[0.28em] mb-3"
        style={{
          fontFamily: 'var(--font-cinzel, serif)',
          fontSize: '1.1rem',
          color: '#D4AF37',
          textShadow: '0 0 10px rgba(212,175,55,0.90), 0 0 24px rgba(212,175,55,0.55), 0 0 50px rgba(212,175,55,0.28)',
        }}
      >
        {label}
      </p>
      {children}
      </div>
    </div>
  )
}

// ── Full / partial god section ─────────────────────────────────────────────────
function GodSection({ god }: { god: GodData }) {
  return (
    <motion.section
      id={god.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-baseline gap-4 mb-3">
          <h2
            className="font-cinzel font-bold leading-none"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#D4AF37',
              textShadow: '0 0 40px rgba(212,175,55,0.45)',
            }}
          >
            {god.name.toUpperCase()}
          </h2>
          <span
            className="font-cinzel tracking-[0.25em]"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.62rem', color: '#C4A8F4' }}
          >
            БОГ {god.domain.toUpperCase()}
          </span>
        </div>

        {/* Glowing underline */}
        <div style={{
          height: '1px',
          width: '40%',
          marginBottom: '16px',
          background: 'linear-gradient(90deg, rgba(212,175,55,0.80), transparent)',
          boxShadow: '0 0 10px 2px rgba(212,175,55,0.35)',
        }} />

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span
            className="font-cinzel tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.6rem', color: 'rgba(196,168,244,0.65)' }}
          >
            ИГРОК: {god.player}
          </span>
          <span style={{ color: 'rgba(196,168,244,0.25)' }}>·</span>
          <StatusBadge status={god.status} />
        </div>

        {god.quote && (
          <blockquote
            className="italic text-sm leading-7 max-w-2xl pl-4 mt-4"
            style={{ borderLeft: '2px solid rgba(212,175,55,0.45)', color: 'rgba(235,228,255,0.75)' }}
          >
            «{god.quote}»
          </blockquote>
        )}
      </div>

      {/* Description */}
      {god.description && (
        <div className="space-y-4">
          {god.description.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '16px', lineHeight: '2', color: 'rgba(235,228,255,0.90)' }}>
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Inline blocks flowing after description */}
      {god.appearance && (
        <InfoBlock label="ВНЕШНОСТЬ">
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: 'rgba(212,175,55,0.85)' }}>{god.appearance}</p>
        </InfoBlock>
      )}

      {god.worship && (
        <InfoBlock label="КУЛЬТ">
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: 'rgba(212,175,55,0.85)' }}>{god.worship}</p>
        </InfoBlock>
      )}

      {(god.relations && god.relations.length > 0 || god.relationsNote) && (
        <InfoBlock label="ОТНОШЕНИЯ">
          {god.relations && god.relations.length > 0 && (
            <div className="space-y-3">
              {god.relations.map((rel, i) => (
                <div key={i} className="pb-3 border-b last:border-none last:pb-0" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    padding: '2px 8px',
                    marginBottom: '4px',
                    color: '#D4AF37',
                    background: 'rgba(212,175,55,0.12)',
                    border: '1px solid rgba(212,175,55,0.35)',
                    borderRadius: '2px',
                  }}>
                    {rel.name}
                  </span>
                  {rel.attitude && (
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(212,175,55,0.75)' }}>{rel.attitude}</p>
                  )}
                </div>
              ))}
            </div>
          )}
          {god.relationsNote && (
            <div style={{ marginTop: god.relations && god.relations.length > 0 ? '16px' : 0 }}>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(212,175,55,0.55)', marginBottom: '6px', fontFamily: 'var(--font-cinzel, serif)' }}>
                ПРИМЕЧАНИЕ
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.9', fontStyle: 'italic', color: 'rgba(212,175,55,0.80)' }}>{god.relationsNote}</p>
            </div>
          )}
        </InfoBlock>
      )}
    </motion.section>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function GodsDirectory() {
  const fullGods    = godsData.filter(g => g.status === 'full' || g.status === 'partial')
  const mysteryGods = godsData.filter(g => g.status === 'mystery')
  const pendingGods = godsData.filter(g => g.status === 'pending')

  return (
    <div style={{ background: '#100828', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div
        className="relative h-[80vh] min-h-[580px] flex items-end overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #0A0220 0%, #120535 40%, #0D0128 100%)`,
        }}
      >
        <ParticleField count={60} r={140} g={100} b={200} className="z-0" />
        <LightRays rayCount={12} color="rgba(160, 120, 220" originY={0} widthScale={2.0} className="z-0" />

        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute"
            style={{
              left: '15%', top: '5%', width: '55%', height: '65%',
              background: 'radial-gradient(ellipse, rgba(140,100,200,0.16) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute"
            style={{
              right: '8%', top: '18%', width: '28%', height: '38%',
              background: 'radial-gradient(ellipse, rgba(201,162,39,0.07) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #100828 0%, rgba(16,8,40,0.82) 30%, transparent 100%)',
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-16"
        >
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {['23 БОЖЕСТВА', 'МЛАДШИЙ ПАНТЕОН', 'АВАТАРЫ'].map((tag) => (
              <span
                key={tag}
                className="font-cinzel text-[0.58rem] tracking-[0.28em] px-3 py-1"
                style={{
                  fontFamily: 'var(--font-cinzel, serif)',
                  color: PURPLE,
                  background: 'rgba(155,111,212,0.12)',
                  border: '1px solid rgba(155,111,212,0.38)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(155,111,212,0.60)' }}
          >
            DIVINE DIRECTORY 2.0
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-5"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              textShadow: '0 0 80px rgba(140,100,200,0.42)',
            }}
          >
            Пантеон Калдериса
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-white/85 text-base lg:text-lg max-w-2xl leading-8 font-light"
          >
            {pantheonInfo.info}
          </motion.p>
        </motion.div>
      </div>

      {/* ── Info boxes ── */}
      <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
        >
          {[
            { label: 'О ПАНТЕОНЕ',  text: pantheonInfo.info },
            { label: 'АВАТАРЫ',     text: pantheonInfo.avatars },
            { label: 'О ВНЕШНОСТИ', text: pantheonInfo.appearance },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="p-6 rounded-sm"
              style={{
                background: 'rgba(196,168,244,0.10)',
                border: '1px solid rgba(196,168,244,0.22)',
              }}
            >
              <p
                className="font-cinzel tracking-[0.22em] mb-3"
                style={{
                  fontFamily: 'var(--font-cinzel, serif)',
                  fontSize: '1.1rem',
                  color: '#C4A8F4',
                  textShadow: '0 0 10px rgba(196,168,244,0.90), 0 0 24px rgba(196,168,244,0.55), 0 0 50px rgba(196,168,244,0.28)',
                }}
              >
                {label}
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#C4A8F4' }}>{text}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Compact pantheon grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="h-px flex-1"
              style={{ background: `linear-gradient(90deg, ${PURPLE}50, transparent)` }}
            />
            <span
              className="font-cinzel text-[0.58rem] tracking-[0.32em] shrink-0"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${PURPLE}75` }}
            >
              ВСЕ БОЖЕСТВА ПАНТЕОНА
            </span>
            <div
              className="h-px flex-1"
              style={{ background: `linear-gradient(270deg, ${PURPLE}50, transparent)` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {godsData.map((god) => (
              <GodCard key={god.id} god={god} />
            ))}
          </div>
        </motion.div>

        <SectionDivider accentColor={PURPLE} />

        {/* ── Full / partial god sections ── */}
        <div className="space-y-0">
          {fullGods.map((god, i) => (
            <div key={god.id}>
              <GodSection god={god} />
              {i < fullGods.length - 1 && (
                <SectionDivider accentColor={god.accent} icon={false} />
              )}
            </div>
          ))}
        </div>

        {/* ── Mystery gods ── */}
        {mysteryGods.length > 0 && (
          <>
            <SectionDivider accentColor={PURPLE} label="ТАЙНЫ ПАНТЕОНА" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              {mysteryGods.map((god) => (
                <MysterySection key={god.id} god={god} />
              ))}
            </div>
          </>
        )}

        {/* ── Pending gods ── */}
        {pendingGods.length > 0 && (
          <>
            <SectionDivider accentColor="#6B7280" label="В РАЗРАБОТКЕ" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">
              {pendingGods.map((god) => (
                <PendingSection key={god.id} god={god} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
