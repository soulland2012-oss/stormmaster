export const calendarData = {
  title: 'Календарь Калдериса',
  subtitle: 'Мир · Stormmaster',
  tagline: 'Двенадцать месяцев — двенадцать богов',
  heroDescription: 'Каждый месяц в Калдерисе носит имя одного из богов пантеона. Так летосчисление стало молитвой, а смена времён — напоминанием о вечном.',
  months: [
    { number: 1,  real: 'Январь',   name: 'Серифоль', god: 'Сералия',  domain: 'надежда',    ending: '-я', meaning: 'Месяц будущих надежд',          accent: '#EC4899' },
    { number: 2,  real: 'Февраль',  name: 'Гнар',     god: 'Гнар\'Зул', domain: 'голод',     ending: '-я', meaning: 'Месяц холода и голода',          accent: '#1E293B' },
    { number: 3,  real: 'Март',     name: 'Симель',   god: 'Силмеа',   domain: 'природа',    ending: '-я', meaning: 'Месяц пробуждения',              accent: '#15803D' },
    { number: 4,  real: 'Апрель',   name: 'Люман',    god: 'Люминия',  domain: 'звук',       ending: '-а', meaning: 'Певчий месяц',                   accent: '#CA8A04' },
    { number: 5,  real: 'Май',      name: 'Лирэль',   god: 'Лиэстра',  domain: 'удовольствие', ending: '-я', meaning: 'Месяц размножения',           accent: '#9F1239' },
    { number: 6,  real: 'Июнь',     name: 'Фелим',    god: 'Фелгрим',  domain: 'хворь',      ending: '-а', meaning: 'Месяц роста',                   accent: '#16A34A' },
    { number: 7,  real: 'Июль',     name: 'Шахр',     god: 'Иршахра',  domain: 'огонь',      ending: '-а', meaning: 'Месяц непрекращаемого жара',    accent: '#EA580C' },
    { number: 8,  real: 'Август',   name: 'Риэль',    god: 'Ауриэль',  domain: 'свет',       ending: '-я', meaning: 'Месяц мягкого тепла и урожая',  accent: '#FBBF24' },
    { number: 9,  real: 'Сентябрь', name: 'Торбь',    god: 'Торброк',  domain: 'ремёсла',    ending: '-а', meaning: 'Месяц пожинания трудов',        accent: '#78716C' },
    { number: 10, real: 'Октябрь',  name: 'Мор',      god: 'Мортурис', domain: 'нежить',     ending: '-я', meaning: 'Месяц угасания',                accent: '#4C1D95' },
    { number: 11, real: 'Ноябрь',   name: 'Эроль',    god: 'Эридор',   domain: 'перемены',   ending: '-я', meaning: 'Месяц воздержания',             accent: '#6366F1' },
    { number: 12, real: 'Декабрь',  name: 'Мироль',   god: 'Мирала',   domain: 'сны',        ending: '-я', meaning: 'Месяц долгого сна',             accent: '#818CF8' },
  ],
}

export type CalendarData = typeof calendarData
