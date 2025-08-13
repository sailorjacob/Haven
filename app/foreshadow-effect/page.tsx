"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect, useMemo } from "react"
import { Hexagon, ChevronDown, Menu, X } from "lucide-react"
import ProcessDropdown from "@/components/ProcessDropdown"

// Set a fixed target date: April 22, 2035 at midnight
const TARGET_DATE = new Date('2035-04-22T00:00:00Z')

// Prediction data array
const PREDICTIONS = [
  {
    title: "Decentralized Communities",
    content: "Digital-first communities will grow, with platforms like Haven designing new living structures."
  },
  {
    title: "AI Media",
    content: "Significant portions of high-quality media, like movie series, will be AI."
  },
  {
    title: "Automation",
    content: "Self-driving fleets and robots will become standard, enabling services like be-loved.app and Moonlight Garden."
  },
  {
    title: "Ethical Governance",
    content: "Factions of elite may emerge to guide AI ethics, ensuring technology serves humanity."
  },
  {
    title: "Western Admiration for Eastern Figures",
    content: "A figure from China (like a technologist advocating for AI-driven governance) or India (e.g., a cultural sensation) will gain a cult-like following in the West. This type of person's mission, or success will resonate with Westerners disillusioned by political gridlock."
  },
  {
    title: "Extinction of Traditional Retail",
    content: "Gas stations, liquor stores, smoke shops, and fast food drive-thrus will largely go extinct. McDonald's will be replaced by a more nimble and healthier cloud-kitchen brand such as Moonlight Garden."
  },
  {
    title: "Thought Translation",
    content: "AI will be able to translate electric brain activity into translating thoughts, perhaps from even a security camera with special sensors. Facial recognition will be used in dirty ways. It will be a problem."
  },
  {
    title: "Apple:",
    content: "Apple will lose its reign, somewhere along the line there'll be a fracturing of the App Store, and physical device monopoly. This could happen due to increasingly polarizing censorship policies. A company like X could have its robots pop out better new phones with a less restrictive ecosystem."
  },
  {
    title: "1,000 Philosopher Armies",
    content: "1,000 philosopher armies or 'Knights of the round table' elite will outsource and shape new governance."
  },
  {
    title: "Cashless > Designless > Constant",
    content: "Physical cash will disappear, bad crypto UI will disappear, replaced by network state branded transactions. Constant payments will appear, the tokens powering your AI."
  },
  {
    title: "Decentralized Military & Security",
    content: "Whether it's a network state outsourcing or a subscription model for individuals or both. Decentralized servicemen could be commanded remotely. Personal security drones with aimbot and sleeping darts could hover over you on a Manhattan street in case a gunman walks up."
  },
  {
    title: "AI as a Modern Voltaire",
    content: "We might see someone or a team use AI to blast ideas. Similar to how VOltaire."
  },
  {
    title: "Death of TikTok & Instagram",
    content: "Tiktok and instagram will die. They are already infected by ugly cash-out features like cheap e-stores, and livestreaming emoji gifts."
  },

];

// Prediction Rotator Component
function PredictionRotator() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold" style={{ color: "#d9b47b" }}>Golden Predictions</h3>
          <button 
            onClick={toggleExpand} 
            className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 transition-colors"
            aria-label={isExpanded ? "Collapse predictions" : "Expand predictions"}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isExpanded ? (
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      <motion.div 
        className="overflow-hidden bg-zinc-100/50 rounded"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginBottom: isExpanded ? "1.5rem" : "0"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30
        }}
      >
        <div className="p-6 space-y-6">
          {PREDICTIONS.map((prediction, idx) => (
            <div key={idx} className="pb-4 border-b border-zinc-200 last:border-0">
              <h4 className="text-lg font-semibold text-zinc-800 mb-2">
                {prediction.title}
              </h4>
              <p className="text-zinc-600 text-base leading-relaxed">
                {prediction.content}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function ForeshadowEffectPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timeLeft, setTimeLeft] = useState("")

  const getSeededRandomColor = (seed: string) => {
    const hash = seed.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)
    const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
    return colors[Math.abs(hash) % colors.length]
  }

  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  // Calculate the publication date - 10 years before the target date
  const publicationDate = new Date('2025-04-22T00:00:00Z')
  const today = publicationDate.toLocaleDateString('en-US', {
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
      // const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft(`${years}y ${days}d\n${hours}h ${minutes}m`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000) // Update every minute instead of every second

    return () => clearInterval(interval)
  }, [])

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//Kanye%20West%20x%20The%20Beatles.mp3')
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
      <header onMouseLeave={() => setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200 relative">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/studio" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative flex items-center" onMouseEnter={() => setProcessOpen(true)}>
                  <Link href="/" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  <motion.span
                    className="ml-1"
                    animate={{ rotate: processOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                  </motion.span>
                </div>
                <Link
                  href="https://designforstartups.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  design for startups
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm"
              >
                Start
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>
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
                  href="https://designforstartups.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  design for startups
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${navColors.contact}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="pt-24" />
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
              <p className="text-sm text-zinc-600 font-medium">The Beatles x Kanye West | AI Instrumental</p>
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
          
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Vision for the Future</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Within ten years, decentralized systems will reshape how we live and work, with AI and cryptocurrency enabling hyper-community models. A superplatform like Haven could replace netflix, spotify, and hollywood, supported by physical locations. X could sweep payments.  While be-loved.app and roundabout.run enhance transportation and automation. Branded digital currency will replace physical cash. Moonlight Garden's scalable model might start to replace McDonald's. AI-generated media will dominate, while the noble ethical "1,000 philosopher army" can outsource governing frameworks.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">The Foreshadow Effect</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect, when things that stand out in my life today hint at what's coming. For instance, the abundant amount of weapons: guns, nukes, drones, and the right to bear arms. To me, it suggests inevitable invitation of conflict in the future, like, be careful what you wish for. Nobody's recycling their weapons and tossing them into volcanos even though I'd love them to.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Reasoning</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            This has been a helpful way for me to make sense of the world. History shows that weapons don't just sit idle; they get used, which makes me concerned for future conflicts. At the same time, technology is moving fast. Last night, I used Grok to solve a seriously complex set of problems in one sweep, involving different programs and myself, opposed to one sheet of paper. So it hit me hard: this tech will solve everything. But progress won't be evenly distributed, for perhaps my lifetime. Human flaws like envy, conspiracy, and doubt will remain, and not everyone will have access or <a href="#dunning-kruger" className="text-zinc-800 hover:text-zinc-900 underline">the ability to understand what they don't understand</a>. Tensions, migration, and resource issues will keep things messy. Yet, I'm optimistic. Revolutionaries like Elon Musk and unexpected heroes can always appear.
          </p>

          {/* Prediction Rotator Component */}
          <PredictionRotator />

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Decentralized Military & Security</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            I think there's a future where, like Bitcoin and network states, independent nodes will outsource military & civil protection tied to a governing unit of direction, or affiliations. It will be like subscribing to join, whether it's a network state subscribing or an individual or both.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Music</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            In the future, people will generate, curate, and listen to their own prompted music on the fly. An individual will collect their own tracks to share like we do with pictures on Instagram now.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Physical Revolution</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The traditional university role will be obsolete. Health will become more important. Learning will become more physical. Transportation renaissance and bio-medical renaissance.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Architectural Robots</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Like iPhones, Tesla humanoids will be everywhere. Cool new refinements will emerge, such as builder-bots, for really cool construction of architectural castles.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Individual Gods</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            AI generations will let a single person make things that used to take teams years. A single person will make a $1b movie or a new social app in a day. There will be someone like Bernini, who uses these tools to another factor, like Mr. Beast, with taste. Lately, I've been making AI-generated beats which are now indistinguishable from real ones.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Space</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Rockets will be able to fly us anywhere across the globe in 30 minutes, Blue Origin will copy SpaceX but i predict they might tap out with competition from China, etc
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Digital Economy</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Physical cash will be gone. Small digital payments, often to AI for services like music or robots. I have ideas for bitcoin branded transactions. On L2, visualizations to wrap a user's head around value.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Privacy Battles</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Privacy will be a major issue. I predict AI advancements could be used to monitor say, electrical brain activity, especially in places like China. I predict we'll be able to translate thoughts. So Privacy policies will become more obviously important.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Major Conflicts</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect warns of conflicts. With weapons everywhere and tensions high, we will see wars, cyberattacks, or unrest. My friend Anthony Haden-Guest's mother <a href="https://www.theguardian.com/news/2002/oct/16/guardianobituaries.nicholasdejongh" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">escaped the Gestapo</a>, my reminder of how fast things can escalate. I'm preparing for this, though I expect hyper-teams like Palantirians to be good at neutralizing threats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">My PimEyes reverse facial-recognition image search</p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//reverse-image.webp" 
                  alt="Reverse Image Search" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">Kim Kardashian with a Tesla Optimus</p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//kimk.JPG" 
                  alt="Kim Kardashian with Tesla Optimus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div id="dunning-kruger" className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">The Dunning-Kruger Effect Chart</p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//DKEffect.jpg" 
                  alt="The Dunning-Kruger Effect Chart" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-8 mb-6"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-6"></div>
          
          <div className="w-full aspect-video mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://i0.wp.com/jacobhalestudio.net/wp-content/uploads/2024/11/kanye-beatles.jpg?w=592&ssl=1"
                alt="Kanye West and The Beatles" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
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