import type { Metadata } from 'next'
import Link from 'next/link'
import WorldMap from '@/components/world/WorldMap'

export const metadata: Metadata = {
  title: 'Карта Мира — Stormmaster',
  description: 'Интерактивная карта известного мира Stormmaster.',
}

export default function MapPage() {
  return (
    <div className="min-h-screen" style={{ background: '#06080f' }}>

      {/* Header */}
      <div className="text-center pt-24 lg:pt-32 2xl:pt-44 pb-7">
        <div className="flex items-center justify-center gap-5 mb-4">
          <div className="h-px w-14" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4))' }} />
          <span
            className="text-[0.58rem] tracking-[0.38em]"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.6)' }}
          >
            ИЗВЕСТНЫЙ МИР
          </span>
          <div className="h-px w-14" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
        </div>
        <h1
          className="text-3xl font-bold text-white"
          style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}
        >
          Карта Мира
        </h1>
      </div>

      {/* Map — full viewport width with minimal side padding */}
      <div className="px-3 pb-3">
        <WorldMap />
      </div>

      {/* Back link */}
      <div className="py-10 text-center">
        <Link
          href="/world"
          className="text-[0.6rem] tracking-[0.28em]"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.45)' }}
        >
          ← НАЗАД К МИРУ
        </Link>
      </div>

    </div>
  )
}
