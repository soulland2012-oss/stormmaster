export type RaceQuickFact = { label: string; value: string }
export type RaceSection   = { id: string; title: string }

export const drowData = {
  title: 'Дроу',
  subtitle: 'Расы мира · Stormmaster',
  tagline: 'Изгнанники, избравшие тьму. В глубинах рождается власть.',
  heroDescription:
    'Илитиири — дети Великого Изгнания. Матриархальные Дома, Теневое Плетение, подземные крепости. Дроу не просто выжили — они создали цивилизацию, построенную на манипуляции, страхе и абсолютной власти.',

  quickFacts: [
    { label: 'Самоназвание',  value: 'Илитиири' },
    { label: 'Происхождение', value: 'Смешение эльфов и расы Альпов' },
    { label: 'Тип магии',     value: 'Аша\'Кор, Теневое Плетение, Пировитальность' },
    { label: 'Общество',      value: 'Матриархат, система Домов' },
    { label: 'Ареал',         value: 'Горные джунгли, геотермальные крепости' },
    { label: 'Религия',       value: 'Ил\'Сари (Богиня) и Кс\'Вайр (Бог)' },
    { label: 'Декрет',        value: 'Декрет о Власти, Год ХХХ 2150' },
  ] satisfies RaceQuickFact[],

  sections: [
    { id: 'origin',    title: 'Происхождение Илитиири' },
    { id: 'history',   title: 'Хроники Клейма' },
    { id: 'magic',     title: 'Магия Дроу' },
    { id: 'appearance', title: 'Внешность' },
    { id: 'society',   title: 'Общество' },
    { id: 'morality',  title: 'Мораль и Дипломатия' },
    { id: 'religion',  title: 'Религия' },
  ] satisfies RaceSection[],
}
