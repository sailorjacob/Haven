"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Hexagon, ChevronDown, Menu, X, Crown, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import ProcessDropdown from "@/components/ProcessDropdown"

const getSeededRandomColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function TheNextMonacoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const { theme, setTheme } = useTheme() || { theme: 'light', setTheme: () => {} }
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  return (
    <main className={`min-h-screen transition-colors duration-300 flex flex-col p-6 font-sans ${
      theme === 'dark' ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-700'
    }`}>
      <header onMouseLeave={() => setProcessOpen(false)} className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-zinc-900/90 border-zinc-700'
          : 'bg-white/90 border-zinc-200'
      }`}>
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className={`w-8 h-8 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`} strokeWidth={1} />
                <span className={`ml-2 text-lg font-light tracking-wider transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`}>Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative flex items-center" onMouseEnter={() => setProcessOpen(true)}>
                  <Link href="/" className={`text-sm font-light transition-colors group ${
                    theme === 'dark'
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}>
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  <motion.span className="ml-1" animate={{ rotate: processOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
                    }`} />
                  </motion.span>
                </div>

              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className={`hidden md:inline text-sm font-light transition-colors ${
                theme === 'dark'
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}>blog</Link>
              <Link href="/contact" className={`hidden md:inline-flex items-center border font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm ${
                theme === 'dark'
                  ? 'border-zinc-600 hover:bg-zinc-800 text-zinc-200'
                  : 'border-zinc-300 hover:bg-zinc-50 text-zinc-900'
              }`}>msg</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-900'
              }`}>{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
            </div>
          </nav>
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className={`md:hidden border-b transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-zinc-900 border-zinc-700'
                : 'bg-white border-zinc-200'
            }`}>
              <div className="w-full px-4 sm:px-6 py-3 space-y-3">

                <Link href="/blog" className={`block text-sm transition-colors group ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`} onClick={() => setMobileMenuOpen(false)}>
                  blog
                </Link>
                <Link href="/contact" className={`block text-sm transition-colors tracking-wider uppercase group ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`} onClick={() => setMobileMenuOpen(false)}>
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${navColors.contact}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="pt-20" />

      <section className="flex-1 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
          {/* Letter Head */}
          <div className={`mx-auto border rounded-md shadow-[0_1px_0_rgba(0,0,0,0.05)] transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-zinc-800 border-zinc-600'
              : 'bg-[#fafaf5] border-zinc-300'
          }`}>
            <div className={`px-6 py-4 border-b flex items-center gap-2 transition-colors duration-300 ${
              theme === 'dark' ? 'border-zinc-600' : 'border-zinc-300'
            }`}>
              <Crown className={`w-4 h-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`} />
              <span className={`text-sm tracking-wide transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}>Office of Cultural Affairs</span>
            </div>
            <div className="px-6 py-8">
              {/* Theme Toggle Button */}
              <div className="flex justify-start mb-4">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200'
                      : 'hover:bg-zinc-200 text-zinc-600 hover:text-zinc-800'
                  }`}
                  aria-label="Toggle reading mode"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
              <h1 className={`text-center text-xl font-semibold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'
              }`}>The Next Monaco</h1>
              <div className={`font-serif text-[15px] leading-7 space-y-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                <p>Inspired by James of Arc's post saying we need more Australia's, my joke is we need more Monaco's. Why not?</p>
                
                <p>What else feels like a luxurious Star Wars cloud city with F1 racing, yachts, and a supermodel tax haven?</p>
                
                <p>Monaco exists as this impossible dream—a city-state that somehow manages to be both exclusive and accessible, both ancient and futuristic, both European and global. It's where the world's wealthiest people go to play, where Formula 1 cars scream through narrow streets, where yachts the size of small buildings dock casually in the harbor.</p>
                
                <p>But Monaco isn't just about money. It's about a certain kind of lifestyle, a certain kind of aesthetic, a certain kind of freedom. It's about living in a place where everything is designed for pleasure, where every detail is considered, where every experience is curated.</p>
                
                <p>So why not create more places like this? Why not build new Monaco's around the world?</p>
                
                <p>Imagine a Monaco in the mountains—a high-altitude playground where the wealthy can ski, hike, and escape the heat. Or a Monaco in the desert—a futuristic oasis where technology and luxury meet in perfect harmony. Or a Monaco in the tropics—a paradise where the world's elite can live in perpetual summer.</p>
                
                <p>These wouldn't just be cities. They would be experiences. They would be statements about what's possible when you combine unlimited resources with unlimited imagination.</p>
                
                <p>They would be places where the rules are different, where the standards are higher, where the possibilities are endless.</p>
                
                <p>They would be the next Monaco's.</p>
                
                <p>And why not? The world is full of beautiful places, full of talented people, full of resources waiting to be combined in new and interesting ways.</p>
                
                <p>All it takes is vision, ambition, and the willingness to dream big enough to make it happen.</p>
                
                <p>So let's build more Monaco's. Let's create more places where the impossible becomes possible, where luxury meets innovation, where the future feels like it's already here.</p>
                
                <p>Let's build the next Monaco.</p>
              </div>
            </div>
            <div className={`px-6 py-4 border-t text-right text-xs transition-colors duration-300 ${
              theme === 'dark'
                ? 'border-zinc-600 text-zinc-500'
                : 'border-zinc-300 text-zinc-500'
            }`}>
              Draft • Unofficial
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/blog" className={`underline text-sm transition-colors duration-300 ${
              theme === 'dark'
                ? 'text-zinc-400 hover:text-zinc-200'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}>← Back to Blog</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
