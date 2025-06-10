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
  const [isCheckoutHovered, setCheckoutHovered] = useState(false)
  const [isLearnMoreHovered, setLearnMoreHovered] = useState(false)

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

  // Precompute random colors to avoid runtime calculations
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  const precomputedColors = Array(10).fill(0).map(() => getRandomHighlightColor());

  return (
    <main className="bg-white w-full text-zinc-900 min-h-screen">
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
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:hidden bg-white border-b border-zinc-200"
              style={{ willChange: "opacity, height" }}
            >
              <div className="container mx-auto px-6 py-4 space-y-3">
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
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
            >
              <h1 className="text-4xl md:text-7xl font-black text-zinc-900 mb-6 leading-none tracking-tight uppercase">
                <span className="block">
                  <span className="text-red-500 font-black">DESIGNS</span>
                  <span className="text-blue-500" style={{ color: '#00BBFF' }}>: 1</span>
                </span>
                <span className="text-xs tracking-[0.3em] text-zinc-500 font-light">THE</span>
                <span className="block"><span className="text-zinc-400">ART</span> <span className="text-pink-500">BOOK</span></span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8 font-light border-l-2 border-amber-700 pl-4">
                A premium hardcover collection of visual references and secret design principles. Featuring high-quality full-page print images including graphic designs, photography, AI-generated art, poems, short stories, and guide notes that travel from the dark ages through the digital age and into the future.
              </p>
              
              <div className="flex flex-col mb-4">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-4 h-4 text-zinc-400 mr-2" />
                  <span className="text-sm text-zinc-400">320 pages hardcover limited edition</span>
                </div>
                <div className="flex items-center">
                  <Bookmark className="w-4 h-4 text-zinc-400 mr-2" />
                  <span className="text-sm text-zinc-400">First print run - limited availability</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Simplified Stripe button container */}
                <div className="relative stripe-button-container block">
                  {stripeLoaded && (
                    // @ts-ignore - Stripe custom element
                    <stripe-buy-button
                      buy-button-id="buy_btn_1RV7YYLW3qNGE5NrHzRZJjMe"
                      publishable-key="pk_live_51RU878LW3qNGE5Nr0cXX4p3pqKFI8M1LtplAMOhlQTysHn36426EANMjlgzjArXWz4MU9TLFxe8VSSxjRNfJv7pP00Hp8rIbaG"
                    />
                  )}
                </div>
                <div className="mt-4 sm:hidden">
                  <a href="https://buy.stripe.com/00waEYgG74Hy3wz1Xl57W01" 
                     className="block text-center border border-zinc-300 hover:bg-zinc-50 text-amber-900 font-medium py-3 px-6 rounded-full transition-all duration-300">
                    Pre-order Now
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="relative"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-zinc-50 to-zinc-100">
                  <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>
                
                {/* Add the image overlay */}
                <div className="absolute inset-0 z-10">
                  <Image 
                    src="https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/designs1-gB5Lpw1KYbDmC0KcuQv0GWC4hl1gq8.jpg"
                    alt="DESIGNS: 1"
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
        
        /* Make Stripe button visible on all devices */
        @media (max-width: 640px) {
          .stripe-button-container stripe-buy-button {
            display: none !important;
          }
        }
      `}</style>
    </main>
  )
} 