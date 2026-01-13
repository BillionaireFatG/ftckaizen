"use client"

interface MecanumDriveIconProps {
  className?: string
}

export function MecanumDriveIcon({ className = "w-full h-full" }: MecanumDriveIconProps) {
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
      
      {/* Front-left mecanum wheel with rollers */}
      <g opacity="0.4">
        <rect x="30" y="35" width="20" height="35" rx="3" fill="currentColor" />
        <line x1="35" y1="40" x2="45" y2="50" stroke="white" strokeWidth="1.5" />
        <line x1="35" y1="50" x2="45" y2="60" stroke="white" strokeWidth="1.5" />
      </g>
      
      {/* Front-right mecanum wheel with rollers */}
      <g opacity="0.4">
        <rect x="150" y="35" width="20" height="35" rx="3" fill="currentColor" />
        <line x1="155" y1="50" x2="165" y2="40" stroke="white" strokeWidth="1.5" />
        <line x1="155" y1="60" x2="165" y2="50" stroke="white" strokeWidth="1.5" />
      </g>
      
      {/* Back-left mecanum wheel with rollers */}
      <g opacity="0.4">
        <rect x="30" y="130" width="20" height="35" rx="3" fill="currentColor" />
        <line x1="35" y1="135" x2="45" y2="145" stroke="white" strokeWidth="1.5" />
        <line x1="35" y1="145" x2="45" y2="155" stroke="white" strokeWidth="1.5" />
      </g>
      
      {/* Back-right mecanum wheel with rollers */}
      <g opacity="0.4">
        <rect x="150" y="130" width="20" height="35" rx="3" fill="currentColor" />
        <line x1="155" y1="145" x2="165" y2="135" stroke="white" strokeWidth="1.5" />
        <line x1="155" y1="155" x2="165" y2="145" stroke="white" strokeWidth="1.5" />
      </g>
      
      {/* Forward arrow */}
      <path
        d="M100 40 L100 20 M90 25 L100 20 L110 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Strafe right arrow */}
      <path
        d="M160 100 L180 100 M175 90 L180 100 L175 110"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Diagonal arrow (top-right) */}
      <path
        d="M145 45 L160 30 M155 32 L160 30 L158 35"
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
        fontSize="12"
        fontWeight="bold"
        opacity="0.6"
      >
        MECANUM
      </text>
    </svg>
  )
}
