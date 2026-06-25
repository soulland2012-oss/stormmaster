import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import FeaturedSection from '@/components/home/FeaturedSection'
import WorldIntroSection from '@/components/home/WorldIntroSection'

export const metadata: Metadata = {
  title: 'Stormmaster Archive — The Official Encyclopedia',
  description: 'Enter the sacred archive. Thousands of years of history, lore, and legend from the Stormmaster universe.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div
        className="relative"
        style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}
      >
        <FeaturedSection />
        <WorldIntroSection />
      </div>
    </>
  )
}
