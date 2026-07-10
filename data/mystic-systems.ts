// Данные систем сил (Аура/Магия) для анкеты персонажа и раздела «Введение».
// Примечание: у /lore/systems/magic нет отдельных якорей на каждый путь —
// только общий раздел #three-paths, поэтому все три пути ссылаются на него.

export interface MysticAbilityOption {
  id: 'aura' | 'magic'
  label: string
  href: string
  accent: string
}

export const mysticAbilityTypes: MysticAbilityOption[] = [
  { id: 'aura', label: 'Аура', href: '/lore/systems/aura', accent: '#38BDF8' },
  { id: 'magic', label: 'Магия', href: '/lore/systems/magic', accent: '#A78BFA' },
]

export interface MagicPathOption {
  id: 'dark' | 'light' | 'grey'
  label: string
  href: string
  accent: string
}

export const magicPaths: MagicPathOption[] = [
  { id: 'dark', label: 'Тёмный', href: '/lore/systems/magic#three-paths', accent: '#EF4444' },
  { id: 'light', label: 'Светлый', href: '/lore/systems/magic#three-paths', accent: '#FBBF24' },
  { id: 'grey', label: 'Серый', href: '/lore/systems/magic#three-paths', accent: '#94A3B8' },
]
