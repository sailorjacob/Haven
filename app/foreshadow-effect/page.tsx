"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

// Set a fixed target date: April 22, 2035 at midnight
const TARGET_DATE = new Date('2035-04-22T00:00:00Z')

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
    const updateTimer = () => {
      const now = new Date()
      const difference = TARGET_DATE.getTime() - now.getTime()

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25))
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24))
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
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 text-zinc-500 whitespace-pre-line text-center">
        <div className="text-xl font-bold text-red-500 mb-2">
          The World in 2035
        </div>
        <div className="text-4xl font-bold tracking-wider" style={{ minWidth: '200px', letterSpacing: '0.1em' }}>
          {timeLeft}
        </div>
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
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect describes how the significant elements of our present hint at major future events. By examining what's abundant or emphasized in current society, we can glimpse what might become crucial.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Key Predictions for 2035</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Decentralized Systems:</strong> By 2035, we'll see decentralized military and protection services functioning like blockchain networks, with independent nodes tied to governing units. This shift will fundamentally change how security operates globally.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>AI Revolution:</strong> The pace of AI advancement will solve complex problems that seem insurmountable today. However, access to this technology won't be evenly distributed, creating new social divides between those who can harness AI and those who cannot.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Creator Economy:</strong> Individual creators will harness AI to produce work that previously required teams of hundreds. A single person will be able to create billion-dollar movies or develop social platforms in days, not years. Personalized AI-generated music will replace traditional music consumption.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Physical Renaissance:</strong> As digital capabilities expand, physical experiences will become more valued. Education will shift toward embodied learning, traditional universities will transform or become obsolete, and transportation will undergo revolutionary changes focused on physical experience.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Architectural Revolution:</strong> Humanoid robots will become commonplace for construction, allowing fantastic architectural achievements that were previously impossible. New forms of buildings and spaces will emerge as AI and robotics remove current limitations.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Mars Colonization:</strong> By 2035, humans will be living on Mars, primarily through SpaceX's efforts. While early settlements won't be luxurious, they will represent humanity's first permanent foothold beyond Earth, cementing Elon Musk's historical legacy.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Digital Economy Transformation:</strong> Physical cash will disappear entirely, replaced by micropayments for AI services, blockchain transactions, and cryptocurrencies. Bitcoin's Lightning Network and Ethereum will dominate, while new visual interfaces will make complex digital value transfers intuitive.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Privacy Battlegrounds:</strong> Privacy will become a critical issue as neural interfaces and thought-translation technologies emerge. Nations like China may pioneer brain activity monitoring, creating stark divisions between surveillance states and privacy havens. Truth-seeking will become increasingly dangerous yet necessary.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Conflict Zones:</strong> The abundance of advanced weapons today foreshadows inevitable conflicts. High-tension regions will see conventional warfare, while developed nations will experience sophisticated cyberattacks and social destabilization. Companies like Palantir may become crucial in neutralizing threats before they materialize.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            <strong>Human Nature Constants:</strong> Despite technological leaps, human flaws like envy, conspiracy thinking, and tribal division will persist. Not everyone will have access to or understanding of transformative technologies, creating friction between advancing and traditional societies.
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