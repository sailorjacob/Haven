"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { useTheme } from "next-themes"

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  color: 'sky' | 'green' | 'red'
  imagePosition: 'left' | 'center' | 'right'
}

const getGradientClass = (color: ServiceCardProps['color'], theme: string | undefined) => {
  if (theme === 'dark') {
    switch (color) {
      case 'sky':
        return 'from-zinc-800 via-zinc-700/40'
      case 'green':
        return 'from-zinc-800 via-zinc-700/40'
      case 'red':
        return 'from-zinc-800 via-zinc-700/40'
      default:
        return 'from-zinc-800 via-zinc-700/40'
    }
  }

  switch (color) {
    case 'sky':
      return 'from-white via-white/40'
    case 'green':
      return 'from-white via-white/40'
    case 'red':
      return 'from-white via-white/40'
    default:
      return 'from-white via-white/40'
  }
}

const getCardImage = (position: ServiceCardProps['imagePosition']) => {
  switch (position) {
    case 'left':
      return "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/sculpt33-trDJfLqZGE5gnHoCZvpAxCgP0WMIXz.png"
    case 'center':
      return "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/sculpt55-ydEwcSZ6ccBwsW9YNNbng3GFytrkGY.png"
    case 'right':
      return "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/sculpt44-dVmIfAquNWzGq8QPozSz1eJIfx0x2E.png"
    default:
      return "https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/sculpt33-trDJfLqZGE5gnHoCZvpAxCgP0WMIXz.png"
  }
}

export const ServiceCard = ({ icon: Icon, title, description, delay, color, imagePosition }: ServiceCardProps) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })
  const { theme } = useTheme() || { theme: 'light' }

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  const gradientClass = getGradientClass(color, theme)
  const cardImage = getCardImage(imagePosition)

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className={`relative backdrop-blur-sm p-6 rounded-lg border transition-all duration-300 hover:shadow-lg overflow-hidden group ${
        theme === 'dark'
          ? 'bg-zinc-800/80 border-zinc-700 hover:border-zinc-600'
          : 'bg-white/80 border-zinc-200 hover:border-zinc-400'
      }`}
    >
      {/* Background Image Window Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-500">
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-zinc-900/90 to-zinc-800/50'
              : 'bg-gradient-to-br from-white/90 to-white/50'
          }`} />
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <img
              src={cardImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-100'
            }`}
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
          >
            <Icon className={`w-5 h-5 transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
            }`} />
          </motion.div>
          <motion.h3
            className={`text-lg font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
            }`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
        </div>
        <motion.p
          className={`text-sm leading-relaxed transition-colors ${
            theme === 'dark'
              ? 'text-zinc-400 group-hover:text-zinc-300'
              : 'text-zinc-600 group-hover:text-zinc-800'
          }`}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
} 