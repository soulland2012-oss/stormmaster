export type RaceQuickFact = { label: string; value: string }
export type RaceSection   = { id: string; title: string }

export const snezhnyeElfyData = {
  title: 'Снежные Эльфы',
  subtitle: 'Расы мира · Stormmaster',
  tagline: 'Рождённые в вечном льду. Холод — их дом.',
  heroDescription:
    'Снежные Эльфы обитают там, где другие расы погибают. На краю мира, в вечных буранах и ледяных горах, они создали культуру выживания и силы. Мастера ледяного колдовства и непревзойдённые охотники.',

  quickFacts: [
    { label: 'Ареал',          value: 'Северные ледяные земли' },
    { label: 'Тип магии',      value: 'Ледяная и морозная магия' },
    { label: 'Выносливость',   value: 'Абсолютная морозостойкость' },
    { label: 'Общество',       value: 'Охотничьи кланы' },
    { label: 'Внешность',      value: 'Белая кожа, светлые волосы' },
    { label: 'Характер',       value: 'Молчаливость, стойкость' },
    { label: 'Связь',          value: 'С холодом и льдом' },
  ] satisfies RaceQuickFact[],

  sections: [
    { id: 'origin',      title: 'Происхождение' },
    { id: 'appearance',  title: 'Внешность' },
    { id: 'magic',       title: 'Ледяная Магия' },
    { id: 'society',     title: 'Кланы и Быт' },
    { id: 'history',     title: 'История' },
  ] satisfies RaceSection[],
}
