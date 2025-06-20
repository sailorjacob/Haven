"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"
import { ServiceCard } from "./ServiceCard"
import { BlueprintGrid } from "./BlueprintGrid"
import Image from "next/image"

export const ServicesSection = () => {
  return (
    <div className="relative bg-zinc-50 rounded-xl p-8 overflow-hidden">
      {/* Background image removed */}
      
      <BlueprintGrid />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 text-center mb-8"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-zinc-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <motion.p 
          className="text-lg text-zinc-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We specialize in creating digital experiences that combine beautiful design 
          with powerful functionality.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
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
          title="Web Design"
          description="Minimalist, elegant interfaces that elevate brands with thoughtful interactions and premium aesthetics."
          delay={0.2}
          color="green"
          imagePosition="center"
        />
        <ServiceCard
          icon={Zap}
          title="Digital Strategy"
          description="Comprehensive digital solutions that align with business goals and create meaningful user experiences."
          delay={0.3}
          color="red"
          imagePosition="right"
        />
      </div>
    </div>
  )
} 