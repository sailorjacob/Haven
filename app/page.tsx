"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Sparkles, Code, Palette, Zap, Users, ChevronLeft, Filter, ExternalLink, Mail, Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/footer"

type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  link: string
  category: 'webapp' | 'website' | 'mobile'
}

export default function HomePage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [counter, setCounter] = useState(100000)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Function to get a random highlight color
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // State to track hover for pricing button
  const [isPricingHovered, setPricingHovered] = useState(false);
  
  // For CTA highlight colors
  const [ctaColor1] = useState(getRandomHighlightColor());
  const [ctaColor2] = useState(getRandomHighlightColor());
  
  // Precompute random colors to avoid runtime calculations
  const precomputedColors = Array(10).fill(0).map(() => getRandomHighlightColor());
  
  const projects: Project[] = [
    {
      id: "roundabout",
      title: "roundabout.run",
      description: "A ride-sharing platform connecting people to medical appointments with Bitcoin payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "Bitcoin Lightning", "React"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//round2.png",
      link: "/roundabout",
      category: "webapp"
    },
    {
      id: "anthonyhadenguest",
      title: "Anthony Haden-Guest",
      description: "A sophisticated portfolio website for renowned author, writer, and art critic Anthony Haden-Guest showcasing his literary works and cultural contributions.",
      technologies: ["Next.js", "Tailwind CSS", "Responsive Design", "Typography"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//anthonysite.png",
      link: "/anthonyhadenguest",
      category: "website"
    },
    {
      id: "ammocat",
      title: "ammocat3000.com",
      description: "A homepage, webstore, and mini-game for New York based artist Ammo Cat with advanced filtering and search capabilities.",
      technologies: ["Vue.js", "Firebase", "Stripe", "Algolia"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      link: "/ammocat",
      category: "website"
    },
    {
      id: "jacobhalestudio",
      title: "jacobhalestudio.net",
      description: "A modern photography portfolio website for fine art photographer Jacob Hale featuring a minimalist design and responsive gallery.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Gallery"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//jacobhalestudio.png",
      link: "/jacobhalestudio",
      category: "website"
    },
    {
      id: "swivimedia",
      title: "swivimedia.com",
      description: "A viral marketing 'clipping' agency platform connecting brands with micro-influencers to create hundreds of authentic campaign videos.",
      technologies: ["Next.js", "Tailwind CSS", "Video Processing", "Creator Network"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//swivimedia.png",
      link: "/swivimedia",
      category: "webapp"
    },
    {
      id: "beloved",
      title: "be-loved.app",
      description: "An iOS app and web-platform with personalized content and interactive scheduling for NEMT Provider BeLoved Transportation.",
      technologies: ["React", "Node.js", "PostgreSQL", "Framer Motion"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved2.png",
      link: "/beloved",
      category: "webapp"
    },
    {
      id: "moonlight",
      title: "Moonlight Garden 🌱",
      description: "A 24/7 mobile order-only restaurant with advanced automation systems.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//moonlight4.png", 
      link: "/moonlight-garden",
      category: "webapp"
    },
    {
      id: "killmefxster",
      title: "killmefaster.com",
      description: "A crypto-art project featuring red diamonds, digital army, and freedom. The ultimate escape route and weapon.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "AI Art"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//kxllme3.png",
      link: "/killmefxster",
      category: "website"
    },
    {
      id: "klairedev",
      title: "klaire.dev",
      description: "A portfolio and personal branding site for a talented design creative, featuring minimalist aesthetics and interactive elements.",
      technologies: ["Next.js", "Tailwind CSS", "Responsive Design", "Branding"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klairedev.png",
      link: "https://www.klaire.dev/",
      category: "website"
    }
  ]

  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects

  return (
    <main className="bg-white w-full text-zinc-900">
      {/* Clean gradient background - keep static for better performance */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven Studio</span>
              </Link>
              
              {/* Desktop Navigation with random highlight on hover */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/advertising" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Advertising</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Advertising</span>
                </Link>
                <Link 
                  href="/studio" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Studio</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Studio</span>
                </Link>
                <Link 
                  href="/work" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Work</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Work</span>
                </Link>
                <Link 
                  href="/farm" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Farm</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Farm</span>
                </Link>
                <Link 
                  href="/book" 
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors tracking-wider uppercase font-light ml-2"
                >
                  Design Book
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/pricing"
                className="hidden md:inline-flex items-center border-yellow-400 border text-zinc-900 font-medium py-2 px-6 rounded-full text-sm relative overflow-hidden group"
                onMouseEnter={() => setPricingHovered(true)}
                onMouseLeave={() => setPricingHovered(false)}
              >
                {/* Yellow background that fills from left on hover */}
                <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                {/* Text content */}
                <span className={`relative z-10 transition-opacity duration-300 ${isPricingHovered ? 'opacity-0' : 'opacity-100'}`}>
                  View Pricing
                </span>
                
                {/* Arrow icon that appears on hover */}
                <ArrowRight className={`w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${isPricingHovered ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
              
              <Link 
                href="/contact"
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm group"
              >
                <span className="group-hover:hidden">Contact</span>
                <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Contact</span>
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
              <div className="container mx-auto px-6 py-4 space-y-3">
                <Link 
                  href="/advertising" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Advertising</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Advertising</span>
                </Link>
                <Link 
                  href="/studio" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Studio</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Studio</span>
                </Link>
                <Link 
                  href="/work" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Work</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Work</span>
                </Link>
                <Link 
                  href="/farm"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Farm</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Farm</span>
                </Link>
                <Link 
                  href="/book"
                  className="block text-sm text-zinc-500 hover:text-zinc-900 transition-colors tracking-wider uppercase font-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Design Book
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Pricing</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Pricing</span>
                </Link>
                <Link 
                  href="/contact"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Contact</span>
                </Link>
          </div>
        </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-6 pt-24">
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Hexagon className="w-20 h-20 md:w-24 md:h-24 text-zinc-900" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-zinc-700" />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-light text-zinc-900 mb-6 tracking-tight"
          >
            Haven
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            A holistic brand studio for the contemporary edge, creating remarkable digital experiences through meticulous craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link 
              href="/pricing"
              className="inline-flex items-center border-yellow-400 border text-zinc-900 font-medium py-3 px-8 rounded-full text-sm relative overflow-hidden group"
              onMouseEnter={() => setPricingHovered(true)}
              onMouseLeave={() => setPricingHovered(false)}
            >
              {/* Yellow background that fills from left on hover */}
              <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              {/* Text content */}
              <span className={`relative z-10 transition-opacity duration-300 ${isPricingHovered ? 'opacity-0' : 'opacity-100'}`}>
                View Pricing
              </span>
              
              {/* Arrow icon that appears on hover */}
              <ArrowRight className={`w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${isPricingHovered ? 'opacity-100' : 'opacity-0'}`} />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-3 px-8 rounded-full transition-all duration-300 text-sm group"
            >
              <span className="group-hover:hidden">Contact</span>
              <span className={`hidden group-hover:inline ${ctaColor1}`}>Contact</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section - use simpler animations with staggered delays */}
      <section id="services" className="relative z-10 py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">Our Services</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Comprehensive web design, development and branding solutions for modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300"
            >
              {/* Card content */}
            </motion.div>

            {/* Design Systems Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300"
            >
              {/* Card content */}
            </motion.div>

            {/* Digital Branding Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300"
            >
              {/* Card content */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Add simpler loading strategy for projects */}
      <section id="projects" className="relative z-10 py-16 px-6 bg-zinc-50">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">Our Work</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/* Filter buttons */}
          </motion.div>

          {/* Project Grid - use CSS transitions instead of motion divs for better performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all duration-300 h-full flex flex-col"
              >
                {/* Project card content */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the page content with optimized animations */}
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

