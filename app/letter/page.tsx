"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useRef } from "react"

export default function LetterPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null)

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handlePlayPause = () => {
    if (!speechRef.current) {
      // Initialize speech synthesis
      const text = document.querySelector('main')?.textContent || ''
      speechRef.current = new SpeechSynthesisUtterance(text)
      speechRef.current.rate = 0.9 // Slightly slower for better comprehension
      speechRef.current.pitch = 1
      speechRef.current.volume = 1
      
      // Set up event handlers
      speechRef.current.onend = () => {
        setIsPlaying(false)
      }
      speechRef.current.onerror = () => {
        setIsPlaying(false)
      }
    }

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    } else {
      window.speechSynthesis.speak(speechRef.current)
      setIsPlaying(true)
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col items-center p-6 font-sans">
      <div className="container max-w-xl mx-auto py-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-zinc-500">{today}</p>
            <a 
              href="https://open.spotify.com/track/2uxOJ85W5IkKNOMTAGwq6p?si=6f5aaa130ca44557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 transition-colors duration-300"
            >
              <svg 
                className="w-5 h-5 text-zinc-700" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600">
              Technology, Music, Politics, and Art: A Vision for the Future
            </span>
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-6"></div>
          
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
            Considering the significant overlap of <span className="font-medium text-zinc-800">technology</span>, <span className="font-medium text-zinc-800">music</span>, <span className="font-medium text-zinc-800">politics</span>, and <span className="font-medium text-zinc-800">art</span>, here's a recount of observations, personal experience, and aspirations of a more free and unrestricted future.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            In this conceptual framework, both <span className="font-medium text-zinc-800">technology</span> and <span className="font-medium text-zinc-800">music</span> fall on the positive end of an idyll chart, in contrast to <em>Dark Ages</em> mentality. As innovations like robotic home construction, abundant energy, and automated farms become reality, society's focus shifts toward health, art, and personal expression. This trend suggests a future where curating our personality and designing our environment only become more pertinent to modern experience, enabled by technological abundance.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            On July 4, 2020, <a href="https://x.com/elonmusk/status/1279577069005897728" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">Kanye West</span></a> tweeted his intention to run for President of the United States, a post with a quick supporting reply from <a href="https://www.vanityfair.com/style/2020/07/elon-musk-kanye-west-president-support-again?srsltid=AfmBOopgZTPSLbEaccn7ZHeI-3G2YpHciG6UkmY3EH8ko_a1x7n0Q14G" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">Elon Musk</span></a>: <em>"You have my full support!"</em> This moment, while seemingly impulsive, marks a fascinating convergence of entertainment, technology, and politics.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Kanye West's influence extends beyond this event, his music has shaped artists from <span className="font-medium text-zinc-800">Paul McCartney</span> to <span className="font-medium text-zinc-800">Billie Eilish</span>. However, his suspension from social media for provocative posts, including the ones intentionally anti-Semitic, highlight the tension between artistic persona (or persona) and public perception. Despite this, Kanye's work reflects a deconstructive creativity closer to a civil rights advocate than the negative labels often attached to him. This is consistent with all of our best, merely exaggerated in raw performance art.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Small actions can yield profound impacts. For Kanye, 'Putting on the red hat' is his version of being Rosa Parks, or Socrates in his commitment to truth. A few years back, I shot a music video for, and gave my old laptop to a 15-year-old aspiring artist. He used it to make a song that has over <a href="https://open.spotify.com/track/2uxOJ85W5IkKNOMTAGwq6p?si=7b0f339620f64338" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">11 million Spotify streams</span></a>. Turning a $500 donation into $50,000 of value.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Moments like these inspire me, as does listening to podcasts like David Senra's <a href="https://www.founderspodcast.com/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Founders Podcast</a>. I'm drawn by the power a music artist like <span className="font-medium text-zinc-800">The Weeknd</span> has to bring over 100,000 fans to a single concert. This evokes potential for once mysterious low-lifes, or designed figures to command influence like political leaders.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Current political figures like <span className="font-medium text-zinc-800">AOC</span> and <span className="font-medium text-zinc-800">Bernie Sanders</span> often oppose technological progress, without realizing it. Prioritizing their own control over innovation, or risking future security & freedom. I look for a return to a <em>"Wild West"</em> ethos, unrestricted exploration, free from bureaucratic suits and rules that favor the slow.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Meanwhile, dangerous double standards abound: men are attacked for past behavior, while platforms like <span className="font-medium text-zinc-800">OnlyFans</span> are promoted. This dynamic, alongside the stagnation of apps like <span className="font-medium text-zinc-800">Tinder</span> and <span className="font-medium text-zinc-800">TikTok</span>, fuels my desire to build better alternatives and design digital landscapes - I'm also ready to replace the overflowing gas station, fast-foods, smoke shop, and liquor stores on every street corner.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            The art world's elite is a small circle. My friend, <a href="https://www.artnews.com/art-news/artists/anthony-haden-guest-matthew-yokobosky-studio-54-1202681404/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">Anthony Haden Guest</span></a>, who chronicled New York's 1980s art scene and conducted <span className="font-medium text-zinc-800">Basquiat</span>'s last interview, noted that only about 100 people held sway in that era's fine art community. Today, artists like Basquiat and <span className="font-medium text-zinc-800">Warhol</span> command astronomical valuations - Warhol's <em>Marilyn</em> print sold for <span className="font-medium text-zinc-800">$250 million</span>, and Basquiat's works today exceed <span className="font-medium text-zinc-800">$100 million</span>. <a href="https://archive.vanityfair.com/article/1988/11/burning-out" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">[3]</a>
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Yet, the next great artist could emerge from anywhere, unbound by nationality or expectation. I envision launching an art gallery and podcast in the <span className="font-medium text-zinc-800">Network Cloud</span>, collaborating with Anthony to foster serious discourse and elevate artist voices, while avoiding a personal spotlight. Just like a female U.S. President can't just be cherry picked, neither can the next serious American, or Un-American artist. After all, Andy Warhol was shot by a self pro-claimed misandsrist who wrote a book stating all men should be ground to meat. He'd be a billionaire today, and he probably would've been cancelled or worse.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Ignoring <span className="font-medium text-zinc-800">Technology</span>, <span className="font-medium text-zinc-800">music</span>, <span className="font-medium text-zinc-800">politics</span>, and <span className="font-medium text-zinc-800">art's</span> connection, is becoming harder every day. At risk of sounding absurd, the default is politicians talk about other politicians, rappers talk about other rappers, and tech guys only talk about tech guys. This is starting to destroy the careers of people who ignore it.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            There's an importance of returning from the career - to the child, perhaps as a globe. We might need to figure out how to hang out with friends again. Smartphones have given us all a public persona, something which only existed for the rare celebrity in the past. These things are often ignored due to societal norms, assumptions, expectation, and pressure.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            There's no college or school cirriculum talking about how to manage your online following, who to keep up with for the rest of your life. The average person only really gets to know 800 people by name in a lifetime. A family member of mine told me X is an echo chamber, i said how? I can literally see what the Supreme Leader of Iran is posting, the comments below it, and my ex-girlfriend's re-tweets.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            From a peaceful artist and rapper's conceptual presidential run, to the conceptual power of network states, these ideas sculpt a world of soft marble. My experience finding early talent, early trends, critiquing trends, and dreaming of freedom reveal my belief in a future where creativity and innovation are given credit. The <span className="font-medium text-zinc-800">Network State</span> is likely the vessel for this vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-8 mb-6"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-6"></div>
          
          <div className="text-left mb-8">
            <h2 className="text-lg text-zinc-800 mb-4 font-medium">References</h2>
            <ul className="text-zinc-600 text-sm space-y-2">
              <li>
                <a href="https://x.com/elonmusk/status/1279577069005897728" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  Elon Musk's tweet supporting Kanye West's presidential run
                </a>
              </li>
              <li>
                <a href="https://www.vanityfair.com/style/2020/07/elon-musk-kanye-west-president-support-again?srsltid=AfmBOopgZTPSLbEaccn7ZHeI-3G2YpHciG6UkmY3EH8ko_a1x7n0Q14G" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  Vanity Fair article on Elon Musk's support for Kanye West
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/track/2uxOJ85W5IkKNOMTAGwq6p?si=fb3f91dcfb4346e8" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  "Wizard" by Lucas Lex - The song that reached 11 million Spotify streams
                </a>
              </li>
              <li>
                <a href="https://www.artnews.com/art-news/artists/anthony-haden-guest-matthew-yokobosky-studio-54-1202681404/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  ArtNews article on Anthony Haden Guest and Studio 54
                </a>
              </li>
              <li>
                <a href="https://archive.vanityfair.com/article/1988/11/burning-out" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  Vanity Fair archive article on the art world
                </a>
              </li>
            </ul>
          </div>

          <p className="text-zinc-600 italic mb-6 text-sm">
            Let's talk about the future{" "}
            <Link href="https://github.com/sailorjacob" className="text-zinc-800 hover:text-zinc-900 underline">
              Back to my profile
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