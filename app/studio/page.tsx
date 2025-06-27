"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function StudioPage() {
  return (
    <main className="studio-page min-h-screen w-full max-w-full overflow-x-hidden bg-zinc-50 text-zinc-900 flex flex-col items-center justify-center p-4 sm:p-6 font-mono" suppressHydrationWarning>
      <div className="container max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-start mb-12 w-full">
          <div className="flex-1 flex justify-start">
            <div className="group relative inline-block">
              <Link
                href="/moonlight-garden"
                className="inline-flex items-center justify-center border border-zinc-200 hover:border-zinc-300 text-zinc-700 py-2 px-4 text-xs lowercase tracking-widest rounded-full transition-all duration-300"
              >
                moonlight garden
              </Link>
              <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="bg-white/95 p-3 shadow-xl backdrop-blur-sm rounded-sm border border-zinc-100">
                  <p className="text-xs text-zinc-700 leading-relaxed whitespace-nowrap">tap with bitcoin for food</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="group relative inline-block">
              <Link
                href="/"
                className="inline-flex items-center justify-center border border-zinc-200 hover:border-zinc-300 text-zinc-700 py-2 px-4 text-xs lowercase tracking-widest transition-all duration-300 rounded-full"
              >
                home
              </Link>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="bg-white/95 p-3 shadow-xl backdrop-blur-sm rounded-sm border border-zinc-100">
                  <p className="text-xs text-zinc-700 leading-relaxed whitespace-nowrap">web design & development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="group relative inline-block">
              <Link
                href="/roundabout"
                className="inline-flex items-center justify-center border border-zinc-200 hover:border-zinc-300 text-zinc-700 py-2 px-4 text-xs lowercase tracking-widest rounded-full transition-all duration-300"
              >
                roundabout
              </Link>
              <div className="absolute top-full left-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="bg-white/95 p-3 shadow-xl backdrop-blur-sm rounded-sm border border-zinc-100">
                  <p className="text-xs text-zinc-700 leading-relaxed whitespace-nowrap">tap with bitcoin for a ride to the doctor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-5xl font-light mb-6 text-zinc-800 tracking-tighter relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 lowercase">haven</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent absolute -bottom-3 left-0"></div>
          </h1>
          <p className="text-sm md:text-base text-zinc-600 max-w-xl mx-auto tracking-wide leading-relaxed lowercase">
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
            title="art gallery network" 
            description="emulating prestigious galleries like gagosian, our spaces showcase cutting-edge contemporary art and digital media, redefining the intersection of technology and artistic expression."
            imageSrc="https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/artmuseum-Ghgi7H2LrI2doarDHPUkVhRND9HDdQ.png"
          />
          <FeatureBox 
            title="accommodations" 
            description="inspired by the luxury of hilton and the exclusivity of soho house, our living spaces create modern campuses for creative natives, fostering collaboration and community."
            imageSrc="https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/farm/Haven/house-Wc4iCwmD7205OmsHxkN3SQcHnSNyOU.png"
          />
          <FeatureBox 
            title="screening theaters" 
            description="intimate venues with state-of-the-art technology showcasing independent films, immersive experiences, and exclusive premieres across our global locations."
            imageSrc="https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/theater-aBlfe7xmjq2DPZyqsRznkpzHJMBpHf.png"
          />
          <FeatureBox 
            title="superplatform" 
            description="a comprehensive digital ecosystem combining a full-service production hub rivaling hollywood studios, a curated music experience that connects artists directly with their audience, and a netflix-caliber streaming service delivering premium original content. all focused on innovative storytelling that reflects our community's diverse perspectives."
            imageSrc="https://nu8yz6iiqtcqwmvw.public.blob.vercel-storage.com/park4-tP39MqkMJZM0ZClBu4axRgqiEBqIgP.png"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/work" 
            className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-700 py-3 px-8 text-xs lowercase tracking-widest transition-all duration-300 border border-zinc-200"
          >
            explore
          </Link>
          
          <div className="mt-8 flex justify-center">
            <div className="group relative">
              <div>
                <img 
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//bitcoinbank.svg" 
                  alt="Bitcoin Bank"
                  className="w-10 h-10 opacity-60 hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="bg-white/95 p-3 shadow-xl backdrop-blur-sm rounded-sm whitespace-nowrap border border-zinc-100">
                  <p className="text-xs text-zinc-700 leading-relaxed">Bitcoin Bank - branded transactions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
        
      {/* Grid pattern background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden opacity-5 pointer-events-none -z-10">
        <div className="absolute inset-0 w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM10 0h1v1h-1zM0 10h1v1H0zM10 10h1v1h-1z' fill='%23666' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </main>
  )
}

interface FeatureBoxProps {
  title: string;
  description: string;
  imageSrc?: string;
}

function FeatureBox({ title, description, imageSrc }: FeatureBoxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white p-4 text-left text-xs tracking-wider transition-colors rounded-sm hover:bg-zinc-50 border border-zinc-100 flex items-center justify-between group"
      >
        <span className="text-zinc-700">{title}</span>
        <ChevronDown 
          className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 mt-1 bg-white/95 p-4 shadow-xl backdrop-blur-sm rounded-sm border border-zinc-100 z-10 max-w-full overflow-hidden"
        >
          <p className="text-xs text-zinc-700 leading-relaxed mb-3">{description}</p>
          {imageSrc && (
            <div className="relative w-full h-48 rounded-sm overflow-hidden">
              <Image 
                src={imageSrc} 
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
} 