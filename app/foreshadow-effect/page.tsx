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
    content: "Digital-first groups will boom. Haven will hook people up in new ways."
  },
  {
    title: "AI Media",
    content: "AI will crank out big chunks of media, top-notch, locked on blockchain."
  },
  {
    title: "Automation",
    content: "Self-driving fleets and robots will run the show, tied to be-loved.app and Moonlight Garden."
  },
  {
    title: "Ethical Governance",
    content: "Global crews will steer AI ethics, keeping it human-first."
  },
  {
    title: "Western Admiration for Eastern Figures",
    content: "Some slick leader from China or India will pull a cult vibe in the West—discipline, harmony, grit."
  },
  {
    title: "Extinction of Traditional Retail",
    content: "Gas stations, liquor stores, smoke shops, fast food drive-thrus—they're toast. Cloud-kitchen brands like Moonlight Garden, lean and healthy, will take over."
  },
  {
    title: "AI Translating Thoughts",
    content: "AI will read brain waves into thoughts, maybe off security cams with tricked-out sensors. Facial recognition will get dirty. It will be a problem."
  },
  {
    title: "Apple's Decline",
    content: "Apple's done. App Store and device locks will crack from dumb censorship moves. X might drop better phones, freer systems."
  },
  {
    title: "1,000 Philosopher Armies",
    content: "Elites will farm out and mold new rule-sets. 'Knights of the Round Table' will emerge."
  },
  {
    title: "Cashless > Designless > Constant",
    content: "Physical cash and clunky crypto will die. Smooth payment trails will juice your AI."
  },
  {
    title: "Advanced Security for Individuals",
    content: "Security tech will level up and go personal. When being seen means risk."
  },
  {
    title: "AI as a Modern Voltaire",
    content: "Someone or a squad will use AI to blast big ideas at folks crushed by control freaks in politics and religion. AI will spark the next wave."
  }
];

// Prediction Rotator Component
function PredictionRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextPrediction = () => {
    setCurrentIndex((prev) => (prev + 1) % PREDICTIONS.length);
  };

  const prevPrediction = () => {
    setCurrentIndex((prev) => (prev - 1 + PREDICTIONS.length) % PREDICTIONS.length);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextPrediction();
      }, 8000);
    }
  };

  useEffect(() => {
    resetAutoPlay();
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  const handleClick = () => {
    nextPrediction();
    resetAutoPlay();
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-zinc-800">Predictions</h3>
        <div className="flex gap-2">
          <button 
            onClick={prevPrediction} 
            className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 transition-colors"
            aria-label="Previous prediction"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={toggleAutoPlay} 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${isAutoPlaying ? 'bg-zinc-300' : 'bg-zinc-200'} hover:bg-zinc-300 transition-colors`}
            aria-label={isAutoPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
          >
            {isAutoPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/>
                <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5V19L19 12L5 5Z" fill="currentColor"/>
              </svg>
            )}
          </button>
          <button 
            onClick={nextPrediction} 
            className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 transition-colors"
            aria-label="Next prediction"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div 
        className="h-48 relative overflow-hidden bg-zinc-100/50 rounded p-6 cursor-pointer"
        onClick={handleClick}
      >
        <div className="absolute bottom-2 right-2 flex gap-1">
          {PREDICTIONS.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-zinc-400' : 'bg-zinc-200'}`}
            />
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col"
          >
            <h4 className="text-base font-semibold text-zinc-800 mb-2">
              {PREDICTIONS[currentIndex].title}
            </h4>
            <p className="text-zinc-600 text-sm leading-relaxed">
              {PREDICTIONS[currentIndex].content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

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
          
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Vision for the Future</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            In ten years, decentralized systems will reshape how we live and work. AI and cryptocurrency will power community-driven models. A superplatform like Haven will replace Netflix, Spotify, and Hollywood, backed by physical spots. X will handle payments. Be-loved.app and roundabout.run will boost transportation and automation. Branded digital currency will kill physical cash. Moonlight Garden's scalable setup will feed these communities. AI-generated media will dominate. Ethical factions, like a "1,000 philosopher army," will shape the rules.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">The Foreshadow Effect</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect is my mental trick where stuff that pops out now hints at what's next. Take weapons—guns, nukes, drones, and the right to bear arms. They're everywhere, screaming future conflict. Be careful what you wish for.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Reasoning</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            This model sorts out the world for me. History says weapons don't just sit there; they get used. That bugs me about what's coming. Tech's speeding up. Last night, I used Grok to crack a messy problem set in one go—different programs, me, all synced up. Blew my mind. This tech will fix everything. But it won't hit everyone the same. Human crap like envy, conspiracy, and doubt sticks around. Access stays uneven, and not everyone gets what they don't get. Tensions, migration, resources—they'll keep it chaotic. Still, I'm hopeful. Game-changers like Elon Musk or random heroes can pop up.
            Ender's Game nails it for me. Ender, the top battle kid, got duped into a real war, thinking it was practice. Had to go hardcore against his nature. Now, someone that good might get stuck, blocked by systems. If you're the best at something, you should be lifted up, not held back.
          </p>

          {/* Prediction Rotator Component */}
          <PredictionRotator />

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Decentralized Military & Security</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Independent units will run military and civil protection, linked to governing crews or networks you join. Decentralized fit guys will take remote orders. Safety drones with aimbot and sleeping darts will hover over you on a Manhattan street if some gunman rolls up.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Music</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            People will whip up, curate, and jam to their own prompted beats on the fly, sharing tracks like Instagram pics.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Physical Revolution</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Old-school universities will flop. Health and hands-on learning will climb. Transportation and bio-medical breakthroughs will hit hard.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Architectural Robots</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Like iPhones, Tesla humanoids will flood the place. Builder-bots will raise architectural castles with fresh twists.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Individual Gods</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            AI will let one person build what used to take teams years—a $1b movie or a social app in a day. A taste-master like Bernini or Mr. Beast will go nuts with it. I've been cooking AI beats lately—can't tell they're not real.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Mars</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            People will live on Mars, thanks to Elon Musk and SpaceX. It'll be rough, but it'll happen. China or AI might compete, but Bezos is out. Elon's locked in history.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Digital Economy</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Physical cash will vanish. Tiny digital payments to AI for music or robots will be normal. Blockchain and crypto like Bitcoin's Lightning Network & Ethereum will roll. Data fights will flare up.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Privacy Battles</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Privacy will get hammered. AI will snoop brain waves, especially in places like China, turning thoughts into data. Privacy rules will matter big time. Kanye West said, "I don't think people are going to talk," and with AI, it might go quiet, tech-run. Nicole Benham called it a culture of silent assumptions. Andy Warhol's "15 minutes of fame" now means no one can stop anyone from knowing everything about you. Some will lean into selfies, TikToks, podcasts—won't date without a profile. Others, like Satoshi, will fight for shadows. Voltaire's secret writings dodged heavy laws; now we need room for those pushing back on total exposure.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Major Conflicts</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect screams trouble. Weapons everywhere, tensions jacked—wars, cyberattacks, or riots will hit. My buddy Anthony Haden-Guest's mom outran the Gestapo—proof things flip fast. I'm gearing up, hoping tech like Palantir's shuts it down.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Screenshots</h3>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            I'll slap screenshots at the bottom or in the mix:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">Supreme Leader of Iran tweets</p>
              <div className="h-32 flex items-center justify-center bg-zinc-200 rounded">
                <p className="text-xs text-zinc-500 italic">Image placeholder</p>
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
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">Kanye West Presidential Announcement Tweet</p>
              <div className="h-32 flex items-center justify-center bg-zinc-200 rounded">
                <p className="text-xs text-zinc-500 italic">Image placeholder</p>
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">AOC's Elon Heil Seig Assertion</p>
              <div className="h-32 flex items-center justify-center bg-zinc-200 rounded">
                <p className="text-xs text-zinc-500 italic">Image placeholder</p>
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">My facial recognition reverse image search</p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://jsc15.pimeyes.com/proxy/d1b37ea13a085931c62adfc6f8bcf2365e7c39233e50c882a39ab47a98d1eb79c4ae1b1af921688331b0477b3d50cba12eaafe3150a58fcd4171663da914eb75dedd8a3798df2f5228093fa17a334f2bedde790d3e47b2c67e144a79498655f3a6350d8011c35e02d1e7db40e4118574bafc4a3ab4d4cacec421a2878448fbeae3072cb3b1b71cc05724f7d1299454faef468824de2f89a54ed12357fa2a7d550dc45ce3b9291aeb634eedac43abd8fe03e9d5ea7cf6b8dd7c2a5e674f3e7960c0d31e410e0d1039bcbfb12043083f351c222d1b649059dde958699c1b167b26f403066c26427e9e688a394ac69fe63d982abedc27ab778477acfd59393e70aeed0ae426246278b3884042f382c792c91767636d4a8508d8080acd2fbd7f9d381509b14aa3f075db1b057a8e993a2f4fe746a0cc6f60d2f1d614a1f2f2ead312c5b89f0b3f662a182e6c1f9e36e1759966d4aa7618ae6f833bad53c80f039643fd40f1211273743c482d27998c57b30fadb0d8f8dd25d7cb8e791de1dd394c90" 
                  alt="Facial recognition reverse image search results" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">The Dunning-Kruger Effect Chart</p>
              <div className="h-32 flex items-center justify-center bg-zinc-200 rounded">
                <p className="text-xs text-zinc-500 italic">Image placeholder</p>
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