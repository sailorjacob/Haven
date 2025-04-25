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
  const lastPosition = useRef({ x: 50, y: 50 })
  const lastAngle = useRef(0)
  const [stars, setStars] = useState<Star[]>([])

  // Generate stars on client-side only
  useEffect(() => {
    setStars(generateStars(30))
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return

      const rect = wrapperRef.current.getBoundingClientRect()
      
      // Calculate normalized mouse position (-1 to 1)
      const mouseX = (e.clientX - rect.left) / rect.width * 2 - 1
      const mouseY = (e.clientY - rect.top) / rect.height * 2 - 1

      // Calculate distance from center (0 to 1)
      const distance = Math.min(Math.sqrt(mouseX * mouseX + mouseY * mouseY), 1)
      
      // Calculate angle, maintaining continuity
      let angle = Math.atan2(mouseY, mouseX)
      
      // Ensure smooth angle transitions
      const angleDiff = angle - lastAngle.current
      if (Math.abs(angleDiff) > Math.PI) {
        if (angleDiff > 0) {
          angle -= 2 * Math.PI
        } else {
          angle += 2 * Math.PI
        }
      }
      
      // Smooth out the movement
      const orbitRadius = 30
      const targetX = 50 + Math.cos(angle) * orbitRadius * distance
      const targetY = 50 + Math.sin(angle) * orbitRadius * distance
      
      // Apply smoothing
      const smoothFactor = 0.15
      const x = lastPosition.current.x + (targetX - lastPosition.current.x) * smoothFactor
      const y = lastPosition.current.y + (targetY - lastPosition.current.y) * smoothFactor
      
      setPosition({ x, y })
      setRotation(angle * (180 / Math.PI))
      
      lastPosition.current = { x, y }
      lastAngle.current = angle
    }

    const handleMouseLeave = () => {
      // Smoothly return to center
      const smoothToCenter = () => {
        if (!wrapperRef.current) return

        const dx = 50 - lastPosition.current.x
        const dy = 50 - lastPosition.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 0.1) {
          setPosition({ x: 50, y: 50 })
          setRotation(0)
          lastPosition.current = { x: 50, y: 50 }
          lastAngle.current = 0
          return
        }

        const smoothFactor = 0.1
        const x = lastPosition.current.x + dx * smoothFactor
        const y = lastPosition.current.y + dy * smoothFactor
        
        setPosition({ x, y })
        setRotation(lastAngle.current * (1 - smoothFactor))
        
        lastPosition.current = { x, y }
        lastAngle.current *= (1 - smoothFactor)
        
        requestAnimationFrame(smoothToCenter)
      }
      
      smoothToCenter()
    }

    const wrapper = wrapperRef.current
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove)
      wrapper.addEventListener("mouseleave", handleMouseLeave)
    }

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
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{
            background: `
              radial-gradient(circle at ${position.x}% ${position.y}%, 
                rgba(51,51,51,0.4),
                rgba(51,51,51,0.2) 20%, 
                rgba(51,51,51,0.1) 40%,
                rgba(255,255,255,0) 60%
              )
            `,
            transform: `scale(2) rotate(${rotation * 0.5}deg)`,
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