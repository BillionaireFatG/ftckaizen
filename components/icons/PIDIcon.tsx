"use client"

interface PIDIconProps {
  className?: string
}

export function PIDIcon({ className = "w-full h-full" }: PIDIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1" />
      
      {/* P - Proportional wave */}
      <path
        d="M 40 100 Q 60 70, 80 100"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />
      <text x="60" y="75" fill="currentColor" fontSize="20" fontWeight="bold" opacity="0.7">P</text>
      
      {/* I - Integral accumulation */}
      <path
        d="M 85 100 L 85 120 L 115 120 L 115 100"
        stroke="currentColor"
        strokeWidth="4"
        fill="currentColor"
        opacity="0.3"
      />
      <text x="95" y="115" fill="currentColor" fontSize="20" fontWeight="bold" opacity="0.7">I</text>
      
      {/* D - Derivative slope */}
      <path
        d="M 120 100 L 140 70 L 160 100"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />
      <text x="135" y="75" fill="currentColor" fontSize="20" fontWeight="bold" opacity="0.7">D</text>
      
      {/* Target line */}
      <line x1="30" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
      
      {/* Center label */}
      <text x="100" y="155" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" opacity="0.5">
        Control Loop
      </text>
    </svg>
  )
}
