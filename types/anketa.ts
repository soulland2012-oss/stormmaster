export type Gender = 'male' | 'female'

export type MysticType = 'aura' | 'magic'

export type MagicPath = 'dark' | 'light' | 'grey'

export interface AnketaFormData {
  // 1. Имя и Фамилия
  firstName: string
  lastName: string

  // 2. Рост, вес, возраст, пол, раса
  height: string
  weight: string
  age: string
  gender: Gender
  raceId: string

  // 3. Физические способности
  physicalAbilities: string

  // 4. Мистические способности
  mysticType: MysticType | null
  magicPath: MagicPath | null
  mysticAbilities: string

  // 5. Статус, профессия, ранг
  status: string
  profession: string
  rank: string

  // 6. Навыки
  skills: string

  // 7. Инвентарь
  inventory: string

  // 8. Характер
  personality: string

  // 9. Биография
  biography: string

  // 10. Внешность
  appearance: string
}

export const EMPTY_ANKETA: AnketaFormData = {
  firstName: '',
  lastName: '',
  height: '',
  weight: '',
  age: '',
  gender: 'male',
  raceId: 'lyudi',
  physicalAbilities: '',
  mysticType: null,
  magicPath: null,
  mysticAbilities: '',
  status: '',
  profession: '',
  rank: '',
  skills: '',
  inventory: '',
  personality: '',
  biography: '',
  appearance: '',
}
