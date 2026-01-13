"use client"

interface GearIconProps {
  className?: string
}

export function GearIcon({ className = "w-full h-full" }: GearIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Large gear */}
      <circle cx="70" cy="100" r="35" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="70" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      
      {/* Large gear teeth */}
      <rect x="65" y="55" width="10" height="8" fill="currentColor" opacity="0.4" />
      <rect x="100" y="95" width="8" height="10" fill="currentColor" opacity="0.4" />
      <rect x="65" y="137" width="10" height="8" fill="currentColor" opacity="0.4" />
      <rect x="32" y="95" width="8" height="10" fill="currentColor" opacity="0.4" />
      
      {/* Small gear */}
      <circle cx="130" cy="100" r="25" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" />
      <circle cx="130" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      
      {/* Small gear teeth */}
      <rect x="125" y="68" width="10" height="6" fill="currentColor" opacity="0.5" />
      <rect x="149" y="95" width="6" height="10" fill="currentColor" opacity="0.5" />
      <rect x="125" y="126" width="10" height="6" fill="currentColor" opacity="0.5" />
      <rect x="105" y="95" width="6" height="10" fill="currentColor" opacity="0.5" />
      
      {/* Rotation arrows */}
      <path
        d="M 70 130 A 30 30 0 0 0 40 100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeDasharray="3,3"
      />
      <path d="M 40 100 L 43 107 L 35 105 Z" fill="currentColor" opacity="0.6" />
      
      <path
        d="M 130 75 A 25 25 0 0 1 155 100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeDasharray="3,3"
      />
      <path d="M 155 100 L 152 93 L 160 95 Z" fill="currentColor" opacity="0.6" />
      
      {/* Ratio indicator */}
      <text x="100" y="45" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="bold" opacity="0.7">
        2:1
      </text>
      
      {/* Label */}
      <text x="100" y="180" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" opacity="0.6">
        GEAR RATIO
      </text>
    </svg>
  )
}
