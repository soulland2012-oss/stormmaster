import type { Metadata } from 'next'
import { kaslanaData } from '@/data/house-kaslana'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import RelatedArticles from '@/components/lore/RelatedArticles'
import ArticleBody from '@/components/lore/ArticleBody'

export const metadata: Metadata = {
  title: 'Дом Каслана — Stormmaster Archive',
  description: 'Один из древнейших и наиболее почитаемых рыцарских родов известного мира. Символ дисциплины, самоотверженности и непреклонной верности идеалам Света.',
}

const ACCENT = '#D4AF37'

export default function HouseKaslanaPage() {
  const d = kaslanaData

  return (
    <article>
      {/* ── Hero ── */}
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere="light"
tags={['БЛАГОРОДНЫЙ ДОМ', 'АУРА СВЕТА', 'ВЕЛИКОЕ ГЕРЦОГСТВО']}
      />

      {/* ── Main layout ── */}
      <div
        className="bg-atmosphere-light min-h-screen"
        style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            {/* ── MAIN CONTENT ── */}
            <ArticleBody data={d} accent={ACCENT} />

            {/* ── SIDEBAR ── */}
            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts facts={d.quickFacts} />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={d.sections} />
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* ── Related Articles ── */}
      <RelatedArticles articles={d.relatedArticles} />
    </article>
  )
}
