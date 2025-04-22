"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  // Removed the activeFeature state since we're now using hover effects

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-400 flex flex-col items-center justify-center p-6 font-mono">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-5xl font-light mb-6 text-zinc-300 tracking-tighter relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-500 lowercase">haven</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent absolute -bottom-3 left-0"></div>
          </h1>
          <p className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto tracking-wide leading-relaxed lowercase">
            a digital superplatform bridging premium content with physical spaces. 
            curated media, art, and community for the modern native.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"
        >
          <FeatureBox 
            title="art galleries" 
            description="emulating prestigious galleries like gagosian, our spaces showcase cutting-edge contemporary art and digital media, redefining the intersection of technology and artistic expression."
          />
          <FeatureBox 
            title="accommodations" 
            description="inspired by the luxury of hilton and the exclusivity of soho house, our living spaces create modern campuses for creative natives, fostering collaboration and community."
          />
          <FeatureBox 
            title="screening theaters" 
            description="intimate venues with state-of-the-art technology showcasing independent films, immersive experiences, and exclusive premieres across our global locations."
          />
          <FeatureBox 
            title="content studio" 
            description="a full-service production hub rivaling hollywood studios, creating original content that pushes boundaries across all digital platforms."
          />
          <FeatureBox 
            title="music platform" 
            description="challenging spotify with a curated music experience that connects artists directly with their audience through exclusive content and live performances."
          />
          <FeatureBox 
            title="digital platform" 
            description="a netflix-caliber streaming service delivering premium original content, with a focus on innovative storytelling that reflects our community's diverse perspectives."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <Link
              href="https://roundabout.run"
              className="inline-flex items-center justify-center border border-zinc-700 hover:border-zinc-600 text-zinc-400 py-3 px-8 text-xs lowercase tracking-widest transition-all duration-300 rounded-full"
            >
              roundabout
            </Link>
            <p className="text-sm text-zinc-500">tap with bitcoin for a ride to the doctor</p>
          </div>

          <div className="space-y-4">
            <Link
              href="/moonlight-garden"
              className="inline-flex items-center justify-center border border-zinc-700 hover:border-zinc-600 text-zinc-400 py-3 px-8 text-xs lowercase tracking-widest transition-all duration-300 rounded-full"
            >
              moonlight garden
            </Link>
            <p className="text-sm text-zinc-500">tap with bitcoin for food</p>
          </div>

          <Link
            href="/home" 
            className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-400 py-3 px-8 text-xs lowercase tracking-widest transition-all duration-300"
          >
            explore
          </Link>
        </motion.div>
      </div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM10 0h1v1h-1zM0 10h1v1H0zM10 10h1v1h-1z' fill='%23333' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </main>
  )
}

interface FeatureBoxProps {
  title: string;
  description: string;
}

function FeatureBox({ title, description }: FeatureBoxProps) {
  return (
    <div className="group relative">
      <div className="bg-zinc-850 p-4 text-left text-xs tracking-wider cursor-pointer transition-colors rounded-sm hover:bg-zinc-800">
        <span className="text-zinc-400">{title}</span>
      </div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-800/90 p-4 shadow-xl backdrop-blur-sm rounded-sm">
          <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

