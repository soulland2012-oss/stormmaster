import type { Metadata } from 'next'
import { kultIstoriyData } from '@/data/kult-istoriy'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import RelatedArticles from '@/components/lore/RelatedArticles'
import KultIstoriyBody from '@/components/lore/KultIstoriyBody'

export const metadata: Metadata = {
  title: 'Культ Историй — Stormmaster Archive',
  description: 'Тайный культ нейтрального бога Историй и Памяти. Он исполнит любое желание — но платой станет воспоминание, стёртое из мира навсегда.',
}

const ACCENT = '#B8935A'

export default function KultIstoriyPage() {
  const d = kultIstoriyData

  return (
    <article>
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere="memory"
        tags={['ОРГАНИЗАЦИЯ', 'КУЛЬТ', 'БЕЗ АФФИЛИАЦИИ']}
      />

      <div
        className="min-h-screen"
        style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <KultIstoriyBody />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts facts={d.quickFacts} title="О культе" accentColor={ACCENT} showCrest={false} />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={d.sections} accentColor={ACCENT} />
              </div>
            </aside>

          </div>
        </div>
      </div>

      <RelatedArticles articles={d.relatedArticles} />
    </article>
  )
}
