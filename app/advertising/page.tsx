"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Check, X, ArrowRight, Zap, Clock, Users, Star, Palette, Award, Repeat, Hexagon, Menu, Globe, Target, BarChart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"

// Add custom styles
const customStyles = {
  ".rotate-neg-15": {
    transform: "rotate(-15deg)"
  }
};

export default function AdvertisingPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isJoinHovered, setIsJoinHovered] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Function to get a random highlight color
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const features = [
    { name: "Brand Identity Development", included: true },
    { name: "Conceptual Storytelling", included: true },
    { name: "Visual Narrative Design", included: true },
    { name: "Cultural Resonance Strategy", included: true },
    { name: "Bespoke Content Creation", included: true },
    { name: "Avant-garde Campaigns", included: true },
    { name: "Creative Direction", included: true },
    { name: "Brand Voice & Messaging", included: true },
    { name: "Distinctive Visual Systems", included: true },
    { name: "Immersive Brand Experiences", included: true },
    { name: "Conceptual Ideation", included: true },
    { name: "Brand Narrative Architecture", included: true },
    { name: "Cultural Brand Positioning", included: true },
    { name: "Artisan Visual Design", included: true },
    { name: "Revolutionary Brand Strategy", included: true },
  ]

  const faqs = [
    {
      question: "What's included in the unmatched advertising services?",
      answer: "Our unmatched services include revolutionary brand concept development, bespoke visual systems, distinctive narrative creation, and immersive brand experiences. We craft the entire brand universe from conceptual foundation to execution."
    },
    {
      question: "How long does it take to develop a unique brand identity?",
      answer: "The creation of a truly distinctive brand identity typically takes 6-8 weeks. Our process involves deep conceptual exploration, creative workshops, and iterative design to ensure your brand stands apart with authenticity and purpose."
    },
    {
      question: "Can we evolve our existing brand identity?",
      answer: "Absolutely. We specialize in brand evolution that honors your heritage while propelling your identity forward. Our approach carefully identifies core brand elements to preserve while reimagining aspects that need contemporary relevance."
    },
    {
      question: "Do you work with specific industries?",
      answer: "While we work across various sectors, we're particularly drawn to brands willing to challenge conventions. Our approach is less about industry expertise and more about partnering with visionaries ready to define new category standards."
    },
    {
      question: "What makes your branding approach different?",
      answer: "We reject formulaic branding. Each identity we create begins with a blank canvas and deep conceptual exploration. Our interdisciplinary team of artists, writers, and cultural strategists ensures your brand transcends traditional category expectations."
    }
  ]

  return (
    <main className="bg-white w-full text-zinc-900">
      {/* Animated Stars - kept but will be optimized via the component */}
      <AnimatedStars />

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
                  href="/pricing" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Pricing</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Pricing</span>
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
                  href="/pricing" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Pricing</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Pricing</span>
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
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Animated Text Overlay - optimize animation performance */}
      <motion.div 
        className="fixed inset-0 z-[999] flex items-start justify-start bg-white animated-overlay overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ willChange: "opacity" }}
        onAnimationComplete={() => {
          // When animation completes, trigger the overlay to disappear
          const overlay = document.querySelector('.animated-overlay');
          if (overlay) {
            setTimeout(() => {
              (overlay as HTMLElement).style.display = 'none';
            }, 5000); // Show for 5 seconds total
          }
        }}
      >
        <div className="absolute top-12 left-12 z-20">
          {/* Big Red Text - top left */}
          <motion.div 
            className="overflow-visible text-left"
          >
            <motion.h1 
              className="text-9xl sm:text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter leading-none"
              style={{ 
                lineHeight: "0.9", 
                color: '#ff0000',
                willChange: "transform, opacity" // GPU acceleration hint
              }}
            >
              {/* Animated text with typewriter effect - no fading */}
              {'SWITCHING THE BRAND GAME UP'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ 
                    duration: 3.5, 
                    delay: index * 0.15,
                    times: [0, 0.05, 0.8, 0.81] // Quick appear, stay visible, then instant disappear
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </div>
          
        {/* NO MERCY text - centered, flat appearance */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.1,
            delay: 3.2 // Slightly faster transition
          }}
          style={{ willChange: "opacity" }}
        >
          <h2 
            className="text-9xl sm:text-[15rem] md:text-[25rem] font-black uppercase tracking-tight"
            style={{ 
              color: '#00ff00'
            }}
          >
            LET'S GO
          </h2>
        </motion.div>
      </motion.div>

      {/* Single Combined Section - All Content Flows Together */}
      <section className="relative z-10 pt-20 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          {/* Hero Section - optimized animations */}
          <div className="pt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
                Unmatched <span className="text-purple-500">Advertising</span> Solutions
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-6">
                Revolutionary branding and conceptual innovation to transform your market presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                  onClick={scrollToFeatures}
                >
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                  >
                    Book a 15-min intro call
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Video section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"
            >
              <video 
                src="https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/Robots-3B2Td1FgkLYHPhtIkllFanlTXi7v5a.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* How It Works - optimized animations */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-zinc-500 mb-2">VISIONARY BRANDING</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Visionary branding for <span className="text-zinc-400">forward-thinking</span> brands
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
              >
                <div className="w-14 h-14 bg-zinc-300/40 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-zinc-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Conceptualization</h3>
                <p className="text-zinc-600">
                  Revolutionary brand concepts that challenge category conventions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
              >
                <div className="w-14 h-14 bg-zinc-300/40 rounded-full flex items-center justify-center mb-4">
                  <Palette className="text-zinc-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Creative Vision</h3>
                <p className="text-zinc-600">
                  Distinctive visual expressions that set your brand apart from competitors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
              >
                <div className="w-14 h-14 bg-zinc-300/40 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="text-zinc-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Brand Narrative</h3>
                <p className="text-zinc-600">
                  Compelling storytelling that forges emotional connections with audiences.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Services Categories - optimized animations */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-zinc-500 mb-2">REVOLUTIONARY DESIGN</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Revolutionary brand experiences & <span className="text-zinc-400">conceptual design</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Distinctive creative approaches that set you apart.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: Math.min(0.05 * index, 0.25), ease: "easeOut" }}
                  className="bg-white border border-zinc-200 p-4 rounded-lg text-center hover:border-zinc-400 transition-colors"
                >
                  <p className="text-zinc-800">{feature.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits - optimized animations */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2">UNMATCHED BENEFITS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Why visionaries choose Haven for branding
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Our unmatched creative approach crafts distinct brand universes that transcend category norms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Globe className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Conceptual Innovation</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Revolutionary brand ideas that create new category standards.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Zap className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Dedicated Creatives</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Your own dedicated team of visionary artists and storytellers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <BarChart className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Cultural Immersion</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Deep cultural insights inform every creative decision we make.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Star className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Artisan Craft</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Meticulously crafted visual and narrative systems with distinctive character.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Repeat className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Perpetual Evolution</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Brands that continuously adapt to cultural shifts while maintaining core identity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Award className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Cross-disciplinary Approach</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Blending art, design, psychology, and cultural anthropology into branding.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Portfolio Showcase */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2">FEATURED WORK</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Recent brand transformations
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                See how we've helped visionary brands create distinctive identities that challenge conventions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* X-Rated */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <Link href="/xrated" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//xrated1.png"
                        alt="X-Rated Platform"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">x-rated</h3>
                      <p className="text-zinc-600 mb-3">A revolutionary social platform combining selective content sharing with sophisticated privacy controls.</p>
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
                <Link href="/killmefxster" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//kxllme3.png"
                        alt="Kill Me Faster"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">Kill Me Faster</h3>
                      <p className="text-zinc-600 mb-3">Distinctive brand universe for an anonymous digital artist challenging conventional boundaries.</p>
                      <div className="flex items-center text-purple-600 font-medium">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Pricing Section - optimized animations */}
          <div ref={featuresRef} id="pricing">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2">UNMATCHED SERVICES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Bespoke branding solutions for visionary companies
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Revolutionary brand transformations starting at $95,000/month
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              {/* Unified Card with Border */}
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 shadow-xl overflow-hidden">
                {/* Inner subtle pattern background */}
                <div className="absolute inset-0 bg-white opacity-80 mix-blend-overlay">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden">
                  {/* Enterprise Card */}
                  <div className="flex items-center justify-center p-8 bg-gradient-to-br from-zinc-50 to-zinc-100">
                    <div className="relative rotate-neg-15 hover:-rotate-12 transition-transform duration-300" style={{ transform: "rotate(-15deg)" }}>
                      {/* Card */}
                      <div className="w-96 h-60 rounded-xl bg-white shadow-lg overflow-hidden relative border border-zinc-200">
                        {/* Purple metallic shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 via-white to-purple-200"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/10 to-purple-100/20"></div>
                        
                        {/* Accent shapes */}
                        <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-purple-400/20 backdrop-blur-md"></div>
                        <div className="absolute top-6 left-16 w-16 h-16 rounded-full bg-indigo-500/10 backdrop-blur-md"></div>
                        <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-yellow-300/10 backdrop-blur-md"></div>
                        <div className="absolute bottom-10 right-24 w-14 h-14 rounded-full bg-zinc-800/5 backdrop-blur-md"></div>
                        
                        <div className="absolute inset-0 flex flex-col justify-between p-5">
                          {/* Card header */}
                          <div className="flex justify-between items-center">
                            <Hexagon className="w-8 h-8 text-zinc-800/80" strokeWidth={1} />
                            <div className="text-xs font-medium text-zinc-600">Unmatched</div>
                          </div>

                          {/* Card center content */}
                          <div className="mt-6">
                            <div className="text-3xl font-bold text-zinc-800">Haven Advertising</div>
                            <div className="text-sm font-medium text-zinc-500 mt-1">Brand Growth Solutions</div>
                          </div>
                          
                          {/* Card footer */}
                          <div className="flex justify-between items-end">
                            <div className="text-sm font-medium tracking-wider text-zinc-600">UNMATCHED</div>
                            <button className="bg-gradient-to-r from-zinc-300 to-zinc-400 text-white text-xs font-medium py-1.5 px-4 rounded-full shadow-sm hover:from-zinc-400 hover:to-zinc-500 transition-colors">
                              Start today
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing Details */}
                  <div className="bg-white p-8 border-l border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-zinc-800">Unmatched Advertising</h3>
                      <div className="text-xs font-medium text-zinc-500">
                        Pause or cancel anytime
                      </div>
                    </div>
                    
                    <div className="border-b border-dashed border-zinc-200 pb-6 mb-6">
                      <div className="flex items-baseline mb-6">
                        <span className="text-5xl font-bold text-zinc-800">$95,000</span>
                        <span className="text-zinc-500 ml-2">/month</span>
                      </div>
                      
                      <div className="bg-zinc-50 px-6 py-6 rounded-lg mb-6 border border-zinc-100">
                        <div className="uppercase text-sm font-medium text-zinc-500 mb-3">INCLUDED</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Dedicated brand architect</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Bespoke creative direction</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Conceptual development</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Brand narrative crafting</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Unlimited ideation</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Cross-medium expression</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Cultural positioning</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Competitive distinction</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mb-6">
                        <Link href="/contact">
                          <button className="group relative inline-flex items-center justify-center border-2 border-zinc-300 bg-transparent text-zinc-900 font-medium py-3 px-8 rounded-full overflow-hidden transition-all duration-300">
                            <div className="absolute inset-0 bg-zinc-300 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <span className="relative z-10 flex items-center justify-center">
                              Schedule a consultation
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </button>
                        </Link>
                      </div>
                      
                      <p className="text-center text-sm text-zinc-500">
                        Bespoke brand development packages available for revolutionary visions.
                      </p>
                    </div>
                    
                    {/* Add pause anytime and money back sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start">
                        <div className="mr-3 p-2 bg-zinc-100 rounded-full">
                          <Clock className="h-5 w-5 text-zinc-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-zinc-900">Pause anytime</h4>
                          <p className="text-xs text-zinc-500">No questions asked</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 p-2 bg-zinc-100 rounded-full">
                          <Zap className="h-5 w-5 text-zinc-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-zinc-900">Money back</h4>
                          <p className="text-xs text-zinc-500">75% refund first week</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section - optimized animations */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-8"
            >
              <p className="text-sm font-medium text-purple-600 mb-2">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Everything you need to know about our advertising services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl mx-auto divide-y divide-zinc-200"
            >
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full justify-between items-start text-left"
                  >
                    <span className="text-lg font-medium text-zinc-900">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      {openFaq === index ? (
                        <X className="h-5 w-5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-500" />
                      )}
                    </span>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-2 pr-12"
                    >
                      <p className="text-zinc-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 