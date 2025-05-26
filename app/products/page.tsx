"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ArrowRight, Plus, Minus, Shield, Lock, DollarSign, Film, Music, Palette, Home, Globe, Hexagon, Zap, Users, Building, Crown, Sparkles, Activity, Layers, Award } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Products() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <main className="bg-zinc-950 min-h-screen w-full text-zinc-100">
      {/* Luxury gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-zinc-900/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-800/5 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-zinc-400 hover:text-amber-500 transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider uppercase">Back to Haven</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <Hexagon className="w-20 h-20 text-amber-500" strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-amber-400" />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Haven
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide">
              A Hive of Native Collaboration and Connected Living
            </p>
          </motion.div>
          
          {/* Introduction Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-zinc-800/50 mb-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
            <div className="relative z-10">
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
                Haven is an integrated ecosystem where cutting‐edge creative production meets next-generation digital distribution, 
                luxurious living, and a new paradigm in cultural governance. This documentation outlines our multi-faceted services—from 
                advanced AI-generated content to immersive real estate communities and an international art 
                and cultural platform.
              </p>
            </div>
          </motion.div>
          
          {/* Dual Innovation Ecosystem */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-light text-white mb-12 text-center">Haven's Dual Innovation Ecosystem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-zinc-900/30 backdrop-blur-xl p-8 rounded-xl border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors">
                    <Activity className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-light text-white">Digital Experience</h3>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">Our integrated digital platform delivers cutting-edge content:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-zinc-300">AI-generated films with revolutionary visual quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-zinc-300">AI-generated music spanning all genres and moods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-zinc-300">Proprietary streaming platform for seamless content delivery</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-zinc-900/30 backdrop-blur-xl p-8 rounded-xl border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors">
                    <Building className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-light text-white">Physical Experience</h3>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">Our physical spaces create immersive environments:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-zinc-300">Curated art galleries showcasing digital and traditional works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-zinc-300">State-of-the-art screening theaters for premium viewing experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-zinc-300">Premium accommodation with exclusive residence-style amenities</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Navigation Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-light text-white mb-12 text-center">Explore Our Comprehensive Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: "creative-content", title: "Creative Content Platforms", icon: Film },
                { id: "secure-distribution", title: "Secure Distribution & Payments", icon: Shield },
                { id: "advertising", title: "Advertising & Creative Campaigns", icon: Layers },
                { id: "living", title: "Interconnected Living", icon: Home },
                { id: "art", title: "International Art Gallery", icon: Palette },
                { id: "network", title: "Network State Infrastructure", icon: Globe },
              ].map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`#${item.id}`}>
                    <div className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-8 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 h-full flex flex-col cursor-pointer group">
                      <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                        <item.icon className="w-7 h-7 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-light text-white mb-4 flex-grow">{item.title}</h3>
                      <div className="flex justify-end">
                        <ArrowRight size={20} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Creative Content Platforms */}
          <section id="creative-content" className="mb-20 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/50 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-zinc-800/30 transition-colors"
                onClick={() => toggleSection("creative-content")}>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mr-6">
                    <Film className="w-7 h-7 text-amber-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">Creative Content Platforms</h2>
                </div>
                <div className="text-amber-500">
                  {expandedSection === "creative-content" ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedSection === "creative-content" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10"
                  >
                    <div className="space-y-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                          <div className="flex items-center mb-6">
                            <span className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                              <span className="text-amber-400 font-medium">1</span>
                            </span>
                            <h3 className="text-xl font-light text-white">Digital Cinematic Experience</h3>
                          </div>
                          <p className="text-zinc-400 mb-6 leading-relaxed">
                            Harness the power of AI to produce next-generation films with cutting-edge technology, ensuring content that is both artistically innovative and visually stunning.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Premium AI-Generated Content</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Advanced Visual Technologies</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Collaborative Creative Hive</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                          <div className="flex items-center mb-6">
                            <span className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                              <span className="text-amber-400 font-medium">2</span>
                            </span>
                            <h3 className="text-xl font-light text-white">Film & TV Production</h3>
                          </div>
                          <p className="text-zinc-400 mb-6 leading-relaxed">
                            Inspired by Netflix and HBO, our platform leverages AI analytics to generate films and series that break the mold of traditional media.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Bespoke Video Platform</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Massive Collaborative Network</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Advanced Analytics & Personalization</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                          <div className="flex items-center mb-6">
                            <span className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                              <span className="text-amber-400 font-medium">3</span>
                            </span>
                            <h3 className="text-xl font-light text-white">Music & Digital Audio</h3>
                          </div>
                          <p className="text-zinc-400 mb-6 leading-relaxed">
                            Thousands of artists and AI generators work side-by-side, producing innovative tracks and albums that resonate globally.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">AI-Powered Music Production</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Dynamic Label & Streaming</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 mr-3"></span>
                              <span className="text-zinc-300 text-sm">Ecosystem-Driven Revenue</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 md:p-10 rounded-xl border border-zinc-700/50">
                        <h4 className="text-2xl font-light text-white mb-6">Economic Model</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          <div>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                              Haven's economic model represents a paradigm shift from traditional media industry practices, creating a 
                              self-sustaining ecosystem where creators directly benefit from their contributions.
                            </p>
                            <div className="border-l-2 border-amber-500/50 pl-6 py-2">
                              <p className="text-zinc-300 italic font-light">
                                "Haven's model fundamentally reimagines the relationship between creators, audiences, and platforms, 
                                removing traditional intermediaries and ensuring value flows directly to creators."
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <p className="text-white font-light mb-4">Primary Revenue</p>
                              <ul className="space-y-2">
                                <li className="text-zinc-400 text-sm">• Media subscriptions</li>
                                <li className="text-zinc-400 text-sm">• Content licensing</li>
                                <li className="text-zinc-400 text-sm">• Production services</li>
                                <li className="text-zinc-400 text-sm">• Branded partnerships</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-light mb-4">Secondary Revenue</p>
                              <ul className="space-y-2">
                                <li className="text-zinc-400 text-sm">• Marketplace transactions</li>
                                <li className="text-zinc-400 text-sm">• Platform fees</li>
                                <li className="text-zinc-400 text-sm">• Event experiences</li>
                                <li className="text-zinc-400 text-sm">• Education & training</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Economic Model Section */}
          <section className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 mb-20 overflow-hidden">
            <div className="p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-10 text-center">Self-Sustaining Creative Economy</h2>
              
              <p className="text-zinc-300 text-lg mb-10 text-center max-w-4xl mx-auto leading-relaxed">
                Haven's economic model represents a paradigm shift from traditional media industry practices, creating a 
                self-sustaining ecosystem where creators directly benefit from their contributions.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                  <h4 className="text-xl font-light text-white mb-6">Revenue Streams</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-amber-500 font-light mb-4">Primary</p>
                      <ul className="space-y-2">
                        <li className="text-zinc-400 text-sm">• Media subscriptions</li>
                        <li className="text-zinc-400 text-sm">• Content licensing</li>
                        <li className="text-zinc-400 text-sm">• Production services</li>
                        <li className="text-zinc-400 text-sm">• Branded partnerships</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-amber-500 font-light mb-4">Secondary</p>
                      <ul className="space-y-2">
                        <li className="text-zinc-400 text-sm">• Marketplace transactions</li>
                        <li className="text-zinc-400 text-sm">• Platform fees</li>
                        <li className="text-zinc-400 text-sm">• Event experiences</li>
                        <li className="text-zinc-400 text-sm">• Education & training</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                  <h4 className="text-xl font-light text-white mb-6">Value Distribution</h4>
                  <p className="text-zinc-400 mb-4">
                    Our economic model ensures that value is fairly distributed among all platform contributors through 
                    a transparent, blockchain-based accounting system.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-zinc-400 text-sm">• Usage-based compensation</li>
                    <li className="text-zinc-400 text-sm">• Ownership stakes in collaborative works</li>
                    <li className="text-zinc-400 text-sm">• Performance-based incentives</li>
                    <li className="text-zinc-400 text-sm">• Network growth participation</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-500/10 backdrop-blur p-8 rounded-xl border border-amber-500/30 text-center">
                <p className="text-white text-lg mb-2">Annual Revenue Potential Per Creative Professional</p>
                <p className="text-zinc-300 mb-4">With each professional contributing an approximate value of $100,000 per year:</p>
                <p className="text-3xl md:text-4xl font-light text-amber-400 mb-6">100,000 × $100,000 = $10 billion</p>
                <p className="text-zinc-400">in annual collective output</p>
              </div>
            </div>
          </section>

          {/* Secure Distribution & Payments */}
          <section id="secure-distribution" className="mb-20 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/50 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-zinc-800/30 transition-colors"
                onClick={() => toggleSection("secure-distribution")}>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mr-6">
                    <Shield className="w-7 h-7 text-amber-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">Secure Distribution & Payment Systems</h2>
                </div>
                <div className="text-amber-500">
                  {expandedSection === "secure-distribution" ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedSection === "secure-distribution" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                          <Lock className="w-7 h-7 text-amber-500" />
                        </div>
                        <h4 className="text-xl font-light text-white mb-4">Safe Distribution Network</h4>
                        <p className="text-zinc-400 flex-grow mb-6">Our content distribution is built on a secure, scalable infrastructure that ensures safe streaming and download capabilities for all users.</p>
                        <div className="pt-6 border-t border-zinc-700/50">
                          <span className="text-amber-400 text-sm">Key feature: End-to-end encryption</span>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                          <Shield className="w-7 h-7 text-amber-500" />
                        </div>
                        <h4 className="text-xl font-light text-white mb-4">Advanced Content Security</h4>
                        <p className="text-zinc-400 flex-grow mb-6">Leveraging biometric and blockchain technologies, our content security system ensures that high-value intellectual property is protected while maintaining seamless access for authorized users.</p>
                        <div className="pt-6 border-t border-zinc-700/50">
                          <span className="text-amber-400 text-sm">Key feature: Multi-layer verification systems</span>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                          <DollarSign className="w-7 h-7 text-amber-500" />
                        </div>
                        <h4 className="text-xl font-light text-white mb-4">Integrated Payments System</h4>
                        <p className="text-zinc-400 flex-grow mb-6">A modern, secure payment gateway supports both traditional transactions and crypto-based micro-payments, ensuring smooth, transparent, and borderless commerce.</p>
                        <div className="pt-6 border-t border-zinc-700/50">
                          <span className="text-amber-400 text-sm">Key feature: Blockchain-based token model</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                      <h4 className="text-xl font-light text-white mb-6">Security & Privacy Standards</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <p className="text-zinc-400 mb-6">
                            Haven implements industry-leading security protocols to ensure user data privacy and content protection:
                          </p>
                          <ul className="space-y-3">
                            <li className="text-zinc-300 text-sm">• End-to-end encryption for all data transmission</li>
                            <li className="text-zinc-300 text-sm">• Multi-factor authentication and authorization</li>
                            <li className="text-zinc-300 text-sm">• Secure access management</li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-3 mt-12 lg:mt-0">
                            <li className="text-zinc-300 text-sm">• Decentralized storage to prevent data breaches</li>
                            <li className="text-zinc-300 text-sm">• Regular security audits by third-party specialists</li>
                            <li className="text-zinc-300 text-sm">• Transparent data usage and privacy policies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Advertising & Creative Campaigns */}
          <section id="advertising" className="mb-20 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/50 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-zinc-800/30 transition-colors"
                onClick={() => toggleSection("advertising")}>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mr-6">
                    <Layers className="w-7 h-7 text-amber-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">Advertising & Creative Campaigns</h2>
                </div>
                <div className="text-amber-500">
                  {expandedSection === "advertising" ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedSection === "advertising" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10"
                  >
                    <p className="text-zinc-300 text-lg mb-10 max-w-4xl leading-relaxed">
                      Haven's advertising division functions as a high-end creative agency, delivering compelling campaigns 
                      that resonate with audiences worldwide. Our expertise spans multiple industries, catering to elite 
                      clients seeking innovative marketing solutions.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                      {["Global Brands", "Governments", "Sports Teams", "Fortune 50", "Network States", "Celebrities"].map((client, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-zinc-800/30 backdrop-blur p-4 rounded-lg text-center hover:bg-amber-500/10 hover:border-amber-500/30 border border-zinc-700/50 transition-all cursor-pointer"
                        >
                          <span className="text-zinc-300 text-sm font-light">{client}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <h4 className="text-2xl font-light text-white mb-8">Agency Capabilities</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <h5 className="text-lg font-light text-white mb-4">Data-Driven Strategies</h5>
                        <p className="text-zinc-400">Utilizing AI analytics, our campaigns are precisely tailored to resonate with target audiences, ensuring maximum engagement and ROI.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <h5 className="text-lg font-light text-white mb-4">Full-Spectrum Services</h5>
                        <p className="text-zinc-400">From concept creation and multimedia production to digital marketing and strategic placement, our agency provides end-to-end services that elevate brand presence on a global scale.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <h5 className="text-lg font-light text-white mb-4">Cross-Platform Integration</h5>
                        <p className="text-zinc-400">Seamless campaign delivery across traditional and emerging media channels, leveraging Haven's extensive digital ecosystem for maximum impact.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <h5 className="text-lg font-light text-white mb-4">Creative Excellence</h5>
                        <p className="text-zinc-400">Award-winning design teams and content creators collaborate to produce visually stunning and emotionally resonant advertising materials.</p>
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-amber-500/50 pl-8 py-4 bg-zinc-800/20 rounded-r-xl">
                      <p className="text-zinc-300 italic font-light">
                        "Haven's creative campaigns blend artistic vision with cutting-edge AI analytics, resulting in advertising that doesn't just reach audiences—it captivates them."
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Interconnected Living */}
          <section id="living" className="mb-20 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/50 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-zinc-800/30 transition-colors"
                onClick={() => toggleSection("living")}>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mr-6">
                    <Home className="w-7 h-7 text-amber-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">Interconnected Living & Real Estate Ecosystem</h2>
                </div>
                <div className="text-amber-500">
                  {expandedSection === "living" ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedSection === "living" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                        <h4 className="text-xl font-light text-white mb-4">Quality Compounds & Residences</h4>
                        <p className="text-zinc-400">Haven's real estate network includes exclusive apartments, homes, townhouses, and condos designed for both members and visitors. Our living spaces combine the exclusivity of Soho House with the service standards of Hilton hotels.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                        <h4 className="text-xl font-light text-white mb-4">Integrated Community Spaces</h4>
                        <p className="text-zinc-400">Each compound features creative studios, collaborative workspaces, leisure facilities, and immersive event spaces—promoting a lifestyle where work and play converge.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                        <h4 className="text-xl font-light text-white mb-4">Global Cultural Hubs</h4>
                        <p className="text-zinc-400">Our properties are not just living spaces but dynamic cultural centers offering a Disney-like experience where visitors can engage with art, entertainment, and community events.</p>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 mb-10">
                      <h4 className="text-xl font-light text-white mb-6">Compound Amenities</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Creative Studios", "State-of-art Gyms", "Quality Spas", "Fine Dining", "Art Galleries", "Performance Venues", "Private Theaters", "Recording Studios"].map((amenity, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="bg-zinc-900/50 backdrop-blur p-4 rounded-lg text-center hover:bg-amber-500/10 hover:border-amber-500/30 border border-zinc-700/50 transition-all duration-300 cursor-pointer"
                          >
                            <span className="text-zinc-300 text-sm">{amenity}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <p className="text-zinc-300 leading-relaxed">
                          Our real estate holdings operate as a network of interconnected creative hubs, strategically positioned 
                          in major global cities and exclusive accommodation destinations. Each property is designed to foster collaboration, 
                          inspiration, and community among Haven's members while providing unparalleled quality amenities.
                        </p>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="border-l-2 border-amber-500/50 pl-6 py-2 h-full flex items-center">
                          <p className="text-zinc-300 italic font-light text-sm">
                            "Haven's living spaces transcend traditional real estate by integrating creative workspaces, 
                            cultural programming, and premium amenities into a cohesive ecosystem where innovation and lifestyle converge."
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* International Art Gallery */}
          <section id="art" className="mb-20 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/50 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-zinc-800/30 transition-colors"
                onClick={() => toggleSection("art")}>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mr-6">
                    <Palette className="w-7 h-7 text-amber-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">International Art Gallery & Cultural Institutions</h2>
                </div>
                <div className="text-amber-500">
                  {expandedSection === "art" ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedSection === "art" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10"
                  >
                    <p className="text-zinc-300 text-lg mb-10 max-w-4xl leading-relaxed">
                      Haven's cultural division extends beyond digital media to embrace physical art spaces and cultural 
                      institutions that celebrate creativity in all its forms. Our international presence establishes new 
                      centers of artistic excellence and innovation.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                          <Award className="w-7 h-7 text-amber-500" />
                        </div>
                        <h4 className="text-xl font-light text-white mb-4">Global Art Galleries</h4>
                        <p className="text-zinc-400">An international chain of fine art galleries provides a platform for asset building, community events, and the celebration of both digital and physical art forms.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                          <Layers className="w-7 h-7 text-amber-500" />
                        </div>
                        <h4 className="text-xl font-light text-white mb-4">3D Printed Art & Sculptures</h4>
                        <p className="text-zinc-400">Innovative displays featuring state-of-the-art 3D printed statues and installations highlight the fusion of art and technology.</p>
                      </div>
                      
                      <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                          <Crown className="w-7 h-7 text-amber-500" />
                        </div>
                        <h4 className="text-xl font-light text-white mb-4">Art Olympics</h4>
                        <p className="text-zinc-400">A flagship global event that brings together artists, collectors, and cultural influencers to celebrate creativity on an international stage, fostering competition and collaboration in the arts.</p>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                      <h4 className="text-xl font-light text-white mb-6">Cultural Programming</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <p className="text-zinc-400 mb-6">
                            Haven's cultural institutions host a diverse array of programming designed to engage communities 
                            and advance artistic discourse:
                          </p>
                          <ul className="space-y-3">
                            <li className="text-zinc-300 text-sm">• Artist residency programs supporting emerging talent</li>
                            <li className="text-zinc-300 text-sm">• International exhibition exchanges with leading museums</li>
                            <li className="text-zinc-300 text-sm">• Digital art marketplaces with NFT integration</li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-3 mt-12 lg:mt-0">
                            <li className="text-zinc-300 text-sm">• Educational workshops and masterclasses</li>
                            <li className="text-zinc-300 text-sm">• Cross-disciplinary cultural festivals</li>
                            <li className="text-zinc-300 text-sm">• VR/AR immersive art experiences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Network State Infrastructure */}
          <section id="network" className="mb-20 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/50 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-zinc-800/30 transition-colors"
                onClick={() => toggleSection("network")}>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mr-6">
                    <Globe className="w-7 h-7 text-amber-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">Network State Infrastructure & Governance</h2>
                </div>
                <div className="text-amber-500">
                  {expandedSection === "network" ? (
                    <Minus size={28} />
                  ) : (
                    <Plus size={28} />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedSection === "network" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10"
                  >
                    <p className="text-zinc-300 text-lg mb-10 max-w-4xl leading-relaxed">
                      Haven operates as a forward-thinking network state with innovative governance structures and financial 
                      systems that support our creative ecosystem. Our infrastructure combines cutting-edge technology with 
                      progressive social organization to create a sustainable and equitable creative economy.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      <div className="lg:col-span-1">
                        <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50 h-full">
                          <h3 className="text-2xl font-light text-white mb-8">Crypto Currency & Payments</h3>
                          <div className="space-y-8">
                            <div className="flex">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4 mt-1">
                                <Zap className="w-6 h-6 text-amber-500" />
                              </div>
                              <div>
                                <h4 className="text-lg font-light text-white mb-2">Decentralized Finance</h4>
                                <p className="text-zinc-400 text-sm">A proprietary cryptocurrency underpins all transactions within the Haven ecosystem, enabling frictionless payments across our digital and physical platforms.</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4 mt-1">
                                <Shield className="w-6 h-6 text-amber-500" />
                              </div>
                              <div>
                                <h4 className="text-lg font-light text-white mb-2">Blockchain Transparency</h4>
                                <p className="text-zinc-400 text-sm">All transactions, content authenticity, and revenue-sharing mechanisms are secured via blockchain, ensuring trust and transparency for creators and consumers alike.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                          <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                            <h3 className="text-xl font-light text-white mb-6">Knights of the Round Table Legal System</h3>
                            <p className="text-zinc-400 mb-6">Drawing inspiration from historical chivalry, our legal framework ensures fair dispute resolution, ethical standards, and community-driven governance.</p>
                            <ul className="space-y-2">
                              <li className="text-zinc-300 text-sm">• Innovative Legal Governance</li>
                              <li className="text-zinc-300 text-sm">• Decentralized Justice</li>
                              <li className="text-zinc-300 text-sm">• Community-driven rule-making</li>
                            </ul>
                          </div>
                          
                          <div className="bg-zinc-800/30 backdrop-blur p-8 rounded-xl border border-zinc-700/50">
                            <h3 className="text-xl font-light text-white mb-6">Philosophical Army</h3>
                            <p className="text-zinc-400 mb-6">A collective of thought leaders and strategists who define the cultural and ethical directions of Haven.</p>
                            <ul className="space-y-2">
                              <li className="text-zinc-300 text-sm">• Ideological Vanguard</li>
                              <li className="text-zinc-300 text-sm">• Community Engagement</li>
                              <li className="text-zinc-300 text-sm">• Progressive social organization</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>
          
          {/* Call to Action */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-xl rounded-2xl p-10 md:p-14 border border-amber-500/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Get Started With Haven</h2>
            <p className="text-zinc-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you're an artist, investor, creative professional, or a visionary brand, Haven offers a holistic 
              environment where creativity, commerce, and community thrive in unison.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-zinc-900 font-medium py-4 px-10 rounded-full transition-all duration-300 group"
              >
                <span className="mr-2">Request Information</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </main>
  )
} 