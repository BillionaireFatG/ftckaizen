"use client"

interface MotorIconProps {
  className?: string
}

export function MotorIcon({ className = "w-full h-full" }: MotorIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Motor body */}
      <rect x="50" y="70" width="100" height="60" rx="8" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      
      {/* Motor shaft */}
      <rect x="150" y="95" width="30" height="10" rx="2" fill="currentColor" opacity="0.4" />
      
      {/* Mounting holes */}
      <circle cx="65" cy="85" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="65" cy="115" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="135" cy="85" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="135" cy="115" r="4" fill="currentColor" opacity="0.3" />
      
      {/* Wire connections */}
      <line x1="50" y1="85" x2="30" y2="85" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <line x1="50" y1="115" x2="30" y2="115" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <circle cx="30" cy="85" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="115" r="4" fill="currentColor" opacity="0.6" />
      
      {/* Rotation indicator */}
      <path
        d="M 100 100 m -15 0 a 15 15 0 1 1 30 0 a 15 15 0 1 1 -30 0"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path d="M 115 100 L 118 97 L 120 103 Z" fill="currentColor" opacity="0.6" />
      
      {/* Power/torque indicators */}
      <path
        d="M 165 80 L 165 70 M 160 73 L 165 70 L 170 73"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 165 120 L 165 130 M 160 127 L 165 130 L 170 127"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      
      {/* Labels */}
      <text x="100" y="155" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" opacity="0.6">
        MOTOR
      </text>
    </svg>
  )
}
