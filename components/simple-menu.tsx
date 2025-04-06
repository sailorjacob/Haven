"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Menu items
const menuItems = [
  { name: "Vision", href: "#vision" },
  { name: "Components", href: "#components" },
  { name: "Native", href: "#membership" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Contact", href: "#contact" },
]

interface SimpleMenuProps {
  activeSection: number
}

const SimpleMenu: React.FC<SimpleMenuProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [currentSection, setCurrentSection] = useState(-1) // Start with no section active
  const scrollTimeout = useRef<NodeJS.Timeout>()
  const animationFrame = useRef<number>()
  const isManualScroll = useRef(false)

  // Handle scroll events and section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
      
      if (!isManualScroll.current) {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current)
        }
        setIsScrolling(true)
        
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false)
          // Only update section if not in manual scroll
          if (!isManualScroll.current) {
            setCurrentSection(activeSection)
          }
        }, 150)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [activeSection])

  // Update current section when active section changes and not manually scrolling
  useEffect(() => {
    if (!isScrolling && !isManualScroll.current) {
      // Only highlight Vision section when we've scrolled past the hero
      if (activeSection === 0 && window.scrollY < 100) {
        setCurrentSection(-1)
      } else {
        setCurrentSection(activeSection)
      }
    }
  }, [activeSection, isScrolling])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    e.preventDefault()
    
    // Check if it's an external link (starts with '/') or anchor link (starts with '#')
    if (href.startsWith('/')) {
      // External page link - use router to navigate
      window.location.href = href;
      return;
    }
    
    // Handle anchor link scrolling for same-page navigation
    const element = document.querySelector(href)
    if (element) {
      // Cancel any ongoing animation
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }

      isManualScroll.current = true
      setIsScrolling(true)
      setCurrentSection(index)
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = elementPosition - startPosition - 50 // Offset for header
      const duration = 2000 // Longer duration
      let start: number | null = null
      
      const easeOutQuint = (x: number): number => {
        return 1 - Math.pow(1 - x, 5)
      }

      const animate = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        
        const easedProgress = easeOutQuint(progress)
        window.scrollTo({
          top: startPosition + distance * easedProgress,
          behavior: 'auto' // Prevent conflict with native smooth scroll
        })
        
        if (progress < 1) {
          animationFrame.current = requestAnimationFrame(animate)
        } else {
          setTimeout(() => {
            isManualScroll.current = false
            setIsScrolling(false)
          }, 150)
        }
      }
      
      animationFrame.current = requestAnimationFrame(animate)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, index)}
                className={`text-sm font-medium transition-colors duration-500 ${
                  currentSection === index ? "text-[#E6B325]" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default SimpleMenu

