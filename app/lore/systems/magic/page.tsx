import type { Metadata } from 'next'
import { magicData } from '@/data/magic'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import MagicBody from '@/components/lore/MagicBody'

export const metadata: Metadata = {
  title: 'Магия — Stormmaster Archive',
  description: 'Феномен Калдериса. Мана пронизывает каждое существо. Три пути — Тёмный, Светлый, Серый. Домены без предела. Пять рангов от Ученика до Архимага.',
}

const ACCENT = '#A78BFA'

export default function MagicPage() {
  const d = magicData

  return (
    <article>
      {/* Hero */}
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere="magic"
        tags={['ВНЕШНЯЯ ЭНЕРГИЯ', 'СИСТЕМА СИЛЫ', 'ПУТЬ МАГА']}
      />

      {/* Main layout */}
      <div
        className="min-h-screen"
        style={{ background: 'rgb(246 243 255)' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            {/* Main content */}
            <MagicBody />

            {/* Sidebar */}
            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts
                facts={d.quickFacts}
                title="О системе"
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
