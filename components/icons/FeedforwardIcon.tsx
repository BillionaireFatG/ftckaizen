"use client"

interface FeedforwardIconProps {
  className?: string
}

export function FeedforwardIcon({ className = "w-full h-full" }: FeedforwardIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Model/Physics representation */}
      <circle cx="100" cy="100" r="70" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
      
      {/* Input arrow */}
      <path
        d="M 20 100 L 50 100 M 45 95 L 50 100 L 45 105"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <text x="15" y="90" fill="currentColor" fontSize="12" fontWeight="bold" opacity="0.6">Input</text>
      
      {/* Feedforward path (top arc) */}
      <path
        d="M 60 80 Q 100 40, 140 80"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.7"
      />
      <path d="M 140 80 L 135 77 L 138 85" fill="currentColor" opacity="0.7" />
      <text x="85" y="50" fill="currentColor" fontSize="11" fontWeight="bold" opacity="0.6">Predict</text>
      
      {/* System/Model box */}
      <rect x="70" y="85" width="60" height="30" rx="5" fill="currentColor" opacity="0.3" />
      <text x="100" y="105" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" opacity="0.8">
        Model
      </text>
      
      {/* Output arrow */}
      <path
        d="M 150 100 L 180 100 M 175 95 L 180 100 L 175 105"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <text x="155" y="90" fill="currentColor" fontSize="12" fontWeight="bold" opacity="0.6">Output</text>
      
      {/* kV, kA labels */}
      <text x="100" y="145" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.5">
        kV · kA · kS
      </text>
    </svg>
  )
}
