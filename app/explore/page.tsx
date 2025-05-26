"use client"

import { useEffect, useRef } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import InteractiveGradient from "@/components/interactive-gradient"

// Using Inter for modern feel
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// Single color for consistency
const PRIMARY_COLOR = "#333333"

export default function ExplorePage() {
  return (
    <main className={`${inter.className} bg-gray-100 text-gray-800 h-screen overflow-hidden`}>
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <nav className="flex justify-center py-6">
            <ul className="flex space-x-10">
              <li>
                <Link href="/studio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Imagery
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Section with Logo */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 z-0">
          <InteractiveGradient />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=30&width=30')] bg-repeat opacity-[0.03] pointer-events-none"></div>
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
          
          <Link href="/studio">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
            className="mt-16 inline-flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <span className="text-sm text-gray-500 mb-2">Explore</span>
            <ChevronDown size={20} color={PRIMARY_COLOR} />
          </motion.div>
          </Link>
        </div>
      </section>
    </main>
  )
} 