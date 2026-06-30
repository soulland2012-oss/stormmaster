export type RaceQuickFact = { label: string; value: string }
export type RaceSection   = { id: string; title: string }

export const oborotniData = {
  title: 'Оборотни',
  subtitle: 'Расы мира · Stormmaster',
  tagline: 'Двойственность — их природа. Луна — их господин.',
  heroDescription:
    'Оборотни — существа на грани двух миров. В человеческом облике они неотличимы от смертных, но под властью трансформации становятся воплощением первобытной ярости. Стаи, иерархии, кровь — их единственный закон.',

  quickFacts: [
    { label: 'Тип существа',   value: 'Двойственная раса' },
    { label: 'Трансформация',  value: 'Волчья и промежуточная форма' },
    { label: 'Общество',       value: 'Стаи, иерархия альф' },
    { label: 'Регенерация',    value: 'Ускоренная, вне боя' },
    { label: 'Слабость',       value: 'Серебро, лунный цикл' },
    { label: 'Инстинкты',      value: 'Охота, территория, стая' },
    { label: 'Передача',       value: 'Укус или рождение' },
  ] satisfies RaceQuickFact[],

  sections: [
    { id: 'nature',      title: 'Природа Оборотней' },
    { id: 'forms',       title: 'Формы Трансформации' },
    { id: 'society',     title: 'Стаи и Иерархия' },
    { id: 'abilities',   title: 'Способности' },
    { id: 'lore',        title: 'История и Происхождение' },
  ] satisfies RaceSection[],
}
