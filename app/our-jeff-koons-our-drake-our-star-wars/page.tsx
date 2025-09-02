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

export default function OurJeffKoonsOurDrakeOurStarWarsPage() {
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
              <h1 className="text-center text-zinc-800 text-xl font-semibold mb-6">Our Jeff Koons, Our Drake, Our Star Wars</h1>
              <div className="font-serif text-[15px] leading-7 text-zinc-800 space-y-6">
                <p>Gordon Berger is the next Jeff Koons. He's our generation's first to do a talk on blockchain art, doing legitimate art on Bitcoin. His rendered digital work has potential for huge projection installations.</p>
                
                <p>Kevin George, whose first manager worked for American Idol and discovered Katy Perry, whose fans include Grimes, Nigerian megastar Rema, and the late Juice WRLD. The pure-hearted lion.</p>
                
                <p>Ammo Cat is our Star Wars. It might be one of the only series with true artistic and aesthetic potential. Emotions, dimensions, things like that. Maybe it will never happen, maybe it will be micro—but if it's anything like Downtown 81, it will be a success.</p>
                
                <p>These are our cultural icons. These are the people and projects that will define our generation.</p>
                
                <p>Gordon Berger understands that art isn't just about beauty—it's about technology, about innovation, about pushing boundaries. His work on the blockchain isn't just a gimmick—it's a fundamental reimagining of what art can be in the digital age.</p>
                
                <p>Kevin George represents the new generation of artists who understand that success isn't just about talent—it's about community, about connection, about building something that resonates with people on a deep level.</p>
                
                <p>Ammo Cat represents the potential for storytelling that goes beyond entertainment—that becomes art, that becomes culture, that becomes something that defines a generation.</p>
                
                <p>These aren't just individual successes. They're cultural movements. They're the beginning of something new, something that will change how we think about art, music, and storytelling.</p>
                
                <p>They're our Jeff Koons, our Drake, our Star Wars.</p>
                
                <p>And they're just getting started.</p>
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
