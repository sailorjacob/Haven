"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function LandingPage() {
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
          <SimpleFeature title="ART GALLERIES" />
          <SimpleFeature title="ACCOMMODATIONS" />
          <SimpleFeature title="SCREENING THEATERS" />
          <SimpleFeature title="CONTENT STUDIO" />
          <SimpleFeature title="MUSIC PLATFORM" /> 
          <SimpleFeature title="BEEHIVE PLATFORM" />
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
}

function SimpleFeature({ title }: SimpleFeatureProps) {
  return (
    <div className="bg-zinc-750 p-4 border border-zinc-700 text-xs tracking-wider">
      <span className="text-zinc-400">{title}</span>
    </div>
  )
}

