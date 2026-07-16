import type { Metadata } from 'next'
import { kazimezhData as d } from '@/data/countries/kazimezh'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import RelatedArticles from '@/components/lore/RelatedArticles'
import CountryArticleBody from '@/components/world/CountryArticleBody'

export const metadata: Metadata = {
  title: 'Казимеж — Stormmaster Archive',
  description: 'Меритократическое королевство зверолюдей и всех рас со столицей Камелот — сила через заслуги, а не происхождение.',
}

export default function KazimezhPage() {
  return (
    <article>
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere={d.atmosphere}
        tags={['ФЕДЕРАЦИЯ ФЕНРИДИЯ', 'МЕРИТОКРАТИЯ', 'МНОГОРАСОВОЕ КОРОЛЕВСТВО']}
      />

      <div className="min-h-screen" style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <CountryArticleBody accent={d.accent} sections={d.body} />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts facts={d.quickFacts} title="О государстве" accentColor={d.accent} showCrest={false} />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={d.sections} accentColor={d.accent} />
              </div>
            </aside>

          </div>
        </div>
      </div>

      <RelatedArticles articles={d.relatedArticles} />
    </article>
  )
}
