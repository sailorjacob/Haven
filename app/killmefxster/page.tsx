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
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//killmefxster.png"
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
                Kill Me Faster represents a deep exploration of history, power, and the vastness of our world. The artist's work examines the intersection of historical figures, military strategy, and the pursuit of rare red diamonds as symbols of ultimate value and power.
              </p>
              <p className="text-zinc-400">
                Through digital art and blockchain technology, the project explores concepts of technology and it's role in shaping future conflicts and power structures.
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
                The pursuit of red diamonds represents the artist's fascination with rare and valuable elements throughout history, symbolizing ultimate power and achievement.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Historical Exploration</h3>
              <p className="text-zinc-400">
                Delving into the vastness of world history, examining influential figures and events that have shaped power structures and military strategy throughout time.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Decentralized Military</h3>
              <p className="text-zinc-400">
                Exploring the concept of a decentralized military force, examining how technology and blockchain could reshape traditional power structures and warfare.
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">The Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-200 mb-2">Artistic Evolution</h3>
              <p className="text-zinc-400">
                A long-time artist whose work has evolved through various mediums, now focusing on digital art and blockchain technology as tools for exploring power and history.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Red Diamond Collection</h3>
              <p className="text-zinc-400">
                The ongoing pursuit of red diamonds as both physical artifacts and symbolic representations of ultimate value and power throughout history.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Military Concepts</h3>
              <p className="text-zinc-400">
                Exploration of military history and strategy, examining how decentralized technology could reshape traditional power structures and warfare.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Digital Integration</h3>
              <p className="text-zinc-400">
                Merging historical concepts with modern technology, using blockchain and digital art to explore new forms of power and value in the contemporary world.
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">The Artist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                As a long-time artist, Kill Me Faster's work examines the intersection of historical power structures, military strategy, and the pursuit of rare red diamonds. The artist's deep understanding of history and technology informs a unique perspective on power and value in both physical and digital realms.
              </p>
              <p className="text-zinc-400">
                Through the lens of military history and blockchain technology, the work challenges conventional views of power structures while maintaining its identity as the ultimate escape route and weapon in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <p className="text-zinc-400 text-sm">Artworks created</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">₿</div>
                <p className="text-zinc-400 text-sm">Bitcoin integrated</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm">Red diamonds collected</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-8 h-8 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 14.1 11 13 11V22H11V16H9V22H7V11C5.9 11 5 10.1 5 9V7L3 7V9H1V7C1 5.9 1.9 5 3 5H21C22.1 5 23 5.9 23 7V9H21ZM7.5 7.5C7.5 8.3 8.2 9 9 9S10.5 8.3 10.5 7.5S9.8 6 9 6S7.5 6.7 7.5 7.5ZM13.5 7.5C13.5 8.3 14.2 9 15 9S16.5 8.3 16.5 7.5S15.8 6 15 6S13.5 6.7 13.5 7.5Z"/>
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm">Military concepts developed</p>
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
            Ready to Build Something Real?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let us help you create platforms that matter and connect with the right people.
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