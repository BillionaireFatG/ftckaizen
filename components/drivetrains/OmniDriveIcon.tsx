"use client"

interface OmniDriveIconProps {
  className?: string
}

export function OmniDriveIcon({ className = "w-full h-full" }: OmniDriveIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Robot body */}
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Wheel 1 (top) - Omni wheel with small rollers */}
      <g opacity="0.4">
        <rect x="90" y="30" width="20" height="30" rx="3" fill="currentColor" />
        <circle cx="95" cy="40" r="2" fill="white" />
        <circle cx="95" cy="50" r="2" fill="white" />
        <circle cx="105" cy="40" r="2" fill="white" />
        <circle cx="105" cy="50" r="2" fill="white" />
      </g>
      
      {/* Wheel 2 (bottom-right) */}
      <g opacity="0.4" transform="rotate(120 100 100)">
        <rect x="90" y="30" width="20" height="30" rx="3" fill="currentColor" />
        <circle cx="95" cy="40" r="2" fill="white" />
        <circle cx="95" cy="50" r="2" fill="white" />
        <circle cx="105" cy="40" r="2" fill="white" />
        <circle cx="105" cy="50" r="2" fill="white" />
      </g>
      
      {/* Wheel 3 (bottom-left) */}
      <g opacity="0.4" transform="rotate(240 100 100)">
        <rect x="90" y="30" width="20" height="30" rx="3" fill="currentColor" />
        <circle cx="95" cy="40" r="2" fill="white" />
        <circle cx="95" cy="50" r="2" fill="white" />
        <circle cx="105" cy="40" r="2" fill="white" />
        <circle cx="105" cy="50" r="2" fill="white" />
      </g>
      
      {/* Forward arrow */}
      <path
        d="M100 25 L100 10 M92 15 L100 10 L108 15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Rotation arrow */}
      <path
        d="M 100 100 m -30 0 a 30 30 0 1 1 60 0 a 30 30 0 1 1 -60 0"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
        strokeDasharray="5,3"
      />
      <path d="M130 100 L133 95 L135 102 Z" fill="currentColor" opacity="0.6" />
      
      {/* Strafe arrow (diagonal) */}
      <path
        d="M145 55 L160 40 M155 42 L160 40 L158 45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
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
        OMNI
      </text>
    </svg>
  )
}
