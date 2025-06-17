"use client"

import { motion } from "framer-motion"
import { useCallback, useState } from "react"
import GearGraphic from "./GearGraphic"

interface Step {
  id: string
  label: string
  descr: string
}

const steps: Step[] = [
  { id: "01", label: "Discovery", descr: "We learn about your business, goals, and vision to establish clear project objectives." },
  { id: "02", label: "Strategy", descr: "We develop a detailed roadmap and technical approach tailored to your specific needs." },
  { id: "03", label: "Design & Development", descr: "Our team crafts beautiful interfaces and builds robust applications with clean code." },
  { id: "04", label: "Launch & Optimize", descr: "We deploy your project and provide ongoing support to ensure continued success." },
]

export default function ProcessDropdown({ onClose }: { onClose: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null)

  const handleClick = useCallback(() => {
    const section = document.getElementById("process")
    section?.scrollIntoView({ behavior: "smooth" })
    onClose()
  }, [onClose])

  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ transformOrigin: 'top center' }}
      className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg overflow-hidden z-50"
      onMouseLeave={onClose}
    >
      <div className="flex items-start justify-center gap-16 px-12 py-6">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="group flex flex-col items-center w-48"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`${hovered !== null && hovered !== idx ? 'opacity-40' : 'opacity-100'} transition-opacity duration-300 relative text-zinc-300`}>
              <GearGraphic index={idx} active={hovered === idx} />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-zinc-400 pointer-events-none">
                {step.id}
              </span>
            </div>

            <button onClick={handleClick} className="mt-2 font-medium text-sm text-zinc-400 hover:text-zinc-700 transition-colors">
              {step.label}
            </button>

            <p className="mt-1 text-xs leading-snug text-zinc-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {step.descr}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
} 