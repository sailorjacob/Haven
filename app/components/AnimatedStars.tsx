"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Rustic, warm colors for the stars
const starColors = [
  "#f5f5dc", // Beige
  "#d2b48c", // Tan
  "#b8860b", // Dark goldenrod
  "#cd853f", // Peru
  "#deb887", // Burlywood
  "#d2691e", // Chocolate
  "#a0522d", // Sienna
  "#8b4513", // Saddle brown
  "#f4a460", // Sandy brown
  "#ffd700", // Gold
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

// Function to select colors with higher probability for beige/tan tones
const getRandomStarColor = () => {
  // 80% chance of selecting a beige/tan color (indices 0-5)
  // 20% chance of selecting a darker brown or gold (indices 6-9)
  const lightOrDark = Math.random() < 0.8 ? 'light' : 'dark';
  
  if (lightOrDark === 'light') {
    // Select from lighter colors (indices 0-5)
    const lightIndex = Math.floor(Math.random() * 6);
    return starColors[lightIndex];
  } else {
    // Select from darker colors (indices 6-9)
    const darkIndex = Math.floor(Math.random() * 4) + 6;
    return starColors[darkIndex];
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
            filter: "drop-shadow(0 0 8px currentColor)",
            opacity: 0.7,
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
            rotate: 0,
            x: 0,
          }}
          animate={{ 
            opacity: [0, 0.7, 0.7, 0],
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