import type { AnketaFormData } from '@/types/anketa'

export async function generateAnketaPdf(data: AnketaFormData) {
  const { pdf } = await import('@react-pdf/renderer')
  const { default: AnketaPdfDocument } = await import('./AnketaPdfDocument')

  const blob = await pdf(AnketaPdfDocument({ data })).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  const fileName = [data.firstName, data.lastName].filter(Boolean).join('_') || 'anketa'
  a.href = url
  a.download = `${fileName}.pdf`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
