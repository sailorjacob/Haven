"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const toggleFeature = (title: string) => {
    if (activeFeature === title) {
      setActiveFeature(null);
    } else {
      setActiveFeature(title);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-6 font-mono">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-normal mb-6 text-zinc-300 tracking-tight">
            HIVE OF NATIVES
          </h1>
          <p className="text-sm md:text-base text-zinc-500 max-w-md mx-auto tracking-wide">
            [//] native technologists // network-state
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-14"
        >
          <SimpleFeature 
            title="ART GALLERIES" 
            isActive={activeFeature === "ART GALLERIES"}
            onClick={() => toggleFeature("ART GALLERIES")}
            svgPath="M5,5 Q15,30 30,15 T55,25 Q75,5 95,25"
          />
          <SimpleFeature 
            title="ACCOMMODATIONS" 
            isActive={activeFeature === "ACCOMMODATIONS"}
            onClick={() => toggleFeature("ACCOMMODATIONS")}
            svgPath="M10,10 h80 v40 h-80 Z"
          />
          <SimpleFeature 
            title="SCREENING THEATERS" 
            isActive={activeFeature === "SCREENING THEATERS"}
            onClick={() => toggleFeature("SCREENING THEATERS")}
            svgPath="M10,40 L50,10 L90,40 L50,70 Z"
          />
          <SimpleFeature 
            title="CONTENT STUDIO" 
            isActive={activeFeature === "CONTENT STUDIO"}
            onClick={() => toggleFeature("CONTENT STUDIO")}
            svgPath="M30,10 C10,30 30,50 50,30 S90,30 70,50"
          />
          <SimpleFeature 
            title="MUSIC PLATFORM" 
            isActive={activeFeature === "MUSIC PLATFORM"} 
            onClick={() => toggleFeature("MUSIC PLATFORM")}
            svgPath="M10,30 Q30,5 50,30 T90,30"
          />
          <SimpleFeature 
            title="BEEHIVE PLATFORM" 
            isActive={activeFeature === "BEEHIVE PLATFORM"}
            onClick={() => toggleFeature("BEEHIVE PLATFORM")}
            svgPath="M50,10 L70,30 L50,50 L30,30 Z M30,30 L10,30 M70,30 L90,30 M50,50 L50,70"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link 
            href="/home" 
            className="inline-flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-zinc-300 py-3 px-6 text-xs uppercase tracking-widest transition-all duration-300"
          >
            IMMIGRATE
          </Link>
        </motion.div>
      </div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM10 0h1v1h-1zM0 10h1v1H0zM10 10h1v1h-1z' fill='%23999' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </main>
  )
}

interface SimpleFeatureProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  svgPath: string;
}

function SimpleFeature({ title, isActive, onClick, svgPath }: SimpleFeatureProps) {
  return (
    <div className="flex flex-col">
      <button 
        onClick={onClick}
        className={`bg-zinc-750 p-4 border text-left text-xs tracking-wider cursor-pointer transition-colors ${
          isActive ? "border-zinc-500" : "border-zinc-700 hover:border-zinc-600"
        }`}
      >
        <span className="text-zinc-400">{title}</span>
      </button>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
            className="bg-zinc-800 border-l border-r border-b border-zinc-700 p-4"
          >
            <svg viewBox="0 0 100 80" width="100%" height="80">
              <motion.path
                d={svgPath}
                stroke="rgba(212, 212, 216, 0.5)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

