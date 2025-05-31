"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const colors = [
  "bg-blue-400",
  "bg-pink-400",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-green-400",
  "bg-red-400",
  "bg-purple-400",
]

const AnimatedStars = () => {
  const [stars, setStars] = useState<Array<{
    id: number
    color: string
    size: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 20 + 10, // Random size between 10 and 30
      delay: Math.random() * 2, // Random delay between 0 and 2 seconds
      duration: Math.random() * 2 + 2, // Random duration between 2 and 4 seconds
    }))
    setStars(initialStars)

    // Add new stars periodically
    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStar = {
          id: Date.now(),
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 20 + 10,
          delay: 0,
          duration: Math.random() * 2 + 2,
        }
        return [...prevStars.slice(-14), newStar] // Keep only the last 15 stars
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute ${star.color} rounded-full`}
          style={{
            width: star.size,
            height: star.size,
            left: -star.size,
            bottom: -star.size,
          }}
          initial={{ 
            x: 0, 
            y: 0,
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            x: "calc(100vw + 100px)",
            y: "calc(-100vh - 100px)",
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedStars 