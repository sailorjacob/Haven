"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Film, Home, Coins, Users, Globe, Palette, Music, Code } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, delay)
  }, [delay])

  const getIcon = (): JSX.Element => {
    const iconProps = { className: "h-14 w-14 text-[#E6B325] mb-6" }

    switch (icon) {
      case "Film":
        return <Film {...iconProps} />
      case "Home":
        return <Home {...iconProps} />
      case "Coins":
        return <Coins {...iconProps} />
      case "Users":
        return <Users {...iconProps} />
      case "Globe":
        return <Globe {...iconProps} />
      case "Palette":
        return <Palette {...iconProps} />
      case "Music":
        return <Music {...iconProps} />
      case "Code":
        return <Code {...iconProps} />
      default:
        return <Film {...iconProps} />
    }
  }

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-2xl border-2 border-[#E6B325]/20 hover:border-[#E6B325]/40 transition-all duration-700 group opacity-0 transform translate-y-10 relative overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(230,179,37,0.1),rgba(0,0,0,0))]"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#E6B325] to-[#E6B325] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></div>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#E6B325] to-[#E6B325] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></div>
        {getIcon()}
      </div>
      <div className="relative">
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#E6B325] transition-colors duration-300">{title}</h3>
        <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6B325] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

export default FeatureCard

