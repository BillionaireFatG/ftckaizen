"use client"

interface SpeedIconProps {
  className?: string
}

export function SpeedIcon({ className = "w-full h-full" }: SpeedIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Speedometer background */}
      <path
        d="M 40 140 A 60 60 0 0 1 160 140"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        opacity="0.2"
      />
      
      {/* Speed marks */}
      <line x1="45" y1="135" x2="50" y2="125" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <line x1="60" y1="95" x2="67" y2="90" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <line x1="95" y1="70" x2="100" y2="60" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <line x1="133" y1="90" x2="140" y2="95" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <line x1="150" y1="125" x2="155" y1="135" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      
      {/* Needle pointing to high speed */}
      <line x1="100" y1="140" x2="140" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <circle cx="100" cy="140" r="8" fill="currentColor" opacity="0.8" />
      
      {/* Speed lines (motion blur effect) */}
      <line x1="30" y1="100" x2="50" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="25" y1="110" x2="45" y2="110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="20" y1="120" x2="40" y2="120" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      
      {/* Label */}
      <text x="100" y="175" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" opacity="0.6">
        SPEED
      </text>
    </svg>
  )
}
