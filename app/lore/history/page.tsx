import type { Metadata } from 'next'
import { worldHistoryData } from '@/data/world-history'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import RelatedArticles from '@/components/lore/RelatedArticles'
import WorldHistoryBody from '@/components/lore/WorldHistoryBody'

export const metadata: Metadata = {
  title: 'История мира — Stormmaster Archive',
  description: 'Летопись Калдериса от рождения в Пустоте до дней нынешних: Прародители, Войны Небес, рождение смертных рас и великие эпохи.',
}

const ACCENT = '#C9A84C'

const relatedArticles = [
  {
    title: 'Пантеон богов',
    href: '/lore/gods',
    description: 'Старшие и Младшие Боги Калдериса — их домены, связи и судьбы.',
    category: 'ПАНТЕОН',
    color: '#C9A84C',
  },
  {
    title: 'Системы мира',
    href: '/lore/systems',
    description: 'Аура, Магия и другие фундаментальные системы мироздания.',
    category: 'СИСТЕМЫ',
    color: '#A78BFA',
  },
  {
    title: 'Дом Каслана',
    href: '/lore/house-kaslana',
    description: 'Один из древнейших рыцарских родов, символ дисциплины и Света.',
    category: 'ДОМ',
    color: '#D4AF37',
  },
]

export default function WorldHistoryPage() {
  const d = worldHistoryData

  return (
    <article>
      {/* ── Hero ── */}
      <ArticleHero
        title={d.title}
        subtitle={d.subtitle}
        tagline={d.tagline}
        description={d.heroDescription}
        atmosphere="light"
        tags={['ИСТОРИЯ МИРА', 'КАЛДЕРИС', 'ОТ НАЧАЛА ВРЕМЁН']}
      />

      {/* ── Main layout ── */}
      <div
        className="min-h-screen"
        style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            {/* ── MAIN CONTENT ── */}
            <WorldHistoryBody data={d} />

            {/* ── SIDEBAR ── */}
            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts
                facts={d.quickFacts}
                title="Хроника"
                accentColor={ACCENT}
                showCrest={false}
              />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={d.sections} />
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* ── Related Articles ── */}
      <RelatedArticles articles={relatedArticles} />
    </article>
  )
}
