"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Hexagon, ChevronDown, Menu, X, FileText, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import ProcessDropdown from "@/components/ProcessDropdown"
import Image from "next/image"

const getSeededRandomColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function WhatMakesPaintingWorth100mPage() {
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

              {/* Theme Toggle Button */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
                aria-label="Toggle reading mode"
              >
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-900'
                  }`} />
                ) : (
                  <Moon className={`w-5 h-5 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-900'
                  }`} />
                )}
              </button>

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
              <FileText className={`w-4 h-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`} />
              <span className={`text-sm tracking-wide transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}>Art Market Analysis</span>
            </div>
            <div className="px-6 py-8">
              <h1 className={`text-center text-xl font-semibold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'
              }`}>What Makes a painting worth $100m?</h1>
              <div className={`font-serif text-[15px] leading-7 space-y-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                <p>The answer is simple yet profound: <strong>the artist's story</strong>.</p>
                
                <p>Not the technical skill, not the materials used, not even the aesthetic beauty. Though these matter, they are secondary.</p>
                
                <p>What truly drives a painting to nine-figure valuations is <strong>he who is most playing the character and role of an artist</strong>.</p>
                
                <p>This is the meta-game of the art world. The artist who most convincingly embodies the archetype of "the artist" in the collective imagination who lives the myth, who performs the role with such conviction that it becomes indistinguishable from reality.</p>
                
                <p>Think of the greats: Picasso, Warhol, Basquiat, Hirst. Each mastered not just their craft, but the performance of being an artist. They understood that art is as much about the story as it is about the object.</p>
                
                <p>The $100m painting is not just pigment on canvas. It's a relic from the life of someone who played the character of "artist" so well that the world believed it completely.</p>
                
                <div className="my-8">
                  <Image 
                    src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/havenblog/andy-warhol575_.webp"
                    alt="Andy Warhol - Master of the Artist Character"
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                <p>More thoughts on this coming soon...</p>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-zinc-300 text-right text-xs text-zinc-500">
              Draft • Ongoing
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/blog" className="text-zinc-600 hover:text-zinc-900 underline text-sm">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
