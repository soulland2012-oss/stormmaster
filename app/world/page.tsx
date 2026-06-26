import type { Metadata } from 'next'
import Link from 'next/link'
import { WorldHero } from '@/components/world/WorldHero'

export const metadata: Metadata = {
  title: 'The World',
  description: 'Explore the lands, nations, and powers of the Stormmaster universe.',
}

const nations = [
  { name: 'The Aurean Realm', region: 'Central Heartlands', description: 'The seat of the Six Great Houses. Ancient cathedrals and magipunk forges stand side by side.', color: '#D4AF37', href: '/world/aurean-realm' },
  { name: 'The Iron Reaches', region: 'Northern Wastes', description: 'Harsh frontier territories where the Brightwall garrisons hold back the encroaching darkness.', color: '#8B9BB4', href: '/world/iron-reaches' },
  { name: 'The Sunken Isles', region: 'Southern Archipelago', description: 'A fractured chain of islands where ancient Solian ruins still hold undiscovered power.', color: '#2E86C1', href: '/world/sunken-isles' },
  { name: 'The Verdant Expanse', region: 'Eastern Forests', description: 'Vast ancient woodlands where the old ways of Aura remain untouched by technology.', color: '#27AE60', href: '/world/verdant-expanse' },
  { name: 'The Scorched Reaches', region: 'Southern Badlands', description: 'Former battlefields of the Sundering Wars, where the earth still glows with residual Aura energy.', color: '#E74C3C', href: '/world/scorched-reaches' },
  { name: 'The Unlit Wastes', region: 'Far North', description: 'Unknown territory beyond the Brightwall. No expedition has ever returned with complete records.', color: '#2C3E50', href: '/world/unlit-wastes' },
]

export default function WorldPage() {
  return (
    <>
      <WorldHero />

      <div
        className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-20"
        style={{ background: 'rgb(250 250 245)' }}
      >
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-5 mb-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold-500/45" />
            <span
              className="font-cinzel text-[0.6rem] tracking-[0.38em] text-gold-600"
              style={{ fontFamily: 'var(--font-cinzel, serif)' }}
            >
              KNOWN TERRITORIES
            </span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold-500/45" />
          </div>
          <h2
            className="font-cinzel text-3xl font-bold text-stone-900"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
          >
            Regions of the World
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {nations.map((nation) => (
            <Link key={nation.name} href={nation.href} className="group block">
              <div
                className="h-full rounded-sm p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${nation.color}18`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <p
                  className="font-cinzel text-[0.6rem] tracking-[0.25em] mb-2"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${nation.color}80` }}
                >
                  {nation.region.toUpperCase()}
                </p>
                <h3
                  className="font-cinzel font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.1rem', letterSpacing: '0.04em' }}
                >
                  {nation.name}
                </h3>
                <p className="text-stone-500 text-sm leading-6">{nation.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
