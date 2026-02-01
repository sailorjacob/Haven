"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Props {
  parentRef: React.RefObject<HTMLElement | null>
  variant?: "blue" | "gray" | "white"
  dismissed?: boolean
  tapPosition?: { x: number; y: number } | null
}

import { useState } from "react"

// Crosshair overlay that follows the cursor; tap dismisses it with fade
export default function CrosshairOverlay({ parentRef, variant = "white", dismissed = false }: Props) {
  // Random starting position for variety (different each time it appears)
  const getRandomPosition = () => {
    const positions = [
      { x: -100, y: -100 },     // top-left
      { x: 300, y: -100 },      // top-right  
      { x: -100, y: 300 },      // bottom-left
      { x: 300, y: 300 },       // bottom-right
      { x: 150, y: -100 },      // top-center
    ]
    return positions[Math.floor(Math.random() * positions.length)]
  }

  const [startPos] = useState(getRandomPosition())
  const x = useMotionValue(startPos.x)
  const y = useMotionValue(startPos.y)

  const smoothX = useSpring(x, { stiffness: 50, damping: 15 })
  const smoothY = useSpring(y, { stiffness: 50, damping: 15 })

  useEffect(() => {
    if (dismissed) return
    const parent = parentRef.current
    if (!parent) return

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top
      if (offsetX >= 0 && offsetY >= 0 && offsetX <= rect.width && offsetY <= rect.height) {
        x.set(offsetX)
        y.set(offsetY)
      }
    }

    parent.addEventListener("mousemove", handleMove)
    return () => {
      parent.removeEventListener("mousemove", handleMove)
    }
  }, [parentRef, x, y, dismissed])

  const lineClass =
    variant === "gray"
      ? "bg-zinc-500/70"
      : variant === "white"
        ? "bg-white/70"
        : "bg-sky-400/70"
  const circleBorder =
    variant === "gray"
      ? "border-zinc-500"
      : variant === "white"
        ? "border-white"
        : "border-sky-400"

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20"
      initial={{ opacity: 1 }}
      animate={{
        opacity: dismissed ? 0 : 1,
      }}
      transition={{
        opacity: { duration: 1.5, delay: dismissed ? 0.2 : 0 },
      }}
    >
      <motion.div
        className={`absolute top-0 bottom-0 w-px ${lineClass}`}
        style={{ left: smoothX }}
      />
      <motion.div
        className={`absolute left-0 right-0 h-px ${lineClass}`}
        style={{ top: smoothY }}
      />
    </motion.div>
  )
}
