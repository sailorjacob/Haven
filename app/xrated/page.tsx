"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Lock, Shield, Users, MessageCircle, Heart, Image as ImageIcon, Filter, ChevronRight } from "lucide-react"
import { Footer } from "@/components/footer"

export default function XRatedPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="bg-black w-full text-white">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div 
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 py-24 overflow-hidden"
      >
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>
        
        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
            X-Rated
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-6">
            A social platform for selectively sharing and locking content with sophisticated privacy controls and monetization options.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Social Media</span>
            <span className="text-zinc-600">•</span>
            <span>Content Platform</span>
            <span className="text-zinc-600">•</span>
            <a href="https://xrated-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
              Visit Website
            </a>
          </div>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//xrated1.png"
              alt="X-Rated App Interface"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                X-Rated is an innovative social platform that combines the best elements of Instagram, Twitter, OnlyFans, and Tinder into a unified experience. The platform empowers creators to selectively share and lock specific content - from images and videos to writing and photos - with granular privacy controls and monetization options.
              </p>
              <p className="text-zinc-400">
                Users can create tiered content experiences, with some material publicly available while premium content remains locked behind subscription paywalls or one-time purchases. The platform features sophisticated matching algorithms similar to dating apps, helping connect creators with audiences most likely to appreciate their content.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-300">X-Rated</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-300">2025</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-300">Platform Design, Development</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-300">Next.js, Supabase, Stripe, React</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <div className="mb-4">
                <Lock className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg mb-4 text-zinc-200">Selective Content Locking</h3>
              <p className="text-zinc-400">
                Granular privacy controls allowing creators to lock specific posts, images, videos, or text behind paywalls with multiple access tiers.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <div className="mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg mb-4 text-zinc-200">Smart Matching</h3>
              <p className="text-zinc-400">
                Advanced algorithms connect creators with their ideal audience based on content preferences, interaction history, and demographic data.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <div className="mb-4">
                <Users className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg mb-4 text-zinc-200">Creator Community</h3>
              <p className="text-zinc-400">
                Robust community features encouraging collaboration between creators, including cross-promotion tools and engagement analytics.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Platform Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Platform Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-pink-500 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-200 mb-2">Social Feed</h3>
              <p className="text-zinc-400">
                Instagram-inspired timeline with rich media support, featuring both public content and previews of premium locked material.
              </p>
            </div>
            <div>
              <div className="text-4xl text-pink-500 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Messaging System</h3>
              <p className="text-zinc-400">
                Private messaging with tiered access, allowing creators to charge for direct communication or offer it as a perk to subscribers.
              </p>
            </div>
            <div>
              <div className="text-4xl text-pink-500 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Content Marketplace</h3>
              <p className="text-zinc-400">
                OnlyFans-inspired subscription and purchase options with flexible monetization tools for creators to maximize earnings.
              </p>
            </div>
            <div>
              <div className="text-4xl text-pink-500 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Discovery Engine</h3>
              <p className="text-zinc-400">
                Tinder-like swiping interface for content and creator discovery, with sophisticated recommendation algorithms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* User Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">User Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <h3 className="text-xl text-zinc-200 mb-4">For Creators</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Flexible content locking options with custom pricing tiers</span>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Comprehensive analytics dashboard tracking engagement and revenue</span>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Automated content scheduling and audience targeting tools</span>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Cross-platform promotion integrations with other social networks</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-xl text-zinc-200 mb-4">For Subscribers</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Personalized content recommendations based on viewing history</span>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Unified subscription management with spending controls</span>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Private collection features for saving and organizing favorite content</span>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-400">Enhanced privacy options for discreet browsing and interaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Technical Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <div className="mb-4">
                <Shield className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg mb-4 text-zinc-200">Security & Privacy</h3>
              <p className="text-zinc-400">
                Advanced encryption for all content with granular access controls. Implements device-level authentication and secure content delivery networks to prevent unauthorized access.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <div className="mb-4">
                <ImageIcon className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg mb-4 text-zinc-200">Media Processing</h3>
              <p className="text-zinc-400">
                Sophisticated media handling pipeline including real-time transcoding, intelligent compression, watermarking options, and content preview generation.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <div className="mb-4">
                <MessageCircle className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg mb-4 text-zinc-200">Engagement Systems</h3>
              <p className="text-zinc-400">
                Real-time notification architecture, intelligent comment filtering, engagement gamification, and creator-subscriber communication tools.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Platform Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-xl mb-4 text-zinc-200">Creator Empowerment</h3>
              <p className="text-zinc-400">
                X-Rated gives content creators unprecedented control over their digital presence, allowing them to selectively monetize specific content while maintaining a free public profile. The platform's tiered approach to content access has enabled creators to experiment with pricing models and maximize revenue.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-xl mb-4 text-zinc-200">Subscription Innovation</h3>
              <p className="text-zinc-400">
                The platform has pioneered new subscription models beyond the typical all-access monthly fee, including pay-per-view content, time-limited access passes, and bundled creator packages. This flexibility has increased overall platform engagement and revenue for creators.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-8 rounded-sm border border-pink-500/30">
            <h3 className="text-xl mb-4 text-zinc-200 text-center">Results at a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-pink-400 mb-2">68%</p>
                <p className="text-zinc-400 text-sm">Higher creator retention vs competitors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400 mb-2">2.8x</p>
                <p className="text-zinc-400 text-sm">Average revenue increase for creators</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400 mb-2">92%</p>
                <p className="text-zinc-400 text-sm">Subscriber satisfaction rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400 mb-2">4.2M</p>
                <p className="text-zinc-400 text-sm">Active monthly users</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Project Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-zinc-500 mb-4">Next Project</p>
            <Link href="/roundabout" className="inline-flex items-center text-zinc-200 hover:text-white transition-colors text-xl">
              Roundabout
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
} 