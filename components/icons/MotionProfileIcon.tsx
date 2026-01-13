"use client"

interface MotionProfileIconProps {
  className?: string
}

export function MotionProfileIcon({ className = "w-full h-full" }: MotionProfileIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Graph background */}
      <rect x="30" y="30" width="140" height="120" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="2" rx="5" />
      
      {/* Axes */}
      <line x1="35" y1="145" x2="165" y2="145" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="35" y1="40" x2="35" y2="145" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      
      {/* Trapezoidal profile */}
      <path
        d="M 40 140 L 60 80 L 120 80 L 140 140"
        stroke="currentColor"
        strokeWidth="4"
        fill="currentColor"
        opacity="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Profile outline */}
      <path
        d="M 40 140 L 60 80 L 120 80 L 140 140"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />
      
      {/* Phase labels */}
      <text x="50" y="125" fill="currentColor" fontSize="10" opacity="0.6" fontWeight="bold">Accel</text>
      <text x="80" y="70" fill="currentColor" fontSize="10" opacity="0.6" fontWeight="bold">Cruise</text>
      <text x="125" y="125" fill="currentColor" fontSize="10" opacity="0.6" fontWeight="bold">Decel</text>
      
      {/* Axis labels */}
      <text x="100" y="165" textAnchor="middle" fill="currentColor" fontSize="12" opacity="0.5">Time</text>
      <text x="20" y="90" fill="currentColor" fontSize="12" opacity="0.5" transform="rotate(-90 20 90)">Velocity</text>
      
      {/* Title */}
      <text x="100" y="185" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold" opacity="0.6">
        Trapezoid
      </text>
    </svg>
  )
}
