"use client"

import { useEffect, useRef, useState } from "react"

interface InteractiveGradientProps {
  className?: string
}

interface Star {
  id: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

// Generate random star positions
const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `star-${index}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 15 + 20, // 20-35s duration
    delay: Math.random() * -20, // Random start time
  }))
}

// Define keyframes outside component
const floatKeyframes = `
  @keyframes float {
    from {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    to {
      transform: translateY(-100%) translateX(50%);
      opacity: 0;
    }
  }
`

const twinkleKeyframes = `
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }
`

const InteractiveGradient: React.FC<InteractiveGradientProps> = ({ className = "" }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [rotation, setRotation] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const [stars, setStars] = useState<Star[]>([])
  
  // Store current and target values for smooth animation
  const currentPos = useRef({ x: 50, y: 50 })
  const targetPos = useRef({ x: 50, y: 50 })
  const currentRotation = useRef(0)
  const isMouseInside = useRef(false)

  // Generate stars on client-side only
  useEffect(() => {
    setStars(generateStars(30))
    
    // Setup animation loop for smooth transitions
    const animate = () => {
      // Calculate smoothing factor based on whether mouse is inside the component
      const smoothing = isMouseInside.current ? 0.1 : 0.05
      
      // Calculate new position with smoothing
      const newX = currentPos.current.x + (targetPos.current.x - currentPos.current.x) * smoothing
      const newY = currentPos.current.y + (targetPos.current.y - currentPos.current.y) * smoothing
      
      // Calculate new rotation with smoothing
      // Only update if position changed significantly
      const dx = targetPos.current.x - 50
      const dy = targetPos.current.y - 50
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI)
      
      // Smooth rotation change
      let angleDiff = targetAngle - currentRotation.current
      // Handle angle wrapping
      if (angleDiff > 180) angleDiff -= 360
      if (angleDiff < -180) angleDiff += 360
      
      const newRotation = currentRotation.current + angleDiff * smoothing * 0.5
      
      // Only update state if there's a significant change
      const hasChanged = 
        Math.abs(newX - currentPos.current.x) > 0.01 || 
        Math.abs(newY - currentPos.current.y) > 0.01 ||
        Math.abs(angleDiff) > 0.01
      
      if (hasChanged) {
        currentPos.current = { x: newX, y: newY }
        currentRotation.current = newRotation
        setPosition({ x: newX, y: newY })
        setRotation(newRotation)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate)
    
    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return
      
      isMouseInside.current = true
      
      // Get container dimensions and center point
      const rect = wrapperRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      // Calculate normalized position (-1 to 1 range)
      const normalizedX = (e.clientX - rect.left - centerX) / centerX
      const normalizedY = (e.clientY - rect.top - centerY) / centerY
      
      // Calculate distance from center (0 to 1)
      const distance = Math.min(
        Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY),
        1
      )
      
      // Apply a non-linear distance effect for smoother response
      const scaledDistance = Math.pow(distance, 0.7) * 20
      
      // Update target position (50,50 is center)
      targetPos.current = {
        x: 50 + normalizedX * scaledDistance,
        y: 50 + normalizedY * scaledDistance
      }
    }
    
    const handleMouseLeave = () => {
      isMouseInside.current = false
      // Reset target position to center
      targetPos.current = { x: 50, y: 50 }
    }
    
    // Attach event listeners
    const wrapper = wrapperRef.current
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove)
      wrapper.addEventListener("mouseleave", handleMouseLeave)
    }
    
    // Clean up
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", handleMouseMove)
        wrapper.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <style>{floatKeyframes}</style>
      <style>{twinkleKeyframes}</style>
      <div 
        ref={wrapperRef} 
        className={`absolute inset-0 overflow-hidden ${className}`}
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${position.x}% ${position.y}%, 
                rgba(51,51,51,0.4),
                rgba(51,51,51,0.2) 20%, 
                rgba(51,51,51,0.1) 40%,
                rgba(255,255,255,0) 60%
              )
            `,
            transform: `scale(2) rotate(${rotation * 0.2}deg)`,
            pointerEvents: "none",
          }}
        />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(51,51,51,0.2),
                rgba(255,255,255,0) 50%
              )
            `,
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full opacity-0"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: 'rgba(51,51,51,0.8)',
                animation: `float ${star.duration}s linear infinite, twinkle 3s ease-in-out infinite`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default InteractiveGradient 