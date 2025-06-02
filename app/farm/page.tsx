"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Hexagon, Menu, X, Camera, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"

// Define the farm images array
const farmImages = [
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2852%29-EM8XwdJMsQrCMPKvO2KbcI86ptRJaX.jpeg",
    alt: "Farm image 1"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2853%29-XeFbs4dtIfL1L2OIMpDkUtri3DUUnu.jpeg",
    alt: "Farm image 2"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2854%29-25QH9xH3Uo0A9ELfeQSduDT4wjFaFD.jpeg",
    alt: "Farm image 3"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2855%29-ioKnV0xmu3v7BO6pXix7bwqqbZQuGr.jpeg",
    alt: "Farm image 4"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2856%29-87hd2al8VViR1IJXTmAqr89iTRglld.jpeg",
    alt: "Farm image 5"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2857%29-eK25dRZhwD9WNsdR7VNcpaCT1lXgJA.jpeg",
    alt: "Farm image 6"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2858%29-aq9zalRBIdIjDlheX64PdpmqoHmxmL.jpeg",
    alt: "Farm image 7"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2859%29-GP102maNGk7s41ggPQtQg0Ag864ea6.jpeg",
    alt: "Farm image 8"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2860%29-k9BaXEgj2xwF9uTTpeoGnm7MMu9S7B.jpeg",
    alt: "Farm image 9"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20%2851%29-4vpgjGlAEK4hdAaCgaCi2Ywd9lsJ7R.jpeg",
    alt: "Farm image 10"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20(50)-OKZEuqZjBPLQdA3Y66sNP08fXmfUAO.jpeg",
    alt: "Farm image 11"
  },
  {
    url: "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/farm/download%20(49)-PwRE9Ej34cTxs6hWHMXFFiBdkzfQ3s.jpeg",
    alt: "Farm image 12"
  }
];

export default function FarmPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Function to get a random highlight color - reused from existing page
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Open the modal with the selected image
  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

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
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-light text-zinc-900 mb-4">
              Farm:
            </h1>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {farmImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index % 3) }}
                  className="relative aspect-[3/4] overflow-hidden rounded-md cursor-pointer group"
                  onClick={() => openModal(image.url)}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About the Farm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-50 p-8 rounded-xl max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-light text-zinc-900 mb-4 text-center">
              About:
            </h2>
            <p className="text-zinc-600 mb-6">
              Haven Farm represents our commitment to sustainable living and agricultural practices. 
              Located in upstate New York, our farm serves as both a retreat and a working model 
              for ecological harmony. We grow seasonal produce using regenerative methods that 
              prioritize soil health and biodiversity.
            </p>
            <p className="text-zinc-600">
              The farm connects our digital work with the physical world, reminding us of the 
              importance of tangible creation and natural cycles. It's also a gathering place 
              for our team and community to collaborate, recharge, and find inspiration.
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="mailto:farm@haven.engineer" 
                className="inline-flex items-center text-zinc-900 border border-zinc-300 hover:bg-zinc-100 py-2 px-6 rounded-full text-sm transition-colors"
              >
                Contact the Farm
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full max-h-[85vh]">
              <Image
                src={selectedImage}
                alt="Farm image fullscreen view"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  )
} 