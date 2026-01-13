"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Sparkles, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo - Left Side */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-purple-500 to-pink-500 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
            <span className="text-lg font-black text-white">F</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-pink-500/20 blur-sm group-hover:blur-md transition-all" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              FTC
            </span>
            <span className="text-lg font-bold ml-1">
              Mastery
            </span>
          </div>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
          <Link 
            href="/drivetrains" 
            className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-primary"
          >
            Drivetrains
          </Link>
          <Link 
            href="/control-theory" 
            className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-primary"
          >
            Control Theory
          </Link>
          <Link 
            href="/calculators" 
            className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-primary"
          >
            Calculators
          </Link>
          <Link 
            href="/simulator" 
            className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-primary"
          >
            Simulator
          </Link>
          <Link 
            href="/resources" 
            className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-primary"
          >
            Resources
          </Link>
        </div>

        {/* Right Side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg hover:bg-accent"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-lg hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/40 md:hidden bg-background/95 backdrop-blur-lg">
          <div className="container space-y-1 p-4">
            <Link 
              href="/drivetrains" 
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Drivetrains
            </Link>
            <Link 
              href="/control-theory" 
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Control Theory
            </Link>
            <Link 
              href="/calculators" 
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculators
            </Link>
            <Link 
              href="/simulator" 
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Simulator
            </Link>
            <Link 
              href="/resources" 
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
