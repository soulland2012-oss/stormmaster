import type { Metadata } from 'next'
import { drowData } from '@/data/drow'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import DrowBody from '@/components/world/races/DrowBody'

export const metadata: Metadata = {
  title: 'Дроу — Stormmaster Archive',
  description: 'Илитиири — изгнанники, построившие цивилизацию в темноте. Матриархат Домов, Теневое Плетение, подземные крепости и тысячелетняя летопись ненависти.',
}

const ACCENT = '#A855F7'

export default function DrowPage() {
  const d = drowData

  return (
    <article>
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere="dark"
        tags={['ИЛИТИИРИ', 'ТЁМНЫЕ ЭЛЬФЫ', 'МАТРИАРХАТ']}
      />

      <div className="min-h-screen" style={{ background: 'rgb(246 244 252)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <DrowBody />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts
                facts={d.quickFacts}
                title="О расе"
                accentColor={ACCENT}
                showCrest={false}
              />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={d.sections} accentColor={ACCENT} />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </article>
  )
}
