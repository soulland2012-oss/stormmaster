import type { Metadata } from 'next'
import CountriesHub from '@/components/world/CountriesHub'

export const metadata: Metadata = {
  title: 'Государства — Stormmaster Archive',
  description: 'Державы известного мира Stormmaster: Федерация Фенридия, ЮКЛ и Дворфляндия.',
}

export default function CountriesPage() {
  return <CountriesHub />
}
