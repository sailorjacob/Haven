"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = "" }) => {
  return (
    <div className={`relative py-16 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="relative">
            <motion.div
              className="absolute left-0 top-1/2 h-0.5 w-full bg-gradient-to-r from-transparent via-[#E6B325] to-transparent opacity-50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E6B325] opacity-70"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-[#E6B325] opacity-40"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDivider 