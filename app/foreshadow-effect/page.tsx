"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { FullscreenButton } from "@/components/fullscreen-button"
import SectionDivider from "@/components/section-divider"

// Set a fixed target date: April 22, 2035 at midnight
const TARGET_DATE = new Date('2035-04-22T00:00:00Z')

export default function ForeshadowPage() {
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
    <main className="px-4 md:px-8 py-10 max-w-6xl mx-auto">
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-zinc-900">Foreshadow Effect</h2>
          <FullscreenButton />
        </div>
        
        <div className="prose prose-zinc">
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Vision for the Future</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            In ten years, decentralized systems will fundamentally reshape how we live and work. AI and cryptocurrency will enable new community-driven models that replace traditional institutions. A superplatform like Haven will emerge to replace Netflix, Spotify, and Hollywood, supported by a network of physical locations worldwide. Platforms like X will revolutionize payments, while innovations like be-loved.app and roundabout.run will transform transportation and automation. Branded digital currencies will completely replace physical cash, and ventures like Moonlight Garden will create scalable food production models for these communities. AI-generated media will become the dominant form of content, with ethical frameworks developed by specialized groups like a "1,000 philosopher army."
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">The Foreshadow Effect</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect describes how current anomalies or unusual trends often predict future norms. Today's proliferation of weapons - from personal firearms to nuclear arsenals, military drones, and the cultural emphasis on the right to bear arms - suggests an inevitable invitation to conflict. History shows that the presence of weapons eventually leads to their use, making this trend particularly concerning for our collective future.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Reasoning</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-8 text-sm">
            This perspective helps me make sense of today's world while anticipating tomorrow's. While advanced technology like AI promises to solve complex problems (as I experienced using Grok to solve multi-layered challenges), progress will remain unevenly distributed. Human flaws like envy, conspiracy thinking, and misunderstanding will persist. Resource constraints, climate issues, and migration will create tensions that technology alone cannot solve. However, visionaries like Elon Musk demonstrate that transformative change is possible even amid these challenges. The next decade will feature both unprecedented technological advancement and social friction as we adapt to these rapid changes.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Predictions</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Decentralized Communities:</strong> Digital-first communities will become mainstream, with platforms like Haven offering comprehensive alternatives to current entertainment and social systems.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>AI-Generated Media:</strong> AI will produce most mainstream media, with blockchain technology ensuring proper attribution and compensation.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Automation Revolution:</strong> Self-driving vehicle fleets and humanoid robots will become standard infrastructure, supporting services like be-loved.app's care network and Moonlight Garden's food production.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Ethical AI Governance:</strong> Global initiatives will emerge to guide AI development, with specialized ethics committees ensuring technology serves humanity rather than exploiting it.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Cross-Cultural Leadership:</strong> A charismatic Eastern figure (from China or India) will gain widespread Western influence, offering alternative governance models that blend technology with traditional values, appealing to those disillusioned with Western political gridlock.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Retail Transformation:</strong> Traditional retail establishments like gas stations, liquor stores, and fast food chains will largely disappear, replaced by more efficient systems like Moonlight Garden's health-focused cloud kitchens.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Neural Interface Technology:</strong> AI systems will gain the ability to interpret brain activity, creating new privacy concerns and surveillance capabilities. Facial recognition will expand in concerning ways, potentially leading to new social norms around privacy protection. Economic instability could exacerbate these issues, potentially creating dystopian debt collection scenarios.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Apple's Decline:</strong> Apple will lose its dominant market position as its App Store monopoly fractures and competitors offer less restrictive alternatives. Companies like X may leverage their manufacturing and AI capabilities to create more open technology ecosystems.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-2 text-sm">
            <strong>Elite Advisory Networks:</strong> "1,000 Philosopher Armies" or "Knights of the Round Table" consisting of specialized experts will emerge to develop governance frameworks for complex technological and social challenges.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            <strong>Digital Currency Evolution:</strong> Physical cash will disappear completely, followed by early cryptocurrencies with poor design. These will be replaced by specialized tokens that enable continuous micropayments for AI services and other utilities.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Decentralized Security Models</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Security and protection services will adopt blockchain-inspired decentralized models, with independent security nodes subscribing to coordinated networks. Personal protection will evolve to include AI-powered drones with non-lethal defensive capabilities providing constant individual security in urban environments.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Music Industry Transformation</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The music industry will shift to a model where individuals generate, curate, and share their own AI-prompted music. Personal music collections will become social content, similar to how photographs are shared on today's platforms like Instagram.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Education and Physical Renaissance</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Traditional universities will become largely obsolete as learning becomes more physical and experiential. Health optimization will gain prominence alongside intellectual development, while transportation and biomedical fields will experience revolutionary advances.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Construction Robotics</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Humanoid robots like Tesla's Optimus will become ubiquitous, with specialized variants emerging for construction and architecture. These "builder-bots" will enable the creation of complex, customized structures that were previously impractical or impossible.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Individual Creative Empowerment</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            AI tools will enable individuals to create content that previously required large teams and substantial resources. A single person will be able to produce a billion-dollar movie or develop a new social application within days. Certain individuals with exceptional taste and vision will leverage these tools to achieve unprecedented creative success, similar to historical figures like Bernini or contemporary creators like Mr. Beast. AI-generated music has already reached a point where it's indistinguishable from human-created work, as demonstrated in my <a href="https://www.youtube.com/watch?v=Ax_HSP9pB5U" className="text-blue-600 hover:text-blue-800 underline">recent projects</a>.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Mars Colonization</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Human settlement on Mars will become reality through SpaceX's efforts, though initial conditions will be austere rather than luxurious. Competition may emerge from Chinese initiatives or AI-driven programs, but Elon Musk's pioneering work will secure his place in history regardless of who ultimately succeeds.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Digital Economy Evolution</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Physical currency will completely disappear, replaced by digital payment systems enabling continuous micropayments to AI services and robotic systems. Blockchain technologies like Bitcoin's Lightning Network and Ethereum will underpin this new economy, while control over personal data will become a major point of contention.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Privacy Conflicts</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            Privacy will emerge as one of the defining issues of the next decade. Advanced AI systems capable of monitoring electrical brain activity will create unprecedented surveillance capabilities, particularly in authoritarian regimes. The ability to translate thoughts into data will necessitate new privacy protections and policies. By 2035, society will be divided between those who fought for truth and transparency versus those who clung to delusion and deception.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Geopolitical Conflicts</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            The Foreshadow Effect suggests serious conflicts ahead, given today's proliferation of weapons and rising tensions. We should expect conventional warfare, cyberattacks, and civil unrest. Historical precedents like my friend Anthony Haden-Guest's mother escaping the Gestapo remind us how quickly societal stability can collapse. While I'm preparing for potential conflicts, I remain hopeful that technologies like Palantir's systems will help neutralize major threats.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Visual Evidence</h3>
          
          <p className="text-zinc-600 leading-relaxed mb-6 text-sm">
            To document these predictions, I'll include screenshots of current trends that foreshadow future developments:
          </p>
          <ul className="text-zinc-600 list-disc pl-5 mb-6 text-sm">
            <li>Social media statements from the Supreme Leader of Iran</li>
            <li>Kim Kardashian interacting with a Tesla Optimus robot</li>
            <li>Kanye West's presidential campaign announcement</li>
            <li>Alexandria Ocasio-Cortez's comments about Elon Musk</li>
            <li>Evidence of my own personal data vulnerability through facial recognition</li>
            <li>The Dunning-Kruger Effect illustrating cognitive biases affecting technological adoption</li>
          </ul>
        </div>
      </section>
      
      <SectionDivider />
    </main>
  )
} 