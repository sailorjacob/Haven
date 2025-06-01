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

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const features = [
    { name: "Media Buying", included: true },
    { name: "Market Research", included: true },
    { name: "Brand Strategy", included: true },
    { name: "Campaign Design", included: true },
    { name: "Content Creation", included: true },
    { name: "Influencer Marketing", included: true },
    { name: "Programmatic Ads", included: true },
    { name: "Video Production", included: true },
    { name: "Performance Marketing", included: true },
    { name: "Analytics & Reporting", included: true },
    { name: "Social Media Management", included: true },
    { name: "Email Marketing", included: true },
    { name: "PR & Communications", included: true },
    { name: "Conversion Optimization", included: true },
    { name: "SEO & SEM", included: true },
  ]

  const faqs = [
    {
      question: "What's included in the unmatched advertising services?",
      answer: "Our unmatched services include comprehensive campaign strategy, creative development, media buying, analytics, and ongoing optimization. We handle everything from research to execution."
    },
    {
      question: "How long does it take to see results?",
      answer: "While initial campaigns can be launched within 2-4 weeks, meaningful results typically emerge within 2-3 months. We provide regular reporting and optimize continuously based on performance data."
    },
    {
      question: "Can we scale up or down our investment?",
      answer: "Yes, our contracts include flexibility to adjust your investment based on performance and business needs. We'll work with you to optimize spend for maximum ROI."
    },
    {
      question: "Do you work with specific industries?",
      answer: "We work across various industries but have particular expertise in technology, finance, lifestyle brands, and consumer products. We customize our approach based on your specific market."
    },
    {
      question: "What makes your advertising services different?",
      answer: "We combine creative excellence with data-driven strategies, offering a full-service approach that eliminates the need to coordinate multiple agencies. Our dedicated team ensures consistent brand messaging across all channels."
    }
  ]

  return (
    <main className="bg-white w-full text-zinc-900">
      {/* Animated Stars */}
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
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Advertising
                </Link>
                <Link 
                  href="/studio" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Studio
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Pricing
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
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm"
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
                  href="/advertising" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Advertising
                </Link>
                <Link 
                  href="/studio" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Studio
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
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

      {/* Animated Text Overlay */}
      <motion.div 
        className="fixed inset-0 z-[999] flex items-center justify-center bg-white animated-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Big Red Text */}
          <div className="overflow-hidden text-center">
            <motion.h1 
              className="text-7xl sm:text-[10rem] md:text-[16rem] font-black text-[#ff0000] uppercase tracking-tighter leading-none px-2 w-full"
              style={{ lineHeight: "0.9" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              {/* Animated text that types out */}
              {'F#CKING THE ADS GAME UP'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.05, 
                    delay: index * 0.15,
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          {/* NO MERCY text - with slapping animation but no bounce */}
          <motion.div
            className="absolute bottom-[15%] right-[10%] z-30 rotate-6"
            initial={{ opacity: 0, x: 1000, rotate: 25 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ 
              type: "tween", // Changed from spring to tween for no bounce
              ease: "easeOut",
              delay: 4,
              duration: 0.2
            }}
            onAnimationComplete={() => {
              // When NO MERCY animation completes, make everything disappear instantly
              const overlay = document.querySelector('.animated-overlay');
              if (overlay) {
                // Directly change style rather than adding a class with animation
                (overlay as HTMLElement).style.display = 'none';
              }
            }}
          >
            <h2 
              className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tight"
              style={{ 
                color: '#0f0',
                filter: 'brightness(1.5)',
                textShadow: '0 0 15px rgba(0, 255, 0, 0.7)'
              }}
            >
              NO MERCY
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Single Combined Section - All Content Flows Together */}
      <section className="relative z-10 pt-20 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
                Unmatched <span className="text-purple-600">Advertising</span> Solutions
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-6">
                Dedicated branding and advertising services to scale your business.
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
                    Schedule a consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* How It Works */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Complete advertising solutions for growing businesses
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
              >
                <div className="w-14 h-14 bg-purple-600/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-purple-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Strategy</h3>
                <p className="text-zinc-600">
                  Comprehensive marketing strategy tailored to your business goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
              >
                <div className="w-14 h-14 bg-purple-600/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="text-purple-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Creative</h3>
                <p className="text-zinc-600">
                  Best-in-class creative and production for all advertising channels.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
              >
                <div className="w-14 h-14 bg-purple-600/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="text-purple-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Measurement</h3>
                <p className="text-zinc-600">
                  Advanced analytics and reporting to maximize ROI.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Services Categories */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Complete marketing & advertising services
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Everything you need to grow your brand and business.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-zinc-200 p-4 rounded-lg text-center hover:border-purple-600/50 transition-colors"
                >
                  <p className="text-zinc-800">{feature.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2">UNMATCHED BENEFITS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Why businesses choose Haven for advertising
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Our unmatched advertising solutions provide a comprehensive approach to growing your brand and business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Globe className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Integrated campaigns</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Cohesive messaging across all channels for maximum impact.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Zap className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Dedicated team</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Your own marketing department with strategic leadership.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <BarChart className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Data-driven approach</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Analytics and insights inform every decision we make.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Star className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Premium creative</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Award-winning creative that captures attention and drives action.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Repeat className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Continuous optimization</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Ongoing testing and refinement to improve performance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Award className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Industry expertise</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Specialized knowledge across multiple markets and verticals.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pricing Section */}
          <div ref={featuresRef} id="pricing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2">UNMATCHED SERVICES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Dedicated marketing solutions for growing businesses
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Custom advertising services starting at $95,000/month
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                            <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-xs font-medium py-1.5 px-4 rounded-full shadow-sm hover:from-purple-500 hover:to-purple-600 transition-colors">
                              Get started
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
                        Custom contracts available
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
                            <span className="text-zinc-700">Dedicated strategist</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Full-service creative</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Media planning & buying</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Weekly reporting</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Unlimited revisions</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Multi-channel campaigns</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Market research</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Competitive analysis</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mb-6">
                        <Link href="/contact">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-8 py-6"
                          >
                            Schedule a consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                      
                      <p className="text-center text-sm text-zinc-500">
                        Custom solutions and pricing available for larger campaigns.
                      </p>
                    </div>
                    
                    <div className="text-sm text-zinc-600">
                      <p className="mb-4">
                        Our unmatched advertising solutions are designed for businesses looking to scale their brand presence and drive significant growth. We offer a comprehensive approach to advertising and marketing.
                      </p>
                      <p>
                        Contact us to discuss your specific needs and goals. We'll create a custom plan tailored to your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                      transition={{ duration: 0.3 }}
                      className="mt-2 pr-12"
                    >
                      <p className="text-zinc-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Ready to elevate your brand?
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
                Let's discuss how our advertising solutions can help you achieve your business goals.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-8"
                >
                  Schedule a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 