"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Bright, bold colors for the stars
const starColors = [
  "#f5f5f5", // Silver/white
  "#e0e0e0", // Lighter silver
  "#d0d0d0", // Light silver
  "#c0c0c0", // Silver
  "#f8f8f8", // Almost white
  "#ffffff", // Pure white
  "#00ff00", // Neon green
  "#ff0000", // Pure red
  "#ffd700", // Yellow
  "#00bfff", // Sky blue
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

// Function to select colors with higher probability for silver/white
const getRandomStarColor = () => {
  // 80% chance of selecting a silver/white color (indices 0-5)
  // 20% chance of selecting a bright neon color (indices 6-9)
  const silverOrNeon = Math.random() < 0.8 ? 'silver' : 'neon';
  
  if (silverOrNeon === 'silver') {
    // Select from silver/white colors (indices 0-5)
    const silverIndex = Math.floor(Math.random() * 6);
    return starColors[silverIndex];
  } else {
    // Select from neon colors (indices 6-9)
    const neonIndex = Math.floor(Math.random() * 4) + 6;
    return starColors[neonIndex];
  }
}

export default function AnimatedStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate initial stars
    const initialStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: -20, // Start from left side
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 30 + 20, // Random size between 20-50px
      color: getRandomStarColor(),
      duration: Math.random() * 2 + 2, // Random duration between 2-4s
      delay: Math.random() * 1, // Random delay between 0-1s
    }))
    setStars(initialStars)

    // Add new stars periodically
    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStar = {
          id: Date.now(),
          x: -20, // Start from left side
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          color: getRandomStarColor(),
          duration: Math.random() * 2 + 2,
          delay: 0,
        }
        return [...prevStars.slice(-19), newStar] // Keep only the last 20 stars
      })
    }, 500) // Add a new star every 500ms

    return () => clearInterval(interval)
  }, [])

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
            filter: "drop-shadow(0 0 12px currentColor)",
            opacity: 0.9,
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
            rotate: 0,
            x: 0,
          }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0],
            scale: [0.5, 1.2, 1, 0.8],
            rotate: 360,
            x: "120vw", // Move to right side of viewport
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
            repeat: 0,
          }}
        />
      ))}
    </div>
  )
} 