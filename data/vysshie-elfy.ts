export type RaceQuickFact = { label: string; value: string }
export type RaceSection   = { id: string; title: string }

export const vysshieElfyData = {
  title: 'Высшие Эльфы',
  subtitle: 'Расы мира · Stormmaster',
  tagline: 'Первые среди эльфов. Хранители изначальной магии.',
  heroDescription:
    'Высшие Эльфы — носители изначальной магии первых эпох. Их города стоят тысячелетиями, их взгляд несёт груз тысяч лет памяти. Гордость — их добродетель и их проклятие.',

  quickFacts: [
    { label: 'Происхождение',  value: 'Первые эльфы, изначальная кровь' },
    { label: 'Тип магии',      value: 'Изначальная магия' },
    { label: 'Долголетие',     value: 'Тысячелетия' },
    { label: 'Общество',       value: 'Аристократия, советы старейшин' },
    { label: 'Характер',       value: 'Гордость, осторожность' },
    { label: 'Чувства',        value: 'Многократно обострены' },
    { label: 'Отношения',      value: 'Дистанция от низших рас' },
  ] satisfies RaceQuickFact[],

  sections: [
    { id: 'origin',      title: 'Происхождение' },
    { id: 'appearance',  title: 'Внешность' },
    { id: 'magic',       title: 'Изначальная Магия' },
    { id: 'society',     title: 'Общество и Аристократия' },
    { id: 'history',     title: 'История' },
  ] satisfies RaceSection[],
}
