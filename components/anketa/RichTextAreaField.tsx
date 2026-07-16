'use client'

import { useRef } from 'react'
import { Bold, Heading2, List } from 'lucide-react'
import { parseRichText, type RichLine, type RichSpan } from '@/lib/richText'

const ACCENT = '#D4AF37'

interface EditResult {
  value: string
  start: number
  end: number
}

function applyBold(value: string, start: number, end: number): EditResult {
  const selected = value.slice(start, end)
  if (selected) {
    return {
      value: value.slice(0, start) + '**' + selected + '**' + value.slice(end),
      start: start + 2,
      end: end + 2,
    }
  }
  const placeholder = 'жирный текст'
  return {
    value: value.slice(0, start) + '**' + placeholder + '**' + value.slice(end),
    start: start + 2,
    end: start + 2 + placeholder.length,
  }
}

const LINE_PREFIXES = ['## ', '- ']

function applyLinePrefix(value: string, start: number, end: number, prefix: string): EditResult {
  const otherPrefixes = LINE_PREFIXES.filter((p) => p !== prefix)
  const lineStart = value.lastIndexOf('\n', start - 1) + 1
  const nextBreak = value.indexOf('\n', end)
  const lineEnd = nextBreak === -1 ? value.length : nextBreak
  const block = value.slice(lineStart, lineEnd)
  const lines = block.split('\n')
  const contentLines = lines.filter((l) => l.trim() !== '')
  const allPrefixed = contentLines.length > 0 && contentLines.every((l) => l.startsWith(prefix))

  const newLines = lines.map((l) => {
    if (l.trim() === '') return l
    if (allPrefixed) return l.slice(prefix.length)
    // A line is only ever one type (heading or bullet), so switching
    // markers must replace the existing one instead of stacking it.
    let stripped = l
    for (const p of otherPrefixes) {
      if (stripped.startsWith(p)) {
        stripped = stripped.slice(p.length)
        break
      }
    }
    return stripped.startsWith(prefix) ? stripped : prefix + stripped
  })
  const newBlock = newLines.join('\n')

  return {
    value: value.slice(0, lineStart) + newBlock + value.slice(lineEnd),
    start: lineStart,
    end: lineStart + newBlock.length,
  }
}

interface RichTextAreaFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
  className?: string
}

export default function RichTextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  className,
}: RichTextAreaFieldProps) {
  const ref = useRef<HTMLTextAreaElement>(null)

  function applyEdit(fn: (v: string, s: number, e: number) => EditResult) {
    const el = ref.current
    if (!el) return
    const result = fn(value, el.selectionStart, el.selectionEnd)
    onChange(result.value)
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(result.start, result.end)
    })
  }

  const hasContent = value.trim().length > 0
  const preview = hasContent ? parseRichText(value) : []

  return (
    <label className={`block ${className ?? ''}`}>
      <div className="flex items-center justify-between mb-1.5 gap-3">
        <span
          className="block font-cinzel text-[0.62rem] tracking-[0.16em] text-stone-500"
          style={{ fontFamily: 'var(--font-cinzel, serif)' }}
        >
          {label.toUpperCase()}
        </span>
        <div className="flex items-center gap-1">
          <ToolbarButton title="Жирный текст" onClick={() => applyEdit(applyBold)}>
            <Bold size={13} />
          </ToolbarButton>
          <ToolbarButton
            title="Подзаголовок"
            onClick={() => applyEdit((v, s, e) => applyLinePrefix(v, s, e, '## '))}
          >
            <Heading2 size={13} />
          </ToolbarButton>
          <ToolbarButton
            title="Список"
            onClick={() => applyEdit((v, s, e) => applyLinePrefix(v, s, e, '- '))}
          >
            <List size={13} />
          </ToolbarButton>
        </div>
      </div>

      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-white/60 rounded-sm px-3.5 py-2.5 text-sm text-stone-800 placeholder-stone-400 outline-none transition-colors duration-200 font-inter resize-y leading-6"
        style={{ border: `1px solid ${ACCENT}25` }}
        onFocus={(e) => (e.currentTarget.style.borderColor = `${ACCENT}80`)}
        onBlur={(e) => (e.currentTarget.style.borderColor = `${ACCENT}25`)}
      />

      {hasContent && (
        <div
          className="mt-2 rounded-sm px-3.5 py-2.5 text-sm text-stone-700 font-inter leading-6"
          style={{ border: `1px dashed ${ACCENT}30`, background: `${ACCENT}08` }}
        >
          <RichPreview lines={preview} />
        </div>
      )}
    </label>
  )
}

function ToolbarButton({
  title,
  onClick,
  children,
}: {
  title: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex items-center justify-center w-6 h-6 rounded-sm text-stone-500 hover:text-stone-800 hover:bg-white/60 transition-colors duration-150"
      style={{ border: `1px solid ${ACCENT}25` }}
    >
      {children}
    </button>
  )
}

function RichPreview({ lines }: { lines: RichLine[] }) {
  return (
    <>
      {lines.map((line, i) => {
        if (line.type === 'blank') return <div key={i} className="h-2" />

        if (line.type === 'heading') {
          return (
            <p
              key={i}
              className="font-cinzel text-xs tracking-wide mt-2 mb-1 first:mt-0"
              style={{ color: '#8A7A50', fontFamily: 'var(--font-cinzel, serif)' }}
            >
              <Spans spans={line.spans} />
            </p>
          )
        }

        if (line.type === 'bullet') {
          return (
            <div key={i} className="flex gap-2 pl-1">
              <span style={{ color: ACCENT }}>•</span>
              <span>
                <Spans spans={line.spans} />
              </span>
            </div>
          )
        }

        return (
          <p key={i}>
            <Spans spans={line.spans} />
          </p>
        )
      })}
    </>
  )
}

function Spans({ spans }: { spans: RichSpan[] }) {
  return (
    <>
      {spans.map((s, j) => (s.bold ? <strong key={j}>{s.text}</strong> : <span key={j}>{s.text}</span>))}
    </>
  )
}
