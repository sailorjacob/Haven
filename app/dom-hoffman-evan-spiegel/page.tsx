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

export default function DomHoffmanEvanSpiegelPage() {
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
    <main className={`min-h-screen flex flex-col p-6 font-sans transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-zinc-900 text-zinc-100'
        : 'bg-zinc-50 text-zinc-700'
    }`}>
      <header onMouseLeave={() => setProcessOpen(false)} className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-zinc-900/95 border-zinc-700'
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
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
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
              }`}>Dom Hoffman & Evan Spiegel</h1>
              <div className={`font-serif text-[15px] leading-7 space-y-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                <p>Two of my inspirations, thinking about the tone a platform sets, simplicity. Respectability as a founder.</p>
                
                <p>Dom Hoffman built Vine, then Byte, then Dispo. Each iteration refined the same core insight: people want to create, share, and discover short-form video content. But more than that, Dom understood that the platform itself needed to feel approachable, human, real. Not corporate. Not sterile.</p>
                
                <p>Evan Spiegel took Snapchat from a disappearing photo app to a camera company. But what he really built was a platform that felt like it was made by people who understood how people actually communicate. The interface was intuitive because it mirrored real human behavior—the way we gesture, the way we think about time, the way we share moments.</p>
                
                <p>Throw in Mike Cessario from Liquid Death, who turned water into a lifestyle brand by making it feel dangerous and rebellious. Or Dietrich Mateschitz from Red Bull, who built an empire on the simple premise that people want to feel energized and limitless. Or Larry Gagosian, the art dealer who made galleries feel like exclusive clubs where the art was secondary to the experience of being there.</p>
                
                <p>We're really starting to think simple.</p>
                
                <p>Simple doesn't mean basic. Simple means essential. It means removing everything that doesn't serve the core purpose. It means understanding that the best products feel inevitable—like they were always meant to exist exactly as they are.</p>
                
                <p>Dom and Evan both understood that the tone of a platform matters more than its features. Vine felt playful and experimental. Snapchat felt intimate and ephemeral. These weren't just design choices—they were cultural statements about how people should interact with technology.</p>
                
                <p>Respectability as a founder isn't about being boring or corporate. It's about being consistent, reliable, and authentic to your vision. It's about building something that people can trust, even if they don't fully understand it yet.</p>
                
                <p>The best founders don't just build products—they build cultures. They create environments where people feel comfortable being themselves, where creativity feels natural, where connection feels inevitable.</p>
                
                <p>That's what Dom and Evan did. That's what Mike and Dietrich and Larry did. They didn't just sell products—they sold experiences, identities, ways of being in the world.</p>
                
                <p>And they did it all with remarkable simplicity.</p>
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
