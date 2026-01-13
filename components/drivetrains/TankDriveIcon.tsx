"use client"

interface TankDriveIconProps {
  className?: string
}

export function TankDriveIcon({ className = "w-full h-full" }: TankDriveIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Robot body */}
      <rect
        x="50"
        y="50"
        width="100"
        height="100"
        rx="10"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Left wheels */}
      <rect x="30" y="60" width="15" height="30" rx="3" fill="currentColor" opacity="0.3" />
      <rect x="30" y="110" width="15" height="30" rx="3" fill="currentColor" opacity="0.3" />
      
      {/* Right wheels */}
      <rect x="155" y="60" width="15" height="30" rx="3" fill="currentColor" opacity="0.3" />
      <rect x="155" y="110" width="15" height="30" rx="3" fill="currentColor" opacity="0.3" />
      
      {/* Forward arrow */}
      <path
        d="M100 35 L100 15 M85 20 L100 15 L115 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Left side forward arrows */}
      <path
        d="M37 55 L37 45 M32 47 L37 45 L42 47"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      
      {/* Right side forward arrows */}
      <path
        d="M163 55 L163 45 M158 47 L163 45 L168 47"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      
      {/* Center label */}
      <text
        x="100"
        y="105"
        textAnchor="middle"
        fill="currentColor"
        fontSize="14"
        fontWeight="bold"
        opacity="0.6"
      >
        TANK
      </text>
    </svg>
  )
}
