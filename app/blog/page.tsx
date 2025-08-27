"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Hexagon, ChevronDown, Menu, X, FileText, Sparkles, Bitcoin, BookOpen, Crown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ProcessDropdown from "@/components/ProcessDropdown"

// Random Scribbles Component
const RandomScribbles = () => {
  const generateScribble = () => {
    const points = []
    const numPoints = Math.floor(Math.random() * 8) + 4 // 4-11 points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        pressure: Math.random() * 0.8 + 0.2
      })
    }
    return points
  }

  const scribbles = useMemo(() => {
    return Array.from({ length: 3 }, () => generateScribble())
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {scribbles.map((scribble, scribbleIndex) => (
        <svg
          key={scribbleIndex}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={`M ${scribble.map((point, i) => 
              `${point.x} ${point.y}`
            ).join(' L ')}`}
            stroke="rgba(0,0,0,0.15)"
            strokeWidth={scribble[0]?.pressure * 2 || 1}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.6}
          />
        </svg>
      ))}
    </div>
  )
}

const posts = [
  {
    slug: "/what-im-listening-to",
    title: "What I'm listening to",
    description: "Current music, podcasts, and audio that's shaping my thinking and creative process.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: Sparkles,
    date: "Aug 2025",
  },
  {
    slug: "/what-makes-painting-worth-100m",
    title: "What Makes a painting worth $100m?",
    description: "The answer: the artist's story. He who is most playing the character and role of an artist.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    Icon: FileText,
    date: "Aug 2025",
  },
  {
    slug: "/ai-work-no-shame",
    title: "All of My Work is AI: Why I Use AI with No Shame",
    description: "Exploring how AI amplifies human creativity and why the real work lies in ideas, not typing.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: Sparkles,
    date: "Aug 2025",
  },
  {
    slug: "/drakewon",
    title: "Drake Won",
    description: "Why rappers are presidents of network states.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: Crown,
    date: "Jul 2025",
  },
  {
    slug: "/ns-essay",
    title: "NS Essay",
    description: "Notes and essays exploring coordination, sovereignty, and network-native societies.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    Icon: FileText,
    date: "Jun 2025",
  },
  {
    slug: "/ns-predictions",
    title: "NS Predictions",
    description: "Foreshadows and near-future calls across tech, culture, and governance.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/soundpark-mw8b8hcheUxbTkqe7nBOKEEJg1C9QD.png",
    Icon: Sparkles,
    date: "May 2025",
  },
  {
    slug: "/bitcoinbank",
    title: "Bitcoin Bank",
    description: "Designing permissionless finance and product thinking around Bitcoin.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    Icon: Bitcoin,
    date: "Apr 2025",
  },
  {
    slug: "/story",
    title: "Story",
    description: "About me.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/artmuseum-Ghgi7H2LrI2doarDHPUkVhRND9HDdQ.png",
    Icon: BookOpen,
    date: "Mar 2025",
  },
]

const getSeededRandomColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function BlogIndex() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])
  return (
    <main className="min-h-screen bg-white">
      {/* Header (same as homepage) */}
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
                <Link href="/gallery" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                  collect art
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
                <Link href="/gallery" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group" onClick={() => setMobileMenuOpen(false)}>
                  collect art
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

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50" />
      </div>

      <div className="pt-20" />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-light text-zinc-900">🌋🔮🏛️⚔️ Blog</h1>
          <p className="text-zinc-600 mt-2">thoughts ideas + generations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={post.slug} className="group">
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-400 transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <RandomScribbles />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-75 brightness-95"
                  />
                  <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-zinc-800 border border-zinc-200 shadow-sm">
                    {post.Icon ? <post.Icon className="w-5 h-5" /> : null}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-zinc-900">{post.title}</h2>
                    <span className="text-xs text-zinc-400 mt-1 ml-3 flex-shrink-0">{post.date}</span>
                  </div>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}


