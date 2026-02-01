import Link from "next/link"
import { Hexagon } from "lucide-react"
import { useTheme } from "next-themes"

interface FooterProps {
  /** On homepage mobile: transparent background, no divider line */
  transparentOnMobile?: boolean
}

export function Footer({ transparentOnMobile = false }: FooterProps) {
  const { theme } = useTheme() || { theme: 'light' }

  const baseClasses = "relative z-20 mt-auto pt-8 pb-4 px-6 transition-colors duration-300 shrink-0"
  const normalClasses =
    theme === 'dark'
      ? 'border-t border-zinc-700 bg-zinc-900'
      : 'border-t border-zinc-200 bg-white'
  const transparentMobileClasses = transparentOnMobile
    ? 'border-transparent bg-transparent md:border-t md:pt-8 ' +
      (theme === 'dark' ? 'md:border-zinc-700 md:bg-zinc-900' : 'md:border-zinc-200 md:bg-white')
    : normalClasses

  return (
    <footer className={`${baseClasses} ${transparentMobileClasses}`}>
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