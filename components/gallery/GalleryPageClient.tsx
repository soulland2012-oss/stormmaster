'use client'

import Gallery from '@/components/lore/Gallery'

interface GalleryItem {
  title: string
  caption: string
  aspect: string
}

export default function GalleryPageClient({ items }: { items: GalleryItem[] }) {
  return (
    <div style={{ background: 'rgb(250 250 245)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="relative h-72 flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 55%),
            linear-gradient(180deg, #0A0806 0%, #1A1208 50%, #0A0806 100%)
          `,
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0806] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-12 w-full">
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-2"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.65)' }}
          >
            STORMMASTER ARCHIVE
          </p>
          <h1
            className="font-cinzel font-bold text-white"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '0.06em',
            }}
          >
            Gallery
          </h1>
          <p className="text-stone-400/70 text-sm mt-2">
            Place your artwork here — each image will automatically form a cinematic gallery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16">
        <Gallery items={items} accentColor="#D4AF37" />
      </div>
    </div>
  )
}
