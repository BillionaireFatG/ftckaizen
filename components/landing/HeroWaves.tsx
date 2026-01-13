"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Waves } from "@/components/ui/waves"

export function HeroWaves() {
  const { theme } = useTheme()
  const [key, setKey] = useState(0)

  // Force remount when theme changes
  useEffect(() => {
    setKey(prev => prev + 1)
  }, [theme])

  return (
    <>
      {/* Light Mode Waves */}
      <Waves 
        key={`light-${key}`}
        className="absolute inset-0 dark:hidden" 
        strokeColor="rgba(85, 80, 255, 0.35)"
        backgroundColor="transparent"
        pointerSize={0.6}
      />
      
      {/* Dark Mode Waves */}
      <Waves 
        key={`dark-${key}`}
        className="absolute inset-0 hidden dark:block"
        strokeColor="rgba(200, 195, 255, 0.6)"
        backgroundColor="transparent"
        pointerSize={0.6}
      />
    </>
  )
}
