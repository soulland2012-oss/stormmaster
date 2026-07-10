'use client'

const ACCENT = '#D4AF37'

interface TextFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function TextField({ label, value, onChange, placeholder, className }: TextFieldProps) {
  return (
    <label className={`block ${className ?? ''}`}>
      <span
        className="block font-cinzel text-[0.62rem] tracking-[0.16em] text-stone-500 mb-1.5"
        style={{ fontFamily: 'var(--font-cinzel, serif)' }}
      >
        {label.toUpperCase()}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/60 rounded-sm px-3.5 py-2.5 text-sm text-stone-800 placeholder-stone-400 outline-none transition-colors duration-200 font-inter"
        style={{ border: `1px solid ${ACCENT}25` }}
        onFocus={(e) => (e.currentTarget.style.borderColor = `${ACCENT}80`)}
        onBlur={(e) => (e.currentTarget.style.borderColor = `${ACCENT}25`)}
      />
    </label>
  )
}
