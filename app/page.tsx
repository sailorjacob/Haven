"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Sparkles, Code, Palette, Zap, Users, ChevronLeft, Filter, ExternalLink, Mail, Phone, Menu, X, ChevronDown, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Footer } from "@/components/footer"
import { LucideIcon } from "lucide-react"
import { ServiceCard } from "./components/ServiceCard"
import { BlueprintGrid } from "./components/BlueprintGrid"
import { ServicesSection } from "./components/ServicesSection"
import { ScatteredStars } from "./components/ScatteredStars"
import ProcessDropdown from "@/components/ProcessDropdown"
import CrosshairOverlay from "../components/CrosshairOverlay"
import WorkGallery from "@/components/WorkGallery"

type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  link: string
  category: 'webapp' | 'website' | 'mobile'
}

  // Add this utility function at the top level
const getSeededRandomColor = (seed: string) => {
  // Simple hash function to get a consistent number from a string
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  
  // Use the hash to select a color
    const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function HomePage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [counter, setCounter] = useState(100000)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const [processSectionOpen, setProcessSectionOpen] = useState(false)
  const [performanceSectionOpen, setPerformanceSectionOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [crosshairDismissed, setCrosshairDismissed] = useState(false)
  const [crosshairTapPosition, setCrosshairTapPosition] = useState<{ x: number; y: number } | null>(null)
  const { theme, setTheme } = useTheme()
  
  // Feature flags for easy toggling
  const ENABLE_HOMEPAGE_STARS = true
  
  // Use useMemo to compute colors once and keep them consistent
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  // Handle scroll detection for signature visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const scrollThreshold = documentHeight * 0.5 // 50% down the page

      setIsScrolled(scrollTop > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Track which process step is hovered
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  
  const projects: Project[] = [
    {
      id: "swivimedia",
      title: "swivimedia.com",
      description: "marketing platform connecting brands with micro-influencers for campaign videos.",
      technologies: ["Next.js", "Creator Network", "Video"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//swivimedia.png",
      link: "https://www.swivimedia.com/about",
      category: "webapp"
    },
    {
      id: "jacobhalestudio",
      title: "jacobhalestudio.net",
      description: "fine art photography gallery.",
      technologies: ["Next.js", "Photography", "Gallery"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/newjacobhalestudio.png",
      link: "https://www.killmefaster.com/photos.html",
      category: "website"
    },
    {
      id: "1stclassstudios",
      title: "1stclassstudios.com",
      description: "professional recording studio with three facilities 45 minutes from manhattan.",
      technologies: ["Next.js", "Booking System", "Studio"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/1ST2.jpg",
      link: "/1stclassstudios",
      category: "website"
    },
    {
      id: "zenitram",
      title: "zenitram.io",
      description: "home automation lighting security and home theater business.",
      technologies: ["Automation", "Smart Home", "Security"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/zenitram.io.png",
      link: "https://www.zenitram.io/",
      category: "website"
    },
    {
      id: "drinktreasure",
      title: "drinktreasure.com",
      description: "premium dark rum brand.",
      technologies: ["E-commerce", "Spirits", "Branding"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/treasure2.png",
      link: "https://drinktreasure.com/",
      category: "website"
    },
    {
      id: "thewashbuckler",
      title: "The Washbuckler™",
      description: "The revolutionary sink splash guard that keeps your counters dry, your clothes clean, and your kitchen mess-free. Install in seconds, enjoy for years.",
      technologies: ["E-commerce", "Product Design", "Kitchen"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/thewashbuckler.png",
      link: "https://www.thewashbuckler.com/",
      category: "website"
    },
    {
      id: "donrogelio",
      title: "donrogelio.com",
      description: "cigar brand with payments.",
      technologies: ["E-commerce", "Cigars", "Payments"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/ddonrog.png",
      link: "https://www.donrogelio.com/",
      category: "website"
    },
    {
      id: "hancock",
      title: "Hancock Trading Community",
      description: "trading community platform with real-time market data and social features.",
      technologies: ["Trading", "Community", "Real-time"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Hancock.png",
      link: "",
      category: "webapp"
    },
    {
      id: "designforstartups",
      title: "designforstartups.net",
      description: "branding and design for new and special projects.",
      technologies: ["Branding", "Design", "Identity"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/desginforstartups%20dark.png",
      link: "https://designforstartups.net",
      category: "website"
    },
    {
      id: "killmefxster",
      title: "killmefaster.com",
      description: "digital art platform with interactive experiences.",
      technologies: ["Next.js", "Three.js", "Digital Art"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/KILLMEFASTER4.png",
      link: "https://killmefaster.com",
      category: "webapp"
    },
    {
      id: "xrated",
      title: "rated",
      description: "social platform for content sharing with privacy controls and monetization.",
      technologies: ["Next.js", "Privacy Controls", "Monetization"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/rated22.png",
      link: "https://x-rated.me",
      category: "webapp"
    },
    {
      id: "comparison-deserving",
      title: "comparison",
      description: "fine art gallery, online-first and accepting bitcoin.",
      technologies: ["Fine Art", "Bitcoin", "Gallery"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/comparison.png",
      link: "https://comparison-deserving.net",
      category: "website"
    },
    {
      id: "ammocat",
      title: "ammocat3000.com",
      description: "homepage, webstore, and mini-game for new york artist ammo cat.",
      technologies: ["Vue.js", "Webstore", "Mini-game"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      link: "https://ammocat3000.com",
      category: "website"
    },
    {
      id: "sojourn",
      title: "sojourn.city",
      description: "solar punk inspired art project with an interactive public art gallery wall.",
      technologies: ["Interactive Art", "Solar Punk", "Community"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/solarpunkcity/extra%20vision/Capital%20City%201.png",
      link: "https://sojourn.city",
      category: "website"
    },
    {
      id: "anthonyhadenguest",
      title: "Anthony Haden-Guest",
      description: "website for author and art critic anthony haden-guest.",
      technologies: ["Next.js", "Literature", "Portfolio"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/AHG%20SC.png",
      link: "https://anthonyhadenguest.net",
      category: "website"
    },
    {
      id: "beloved",
      title: "be-loved.app",
      description: "ios app and web platform with scheduling for nemt provider beloved transportation.",
      technologies: ["React", "iOS App", "Scheduling"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved2.png",
      link: "/beloved",
      category: "webapp"
    },
    {
      id: "moonlight",
      title: "Moonlight Garden 🌱",
      description: "24/7 mobile order restaurant with automation systems.",
      technologies: ["Next.js", "Mobile Order", "Automation"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//moonlight4.png",
      link: "/moonlight-garden",
      category: "webapp"
    },
    {
      id: "salomatic",
      title: "Salomatic Pitch Deck",
      description: "design and branding for their routine blood testing product with modern healthcare aesthetics.",
      technologies: ["Design", "Healthcare", "Pitch Deck"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//salomatic.png",
      link: "/salomatic",
      category: "website"
    },
    {
      id: "roundabout",
      title: "roundabout.run",
      description: "ride-sharing platform connecting people to medical appointments with bitcoin payment integration.",
      technologies: ["Next.js", "Bitcoin", "Healthcare"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//round1.png",
      link: "/roundabout",
      category: "webapp"
    },
    {
      id: "klaire",
      title: "klaire.dev",
      description: "portfolio for ui/ux designer klaire rasche with game design and ai technology.",
      technologies: ["Next.js", "UI/UX", "Game Design"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klairedev.png",
      link: "https://www.klaire.dev/klaire-portfolio.html",
      category: "website"
    },
  ]

  const hiddenIds: string[] = ["klaire", "roundabout", "salomatic", "moonlight"]

  const filteredProjects = (filter 
    ? projects.filter(project => project.category === filter)
    : projects).filter(project => !hiddenIds.includes(project.id))

  const processRef = useRef<HTMLDivElement>(null)
  const performanceRef = useRef<HTMLDivElement>(null)

  // Graphic component for each process step
  const GearGraphic = ({ index, number, active }: { index: number; number: string; active: boolean }) => {
    const baseSize = "w-20 h-20 md:w-24 md:h-24" // slightly smaller scale
    const commonPropsBase = {
      initial: { rotate: 0, scale: 1 },
      style: { willChange: "transform" },
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: 0.4,
      className: `${baseSize} text-zinc-500`
    }

    // helper to merge animation based on active flag
    const withAnim = (extra: any = {}) => ({
      ...commonPropsBase,
      animate: active ? { rotate: 360 } : { rotate: 0 },
      transition: active ? { repeat: Infinity, duration: 8, ease: "linear" } : { duration: 0 },
      ...extra
    })

    // Different SVGs per step for visual variety
    const svgs = [
      // Step 1 – three perfect hexagons at varied sizes / positions
      (
        <div className={`relative ${baseSize}`}>
          {[0,1,2].map(i => (
            <motion.svg
              key={i}
              viewBox="0 0 32 32"
              {...withAnim()}
              initial={{ rotate: 0, scale: [1,0.7,0.5][i] }}
              className={`absolute inset-0 ${baseSize}`}
              style={{ transformOrigin: "50% 50%", translate: `${['0px 0px','12px -8px','-14px 10px'][i]}` }}
            >
              {/* perfect regular hexagon */}
              <polygon points="16 3 28 10 28 22 16 29 4 22 4 10" />
            </motion.svg>
          ))}
        </div>
      ),
      // Step 2 – dashed circles
      (
        <div className={`relative ${baseSize}`}>
          {[14,10,6].map((r, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 32 32"
              {...withAnim()}
              initial={{ rotate: -90, scale: 1 - i * 0.15 }}
              className={`absolute inset-0 ${baseSize}`}
              style={{ translate: `${i===0? -12 : i===1? 0 : 12}px ${i===2? 10 : -10}px` }}
            >
              <circle cx="16" cy="16" r={r} strokeDasharray="4 3" />
            </motion.svg>
          ))}
        </div>
      ),
      // Step 3 – classic gear outline with spokes
      (
        <div className={`relative ${baseSize}`}>
          {[0,1].map((i)=> (
            <motion.svg
              key={i}
              viewBox="0 0 32 32"
              {...withAnim()}
              initial={{ rotate: -90 + (i===0? -5 : 10), scale: i===0 ? 1 : 0.45 }}

              className={`absolute inset-0 ${baseSize}`}
              style={{ translate: `${i===0? '0px 0px' : '20px -12px'}` }}
            >
              <path d="M30.329 13.721l-2.65-.441a11.922 11.922 0 00-1.524-3.653l1.476-2.066a1.983 1.983 0 00-.211-2.553l-.428-.428a1.983 1.983 0 00-2.553-.211L22.373 5.845a11.922 11.922 0 00-3.653-1.524l-.441-2.65A2 2 0 0016.306 0h-.612a2 2 0 00-1.973 1.671l-.441 2.65a11.922 11.922 0 00-3.653 1.524L7.561 4.369a1.983 1.983 0 00-2.553.211l-.428.428a1.983 1.983 0 00-.211 2.553l1.476 2.066a11.922 11.922 0 00-1.524 3.653l-2.65.441A2 2 0 000 15.694v.612a2 2 0 001.671 1.973l2.65.441a11.922 11.922 0 001.524 3.653L4.369 24.439a1.983 1.983 0 00.211 2.553l.428.428a1.983 1.983 0 002.553.211l2.066-1.476a11.922 11.922 0 003.653 1.524l.441 2.65A2 2 0 0015.694 32h.612a2 2 0 001.973-1.671l.441-2.65a11.922 11.922 0 003.653-1.524l2.066 1.476a1.983 1.983 0 002.553-.211l.428-.428a1.983 1.983 0 00.211-2.553l-1.476-2.066a11.922 11.922 0 001.524-3.653l2.65-.441A2 2 0 0032 16.306v-.612a2 2 0 00-1.671-1.973z" />
            </motion.svg>
          ))}
        </div>
      ),
      // Step 4 – concentric dashed circles
      (
        <div className={`relative ${baseSize}`}>
          {[14,9,5].map((r,i)=>(
            <motion.svg
              key={i}
              viewBox="0 0 32 32"
              {...withAnim()}
              initial={{ rotate: -90, scale: 1 - i*0.15 }}
              className={`absolute inset-0 ${baseSize}`}
              style={{ translate: `${i===0? -10 : i===1? 0 : 10}px ${(i===0? -6 : i===1? 6 : -6)}px` }}
            >
              <circle cx="16" cy="16" r={r} strokeDasharray={i % 2 === 0 ? "2 3" : undefined} />
            </motion.svg>
          ))}
        </div>
      )
    ]

    return (
      <div className="relative mb-4 flex justify-center group">
        {svgs[index]}
        <span className="absolute inset-0 flex items-center justify-center text-zinc-700 text-base font-medium pointer-events-none">
          {number}
        </span>
      </div>
    )
  }

  return (
    <main className={`min-h-screen flex flex-col w-full transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-zinc-900 text-zinc-100'
        : 'bg-white text-zinc-900'
    }`}>
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900'
            : 'bg-gradient-to-b from-zinc-50 via-white to-zinc-50'
        }`}></div>
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-transparent to-transparent'
            : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent'
        }`}></div>
      </div>

      {/* Scattered Stars — hidden on mobile */}
      {ENABLE_HOMEPAGE_STARS && (
        <div className="hidden md:block">
          <ScatteredStars />
        </div>
      )}

      {/* Header */}
      <header onMouseLeave={()=>setProcessOpen(false)} className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b relative transition-all duration-300 delay-100 ${
        processOpen
          ? theme === 'dark'
            ? 'bg-zinc-900/95 border-zinc-700'
            : 'bg-zinc-900/95 border-zinc-700'
          : theme === 'dark'
            ? 'bg-zinc-900/80 border-zinc-700'
            : 'bg-white/80 border-zinc-200'
      }`}>
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <Hexagon className={`w-8 h-8 transition-colors duration-300 delay-100 ${
                    processOpen
                      ? theme === 'dark'
                        ? 'text-zinc-200 opacity-60'
                        : 'text-zinc-500 opacity-60'
                      : theme === 'dark'
                        ? 'text-zinc-300 opacity-40'
                        : 'text-zinc-400 opacity-40'
                  }`} strokeWidth={1} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className={`w-4 h-4 transition-colors duration-300 delay-100 ${
                      processOpen
                        ? theme === 'dark'
                          ? 'text-zinc-200 opacity-60'
                          : 'text-zinc-500 opacity-60'
                        : theme === 'dark'
                          ? 'text-zinc-300 opacity-40'
                          : 'text-zinc-400 opacity-40'
                    }`} />
                  </div>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Process with dropdown trigger */}
                <div className="relative flex items-center" onMouseEnter={()=>setProcessOpen(true)}>
                  <Link href="/" className={`text-sm font-light transition-colors duration-300 delay-100 group ${
                    processOpen
                      ? theme === 'dark'
                        ? 'text-zinc-400 hover:text-zinc-200'
                        : 'text-zinc-200 hover:text-zinc-100'
                      : theme === 'dark'
                        ? 'text-zinc-300 hover:text-zinc-100'
                        : 'text-zinc-600 hover:text-zinc-900'
                  }`}>
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  {/* Dropdown indicator */}
                  <motion.span
                    className="ml-1"
                    animate={{ rotate: processOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-300 delay-100 ${
                      processOpen ? 'text-zinc-400' : 'text-zinc-500'
                    }`} />
                  </motion.span>
                </div>

                <Link
                  href="/shop"
                  className={`text-sm font-light transition-colors duration-300 delay-100 ${
                    processOpen
                      ? theme === 'dark'
                        ? 'text-zinc-500 hover:text-zinc-200'
                        : 'text-zinc-400 hover:text-zinc-200'
                      : theme === 'dark'
                        ? 'text-zinc-500 hover:text-zinc-200'
                        : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  shop
                </Link>
              </div>

            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/blog"
                className={`hidden md:inline text-sm font-light transition-colors duration-300 delay-100 ${
                  processOpen
                    ? theme === 'dark'
                      ? 'text-zinc-500 hover:text-zinc-200'
                      : 'text-zinc-400 hover:text-zinc-200'
                    : theme === 'dark'
                      ? 'text-zinc-500 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                blog
              </Link>
              {/* Start button (contact) */}
              <Link 
                href="/contact"
                className={`hidden md:inline-flex items-center border font-medium py-2 px-6 rounded-full transition-all duration-300 delay-100 text-sm ${
                  processOpen
                    ? theme === 'dark'
                      ? 'border-zinc-600 hover:bg-zinc-800 text-zinc-200'
                      : 'border-zinc-600 hover:bg-zinc-800 text-zinc-200'
                    : theme === 'dark'
                      ? 'border-zinc-600 hover:bg-zinc-800 text-zinc-200'
                      : 'border-zinc-300 hover:bg-zinc-50 text-zinc-900'
                }`}
              >
                msg
              </Link>
              
              {/* Dark Mode Toggle - Hidden for now */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                    processOpen ? 'text-zinc-200' : 'text-zinc-900 dark:text-zinc-100'
                  }`} />
                ) : (
                  <Moon className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                    processOpen ? 'text-zinc-200' : 'text-zinc-900'
                  }`} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                  processOpen ? 'text-zinc-200' : 'text-zinc-900 dark:text-zinc-100'
                }`} /> : <Menu className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                  processOpen ? 'text-zinc-200' : 'text-zinc-900 dark:text-zinc-100'
                }`} />}
              </button>
            </div>
          </nav>

          {/* Process dropdown full width */}
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>

                {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden border-b transition-colors duration-300 bg-zinc-900 border-zinc-700">
              <div className="container mx-auto px-6 py-4 space-y-3">
                <Link href="/shop" className="block text-sm text-zinc-400 hover:text-zinc-200 transition-colors tracking-wider" onClick={() => setMobileMenuOpen(false)}>
                  Shop
                </Link>
                <Link href="/blog" className="block text-sm text-zinc-400 hover:text-zinc-200 transition-colors tracking-wider" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Signature - Top Left Corner (disappears on scroll) - HIDDEN */}
      {/* <div className={`fixed top-20 left-4 z-40 pointer-events-none transition-opacity duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-80 hover:opacity-100'
      }`}>
        <Image
          src={theme === 'dark'
            ? "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/signature(2).png"
            : "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/signature(black).png"
          }
          alt="Signature"
          width={120}
          height={60}
          className="transition-opacity duration-300 pointer-events-auto"
        />
      </div> */}

      {/* Single Combined Section - All Content Flows Together */}
      <section className="relative z-10 flex-grow pt-10 px-6 pb-8 md:pb-32 text-zinc-900 dark:text-zinc-100">
        <div className="container max-w-6xl mx-auto flex flex-col gap-6 md:gap-12">
          


          {/* Work Gallery Showcase - HIDDEN */}
          {/* <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-light text-zinc-900 mb-3">
                Featured Work
              </h2>
              <p className="text-zinc-600 max-w-xl mx-auto">
                Explore our latest projects showcasing custom development, design, and AI-powered solutions.
              </p>
            </motion.div>

            <WorkGallery />
          </div> */}

          {/* Selected Projects - HIDDEN (moved to /portfolio) */}
          {/* <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-end items-start md:items-center mb-8"
            >
              <div className="flex items-center space-x-2 mt-6 md:mt-0">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setFilter(null)} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      !filter
                        ? theme === 'dark'
                          ? 'bg-zinc-700 text-zinc-200'
                          : 'bg-zinc-200 text-zinc-800'
                        : theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter('webapp')} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      filter === 'webapp'
                        ? theme === 'dark'
                          ? 'bg-zinc-700 text-zinc-200'
                          : 'bg-zinc-200 text-zinc-800'
                        : theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    Web Apps
                  </button>
                  <button 
                    onClick={() => setFilter('website')} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      filter === 'website'
                        ? theme === 'dark'
                          ? 'bg-zinc-700 text-zinc-200'
                          : 'bg-zinc-200 text-zinc-800'
                        : theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    Websites
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: Math.min(0.1 + (index * 0.05), 0.3), ease: "easeOut" }}
                  className={`group rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    theme === 'dark'
                      ? 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
                      : 'bg-white border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  {project.link ? (
                    <Link href={project.link} target={project.link.startsWith('http') ? "_blank" : "_self"}>
                      <div className="relative h-64 overflow-hidden">
                        <Image 
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </Link>
                  ) : (
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-medium mb-2 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                    }`}>{project.title}</h3>
                    <p className={`mb-4 leading-relaxed transition-colors duration-300 hidden md:block ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4 hidden md:flex">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`text-xs px-2 py-1 rounded border transition-colors duration-300 ${
                            theme === 'dark'
                              ? 'bg-zinc-700 text-zinc-300 border-zinc-600'
                              : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <Link 
                        href={project.link} 
                        target={project.link.startsWith('http') ? "_blank" : "_self"}
                        className={`inline-flex items-center text-sm transition-colors font-medium group ${
                          theme === 'dark'
                            ? 'text-zinc-300 hover:text-zinc-100'
                            : 'text-zinc-900 hover:text-zinc-600'
                        }`}
                      >
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
          
          {/* Haven Studio Hero */}
          <div className="order-1 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className={`text-sm md:text-base font-light mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
              }`}>
                building products focused on bitcoin
              </p>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <Hexagon className="w-16 h-16 text-zinc-400 opacity-40" strokeWidth={1} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-8 h-8 text-zinc-400 opacity-40" />
                  </div>
                </div>
              </motion.div>
              {/* <p className="text-sm md:text-base text-zinc-500 font-light max-w-lg mx-auto mb-8">
                Premium digital experiences
              </p> */}

              {/* <div className="flex justify-center">
                {/* Start a Project Button */}
                {/* <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center border font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group min-w-[160px] ${
                    theme === 'dark'
                      ? 'border-zinc-600 text-zinc-200'
                      : 'border-zinc-400 text-zinc-900'
                  }`}
                >
                  {/* Grey background that fills from left on hover */}
                  {/* <div className={`absolute inset-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    theme === 'dark' ? 'bg-zinc-600' : 'bg-zinc-400'
                  }`}></div> */}
                  {/* Text content */}
                  {/* <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                    start a project
                  </span> */}
                  {/* Arrow icon that appears on hover */}
                  {/* <ArrowRight className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </div> */}
            </motion.div>
          </div>

          {/* Services - HIDDEN */}
          {/* <ServicesSection /> */}

          {/* Process — moved below profiles (order-5 on mobile) */}
          <div
            id="process"
            ref={processRef}
            className={`relative rounded-xl p-6 overflow-hidden scroll-mt-32 transition-colors duration-300 order-5 md:order-2 ${
              theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-50'
            }`}
            onClick={(e) => {
              if (crosshairDismissed) return
              const rect = processRef.current?.getBoundingClientRect()
              if (rect) {
                setCrosshairTapPosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                })
                setCrosshairDismissed(true)
              }
            }}
          >
            <CrosshairOverlay
              parentRef={processRef}
              variant="white"
              dismissed={crosshairDismissed}
              tapPosition={crosshairTapPosition}
            />
            <div className="flex items-center justify-center">
              <button
                aria-expanded={processSectionOpen}
                onClick={() => setProcessSectionOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                <motion.span
                  animate={{ rotate: processSectionOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700 dark:text-zinc-500">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
                <span className="uppercase tracking-wider">Process</span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {processSectionOpen && (
                <motion.div
                  key="process-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-4"
                >


                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                {
                  number: "01",
                  title: "Discovery",
                  description: "We learn about your business, goals, and vision to establish clear project objectives."
                },
                {
                  number: "02", 
                  title: "Strategy",
                  description: "We develop a detailed roadmap and technical approach tailored to your specific needs."
                },
                {
                  number: "03",
                  title: "Design & Development",
                  description: "We craft beautiful interfaces and build robust applications with clean code."
                },
                {
                  number: "04",
                  title: "Launch & Optimize",
                  description: "We deploy your project and provide ongoing support to ensure continued success."
                }
                    ].map((step, index) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredStep(index)}
                        onMouseLeave={() => setHoveredStep(null)}
                        className={`text-center group transition-opacity duration-300 ${hoveredStep !== null && hoveredStep !== index ? 'opacity-25' : 'opacity-100'}`}
                      >
                        <div className={`flex items-center justify-center gap-3 mb-3 ${hoveredStep !== null && hoveredStep !== index ? 'opacity-40' : 'opacity-100'} transition-opacity duration-300`}>
                          <GearGraphic index={index} number={step.number} active={hoveredStep === index} />
                          <h3 className="text-base font-medium text-zinc-600 transition-opacity duration-700 ease-in-out">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-zinc-500 text-sm leading-snug transition-opacity duration-700 ease-in-out">
                          {step.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Studio Performance - HIDDEN */}
          {/* <div id="performance" ref={performanceRef} className={`relative rounded-xl p-6 overflow-hidden scroll-mt-32 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-50'
          }`}>
            <CrosshairOverlay parentRef={performanceRef} />
            <div className="flex items-center justify-center">
              <button
                aria-expanded={performanceSectionOpen}
                onClick={() => setPerformanceSectionOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                <motion.span
                  animate={{ rotate: performanceSectionOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700 dark:text-zinc-500">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
                <span className="uppercase tracking-wider">Studio Performance</span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {performanceSectionOpen && (
                <motion.div
                  key="performance-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-4"
                >


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={theme === 'dark' ? '#374151' : '#e4e4e7'}
                            strokeWidth="4"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="4"
                            strokeDasharray="283"
                            strokeDashoffset="10"  
                            initial={{ strokeDashoffset: 283 }}
                            whileInView={{ 
                              strokeDashoffset: 10,
                              transition: { duration: 2, ease: "easeInOut" }
                            }}
                            viewport={{ once: true }}
                            transform="rotate(-90 50 50)"
                            strokeLinecap="round"
                          />
                          <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            fill={theme === 'dark' ? '#f4f4f5' : '#18181b'}
                            fontSize="16"
                            fontWeight="600"
                            dominantBaseline="middle"
                          >
                            100%
                          </text>
                        </svg>
                      </div>
                      <h3 className={`font-light text-sm mb-2 transition-colors duration-300 tracking-wider uppercase ${
                        theme === 'dark' ? 'text-zinc-300 hover:text-zinc-100' : 'text-zinc-900'
                      }`}>Uptime</h3>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'border-zinc-600' : 'border-zinc-300'
                      }`}>
                        <span className={`font-semibold text-lg transition-colors duration-300 ${
                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                        }`}>24/7</span>
                      </div>
                      <h3 className={`font-light text-sm mb-2 transition-colors duration-300 tracking-wider uppercase ${
                        theme === 'dark' ? 'text-zinc-300 hover:text-zinc-100' : 'text-zinc-900'
                      }`}>Support</h3>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="h-24 flex flex-col items-center justify-center mb-4">
                        <motion.div
                          className={`text-2xl font-semibold mb-1 transition-colors duration-300 ${
                            theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                          }`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                            <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      </div>
                      <h3 className={`font-light text-sm mb-2 transition-colors duration-300 tracking-wider uppercase ${
                        theme === 'dark' ? 'text-zinc-300 hover:text-zinc-100' : 'text-zinc-900'
                      }`}>Better Conversion</h3>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* Team (profiles) */}
          <div className="order-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
            </motion.div>

            <div className="flex justify-center gap-16 max-w-4xl mx-auto">
              {[
                {
                  name: "Jacob",
                  role: "Partner",
                  description: <>Jacob is a digital artist and entrepreneur with experience in imagery and design.</>,
                  image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//1737057840405%20(1).jpeg",
                  altImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//jacob2.JPG"
                },
                {
                  name: "George",
                  role: "Partner",
                  description: <>George brings expertise and vision to our projects.</>,
                  image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/jhalestudio/KGGG.JPG",
                  altImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/jhalestudio/KGGG.JPG"
                }
              ]
              .map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`relative group w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'border-zinc-700' : 'border-zinc-200'
                  }`}>
                    {/* Show altImage by default */}
                    {member.altImage ? (
                      <Image
                        src={member.altImage}
                        alt={`${member.name} alternate`}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                    ) : null}
                    {/* Primary image shown on hover */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className={`text-lg font-medium mb-1 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>{
                    (()=>{
                      const parts = member.name.split(" ")
                      return parts[0] + (parts[1] ? " " + parts[1][0] + "." : "")
                    })()
                  }</h3>
                  <p className={`text-sm mb-3 font-medium transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>{member.role}</p>
                  {/* Description hidden */}
                  {/* <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                        {member.description}
                  </p> */}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl p-4 text-center order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                {/* Message Button */}
                <Link
                  href="mailto:info@haven.engineer"
                  className={`inline-flex items-center border font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'border-zinc-600 text-zinc-200'
                      : 'border-zinc-300 text-zinc-900'
                  }`}
                >
                  {/* Grey background that fills from left on hover */}
                  <div className={`absolute inset-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    theme === 'dark' ? 'bg-zinc-600' : 'bg-zinc-400'
                  }`}></div>
                  
                  {/* Text content */}
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 flex items-center">
                    <Mail className="w-3 h-3 mr-2" />
                    message
                  </span>
                  
                  {/* Arrow icon that appears on hover */}
                  <ArrowRight className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className={`flex items-center justify-center text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <a
                  href="mailto:info@haven.engineer"
                  className={`flex items-center transition-colors ${
                    theme === 'dark'
                      ? 'hover:text-zinc-200'
                      : 'hover:text-zinc-900'
                  }`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@haven.engineer
                </a>
              </div>
            </motion.div>
          </div>

          {/* Signature - Bottom of content, above footer - HIDDEN */}
          {/* <div className="flex justify-center mt-4 mb-2">
            <div className="relative overflow-hidden" style={{ width: '120px', height: '45px' }}>
              <Image
                src={theme === 'dark'
                  ? "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/signature(2).png"
                  : "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/signature(black).png"
                }
                alt="Signature"
                width={120}
                height={70}
                className="opacity-70 hover:opacity-90 transition-opacity duration-300 absolute"
                style={{
                  top: '-21px',
                  left: 0,
                  width: '120px',
                  height: '70px'
                }}
              />
            </div>
          </div> */}

        </div>
      </section>

      {/* Footer hidden on homepage */}
      {/* <Footer transparentOnMobile /> */}
    </main>
  )
}

