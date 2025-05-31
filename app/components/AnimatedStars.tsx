"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Bright, bold colors for the stars
const starColors = [
  "#ff0000", // Pure red
  "#00ff00", // Pure green
  "#0000ff", // Pure blue
  "#ffff00", // Pure yellow
  "#ff00ff", // Pure magenta
  "#ff8000", // Bright orange
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
    const initialStars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (0-100%)
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 20 + 10, // Random size between 10-30px
      color: starColors[Math.floor(Math.random() * starColors.length)],
      duration: Math.random() * 2 + 3, // Random duration between 3-5s
      delay: Math.random() * 2, // Random delay between 0-2s
    }))
    setStars(initialStars)

    // Add new stars periodically
    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStar = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          duration: Math.random() * 2 + 3,
          delay: 0,
        }
        return [...prevStars.slice(-14), newStar] // Keep only the last 15 stars
      })
    }, 1000) // Add a new star every second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            rotate: 0,
            x: -100,
            y: 100
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.8],
            rotate: 360,
            x: 100,
            y: -100
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