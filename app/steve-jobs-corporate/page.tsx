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

export default function SteveJobsCorporatePage() {
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
              }`}>Steve Jobs Corporate</h1>
              <div className={`font-serif text-[15px] leading-7 space-y-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                <p>Being corporate is one thing. Being Steve Jobs corporate is another.</p>
                
                <p>Keep this in mind as I work and deal with people.</p>
                
                <p>Steve Jobs didn't just run a company. He ran a revolution. He didn't just sell products. He sold dreams. He didn't just manage people. He inspired them to believe in something bigger than themselves.</p>
                
                <p>When Steve Jobs was corporate, he was corporate on his own terms. He wore black turtlenecks and jeans to board meetings. He refused to put his name on the company's products. He insisted on perfection even when it meant delaying launches and disappointing investors.</p>
                
                <p>He was corporate, but he was never conventional.</p>
                
                <p>Steve Jobs corporate means having the confidence to break the rules when the rules don't serve your vision. It means being uncompromising about quality, even when it costs more money or takes more time. It means treating your company like a work of art, not just a business.</p>
                
                <p>It means understanding that the best companies aren't just profitable. They're meaningful. They don't just satisfy customers. They delight them. They don't just employ people. They empower them.</p>
                
                <p>Steve Jobs corporate means having the courage to say no to good ideas in favor of great ones. It means being willing to cannibalize your own products before someone else does. It means understanding that the most important thing isn't what you're building. It's why you're building it.</p>
                
                <p>It means treating every interaction, every decision, every detail as if it matters. Because it does.</p>
                
                <p>Steve Jobs corporate means being corporate without losing your soul. It means being professional without being boring. It means being successful without being satisfied.</p>
                
                <p>It means understanding that the best companies are built by people who care more about making a difference than making a profit.</p>
                
                <p>So as I work and deal with people, I keep this in mind: be corporate, but be Steve Jobs corporate. Be professional, but be passionate. Be successful, but be significant.</p>
                
                <p>Because in the end, the companies that matter aren't the ones that make the most money. They're the ones that make the most difference.</p>
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
