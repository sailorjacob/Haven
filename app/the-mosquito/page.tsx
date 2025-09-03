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

export default function TheMosquitoPage() {
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
              }`}>The Mosquito</h1>
              <div className={`font-serif text-[15px] leading-7 space-y-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                <p>This is a true legend, an epic about being disturbed by a different mosquito every night, just as I'm about to fall asleep.</p>
                
                <p>I hear its shrieking buzz in my ear, horneting towards my flesh, and I jerk and smack at it, moments before falling asleep.</p>
                
                <p>I sit up, flip my light switch, and look for it for a minute. Finally, it moves and I clap it to death, rub its guts off my hands, and fall asleep.</p>
                
                <p>This is life on the frontier.</p>
                
                <p>Every night, the same ritual. Every night, a new mosquito. Every night, the same battle between man and insect, between civilization and nature, between order and chaos.</p>
                
                <p>It's not just about the mosquito. It's about the persistence of the natural world, about the way life finds a way to intrude on our carefully constructed environments. It's about the reminder that no matter how advanced our technology becomes, no matter how sophisticated our societies grow, we're still vulnerable to the simplest forms of life.</p>
                
                <p>The mosquito doesn't care about your wealth, your status, your achievements. It doesn't care about your plans, your dreams, your ambitions. It just wants to feed, to survive, to reproduce.</p>
                
                <p>And every night, it reminds you of this fundamental truth: you are not the master of your domain. You are just another creature trying to survive in a world that doesn't care about your comfort or convenience.</p>
                
                <p>But there's something beautiful about this ritual, something primal and honest. It's a reminder that life is messy, unpredictable, and often inconvenient. It's a reminder that the best-laid plans can be disrupted by something as simple as a mosquito.</p>
                
                <p>And yet, every night, you fight back. You turn on the light, you search for the intruder, you eliminate the threat, and you go back to sleep.</p>
                
                <p>This is life on the frontier. This is what it means to be human in a world that doesn't always cooperate with your plans.</p>
                
                <p>It's not glamorous. It's not comfortable. But it's real.</p>
                
                <p>And maybe that's the point. Maybe the mosquito is there to remind us that life isn't supposed to be easy or comfortable. Maybe it's there to remind us that we're still part of the natural world, no matter how much we try to insulate ourselves from it.</p>
                
                <p>So every night, I fight the mosquito. And every night, I win. And every night, I'm reminded that this is what it means to be alive.</p>
                
                <p>This is life on the frontier.</p>
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
