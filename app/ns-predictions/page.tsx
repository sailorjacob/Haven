"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

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
    content: "Self-driving fleets and robots will become standard, supporting services like be-loved.app and Moonlight Garden."
  },
  {
    title: "Western Admiration for Eastern Figures",
    content: "A figure from <a href=\"https://chinaskinny.com/blog/kanyewest-immersive-consumer-experience-china\" className=\"text-zinc-800 hover:text-zinc-900 underline\" target=\"_blank\" rel=\"noopener noreferrer\">China</a> (like a technologist advocating for AI-driven governance) or India (e.g., a cultural sensation) will gain a cult-like following in the West. This type of person's mission, or success will resonate with Westerners disillusioned by political gridlock."
  },
  {
    title: "Extinction",
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
    content: "Whether it's a network state outsourcing or a subscription model for individuals or both. Decentralized fit young men could be commanded remotely. Personal security drones with aimbot and sleeping darts could hover over you on a Manhattan street in case a gunman walks up."
  },
  {
    title: "AI as a Modern Voltaire",
    content: "We might see a major rebel figure use AI to blast ideas. Similar to how Voltaire wrote books anonymously."
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
          <h3 className="text-xl font-semibold" style={{ color: "#d9b47b" }}>Golden Predictions</h3>
          <button 
            onClick={toggleExpand} 
            className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 transition-colors"
            aria-label={isExpanded ? "Collapse predictions" : "Expand predictions"}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isExpanded ? (
                <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      <motion.div 
        className="overflow-hidden bg-zinc-50/70 rounded shadow-sm"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginBottom: isExpanded ? "1.5rem" : "0"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          mass: 1,
          velocity: 0,
        }}
      >
        <div className="p-4 space-y-3">
          {[...PREDICTIONS].reverse().map((prediction, idx) => (
            <div key={idx} className="p-3 rounded border border-zinc-100 hover:border-green-100 hover:bg-green-50/30 transition-colors">
              <h4 className="text-base font-semibold text-zinc-700 mb-1">
                {prediction.title}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600">
                {prediction.content}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function NSPredictionsPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCountdownVisible, setIsCountdownVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timeLeft, setTimeLeft] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const backgroundRef = useRef<HTMLDivElement>(null)

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background transform based on scroll
  const getBackgroundTransform = () => {
    const maxScroll = 300; // Lower threshold for a more direct effect
    const scrollProgress = Math.min(scrollY / maxScroll, 1);
    
    // Simpler, more linear transformation
    const scale = 1 - scrollProgress * 0.5; // Less aggressive scale
    const translateX = -scrollProgress * 20; // More subtle movement
    const translateY = -scrollProgress * 20;
    const opacity = 1 - scrollProgress; // Linear fade out

    return {
      transform: `translate(${translateX}%, ${translateY}%) scale(${scale})`,
      opacity: opacity,
      transformOrigin: 'top left',
      transition: 'none' // Remove transition for direct 1:1 movement with scroll
    };
  };

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

  const toggleCountdownVisibility = () => {
    setIsCountdownVisible(prev => !prev);
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col items-center p-6 font-sans">
      <motion.div 
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 text-zinc-500 whitespace-pre-line text-center cursor-pointer"
        animate={{ 
          opacity: isCountdownVisible ? 1 : 0
        }}
        transition={{ duration: 0.4 }}
        onClick={toggleCountdownVisibility}
      >
        <div className="text-xl font-bold text-red-500 mb-2">
          The World in 2035
        </div>
        <div className="text-4xl font-bold tracking-wider" style={{ minWidth: '200px', letterSpacing: '0.1em' }}>
          {timeLeft}
        </div>
      </motion.div>
      
      <div className="container max-w-xl mx-auto py-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-zinc-500 font-bold">April 23, 2025</p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-zinc-600 mr-3">The Beatles x Kanye West | AI Instrumental</p>
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
          </div>
          
          <div className="space-y-2 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600">
                Network State Predictions:
              </span>
            </h1>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-8"></div>
          
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Vision for the Future</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Within ten years, decentralized systems will reshape how we live and work, with AI and cryptocurrency enabling hyper-community models. A superplatform like <a href="https://haven.engineer" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Haven</a> could replace netflix, spotify, and hollywood, supported by physical locations. X could sweep payments.  While <a href="https://be-loved.app/about" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">be-loved.app</a> and <a href="https://roundabout.run/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">roundabout.run</a> enhance transportation and automation. <a href="https://haven.engineer/bitcoinbank" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Branded digital currency</a> will replace physical cash. <a href="https://haven.engineer/moonlight-garden" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Moonlight Garden's</a> scalable model might start to replace McDonald's. AI-generated media will dominate, while the noble ethical "1,000 philosopher army" can outsource governing frameworks.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">The Foreshadow Effect</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect, when things that stand out in my life today hint at what's coming. For instance, the abundant amount of <a href="https://www.hulldailymail.co.uk/news/uk-world-news/vladimir-putins-flesh-eating-thermite-7138889" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">weapons</a>: guns, nukes, drones, and the right to bear arms. To me, it suggests inevitable invitation of conflict in the future, like, be careful what you wish for. Nobody's recycling their weapons and tossing them into volcanos even though I'd love them to.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Reasoning</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            This has been a helpful way for me to make sense of the world. History shows that weapons don't just sit idle; they get used, which makes me concerned for future conflicts. At the same time, technology is moving fast. Last night, I used Grok to solve a seriously complex set of problems in one sweep, involving different programs and myself, opposed to one sheet of paper. So it hit me hard: this tech will solve everything. But progress won't be evenly distributed, for perhaps my lifetime. Human flaws like envy, conspiracy, and doubt will remain, and not everyone will have access or <a href="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//DKEffect.jpg" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">the ability to understand what they don't understand</a>. Tensions, migration, and resource issues will keep things messy. Yet, I'm optimistic. Revolutionaries like Elon Musk and unexpected heroes can always appear.
          </p>

          {/* Prediction Rotator Component */}
          <PredictionRotator />

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Decentralized Military & Security</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            I think there's a future where, like Bitcoin and network states, independent nodes will outsource military & civil protection tied to a governing unit of direction, or affiliations. It will be like subscribing to join, whether it's a network state subscribing or an individual or both. Decentralized fit young men will be commanded remotely. Safety drones with aimbot and sleeping darts will hover over your shoulder while you walk down the street in Manhattan in case a gunman walks up behind you.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Music</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Soon, people will generate, curate, and listen to their own prompted base music on the fly. An individual will collect their own tracks to share like we do with pictures on Instagram now.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Physical Revolution</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The traditional university role will be obsolete. Health will become more important. Learning will become more physical. Transportation renaissance and bio-medical renaissance.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Architectural Robots</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Like iPhones, Tesla humanoids will be everywhere. Special refinements will emerge, such as builder-bots, for open-sourced construction of new architectural castles.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Individual Gods</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            AI generations will let a single person make things that used to take teams years. A single person will make a $1b movie or a new social app in a day. There will be someone like Bernini, who uses these tools to another factor, like Mr. Beast, with taste. Lately, I've been making AI-generated beats which are now indistinguishable from real ones.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Space:</h3>
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
              <p className="text-zinc-800 text-sm font-medium mb-2">Reverse Image Search</p>
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
                  alt="Kim Kardashian with a Tesla Optimus" 
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
      
      {/* Background SVG */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div 
          ref={backgroundRef} 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url("https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//BACKGROUND.svg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...getBackgroundTransform()
          }}
        ></div>
      </div>
    </main>
  )
} 