"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState, useEffect } from "react"
import { Hexagon, ChevronDown, Menu, X, FileText, Sparkles, Bitcoin, BookOpen, Crown, Grid, List } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import ProcessDropdown from "@/components/ProcessDropdown"

// Random Scribbles Component
const RandomScribbles = () => {
  const generateGraffitiScribble = () => {
    const type = Math.random()
    if (type < 0.4) {
      // Ink blot drips
      const centerX = Math.random() * 80 + 10
      const centerY = Math.random() * 80 + 10
      const radius = Math.random() * 15 + 5
      const points = []
      const numPoints = Math.floor(Math.random() * 8) + 6
      
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2
        const r = radius + Math.random() * 8
        points.push({
          x: centerX + Math.cos(angle) * r,
          y: centerY + Math.sin(angle) * r
        })
      }
      return { type: 'blot', points }
    } else if (type < 0.7) {
      // Curved graffiti lines
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      const controlX1 = startX + (Math.random() - 0.5) * 40
      const controlY1 = startY + (Math.random() - 0.5) * 40
      const controlX2 = controlX1 + (Math.random() - 0.5) * 30
      const controlY2 = controlY1 + (Math.random() - 0.5) * 30
      const endX = controlX2 + (Math.random() - 0.5) * 20
      const endY = controlY2 + (Math.random() - 0.5) * 20
      
      return { 
        type: 'curve', 
        points: [{ x: startX, y: startY }, { x: controlX1, y: controlY1 }, { x: controlX2, y: controlY2 }, { x: endX, y: endY }]
      }
    } else {
      // Spray paint splatter
      const centerX = Math.random() * 100
      const centerY = Math.random() * 100
      const points = []
      const numPoints = Math.floor(Math.random() * 12) + 8
      
      for (let i = 0; i < numPoints; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 20
        points.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance
        })
      }
      return { type: 'splatter', points }
    }
  }

  const scribbles = useMemo(() => {
    return Array.from({ length: 4 }, () => generateGraffitiScribble())
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {scribbles.map((scribble, scribbleIndex) => (
        <svg
          key={scribbleIndex}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {scribble.type === 'blot' && (
            <path
              d={`M ${scribble.points.map((point, i) => 
                `${point.x} ${point.y}`
              ).join(' L ')} Z`}
              fill="rgba(0,0,0,1)"
              opacity={0.8}
            />
          )}
          {scribble.type === 'curve' && (
            <path
              d={`M ${scribble.points[0].x} ${scribble.points[0].y} Q ${scribble.points[1].x} ${scribble.points[1].y} ${scribble.points[2].x} ${scribble.points[2].y} T ${scribble.points[3].x} ${scribble.points[3].y}`}
              stroke="rgba(0,0,0,1)"
              strokeWidth={Math.random() * 2 + 1}
              fill="none"
              strokeLinecap="round"
              opacity={0.9}
            />
          )}
          {scribble.type === 'splatter' && (
            <path
              d={`M ${scribble.points.map((point, i) => 
                `${point.x} ${point.y}`
              ).join(' L ')} Z`}
              fill="rgba(0,0,0,1)"
              opacity={0.7}
            />
          )}
        </svg>
      ))}
    </div>
  )
}

const posts = [
  {
    slug: "/is-the-world-dangerous-or-safe",
    title: "Is the world dangerous or safe?",
    description: "We have iPhones, video games, art museums, and sports. But we have hundreds of millions if not billions on the threshold of poverty. Does this mean there's a long way to fall for those at the top? Or will those at the bottom be lifted?",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: FileText,
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
    slug: "/dom-hoffman-evan-spiegel",
    title: "Dom Hoffman & Evan Spiegel",
    description: "Two of my inspirations, thinking about the tone a platform sets, simplicity. Respectability as a founder.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: FileText,
    date: "Sep 2025",
  },
  {
    slug: "/the-next-monaco",
    title: "The Next Monaco",
    description: "Inspired by James of Arc's post saying we need more Australia's, my joke is we need more Monaco's. Why not?",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    Icon: Crown,
    date: "Sep 2025",
  },
  {
    slug: "/steve-jobs-corporate",
    title: "Steve Jobs Corporate",
    description: "Being corporate is one thing, being Steve Jobs corporate is another. Keep this in mind as I work and deal with people.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: FileText,
    date: "Sep 2025",
  },
  {
    slug: "/the-mosquito",
    title: "The Mosquito",
    description: "This is a true legend, an epic about being disturbed by a different mosquito every night, just as I'm about to fall asleep.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    Icon: Sparkles,
    date: "Sep 2025",
  },
  {
    slug: "/haven-music-platform",
    title: "Haven Music Platform",
    description: "Netflix x Spotify x HBO. AI music, crypto payments, replace BMI, replace things, build a software platform.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/soundpark-mw8b8hcheUxbTkqe7nBOKEEJg1C9QD.png",
    Icon: Bitcoin,
    date: "Sep 2025",
  },
  {
    slug: "/our-jeff-koons-our-drake-our-star-wars",
    title: "Our Jeff Koons, Our Drake, Our Star Wars",
    description: "Gordon Berger is the next Jeff Koons. Kevin George is our Drake. Ammo Cat is our Star Wars.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/artmuseum-Ghgi7H2LrI2doarDHPUkVhRND9HDdQ.png",
    Icon: Crown,
    date: "Sep 2025",
  },
  {
    slug: "/i-dont-like-the-word-product",
    title: "I Don't Like the Word Product",
    description: "Product product product. Talking to you, San Francisco. How often do you hear Elon use the word product?",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    Icon: FileText,
    date: "Sep 2025",
  },
  {
    slug: "/blood-libel-and-the-modern-devil",
    title: "Blood Libel & the Modern Devil",
    description: "Conspiracy is the modern devil. The Jeffrey Epstein files, Elon tweeting away about it... accuse or be accused.",
    image: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    Icon: Sparkles,
    date: "Sep 2025",
  },
  {
    slug: "/what-im-listening-to",
    title: "What I'm listening to",
    description: "Current music, podcasts, and audio that's shaping my thinking and creative process.",
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
    title: "Predictions",
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

// Generate random background colors for blog post cards
const getRandomBackgroundColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  
  const backgroundColors = [
    'bg-gradient-to-br from-stone-100 to-stone-200',
    'bg-gradient-to-br from-zinc-100 to-zinc-200',
    'bg-gradient-to-br from-slate-100 to-slate-200',
    'bg-gradient-to-br from-gray-100 to-gray-200',
    'bg-gradient-to-br from-neutral-100 to-neutral-200',
    'bg-gradient-to-br from-slate-50 to-slate-100',
    'bg-gradient-to-br from-zinc-50 to-zinc-100',
    'bg-gradient-to-br from-stone-50 to-stone-100',
    'bg-white',
    'bg-gradient-to-br from-gray-50 to-gray-100'
  ]
  
  return backgroundColors[Math.abs(hash) % backgroundColors.length]
}

export default function BlogIndex() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const { theme, setTheme } = useTheme() || { theme: 'light', setTheme: () => {} }

  // Set blog page to default to dark mode
  useEffect(() => {
    if (theme === 'system') {
      setTheme('dark')
    }
  }, [theme, setTheme])

  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])
  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-zinc-900 text-zinc-100'
        : 'bg-white text-zinc-900'
    }`}>
      {/* Header (same as homepage) */}
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
              }`}>
                {mobileMenuOpen ? <X className={`w-5 h-5 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-900'
                }`} /> : <Menu className={`w-5 h-5 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-900'
                }`} />}
              </button>
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

                <Link href={`/blog`} className={`block text-sm transition-colors group ${
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

      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900'
            : 'bg-gradient-to-b from-zinc-50 via-white to-zinc-50'
        }`} />
      </div>

      <div className="pt-20" />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Jacob's Profile Section */}
        <div className="mb-12">
          <div className={`rounded-2xl border p-6 md:p-8 shadow-sm transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-zinc-800 border-zinc-700'
              : 'bg-white border-zinc-200'
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative flex-shrink-0">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-zinc-700 to-zinc-800'
                    : 'bg-gradient-to-br from-zinc-100 to-zinc-200'
                }`}>
                  <Hexagon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
                  }`} strokeWidth={1} />
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'border-zinc-800' : 'border-white'
                }`}></div>
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/story" className="hover:opacity-80 transition-opacity">
                  <h2 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>Jacob Hale</h2>
                </Link>
                <p className={`mt-1 text-sm md:text-base transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>Founder & Creative Director</p>
                <p className={`text-sm mt-2 leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
                }`}>
                  Exploring the intersection of technology, culture, and human potential. Building the future through thoughtful design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
              }`}>🌋🏛️⚔️</h1>
              <p className={`mt-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>thoughts ideas + generations</p>
            </div>

            {/* View Mode Switcher */}
            <div className={`flex items-center space-x-2 rounded-lg p-1 transition-colors duration-300 ${
              theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'
            }`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? theme === 'dark'
                      ? 'bg-zinc-700 text-zinc-200 shadow-sm'
                      : 'bg-white text-zinc-900 shadow-sm'
                    : theme === 'dark'
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? theme === 'dark'
                      ? 'bg-zinc-700 text-zinc-200 shadow-sm'
                      : 'bg-white text-zinc-900 shadow-sm'
                    : theme === 'dark'
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={post.slug} className="group">
                    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
                        : 'bg-white border-zinc-200 hover:border-zinc-400'
                    }`}>
                      <div className={`relative aspect-[3/2] overflow-hidden ${getRandomBackgroundColor(post.slug)}`}>
                        <RandomScribbles />
                        <div className={`absolute inset-0 mix-blend-overlay ${
                          theme === 'dark' ? 'bg-zinc-900/30' : 'bg-white/20'
                        }`} />
                        <div className={`absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm shadow-sm ${
                          theme === 'dark'
                            ? 'bg-zinc-700/80 text-zinc-200 border-zinc-600'
                            : 'bg-white/80 text-zinc-800 border-zinc-200'
                        }`}>
                          {post.Icon ? <post.Icon className="w-5 h-5" /> : null}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between">
                          <h2 className={`text-lg font-medium transition-colors duration-300 ${
                            theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                          }`}>{post.title}</h2>
                          <span className={`text-xs mt-1 ml-3 flex-shrink-0 transition-colors duration-300 ${
                            theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                          }`}>{post.date}</span>
                        </div>
                        <p className={`text-sm mt-2 leading-relaxed transition-colors duration-300 ${
                          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                        }`}>{post.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link key={post.slug} href={post.slug} className="group">
                    <div className={`rounded-xl border p-6 transition-all duration-300 hover:shadow-md ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
                        : 'bg-white border-zinc-200 hover:border-zinc-400'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${getRandomBackgroundColor(post.slug)}`}>
                          <RandomScribbles />
                          <div className={`absolute inset-0 mix-blend-overlay ${
                            theme === 'dark' ? 'bg-zinc-900/30' : 'bg-white/20'
                          }`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            {post.Icon ? <post.Icon className={`w-6 h-6 transition-colors duration-300 ${
                              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                            }`} /> : null}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h2 className={`text-lg font-medium transition-colors group-hover:text-zinc-700 ${
                              theme === 'dark'
                                ? 'text-zinc-100 group-hover:text-zinc-300'
                                : 'text-zinc-900 group-hover:text-zinc-700'
                            }`}>{post.title}</h2>
                            <span className={`text-xs mt-1 ml-3 flex-shrink-0 transition-colors duration-300 ${
                              theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>{post.date}</span>
                          </div>
                          <p className={`text-sm mt-2 leading-relaxed transition-colors duration-300 ${
                            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                          }`}>{post.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}


