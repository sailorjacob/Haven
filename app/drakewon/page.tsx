"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Hexagon, ChevronDown, Menu, X, Crown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ProcessDropdown from "@/components/ProcessDropdown"

const getSeededRandomColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function DrakeWonPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  const content = `Why rappers are presidents of network states


Why Drake won

America chose kendrick (superbowl picture)

And then drake went to Australia and drew a crowd

You can see Kanye West doing this 
Going to japan, going to chinna and thanking the chinese government 


Whats the difference between Donald Trump & a KPOP star? A KPOP star could surely win, right? The difference is that Trump is actually a nice guy who got completely destroyed for years and hes actually the type of person who will bomb the terrotists at the right time. 

Lisa & Taylor Swift can maintain their image of innocent & perfection 



XXXTENTACTION has 33million monthly listeners, and AOC has 12 million followers


What’s missing? Only Physical , finance, legal structure? 

It would take one post from one of these guys to get millions of people to Opt-in to a network state promising sovereignty or more fun with their favorite stars

You can see diplo moving about crowds of people and hosting a run club 

Why this matters? Elon Ye presidential announcement (trump ended up being the trojan horse)


What’s next? Exiting existing networks (i started making my own cursor for grok while also using cursor) A small army of people at NS could theoretically clone their own version of X, Instagram, etc (you see this happening when IG stole snapchat stories, implemented Reels, and built threads) I had a drink with the product manager of threads shortly before it dropped and we were comparing Grindr to Tinder and how grindr will likely eventually win. . 


Exit the state, exit the platform - non - obvious and even our best minds today take this for granted (Elon’s done a great job with X, but I remember the difference between Vine, and TikTok)`

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col p-6 font-sans">
      <header onMouseLeave={() => setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/studio" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider text-zinc-900">Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative flex items-center" onMouseEnter={() => setProcessOpen(true)}>
                  <Link href="/" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  <motion.span className="ml-1" animate={{ rotate: processOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                  </motion.span>
                </div>
                <Link href="https://designforstartups.net" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                  design for startups
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="hidden md:inline text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors">blog</Link>
              <Link href="/contact" className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm">msg</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
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
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white border-b border-zinc-200">
              <div className="w-full px-4 sm:px-6 py-3 space-y-3">
                <Link href="https://designforstartups.net" target="_blank" rel="noopener noreferrer" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group" onClick={() => setMobileMenuOpen(false)}>
                  design for startups
                </Link>
                <Link href="/blog" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group" onClick={() => setMobileMenuOpen(false)}>
                  blog
                </Link>
                <Link href="/contact" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group" onClick={() => setMobileMenuOpen(false)}>
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
          <div className="mx-auto bg-[#fafaf5] border border-zinc-300 rounded-md shadow-[0_1px_0_rgba(0,0,0,0.05)]">
            <div className="px-6 py-4 border-b border-zinc-300 flex items-center gap-2">
              <Crown className="w-4 h-4 text-zinc-700" />
              <span className="text-zinc-700 text-sm tracking-wide">Office of Cultural Affairs</span>
            </div>
            <div className="px-6 py-8">
              <h1 className="text-center text-zinc-800 text-xl font-semibold mb-6">Drake Won</h1>
              <div className="whitespace-pre-wrap font-serif text-[15px] leading-7 text-zinc-800">
                {content}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-zinc-300 text-right text-xs text-zinc-500">
              Draft • Unofficial
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


