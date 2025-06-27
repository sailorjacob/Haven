"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

interface WorkItem {
  id: string
  title: string
  description: string
  category: string
  image?: string
  images?: string[]
  link: string
  type: "image" | "interactive" | "gallery"
}

const workExamples: WorkItem[] = [
  {
    id: "beloved-logo",
    title: "BeLoved Transportation Logo",
    description: "Logo design for NEMT provider with typography and branding.",
    category: "Logo Design",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved%20logo.png",
    link: "/beloved",
    type: "image"
  },
  {
    id: "ammocat-game", 
    title: "Ammocat Mini Game",
    description: "Browser-based game for New York artist Ammo Cat with custom gameplay.",
    category: "Game Development",
    images: [
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/ammocat//minigame.png"
    ],
    link: "https://ammocat.com/game",
    type: "interactive"
  },
  {
    id: "anthony-ai-generator",
    title: "Anthony Haden-Guest AI Art Generator", 
    description: "AI image generator trained on Anthony Haden-Guest's cartoon art style.",
    category: "AI Development",
    images: [
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_1_0001.png",
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0027.png"
    ],
    link: "/anthonyhadenguest",
    type: "gallery"
  },
  {
    id: "apparel-merch-webstore",
    title: "LSCHER Apparel x Webstore",
    description: "Full-service e-commerce design for New York based fashion art x streetwear brand.",
    category: "E-commerce Design",
    images: [
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//merch.png",
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//merch2.png"
    ],
    link: "#",
    type: "gallery"
  },
  {
    id: "swivimedia",
    title: "Swivi Media",
    description: "A viral marketing agency connecting brands with micro-influencers to create hundreds of authentic campaign videos.",
    category: "Brand Transformation",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//swivi4.png",
    link: "https://www.swivimedia.com/about",
    type: "image"
  },
  {
    id: "klaire-dev",
    title: "klaire.dev",
    description: "Personal portfolio showcasing UI/UX excellence and creative digital design work.",
    category: "Brand Transformation",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//klairedev.png",
    link: "https://klaire.dev",
    type: "image"
  },
  {
    id: "1st-class-studios",
    title: "1st Class Studios",
    description: "Professional recording studio with three state-of-the-art facilities just 45 minutes from Manhattan.",
    category: "Brand Transformation",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/1stclass//1stclassstudios-min.png",
    link: "https://1stclassstudios.com",
    type: "image"
  }
]

export default function WorkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % workExamples.length)
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + workExamples.length) % workExamples.length)
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isTransitioning, isPaused])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide()
          break
        case 'ArrowRight':
          nextSlide()
          break
        case ' ':
          e.preventDefault()
          setIsPaused(prev => !prev)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const currentWork = workExamples[currentIndex]
  const displayImage = currentWork.image || currentWork.images?.[0] || ""

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={displayImage}
            alt={currentWork.title}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${
              isTransitioning ? 'opacity-30 scale-105' : 'opacity-100 scale-100'
            } group-hover:scale-105`}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
              {currentWork.category}
            </span>
          </div>

          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
            {currentIndex + 1} / {workExamples.length}
          </div>
        </div>

        <div className="p-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-zinc-900 mb-3">
              {currentWork.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              {currentWork.description}
            </p>
            
            {currentWork.type === "interactive" ? (
              <a
                href={currentWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 text-sm group/btn"
              >
                <span className="mr-2">Play Game</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            ) : currentWork.link.startsWith('http') ? (
              <a
                href={currentWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-zinc-900 hover:text-zinc-600 transition-colors font-medium text-sm group/btn"
              >
                Visit Website
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            ) : (
              <Link
                href={currentWork.link}
                className="inline-flex items-center text-zinc-900 hover:text-zinc-600 transition-colors font-medium text-sm group/btn"
              >
                View Project
                <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="flex justify-center mt-6 space-x-2">
        {workExamples.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-zinc-900 w-8' 
                : 'bg-zinc-300 hover:bg-zinc-400 w-2'
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/work"
          className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm group"
        >
          View All Work
          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
} 