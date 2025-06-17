"use client"

import { motion } from "framer-motion"
import { useCallback, useState, useRef } from "react"
import ProcessGearGraphic from "./ProcessGearGraphic"
import CrosshairOverlay from "./CrosshairOverlay"

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
  const dropdownRef = useRef<HTMLDivElement>(null)

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
      className="relative absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg overflow-hidden z-50"
      ref={dropdownRef}
      onMouseLeave={onClose}
    >
      <CrosshairOverlay parentRef={dropdownRef} variant="gray" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-16 py-8 w-full justify-items-center">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="group flex flex-col items-center"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`${hovered !== null && hovered !== idx ? 'opacity-40' : 'opacity-100'} transition-opacity duration-300 relative text-zinc-300`}>
              <ProcessGearGraphic index={idx} number={step.id} active={hovered === idx} />
            </div>

            <button onClick={handleClick} className="mt-3 font-medium text-sm text-zinc-400 hover:text-zinc-700 transition-colors">
              {step.label}
            </button>

            <p className="mt-2 text-xs leading-snug text-zinc-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {step.descr}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
} 