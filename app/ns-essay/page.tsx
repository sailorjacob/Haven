"use client"

import { motion, useAnimation, PanInfo } from "framer-motion"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

// Random sentences to display
const SENTENCES = [
  "The average person only gets to know 800 people by name.",
  "There is a 2 billion Muslim population contrasting a 15 million global jewish population.",
  "The slain rapper XXXTENTACION still has 33 million monthly Spotify listeners.",
  "700 million people live on a $2 international equivalence a day.",
  "Elon has 200 million followers and 7 million people a year die from cigarettes.",
  "200,000 people were killed by the atomic bomb, and 1,000 are falling casualties every day on the Ukraine / Russia front.",
  "There are 8 million uber drivers, and 12 million global prisoners incarcerated.",
  "The United States is 4% of the world's population, and since I was born, the global population has increased = 38.9352%",
  "There are are roughly 2700 billionaires, I've met one and crossed paths with a couple others.",
  "I've crossed paths with some of the most unique artists in the world.",
  "I think about these numbers all the time."
];

// Client-side component wrapper
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  return <>{children}</>
}

// Floating sentence component
function FloatingSentence() {
  const [visible, setVisible] = useState(false);
  const [sentence, setSentence] = useState("");
  const [position, setPosition] = useState<{ 
    top: string; 
    left?: string; 
    right?: string; 
  }>({ 
    top: "0px", 
    left: "0px" 
  });
  const controls = useAnimation();
  
  // Get a random sentence
  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * SENTENCES.length);
    return SENTENCES[randomIndex];
  };
  
  // Get a random position along the edges
  const getRandomPosition = () => {
    const positions = [
      // Top edge
      { top: "20px", left: `${Math.random() * 60 + 20}%` },
      // Left edge
      { top: `${Math.random() * 60 + 20}%`, left: "20px" },
      // Right edge
      { top: `${Math.random() * 60 + 20}%`, right: "20px" }
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };
  
  // Handle drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = Math.sqrt(info.velocity.x ** 2 + info.velocity.y ** 2);
    
    // If thrown with enough force, remove it with a gentle fade
    if (velocity > 300) {
      // Calculate the exact direction of the flick using the velocity vector
      // First normalize the velocity vector to get the direction
      const magnitude = Math.sqrt(info.velocity.x ** 2 + info.velocity.y ** 2);
      const normalizedX = info.velocity.x / magnitude;
      const normalizedY = info.velocity.y / magnitude;
      
      // Use the normalized direction with a consistent speed
      const flyAwaySpeed = 1000;
      const targetX = normalizedX * flyAwaySpeed;
      const targetY = normalizedY * flyAwaySpeed;
      
      controls.start({
        x: targetX,
        y: targetY,
        opacity: 0,
        transition: { 
          x: { duration: 1.5, ease: "easeOut" },
          y: { duration: 1.5, ease: "easeOut" },
          opacity: { duration: 1.2, ease: "easeOut" }
        }
      }).then(() => {
        setVisible(false);
        // Wait before showing the next one
        setTimeout(showNewSentence, 1500);
      });
    }
  };
  
  // Show a new sentence
  const showNewSentence = () => {
    setSentence(getRandomSentence());
    setPosition(getRandomPosition());
    
    // Start invisible
    controls.set({ 
      x: 0, 
      y: 0, 
      opacity: 0, 
      scale: 0.95 
    });
    
    // Show after setting position to ensure proper fade-in
    setTimeout(() => {
      setVisible(true);
      
      controls.start({ 
        opacity: 1, 
        scale: 1,
        transition: { 
          opacity: { duration: 3.5, ease: "easeInOut" },
          scale: { duration: 2.2, ease: "easeOut" }
        } 
      });
    }, 50);
  };
  
  // Initial setup
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    // Show the first sentence after a delay
    const timeout = setTimeout(showNewSentence, 2000);
    return () => clearTimeout(timeout);
  }, []);
  
  // Only render on client-side
  if (typeof window === 'undefined' || !visible) return null;
  
  return (
    <motion.div
      drag
      dragTransition={{ 
        power: 0.1,         // Reduce power for less acceleration
        timeConstant: 750,  // Higher time constant for more dampening
        modifyTarget: t => Math.round(t * 0.1) / 0.1 // Smoother target rounding
      }}
      dragElastic={0.1}     // Reduce elasticity for more direct dragging
      onDragEnd={handleDragEnd}
      animate={controls}
      className="fixed z-50 max-w-xs cursor-grab active:cursor-grabbing"
      style={{
        fontFamily: "var(--font-caveat)",
        fontSize: '18px',
        color: '#555',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '10px 15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        userSelect: 'none',
        ...position
      }}
    >
      {sentence}
    </motion.div>
  );
}

export default function LetterPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  // Use a static date
  const essayDate = "April 23, 2025"

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//NSESSAY2.mp3')
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
      {/* Video section */}
      <div className="w-full max-w-2xl mx-auto mb-8">
        <div className="relative">
          <video 
            src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//KanyexTrump.mp4" 
            className="w-full rounded-lg shadow-md" 
            controls
            playsInline
          />
          <p className="text-center text-zinc-400 text-sm mt-2"><em>Our best export is entertainment and ideas.</em></p>
        </div>
      </div>

      {/* Add floating sentences */}
      <ClientOnly>
        <FloatingSentence />
        <FloatingSentence />
        <FloatingSentence />
      </ClientOnly>
      
      <div className="container max-w-xl mx-auto py-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-zinc-500 font-bold">{essayDate}</p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-zinc-600 mr-3">Play</p>
              <button 
                onClick={handlePlayPause}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 transition-colors duration-300"
                aria-label={isPlaying ? "Pause audio" : "Play article narration"}
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
                Technology, Music, Politics,
              </span>
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600">
                and Art: A Vision for the Future
              </span>
            </h1>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-8"></div>
          
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-8">
            Considering the significant overlap of technology, music, politics, and art, here's a recount of observations, personal experience, and aspiration for a more free and unrestricted future.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Both <span className="font-medium text-zinc-800">Technology</span> and <span className="font-medium text-zinc-800">Music</span> fall on the positive end of an ideal chart, in contrast to a <em>Dark Ages</em> mentality. As innovations like robotic home construction, abundant energy, or automated farms become reality, society's focus will shift towards health, art, and personal expression. This trend suggests a future where curating our personality and designing our environment become more frequent than modern experience, enabled by technological abundance.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            On July 4, 2020, <a href="https://x.com/elonmusk/status/1279577069005897728" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">Kanye West</span></a> tweeted his intention to run for President of the United States, a post with a quick supporting reply from <a href="https://www.vanityfair.com/style/2020/07/elon-musk-kanye-west-president-support-again?srsltid=AfmBOopgZTPSLbEaccn7ZHeI-3G2YpHciG6UkmY3EH8ko_a1x7n0Q14G" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">Elon Musk</span></a>: <em>"You have my full support!"</em> This moment, while seemingly impulsive, marks a fascinating convergence of entertainment, technology, and politics.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Kanye West's influence extends beyond this event, his music has shaped artists from <span className="font-medium text-zinc-800">Paul McCartney</span> to <a href="https://chinaskinny.com/blog/kanyewest-immersive-consumer-experience-china" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">chinese youth</span></a>. However, his suspension from social media for provocative posts, including the ones intentionally anti-Semitic, highlight the tension between artistic persona (or persona) and public perception. Despite this, Kanye's work reflects a deconstructive creativity closer to a civil rights advocate than the negative labels often attached to him. This is consistent with all of our best, merely exaggerated in raw performance art.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            When Taylor Swift applauded Kendrick Lamar's Super Bowl halftime performance show naming Drake a pedophile, in front of a nation. She voted for a messy side in the War against Truth. Kendrick Lamar's 'Not Like Us' was also referenced with a wink by <a href="https://www.tmz.com/watch/2024-07-01-070124-kamala-harris-1855754-066/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Kamala Harris during her 2024 election race</a>. Saying, 'I hear they're not like us' similar to when she said 'We need to be  more woke.' <a href="https://www.nytimes.com/athletic/6290727/2025/04/18/drake-defemation-lawsuit-umg-super-bowl-lix/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Drake's new lawsuit against his own label, UMG, for promoting the song</a>, which resulted in people shooting up his house - reveals the danger in this. For the lawsuit, my bets are on the side closer to truth. And so far, time has been on my side, with a veteran like Kanye setting his opinion and the record straight in high level thought. There's a real difference in caliber here, when I compare people landing on opposite ends of the issue. These cognitive, moral, perceptual litmus tests are a strong navigating force.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Small actions can yield profound impacts. For Kanye, 'Putting on the red hat' is his version of being Rosa Parks, or Socrates in his commitment to truth. A few years back, I shot a music video for, and gave my old laptop to a 15-year-old aspiring artist. He used it to make a song that has over <a href="https://open.spotify.com/track/2uxOJ85W5IkKNOMTAGwq6p?si=7b0f339620f64338" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">11 million Spotify streams</span></a>. Turning a $500 donation into $50,000 of value.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Moments like these inspire me, as does listening to podcasts like David Senra's <a href="https://www.founderspodcast.com/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">Founders Podcast</a>. I'm drawn by the power a music artist like <a href="https://youtu.be/EkeLEd_k6AQ?si=OnwwmIOkFfrpOCdB" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">The Weeknd</span></a> has to bring over 100,000 fans to a single concert. This evokes potential for once mysterious low-lifes, or designed figures to command influence like political leaders.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Current political figures like <a href="https://x.com/AOC/status/1881493371900113227?lang=en" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">AOC</span></a> and <span className="font-medium text-zinc-800">Bernie Sanders</span> often oppose technological progress, without realizing it. Prioritizing their own control over innovation, or risking future security & freedom. I look for a return to a <em>"Wild West"</em> ethos, unrestricted exploration, free from bureaucratic suits and rules that favor the slow.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            I often think of the world as a jungle, a free for all like the Wild West, where invention wins amid risks like misinformation, surveillance, and conspiracy. Platforms like X amplify this, enabling rapid idea exchange but also exposing tensions. Think about Kanye's ban for provocative posts versus the hypocrisy of political figures decrying "hate speech" or students championing Islam, ignoring systemic issues like cigarette deaths (7 million annually).
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Meanwhile, dangerous double standards abound: men are attacked for past behavior, while platforms like <span className="font-medium text-zinc-800">OnlyFans</span> are promoted. This dynamic, alongside the stagnation of apps like <span className="font-medium text-zinc-800">Tinder</span> and <span className="font-medium text-zinc-800">TikTok</span>, fuels my desire to build better alternatives and design digital landscapes - I'm also ready to replace the overflowing gas station, fast-foods, smoke shop, and liquor stores on every street corner.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            The art world's elite is a small circle. My friend, <a href="https://www.artnews.com/art-news/artists/anthony-haden-guest-matthew-yokobosky-studio-54-1202681404/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer"><span className="font-medium text-zinc-800">Anthony Haden Guest</span></a>, who chronicled New York's 1980s art scene and conducted <span className="font-medium text-zinc-800">Basquiat</span>'s last interview, noted that only about 100 people held sway in that era's fine art community. Today, artists like Basquiat and <span className="font-medium text-zinc-800">Warhol</span> command astronomical valuations - Warhol's <em>Marilyn</em> print sold for <span className="font-medium text-zinc-800">$250 million</span>, and Basquiat's works today exceed <span className="font-medium text-zinc-800">$100 million</span>. <a href="https://archive.vanityfair.com/article/1988/11/burning-out" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">[3]</a>
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Yet, the next great artist could emerge from anywhere, unbound by nationality or expectation. Sometimes I envision launching an art gallery or podcast in the <span className="font-medium text-zinc-800">Network Cloud</span>, collaborating with Anthony to foster serious discourse and elevate artist voices, while avoiding a personal spotlight. Just like a female U.S. President can't just be cherry picked, neither can the next serious American, or Un-American artist. After all, Andy Warhol was shot by a self-proclaimed misandrist who wrote a book saying all men should be ground to meat. He'd be a billionaire today, and he probably would've been cancelled or worse.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            Ignoring <span className="font-medium text-zinc-800">technology</span>, <span className="font-medium text-zinc-800">music</span>, <span className="font-medium text-zinc-800">politics</span>, and <span className="font-medium text-zinc-800">art's</span> cross pollination, is becoming harder every day. At risk of sounding absurd, the default is politicians talk about other politicians, rappers talk about other rappers, and tech guys only talk about tech guys. This is starting to destroy the careers of people who ignore it.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            There's an importance of returning from the career - to the child, perhaps as a globe. We might need to figure out how to hang out with friends again. Smartphones have given us all a public persona, something which only existed for the rare celebrity in the past. These things are often unspoken for due to societal norms, assumptions, expectation, and pressure.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            There's no college or school cirriculum talking about how to manage your online following, who to keep up with for the rest of your life. The average person only really gets to know 800 people by name in a lifetime. A family member of mine told me X is an echo chamber. I think, how? I can see what the Supreme Leader of Iran is posting today, foreign citizens comments below it, or an ex-girlfriend's retweets.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4 text-sm">
            From a peaceful artist and rapper's conceptual presidential run, to the conceptual power of network states, these ideas cut a world of soft marble. My experience finding early talent, early trends, critiquing trends, and dreaming of freedom reveal my belief in a future where creativity and innovation are given credit.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800 mb-3">Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">
                <a href="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//DKEffect.jpg" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  The Dunning-Kruger Effect Chart
                </a>
              </p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//DKEffect.jpg" 
                  alt="The Dunning-Kruger Effect Chart" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">
                <a href="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//Ye.jpeg" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Kanye West Presidential Announcement Tweet
                </a>
              </p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//Ye.jpeg" 
                  alt="Kanye West Presidential Announcement Tweet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">
                <a href="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//AOC.jpg" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  AOC's Elon Heil Seig Assertion
                </a>
              </p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//AOC.jpg" 
                  alt="AOC's Elon Heil Seig Assertion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded">
              <p className="text-zinc-800 text-sm font-medium mb-2">
                <a href="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//khameni.jpg" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  The Supreme Leader of Iran X
                </a>
              </p>
              <div className="aspect-[4/3] w-full overflow-hidden rounded">
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//khameni.jpg" 
                  alt="The Supreme Leader of Iran X" 
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
                  Basquiat's last interview
                </a>
              </li>
              <li>
                <a href="https://www.theguardian.com/news/2002/oct/16/guardianobituaries.nicholasdejongh" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  Guardian obituary of Elisabeth Furse, mother of Anthony Haden-Guest
                </a>
              </li>
              <li>
                <a href="https://www.nytimes.com/athletic/6290727/2025/04/18/drake-defemation-lawsuit-umg-super-bowl-lix/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  New York Times article on Drake's defamation lawsuit against UMG
                </a>
              </li>
              <li>
                <a href="https://www.tmz.com/watch/2024-07-01-070124-kamala-harris-1855754-066/" className="text-zinc-800 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                  TMZ video of Kamala Harris referencing "Not Like Us"
                </a>
              </li>
            </ul>
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