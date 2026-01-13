"use client"

interface TorqueIconProps {
  className?: string
}

export function TorqueIcon({ className = "w-full h-full" }: TorqueIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wrench/Torque symbol */}
      <rect x="70" y="85" width="60" height="30" rx="5" fill="currentColor" opacity="0.2" />
      
      {/* Bolt head */}
      <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.3" />
      <path
        d="M 90 90 L 110 90 L 110 110 L 90 110 Z"
        fill="currentColor"
        opacity="0.4"
      />
      
      {/* Rotation arrows showing torque */}
      <path
        d="M 100 50 A 50 50 0 0 1 145 80"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />
      <path d="M 145 80 L 148 73 L 152 82 Z" fill="currentColor" opacity="0.7" />
      
      <path
        d="M 100 150 A 50 50 0 0 1 55 120"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />
      <path d="M 55 120 L 48 118 L 52 127 Z" fill="currentColor" opacity="0.7" />
      
      {/* Force indicators */}
      <line x1="130" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <path d="M 160 100 L 152 95 L 152 105 Z" fill="currentColor" opacity="0.6" />
      
      <line x1="70" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <path d="M 40 100 L 48 95 L 48 105 Z" fill="currentColor" opacity="0.6" />
      
      {/* Label */}
      <text x="100" y="185" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" opacity="0.6">
        TORQUE
      </text>
    </svg>
  )
}
