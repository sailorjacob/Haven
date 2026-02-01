"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Props {
  parentRef: React.RefObject<HTMLElement | null>
  variant?: "blue" | "gray" | "white"
  dismissed?: boolean
  tapPosition?: { x: number; y: number } | null
}

// Crosshair overlay that follows the cursor; tap dismisses it (floats to tap then fades)
export default function CrosshairOverlay({ parentRef, variant = "white", dismissed = false, tapPosition = null }: Props) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const smoothX = useSpring(x, { stiffness: 40, damping: 12 })
  const smoothY = useSpring(y, { stiffness: 40, damping: 12 })

  // Don't animate position on dismiss - just fade in place

  useEffect(() => {
    if (dismissed) return
    const parent = parentRef.current
    if (!parent) return

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top
      if (offsetX < 0 || offsetY < 0 || offsetX > rect.width || offsetY > rect.height) {
        x.set(-100)
        y.set(-100)
      } else {
        x.set(offsetX)
        y.set(offsetY)
      }
    }

    parent.addEventListener("mousemove", handleMove)
    parent.addEventListener("mouseleave", () => {
      x.set(-100)
      y.set(-100)
    })
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
