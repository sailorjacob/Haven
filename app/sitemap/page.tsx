"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SitemapPage() {
  const [isReturnHovered, setReturnHovered] = useState(false);
  
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/20 via-zinc-50/5 to-white opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-zinc-900 tracking-tight">
            Haven Navigation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-600 mb-6">
            Complete map of the Haven ecosystem - from network state vision to creative projects
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Core Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light text-zinc-800 mb-6 border-b border-zinc-200 pb-2">
              Core Pages
            </h2>
            <div className="space-y-4">
              <PageItem 
                href="/"
                title="Homepage"
                description="Main landing page with Haven overview and navigation"
              />
              <PageItem 
                href="/explore"
                title="Explore"
                description="Interactive exploration page with bouncing navigation"
              />
              <PageItem 
                href="/studio"
                title="Studio"
                description="Portfolio showcase of web development and design projects"
              />
              <PageItem 
                href="/contact"
                title="Contact"
                description="Haven: The Network State of Creative Excellence - contact and vision"
              />
            </div>
          </motion.div>

          {/* Network State Pages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-light text-zinc-800 mb-6 border-b border-zinc-200 pb-2">
              Network State Vision
            </h2>
            <div className="space-y-4">
              <PageItem 
                href="/ns-essay"
                title="Network State Essay"
                description="Technology, Music, Politics, and Art: A Vision for the Future"
                tags={["Philosophy", "Politics", "Art"]}
              />
              <PageItem 
                href="/ns-predictions"
                title="Network State Predictions"
                description="The World in 2035 - detailed predictions with countdown timer"
                tags={["Future", "Predictions", "2035"]}
              />
              <PageItem 
                href="/home"
                title="Network State Community"
                description="Modern network state for artists, technologists, and creators"
                tags={["Community", "Vision"]}
              />
              <PageItem 
                href="/products"
                title="Network State Infrastructure"
                description="Detailed breakdown of Haven's governance and infrastructure"
                tags={["Infrastructure", "Governance"]}
              />
            </div>
          </motion.div>

          {/* Conceptual Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-light text-zinc-800 mb-6 border-b border-zinc-200 pb-2">
              Conceptual & Essays
            </h2>
            <div className="space-y-4">
              <PageItem 
                href="/foreshadow-effect"
                title="The Foreshadow Effect"
                description="Concept about how current events hint at future developments"
                tags={["Theory", "Future"]}
              />
              <PageItem 
                href="/letter"
                title="Letter"
                description="Personal letter with network state references and vision"
                tags={["Personal", "Vision"]}
              />
              <PageItem 
                href="/story"
                title="Story"
                description="Story content mentioning network states and personal journey"
                tags={["Narrative", "Personal"]}
              />
            </div>
          </motion.div>

          {/* Project Showcases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-light text-zinc-800 mb-6 border-b border-zinc-200 pb-2">
              Featured Projects
            </h2>
            <div className="space-y-4">
              <PageItem 
                href="/bitcoinbank"
                title="Bitcoin Bank"
                description="Branded Bitcoin transactions with bee animations and data visualization"
                tags={["Crypto", "Design", "Animation"]}
              />
              <PageItem 
                href="/moonlight-garden"
                title="Moonlight Garden"
                description="24/7 mobile order-only restaurant with automation systems"
                tags={["Restaurant", "Automation", "Future"]}
              />
              <PageItem 
                href="/killmefxster"
                title="Kill Me Faster"
                description="Crypto-art project: red diamonds, digital army, and freedom"
                tags={["Art", "Crypto", "Rebellion"]}
              />
            </div>
          </motion.div>

          {/* Studio Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-light text-zinc-800 mb-6 border-b border-zinc-200 pb-2">
              Studio Portfolio Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PageItem 
                href="/ammocat"
                title="Ammo Cat"
                description="Artist website, webstore, and mini-game with advanced filtering"
                tags={["Art", "E-commerce", "Gaming"]}
              />
              <PageItem 
                href="/jacobhalestudio"
                title="Jacob Hale Studio"
                description="Photography portfolio website with minimalist design"
                tags={["Photography", "Portfolio", "Design"]}
              />
              <PageItem 
                href="/xrated"
                title="x-rated"
                description="Social platform with selective content locking and monetization features"
                tags={["Social", "Content", "Monetization"]}
              />
              <PageItem 
                href="/roundabout"
                title="Roundabout"
                description="Medical ride-sharing platform with Bitcoin payment integration"
                tags={["Transport", "Bitcoin", "Medical"]}
              />
              <PageItem 
                href="/beloved"
                title="BeLoved Transportation"
                description="NEMT provider platform with personalized content and scheduling"
                tags={["Transport", "Healthcare", "Platform"]}
              />
              <PageItem 
                href="/swivimedia"
                title="Swivimedia"
                description="Viral marketing platform connecting brands with micro-influencers"
                tags={["Marketing", "Influencers", "Video"]}
              />
              <PageItem 
                href="/anthonyhadenguest"
                title="Anthony Haden-Guest"
                description="Simple portfolio for renowned author and art critic"
                tags={["Literature", "Art Criticism", "Portfolio"]}
              />
            </div>
          </motion.div>
        </div>

        {/* Core Vision Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-16 border-t border-zinc-200"
        >
          <h2 className="text-2xl font-light text-zinc-800 mb-8 text-center">
            Core Network State Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-100/50 p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-800">Digital-First Community</h3>
              <p className="text-zinc-600 text-sm">
                A network state that operates across borders with shared resources, combining premium content platforms with physical spaces.
              </p>
            </div>
            <div className="bg-zinc-100/50 p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-800">Economic Revolution</h3>
              <p className="text-zinc-600 text-sm">
                Bitcoin/crypto integration, branded transactions, and the elimination of physical cash through innovative payment systems.
              </p>
            </div>
            <div className="bg-zinc-100/50 p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-800">Creative Freedom</h3>
              <p className="text-zinc-600 text-sm">
                A platform for artists, technologists, and creators to operate without traditional constraints using decentralized governance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center border-sky-400 border text-zinc-900 font-medium py-3 px-8 rounded-full text-sm relative overflow-hidden group tracking-widest"
            onMouseEnter={() => setReturnHovered(true)}
            onMouseLeave={() => setReturnHovered(false)}
          >
            {/* Sky blue background that fills from left on hover */}
            <div className="absolute inset-0 bg-sky-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            {/* Text content */}
            <span className={`relative z-10 transition-opacity duration-300 ${isReturnHovered ? 'opacity-0' : 'opacity-100'}`}>
              Return Home
            </span>
            
            {/* Arrow icon that appears on hover */}
            <ArrowRight className={`w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${isReturnHovered ? 'opacity-100' : 'opacity-0'}`} />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

interface PageItemProps {
  href: string
  title: string
  description: string
  tags?: string[]
}

function PageItem({ href, title, description, tags }: PageItemProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-zinc-100/30 hover:bg-zinc-100/50 p-4 rounded-sm border border-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
        <h3 className="text-zinc-800 font-medium mb-2 group-hover:text-zinc-900 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-zinc-200/50 text-zinc-600 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
} 