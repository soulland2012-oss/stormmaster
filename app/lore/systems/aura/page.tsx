import type { Metadata } from 'next'
import { auraData } from '@/data/aura'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import AuraBody from '@/components/lore/AuraBody'

export const metadata: Metadata = {
  title: 'Аура — Stormmaster Archive',
  description: 'Внутренняя жизненная сила, рождаемая душой и хранимая в Ядре. Путь воинов, рыцарей и бойцов ближнего боя. Пять рангов мастерства — от Пользователя до Прайма.',
}

const ACCENT = '#38BDF8'

export default function AuraPage() {
  const d = auraData

  return (
    <article>
      {/* Hero */}
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere="aura"
        tags={['ВНУТРЕННЯЯ ЭНЕРГИЯ', 'СИСТЕМА СИЛЫ', 'ПУТЬ ВОИНА']}
      />

      {/* Main layout */}
      <div
        className="min-h-screen"
        style={{ background: 'rgb(242 248 255)' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            {/* Main content */}
            <AuraBody />

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
