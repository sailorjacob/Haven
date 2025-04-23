"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function ForeshadowEffectPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timeLeft, setTimeLeft] = useState("")

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setFullYear(targetDate.getFullYear() + 10)

    const updateTimer = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft(`${years}y ${days}d\n${hours}h ${minutes}m\n${seconds}s`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//Wizard1.mp3')
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

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col items-center p-6 font-sans">
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 font-bold text-black whitespace-pre-line text-center">
        {timeLeft}
      </div>
      
      <div className="container max-w-xl mx-auto py-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <p className="text-sm text-zinc-500">{today}</p>
            </div>
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
          
          <div className="space-y-2 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600">
                The Foreshadow Effect:
              </span>
            </h1>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-8"></div>
          
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Decentralized Military: I think there's a future where, like bitcoin, and network states, independent nodes outsource military & civil protection tied to a governing unit of direction, or affiliations.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Music: In the future people will generate, curate, and listen to their own prompted base music on the fly, an individual might collect their own tracks to share like we do with pictures on instagram now.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Physical Revolution: The traditional university role will be obsolete. Health will become more important. Learning will become more physical. Transportation renaissance and bio-medical renaissance.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Architectural Robots: Like iPhones, Tesla humanoids will be everywhere. My prediction is that cool new refinements emerge, such as builder-bots, for like, really cool construction of architecture.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Individual Gods: AI generations will let a make things that used to take teams years. A single person can make, a $1b movie, or a new social app in a day. I predict there will be someone like Bernini, who uses these tools to another factor, like, Mr. Beast, with taste. Lately i've been making ai generated beats which are now indistinguishable from real ones.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Mars: We'll have people living on Mars, Elon Musk and SpaceX's pioneering will pull through. It might not be be glamorous, but it will happen. Competing efforts might come from China or AI, but I predict Bezos will tap out. By that time Elon will be irreversibly historic.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Digital Economy: Physical cash will be gone. Small digital payments, often to AI for services like music or robots. Blockchain and cryptocurrencies, like Bitcoin's Lightning Network & Ethereum. I have ideas for my "Bee's" bitcoin branded transactions concept for Bitcoin L2, visualizing easy ways to wrap a user's head around value. Data control will warrant disputes.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Privacy Battles: Privacy will be a major issue. I predict AI advancements could be used to monitor say, electrical brain activity, especially in places like China. My X handle, killmefxster, reflects the risks of visibility. I've faced threats for speaking out. By 2035, we'll see a divide: those who fought for truth versus those who were clinging to delusion.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Major Conflicts: The Foreshadow Effect warns of conflicts. With weapons everywhere and tensions high, we might see wars, cyberattacks, or unrest. My friend Anthony Haden-Guest's mother escaped the Gestapo, a reminder of how fast things can escalate. I'm preparing for this, though I hope tech like Palantir's can neutralize threats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-8 mb-6"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-6"></div>
          
          <div className="w-full aspect-video mb-8">
            <iframe
              src="https://www.youtube.com/embed/Di9Q3nytB_k?modestbranding=1&rel=0"
              className="w-full h-full rounded-sm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-zinc-600 italic mb-6 text-sm">
            Let's talk about the future{" "}
            <Link href="https://sailorjacob.github.io" className="text-zinc-800 hover:text-zinc-900 underline">
              Visit my profile
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 text-zinc-700 py-2 px-6 text-xs lowercase tracking-widest transition-all duration-300"
          >
            return home
          </Link>
        </motion.div>
      </div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM10 0h1v1h-1zM0 10h1v1H0zM10 10h1v1h-1z' fill='%23ccc' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </main>
  )
} 