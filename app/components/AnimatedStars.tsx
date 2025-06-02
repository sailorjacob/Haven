"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

// Bright, bold colors for the stars - reduced to only essential colors
const starColors = [
  "#f5f5f5", // Silver/white
  "#e0e0e0", // Lighter silver
  "#ffffff", // Pure white
  "#00ff00", // Neon green (used rarely)
  "#ff0000", // Pure red (used rarely)
]

interface Star {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

// Optimized color selection with strong preference for whites
const getRandomStarColor = () => {
  // 90% chance of selecting a silver/white color (indices 0-2)
  // 10% chance of selecting a bright neon color (indices 3-4)
  const silverOrNeon = Math.random() < 0.9 ? 'silver' : 'neon';
  
  if (silverOrNeon === 'silver') {
    // Select from silver/white colors (indices 0-2)
    const silverIndex = Math.floor(Math.random() * 3);
    return starColors[silverIndex];
  } else {
    // Select from neon colors (indices 3-4)
    const neonIndex = Math.floor(Math.random() * 2) + 3;
    return starColors[neonIndex];
  }
}

export default function AnimatedStars() {
  const [stars, setStars] = useState<Star[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Generate fewer initial stars - reduced from 20 to 10
    const initialStars = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: -10, // Start from left side
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 20 + 10, // Smaller size range: 10-30px (was 20-50px)
      color: getRandomStarColor(),
      duration: Math.random() * 1.5 + 2, // Random duration between 2-3.5s (was 2-4s)
      delay: Math.random() * 0.5, // Shorter random delay between 0-0.5s (was 0-1s)
    }))
    setStars(initialStars)

    // Add new stars less frequently - increased interval from 500ms to 1000ms
    intervalRef.current = setInterval(() => {
      setStars(prevStars => {
        const newStar = {
          id: Date.now(),
          x: -10, // Start from left side
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          color: getRandomStarColor(),
          duration: Math.random() * 1.5 + 2,
          delay: 0,
        }
        // Keep only the last 10 stars instead of 20
        return [...prevStars.slice(-9), newStar]
      })
    }, 1000) // Add a new star every 1000ms (was 500ms)

    // Proper cleanup to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  // Add a condition to only render if there are stars (helps with SSR)
  if (stars.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            // Simplified filter with less blur
            filter: "drop-shadow(0 0 6px currentColor)",
            opacity: 0.8, // Slightly reduced opacity
            willChange: "transform", // Performance optimization hint
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
            x: 0,
          }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1, 1, 0.7], // Simplified scale animation
            x: "120vw", // Move to right side of viewport
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "linear", // Changed from easeInOut to linear for better performance
            repeat: 0,
          }}
        />
      ))}
    </div>
  )
} 