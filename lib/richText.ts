export interface RichSpan {
  text: string
  bold: boolean
}

export type RichLine =
  | { type: 'blank' }
  | { type: 'heading'; spans: RichSpan[] }
  | { type: 'bullet'; spans: RichSpan[] }
  | { type: 'paragraph'; spans: RichSpan[] }

function parseSpans(text: string): RichSpan[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter((chunk) => chunk.length > 0)
    .map((chunk) => {
      const match = chunk.match(/^\*\*([^*]+)\*\*$/)
      return match ? { text: match[1], bold: true } : { text: chunk, bold: false }
    })
}

export function parseRichText(raw: string): RichLine[] {
  return raw.split('\n').map((line) => {
    if (!line.trim()) return { type: 'blank' }

    const heading = line.match(/^##\s+(.*)/)
    if (heading) return { type: 'heading', spans: parseSpans(heading[1]) }

    const bullet = line.match(/^[-•]\s+(.*)/)
    if (bullet) return { type: 'bullet', spans: parseSpans(bullet[1]) }

    return { type: 'paragraph', spans: parseSpans(line) }
  })
}
