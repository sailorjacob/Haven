import type React from "react"
import { Sparkles, Home, Network, Globe, Users, Palette } from "lucide-react"

interface FeatureItemProps {
  title: string
  description: string
  icon: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
  const getIcon = (): JSX.Element => {
    const iconProps = { className: "h-6 w-6 text-[#E6B325]" }

    switch (icon) {
      case "Sparkles":
        return <Sparkles {...iconProps} />
      case "Home":
        return <Home {...iconProps} />
      case "Network":
        return <Network {...iconProps} />
      case "Globe":
        return <Globe {...iconProps} />
      case "Users":
        return <Users {...iconProps} />
      case "Palette":
        return <Palette {...iconProps} />
      default:
        return <Sparkles {...iconProps} />
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-4">
        {getIcon()}
        <h3 className="text-lg font-medium ml-3 text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureItem

