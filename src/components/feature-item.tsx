"use client"

import React from "react"
import { 
  Sparkles, Home, Network, Globe, Compass, Users,
  MessageSquare, BarChart, Check, ChevronRight 
} from "lucide-react"

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={24} />,
  Home: <Home size={24} />,
  Network: <Network size={24} />,
  Globe: <Globe size={24} />,
  Compass: <Compass size={24} />,
  Users: <Users size={24} />,
  MessageSquare: <MessageSquare size={24} />,
  BarChart: <BarChart size={24} />,
  Check: <Check size={24} />,
}

interface FeatureItemProps {
  title: string
  description: string
  icon: keyof typeof iconMap
  className?: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full ${className}`}>
      <div className="flex items-center mb-3">
        <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg text-blue-500 mr-3">
          {iconMap[icon]}
        </div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      
      <div className="flex items-center justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-blue-500 text-xs font-medium mr-1">Learn more</span>
        <ChevronRight size={14} className="text-blue-500" />
      </div>
    </div>
  )
}

export default FeatureItem 