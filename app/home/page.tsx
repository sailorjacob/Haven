"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Hexagon, Sparkles, Film, Music, Palette, Home, Globe, Building, Activity, Award, Layers, ChevronRight, Menu, X, ChevronDown, Code, Zap, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-white min-h-screen w-full text-zinc-900">
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/studio" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Studio
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
                className="hidden md:inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 text-sm"
              >
                Contact Us
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
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Studio
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-zinc-900 mb-6 tracking-tight"
          >
            Haven
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Dream builders creating a new paradigm for creative living through 
            interconnected digital and physical experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="#vision"
              className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 group"
            >
              <span className="mr-2">Explore Our Vision</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-3 px-8 rounded-lg border border-zinc-300 transition-all duration-300"
            >
              View Products
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-all duration-500"
            onClick={() => {
              const visionSection = document.getElementById('vision');
              if (visionSection) {
                visionSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-sm text-zinc-500 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-zinc-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="relative z-10 py-20 px-6 bg-zinc-50">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Vision
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                A new paradigm for creative living
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-zinc-600 leading-relaxed">
                    Haven is designed as a modern network state where a community of artists, technologists, and
                    entrepreneurs collectively builds and distributes digital content.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                    Think of it as a fusion of a cinematic platform, a music service, and an entertainment conglomerate, all
                    operating from interconnected residential compounds.
              </p>
                  
              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <h3 className="text-lg font-medium text-zinc-900 mb-4">Our Dual Innovation Model</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Activity className="w-5 h-5 text-zinc-700 mr-2" />
                      <h4 className="font-medium text-zinc-900">Digital Experience</h4>
                    </div>
                    <ul className="text-zinc-600 space-y-1 text-sm">
                      <li>• AI-generated films</li>
                      <li>• AI-generated music</li>
                      <li>• Streaming platform</li>
                        </ul>
                      </div>
                      
                  <div className="bg-zinc-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Building className="w-5 h-5 text-zinc-700 mr-2" />
                      <h4 className="font-medium text-zinc-900">Physical Experience</h4>
                    </div>
                    <ul className="text-zinc-600 space-y-1 text-sm">
                      <li>• Art gallery network</li>
                      <li>• Screening theaters</li>
                      <li>• Premium accommodations</li>
                        </ul>
                  </div>
                      </div>
                    </div>
                  </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-zinc-200 h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-12 h-12 text-zinc-700" />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">Global Network</h3>
                <p className="text-zinc-600 text-sm">
                  Premium residential compounds with futuristic architecture, 
                  digital art displays, and advanced technology infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Key Components
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                The building blocks of our network state
            </p>
                </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-zinc-700" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">AI-Generated Content</h3>
              <p className="text-zinc-600 leading-relaxed">
                Production of films, music, and digital art using advanced AI tools and creative collaboration.
              </p>
                </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-zinc-700" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">Residence-Style Living</h3>
              <p className="text-zinc-600 leading-relaxed">
                Quality compounds where members reside and work together in collaborative creative environments.
              </p>
                </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-zinc-700" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">Decentralized Structure</h3>
              <p className="text-zinc-600 leading-relaxed">
                A network state that operates across borders with shared resources and unified vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Native Identity Section */}
      <section className="relative z-10 py-20 px-6 bg-zinc-50">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
              Native Identity
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                An open global community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
                >
              <p className="text-zinc-600 leading-relaxed mb-6">
                    Haven is an open community of artists and storytellers who share their craft and build generational
                    skills in digital arts.
                  </p>
              <p className="text-zinc-600 leading-relaxed mb-8">
                    Our members come from all corners of the world, united by a shared passion for storytelling and digital creation. We welcome digital immigrants from anywhere on the globe who identify with our collective mission.
                  </p>
                    <Link
                      href="/products"
                className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
                    >
                <span className="mr-2">Learn about our community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
                >
              <div className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-zinc-700" />
                </div>
                <h4 className="font-medium text-zinc-900 mb-2">Global Community</h4>
                <p className="text-zinc-600 text-sm">Elite residential compounds with creative spaces</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-zinc-700" />
                </div>
                <h4 className="font-medium text-zinc-900 mb-2">Technology Hub</h4>
                <p className="text-zinc-600 text-sm">Advanced technology and creative workspaces</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-zinc-700" />
                  </div>
                <h4 className="font-medium text-zinc-900 mb-2">Creative Spaces</h4>
                <p className="text-zinc-600 text-sm">Exclusive compounds with premium amenities</p>
                  </div>
              
              <div className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-zinc-700" />
                  </div>
                <h4 className="font-medium text-zinc-900 mb-2">Global Network</h4>
                <p className="text-zinc-600 text-sm">Connected digital infrastructure worldwide</p>
                  </div>
                </motion.div>
              </div>
            </div>
      </section>

      {/* Ecosystem Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
                Ecosystem
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                A self-sustaining model
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
                >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                  <Film className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900">Digital Media Platform</h3>
              </div>
              <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-Generated films, music, and digital art</span>
                    </li>
                    <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Curated and distributed through a streaming ecosystem</span>
                    </li>
                    <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Micro-payment systems via cryptocurrencies</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
                >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900">Economic Model</h3>
              </div>
              <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Income from content platforms and advertising services</span>
                    </li>
                    <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Additional accommodation facilities and public events</span>
                    </li>
                    <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>High-end advertising agency and fine art market</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-zinc-50">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6">
                Connect with Haven
            </h2>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
                    For inquiries about Haven and our community, please reach out through our secure channels.
                  </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 group"
              >
                <span className="mr-2">Request Information</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-3 px-8 rounded-lg border border-zinc-300 transition-all duration-300"
              >
                Learn More
                    </Link>
                  </div>
                </motion.div>
              </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Hexagon className="w-6 h-6 text-zinc-900 mr-2" strokeWidth={1} />
              <span className="text-sm text-zinc-600">© 2024 Haven. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Terms
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