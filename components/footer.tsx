import Link from "next/link"
import { Hexagon, Menu } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme() || { theme: 'light' }

  return (
    <footer className={`relative z-10 border-t mt-24 pt-8 pb-4 px-6 transition-colors duration-300 ${
      theme === 'dark'
        ? 'border-zinc-700 bg-zinc-900'
        : 'border-zinc-200 bg-white'
    }`}>
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex items-center mt-6 md:mt-0">
            <Hexagon className={`w-6 h-6 mr-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
            }`} strokeWidth={1} />
            <span className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>© 2025 Haven. All rights reserved.</span>
          </div>
          
          {/* Desktop Footer Links */}
          <div className="hidden md:flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/privacy" className={`text-xs transition-colors ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-300'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}>
              Privacy
            </Link>
            <Link href="/terms" className={`text-xs transition-colors ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-300'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}>
              Terms
            </Link>
            <Link href="/contact" className={`text-xs transition-colors ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-300'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}>
              Contact
            </Link>
          </div>
          
          {/* Mobile Footer Links */}
          <div className="flex md:hidden items-center space-x-4 mb-4">
            <Link href="/privacy" className={`text-xs transition-colors ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-300'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}>
              Privacy
            </Link>
            <Link href="/terms" className={`text-xs transition-colors ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-300'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}>
              Terms
            </Link>
            <Link href="/contact" className={`text-xs transition-colors ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-300'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 