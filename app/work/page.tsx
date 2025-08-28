"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Hexagon, ArrowRight, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalImages, setModalImages] = useState<string[]>([])
  const [ammocatImageIndex, setAmmocatImageIndex] = useState(0)
  const [apparelImageIndex, setApparelImageIndex] = useState(0)
  const [isAmmocatTransitioning, setIsAmmocatTransitioning] = useState(false)
  const [isApparelTransitioning, setIsApparelTransitioning] = useState(false)
  
  // Function to get a random highlight color - precompute for better performance
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Precompute colors to avoid runtime calculations
  const precomputedColors = Array(10).fill(0).map(() => getRandomHighlightColor());
  
  // Modal functions
  const openModal = (images: string[], startIndex = 0) => {
    setModalImages(images)
    setCurrentImageIndex(startIndex)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }
  
  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = 'unset'
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length)
  }
  
  // Ammo cat navigation functions
  const nextAmmocatImage = () => {
    const ammocatWork = workExamples.find(work => work.id === "ammocat-game")
    if (ammocatWork?.images && !isAmmocatTransitioning) {
      setIsAmmocatTransitioning(true)
      setTimeout(() => {
        setAmmocatImageIndex((prev) => (prev + 1) % ammocatWork.images.length)
        setTimeout(() => setIsAmmocatTransitioning(false), 300)
      }, 300)
    }
  }
  
  const prevAmmocatImage = () => {
    const ammocatWork = workExamples.find(work => work.id === "ammocat-game")
    if (ammocatWork?.images && !isAmmocatTransitioning) {
      setIsAmmocatTransitioning(true)
      setTimeout(() => {
        setAmmocatImageIndex((prev) => (prev - 1 + ammocatWork.images.length) % ammocatWork.images.length)
        setTimeout(() => setIsAmmocatTransitioning(false), 300)
      }, 300)
    }
  }
  
  // Apparel navigation functions
  const nextApparelImage = () => {
    const apparelWork = workExamples.find(work => work.id === "apparel-merch-webstore")
    if (apparelWork?.images && !isApparelTransitioning) {
      setIsApparelTransitioning(true)
      setTimeout(() => {
        setApparelImageIndex((prev) => (prev + 1) % apparelWork.images.length)
        setTimeout(() => setIsApparelTransitioning(false), 300)
      }, 300)
    }
  }
  
  const prevApparelImage = () => {
    const apparelWork = workExamples.find(work => work.id === "apparel-merch-webstore")
    if (apparelWork?.images && !isApparelTransitioning) {
      setIsApparelTransitioning(true)
      setTimeout(() => {
        setApparelImageIndex((prev) => (prev - 1 + apparelWork.images.length) % apparelWork.images.length)
        setTimeout(() => setIsApparelTransitioning(false), 300)
      }, 300)
    }
  }
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowLeft':
          if (modalImages.length > 1) prevImage()
          break
        case 'ArrowRight':
          if (modalImages.length > 1) nextImage()
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, modalImages.length])
  
  const workExamples = [
    {
      id: "sojourn",
      title: "sojourn.city",
      description: "Solar punk inspired art project with an interactive public art gallery wall.",
      category: "Interactive Art",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/sojourn.png",
      link: "https://sojourn.city",
      type: "image"
    },
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
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0027.png", 
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0004.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_1_0019%20(1).png"
      ],
      link: "/anthonyhadenguest",
      type: "gallery"
    },
    {
      id: "apparel-merch-webstore",
      title: "LSCHER Apparel x Webstore",
      description: "Full-service e-commerce design for New York based fashion art x streetwear brand, featuring web design, typography, logo design, and product photography.",
      category: "Brand Design",
      images: [
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//merch.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//merch2.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//merch3.png"
      ],
      link: "#",
      type: "gallery"
    },
    {
      id: "salomatic-pitch-deck",
      title: "Salomatic Pitch Deck",
      description: "Recent brand transformation and pitch deck design for AI-enhanced lab test startup backed by Microsoft and the World Bank.",
      category: "Brand Transformation",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//salomatic.png",
      link: "/salomatic",
      type: "image"
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Animated Stars */}
      <AnimatedStars />
      
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Blueprint grid on left margin */}
      <div className="fixed left-0 top-0 bottom-0 w-24 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(75, 85, 99, 0.6) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.6) 1px, transparent 1px),
                linear-gradient(to right, rgba(75, 85, 99, 0.3) 0.5px, transparent 0.5px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '20px 20px, 20px 20px, 5px 5px, 5px 5px'
            }}
          ></div>
          <div className="absolute left-0 top-0 bottom-0 w-full opacity-30"
            style={{
              background: 'linear-gradient(90deg, white, transparent)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Blueprint grid on right margin */}
      <div className="fixed right-0 top-0 bottom-0 w-24 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(75, 85, 99, 0.6) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.6) 1px, transparent 1px),
                linear-gradient(to right, rgba(75, 85, 99, 0.3) 0.5px, transparent 0.5px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '20px 20px, 20px 20px, 5px 5px, 5px 5px'
            }}
          ></div>
          <div className="absolute right-0 top-0 bottom-0 w-full opacity-30"
            style={{
              background: 'linear-gradient(270deg, white, transparent)'
            }}
          ></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider text-zinc-900">Haven Studio</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/work" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                >
                  <span className="group-hover:hidden">Work</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[3]}`}>Work</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              
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
                  href="/work" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Work</span>
                  <span className={`hidden group-hover:inline ${precomputedColors[3]}`}>Work</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative z-10 pt-24 px-6">
        <div className="container max-w-6xl mx-auto">
          
          {/* Back button and header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
            style={{ willChange: "transform, opacity" }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-light text-zinc-900 mb-3 tracking-tight">
                
              </h1>
              <p className="text-md text-zinc-600 max-w-2xl mx-auto">
                a selection of my custom development projects showcasing logos, interactive experiences, and ai-powered tools.
              </p>
            </div>
          </motion.div>

          {/* Work Examples */}
          <div className="space-y-16 pb-16">
            {workExamples.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium mb-3">
                    {work.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-zinc-900 mb-3">
                    {work.title}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                    {work.description}
                  </p>
                  
                  {work.type === "interactive" ? (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 text-sm group"
                    >
                      <span className="mr-2">Play Game</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : work.id === "apparel-merch-webstore" ? (
                    <button
                      onClick={() => openModal(work.images || [], 0)}
                      className="inline-flex items-center text-zinc-900 hover:text-zinc-600 transition-colors font-medium text-sm group"
                    >
                      View Gallery
                      <ArrowLeft className="ml-2 w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <Link
                      href={work.link}
                      className="inline-flex items-center text-zinc-900 hover:text-zinc-600 transition-colors font-medium text-sm group"
                    >
                      View Project
                      <ArrowLeft className="ml-2 w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {work.type === "gallery" ? (
                    work.id === "apparel-merch-webstore" ? (
                      /* Arrow navigation layout for apparel like ammo cat */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors cursor-pointer group"
                        style={{ willChange: "transform, opacity" }}
                        onClick={() => openModal(work.images || [], apparelImageIndex)}
                      >
                        <Image
                          src={work.images?.[apparelImageIndex] || ""}
                          alt={`${work.title} view ${apparelImageIndex + 1}`}
                          fill
                          className={`object-cover group-hover:scale-105 transition-all duration-700 ease-in-out ${
                            isApparelTransitioning ? 'opacity-30' : 'opacity-100'
                          }`}
                          style={{ 
                            transform: `scale(${isApparelTransitioning ? '1.02' : '1'})`,
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Navigation arrows for apparel */}
                        {work.images && work.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                prevApparelImage()
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                nextApparelImage()
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            {/* Image indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {apparelImageIndex + 1} / {work.images.length}
                            </div>
                          </>
                        )}
                        
                        {/* Gallery indicator */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          Gallery: {apparelImageIndex + 1} / {work.images?.length || 0}
                        </div>
                      </motion.div>
                    ) : (
                      /* Default gallery layout for other items */
                      <div className="grid grid-cols-2 gap-3">
                        {work.images?.map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: imgIndex * 0.1, ease: "easeOut" }}
                            className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors cursor-pointer group"
                            style={{ willChange: "transform, opacity" }}
                            onClick={() => openModal(work.images || [], imgIndex)}
                          >
                            <Image
                              src={image}
                              alt={`${work.title} example ${imgIndex + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )
                  ) : work.id === "ammocat-game" && work.images ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors bg-white p-8 flex items-center justify-center group cursor-pointer"
                      style={{ willChange: "transform, opacity" }}
                      onClick={() => openModal(work.images || [], ammocatImageIndex)}
                    >
                      <Image
                        src={work.images[ammocatImageIndex] || ""}
                        alt={work.title}
                        fill
                        className={`object-contain transition-all duration-700 ease-in-out ${
                          isAmmocatTransitioning ? 'opacity-30' : 'opacity-100'
                        }`}
                        style={{ 
                          transform: `scale(${isAmmocatTransitioning ? '1.02' : '1'})`,
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                      
                      {/* Navigation arrows for ammo cat */}
                      {work.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              prevAmmocatImage()
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              nextAmmocatImage()
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          
                          {/* Image indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {ammocatImageIndex + 1} / {work.images.length}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors bg-white p-8 flex items-center justify-center"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Image
                        src={work.image || work.images?.[0] || ""}
                        alt={work.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Showcase */}
          <div className="bg-zinc-50 rounded-xl p-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
            >
              <p className="text-sm font-medium text-purple-600 mb-2"></p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Recent brand transformations
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                See how we've helped visionary brands create distinctive identities that challenge conventions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Swivimedia */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <Link href="https://www.swivimedia.com/about" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//swivi4.png"
                        alt="Swivimedia Platform"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">Swivi Media</h3>
                      <p className="text-zinc-600 mb-3">A viral marketing agency connecting brands with micro-influencers to create hundreds of authentic campaign videos.</p>
                      <div className="flex items-center text-purple-600 font-medium">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>



              {/* 1st Class Studios */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <Link href="https://1stclassstudios.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/1stclass//1stclassstudios-min.png"
                        alt="1st Class Studios Website"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors">1st Class Studios</h3>
                      <p className="text-zinc-600 mb-3">Professional recording studio with three state-of-the-art facilities just 45 minutes from Manhattan.</p>
                      <div className="flex items-center text-purple-600 font-medium">
                        Visit Website
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center py-12 border-t border-zinc-200"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-sm text-zinc-600 mb-6 max-w-xl mx-auto">
              Let's collaborate on custom solutions that elevate your brand and captivate your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center border-2 border-yellow-400 bg-transparent text-zinc-900 font-medium py-2 px-5 rounded-full text-sm overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-transparent hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-5 rounded-full border border-zinc-300 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Image Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Navigation arrows */}
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2 z-10"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2 z-10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={modalImages[currentImageIndex] || ""}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                
                {/* Image counter */}
                {modalImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {modalImages.length}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </main>
  )
} 