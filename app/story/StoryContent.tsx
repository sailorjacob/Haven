"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function StoryContent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const imageSequence = [
    "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//story1.jpg",
    "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//story2.jpg",
    "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//story4.jpg",
    "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//story3.jpg",
    "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//aa47752c-cebb-422c-8755-0a90c24d1a38.400x400.jpg"
  ]

  useEffect(() => {
    if (currentImageIndex < imageSequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
      }, 400); // Faster animation - reduced from 600ms to 400ms
      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [currentImageIndex, imageSequence.length]);

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//Cities%20:%20You\'re%20My%20Escape%20-%20jacob2fire.wav')
      audioRef.current.onended = () => {
        setIsPlaying(false)
      }
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <main className="min-h-screen bg-white text-zinc-700 flex flex-col items-center justify-start p-4 sm:p-6 font-sans">
      <div className="container max-w-xl mx-auto pt-12 pb-8 px-2 sm:px-4 md:px-8 flex flex-col items-center w-full">
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <Link href="/" className="text-zinc-400 hover:text-zinc-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 w-full flex flex-col items-center"
        >
          <div className="w-full max-w-[24rem] h-auto aspect-square mx-auto mb-6 overflow-hidden rounded-md shadow-md">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={imageSequence[currentImageIndex]}
                alt="Profile" 
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut" 
                }}
              />
            </AnimatePresence>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-6 w-full">
            <button 
              onClick={handlePlayPause}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 transition-colors duration-300"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              <svg 
                className="w-5 h-5 text-zinc-700" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                {isPlaying ? (
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
            </button>
          </div>
          
          <button 
            onClick={toggleExpand}
            className="flex items-center gap-2 text-zinc-400 text-sm mb-4 hover:text-zinc-600 transition-colors"
          >
            {isExpanded ? "Hide story" : "Read story"}
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            >
              <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20 
            }}
            className="overflow-hidden w-full px-2 sm:px-0"
          >
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              I helped shape the business model for Fooji, a multi-million dollar ad startup, by leveraging Vine's early days. We were interviewed by Robert Scoble. I find talent and trends early. I've worked in LA's music scene, sleeping on couches to support artists like Kevin George, and in New York's art world, learning from Andy Warhol's old friends. My photography has been featured in The Times, and I've designed for major artists and others.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              But it hasn't been easy. I faced a false arrest orchestrated by a former employer, Libbie Mugrabi, leading to a $5 million lawsuit (Daily Beast). My case, backed by a lawyer who's taken on dictators, will be a clean sweep. Currently, her second lawyer is trying to drop out of the court. I've also lost someone I loved to a heroin overdose, coming home from my arrest to find her.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Currently, I'm building be-loved.app, a platform to modernize non-emergency medical transportation, aiming to replace outdated systems with tech-driven efficiency. I'm also envisioning Haven, a network state that combines AI-generated media, like netflix x spotify with ai—with dark-styled accommodation living spaces as nice as Soho House, or Disney, and art an art gallery network like Gagosian. Haven would be a hive of 100,000 creators, producing billion-dollar films and music while living in resort-like compounds.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              I've de-escalated dangerous situations, like when I calmed an armed robbery with a college friend, and I've predicted trends early, like naming a high school business after Elon Musk in 2015. I'm passionate about freedom, ethics, and privacy, and I want to build a Network State.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Ender's Game, is my favorite book. Ender was the best battle student, tricked into fighting a real war thinking it was a simulation, forced to be more ruthless than his natural state. Today, someone like Ender might know they're the best but be blocked by systems at every turn. I think in the many cases where an individual is the best in the world at something, they should be championed rather than nerfed.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 