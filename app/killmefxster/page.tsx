"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function KillMeFxsterPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300">
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
          <Link href="/studio" className="text-zinc-400 hover:text-zinc-300 transition-colors inline-flex items-center">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Studio
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
            <span>Crypto Art</span>
            <span className="text-zinc-600">•</span>
            <a href="https://killmefaster.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
              Visit Website
            </a>
          </div>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//killmefxster.png"
              alt="Kill Me Faster Artist Website"
              fill
              className="object-cover"
            />
          </div>
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
                Kill Me Faster represents a revolutionary digital art movement where traditional boundaries dissolve into a new frontier of creative expression. Born as the ultimate escape route and weapon, this project embodies the artist's quest for red diamonds while painting with pure energy.
              </p>
              <p className="text-zinc-400">
                The artist's journey through the dark arts combines cryptocurrency culture, digital rebellion, and futuristic warfare aesthetics. This isn't just art—it's a manifesto for a new digital country where creativity and technology merge to fight for ultimate freedom.
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
                  <h4 className="text-sm text-zinc-500 mb-1">Medium</h4>
                  <p className="text-zinc-300">Digital Art, Crypto Art</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-300">Next.js, Blockchain, NFTs</p>
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">The Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Red Diamond Quest</h3>
              <p className="text-zinc-400">
                The search for red diamonds represents the pursuit of the rarest and most valuable elements in both the physical and digital realms, symbolizing ultimate artistic achievement.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Energy Painting</h3>
              <p className="text-zinc-400">
                Creating art with pure energy—channeling digital forces, cryptocurrency movements, and technological rebellion into visual expressions that transcend traditional mediums.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Digital Army</h3>
              <p className="text-zinc-400">
                Building a real army of mercenaries and robots represents the fusion of human creativity with artificial intelligence in the fight for artistic and digital freedom.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">The Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-200 mb-2">Dark Arts Mastery</h3>
              <p className="text-zinc-400">
                Exploring the forbidden techniques of digital creation, pushing boundaries between art and technology in the shadows of conventional creativity.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Bitcoin Collection</h3>
              <p className="text-zinc-400">
                Integrating cryptocurrency culture into the artistic process, using blockchain technology as both medium and message for digital rebellion.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Digital Country</h3>
              <p className="text-zinc-400">
                Establishing a new frontier where digital natives can exist freely, creating virtual territories governed by artistic vision and technological innovation.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Freedom Army</h3>
              <p className="text-zinc-400">
                Assembling mercenaries and robots to fight for creative freedom, representing the ultimate fusion of human rebellion and artificial intelligence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Digital Revolution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                Kill Me Faster has emerged as more than an art project—it's a movement that challenges the very foundations of digital creativity and ownership. The artist's vision of a new digital country resonates with creators worldwide seeking freedom from traditional constraints.
              </p>
              <p className="text-zinc-400">
                Through the fusion of dark arts, cryptocurrency, and futuristic warfare aesthetics, this project has opened new pathways for artistic expression in the digital age, inspiring a generation of crypto-artists and digital rebels.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <p className="text-zinc-400 text-sm">Digital artworks created</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">₿</div>
                <p className="text-zinc-400 text-sm">Bitcoin integrated</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">🔴</div>
                <p className="text-zinc-400 text-sm">Red diamonds sought</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">🤖</div>
                <p className="text-zinc-400 text-sm">Digital army assembled</p>
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
            Join the Digital Revolution
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Ready to escape the conventional and enter the new frontier? Let us help you build your own digital country and artistic rebellion.
          </p>
          <Link href="/contact">
            <button className="bg-zinc-200 hover:bg-white text-zinc-900 py-3 px-8 text-sm tracking-widest transition-all duration-300">
              Contact Us
            </button>
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