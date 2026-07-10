import { Font } from '@react-pdf/renderer'

let registered = false

/** Регистрирует кириллические шрифты для PDF. Cinzel (шрифт сайта) не имеет кириллицы,
 * поэтому для PDF используется другая пара: Cormorant Garamond (заголовки) + PT Serif (текст). */
export function registerAnketaFonts() {
  if (registered) return
  registered = true

  Font.register({
    family: 'PT Serif',
    fonts: [
      { src: '/fonts/pt-serif/PTSerif-Regular.ttf', fontWeight: 400 },
      { src: '/fonts/pt-serif/PTSerif-Bold.ttf', fontWeight: 700 },
    ],
  })

  Font.register({
    family: 'Cormorant Garamond',
    fonts: [
      { src: '/fonts/cormorant-garamond/CormorantGaramond-SemiBold.ttf', fontWeight: 600 },
      { src: '/fonts/cormorant-garamond/CormorantGaramond-Bold.ttf', fontWeight: 700 },
    ],
  })

  Font.registerHyphenationCallback((word) => [word])
}
