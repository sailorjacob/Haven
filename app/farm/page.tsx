"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Hexagon, Menu, X, ImageIcon, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function FarmPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry")

  // Placeholder Instagram images (in production, you would fetch these from Instagram API)
  // Replace these with actual images from @haven.engineer
  useEffect(() => {
    // Simulating a fetch of Instagram images
    const fetchImages = async () => {
      setLoading(true)
      
      // In a real implementation, you would fetch from Instagram API
      // For demonstration, using placeholder images with varying aspect ratios
      const dummyImages = [
        {
          id: "1",
          url: "https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?q=80&w=1000",
          caption: "Brand concept exploration #1",
          aspectRatio: "1/1",
        },
        {
          id: "2",
          url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000",
          caption: "Visual narrative design study",
          aspectRatio: "3/4",
        },
        {
          id: "3",
          url: "https://images.unsplash.com/photo-1649355420091-ba4151111f17?q=80&w=1000",
          caption: "Avant-garde campaign mockup",
          aspectRatio: "4/5",
        },
        {
          id: "4",
          url: "https://images.unsplash.com/photo-1618005198919-177e9dd3b5d9?q=80&w=1000",
          caption: "Brand identity exploration",
          aspectRatio: "1/1",
        },
        {
          id: "5",
          url: "https://images.unsplash.com/photo-1633497387007-67eadf3efd92?q=80&w=1000",
          caption: "Conceptual design sketch",
          aspectRatio: "4/3",
        },
        {
          id: "6",
          url: "https://images.unsplash.com/photo-1623150502742-62d8f453614c?q=80&w=1000",
          caption: "Immersive experience prototype",
          aspectRatio: "1/1",
        },
        {
          id: "7",
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
          caption: "Cultural narrative visualization",
          aspectRatio: "3/4",
        },
        {
          id: "8",
          url: "https://images.unsplash.com/photo-1618005198208-283dfd0a830d?q=80&w=1000",
          caption: "Bespoke visual language sample",
          aspectRatio: "1/1",
        },
        {
          id: "9",
          url: "https://images.unsplash.com/photo-1633501636789-54572bc926b2?q=80&w=1000",
          caption: "Revolutionary concept board",
          aspectRatio: "4/5",
        },
        {
          id: "10",
          url: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1000",
          caption: "Artisan creative direction",
          aspectRatio: "1/1",
        },
        {
          id: "11",
          url: "https://images.unsplash.com/photo-1618005202006-c81391a99119?q=80&w=1000",
          caption: "Brand narrative architecture",
          aspectRatio: "4/3",
        },
        {
          id: "12",
          url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000",
          caption: "Distinctive visual system",
          aspectRatio: "1/1",
        },
      ]
      
      setImages(dummyImages)
      setLoading(false)
    }

    fetchImages()
  }, [])

  // Function to get a random highlight color - reused from existing page
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <main className="bg-white w-full text-zinc-900">
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
            
            {/* View Mode Selector */}
            <div className="flex justify-center space-x-4 mb-8">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-purple-600 hover:bg-purple-700" : "border-zinc-300"}
              >
                Grid View
              </Button>
              <Button
                variant={viewMode === "masonry" ? "default" : "outline"}
                onClick={() => setViewMode("masonry")}
                className={viewMode === "masonry" ? "bg-purple-600 hover:bg-purple-700" : "border-zinc-300"}
              >
                Masonry View
              </Button>
            </div>
          </motion.div>

          {/* Instagram Feed */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-zinc-200 h-16 w-16 mb-4 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-zinc-400" />
                </div>
                <div className="h-4 bg-zinc-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-zinc-200 rounded w-24"></div>
              </div>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                // Grid View
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {images.map((image) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-square relative overflow-hidden rounded-xl group"
                    >
                      <Image
                        src={image.url}
                        alt={image.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                // Masonry View
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                >
                  {images.map((image) => {
                    // Calculate height based on aspect ratio
                    const [width, height] = image.aspectRatio.split('/');
                    const aspectRatio = parseInt(width) / parseInt(height);
                    
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative overflow-hidden rounded-xl group break-inside-avoid mb-4"
                      >
                        <div style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }} className="relative">
                          <Image
                            src={image.url}
                            alt={image.caption}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <p className="text-white text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </>
          )}

          {/* Instagram Integration Note */}
          <div className="mt-16 border-t border-zinc-200 pt-8">
            <div className="bg-zinc-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Connect with our Instagram</h3>
              <p className="text-zinc-600 mb-4">
                Follow us <a href="https://instagram.com/haven.engineer" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">@haven.engineer</a> for more generated aesthetic content and behind-the-scenes creative process.
              </p>
              <Button
                variant="outline"
                className="border-zinc-300 hover:bg-zinc-50 text-zinc-900"
                onClick={() => window.open('https://instagram.com/haven.engineer', '_blank')}
              >
                Visit Instagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 