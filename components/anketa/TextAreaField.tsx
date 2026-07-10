'use client'

const ACCENT = '#D4AF37'

interface TextAreaFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
  className?: string
}

export default function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  className,
}: TextAreaFieldProps) {
  return (
    <label className={`block ${className ?? ''}`}>
      <span
        className="block font-cinzel text-[0.62rem] tracking-[0.16em] text-stone-500 mb-1.5"
        style={{ fontFamily: 'var(--font-cinzel, serif)' }}
      >
        {label.toUpperCase()}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-white/60 rounded-sm px-3.5 py-2.5 text-sm text-stone-800 placeholder-stone-400 outline-none transition-colors duration-200 font-inter resize-y leading-6"
        style={{ border: `1px solid ${ACCENT}25` }}
        onFocus={(e) => (e.currentTarget.style.borderColor = `${ACCENT}80`)}
        onBlur={(e) => (e.currentTarget.style.borderColor = `${ACCENT}25`)}
      />
    </label>
  )
}
