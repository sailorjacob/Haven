"use client"

import { useEffect, useRef } from "react"

const InteractiveGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Gradient parameters
    let mouseX = 0
    let mouseY = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    const gradientRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      // Smoothly follow mouse
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      // Create gradient
      const gradient = ctx.createRadialGradient(
        targetX,
        targetY,
        0,
        targetX,
        targetY,
        gradientRadius
      )

      // Light blue/purple theme
      gradient.addColorStop(0, "rgba(236, 242, 255, 1)")
      gradient.addColorStop(0.3, "rgba(229, 236, 255, 0.8)")
      gradient.addColorStop(0.6, "rgba(214, 226, 255, 0.6)")
      gradient.addColorStop(1, "rgba(248, 250, 255, 0.9)")

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
}

export default InteractiveGradient 