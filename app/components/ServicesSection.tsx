"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"
import { ServiceCard } from "./ServiceCard"
import { BlueprintGrid } from "./BlueprintGrid"
import Image from "next/image"
import { useState } from "react"

export const ServicesSection = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 overflow-hidden transition-colors duration-300">
      {/* Background image removed */}
      
      <BlueprintGrid />
      {/* Toggle bar */}
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-10 mx-auto flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="inline-block"
        >
          {/* thin chevron */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700 dark:text-zinc-500">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
        <span className="uppercase tracking-wider">Services</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="services-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative z-10 mt-4"
          >


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon={Code}
                title="Web Development"
                description="Custom web applications built with modern frameworks and performance-focused architecture."
                delay={0.1}
                color="sky"
                imagePosition="left"
              />
              <ServiceCard
                icon={Palette}
                title="Graphic Design"
                description="Creative visual solutions including logos, branding, print materials, and digital assets that capture brand essence."
                delay={0.2}
                color="green"
                imagePosition="center"
              />
              <ServiceCard
                icon={Zap}
                title="Digital Strategy"
                description="Strategic brand positioning and digital transformation that drives business growth."
                delay={0.3}
                color="red"
                imagePosition="right"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 