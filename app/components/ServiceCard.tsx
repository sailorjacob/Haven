"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { LucideIcon } from "lucide-react"

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  color: 'sky' | 'green' | 'red'
  imagePosition: 'left' | 'center' | 'right'
}

const getGradientClass = (color: ServiceCardProps['color']) => {
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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  const gradientClass = getGradientClass(color)
  const cardImage = getCardImage(imagePosition)

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg overflow-hidden group"
    >
      {/* Background Image Window Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/50" />
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
        <motion.div 
          className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6"
          initial={{ rotate: -180, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay }}
          viewport={{ once: true }}
        >
          <Icon className="w-6 h-6 text-zinc-700" />
        </motion.div>
        <motion.h3 
          className="text-xl font-medium text-zinc-900 mb-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-zinc-600 leading-relaxed group-hover:text-zinc-800 transition-colors"
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