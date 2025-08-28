"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Sparkles, Code, Palette, Zap, Users, ChevronLeft, Filter, ExternalLink, Mail, Phone, Menu, X, ChevronDown } from "lucide-react"
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
  
  // Feature flags for easy toggling
  const ENABLE_HOMEPAGE_STARS = false
  
  // Use useMemo to compute colors once and keep them consistent
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])
  
  // Track which process step is hovered
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  
  const projects: Project[] = [
    {
      id: "jacobhalestudio",
      title: "jacobhalestudio.net",
      description: "photography portfolio website with responsive gallery.",
      technologies: ["responsive gallery"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/jhale.png",
      link: "/jacobhalestudio",
      category: "website"
    },
    {
      id: "comparison-deserving",
      title: "comparison",
      description: "fine art gallery, online-first and accepting bitcoin.",
      technologies: ["online gallery", "fine art", "bitcoin"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/comparison.png",
      link: "https://comparison-deserving.net",
      category: "website"
    },

    

    {
      id: "sojourn",
      title: "sojourn.city",
      description: "solar punk inspired art project with an interactive public art gallery wall.",
      technologies: ["interactive art", "public gallery", "solar punk", "community"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/sojourn.png",
      link: "https://sojourn.city",
      category: "website"
    },
    {
      id: "designforstartups",
      title: "designforstartups.net",
      description: "branding and design for new and special projects.",
      technologies: ["branding", "design", "identity"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/designforstartup.png",
      link: "https://designforstartups.net",
      category: "website"
    },
    {
      id: "ammocat",
      title: "ammocat3000.com",
      description: "homepage, webstore, and mini-game for new york artist ammo cat with filtering and search.",
      technologies: ["webstore", "mini-game", "filtering"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      link: "https://ammocat.com",
      category: "website"
    },
    {
      id: "swivimedia",
      title: "swivimedia.com",
      description: "marketing platform connecting brands with micro-influencers for campaign videos.",
      technologies: ["creator network"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//swivimedia.png",
      link: "/swivimedia",
      category: "webapp"
    },

    {
      id: "beloved",
      title: "be-loved.app",
      description: "ios app and web platform with scheduling for nemt provider beloved transportation.",
      technologies: ["ios app", "scheduling", "nemt"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved2.png",
      link: "/beloved",
      category: "webapp"
    },

    {
      id: "moonlight",
      title: "Moonlight Garden 🌱",
      description: "24/7 mobile order restaurant with automation systems.",
      technologies: ["mobile order", "automation", "restaurant"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//moonlight4.png", 
      link: "/moonlight-garden",
      category: "webapp"
    },
    {
      id: "klaire",
      title: "klaire.dev",
      description: "portfolio for ui/ux designer klaire rasche with game design and ai technology.",
      technologies: ["ui/ux", "game design", "ai tools"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klairedev.png",
      link: "https://www.klaire.dev/klaire-portfolio.html",
      category: "website"
    },
    {
      id: "xrated",
      title: "rated.",
      description: "social platform for content sharing with privacy controls and monetization.",
      technologies: ["content sharing", "privacy controls", "monetization"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/ratedexplore.png",
      link: "https://x-rated.me",
      category: "webapp"
    },
    {
      id: "killmefxster",
      title: "killmefaster.com",
      description: "digital art platform with interactive experiences.",
      technologies: ["digital art"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//kxllme3.png",
      link: "/killmefxster",
      category: "webapp"
    },
    {
      id: "1stclassstudios",
      title: "1stclassstudios.com",
      description: "professional recording studio with three facilities 45 minutes from manhattan.",
      technologies: ["booking system", "responsive design"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/1stclass//1stclassstudios-min.png",
      link: "/1stclassstudios",
      category: "website"
    },
    {
      id: "salomatic",
      title: "Salomatic Pitch Deck",
      description: "design and branding for their routine blood testing product with modern healthcare aesthetics.",
      technologies: ["design", "branding", "pitch deck"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//salomatic.png",
      link: "/salomatic",
      category: "website"
    },
    {
      id: "anthonyhadenguest",
      title: "Anthony Haden-Guest",
      description: "portfolio website for author and art critic anthony haden-guest.",
      technologies: ["responsive design"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/AHG%20SC.png",
      link: "https://anthonyhadenguest.net",
      category: "website"
    },
  ]

  const hiddenIds: string[] = ["moonlight", "klaire", "roundabout", "salomatic"]

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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.2 + i * 0.2, ease: "easeOut" }}
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 + i * 0.3, ease: "easeOut" }}
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.2 + i*0.25, ease: "easeOut" }}
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 + i*0.3, ease:"easeOut" }}
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
    <main className="bg-white w-full text-zinc-900">
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Scattered Stars */}
      {ENABLE_HOMEPAGE_STARS && <ScatteredStars />}

      {/* Header */}
      <header onMouseLeave={()=>setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200 relative">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Process with dropdown trigger */}
                <div className="relative flex items-center" onMouseEnter={()=>setProcessOpen(true)}>
                  <Link href="/" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  {/* Dropdown indicator */}
                  <motion.span
                    className="ml-1"
                    animate={{ rotate: processOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                  </motion.span>
                </div>

                {/* Additional header links */}
                <Link
                  href="https://designforstartups.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  design for startups
                </Link>
                <Link
                  href="https://comparison-deserving.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  collect art
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Blog link */}
              <Link
                href="/blog"
                className="hidden md:inline text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                blog
              </Link>
              {/* Start button (contact) */}
              <Link 
                href="/contact"
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm"
              >
                msg
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
        <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-b border-zinc-200"
            >
                             <div className="w-full px-4 sm:px-6 py-3 space-y-3">
                 <Link
                   href="https://designforstartups.net"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   design for startups
                 </Link>
                 <Link
                   href="https://comparison-deserving.net"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   collect art
                 </Link>
                 <Link 
                   href="/blog"
                   className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   blog
                 </Link>
          </div>
        </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Single Combined Section - All Content Flows Together */}
      <section className="relative z-10 pt-10 px-6">
        <div className="container max-w-6xl mx-auto space-y-12">
          


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

          {/* Selected Projects */}
          <div>
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
                        ? 'bg-zinc-200 text-zinc-800' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter('webapp')} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      filter === 'webapp' 
                        ? 'bg-zinc-200 text-zinc-800' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    Web Apps
                  </button>
                  <button 
                    onClick={() => setFilter('website')} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      filter === 'website' 
                        ? 'bg-zinc-200 text-zinc-800' 
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
                  className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
                >
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
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-zinc-900 mb-2">{project.title}</h3>
                    <p className="text-zinc-600 mb-4 leading-relaxed">{project.description}</p>
                    

                    
                    <Link 
                      href={project.link} 
                      target={project.link.startsWith('http') ? "_blank" : "_self"}
                      className="inline-flex items-center text-sm text-zinc-900 hover:text-zinc-600 transition-colors font-medium group"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Haven Studio Hero */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
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
              <p className="text-sm md:text-base text-zinc-500 font-light max-w-lg mx-auto mb-8">
                Premium digital experiences
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* Start a Project Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center border-zinc-400 border text-zinc-900 font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group"
                >
                  {/* Grey background that fills from left on hover */}
                  <div className="absolute inset-0 bg-zinc-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  {/* Text content */}
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                    Start a Project
                  </span>
                  {/* Arrow icon that appears on hover */}
                  <ArrowRight className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
                {/* View Work Button */}
                <Link
                  href="/work"
                  className="inline-flex items-center border-zinc-400 border text-zinc-900 font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group"
                >
                  {/* Grey background that fills from left on hover */}
                  <div className="absolute inset-0 bg-zinc-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  {/* Text content */}
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                    View Work
                  </span>
                  {/* Arrow icon that appears on hover */}
                  <ArrowRight className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <ServicesSection />

          {/* Process */}
          <div id="process" ref={processRef} className="relative bg-zinc-50 rounded-xl p-6 overflow-hidden scroll-mt-32">
            {/* crosshair overlay */}
            <CrosshairOverlay parentRef={processRef} />
            <div className="flex items-center justify-center">
              <button
                aria-expanded={processSectionOpen}
                onClick={() => setProcessSectionOpen((v) => !v)}
                className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <motion.span
                  animate={{ rotate: processSectionOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
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
                  description: "Our team crafts beautiful interfaces and builds robust applications with clean code."
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
                        <div className={`${hoveredStep !== null && hoveredStep !== index ? 'opacity-40' : 'opacity-100'} transition-opacity duration-300`}>
                          <GearGraphic index={index} number={step.number} active={hoveredStep === index} />
                        </div>
                        <h3 className="text-base font-medium text-zinc-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                          {step.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                          {step.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Studio Performance */}
          <div id="performance" ref={performanceRef} className="relative bg-zinc-50 rounded-xl p-6 overflow-hidden scroll-mt-32">
            {/* crosshair overlay */}
            <CrosshairOverlay parentRef={performanceRef} />
            <div className="flex items-center justify-center">
              <button
                aria-expanded={performanceSectionOpen}
                onClick={() => setPerformanceSectionOpen((v) => !v)}
                className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <motion.span
                  animate={{ rotate: performanceSectionOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
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
                    {/* Uptime */}
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
                            stroke="#e4e4e7" 
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
                            fill="#18181b" 
                            fontSize="16" 
                            fontWeight="600"
                            dominantBaseline="middle"
                          >
                            100%
                          </text>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-zinc-900 mb-1">Uptime</h3>
                    </motion.div>

                    {/* Support */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-24 h-24 rounded-full border-2 border-zinc-300 flex items-center justify-center mx-auto mb-4">
                        <span className="text-zinc-700 font-semibold text-lg">24/7</span>
                      </div>
                      <h3 className="text-lg font-medium text-zinc-900 mb-1">Support</h3>
                    </motion.div>

                    {/* Better Conversion */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="h-24 flex flex-col items-center justify-center mb-4">
                        <motion.div 
                          className="text-2xl font-semibold text-zinc-900 mb-1"
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
                      <h3 className="text-lg font-medium text-zinc-900 mb-1">Better Conversion</h3>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Team */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
            </motion.div>

            <div className="flex justify-center max-w-4xl mx-auto">
              {[
                {
                  name: "Jacob Beam",
                  role: "Founder",
                  description: <>Jacob is a digital artist and entrepreneur with <Link href="https://sailorjacob.github.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 transition-colors">7+ years</Link> of imagery and design.</>,
                  image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//1737057840405%20(1).jpeg",
                  altImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//jacob2.JPG"
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
                  <div className="relative group w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-zinc-200">
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
                  <h3 className="text-lg font-medium text-zinc-900 mb-1">{
                    (()=>{
                      const parts = member.name.split(" ")
                      return parts[0] + (parts[1] ? " " + parts[1][0] + "." : "")
                    })()
                  }</h3>
                  <p className="text-zinc-600 text-sm mb-3 font-medium">{member.role}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                        {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                {/* Get Started Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-zinc-300 text-zinc-900 font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group"
                >
                  {/* Grey background that fills from left on hover */}
                  <div className="absolute inset-0 bg-zinc-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  
                  {/* Text content */}
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                    Get Started
                  </span>
                  
                  {/* Arrow icon that appears on hover */}
                  <ArrowRight className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
                
                {/* Message Button */}
                <Link
                  href="mailto:info@haven.engineer"
                  className="inline-flex items-center border border-zinc-300 text-zinc-900 font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group"
                >
                  {/* Grey background that fills from left on hover */}
                  <div className="absolute inset-0 bg-zinc-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  
                  {/* Text content */}
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 flex items-center">
                    <Mail className="w-3 h-3 mr-2" />
                    Message
                  </span>
                  
                  {/* Arrow icon that appears on hover */}
                  <ArrowRight className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-center text-sm text-zinc-600">
                <a 
                  href="mailto:info@haven.engineer" 
                  className="flex items-center hover:text-zinc-900 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@haven.engineer
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

