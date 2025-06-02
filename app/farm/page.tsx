"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Hexagon, Menu, X, Instagram } from "lucide-react"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function FarmPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Function to initialize Elfsight widget
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if script is already loaded
      const existingScript = document.getElementById('elfsight-script');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'elfsight-script';
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('Elfsight script loaded');
          setLoaded(true);
          // Try to initialize the widget if window.elfsight exists
          if (window.elfsight && window.elfsight.initialize) {
            window.elfsight.initialize();
          }
        };
        
        document.body.appendChild(script);
      } else {
        setLoaded(true);
        // Try to initialize the widget if window.elfsight exists
        if (window.elfsight && window.elfsight.initialize) {
          window.elfsight.initialize();
        }
      }
    }
  }, []);

  // Function to get a random highlight color - reused from existing page
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <main className="bg-white w-full text-zinc-900">
      {/* CSS to hide Elfsight branding only (not the content) */}
      <style jsx global>{`
        /* Very specific selectors to only target branding elements */
        .eapps-instagram-feed-title,
        .eapps-instagram-feed-title-container,
        .eui-widget-title.eui-widget-title-small,
        .eapps-widget-toolbar,
        a[href="https://elfsight.com/instagram-feed-instashow/"],
        a[target="_blank"][href="https://elfsight.com"] {
          display: none !important;
        }
        
        /* Make sure feed content is visible */
        .elfsight-app-0d3388d2-2de8-4157-97b1-ae10ef33aa26 {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        /* Ensure the Instagram posts are visible */
        .eapps-instagram-feed-posts,
        .eapps-instagram-feed-posts-item,
        .eapps-instagram-feed-posts-item-image,
        .eapps-instagram-feed-posts-item-content {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>

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
          {/* Instagram Feed */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              {/* Elfsight Instagram Feed Widget */}
              <div className="elfsight-app-0d3388d2-2de8-4157-97b1-ae10ef33aa26" data-elfsight-app-lazy="false"></div>
              
              {/* Fallback/Loading Content */}
              {!loaded && (
                <div className="text-center py-16">
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-full bg-zinc-200 h-16 w-16 mb-4 flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-zinc-400" />
                    </div>
                    <div className="mt-4 text-zinc-500">Loading Instagram feed...</div>
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