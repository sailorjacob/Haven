"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Hexagon, Menu, X, ArrowRight, Instagram } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Script from "next/script"

export default function FarmPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  // Initialize Elfsight widget
  useEffect(() => {
    // Wait for the Elfsight script to be loaded
    if (typeof window !== 'undefined' && window.elfsight) {
      window.elfsight.initialize();
      setWidgetLoaded(true);
    }
  }, []);

  // Function to get a random highlight color - reused from existing page
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <main className="bg-white w-full text-zinc-900">
      {/* Load Elfsight Widget Script */}
      <Script 
        src="https://static.elfsight.com/platform/platform.js" 
        data-use-service-core defer
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.elfsight) {
            window.elfsight.initialize();
            setWidgetLoaded(true);
          }
        }}
      />

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
                <span className="ml-2 text-lg font-light tracking-wider">Haven</span>
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
                  href="/farm" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Farm</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Farm</span>
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
                  href="/farm"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Farm</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Farm</span>
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

      {/* Main Content */}
      <section className="relative z-10 pt-32 px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
              Generation <span className="text-zinc-400">Farm</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-6">
              A curated collection of aesthetic generated images from our creative lab.
            </p>
          </motion.div>

          {/* Instagram Profile Header */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-6 border border-zinc-200">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Instagram className="w-8 h-8 text-pink-500" />
                <h2 className="text-xl font-semibold text-center">@haven.engineer</h2>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-zinc-600">
                  Our creative laboratory where we experiment with aesthetic visuals and brand narratives.
                </p>
              </div>
              
              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-50 text-zinc-900"
                  onClick={() => window.open('https://instagram.com/haven.engineer', '_blank')}
                >
                  Visit Our Instagram
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="mb-16">
            <div className="max-w-5xl mx-auto">
              {/* Elfsight Instagram Feed Widget */}
              <div className="elfsight-app-e9f71eb9-28fe-42fa-90a7-61f0d63eb616"></div>
              
              {!widgetLoaded && (
                <div className="text-center py-16">
                  <div className="animate-pulse flex flex-col items-center justify-center">
                    <div className="rounded-full bg-zinc-200 h-16 w-16 mb-4 flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-zinc-400" />
                    </div>
                    <div className="h-4 bg-zinc-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-zinc-200 rounded w-24 mb-6"></div>
                    <p className="text-zinc-500">Loading Instagram feed...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

// Add TypeScript declaration for Elfsight
declare global {
  interface Window {
    elfsight?: {
      initialize: () => void;
    };
  }
} 