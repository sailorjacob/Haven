"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Hexagon, Sparkles, Film, Music, Palette, Home, Globe, Building, Activity, Award, Layers, ChevronRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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
            A digital superplatform bridging premium content with physical spaces. 
            Curated media, art, and community for the modern native.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/explore"
              className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 group"
            >
              <span className="mr-2">Explore Haven</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-3 px-8 rounded-lg border border-zinc-300 transition-all duration-300"
            >
              View Products
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-zinc-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zinc-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>
        
      {/* Features Grid */}
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
              Integrated Ecosystem
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Where cutting-edge creative production meets next-generation digital distribution, 
              luxurious living, and cultural innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title="Art Gallery Network"
              description="Emulating prestigious galleries like Gagosian, our spaces showcase cutting-edge contemporary art and digital media, redefining the intersection of technology and artistic expression."
              delay={0.1}
              hoveredFeature={hoveredFeature}
              setHoveredFeature={setHoveredFeature}
              id="art-gallery"
          />
            <FeatureCard
              icon={<Home className="w-6 h-6" />}
              title="Premium Accommodations"
              description="Inspired by the luxury of Hilton and the exclusivity of Soho House, our living spaces create modern campuses for creative natives, fostering collaboration and community."
              delay={0.2}
              hoveredFeature={hoveredFeature}
              setHoveredFeature={setHoveredFeature}
              id="accommodations"
          />
            <FeatureCard
              icon={<Film className="w-6 h-6" />}
              title="Screening Theaters"
              description="Intimate venues with state-of-the-art technology showcasing independent films, immersive experiences, and exclusive premieres across our global locations."
              delay={0.3}
              hoveredFeature={hoveredFeature}
              setHoveredFeature={setHoveredFeature}
              id="theaters"
          />
            <FeatureCard
              icon={<Activity className="w-6 h-6" />}
              title="Digital Superplatform"
              description="A comprehensive digital ecosystem combining a full-service production hub rivaling Hollywood studios, a curated music experience, and a Netflix-caliber streaming service."
              delay={0.4}
              hoveredFeature={hoveredFeature}
              setHoveredFeature={setHoveredFeature}
              id="superplatform"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 py-20 px-6 bg-zinc-50">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <ValueCard
              icon={<Building className="w-8 h-8" />}
              title="Physical Spaces"
              items={[
                "Curated art galleries",
                "Premium theaters",
                "Luxury residences",
                "Creative studios"
              ]}
              delay={0.1}
            />
            <ValueCard
              icon={<Globe className="w-8 h-8" />}
              title="Digital Platform"
              items={[
                "AI-powered content",
                "Streaming services",
                "Music production",
                "Creative tools"
              ]}
              delay={0.2}
            />
            <ValueCard
              icon={<Award className="w-8 h-8" />}
              title="Community"
              items={[
                "Global network",
                "Creative collaboration",
                "Cultural events",
                "Exclusive access"
              ]}
              delay={0.3}
          />
        </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6">
              Join the Haven Community
            </h2>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
              Whether you're an artist, investor, creative professional, or visionary brand, 
              Haven offers a holistic environment where creativity, commerce, and community thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 group"
              >
                <span className="mr-2">Get Started</span>
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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  hoveredFeature: string | null
  setHoveredFeature: (id: string | null) => void
  id: string
}

function FeatureCard({ icon, title, description, delay, hoveredFeature, setHoveredFeature, id }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredFeature(id)}
      onMouseLeave={() => setHoveredFeature(null)}
      className={`bg-white p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
        hoveredFeature === id ? 'border-zinc-400 shadow-lg scale-105' : 'border-zinc-200 hover:border-zinc-300'
      }`}
    >
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4 flex-shrink-0">
          {icon}
      </div>
        <div>
          <h3 className="text-xl font-medium text-zinc-900 mb-2">{title}</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  items: string[]
  delay: number
}

function ValueCard({ icon, title, items, delay }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mx-auto mb-4">
        {icon}
    </div>
      <h3 className="text-xl font-medium text-zinc-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-zinc-600 text-sm flex items-center justify-center">
            <ChevronRight className="w-3 h-3 mr-1 text-zinc-400" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

