"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Menu, X, ChevronDown, BookOpen, Bookmark, Check } from "lucide-react"
import { useState, useEffect } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"
import Script from "next/script"

// Declare the Stripe property on the window object
declare global {
  interface Window {
    Stripe?: any;
  }
}

export default function DesignBookPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [stripeLoaded, setStripeLoaded] = useState(false)

  // Handle Stripe script loading
  useEffect(() => {
    const handleStripeLoad = () => {
      setStripeLoaded(true)
    }

    // Check if Stripe is already loaded
    if (window.Stripe) {
      setStripeLoaded(true)
    }

    // Add event listener for script load
    window.addEventListener('stripe-loaded', handleStripeLoad)

    return () => {
      window.removeEventListener('stripe-loaded', handleStripeLoad)
    }
  }, [])

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
                <Hexagon className="w-8 h-8 text-amber-800" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven Studio</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/advertising" 
                  className="text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                >
                  Advertising
                </Link>
                <Link 
                  href="/studio" 
                  className="text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                >
                  Studio
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                >
                  Pricing
                </Link>
                <Link 
                  href="/book" 
                  className="text-sm text-amber-900 hover:text-amber-950 transition-colors tracking-wider uppercase font-light ml-2"
                >
                  Design Book
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/contact"
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-amber-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm"
              >
                Purchase
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
                  className="block text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Advertising
                </Link>
                <Link 
                  href="/studio" 
                  className="block text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Studio
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/book"
                  className="block text-sm text-amber-900 hover:text-amber-950 transition-colors tracking-wider uppercase font-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Design Book
                </Link>
                <Link 
                  href="/contact"
                  className="block text-sm text-amber-800 hover:text-amber-950 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Purchase
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-black text-zinc-900 mb-6 leading-none tracking-tight uppercase">
                <span className="text-blue-500 block" style={{ color: '#00BBFF' }}>CAVEMEN</span>
                <span className="text-xs tracking-[0.3em] text-zinc-500 font-light">AND</span>
                <span className="block"><span className="text-zinc-400">ONLY</span><span className="text-yellow-400">FANS</span> <span className="text-pink-500">GIRLS</span></span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8 font-light border-l-2 border-amber-700 pl-4">
                A premium hardcover collection of visual references and secret design principles. Featuring high-quality full-page print images including graphic designs, photography, AI-generated art, poems, short stories, and guide notes that travel from the dark ages through the digital age and into the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Simplified Stripe button container */}
                <div className="relative stripe-button-container">
                  {stripeLoaded && (
                    // @ts-ignore - Stripe custom element
                    <stripe-buy-button
                      buy-button-id="buy_btn_1RV7YYLW3qNGE5NrHzRZJjMe"
                      publishable-key="pk_live_51RU878LW3qNGE5Nr0cXX4p3pqKFI8M1LtplAMOhlQTysHn36426EANMjlgzjArXWz4MU9TLFxe8VSSxjRNfJv7pP00Hp8rIbaG"
                    />
                  )}
                </div>
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
                
                {/* Add the image overlay */}
                <div className="absolute inset-0 z-10">
                  <Image 
                    src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//cavemen.png"
                    alt="Cavemen and OnlyFans Girls"
                    fill
                    className="object-cover opacity-80 mix-blend-multiply"
                  />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="text-zinc-800/80 font-medium text-xs tracking-widest uppercase">Limited Edition</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                      <Hexagon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-100 rounded-none -z-10"></div>
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-zinc-200 rounded-none -z-10"></div>
            </motion.div>
          </div>
          
          {/* Hidden sections */}
          <div className="hidden">
            {/* Book Introduction */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-32 relative"
            >
              <span className="absolute -left-8 top-0 text-[200px] font-black text-zinc-100 leading-none select-none">01</span>
              <div className="relative">
                <h2 className="text-5xl font-black text-amber-950 mb-8 uppercase tracking-tight">THE BOOK</h2>
                <p className="text-lg text-amber-800 mb-12 font-light">
                  The Haven Design Book "Cavemen and Onlyfans Girls" is a premium hardcover collection of visual references and secret design principles. This $997 collector's item features high-quality full-page print images spanning graphic designs, photography, AI-generated art, poems, short stories, and simple guide notes. Journey from the dark ages through the digital revolution and into the speculative future of design, with unconventional wisdom not taught in design schools.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col items-start">
                    <div className="w-20 h-1 bg-amber-700 mb-4"></div>
                    <span className="text-4xl font-black text-zinc-900 mb-2">12</span>
                    <p className="text-amber-700 text-sm uppercase tracking-wider">Visual Sections</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="w-20 h-1 bg-zinc-900 mb-4"></div>
                    <span className="text-4xl font-black text-zinc-900 mb-2">240</span>
                    <p className="text-amber-700 text-sm uppercase tracking-wider">Pages</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="w-20 h-1 bg-pink-500 mb-4"></div>
                    <span className="text-4xl font-black text-zinc-900 mb-2">∞</span>
                    <p className="text-amber-700 text-sm uppercase tracking-wider">Inspirations</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Featured Visual Content */}
            <div id="chapters" className="mb-32">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 relative"
              >
                <span className="absolute -left-8 top-0 text-[200px] font-black text-zinc-100 leading-none select-none">02</span>
                <div className="relative">
                  <h2 className="text-5xl font-black text-amber-950 mb-4 uppercase tracking-tight">VISUAL CONTENT</h2>
                  <p className="text-lg text-amber-800 max-w-2xl font-light border-l-2 border-amber-700 pl-4">
                    Explore the diverse visual categories that make up our premium hardcover collection.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    number: "01",
                    title: "PHOTOGRAPHY",
                    description: "Stunning high-resolution photography spanning landscapes, portraits, and conceptual imagery.",
                    color: "border-l-amber-700"
                  },
                  {
                    number: "02",
                    title: "GRAPHIC DESIGN",
                    description: "Bold visual compositions exploring typography, color theory, and layout principles.",
                    color: "border-l-amber-900"
                  },
                  {
                    number: "03",
                    title: "AI-GENERATED ART",
                    description: "Cutting-edge imagery created through various AI platforms pushing creative boundaries.",
                    color: "border-l-amber-600"
                  },
                  {
                    number: "04",
                    title: "HISTORICAL REFERENCES",
                    description: "Visual journey through artistic expressions from the dark ages to contemporary times.",
                    color: "border-l-amber-700"
                  },
                  {
                    number: "05",
                    title: "POEMS & STORIES",
                    description: "Visual typography and illustrated short-form literature that complements the imagery.",
                    color: "border-l-amber-900"
                  },
                  {
                    number: "06",
                    title: "FUTURE CONCEPTS",
                    description: "Speculative visual designs exploring how aesthetics might evolve in coming decades.",
                    color: "border-l-amber-600"
                  }
                ].map((content, index) => (
                  <motion.div
                    key={content.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`p-8 border-l-4 ${content.color} bg-zinc-100 hover:bg-zinc-200 transition-all duration-300`}>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black text-amber-950 uppercase tracking-tight">{content.title}</h3>
                        <span className="text-amber-500 font-black">{content.number}</span>
                      </div>
                      <p className="text-amber-800 mb-6">{content.description}</p>
                      <div className="flex justify-end">
                        <div className="text-xs uppercase tracking-widest text-amber-700 group-hover:text-amber-900 transition-colors duration-300">
                          View Examples
                        </div>
                      </div>
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
              className="bg-zinc-100 border border-zinc-200 p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                <div className="w-full h-full bg-amber-700 -skew-x-12 -ml-32 opacity-10"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-5xl font-black text-amber-950 mb-6 uppercase tracking-tight">PRE-ORDER NOW</h2>
                <p className="text-lg text-amber-800 max-w-2xl mb-8 font-light">
                  Pre-order your copy of "Cavemen and Onlyfans Girls" for $997 and be among the first to experience this premium hardcover collection of visual references spanning the dark ages to the future.
                </p>
                <Link href="/contact" className="inline-block">
                  <button className="px-10 py-4 bg-amber-700 text-white rounded-none hover:bg-amber-800 transition-colors uppercase tracking-wide text-sm font-bold">
                    PRE-ORDER — $997
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

      {/* Stripe Script */}
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event('stripe-loaded'))
        }}
      />

      {/* Stripe styling */}
      <style jsx global>{`
        .stripe-button-container {
          min-width: 240px;
        }
        stripe-buy-button {
          --stripe-button-font-family: sans-serif;
          --stripe-button-border-radius: 0;
          --stripe-button-color: #1f2937;
          --stripe-button-background-color: white;
          --stripe-button-height: 48px;
          --stripe-button-border: 1px solid #e4e4e7;
          --stripe-button-text-transform: uppercase;
          --stripe-button-font-weight: 500;
          --stripe-button-letter-spacing: 0.05em;
          --stripe-button-box-shadow: none;
        }
        stripe-buy-button:hover {
          --stripe-button-background-color: #f9fafb;
        }
      `}</style>
    </main>
  )
} 