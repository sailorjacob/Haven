"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Hexagon, ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Function to get a random highlight color - precompute for better performance
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Precompute colors to avoid runtime calculations
  const precomputedColors = Array(10).fill(0).map(() => getRandomHighlightColor());
  
  const workExamples = [
    {
      id: "beloved-logo",
      title: "BeLoved Transportation Logo",
      description: "Custom logo design for NEMT provider featuring clean, modern typography and professional branding.",
      category: "Logo Design",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved%20logo.png",
      link: "/beloved",
      type: "image"
    },
    {
      id: "ammocat-game", 
      title: "Ammocat Mini Game",
      description: "Interactive browser-based game built for New York artist Ammo Cat featuring custom gameplay mechanics and art integration.",
      category: "Game Development",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      link: "https://ammocat.com/game",
      type: "interactive"
    },
    {
      id: "anthony-ai-generator",
      title: "Anthony Haden-Guest AI Art Generator", 
      description: "Custom AI image generator trained on Anthony Haden-Guest's cartoon art style, enabling creation of new artwork in his distinctive aesthetic.",
      category: "AI Development",
      images: [
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_1_0001.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0027.png", 
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0004.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_1_0019%20(1).png"
      ],
      link: "/anthonyhadenguest",
      type: "gallery"
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Animated Stars */}
      <AnimatedStars />
      
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Blueprint grid on left margin */}
      <div className="fixed left-0 top-0 bottom-0 w-24 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
                linear-gradient(to right, rgba(75, 85, 99, 0.15) 0.5px, transparent 0.5px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.15) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '20px 20px, 20px 20px, 5px 5px, 5px 5px'
            }}
          ></div>
          <div className="absolute left-0 top-0 bottom-0 w-full opacity-30"
            style={{
              background: 'linear-gradient(90deg, white, transparent)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Blueprint grid on right margin */}
      <div className="fixed right-0 top-0 bottom-0 w-24 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
                linear-gradient(to right, rgba(75, 85, 99, 0.15) 0.5px, transparent 0.5px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.15) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '20px 20px, 20px 20px, 5px 5px, 5px 5px'
            }}
          ></div>
          <div className="absolute right-0 top-0 bottom-0 w-full opacity-30"
            style={{
              background: 'linear-gradient(270deg, white, transparent)'
            }}
          ></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider text-zinc-900">Haven Studio</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/studio" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Studio</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[1]}`}>Studio</span>
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Pricing</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[2]}`}>Pricing</span>
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
                href="/contact"
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm group"
              >
                <span className="group-hover:hidden">Contact</span>
                <span className={`hidden group-hover:inline ${precomputedColors[3]}`}>Contact</span>
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
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:hidden bg-white border-b border-zinc-200"
              style={{ willChange: "opacity, height" }}
            >
              <div className="container mx-auto px-6 py-4 space-y-3">
                <Link 
                  href="/studio" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Studio</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[1]}`}>Studio</span>
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Pricing</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[2]}`}>Pricing</span>
                </Link>
                <Link 
                  href="/book"
                  className="block text-sm text-zinc-500 hover:text-zinc-900 transition-colors tracking-wider uppercase font-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Design Book
                </Link>
                <Link 
                  href="/contact"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[3]}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative z-10 pt-24 px-6">
        <div className="container max-w-6xl mx-auto">
          
          {/* Back button and header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
            style={{ willChange: "transform, opacity" }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-light text-zinc-900 mb-3 tracking-tight">
                
              </h1>
              <p className="text-md text-zinc-600 max-w-2xl mx-auto">
                A selection of our custom development projects showcasing logos, interactive experiences, and AI-powered tools.
              </p>
            </div>
          </motion.div>

          {/* Work Examples */}
          <div className="space-y-16 pb-16">
            {workExamples.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium mb-3">
                    {work.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-3">
                    {work.title}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                    {work.description}
                  </p>
                  
                  {work.type === "interactive" ? (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 text-sm group"
                    >
                      <span className="mr-2">Play Game</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={work.link}
                      className="inline-flex items-center text-zinc-900 hover:text-zinc-600 transition-colors font-medium text-sm group"
                    >
                      View Project
                      <ArrowLeft className="ml-2 w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {work.type === "gallery" ? (
                    <div className="grid grid-cols-2 gap-3">
                      {work.images?.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, delay: imgIndex * 0.1, ease: "easeOut" }}
                          className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <Image
                            src={image}
                            alt={`${work.title} example ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors bg-white p-8 flex items-center justify-center"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Image
                        src={work.image || work.images?.[0] || ""}
                        alt={work.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Showcase */}
          <div className="bg-zinc-50 rounded-xl p-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2"></p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Recent brand transformations
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                See how we've helped visionary brands create distinctive identities that challenge conventions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Swivimedia */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <Link href="https://www.swivimedia.com/about" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//swivi4.png"
                        alt="Swivimedia Platform"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">Swivi Media</h3>
                      <p className="text-zinc-600 mb-3">A viral marketing agency connecting brands with micro-influencers to create hundreds of authentic campaign videos.</p>
                      <div className="flex items-center text-purple-600 font-medium">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Klaire */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <Link href="https://klaire.dev" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klairedev.png"
                        alt="Klaire.dev Website"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">klaire.dev</h3>
                      <p className="text-zinc-600 mb-3">Personal portfolio showcasing UI/UX excellence and creative digital design work.</p>
                      <div className="flex items-center text-purple-600 font-medium">
                        Visit Website
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Kill Me Faster */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <Link href="https://killmefaster.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//kxllme3.png"
                        alt="Kill Me Faster Artist Website"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">killmefaster.com</h3>
                      <p className="text-zinc-600 mb-3">The ultimate escape route and weapon. An artist's journey through the dark arts, collecting bitcoin, and building a digital frontier with an army of mercenaries and robots fighting for freedom.</p>
                      <div className="flex items-center text-purple-600 font-medium">
                        Visit Website
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center py-12 border-t border-zinc-200"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-sm text-zinc-600 mb-6 max-w-xl mx-auto">
              Let's collaborate on custom solutions that elevate your brand and captivate your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center border-2 border-yellow-400 bg-transparent text-zinc-900 font-medium py-2 px-5 rounded-full text-sm overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-transparent hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-5 rounded-full border border-zinc-300 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
} 