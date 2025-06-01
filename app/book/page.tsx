"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Menu, X, ChevronDown, BookOpen, Bookmark, Check } from "lucide-react"
import { useState } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"

export default function DesignBookPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Main Content */}
      <section className="relative z-10 pt-32 px-6 pb-20">
        <div className="container max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                <span className="text-sky-500">Cavemen</span> and <span className="text-pink-500">Onlyfans Girls</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-8">
                A rare collection of art references and secret design principles that drive our creative process. Filled with hidden techniques and unconventional wisdom not taught in design schools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#chapters">
                  <button className="px-8 py-3 bg-zinc-900 text-white rounded-full flex items-center hover:bg-zinc-800 transition-colors">
                    Explore Chapters
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-3 border border-zinc-300 text-zinc-900 rounded-full hover:bg-zinc-50 transition-colors">
                    Request PDF Copy
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-zinc-50 to-zinc-100">
                  <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <BookOpen className="w-6 h-6 text-zinc-800 opacity-80" />
                      <div className="ml-2 text-zinc-800/80 font-light text-sm">Limited Edition</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-pink-400 flex items-center justify-center">
                      <Hexagon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="text-center my-12">
                    <div className="text-zinc-800/80 uppercase tracking-widest text-xs font-light mb-2">Haven Studio</div>
                    <h2 className="text-zinc-900 font-bold text-2xl md:text-3xl mb-2">Cavemen & Onlyfans Girls</h2>
                    <div className="h-0.5 w-20 bg-zinc-800/30 mx-auto"></div>
                  </div>
                  
                  <div className="text-zinc-800/80 text-sm font-light">
                    Art References • Secret Principles • $240
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-100 rounded-lg -z-10"></div>
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-yellow-100 rounded-lg -z-10"></div>
            </motion.div>
          </div>
          
          {/* Book Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-24"
          >
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">About The Book</h2>
            <p className="text-lg text-zinc-600 mb-8">
              The Haven Design Book "Cavemen and Onlyfans Girls" distills years of design expertise into a comprehensive guide with rare art references and secret principles for creating exceptional digital experiences. Featuring unconventional wisdom and techniques not taught in design schools, this $240 collector's item is essential for designers, developers, and creative professionals seeking insider knowledge.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <span className="text-pink-600 font-medium">16</span>
                </div>
                <p className="text-zinc-600">Chapters</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-medium">240</span>
                </div>
                <p className="text-zinc-600">Pages</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
                  <span className="text-zinc-600 font-medium">∞</span>
                </div>
                <p className="text-zinc-600">Insights</p>
              </div>
            </div>
          </motion.div>
          
          {/* Featured Chapters */}
          <div id="chapters" className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Featured Chapters</h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Explore key sections of our design book that illuminate our approach to creating exceptional digital experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Design Philosophy",
                  description: "Our core design principles and the values that guide our creative decisions.",
                  color: "bg-pink-50 border-pink-100"
                },
                {
                  number: "04",
                  title: "Visual Systems",
                  description: "How we create cohesive visual languages that communicate brand identity.",
                  color: "bg-yellow-50 border-yellow-100"
                },
                {
                  number: "07",
                  title: "User Experience",
                  description: "Strategies for creating intuitive, meaningful interactions that delight users.",
                  color: "bg-zinc-50 border-zinc-100"
                },
                {
                  number: "12",
                  title: "Design Tools",
                  description: "The software, frameworks, and methodologies we use in our design process.",
                  color: "bg-indigo-50 border-indigo-100"
                },
                {
                  number: "15",
                  title: "Case Studies",
                  description: "Real-world examples of our design principles applied to client projects.",
                  color: "bg-green-50 border-green-100"
                },
                {
                  number: "16",
                  title: "Future Directions",
                  description: "Emerging trends and technologies shaping the future of digital design.",
                  color: "bg-rose-50 border-rose-100"
                }
              ].map((chapter, index) => (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-lg border ${chapter.color} hover:shadow-md transition-all duration-300`}
                >
                  <div className="text-sm font-medium text-zinc-400 mb-2">Chapter {chapter.number}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{chapter.title}</h3>
                  <p className="text-zinc-600 mb-4">{chapter.description}</p>
                  <div className="flex justify-end">
                    <Bookmark className="w-5 h-5 text-zinc-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-50 text-zinc-900 rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to unlock our secret design principles?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
              Request your copy of "Cavemen and Onlyfans Girls" for $240 and discover the unconventional methodologies that help us create exceptional digital experiences.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                Purchase Design Book
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
} 