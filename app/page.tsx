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

export default function HomePage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [counter, setCounter] = useState(100000)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Animation variants for coordinated animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  // Function to get a random highlight color
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // State to track hover for pricing button
  const [isPricingHovered, setPricingHovered] = useState(false);
  
  const projects: Project[] = [
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
      id: "roundabout",
      title: "roundabout.run",
      description: "A ride-sharing platform connecting people to medical appointments with Bitcoin payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "Bitcoin Lightning", "React"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//round1.png",
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
    }
  ]

  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects

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
              
              {/* Desktop Navigation with random highlight on hover */}
              <div className="hidden md:flex items-center space-x-6">
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

      {/* Single Combined Section - All Content Flows Together */}
      <section className="relative z-10 pt-20 px-6">
        <motion.div 
          className="container max-w-6xl mx-auto space-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* Selected Projects */}
          <div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                  Selected Projects
                </h2>
                <p className="text-lg text-zinc-600 max-w-xl">
                  A showcase of our recent work across web applications, websites, and digital platforms.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 mt-6 md:mt-0">
                <Filter className="w-4 h-4 text-zinc-400" />
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setFilter(null)} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      !filter 
                        ? 'bg-zinc-900 text-white' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter('webapp')} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      filter === 'webapp' 
                        ? 'bg-zinc-900 text-white' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    Web Apps
                  </button>
                  <button 
                    onClick={() => setFilter('website')} 
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
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
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full"
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
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Haven Studio Hero */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <motion.div 
                variants={itemVariants}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <Hexagon className="w-16 h-16 text-zinc-900" strokeWidth={1} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-8 h-8 text-zinc-700" />
                  </div>
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-light text-zinc-900 mb-4 tracking-tight">
                Build With Haven
              </h1>
              <p className="text-sm md:text-base text-zinc-500 font-light max-w-lg mx-auto mb-8">
                Premium digital experiences
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-6 rounded-full transition-all duration-300 group"
                >
                  <span className="mr-2">Start a Project</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-6 rounded-full transition-all duration-300"
                >
                  View Work
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="bg-zinc-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                We specialize in creating digital experiences that combine beautiful design 
                with powerful functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4">Web Development</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Custom web applications built with modern frameworks 
                  and performance-focused architecture.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4">Web Design</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Minimalist, elegant interfaces that elevate brands with 
                  thoughtful interactions and premium aesthetics.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4">Digital Strategy</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Comprehensive digital solutions that align with business 
                  goals and create meaningful user experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Studio Performance */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Studio Performance
              </h2>
              <p className="text-lg text-zinc-600">
                Delivering exceptional results for our clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Uptime */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl text-zinc-900 font-bold mb-2">99.9%</div>
                <h3 className="text-lg font-medium text-zinc-900 mb-1">Uptime</h3>
                <p className="text-zinc-600 text-sm">Reliable hosting & maintenance</p>
              </motion.div>

              {/* Support */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl text-zinc-900 font-bold mb-2">24/7</div>
                <h3 className="text-lg font-medium text-zinc-900 mb-1">Support</h3>
                <p className="text-zinc-600 text-sm">Always available assistance</p>
              </motion.div>

              {/* Impressions */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl text-zinc-900 font-bold mb-2">1M+</div>
                <h3 className="text-lg font-medium text-zinc-900 mb-1">Impressions</h3>
                <p className="text-zinc-600 text-sm">Monthly reach across projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div variants={itemVariants} className="bg-zinc-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery from concept to launch.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  variants={itemVariants}
                  custom={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-3">{step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Passionate professionals dedicated to creating exceptional digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Jacob Beam",
                  role: "Founder",
                  description: "Jacob is a tech artist and entrepreneur with 7+ years of experience in imagery and design. Check out his work on ",
                  github: "https://github.com/sailorjacob",
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
                  variants={itemVariants}
                  custom={index}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-zinc-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-900 mb-1">{member.name}</h3>
                  <p className="text-zinc-600 text-sm mb-3 font-medium">{member.role}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {member.description}
                    {member.github && (
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-900 hover:text-zinc-700 transition-colors font-medium"
                      >
                        GitHub
                      </a>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="bg-zinc-50 rounded-xl p-8 text-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Start Your Project
              </h2>
              <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                Ready to bring your digital vision to life? Let's create something exceptional together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-6 rounded-full transition-all duration-300 group"
                >
                  <span className="mr-2">Get Started</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="mailto:info@haven.engineer"
                  className="inline-flex items-center justify-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-6 rounded-full transition-all duration-300"
                >
                  <Mail className="w-3 h-3 mr-2" />
                  Email Us
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
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Hexagon className="w-6 h-6 text-zinc-900 mr-2" strokeWidth={1} />
              <span className="text-sm text-zinc-600">© 2024 Haven Studio. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Sitemap
              </Link>
              <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
      </div>
      </footer>
    </main>
  )
}

