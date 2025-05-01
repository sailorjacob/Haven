"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

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
  
  const projects: Project[] = [
    {
      id: "roundabout",
      title: "roundabout.run",
      description: "A software platform for advanced customer support with ai integration.",
      technologies: ["Next.js", "Tailwind CSS", "Bitcoin Lightning", "React"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//round1.png",
      link: "https://roundabout.run",
      category: "webapp"
    },
    {
      id: "beloved",
      title: "be-loved.app",
      description: "A NEMT platform with personalized content and interactive scheduling.",
      technologies: ["React", "Node.js", "PostgreSQL", "Framer Motion"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved2.png",
      link: "https://be-loved.app",
      category: "webapp"
    },
    {
      id: "ammocat",
      title: "ammocat3000.com",
      description: "A homepage platform for New York based artist Ammo Cat with advanced filtering and e-commerce capabilities.",
      technologies: ["Vue.js", "Firebase", "Stripe", "Algolia"],
      imageUrl: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      link: "https://ammocat3000.com",
      category: "website"
    },
    {
      id: "moonlight",
      title: "Moonlight Garden",
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

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/5 to-zinc-900 opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Link href="/" className="text-zinc-400 mb-4 inline-block text-sm hover:text-zinc-300 transition-colors">
            ← Back to Haven
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-500">
              Haven Studio
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-6 lowercase">
            A digital design and web development studio crafting premium 
            experiences for modern brands and startups.
          </p>
        </motion.div>

        {/* Service Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-zinc-800/50 p-8 rounded-sm border border-zinc-700">
            <h3 className="text-xl mb-4 text-zinc-200">Web Design</h3>
            <p className="text-zinc-400 mb-4">
              Minimalist, elegant interfaces that elevate brands with 
              thoughtful interactions and premium aesthetics.
            </p>
          </div>
          <div className="bg-zinc-800/50 p-8 rounded-sm border border-zinc-700">
            <h3 className="text-xl mb-4 text-zinc-200">Web Development</h3>
            <p className="text-zinc-400 mb-4">
              Custom web applications built with modern frameworks 
              and performance-focused architecture.
            </p>
          </div>
          <div className="bg-zinc-800/50 p-8 rounded-sm border border-zinc-700">
            <h3 className="text-xl mb-4 text-zinc-200">Digital Strategy</h3>
            <p className="text-zinc-400 mb-4">
              Comprehensive digital solutions that align with business 
              goals and create meaningful user experiences.
            </p>
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mb-4 md:mb-0">
              Selected Projects
            </h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => setFilter(null)} 
                className={`px-4 py-2 text-sm transition-colors ${!filter ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('webapp')} 
                className={`px-4 py-2 text-sm transition-colors ${filter === 'webapp' ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
              >
                Web Apps
              </button>
              <button 
                onClick={() => setFilter('website')} 
                className={`px-4 py-2 text-sm transition-colors ${filter === 'website' ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
              >
                Websites
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Link href={project.link} target={project.link.startsWith('http') ? "_blank" : "_self"}>
                  <div className="relative h-64 mb-4 overflow-hidden">
                    <Image 
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <h3 className="text-xl font-medium text-zinc-200 mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link} 
                  target={project.link.startsWith('http') ? "_blank" : "_self"}
                  className="inline-flex items-center text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section with SVG Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20 pb-6 border-b border-zinc-800 overflow-visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center max-w-2xl mx-auto overflow-visible">
            {/* Uptime Circle */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#27272a" 
                    strokeWidth="4"
                  />
                  
                  {/* Main Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeDasharray="283"
                    strokeDashoffset="10"  
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ 
                      strokeDashoffset: 10,
                      transition: { duration: 2, ease: "easeInOut" }
                    }}
                    transform="rotate(-35 50 50)"
                    strokeLinecap="round"
                  />
                  
                  {/* Pulsating end node */}
                  <motion.circle
                    cx="82.5"
                    cy="19"
                    r="3"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      scale: [0.8, 1.2, 0.8],
                      fill: ['rgba(45, 212, 138, 0.8)', 'rgba(45, 212, 138, 1)', 'rgba(45, 212, 138, 0.8)'],
                      filter: ['blur(0px)', 'blur(1px)', 'blur(0px)'],
                      transition: { 
                        opacity: { delay: 1.9, duration: 0.3 },
                        scale: { delay: 2, duration: 2, repeat: Infinity, repeatType: "loop" },
                        fill: { delay: 2, duration: 2, repeat: Infinity, repeatType: "loop" },
                        filter: { delay: 2, duration: 2, repeat: Infinity, repeatType: "loop" }
                      } 
                    }}
                  />
                  
                  {/* Soft radiating glow effect */}
                  <motion.circle
                    cx="82.5"
                    cy="19"
                    r="3"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="8"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.7, 0],
                      scale: [1, 2.5, 1],
                      filter: ['blur(1px)', 'blur(3px)', 'blur(1px)'],
                      transition: { 
                        opacity: { delay: 2, duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                        scale: { delay: 2, duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                        filter: { delay: 2, duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
                      } 
                    }}
                  />
                  
                  {/* Second softer glow layer */}
                  <motion.circle
                    cx="82.5"
                    cy="19"
                    r="2"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="12"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.5, 0],
                      scale: [1, 3, 1],
                      filter: ['blur(2px)', 'blur(5px)', 'blur(2px)'],
                      transition: { 
                        opacity: { delay: 2, duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                        scale: { delay: 2, duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                        filter: { delay: 2, duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
                      } 
                    }}
                  />
                  
                  <text 
                    x="50" 
                    y="46" 
                    textAnchor="middle" 
                    fill="#fff" 
                    fontSize="15" 
                    fontWeight="bold"
                    dominantBaseline="middle"
                  >
                    100%
                  </text>
                  <text 
                    x="50" 
                    y="62" 
                    textAnchor="middle" 
                    fill="#a1a1aa" 
                    fontSize="10"
                    dominantBaseline="middle"
                  >
                    Uptime
                  </text>
                </svg>
              </div>
            </div>

            {/* 24/7 Assistance */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#27272a" 
                    strokeWidth="4"
                  />
                  {/* Animated pulse */}
                  <motion.circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="2"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1, 0.8],
                      transition: { 
                        duration: 3, 
                        ease: "easeInOut", 
                        repeat: Infinity 
                      }
                    }}
                  />
                  <text 
                    x="50" 
                    y="45" 
                    textAnchor="middle" 
                    fill="#fff" 
                    fontSize="14" 
                    fontWeight="bold"
                  >
                    24/7
                  </text>
                  <text 
                    x="50" 
                    y="65" 
                    textAnchor="middle" 
                    fill="#a1a1aa" 
                    fontSize="10"
                  >
                    Assistance
                  </text>
                </svg>
              </div>
            </div>

            {/* Impressions Counter */}
            <div className="flex flex-col items-center">
              <motion.div
                className="h-28 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-zinc-200 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  {counter.toLocaleString()}+
                </motion.div>
                <motion.div 
                  className="text-zinc-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  Impressions
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mb-10">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-200 mb-2">Discovery</h3>
              <p className="text-zinc-400">
                We learn about your business, goals, and vision to establish clear project objectives.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Strategy</h3>
              <p className="text-zinc-400">
                We develop a detailed roadmap and technical approach tailored to your specific needs.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Design & Development</h3>
              <p className="text-zinc-400">
                Our team crafts beautiful interfaces and builds robust applications with clean code.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Launch & Optimize</h3>
              <p className="text-zinc-400">
                We deploy your project and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mb-6">
            Start Your Project
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Ready to bring your digital vision to life? Let's create something exceptional together.
          </p>
          <button 
            className="inline-flex items-center justify-center bg-zinc-200 hover:bg-white text-zinc-900 py-3 px-8 text-sm tracking-widest transition-all duration-300"
            onClick={() => alert('Client intake form coming soon!')}
          >
            Contact Us
          </button>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 pt-16 border-t border-zinc-800"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mb-12 text-center">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {/* Jarret Shull */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden border-2 border-white bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500 text-4xl">JS</span>
              </div>
              <h3 className="text-lg font-medium text-zinc-200 mb-1">Jarret Shull</h3>
              <p className="text-zinc-400 text-sm mb-2">Sales</p>
              <p className="text-zinc-500 text-xs text-center max-w-xs">
                Jarret builds partnerships and client relations with a drive for connecting businesses to digital solutions.
              </p>
            </div>

            {/* Jacob Beam */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//1737057840405%20(1).jpeg"
                  alt="Jacob Beam"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-zinc-200 mb-1">Jacob Beam</h3>
              <p className="text-zinc-400 text-sm mb-2">Founder</p>
              <p className="text-zinc-500 text-xs text-center max-w-xs">
                Jacob is a tech artist and entrepreneur with 7+ years of experience in imagery and design.
              </p>
            </div>

            {/* Klaire Rasche */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klaire.jpeg"
                  alt="Klaire Rasche"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-zinc-200 mb-1">Klaire Rasche</h3>
              <p className="text-zinc-400 text-sm mb-2">Design</p>
              <p className="text-zinc-500 text-xs text-center max-w-xs">
                Klaire brings a unique perspective to digital design with expertise in UI/UX and visual storytelling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 