"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Hexagon, Menu, X } from "lucide-react"
import { Footer } from "@/components/footer"

// Define the farm images array
const farmImages = [
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2860%29-k9BaXEgj2xwF9uTTpeoGnm7MMu9S7B.jpeg",
    alt: "Farm image 1"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2859%29-GP102maNGk7s41ggPQtQg0Ag864ea6.jpeg",
    alt: "Farm image 2"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2858%29-aq9zalRBIdIjDlheX64PdpmqoHmxmL.jpeg",
    alt: "Farm image 3"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/silverballoon1-R3KnWLidnAVFb85ffcDv1UAjMj4dw6.png",
    alt: "Silver Balloon Design"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/sides2721_STAR_SHAPE_DESIGN_ASSET_ON_WHITE_BACKGROUND_SILVER_SP_6ca327f5-dce3-4e2c-8131-a90a61552a28-RJuKCBPIZEm7YSy8vyGd2TcYNf6W2Q.png",
    alt: "Star Shape Design"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/silvepole7-zsmmWoBsYt6cACi0Cys1W5LbvfBteR.png",
    alt: "Silver Pole Design"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2855%29-ioKnV0xmu3v7BO6pXix7bwqqbZQuGr.jpeg",
    alt: "Farm image 6"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2854%29-25QH9xH3Uo0A9ELfeQSduDT4wjFaFD.jpeg",
    alt: "Farm image 7"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/bernini2-mR73KBx5VjLLhEfreQAdfgjBHPX5Gw.png",
    alt: "Bernini Farm Design 2"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2852%29-EM8XwdJMsQrCMPKvO2KbcI86ptRJaX.jpeg",
    alt: "Farm image 9"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2851%29-4vpgjGlAEK4hdAaCgaCi2Ywd9lsJ7R.jpeg",
    alt: "Farm image 10"
  }
];

// Define the haven images array
const havenImages = [
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/artmuseum-Ghgi7H2LrI2doarDHPUkVhRND9HDdQ.png",
    alt: "Art Museum Design"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park4-tP39MqkMJZM0ZClBu4axRgqiEBqIgP.png",
    alt: "Park Design 4"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park1-HhRCLKZ5rlanSRwjwaVZPIWfgduYPZ.png",
    alt: "Park Design"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/soundpark-mw8b8hcheUxbTkqe7nBOKEEJg1C9QD.png",
    alt: "Sound Park Concept"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/soundpark2-rcgsUldxsrE5xeTX16Bv4mIwVHAx8r.png",
    alt: "Sound Park Design"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater2-c6ylt6vCnnG1jKH7S1DGpixTrhGdGd.png",
    alt: "Theater Design 2"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater3-THnHgt1zof3uqx4FS1nn9P0jxXcR89.png",
    alt: "Theater Design 3"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater4-zuEGjHSjKeHSqJt9xFovS1Vy9TCSPa.png",
    alt: "Theater Design 4"
  }
];

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("haven")

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
                  href="/studio" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Studio</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Studio</span>
                </Link>
                <Link 
                  href="/gallery"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Gallery</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Gallery</span>
                </Link>
                <Link 
                  href="/work" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Work</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Work</span>
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
                  href="/studio" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Studio</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Studio</span>
                </Link>
                <Link 
                  href="/gallery"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Gallery</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Gallery</span>
                </Link>
                <Link 
                  href="/work" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Work</span>
                  <span className={`hidden group-hover:inline ${getRandomHighlightColor()}`}>Work</span>
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
          {/* Tabs */}
          <div className="mb-8">
            <div className="flex space-x-4 border-b border-zinc-200">
              <button
                onClick={() => setActiveTab("haven")}
                className="pb-4 px-2 text-sm font-medium tracking-wider uppercase text-zinc-900 border-b-2 border-zinc-900"
              >
                Haven
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {havenImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index % 3) }}
                  className="relative aspect-[3/4] overflow-hidden rounded-md"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 