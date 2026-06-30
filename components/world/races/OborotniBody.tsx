'use client'

import { motion } from 'framer-motion'

const ACCENT = '#F59E0B'

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75 }}
      className="article-prose"
    >
      {children}
    </motion.div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="font-cinzel font-bold text-2xl lg:text-3xl text-stone-900 mb-8 flex items-center gap-4"
        style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
      >
        <span className="inline-block w-1 h-8 rounded-full shrink-0" style={{ background: ACCENT }} />
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cinzel font-semibold text-lg mb-4"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT, letterSpacing: '0.06em' }}
      >
        {title}
      </motion.h3>
      {children}
    </div>
  )
}

const clans = [
  { name: 'Клан Хамар', founder: 'Хамар — «Молотом»', description: 'Первые среди оборотней. Непреклонные воины, чьи удары сотрясали горы. Считаются прародителями оборотней. Мощные, выносливые — кулаки Хамара сокрушали камень.', traits: ['Сила ×3.5', 'Выносливость', 'Прочность'] },
  { name: 'Клан Ульв', founder: 'Ульфрик — «Волчий Князь»', description: 'Истинные охотники. Скорость, скрытность, манёвренность — их стихия. В звериной форме они неуловимы как тени.', traits: ['Скорость ×2.5', 'Ловкость', 'Охота'] },
  { name: 'Клан Смид', founder: 'Свейн — «Кузнец»', description: 'Мастера металлургии и артефактов. Выковывали оружие и амулеты для всех родов. Обладают способностью усиливать собственную прочность до стали.', traits: ['Прочность ×2.5', 'Ремесло', 'Артефакты'] },
  { name: 'Клан Сейд', founder: 'Стальгард — пиромант', description: 'Провидцы и шаманы. Способны читать будущее, используя магические потоки. Первыми открыли связь оборотней с магией.', traits: ['Магия', 'Предвидение', 'Ритуалы'] },
  { name: 'Клан Хайд', founder: 'Скади — «Та, что выбрала зиму»', description: 'Хозяйка леса. Хайд — защитники слабых и хранители традиций. Женщина Скади выбрала мудрость над яростью и создала клан целителей и следопытов.', traits: ['Скрытность', 'Целительство', 'Следопытство'] },
  { name: 'Клан Виск', founder: 'Фенрир — «Неуловимая»', description: 'Мастера иллюзий и теней. Способны маскироваться в темноте, создавая иллюзии и обманывая противника. Лучшие шпионы и диверсанты среди оборотней.', traits: ['Иллюзии', 'Маскировка', 'Разведка'] },
  { name: 'Клан Браун', founder: 'Хакон — «медведь»', description: 'Обладатели чудовищной мощи. В звериной форме достигают размеров медведя. Непреклонны и бесстрашны — истинные берсерки, терроризировавшие врагов.', traits: ['Сила ×4', 'Берсерки', 'Страх'] },
  { name: 'Клан Скьольд', founder: 'Сольвейг — «Защитник»', description: 'Воины-защитники. Прочность их тела в звериной форме достигает стальной брони. Стражи клана, телохранители, строители крепостей.', traits: ['Прочность ×2.5', 'Защита', 'Стойкость'] },
  { name: 'Клан Фрам', founder: 'Торстейн', description: 'Провидцы и мудрецы. Хранители знаний и летописей оборотней. Считаются хранителями древних традиций всех родов.', traits: ['Мудрость', 'Знания', 'История'] },
  { name: 'Клан Торн', founder: 'Хафтор', description: 'Отравители. Их когти и яды смертельны. Умеют парализовать врагов ядовитым укусом. Мастера ядов и лекарственных трав.', traits: ['Яды', 'Когти', 'Скорость'] },
  { name: 'Клан Орм', founder: 'Олаф — «Змей»', description: 'Гибкие и скользкие как змеи. Мастера обмана и скрытых атак. Их движения подобны ветру — незаметны и стремительны.', traits: ['Гибкость', 'Обман', 'Яды'] },
  { name: 'Клан Стал', founder: 'Вальдемар — «Стальной Камень»', description: 'Истреблены в прошлом. Обладали невероятной прочностью костной ткани. Единственный клан, чьи оборотни становились практически неуязвимыми в звериной форме.', traits: ['Прочность ×4', 'ИСТРЕБЛЕНЫ'] },
]

export default function OborotniBody() {
  return (
    <div className="col-span-12 lg:col-span-8 space-y-16">

      <Section id="nature" title="Природа Оборотней">
        <Prose>
          <p>
            Оборотни — существа двойственной природы, балансирующие между человеческим разумом и звериным инстинктом. Благородные и чистые в своей сущности, они являются хранителями слабых, храбрыми воинами и искусными охотниками. В человеческом облике они направляют ясный разум и стальной самоконтроль. Их волчья сущность — это не проклятие, а дар, который они обращают на защиту своих.
          </p>
          <p>
            Оборотни обладают невероятной силой, скоростью и выносливостью. Они намного сильнее смертных, обитают в тёмных лесах и горах. Их волчья сущность — это продолжение жизненной силы, живущей в каждом из них.
          </p>
        </Prose>
        <Sub title="Связь с предками">
          <Prose>
            <p>
              Оборотни способны видеть прошлое своих предшественников — это единственный способ восстановить утраченную способность. Продолжительность жизни превосходит людей (до 250 лет). Однако они способны оплодотворить лишь другого оборотня. Прикосновение к оружию предка позволяет на короткое время увидеть его прошлое и обрести частичку его силы.
            </p>
          </Prose>
        </Sub>
      </Section>

      <Section id="forms" title="Формы и Способности">
        <Prose>
          <p>
            Система превращения оборотней даёт каждому клану уникальные физические и магические характеристики. Тогда оборотни ковали своё место среди народов.
          </p>
        </Prose>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { form: 'Человеческая форма', desc: 'Неотличимы от смертных. Острые чувства, быстрая реакция, физическое превосходство. Ясный разум и самоконтроль.' },
            { form: 'Промежуточная форма', desc: 'Сочетание силы зверя с человеческим интеллектом. Когти, клыки, шерсть — при сохранении способности мыслить. Наиболее боеспособная форма.' },
            { form: 'Звериная форма', desc: 'Полная трансформация. Размеры зависят от клана. Все чувства обострены до предела. Сила и скорость увеличиваются многократно.' },
          ].map(f => (
            <motion.div
              key={f.form}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-sm p-4"
              style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}20` }}
            >
              <p className="font-cinzel text-[0.68rem] tracking-wide mb-1.5 font-semibold" style={{ color: ACCENT, fontFamily: 'var(--font-cinzel, serif)' }}>{f.form}</p>
              <p className="text-stone-600 text-sm leading-6">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="clans" title="Двенадцать Кланов">
        <Prose>
          <p>
            Испокон веков оборотни организованы в кланы. Каждый клан — это своя легенда, свой основатель, своя специализация. Одиннадцать кланов существуют по сей день. Клан Стал — истреблён.
          </p>
        </Prose>
        <div className="mt-8 space-y-4">
          {clans.map((clan, i) => (
            <motion.div
              key={clan.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="rounded-sm p-5"
              style={{
                background: clan.name === 'Клан Стал' ? 'rgba(0,0,0,0.04)' : `${ACCENT}06`,
                border: `1px solid ${clan.name === 'Клан Стал' ? 'rgba(0,0,0,0.1)' : `${ACCENT}20`}`,
                opacity: clan.name === 'Клан Стал' ? 0.65 : 1,
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-cinzel font-semibold text-stone-900 text-sm" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}>{clan.name}</p>
                  <p className="text-[0.65rem] mt-0.5" style={{ color: `${ACCENT}90` }}>Основатель: {clan.founder}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {clan.traits.map(t => (
                    <span key={t} className="text-[0.6rem] px-2 py-0.5 rounded-sm" style={{ color: ACCENT, background: `${ACCENT}12`, border: `1px solid ${ACCENT}30` }}>{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-stone-600 text-sm leading-6">{clan.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="society" title="Общество и Иерархия">
        <Sub title="Система иерархии">
          <Prose>
            <p>
              Оборотни организованы в стаи под управлением альфы. Власть держится на силе и авторитете. Клан — высшая социальная единица. Благородные оборотни — Чистота крови — рождены оборотнями, а не превращены укусом. Их способности значительно выше. Превращённые оборотни — полноправные члены клана, но никогда не достигают полного потенциала.
            </p>
          </Prose>
        </Sub>
        <Sub title="Кодекс">
          <Prose>
            <ul>
              <li>Защита слабых — священный долг сильного</li>
              <li>Верность клану и стае выше личных интересов</li>
              <li>Честь в бою — единственная валюта уважения</li>
              <li>Связь с предками — источник силы и мудрости</li>
              <li>Территория — нерушима, вторжение карается смертью</li>
            </ul>
          </Prose>
        </Sub>
      </Section>

      <Section id="history" title="История">
        <Sub title="Империя Аул'Верания и Битва Первых">
          <Prose>
            <p>
              Аул'Верания — первые оборотни — создали систему кланов и ковали своё место среди народов Калдериса. Битва полководцев стала переломным моментом, когда оборотни доказали свою военную мощь другим расам. Империя оборотней в свои золотые годы контролировала обширный регион континента.
            </p>
          </Prose>
        </Sub>
        <Sub title="Легенда о Раскаянных">
          <Prose>
            <p>
              Раскаянные — оборотни, воспротивившиеся кровожадным инстинктам и принявшие магию как дополнение к природной силе. Отвергнутые сородичами за «мягкость», они стали скитальцами, однако принесли в мир новые знания о связи оборотней с магическими потоками.
            </p>
          </Prose>
        </Sub>
      </Section>

    </div>
  )
}
