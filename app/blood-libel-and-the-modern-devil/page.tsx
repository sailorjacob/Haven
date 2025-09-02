"use client"

import Link from "next/link"
import Image from "next/image"
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

export default function BloodLibelAndTheModernDevilPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col p-6 font-sans">
      <header onMouseLeave={() => setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
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
              <h1 className="text-center text-zinc-800 text-xl font-semibold mb-6">Blood Libel & the Modern Devil</h1>
              <div className="font-serif text-[15px] leading-7 text-zinc-800 space-y-6">
                <p>I think Peter Thiel is doing something on the anti-Christ. I know he is, if he hasn't already. I will ingest, but...</p>
                
                <p>Well, all I'm trying to set up is the fact that maybe some of this has been said, or is just obvious, but...</p>
                
                <p>Conspiracy is the modern devil. The Jeffrey Epstein files, you have Elon tweeting away about it... It's almost like, accuse or be accused. We heard about it for years until finally (what I've said all along) you see the announcements saying there were no clients.</p>
                
                <p>My ultimate prediction has always remained that Jeffrey Epstein simply likely paid multiple young girls cash to have sex with him, got caught early, and became a conspiracy.</p>
                
                <p>This is HEAVILY contested, but that shows you the alarm bells that have gone off in my head for years.</p>
                
                <p>Because when Netflix dropped that documentary, and the Jeffrey Dahmer re-enactment, it totally fucked the American psyche. Both of those ruined an entire generation in different ways.</p>
                
                <p>There's a lot to unpack here, but...</p>
                
                <p>Whether it's Jewish, 'Them,' the deep state, the rich, pedos, Hollywood, immigrants, banks, or whatever... CONSPIRACY is the modern devil.</p>
                
                <p>Look up the definition of blood libel.</p>
                
                <p>It's probably a lot easier to make friends if you're living in a mud hut and there's a castle over there, and you start to say that the people in the castle eat babies. It becomes a way to take control of the castle, and justify any actions against said people.</p>
                
                <p>The modern version of this is conspiracy theory. It's the same mechanism, the same psychology, the same desire to explain complex problems with simple, evil explanations.</p>
                
                <p>When people can't understand why they're struggling, why the world is changing, why things aren't working out the way they expected, they look for someone to blame. And in our modern world, that blame takes the form of conspiracy.</p>
                
                <p>It's not about the truth. It's about the story. It's about having a narrative that explains everything, that gives you someone to hate, that makes you feel like you're on the right side of history.</p>
                
                <p>But the truth is usually much more complicated, much more boring, much more human. The truth is that most people are just trying to get by, trying to do their best, trying to make sense of a world that doesn't always make sense.</p>
                
                <p>Conspiracy theory is the modern blood libel. It's the same old story, told with new characters.</p>
                
                <p>And it's just as dangerous.</p>
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
