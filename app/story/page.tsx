"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useRef } from "react"

export default function StoryPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//Cities%20-%20You%27re%20My%20Escape%20-%20jacob2fire.wav')
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
    <main className="min-h-screen bg-white text-zinc-700 flex flex-col items-center justify-center p-6 font-sans">
      <div className="container max-w-xl mx-auto py-8 px-4 md:px-8 flex flex-col items-center">
        <div className="mb-4 flex items-center justify-between w-full">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-600">
            ← home
          </Link>
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
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 w-full flex flex-col items-center"
        >
          <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-md shadow-md">
            <img 
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//aa47752c-cebb-422c-8755-0a90c24d1a38.400x400.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
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
            className="overflow-hidden w-full"
          >
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              I helped shape the business model for Fooji, a multi-million dollar ad startup, by leveraging Vine's early days. We were interviewed by Robert Scoble. I find talent and trends early. I've worked in LA's music scene, sleeping on couches to support artists like Kevin George, and in New York's art world, rubbing shoulders with figures like Travis Scott. My photography has been featured in The Times, and I've designed for major artists and others.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              But it hasn't been easy. I faced a false arrest orchestrated by a former employer, Libbie Mugrabi, leading to a $5 million lawsuit (Daily Beast). My case, backed by a lawyer who's taken on dictators, will be a clean sweep. Currently, her second lawyer is trying to drop out of the court. I've also lost someone I loved to a heroin overdose, coming home from my arrest to find her, before catching up.
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Currently, I'm building be-loved.app, a platform to modernize non-emergency medical transportation, aiming to replace outdated systems with tech-driven efficiency. I'm also envisioning Haven, a network state that combines AI-generated media—think Netflix and Spotify with ai—with dark-styled accommodation living spaces as nice as Soho House, or Disney, plus art galleries rivaling Gagosian. Haven would be a hive of 100,000 creators, producing billion-dollar films and music while living in resort-like compounds (Haven Engineer).
            </p>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              These experiences have taught me resilience, creativity, and adaptability. I've de-escalated dangerous situations, like when I calmed an armed robbery in college, and I've predicted trends early, like naming a high school business after Elon Musk in 2015. I'm passionate about freedom, ethics, and privacy, and I want to build at a Network State to create a future where technology and art thrive together.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 