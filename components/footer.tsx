import Link from "next/link"
import { Hexagon, Menu } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [showMoreLinks, setShowMoreLinks] = useState(false)
  
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
            <Link href="/careers" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Careers
            </Link>
            <Link href="/sitemap" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Sitemap
            </Link>
            <Link href="/advertising" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Advertising
            </Link>
            <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Mobile Footer Links - Simplified */}
          <div className="flex md:hidden flex-col items-center w-full mb-4">
            <div className="flex items-center space-x-6 mb-3">
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
            
            {/* Expandable secondary links */}
            {showMoreLinks && (
              <div className="flex items-center space-x-6 mt-2 animate-fadeIn">
                <Link href="/careers" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Careers
                </Link>
                <Link href="/sitemap" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Sitemap
                </Link>
                <Link href="/advertising" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                  Advertising
                </Link>
              </div>
            )}
            
            <button 
              onClick={() => setShowMoreLinks(!showMoreLinks)}
              className="text-xs text-zinc-500 mt-2 flex items-center"
            >
              {showMoreLinks ? "Show less" : "More links"}
              <Menu className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Add animation for expanding menu */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  )
} 