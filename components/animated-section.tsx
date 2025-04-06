"use client"

import type React from "react"
import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animate-in")
            observer.unobserve(section)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 ${className}`}
    >
      {children}
    </section>
  )
}

export default AnimatedSection

