"use client"

interface SwerveDriveIconProps {
  className?: string
}

export function SwerveDriveIcon({ className = "w-full h-full" }: SwerveDriveIconProps) {
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
      
      {/* Front-left swerve module */}
      <g opacity="0.4">
        <circle cx="60" cy="60" r="12" fill="currentColor" />
        <rect x="55" y="50" width="10" height="20" rx="2" fill="white" opacity="0.8" />
        {/* Rotation indicator */}
        <path
          d="M 60 60 m -8 0 a 8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path d="M68 60 L71 58 L71 62 Z" fill="currentColor" opacity="0.8" />
      </g>
      
      {/* Front-right swerve module */}
      <g opacity="0.4">
        <circle cx="140" cy="60" r="12" fill="currentColor" />
        <rect x="135" y="50" width="10" height="20" rx="2" fill="white" opacity="0.8" />
        {/* Rotation indicator */}
        <path
          d="M 140 60 m -8 0 a 8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path d="M148 60 L151 58 L151 62 Z" fill="currentColor" opacity="0.8" />
      </g>
      
      {/* Back-left swerve module */}
      <g opacity="0.4">
        <circle cx="60" cy="140" r="12" fill="currentColor" />
        <rect x="55" y="130" width="10" height="20" rx="2" fill="white" opacity="0.8" />
        {/* Rotation indicator */}
        <path
          d="M 60 140 m -8 0 a 8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path d="M68 140 L71 138 L71 142 Z" fill="currentColor" opacity="0.8" />
      </g>
      
      {/* Back-right swerve module */}
      <g opacity="0.4">
        <circle cx="140" cy="140" r="12" fill="currentColor" />
        <rect x="135" y="130" width="10" height="20" rx="2" fill="white" opacity="0.8" />
        {/* Rotation indicator */}
        <path
          d="M 140 140 m -8 0 a 8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path d="M148 140 L151 138 L151 142 Z" fill="currentColor" opacity="0.8" />
      </g>
      
      {/* Forward arrow */}
      <path
        d="M100 35 L100 15 M90 20 L100 15 L110 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Rotation arrow around center */}
      <path
        d="M 100 100 m -25 0 a 25 25 0 1 1 50 0 a 25 25 0 1 1 -50 0"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
        strokeDasharray="5,3"
      />
      <path d="M125 100 L128 95 L130 102 Z" fill="currentColor" opacity="0.6" />
      
      {/* Center label */}
      <text
        x="100"
        y="105"
        textAnchor="middle"
        fill="currentColor"
        fontSize="13"
        fontWeight="bold"
        opacity="0.6"
      >
        SWERVE
      </text>
    </svg>
  )
}
