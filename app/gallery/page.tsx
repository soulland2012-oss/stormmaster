import type { Metadata } from 'next'
import GalleryPageClient from '@/components/gallery/GalleryPageClient'
import { kaslanaData } from '@/data/house-kaslana'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Visual archive of the Stormmaster universe.',
}

export default function GalleryPage() {
  return <GalleryPageClient items={kaslanaData.gallery} />
}
