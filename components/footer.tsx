import Link from "next/link"
import { Hexagon, Menu } from "lucide-react"
import { useState } from "react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200 mt-36 pt-8 pb-4 px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex items-center mt-6 md:mt-0">
            <Hexagon className="w-6 h-6 text-zinc-900 mr-2" strokeWidth={1} />
            <span className="text-sm text-zinc-600">© 2025 Haven. All rights reserved.</span>
          </div>
          
          {/* Desktop Footer Links */}
          <div className="hidden md:flex items-center space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Mobile Footer Links */}
          <div className="flex md:hidden items-center space-x-6 mb-4">
            <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 