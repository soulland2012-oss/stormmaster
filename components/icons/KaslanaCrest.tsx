import { cn } from '@/lib/utils'

interface KaslanaCrestProps {
  size?: number
  className?: string
  animated?: boolean
}

export default function KaslanaCrest({ size = 80, className = '', animated = false }: KaslanaCrestProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(animated && 'animate-breathe', className)}
      aria-label="House Kaslana Crest"
    >
      {/* Outer decorative ring */}
      <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.4" opacity="0.25" strokeDasharray="4 6" />

      {/* Inner ring */}
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />

      {/* Cardinal lines (cross) */}
      <line x1="60" y1="5"  x2="60" y2="115" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <line x1="5"  y1="60" x2="115" y2="60" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

      {/* Diagonal accents */}
      <line x1="21" y1="21" x2="99" y2="99" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <line x1="99" y1="21" x2="21" y2="99" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />

      {/* Ray tips on the outer ring at cardinal points */}
      <polygon points="60,5 57,18 63,18"   fill="currentColor" opacity="0.7" />
      <polygon points="60,115 57,102 63,102" fill="currentColor" opacity="0.7" />
      <polygon points="5,60 18,57 18,63"   fill="currentColor" opacity="0.7" />
      <polygon points="115,60 102,57 102,63" fill="currentColor" opacity="0.7" />

      {/* Corner ornaments */}
      <circle cx="21" cy="21" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="99" cy="21" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="21" cy="99" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="99" cy="99" r="2.5" fill="currentColor" opacity="0.5" />

      {/* Center diamond */}
      <polygon
        points="60,45 75,60 60,75 45,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.85"
      />
      <polygon
        points="60,50 70,60 60,70 50,60"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Inner corner marks */}
      <line x1="48" y1="40" x2="52" y2="40" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="68" y1="40" x2="72" y2="40" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="48" y1="80" x2="52" y2="80" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="68" y1="80" x2="72" y2="80" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="40" y1="48" x2="40" y2="52" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="40" y1="68" x2="40" y2="72" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="80" y1="48" x2="80" y2="52" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="80" y1="68" x2="80" y2="72" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    </svg>
  )
}
