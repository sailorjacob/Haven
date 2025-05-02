"use client"

import { useEffect, useRef } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"
import InteractiveGradient from "@/components/interactive-gradient"

// Using Inter for modern feel
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export default function ExplorePage() {
  return (
    <main className={`${inter.className} bg-gray-100 text-gray-800`}>
      {/* Hero Section with Logo */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 z-0">
          <InteractiveGradient />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=30&width=30')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Simple logo */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
                fill="#333333"
              />
            </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl font-semibold mb-4 text-gray-900"
          >Haven</motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-gray-600 mb-6 max-w-xl mx-auto"
          >
            dream builders
          </motion.p>
        </div>
      </section>

      {/* Navigation Menu */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Design</h2>
              <Link href="/design" className="text-blue-600 hover:text-blue-800 text-sm">
                Explore Design
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Imagery</h2>
              <Link href="/imagery" className="text-blue-600 hover:text-blue-800 text-sm">
                Explore Imagery
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Apps</h2>
              <Link href="/apps" className="text-blue-600 hover:text-blue-800 text-sm">
                Explore Apps
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Games</h2>
              <Link href="/games" className="text-blue-600 hover:text-blue-800 text-sm">
                Explore Games
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 text-sm">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 