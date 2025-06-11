"use client"

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'

const starImages = [
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_0ef0c6d5-b5cc-4696-8a49-b673622b934f-xtPrf5Skrzk3Hq7Sd239ic5v9AXXjE.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_572b43ec-44a5-42dd-b4af-8d85e9524dbb-EOe677e5F3RT38TaG7Zg3evGU4KaGL.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_5f85426b-4d80-4af9-b1c0-e6c90e801d9c-F7sd8lCsFnpVHZo64Chz0ytKTwPXGa.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_6a47a6e0-5c11-49ec-a8ee-a05958a4df33-IlD4nkssIzDevMPHn8PIAM6MCwPUXP.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_6ca327f5-dce3-4e2c-8131-a90a61552a28-JDNSE4hVCGrA6IaZoHO3kXYHERpuot.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_954f9380-dc0d-4164-97b4-fd251a335f7f-cev4CFVkQUvWCf50AeuelRPstdOq8w.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_a4addff8-6d53-4336-a6fc-1a7aa12d6044-JZR1M9NI6Um1Ol18W754CXMK1PpYys.png",
  "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/stars/transparentstars/TE_BACKGROUND_SILVER_SP_db364228-4040-4833-9e09-59b56fa65928-iYDDZ7MiTmdSba7MApELjXDu4vg6dk.png"
]

interface StarPosition {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  opacity: number
  image: string
  scrollOffset: number
}

// Separate component for individual stars
function Star({ star, scrollProgress, windowHeight }: { 
  star: StarPosition
  scrollProgress: ReturnType<typeof useMotionValue<number>>
  windowHeight: number 
}) {
  const opacity = useTransform(
    scrollProgress,
    [
      (star.scrollOffset - 200) / windowHeight,
      star.scrollOffset / windowHeight,
      (star.scrollOffset + 800) / windowHeight,
      (star.scrollOffset + 1000) / windowHeight
    ],
    [0, star.opacity, star.opacity, 0]
  )

  const y = useTransform(
    scrollProgress,
    [0, 1],
    [star.y, star.y - 50]
  )

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${star.x}px`,
        opacity,
        y,
        rotate: star.rotation,
        scale: star.scale,
      }}
      className="w-32 h-32 md:w-48 md:h-48 origin-center"
    >
      <Image
        src={star.image}
        alt="Decorative star"
        width={192}
        height={192}
        className="w-full h-full object-contain"
      />
    </motion.div>
  )
}

export function ScatteredStars() {
  const [stars, setStars] = useState<StarPosition[]>([])
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Create a motion value for scroll progress
  const scrollProgress = useMotionValue(0)

  // Update scroll progress when scrollY changes
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      scrollProgress.set(latest / windowSize.height)
    })
    return () => unsubscribe()
  }, [scrollY, windowSize.height, scrollProgress])

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight
      })
    }

    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  useEffect(() => {
    if (windowSize.width === 0) return

    const newStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      rotation: Math.floor(Math.random() * 360),
      scale: 1.5 + Math.random() * 2.5,
      opacity: 0.4 + Math.random() * 0.4,
      image: starImages[Math.floor(Math.random() * starImages.length)],
      scrollOffset: Math.random() * windowSize.height
    }))

    setStars(newStars)
  }, [windowSize])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Overlay filter */}
      <div className="absolute inset-0 bg-white/50 mix-blend-overlay" />
      
      {/* Stars */}
      {stars.map((star) => (
        <Star
          key={star.id}
          star={star}
          scrollProgress={scrollProgress}
          windowHeight={windowSize.height}
        />
      ))}
    </div>
  )
} 