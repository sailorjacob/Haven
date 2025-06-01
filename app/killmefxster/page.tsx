"use client"

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect } from "react"

export default function KillMeFxsterPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transform scroll progress into different line animations
  const line1Progress = useTransform(scrollYProgress, [0, 0.4, 0.7], [0, 1, 0])
  const line2Progress = useTransform(scrollYProgress, [0.1, 0.5, 0.8], [0, 1, 0])
  const line3Progress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const line4Progress = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0])
  const line5Progress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const line6Progress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const line7Progress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])
  const line8Progress = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])

  // Zig-zag lines that appear around 2/3 down
  const zigzag1Progress = useTransform(scrollYProgress, [0.65, 0.7, 0.75], [0, 1, 0])
  const zigzag2Progress = useTransform(scrollYProgress, [0.67, 0.72, 0.77], [0, 1, 0])
  const zigzag3Progress = useTransform(scrollYProgress, [0.69, 0.74, 0.79], [0, 1, 0])

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-900 text-zinc-300 relative">
      {/* Animated Blueprint Lines Overlay */}
      <motion.svg
        className="fixed inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 1440 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="wormholeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="1"/>
            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Grid pattern overlay */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={`vertical-${i}`}
            x1={i * 72}
            y1="0"
            x2={i * 72}
            y2="2000"
            stroke="#ef4444"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            style={{
              pathLength: useTransform(scrollYProgress, [i * 0.02, i * 0.02 + 0.1], [0, 1]),
              opacity: useTransform(scrollYProgress, [i * 0.02, i * 0.02 + 0.1], [0, 0.15])
            }}
          />
        ))}

        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`horizontal-${i}`}
            x1="0"
            y1={i * 200}
            x2="1440"
            y2={i * 200}
            stroke="#ef4444"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            style={{
              pathLength: useTransform(scrollYProgress, [i * 0.05, i * 0.05 + 0.1], [0, 1]),
              opacity: useTransform(scrollYProgress, [i * 0.05, i * 0.05 + 0.1], [0, 0.15])
            }}
          />
        ))}

        {/* Main connecting lines that follow scroll */}
        <motion.path
          d="M 200 200 L 200 500 L 720 500 L 720 800 L 1200 800 L 1200 1200"
          stroke="#ef4444"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength: line1Progress }}
          strokeDasharray="1 0"
          opacity={0.9}
        />
        
        <motion.path
          d="M 720 350 L 1200 350 L 1200 650 L 800 650 L 800 1100"
          stroke="#ef4444"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength: line2Progress }}
          strokeDasharray="1 0"
          opacity={0.7}
        />

        {/* Clean sweeping line */}
        <motion.path
          d="M 50 600 L 1390 600"
          stroke="url(#fadeGradient)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength: line4Progress }}
          strokeDasharray="1 0"
          opacity={0.6}
        />

        {/* Zig-zag lines that appear around 2/3 down */}
        <motion.path
          d="M 300 1000 L 450 1050 L 600 1000 L 750 1050 L 900 1000"
          stroke="#ef4444"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength: zigzag1Progress }}
          strokeDasharray="1 0"
          opacity={0.6}
        />

        <motion.path
          d="M 200 1100 L 350 1150 L 500 1100 L 650 1150 L 800 1100 L 950 1150"
          stroke="#ef4444"
          strokeWidth="0.8"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength: zigzag2Progress }}
          strokeDasharray="1 0"
          opacity={0.5}
        />

        <motion.path
          d="M 1100 1050 L 1250 1100 L 1400 1050"
          stroke="#ef4444"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength: zigzag3Progress }}
          strokeDasharray="1 0"
          opacity={0.6}
        />

        {/* Contact section wormhole effect - repositioned higher */}
        <motion.g style={{ opacity: useTransform(scrollYProgress, [0.75, 0.9], [0, 1]) }}>
          {/* Outer ring */}
          <motion.circle
            cx="720"
            cy="1350"
            r="40"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            filter="url(#glow)"
            style={{ 
              pathLength: line8Progress,
              rotate: useTransform(scrollYProgress, [0.75, 1], [0, 360])
            }}
            strokeDasharray="8 4"
            opacity={0.7}
          />
          
          {/* Middle ring */}
          <motion.circle
            cx="720"
            cy="1350"
            r="25"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2"
            filter="url(#glow)"
            style={{ 
              pathLength: useTransform(scrollYProgress, [0.8, 0.95], [0, 1]),
              rotate: useTransform(scrollYProgress, [0.8, 1], [360, 0])
            }}
            strokeDasharray="6 3"
            opacity={0.8}
          />
          
          {/* Inner core */}
          <motion.circle
            cx="720"
            cy="1350"
            r="12"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            filter="url(#glow)"
            style={{ 
              pathLength: useTransform(scrollYProgress, [0.85, 1], [0, 1])
            }}
            strokeDasharray="4 2"
            opacity={0.9}
          />
          
          {/* Convergence lines pointing to contact */}
          <motion.path
            d="M 680 1320 L 720 1350 L 760 1320"
            stroke="#ef4444"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            style={{ pathLength: useTransform(scrollYProgress, [0.85, 0.95], [0, 1]) }}
            strokeDasharray="1 0"
            opacity={0.8}
          />
          
          <motion.path
            d="M 680 1380 L 720 1350 L 760 1380"
            stroke="#ef4444"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            style={{ pathLength: useTransform(scrollYProgress, [0.85, 0.95], [0, 1]) }}
            strokeDasharray="1 0"
            opacity={0.8}
          />
        </motion.g>

        {/* Journey connection nodes that fade out */}
        <motion.circle
          cx="720"
          cy="500"
          r="4"
          fill="#ef4444"
          filter="url(#glow)"
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.6, 0.75], [0, 1, 1, 0])
          }}
          animate={{
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.circle
          cx="200"
          cy="800"
          r="3"
          fill="#ef4444"
          filter="url(#glow)"
          style={{
            opacity: useTransform(scrollYProgress, [0.2, 0.4, 0.65, 0.8], [0, 1, 1, 0])
          }}
          animate={{
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.circle
          cx="1200"
          cy="800"
          r="3.5"
          fill="#ef4444"
          filter="url(#glow)"
          style={{
            opacity: useTransform(scrollYProgress, [0.25, 0.45, 0.7, 0.85], [0, 1, 1, 0])
          }}
          animate={{
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.svg>

      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/5 to-zinc-900 opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/" className="text-zinc-400 hover:text-zinc-300 transition-colors inline-flex items-center">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Kill Me Faster
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-6">
            The ultimate escape route and weapon. An artist's journey through the dark arts, collecting bitcoin, and building a digital frontier with an army of mercenaries and robots fighting for freedom.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Digital Art</span>
            <span className="text-zinc-600">•</span>
            <span>History</span>
            <span className="text-zinc-600">•</span>
            <a href="https://killmefaster.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
              Visit Website
            </a>
          </div>
        </motion.div>

        {/* Freedom Truth Prosperity Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16 py-12 border-y border-zinc-700"
        >
          <h2 className="text-2xl md:text-4xl font-light mb-6 text-white tracking-wider">
            Freedom <span className="text-zinc-500 mx-4">•</span> Truth <span className="text-zinc-500 mx-4">•</span> Prosperity
          </h2>
          <p className="text-lg text-zinc-300 mb-4 max-w-xl mx-auto">
            Looking for decentralized military commanders
          </p>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <a href="https://killmefaster.com" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative aspect-video overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//kxllme3.png"
                alt="Kill Me Faster Artist Website"
                fill
                className="object-cover"
              />
            </div>
          </a>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                Kill Me Faster is an artist working under multiple digital identities. Projects include AI-generated art (Lisa Mona), producing as red diamonds, and digital content focused on art, technology, and robotics. The artist is known for high-value digital art sales and a focus on privacy and anonymity.
              </p>
              <p className="text-zinc-400">
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Artist</h4>
                  <p className="text-zinc-300">Kill Me Faster</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-300">2025</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Identities</h4>
                  <p className="text-zinc-300">Multiple Digital Personas</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-300">AI, Robotics, Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Concept Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200 flex items-center justify-center gap-3">
            The Mission
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//red%20diamond.png"
              alt="Red Diamond"
              width={24}
              height={24}
              className="object-contain"
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Digital Warfare</h3>
              <p className="text-zinc-400">
                Strategically dismantling dangerous ideologies through AI-generated content and anonymous writings, serving as a digital counter-terrorism force while maintaining complete anonymity.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Art & Legacy</h3>
              <p className="text-zinc-400">
                Creating high-value digital art while developing methods to immortalize companions in precious metals and stone through advanced 3D printing and robotic craftsmanship.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Castle Systems</h3>
              <p className="text-zinc-400">
                Developing autonomous castle construction and maintenance systems through a specialized LLC, integrating advanced robotics and AI for complete self-sufficiency.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Section - renamed to The Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Daily Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-200 mb-2">Art Market</h3>
              <p className="text-zinc-400">
                Creating and selling high-value digital art while maintaining market influence through strategic releases and multiple digital identities.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Digital Defense</h3>
              <p className="text-zinc-400">
                Monitoring and countering dangerous ideologies through AI-generated content and strategic information warfare, operating as an anonymous digital counter-terrorism force.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Immortalization</h3>
              <p className="text-zinc-400">
                Developing advanced methods to preserve companions in precious metals and stone through cutting-edge 3D printing and robotic craftsmanship.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Castle LLC</h3>
              <p className="text-zinc-400">
                Operating a specialized construction company focused on autonomous castle systems, integrating humanoid robotics and AI for complete self-sufficiency.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact Section - renamed to The Artist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">The Artist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                Operating from undisclosed locations—potentially a French castle or through a network of trusted contacts—Kill Me Faster maintains a commanding presence in digital space while remaining physically anonymous. Between high-value art sales, digital counter-terrorism operations, and developing advanced robotics for castle construction and companion immortalization, the artist's influence extends across multiple domains.
              </p>
              <p className="text-zinc-400">
                Through anonymous writings, AI-generated content, and strategic market operations, the artist's influence on digital culture may parallel historical figures like Voltaire, while simultaneously building a legacy through precious metal preservation and autonomous castle systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm">Art sales</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z"/>
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm">Castles</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="flex justify-center mb-2">
                  <Image
                    src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//red%20diamond.png"
                    alt="Red Diamond"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-zinc-400 text-sm">Diamonds</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
                    <path d="M12.5 16c-3.54 0-6.55-2.31-7.6-5.5L2.53 11.28C3.92 15.97 7.85 19 12.5 19c2.65 0 5.05-.99 6.9-2.6L22 20v-9h-9l3.62 3.62c-1.39 1.16-3.16 1.88-5.12 1.88z"/>
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm">Blasting zombies</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-16 border-t border-zinc-800"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mb-6">
            Ready to Build?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let us help you create platforms that matter and connect with the right people.
          </p>
          <Link href="/contact">
            <div className="inline-flex items-center border border-white text-white font-medium py-2 px-8 rounded-full text-sm relative overflow-hidden group">
              {/* Red background that fills from left on hover */}
              <div className="absolute inset-0 bg-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {/* Text content */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-zinc-100">
                Start
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Next Project */}
        <div className="text-center mt-24">
          <p className="text-sm text-zinc-500 mb-4">Next Project</p>
          <Link href="/swivimedia" className="text-xl text-zinc-300 hover:text-white transition-colors">
            Swivimedia
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 