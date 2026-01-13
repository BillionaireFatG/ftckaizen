"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Waves } from "@/components/ui/waves"

export function GlobalBackground() {
  const { theme } = useTheme()
  const [key, setKey] = useState(0)

  // Force remount when theme changes
  useEffect(() => {
    setKey(prev => prev + 1)
  }, [theme])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Light Mode Waves */}
      <Waves 
        key={`light-${key}`}
        className="absolute inset-0 dark:hidden opacity-20" 
        strokeColor="rgba(85, 80, 255, 0.35)"
        backgroundColor="transparent"
        pointerSize={0.6}
      />
      
      {/* Dark Mode Waves */}
      <Waves 
        key={`dark-${key}`}
        className="absolute inset-0 hidden dark:block opacity-30"
        strokeColor="rgba(200, 195, 255, 0.6)"
        backgroundColor="transparent"
        pointerSize={0.6}
      />
    </div>
  )
}
