"use client"
import { motion } from "framer-motion"
import { useCallback } from "react"

interface Step {
  id: string
  label: string
}

const steps: Step[] = [
  { id: "01", label: "Discovery" },
  { id: "02", label: "Strategy" },
  { id: "03", label: "Design & Development" },
  { id: "04", label: "Launch & Optimize" },
]

export default function ProcessDropdown({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const handleClick = useCallback(() => {
    const section = document.getElementById("process")
    if (section) {
      // Scroll with offset for fixed header
      const headerOffset = 96
      const elementTop = section.getBoundingClientRect().top + window.pageYOffset
      const scrollPosition = elementTop - headerOffset
      window.scrollTo({ top: scrollPosition, behavior: "smooth" })
      setTimeout(() => onClose(), 700)
    }
  }, [onClose])

  return (
    <motion.div
      initial={false}
      animate={visible ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg overflow-hidden z-50"
      onMouseLeave={onClose}
    >
      <div className="flex items-start justify-center gap-10 px-8 py-6">
        {steps.map(step => (
          <button
            key={step.id}
            onClick={handleClick}
            className="text-zinc-700 hover:text-zinc-900 text-sm font-light transition-colors tracking-wider uppercase"
          >
            <div className="text-xs mb-1 tracking-widest text-zinc-500">{step.id}</div>
            {step.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
} 