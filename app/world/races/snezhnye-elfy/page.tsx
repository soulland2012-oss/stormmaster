import type { Metadata } from 'next'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import SnezhnyeElfyBody from '@/components/world/races/SnezhnyeElfyBody'

export const metadata: Metadata = {
  title: 'Снежные Эльфы — Stormmaster Archive',
  description: 'Нар\'Элей — Кочевники Севера. Мастера криомагии, хранители Пути, почитатели Вечной Странницы Ит\'Нар.',
}

const quickFacts = [
  { label: 'Самоназвание',        value: 'Нар\'Элей' },
  { label: 'Образ жизни',         value: 'Кочевой' },
  { label: 'Магия',               value: 'Криомагия, аэромантия, друидство' },
  { label: 'Божество',            value: 'Ит\'Нар — Вечная Странница' },
  { label: 'Устойчивость',        value: 'Генетическая к экстремальному холоду' },
  { label: 'Рост',                value: 'Около 170 см' },
  { label: 'Регенерация',         value: 'Ускоренная после ранений' },
]

const sections = [
  { id: 'origin',    title: 'Нар\'Элей' },
  { id: 'history',   title: 'История: Хроники Странствий' },
  { id: 'magic',     title: 'Криомагия' },
  { id: 'appearance', title: 'Внешность' },
  { id: 'society',   title: 'Общество и Этикет' },
  { id: 'religion',  title: 'Ит\'Нар — Вечная Странница' },
]

const ACCENT = '#67E8F9'

export default function SnezhnyeElfyPage() {
  return (
    <article>
      <ArticleHero
        title="Снежные Эльфы"
        subtitle="Расы мира · Stormmaster"
        tagline="Нар'Элей. Кочевники. Дети Вечного Севера."
        description="Изгнанные из тёплых земель, они нашли дом в вечных льдах. Нар'Элей — мастера криомагии, почитатели Вечной Странницы, народ, чья жизнь — бесконечное движение вперёд."
        atmosphere="aura"
        tags={['НАР\'ЭЛЕЙ', 'КРИОМАГИЯ', 'ИТ\'НАР']}
      />

      <div className="min-h-screen" style={{ background: 'rgb(252 248 242)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <SnezhnyeElfyBody />

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
