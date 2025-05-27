"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Sparkles, Code, Palette, Zap, Users, ChevronLeft, Filter, ExternalLink, Mail, Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  link: string
  category: 'webapp' | 'website' | 'mobile'
}

export default function StudioPage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [counter, setCounter] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Prevent flash by ensuring component is mounted
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects: Project[] = [
    {
      id: "roundabout",
      title: "roundabout.run",
      description: "A ride-sharing platform connecting people to medical appointments with Bitcoin payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "Bitcoin Lightning", "React"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//round1.png",
      link: "/roundabout",
      category: "webapp"
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
      id: "beloved",
      title: "be-loved.app",
      description: "An iOS app and web-platform with personalized content and interactive scheduling for NEMT Provider BeLoved Transportation.",
      technologies: ["React", "Node.js", "PostgreSQL", "Framer Motion"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved2.png",
      link: "/beloved",
      category: "webapp"
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
      id: "swivimedia",
      title: "swivimedia.com",
      description: "A viral marketing 'clipping' agency platform connecting brands with micro-influencers to create hundreds of authentic campaign videos.",
      technologies: ["Next.js", "Tailwind CSS", "Video Processing", "Creator Network"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//swivimedia.png",
      link: "/swivimedia",
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
      id: "moonlight",
      title: "Moonlight Garden 🌱",
      description: "A 24/7 mobile order-only restaurant with advanced automation systems.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//moonlight4.png", 
      link: "/moonlight-garden",
      category: "webapp"
    }
  ]

  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects

  // Counter animation effect
  useEffect(() => {
    const targetValue = 100000
    const duration = 2000 // ms
    const framesPerSecond = 60
    const totalFrames = duration / 1000 * framesPerSecond
    const valueIncrement = targetValue / totalFrames
    
    let currentFrame = 0
    const timer = setInterval(() => {
      currentFrame++
      const newValue = Math.min(Math.floor(currentFrame * valueIncrement), targetValue)
      setCounter(newValue)
      
      if (currentFrame >= totalFrames) {
        clearInterval(timer)
      }
    }, 1000 / framesPerSecond)
    
    return () => clearInterval(timer)
  }, [])

  // Prevent flash of wrong content
  if (!isLoaded) {
    return (
      <div className="bg-white min-h-screen w-full flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Hexagon className="w-6 h-6 text-zinc-900 animate-pulse" strokeWidth={1} />
          <span className="text-zinc-600">Loading...</span>
        </div>
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven Studio</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Products
                </Link>
                <Link 
                  href="/explore" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Explore
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/contact"
                className="hidden md:inline-flex items-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-lg border border-zinc-300 transition-all duration-300 text-sm"
              >
                Contact
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
                  href="/" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/explore" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore
                </Link>
                <Link 
                  href="/contact"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Selected Projects Section - Moved to top */}
      <section id="portfolio" className="relative z-10 pt-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-zinc-900 mb-1">
                Selected Projects
              </h2>
              <p className="text-base text-zinc-600 max-w-xl">
                A showcase of our recent work across web applications, websites, and digital platforms.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 mt-3 md:mt-0">
              <Filter className="w-4 h-4 text-zinc-400" />
              <div className="flex space-x-2">
                <button 
                  onClick={() => setFilter(null)} 
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                    !filter 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('webapp')} 
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                    filter === 'webapp' 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  Web Apps
                </button>
                <button 
                  onClick={() => setFilter('website')} 
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                    filter === 'website' 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  Websites
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
              >
                <Link href={project.link} target={project.link.startsWith('http') ? "_blank" : "_self"}>
                  <div className="relative h-40 overflow-hidden">
                    <Image 
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </Link>
                
                <div className="p-3">
                  <h3 className="text-base font-medium text-zinc-900 mb-1">{project.title}</h3>
                  <p className="text-zinc-600 mb-2 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={project.link} 
                    target={project.link.startsWith('http') ? "_blank" : "_self"}
                    className="inline-flex items-center text-sm text-zinc-900 hover:text-zinc-600 transition-colors font-medium group"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section - Moved after projects */}
      <section className="relative z-10 py-1 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-2"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-2"
            >
              <div className="relative">
                <Hexagon className="w-10 h-10 text-zinc-900" strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-5 h-5 text-zinc-700" />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-2xl md:text-3xl font-light text-zinc-900 mb-1 tracking-tight">
              Haven Studio
            </h1>
            <p className="text-sm md:text-base text-zinc-600 font-light tracking-wide max-w-2xl mx-auto mb-3">
              A digital design and web development studio crafting premium 
              experiences for modern brands and startups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 group text-sm"
              >
                <span className="mr-2">Start a Project</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-5 rounded-lg border border-zinc-300 transition-all duration-300 text-sm"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-1 px-6 bg-zinc-50">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-1">
              Our Services
            </h2>
            <p className="text-sm text-zinc-600 max-w-xl mx-auto">
              We specialize in creating digital experiences that combine beautiful design 
              with powerful functionality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                <Code className="w-4 h-4 text-zinc-700" />
              </div>
              <h3 className="text-base font-medium text-zinc-900 mb-1">Web Development</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Custom web applications built with modern frameworks 
                and performance-focused architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                <Palette className="w-4 h-4 text-zinc-700" />
              </div>
              <h3 className="text-base font-medium text-zinc-900 mb-1">Web Design</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Minimalist, elegant interfaces that elevate brands with 
                thoughtful interactions and premium aesthetics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4 text-zinc-700" />
              </div>
              <h3 className="text-base font-medium text-zinc-900 mb-1">Digital Strategy</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Comprehensive digital solutions that align with business 
                goals and create meaningful user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-1 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-1">
              Studio Performance
            </h2>
            <p className="text-sm text-zinc-600">
              Delivering exceptional results for our clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            {/* Uptime */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-12 h-12 mx-auto mb-2">
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
                    stroke="#18181b"
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
                    fontSize="12" 
                    fontWeight="600"
                    dominantBaseline="middle"
                  >
                    100%
                  </text>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-zinc-900 mb-0.5">Uptime</h3>
              <p className="text-zinc-600 text-xs">Reliable hosting & maintenance</p>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-semibold text-xs">24/7</span>
              </div>
              <h3 className="text-sm font-medium text-zinc-900 mb-0.5">Support</h3>
              <p className="text-zinc-600 text-xs">Always available assistance</p>
            </motion.div>

            {/* Impressions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="h-12 flex flex-col items-center justify-center mb-2">
                <motion.div 
                  className="text-lg font-semibold text-zinc-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {counter.toLocaleString()}+
                </motion.div>
              </div>
              <h3 className="text-sm font-medium text-zinc-900 mb-0.5">Impressions</h3>
              <p className="text-zinc-600 text-xs">Monthly reach across projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-1 px-6 bg-zinc-50">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-1">
              Our Process
            </h2>
            <p className="text-sm text-zinc-600 max-w-xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold mx-auto mb-2">
                  {step.number}
                </div>
                <h3 className="text-sm font-medium text-zinc-900 mb-1">{step.title}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-1 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-1">
              Meet Our Team
            </h2>
            <p className="text-sm text-zinc-600 max-w-xl mx-auto">
              Passionate professionals dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            {[
              {
                name: "Jacob Beam",
                role: "Founder",
                description: "Jacob is a tech artist and entrepreneur with 7+ years of experience in imagery and design.",
                image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//1737057840405%20(1).jpeg"
              },
              {
                name: "Jarret Shull", 
                role: "Sales",
                description: "Jarret builds partnerships and client relations with a drive for connecting businesses to digital solutions.",
                image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//jarret.jpeg"
              },
              {
                name: "Klaire Rasche",
                role: "Design", 
                description: "Klaire brings a unique perspective to digital design with expertise in UI/UX and visual storytelling.",
                image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klaire.jpeg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-3 rounded-xl border border-zinc-200"
              >
                <div className="relative w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden border-2 border-zinc-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-zinc-900 mb-0.5">{member.name}</h3>
                <p className="text-zinc-600 text-xs mb-1 font-medium">{member.role}</p>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-1 px-6 bg-zinc-50">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-2">
              Start Your Project
            </h2>
            <p className="text-sm text-zinc-600 mb-4 max-w-xl mx-auto">
              Ready to bring your digital vision to life? Let's create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 group text-sm"
              >
                <span className="mr-2">Get Started</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:info@haven.engineer"
                className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-5 rounded-lg border border-zinc-300 transition-all duration-300 text-sm"
              >
                <Mail className="w-3 h-3 mr-2" />
                Email Us
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center text-xs text-zinc-600">
              <a 
                href="mailto:info@haven.engineer" 
                className="flex items-center hover:text-zinc-900 transition-colors"
              >
                <Mail className="w-3 h-3 mr-1.5" />
                info@haven.engineer
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 py-2 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <Hexagon className="w-5 h-5 text-zinc-900 mr-2" strokeWidth={1} />
              <span className="text-xs text-zinc-600">© 2024 Haven Studio. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 