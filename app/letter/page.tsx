"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function LetterPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-400 flex flex-col items-center p-6 font-mono">
      <div className="container max-w-3xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-light mb-6 text-zinc-300 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-500">
              Technology, Music, Politics, and Art: A Vision for the Future
            </span>
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>
          
          <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-8">
            This letter notes the signifigant intertwine between <span className="font-semibold text-zinc-400">technology</span>, <span className="font-semibold text-zinc-400">music</span>, <span className="font-semibold text-zinc-400">politics</span>, and <span className="font-semibold text-zinc-400">art</span>. A recount of observations, personal experience, and aspirations of a more free and unrestricted future.
          </p>

          <h2 className="text-xl text-zinc-300 mb-3 mt-8">Tech, Music, and the Future</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            In this conceptual framework, both <span className="font-semibold text-zinc-400">technology</span> and <span className="font-semibold text-zinc-400">music</span> fall on the positive end of an idyll chart, in contrast to <em>Dark Ages</em> mentality. As innovations like robotic home construction, abundant energy, and automated farms become reality, society's focus shifts toward health, art, and personal expression. This trend suggests a future where curating our personality and designing our environment only become more pertinent to modern experience, enabled by technological abundance.
          </p>

          <h2 className="text-xl text-zinc-300 mb-3 mt-8">Kanye West's Presidential Run and Elon Musk's Support</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            On July 4, 2020, <span className="font-semibold text-zinc-400">Kanye West</span> tweeted his intention to run for President of the United States, a post with a quick supporting reply from <span className="font-semibold text-zinc-400">Elon Musk</span>: <em>"You have my full support!"</em> This moment, while seemingly impulsive, marks a fascinating convergence of entertainment, technology, and politics.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Kanye West's influence extends beyond this event, his music has shaped artists from <span className="font-semibold text-zinc-400">Paul McCartney</span> to <span className="font-semibold text-zinc-400">Billie Eilish</span>. However, his suspension from social media for provocative posts, including the ones intentionally anti-Semitic, highlight the tension between artistic persona (or persona) and public perception. Despite this, Kanye's work reflects a deconstructive creativity closer to a civil rights advocate than the negative labels often attached to him. This is consistent with all of our best, merely exaggerated in raw performance art.
          </p>

          <h2 className="text-xl text-zinc-300 mb-3 mt-8">Personal Anecdotes and Reflections</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Small actions can yield profound impacts. For Kanye, 'Putting on the red hat' is his version of being Rosa Parks, or Socrates in his commitment to truth. A few years back, I shot a music video for, and gave my old laptop to a 15-year-old aspiring artist. He used it to make a song that has over <span className="font-semibold text-zinc-400">11 million Spotify streams</span>. Turning a $500 donation into $50,000 of value.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Moments like these inspire me, as does listening to podcasts like David Senra's <a href="https://www.founderspodcast.com/" className="text-zinc-300 hover:text-zinc-100 underline" target="_blank" rel="noopener noreferrer">Founders Podcast</a>. I'm drawn by the power a music artist like <span className="font-semibold text-zinc-400">The Weeknd</span> has to bring over 100,000 fans to a single concert. This evokes potential for once mysterious low-lifes, or designed figures to command influence like political leaders.
          </p>

          <h2 className="text-xl text-zinc-300 mb-3 mt-8">Critiques of Political and Social Trends</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Current political figures like <span className="font-semibold text-zinc-400">AOC</span> and <span className="font-semibold text-zinc-400">Bernie Sanders</span> often oppose technological progress, without realizing it. Prioritizing their own control over innovation, or risking future security & freedom. I look for a return to a <em>"Wild West"</em> ethos, unrestricted exploration, free from bureaucratic suits and rules that favor the slow.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Meanwhile, dangerous double standards abound: men are attacked for past behavior, while platforms like <span className="font-semibold text-zinc-400">OnlyFans</span> are promoted. This dynamic, alongside the stagnation of apps like <span className="font-semibold text-zinc-400">Tinder</span> and <span className="font-semibold text-zinc-400">TikTok</span>, fuels my desire to build better alternatives and design digital landscapes - I'm also ready to replace the overflowing gas station, fast-foods, smoke shop, and liquor stores on every street corner.
          </p>

          <h2 className="text-xl text-zinc-300 mb-3 mt-8">Art, Influence, and the Future</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            The art world's elite is a small circle. My friend, <span className="font-semibold text-zinc-400">Anthony Haden Guest</span>, who chronicled New York's 1980s art scene and conducted <span className="font-semibold text-zinc-400">Basquiat</span>'s last interview, noted that only about 100 people held sway in that era's fine art community. Today, artists like Basquiat and <span className="font-semibold text-zinc-400">Warhol</span> command astronomical valuations - Warhol's <em>Marilyn</em> print sold for <span className="font-semibold text-zinc-400">$250 million</span>, and Basquiat's works today exceed <span className="font-semibold text-zinc-400">$100 million</span>.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Yet, the next great artist could emerge from anywhere, unbound by nationality or expectation. I envision launching an art gallery and podcast in the <span className="font-semibold text-zinc-400">Network Cloud</span>, collaborating with Anthony to foster serious discourse and elevate artist voices, while avoiding a personal spotlight. Just like a female U.S. President can't just be cherry picked, neither can the next serious American, or Un-American artist. After all, Andy Warhol was shot by a self pro-claimed misandsrist who wrote a book stating all men should be ground to meat. He'd be a billionaire today, and he probably would've been cancelled or worse.
          </p>

          <h2 className="text-xl text-zinc-300 mb-3 mt-8">Conclusion</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Ignoring <span className="font-semibold text-zinc-400">Technology</span>, <span className="font-semibold text-zinc-400">music</span>, <span className="font-semibold text-zinc-400">politics</span>, and <span className="font-semibold text-zinc-400">art's</span> connection, is becoming harder every day. At risk of sounding absurd, the default is politicians talk about other politicians, rappers talk about other rappers, and tech guys only talk about tech guys. This is starting to destroy the careers of people who ignore it.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            There's an importance of returning from the career - to the child, perhaps as a globe. We might need to figure out how to hang out with friends again. Smartphones have given us all a public persona, something which only existed for the rare celebrity in the past. These things are often ignored due to societal norms, assumptions, expectation, and pressure.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            There's no college or school cirriculum talking about how to manage your online following, who to keep up with for the rest of your life. The average person only really gets to know 800 people by name in a lifetime. A family member of mine told me X is an echo chamber, i said how? I can literally see what the Supreme Leader of Iran is posting, the comments below it, and my ex-girlfriend's re-tweets.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-6">
            From a peaceful artist and rapper's conceptual presidential run, to the conceptual power of network states, these ideas sculpt a world of soft marble. My experience finding early talent, early trends, critiquing trends, and dreaming of freedom reveal my belief in a future where creativity and innovation are given credit. The <span className="font-semibold text-zinc-400">Network State</span> is likely the vessel for this vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 mb-8"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>
          <p className="text-zinc-500 italic mb-8">
            Let's connect if you're into AI, design, and building the future!{" "}
            <Link href="https://github.com/sailorjacob" className="text-zinc-300 hover:text-zinc-100 underline">
              Back to my profile
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-400 py-3 px-8 text-xs lowercase tracking-widest transition-all duration-300"
          >
            return home
          </Link>
        </motion.div>
      </div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM10 0h1v1h-1zM0 10h1v1H0zM10 10h1v1h-1z' fill='%23333' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </main>
  )
} 