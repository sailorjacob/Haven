"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Bright, bold colors for the stars
const starColors = [
  "#ff0000", // Pure red
  "#00ff00", // Pure green
  "#00ffff", // Neon cyan
  "#ffd700", // Construction yellow
  "#ff00ff", // Pure magenta
  "#800080", // Purple
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

export default function AnimatedStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate initial stars
    const initialStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: -20, // Start from left side
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 30 + 20, // Random size between 20-50px
      color: starColors[Math.floor(Math.random() * starColors.length)],
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
          color: starColors[Math.floor(Math.random() * starColors.length)],
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