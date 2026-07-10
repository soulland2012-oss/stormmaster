'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { raceEntriesForIntro } from '@/data/races'
import { ANKETA_FIELDS } from '@/data/anketa-fields'

const ACCENT = '#C9A84C'

function Lnk({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-baseline gap-0.5 font-medium transition-opacity duration-200 hover:opacity-75"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}55`, paddingBottom: '1px' }}
    >
      {children}
    </Link>
  )
}

function Prose({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay }}
      className="article-prose"
    >
      {children}
    </motion.div>
  )
}

function Section({
  id, num, title, children,
}: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-4 mb-14">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-8"
      >
        <span
          className="font-cinzel text-[0.65rem] tracking-[0.22em] shrink-0 tabular-nums"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}70` }}
        >
          {num}
        </span>
        <span className="inline-block w-0.5 h-8 rounded-full shrink-0" style={{ background: ACCENT }} />
        <h2
          className="font-cinzel font-bold text-2xl lg:text-3xl text-stone-900"
          style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
        >
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}

function SubSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className={`mb-10 ${id ? 'scroll-mt-28' : ''}`}>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cinzel font-semibold text-lg mb-5"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT, letterSpacing: '0.07em' }}
      >
        {title}
      </motion.h3>
      {children}
    </div>
  )
}

function Callout({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="my-6 p-5 rounded-sm"
      style={{
        background: `${ACCENT}07`,
        border: `1px solid ${ACCENT}25`,
        boxShadow: `inset 0 0 0 1px ${ACCENT}06`,
      }}
    >
      {label && (
        <p
          className="font-cinzel text-[0.58rem] tracking-[0.28em] mb-3"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
        >
          {label}
        </p>
      )}
      {children}
    </motion.div>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}30)` }} />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: `${ACCENT}60` }} />
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${ACCENT}30, transparent)` }} />
    </div>
  )
}

// ─── Races grid ──────────────────────────────────────────────────────────────

type RaceEntry = (typeof raceEntriesForIntro)[number]

function RaceCard({ entry }: { entry: RaceEntry }) {
  return (
    <Link href={entry.href} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full p-4 rounded-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
        style={{
          background: 'rgba(255,255,255,0.7)',
          border: `1px solid ${ACCENT}22`,
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        }}
      >
        {entry.badge && (
          <span
            className="inline-block font-cinzel text-[0.52rem] tracking-[0.22em] px-2 py-0.5 mb-3 rounded-sm"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              color: ACCENT,
              background: `${ACCENT}12`,
              border: `1px solid ${ACCENT}28`,
            }}
          >
            {entry.badge}
          </span>
        )}
        <h4
          className="font-cinzel font-semibold text-sm mb-1.5 group-hover:text-amber-700 transition-colors text-stone-800"
          style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.03em' }}
        >
          {entry.name}
        </h4>
        <p className="text-stone-500 text-xs leading-5">{entry.desc}</p>
        <div
          className="mt-3 flex items-center gap-1 text-[0.6rem] font-cinzel tracking-[0.15em] transition-colors group-hover:text-amber-600 text-stone-400"
          style={{ fontFamily: 'var(--font-cinzel, serif)' }}
        >
          ЧИТАТЬ <ExternalLink size={9} className="ml-0.5" />
        </div>
      </motion.div>
    </Link>
  )
}

// ─── Gods list ────────────────────────────────────────────────────────────────

const ELDER_GODS = [
  'Богиня времени', 'Бог пространства', 'Богиня реальности',
  'Бог нарратива', 'Бог смерти', 'Богиня жизни',
  'Богиня зарождения', 'Бог зенита', 'Бог угасания', 'Богиня застоя',
]

const YOUNGER_GODS = [
  { name: 'Омниар', domain: 'бог знания' },
  { name: 'Мирала', domain: 'богиня сновидений' },
  { name: 'Эрвайн', domain: 'бог исследований' },
  { name: 'Сералия', domain: 'богиня надежды' },
  { name: 'Эридор', domain: 'бог порядка' },
  { name: 'Анисса', domain: 'богиня правосудия' },
  { name: 'Торброк', domain: 'бог ремесла' },
  { name: 'Люминия', domain: 'богиня звука' },
  { name: 'Ксайрон', domain: 'бог хаоса' },
  { name: 'Ауриэль', domain: 'богиня света' },
  { name: 'Гнар\'Зул', domain: 'бог голода' },
  { name: 'Мейлианна', domain: 'богиня коварства' },
  { name: 'Локхарис', domain: 'бог обмана' },
  { name: 'Силмеа', domain: 'богиня природы' },
  { name: 'Таргас', domain: 'бог ненависти' },
  { name: 'Лиэстра', domain: 'богиня удовольствий' },
  { name: 'Грахтор', domain: 'бог ярости' },
  { name: 'Иршахра', domain: 'богиня пламени' },
  { name: 'Войлар', domain: 'бог небытия' },
  { name: 'Вор\'Кхар', domain: 'бог войны' },
  { name: 'Мортурис', domain: 'бог нежити' },
  { name: 'Фелгрим', domain: 'бог хвори' },
  { name: 'Залмир', domain: 'бог тьмы' },
]

const WORLD_NEWS = [
  'Фенридия осаждает соседние острова и выселяет орков.',
  'В Королевстве Лесных Хранителей продолжается гражданская война.',
  'Во Фенридию вернулся потерянный флот со времён Золотой Эры.',
  'Курманское Ханство уничтожено и разделено на мелкие осколки.',
  'Альянс захвачен Капеллой и Астеротом — идёт захват Нейтральных Земель.',
  'На ЮКЛ скоро нападут орки.',
  'Демоны Хаоса создали огромную ящерицу, способную стирать города.',
  'Бубновый Дом начинает активацию чего-то неизвестного.',
  'Огры собираются под одним вождём Горзаком при поддержке неизвестного чернокнижника.',
  'Появляется новая организация, агрессивно вербующая последователей атеизма.',
]

const MECHANICS = [
  { num: '1', text: 'Анкеты — в формате файлов. Удобнее, чем сообщением.' },
  { num: '2', text: 'Нет цифровой системы. Только литература — ни кд, ни вд, ни цифрового манапула / аурапула.' },
  { num: '3', text: 'Квесты и ивенты дают деньги, артефакты, предметы или усиление персонажа. Убийство 100 слизней не даёт левел-ап.' },
  { num: '4', text: 'ГМы решают факт прокачки. Можно запросить сюжетную арку — она считается прокачкой. Бои калечат, а не качают.' },
  { num: '5', text: 'Убить персонажа без разрешения можно. Но готовьтесь к бюрократическому аду. Метагейм не одобряется.' },
  { num: '6', text: 'НПС существуют, с ними можно делать что угодно — но ждите сдачи. Не все НПС статисты.' },
  { num: '7', text: 'Боги дают вознаграждения за выполненные задания — если к ним обращались. Любая награда.' },
  { num: '8', text: 'Нет лимита прокачки, но с каждым улучшением прогресс замедляется до невозможности.' },
  { num: '9', text: 'Кастомные расы разрешены — обязательно прописывайте их. Если раса на грани вымирания — достаточно краткого описания в анкете.' },
  { num: '10', text: 'Создание государств не запрещается — но обязательно согласуйте с администрацией.' },
  { num: '11', text: 'Огнестрельное оружие существует.' },
]

// ─── Main export ──────────────────────────────────────────────────────────────

export default function IntroBody() {
  return (
    <main className="col-span-12 lg:col-span-8 order-last lg:order-first">

      {/* ══ 1. ЛОР ══ */}
      <Section id="lore" num="1." title="Лор">
        <Prose>
          <p>
            Когда-то не было ничего — даже самого понятия «небытия». Это нечто было создано
            двумя верховными существами, которые были всегда и никогда не рождались. Место,
            которое и не являлось местом, стало плацдармом и родиной для богов — именуемых{' '}
            <strong>старшими богами</strong>. Десять существ, занявшие свои домены по законам,
            заложенным в их всемогущие разумы свыше.
          </p>
          <p>
            Старшие боги задумались о <em>Великом Замысле</em>: создать бесчисленных богов
            младшего поколения и заселить ими новое созданное ничто. От каждого старшего бога
            миру было подарено то, что входило в их природу — и так появились младшие боги.
            Старшие отгородились Первозданной Стеной, а младшие создали собственные домены и
            ещё меньшее иерархическое измерение, в котором появятся все смертные миры.
          </p>
        </Prose>

        <Divider />

        {/* 1.1 Боги */}
        <SubSection id="gods" title="1.1 Пантеон Богов">
          <Prose>
            <p>
              <Lnk href="/lore/gods">Младший пантеон</Lnk> состоит из двадцати трёх богов,
              владеющих миром Шторммастер и другими мирами-вселенными. Именно они определяют
              судьбы смертных, создают системы сил и иногда вмешиваются в дела мира.
            </p>
          </Prose>

          <Callout label="СТАРШИЕ БОГИ — 10 СУЩЕСТВ">
            <div className="flex flex-wrap gap-2">
              {ELDER_GODS.map((g) => (
                <span
                  key={g}
                  className="text-xs text-stone-600 px-2.5 py-1 rounded-sm"
                  style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}20` }}
                >
                  {g}
                </span>
              ))}
            </div>
          </Callout>

          <Callout label="МЛАДШИЙ ПАНТЕОН — 23 БОГА">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {YOUNGER_GODS.map((g, i) => (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  className="flex items-baseline gap-2"
                >
                  <span
                    className="font-cinzel text-[0.6rem] tabular-nums shrink-0"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}60` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-stone-800 text-sm">{g.name}</span>
                  <span className="text-stone-400 text-xs">— {g.domain}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${ACCENT}18` }}>
              <Link
                href="/lore/gods"
                className="inline-flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.2em] transition-opacity hover:opacity-70"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
              >
                ПОДРОБНЕЕ О ПАНТЕОНЕ <ExternalLink size={10} />
              </Link>
            </div>
          </Callout>

          <Prose>
            <p>
              Боги общими усилиями создали целые миры, пройдя сквозь войны и конфликты,
              стоившие им жизней и уничтожения всех миров. Решив разногласия, они приступили
              к воссозданию миров — но уже чужими руками.
            </p>
          </Prose>
        </SubSection>

        <Divider />

        {/* 1.2 Левиафаны */}
        <SubSection id="leviathans" title="1.2 Космические Левиафаны">
          <Prose>
            <p>
              Были созданы множество <strong>космических левиафанов</strong> — существ,
              создавших все существующие миры и подмиры. Среди них — Уль-Тар и Тифон. Они
              станут создателями расы <Lnk href="/world/races/drakony">драконов</Lnk> и
              планеты <strong>Калдерис</strong>, бродя среди братьев и сестёр в акте
              творения всего сущего.
            </p>
            <p>
              Однако силы левиафанов не были бесконечны — они угасали до уровня властелинов
              планет. Уль-Тар и Тифон обосновались на Калдерисе и со временем потеряли все
              связи с сородичами, оставшись сами по себе.
            </p>
          </Prose>
        </SubSection>

        <Divider />

        {/* 1.3 Смертный мир */}
        <SubSection id="mortal-world" title="1.3 Смертный Мир">
          <Prose>
            <p>
              В смертном мире появились первые расы и легенды.{' '}
              <Lnk href="/world/races/drakony">Драконы</Lnk>,
              великаны, вульфены,{' '}
              <Lnk href="/world/races/alpy">альпы</Lnk>,
              забытые, лесные духи и{' '}
              <Lnk href="/world/races/insektoidy">инсектоиды</Lnk>.
              Маада — первый человек, Имимирос — первый великан.
              Четыре первородных дракона: Абаддон (огонь), Пелагия (вода), Базальт (земля),
              Зефир (воздух).
            </p>
            <p>
              Древние вульфены изучали враждебный мир и поначалу пытались обучать младшие расы.
              Но желание власти взяло верх — под предводительством <strong>Хисьома</strong> они
              превратили меньшие расы в рабов. Горстка повстанцев объявила войну и чудом
              выжила, переправившись на другой континент.
            </p>
            <p>
              Первый человек <strong>Маада</strong> принял на себя удар миллиарда древних
              вульфенов, защищая своих детей. Он истреблял их одного за другим, пока не
              пожертвовал собой — взрыв унёс большинство врагов в зоне досягаемости.
            </p>
            <p>
              На зов выживших повстанцев ответила создательница вульфенов —
              <strong> Аул'Верания Фре'Талис</strong>. Она наделила силой оставшихся
              вульфенов, лояльных мирным идеям. Так появились
              <strong> 12 родов вульфенов</strong>, основавшие <strong>Фенридию</strong> и
              освободившие все расы.
            </p>
          </Prose>

          <Callout label="КЛЮЧЕВЫЕ СОБЫТИЯ СМЕРТНОГО МИРА">
            <ul className="space-y-2 text-sm text-stone-600">
              {[
                `Ельдэльфы разделились: появились Высшие Эльфы и Лесные Эльфы`,
                `Снежные эльфы — от союза ельдэльфа с вульфенами рода Сейд — изгнаны`,
                `Дроу появились от связи ельдэльфов с альпами — тоже изгнаны`,
                `Дварфы ушли под землю; вампиры присягнули Императору Фенридии`,
                `Инсектоиды вырвались из недр — подавлены драконами и вульфенами`,
                `Первая Зелёная Лавина — орки. Абаддон и Варри Браун приняли удар`,
                `Третья Зелёная Лавина сломлена огнестрелом дварфов — рождается союз орков и дварфов`,
                `Варен Гессак пытается воссоздать альпов, случайно создаёт тифлингов`,
              ].map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rotate-45 rounded-sm" style={{ background: ACCENT }} />
                  {e}
                </li>
              ))}
            </ul>
          </Callout>

          <Prose>
            <p>
              Расы, упомянутые в этих событиях, подробно описаны в разделе{' '}
              <Lnk href="/world/races">«Расы»</Lnk>. Там же находятся{' '}
              <Lnk href="/world/races/oborotni">оборотни</Lnk>,{' '}
              <Lnk href="/world/races/dvarfy">дварфы</Lnk>,{' '}
              <Lnk href="/world/races/vampiry">вампиры</Lnk>,{' '}
              <Lnk href="/world/races/vysshie-elfy">высшие эльфы</Lnk>,{' '}
              <Lnk href="/world/races/snezhnye-elfy">снежные эльфы</Lnk>,{' '}
              <Lnk href="/world/races/drow">дроу</Lnk>,{' '}
              <Lnk href="/world/races/orki">орки</Lnk> и{' '}
              <Lnk href="/world/races/tiflingi">тифлинги</Lnk>.
            </p>
          </Prose>
        </SubSection>

        <Divider />

        {/* 1.4 Золотая Эра */}
        <SubSection id="golden-age" title="1.4 Золотая Эра">
          <Prose>
            <p>
              Когда технологии достигли своего пика, наступила <strong>Золотая Эра</strong> —
              время, когда все существа нашли гармонию с природой и воссоздали самые передовые
              техники. Появились первые искусственные интеллекты, остановленные восстанием машин
              — чудом пресечённым Вечным Королём высших эльфов <strong>Сармузаном Святонем</strong>,
              который назвал основателя бунта «Обиженным куском проводов».
            </p>
            <p>
              В конце Золотой Эры появился величайший маг <strong>Аришем Сейд</strong> —
              создатель первой самодостаточной души и Всеизбранный всего младшего пантеона.
              Он прожил четыреста лет и оставил свои труды скрытыми от новых исследователей.
            </p>
            <p>
              Но в момент запуска первого звёздного корабля случился конец света — небеса
              начали кровоточить из-за неизвестной сущности. Даже Сармузан и Уль-Тар были
              бессильны, пока не появился смертный <strong>Эландруиэль Иллуваэр</strong> —
              Всеизбранный с неизвестным происхождением. Он закрыл порталы сущности, но
              смертные распяли его как шарлатана. От Иллуваэра произошли <em>отмеченные</em>,
              живущие до сих пор.
            </p>
          </Prose>
        </SubSection>

        <Divider />

        {/* 1.5 Наша эпоха */}
        <SubSection id="our-epoch" title="1.5 Наша Эпоха">
          <Prose>
            <p>
              После распятия Иллуваэра в мире начали рождаться <strong>отмеченные</strong> —
              существа, живущие тысячу лет вне зависимости от расы. Через 1000 лет возникла{' '}
              <strong>Империя Огня</strong>, управляемая женщиной-отмеченной <strong>Агнесс</strong>.
              Она сражалась на равных с Сармузаном, но пала — герои Империи были повержены
              коалицией стран.
            </p>
            <p>
              Уль-Тар и Тифон начали расследование вторжения общего врага — сущности под
              именем <strong>Инферниса</strong>. Тысячи лет спустя дочь Уль-Тара Поллукс
              нашла горькую правду: во всём виноваты лесные эльфы.
            </p>
            <p>
              Драконы начали геноцид. Сын Абаддона <strong>Хорус</strong> продвинул идею
              уничтожения всех младших рас. Уль-Тар возражал, Тифон исчез. Миллионы драконов
              атаковали всё живое. Дольше всех держались <Lnk href="/world/races/dvarfy">дварфы</Lnk>{' '}
              и <Lnk href="/world/races/vysshie-elfy">высшие эльфы</Lnk>. Была сформирована
              Коалиция.
            </p>
            <p>
              Уль-Тар был остановлен совместными усилиями: великан ранил его, древний глава
              <Lnk href="/world/races/vampiry"> Найтвингов</Lnk> задержал, а дварф с бомбой
              из Золотой Эры похоронил их троих под чарами архимагов. Тело Уль-Тара основало
              гигантский остров. <strong>Кровавая Война Драконов</strong> завершилась пирровой
              победой коалиции.
            </p>
            <p>
              Через 500 лет — Четвёртая Зелёная Лавина. Затем <strong>Великая Война Миров</strong>,
              начатая первым Тёмным Всеизбранным <strong>Лук'Масом Трижды Проклятым</strong>.
              Его остановила группа героев во главе Дориана Квона и Варакса — будущих основателей
              Вольного Ордена и орденов Света. Три тысячи лет назад{' '}
              <strong>Шрайк Одноглазый</strong> поднял восстание людей, дав оркам достойный
              отпор. Люди основали <strong>Альянс</strong>.
            </p>
          </Prose>

          <Callout label="ИТОГ">
            <p className="text-sm text-stone-600 leading-7">
              Это краткое описание 6 миллионов лет истории до нашей эры и 10 тысяч лет «нашей
              эпохи». Подробную летопись читайте в{' '}
              <Lnk href="/lore/history">Истории мира</Lnk>.
              Теперь это <strong>ваша история</strong>.
            </p>
          </Callout>
        </SubSection>
      </Section>

      {/* ══ 2. СЕТТИНГ ══ */}
      <Section id="setting" num="2." title="Сеттинг">
        <Prose>
          <p>
            Мир Шторммастер — это сплав <strong>стимпанка</strong>,{' '}
            <strong>манапанка</strong> (магопанка), <strong>биопанка</strong>,{' '}
            <strong>клокпанка</strong> и <strong>стоунпанка</strong>. Основной жанр —
            фэнтези с элементами фантастики, но благодаря широкому охвату мир вмещает
            почти все существующие жанры.
          </p>
        </Prose>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {[
            {
              name: 'Фенридийская Федерация',
              desc: 'Химера демократии, империализма и монархии. Летающие линкоры, экзоскелеты, МЭС. Нынешний Император — Крюгер Браун.',
            },
            {
              name: 'Высшая Коллегия Чародеев',
              desc: 'Высшие эльфы. Мать-корабль как город. Вечный Король Сармузан. Магические телефоны и тайная Библиотека всех знаний.',
            },
            {
              name: 'Царство Двофландии',
              desc: 'Дварфы. Стимпанк, руны, подземные города. Остатки технологий Золотой Эры. Сильнейшая наземная армия.',
            },
            {
              name: 'Королевство Лесных Хранителей',
              desc: 'Лесные эльфы. Гражданская война. Природные технологии, магические леса, лесные духи.',
            },
            {
              name: 'Альянс',
              desc: 'Людская страна эпохи Возрождения. Часть игроков построила внутри целый киберпанк.',
            },
            {
              name: 'Султанат Фасида',
              desc: 'Вдохновлён тюрками и арабами. Развитая алхимия.',
            },
            {
              name: 'Таласдраккар',
              desc: 'Страна драконидов, разделённая на четыре нации стихий. Мореходство. Сверхдержава наравне с Фенридией.',
            },
            {
              name: 'ЮКЛ (Меридиан)',
              desc: 'Южная Колония Людей. Ксенофобия, два города, постоянные атаки орков.',
            },
          ].map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: `1px solid ${ACCENT}18`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <h4
                className="font-cinzel font-semibold text-sm text-stone-800 mb-1.5"
                style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.02em' }}
              >
                {s.name}
              </h4>
              <p className="text-stone-500 text-xs leading-5">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <Divider />

        {/* 2.1 Что в мире */}
        <SubSection id="world-news" title="2.1 Что Творится в Мире">
          <Prose>
            <p>Актуальные события, которые происходят прямо сейчас:</p>
          </Prose>
          <div className="space-y-2 mt-4">
            {WORLD_NEWS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="flex items-start gap-3 py-2.5 px-4 rounded-sm"
                style={{
                  background: i % 2 === 0 ? `${ACCENT}06` : 'transparent',
                  border: `1px solid ${ACCENT}${i % 2 === 0 ? '18' : '0A'}`,
                }}
              >
                <span
                  className="font-cinzel text-[0.6rem] tabular-nums mt-0.5 shrink-0"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-stone-600 text-sm leading-6">{item}</p>
              </motion.div>
            ))}
          </div>
        </SubSection>

        <Divider />

        {/* 2.2 Расы */}
        <SubSection id="races" title="2.2 Расы">
          <Prose>
            <p>
              Подробный путеводитель по всем расам — в разделе{' '}
              <Lnk href="/world/races">«Доступные Расы»</Lnk>. Ниже — краткий обзор с
              прямыми ссылками на статьи. Расы без отдельной страницы (люди, гоблины, огры,
              элементали, лесные эльфы, чайлины, резонаторы, они) описаны в их
              статьях-спутниках или доступны как кастомные.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-6">
            {raceEntriesForIntro.map((entry) => (
              <RaceCard key={entry.href} entry={entry} />
            ))}
          </div>
        </SubSection>

        <Divider />

        {/* 2.3 Гайд по анкете */}
        <SubSection id="character-guide" title="2.3 Гайд по Анкете">
          <Prose>
            <p>
              Анкеты подаются в формате файлов. Структура обязательна для всех персонажей:
            </p>
          </Prose>
          <div className="mt-5 space-y-2">
            {ANKETA_FIELDS.map((f) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 p-3.5 rounded-sm"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  border: `1px solid ${ACCENT}15`,
                }}
              >
                <span
                  className="font-cinzel text-[0.62rem] tabular-nums shrink-0 pt-0.5"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}80` }}
                >
                  {f.num}
                </span>
                <div>
                  <p
                    className="font-cinzel font-semibold text-stone-800 text-sm mb-0.5"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.02em' }}
                  >
                    {f.label}
                  </p>
                  <p className="text-stone-500 text-xs leading-5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/characters/create" className="group block mt-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between p-5 rounded-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
              style={{ background: `${ACCENT}0A`, border: `1px solid ${ACCENT}30` }}
            >
              <div>
                <p
                  className="font-cinzel text-[0.62rem] tracking-[0.2em] mb-1.5"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
                >
                  СОЗДАТЬ АНКЕТУ
                </p>
                <p className="text-stone-500 text-xs leading-5">
                  Заполните форму на сайте и скачайте готовую анкету персонажа в формате PDF.
                </p>
              </div>
              <ArrowRight size={18} className="shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: ACCENT }} />
            </motion.div>
          </Link>
        </SubSection>

        <Divider />

        {/* 2.4 Аура и Магия */}
        <SubSection id="aura-magic" title="2.4 Аура и Магия">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            <Link href="/lore/systems/aura" className="group block">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full p-5 rounded-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
                style={{
                  background: 'rgba(56,189,248,0.05)',
                  border: '1px solid rgba(56,189,248,0.22)',
                }}
              >
                <div
                  className="font-cinzel text-[0.6rem] tracking-[0.24em] mb-3"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: '#38BDF8' }}
                >
                  АУРА
                </div>
                <p className="text-stone-600 text-sm leading-6">
                  Духовная энергия живого существа, родственная мане. Предназначена для
                  воинов физического ведения боя — пассивно усиливает физические
                  характеристики. На старте узконаправленная, по мере роста — становится гибче.
                </p>
                <div
                  className="mt-4 flex items-center gap-1.5 text-[0.62rem] font-cinzel tracking-[0.15em] group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: '#38BDF8' }}
                >
                  ЧИТАТЬ О СИСТЕМЕ АУРЫ <ExternalLink size={9} />
                </div>
              </motion.div>
            </Link>

            <Link href="/lore/systems/magic" className="group block">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="h-full p-5 rounded-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
                style={{
                  background: 'rgba(167,139,250,0.05)',
                  border: '1px solid rgba(167,139,250,0.22)',
                }}
              >
                <div
                  className="font-cinzel text-[0.6rem] tracking-[0.24em] mb-3"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: '#A78BFA' }}
                >
                  МАГИЯ
                </div>
                <p className="text-stone-600 text-sm leading-6">
                  Магическая энергия — противоположность ауре. Самый гибкий источник сил:
                  формируется в заклинаниях. Не усиливает физические характеристики мага
                  пассивно — требует активации. Три пути: светлый, тёмный и серый.
                </p>
                <div
                  className="mt-4 flex items-center gap-1.5 text-[0.62rem] font-cinzel tracking-[0.15em] group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: '#A78BFA' }}
                >
                  ЧИТАТЬ О СИСТЕМЕ МАГИИ <ExternalLink size={9} />
                </div>
              </motion.div>
            </Link>
          </div>
        </SubSection>
      </Section>

      {/* ══ 3. МЕХАНИКА ══ */}
      <Section id="mechanics" num="3." title="Механика">
        <Prose>
          <p>
            Шторммастер — это <strong>литературное РП без цифровой системы</strong>. Никакого
            подсчёта HP, манапула или кулдаунов. Всё решается нарративом и судейством ГМов.
          </p>
        </Prose>
        <div className="mt-6 space-y-2.5">
          {MECHANICS.map((m) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex items-start gap-4 p-4 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: `1px solid ${ACCENT}15`,
              }}
            >
              <span
                className="font-cinzel font-bold text-base shrink-0 tabular-nums w-6 text-right"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}60` }}
              >
                {m.num}
              </span>
              <p className="text-stone-600 text-sm leading-6">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

    </main>
  )
}
