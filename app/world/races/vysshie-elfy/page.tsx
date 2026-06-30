import type { Metadata } from 'next'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import VysshieElfyBody from '@/components/world/races/VysshieElfyBody'

export const metadata: Metadata = {
  title: 'Высшие Эльфы — Stormmaster Archive',
  description: 'Хранители Золотой Эры. Высшие Эльфы — мастера изначальной магии, обитатели летающего города «Эльрэил» на высоте 6 км над землёй.',
}

const quickFacts = [
  { label: 'Место обитания',      value: '«Эльрэил» — город на высоте 6 км' },
  { label: 'Правитель',           value: 'Сармузан Святонь' },
  { label: 'Магия',               value: 'Эльфон\'ам — изначальная эльфийская магия' },
  { label: 'Академия',            value: 'Коллегия Чародеев' },
  { label: 'Архив',               value: 'Безграничная Библиотека' },
  { label: 'Политика',            value: 'Строгий нейтралитет' },
  { label: 'Долголетие',          value: 'Многократно превосходит людей' },
]

const sections = [
  { id: 'origin',    title: 'Хранители Золотой Эры' },
  { id: 'elreil',   title: 'Эльрэил — Парящий Город' },
  { id: 'magic',    title: 'Магия' },
  { id: 'appearance', title: 'Внешность' },
  { id: 'society',  title: 'Политика и Нейтралитет' },
]

const ACCENT = '#60A5FA'

export default function VysshieElfyPage() {
  return (
    <article>
      <ArticleHero
        title="Высшие Эльфы"
        subtitle="Расы мира · Stormmaster"
        tagline="Над миром — во всех смыслах этого слова."
        description="Хранители Золотой Эры, обитатели летающего города «Эльрэил». Высшие Эльфы — наиболее древняя раса, наделённая изначальной магией, безграничными знаниями и безупречным презрением к остальным народам мира."
        atmosphere="aura"
        tags={['ДРЕВНЯЯ КРОВЬ', 'ЭЛЬФОН\'АМ', 'ЭЛЬРЭИЛ']}
      />

      <div className="min-h-screen" style={{ background: 'rgb(252 248 242)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <VysshieElfyBody />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts facts={quickFacts} title="О расе" accentColor={ACCENT} showCrest={false} />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={sections} accentColor={ACCENT} />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </article>
  )
}
