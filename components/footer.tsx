import Link from "next/link"
import { Hexagon } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800 mt-36 pt-8 pb-4 px-6 bg-black text-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex items-center mt-6 md:mt-0">
            <Hexagon className="w-6 h-6 text-white mr-2" strokeWidth={1} />
            <span className="text-sm text-zinc-500">© 2024 Haven Studio. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-xs">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-xs">
              Terms
            </Link>
            <Link href="/careers" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-xs">
              Careers
            </Link>
            <Link href="/sitemap" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-xs">
              Sitemap
            </Link>
            <Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-xs">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 