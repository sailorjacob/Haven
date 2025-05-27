"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ArrowRight, Plus, Minus, Shield, Lock, DollarSign, Film, Music, Palette, Home, Globe, Hexagon, Zap, Users, Building, Crown, Sparkles, Activity, Layers, Award, ChevronDown } from "lucide-react"
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
    <main className="bg-white min-h-screen w-full text-zinc-900">
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider uppercase">Back to Haven</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
          >
              <div className="relative">
                <Hexagon className="w-16 h-16 text-zinc-900" strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-zinc-700" />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-light text-zinc-900 mb-4 tracking-tight">
              Haven
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 font-light tracking-wide">
              A Hive of Native Collaboration and Connected Living
            </p>
          </motion.div>
          
          {/* Introduction Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-50 rounded-xl p-8 md:p-10 border border-zinc-200 mb-16"
          >
            <p className="text-zinc-700 text-lg leading-relaxed">
              Haven is an integrated ecosystem where cutting‐edge creative production meets next-generation digital distribution, 
              life-long living, and a new paradigm in cultural governance. This documentation outlines our multi-faceted services—from 
              advanced AI-generated content to immersive real estate communities and an international art 
              and cultural platform.
            </p>
          </motion.div>
          
          {/* Dual Innovation Ecosystem */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-light text-zinc-900 mb-8 text-center">Haven's Dual Innovation Ecosystem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mr-3">
                    <Activity className="w-5 h-5 text-zinc-700" />
              </div>
                  <h3 className="text-xl font-medium text-zinc-900">Digital Experience</h3>
              </div>
                <p className="text-zinc-600 mb-4 text-sm">Our integrated digital platform delivers cutting-edge content:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-zinc-700 text-sm">AI-generated films with revolutionary visual quality</span>
                </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-zinc-700 text-sm">AI-generated music spanning all genres and moods</span>
                </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-zinc-700 text-sm">Proprietary streaming platform for seamless content delivery</span>
                </li>
              </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mr-3">
                    <Building className="w-5 h-5 text-zinc-700" />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-900">Physical Experience</h3>
                </div>
                <p className="text-zinc-600 mb-4 text-sm">Our physical spaces create immersive environments:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-zinc-700 text-sm">Curated art galleries showcasing digital and traditional works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-zinc-700 text-sm">State-of-the-art screening theaters for premium viewing experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-zinc-700 text-sm">Premium accommodation with exclusive residence-style amenities</span>
                  </li>
                </ul>
              </motion.div>
          </div>
          </motion.div>
          
          {/* Section Modules - Improved Design */}
          <div className="space-y-3 mb-8">
          {/* Creative Content Platforms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => toggleSection("creative-content")}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                    <Film className="w-6 h-6 text-zinc-700" />
                      </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-zinc-900">Creative Content Platforms</h3>
                    <p className="text-sm text-zinc-600 mt-1">AI-powered film, TV, and music production ecosystem</p>
                      </div>
                    </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${expandedSection === "creative-content" ? "rotate-180" : ""}`} />
              </button>
                    
              <AnimatePresence>
              {expandedSection === "creative-content" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                    className="border-t border-zinc-200"
                >
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-zinc-50 p-5 rounded-lg">
                          <div className="flex items-center mb-3">
                            <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center mr-3 text-sm font-medium">1</span>
                            <h4 className="font-medium text-zinc-900">Digital Cinematic Experience</h4>
                          </div>
                          <p className="text-zinc-600 text-sm mb-3">
                            Harness the power of AI to produce next-generation films with cutting-edge technology.
                        </p>
                          <ul className="space-y-1 text-sm">
                            <li className="text-zinc-600">• Premium AI-Generated Content</li>
                            <li className="text-zinc-600">• Advanced Visual Technologies</li>
                            <li className="text-zinc-600">• Collaborative Creative Hive</li>
                        </ul>
                    </div>
                    
                        <div className="bg-zinc-50 p-5 rounded-lg">
                          <div className="flex items-center mb-3">
                            <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center mr-3 text-sm font-medium">2</span>
                            <h4 className="font-medium text-zinc-900">Film & TV Production</h4>
                          </div>
                          <p className="text-zinc-600 text-sm mb-3">
                            Platform leverages AI analytics to generate films and series that break traditional molds.
                        </p>
                          <ul className="space-y-1 text-sm">
                            <li className="text-zinc-600">• Bespoke Video Platform</li>
                            <li className="text-zinc-600">• Massive Collaborative Network</li>
                            <li className="text-zinc-600">• Advanced Analytics</li>
                        </ul>
                      </div>
                      
                        <div className="bg-zinc-50 p-5 rounded-lg">
                          <div className="flex items-center mb-3">
                            <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center mr-3 text-sm font-medium">3</span>
                            <h4 className="font-medium text-zinc-900">Music & Digital Audio</h4>
                          </div>
                          <p className="text-zinc-600 text-sm mb-3">
                            Artists and AI generators produce innovative tracks that resonate globally.
                        </p>
                          <ul className="space-y-1 text-sm">
                            <li className="text-zinc-600">• AI-Powered Music Production</li>
                            <li className="text-zinc-600">• Dynamic Label & Streaming</li>
                            <li className="text-zinc-600">• Ecosystem-Driven Revenue</li>
                        </ul>
                      </div>
                    </div>
                    
                      <div className="bg-zinc-100 p-5 rounded-lg">
                        <h4 className="font-medium text-zinc-900 mb-3">Economic Model</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-zinc-600 text-sm mb-3">
                              Haven's economic model creates a self-sustaining ecosystem where creators directly benefit from their contributions.
                          </p>
                            <div className="border-l-2 border-zinc-300 pl-4">
                              <p className="text-zinc-600 italic text-sm">
                                "Reimagining the relationship between creators, audiences, and platforms."
                            </p>
                  </div>
                </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                              <p className="font-medium text-zinc-700 mb-2">Primary Revenue</p>
                              <ul className="space-y-1 text-zinc-600">
                                <li>• Media subscriptions</li>
                                <li>• Content licensing</li>
                                <li>• Production services</li>
                                </ul>
                      </div>
                      <div>
                              <p className="font-medium text-zinc-700 mb-2">Secondary Revenue</p>
                              <ul className="space-y-1 text-zinc-600">
                                <li>• Platform fees</li>
                                <li>• Event experiences</li>
                                <li>• Education services</li>
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

            {/* Secure Distribution & Payments */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => toggleSection("secure-distribution")}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-zinc-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-zinc-900">Secure Distribution & Payment Systems</h3>
                    <p className="text-sm text-zinc-600 mt-1">Blockchain-based security and payment infrastructure</p>
                </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${expandedSection === "secure-distribution" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
              {expandedSection === "secure-distribution" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                    className="border-t border-zinc-200"
                >
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-zinc-50 p-5 rounded-lg">
                          <Lock className="w-8 h-8 text-zinc-700 mb-3" />
                          <h4 className="font-medium text-zinc-900 mb-2">Safe Distribution Network</h4>
                          <p className="text-zinc-600 text-sm mb-3">Secure, scalable infrastructure for safe streaming and downloads.</p>
                          <p className="text-zinc-500 text-xs font-medium">Key: End-to-end encryption</p>
                  </div>
                  
                        <div className="bg-zinc-50 p-5 rounded-lg">
                          <Shield className="w-8 h-8 text-zinc-700 mb-3" />
                          <h4 className="font-medium text-zinc-900 mb-2">Advanced Content Security</h4>
                          <p className="text-zinc-600 text-sm mb-3">Biometric and blockchain tech protects intellectual property.</p>
                          <p className="text-zinc-500 text-xs font-medium">Key: Multi-layer verification</p>
                  </div>
                  
                        <div className="bg-zinc-50 p-5 rounded-lg">
                          <DollarSign className="w-8 h-8 text-zinc-700 mb-3" />
                          <h4 className="font-medium text-zinc-900 mb-2">Integrated Payments</h4>
                          <p className="text-zinc-600 text-sm mb-3">Traditional and crypto payments for borderless commerce.</p>
                          <p className="text-zinc-500 text-xs font-medium">Key: Blockchain tokens</p>
                  </div>
                </div>
                
                      <div className="bg-zinc-100 p-5 rounded-lg">
                        <h4 className="font-medium text-zinc-900 mb-3">Security Standards</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-600">
                          <ul className="space-y-1">
                            <li>• End-to-end encryption</li>
                            <li>• Multi-factor authentication</li>
                            <li>• Secure access management</li>
                        </ul>
                          <ul className="space-y-1">
                            <li>• Decentralized storage</li>
                            <li>• Regular security audits</li>
                            <li>• Transparent privacy policies</li>
                  </ul>
                </div>
              </div>
            </div>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>

          {/* Advertising & Creative Campaigns */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => toggleSection("advertising")}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                    <Layers className="w-6 h-6 text-zinc-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-zinc-900">Advertising & Creative Campaigns</h3>
                    <p className="text-sm text-zinc-600 mt-1">High-end creative agency for global brands</p>
                </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${expandedSection === "advertising" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
              {expandedSection === "advertising" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                    className="border-t border-zinc-200"
                >
                    <div className="p-6 space-y-4">
                      <p className="text-zinc-600">
                        Haven's advertising division delivers compelling campaigns for elite clients worldwide.
                </p>
                
                      <div className="flex flex-wrap gap-2">
                        {["Global Brands", "Governments", "Sports Teams", "Fortune 50", "Network States", "Celebrities"].map((client) => (
                          <span key={client} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm">
                            {client}
                          </span>
                    ))}
                    </div>
                  
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h5 className="font-medium text-zinc-900 mb-2">Data-Driven Strategies</h5>
                          <p className="text-zinc-600 text-sm">AI analytics for maximum engagement and ROI.</p>
                        </div>
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h5 className="font-medium text-zinc-900 mb-2">Full-Spectrum Services</h5>
                          <p className="text-zinc-600 text-sm">End-to-end creative and marketing solutions.</p>
                    </div>
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h5 className="font-medium text-zinc-900 mb-2">Cross-Platform Integration</h5>
                          <p className="text-zinc-600 text-sm">Seamless campaigns across all media channels.</p>
                    </div>
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h5 className="font-medium text-zinc-900 mb-2">Creative Excellence</h5>
                          <p className="text-zinc-600 text-sm">Award-winning design and content teams.</p>
                    </div>
                    </div>
                </div>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>

            {/* Interconnected Living */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => toggleSection("living")}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-zinc-700" />
            </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-zinc-900">Interconnected Living & Real Estate</h3>
                    <p className="text-sm text-zinc-600 mt-1">Premium compounds and creative community spaces</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${expandedSection === "living" ? "rotate-180" : ""}`} />
              </button>
                
              <AnimatePresence>
              {expandedSection === "living" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                    className="border-t border-zinc-200"
                >
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h4 className="font-medium text-zinc-900 mb-2">Quality Compounds</h4>
                          <p className="text-zinc-600 text-sm">Exclusive apartments and homes combining Soho House exclusivity with Hilton service.</p>
                    </div>
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h4 className="font-medium text-zinc-900 mb-2">Community Spaces</h4>
                          <p className="text-zinc-600 text-sm">Creative studios, workspaces, and event venues where work and play converge.</p>
                    </div>
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h4 className="font-medium text-zinc-900 mb-2">Cultural Hubs</h4>
                          <p className="text-zinc-600 text-sm">Dynamic centers offering Disney-like experiences with art and entertainment.</p>
                    </div>
                    </div>
                  
                      <div>
                        <h5 className="font-medium text-zinc-900 mb-3">Compound Amenities</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {["Creative Studios", "State-of-art Gyms", "Quality Spas", "Fine Dining", "Art Galleries", "Performance Venues", "Private Theaters", "Recording Studios"].map((amenity) => (
                            <span key={amenity} className="px-3 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm text-center">
                              {amenity}
                            </span>
                          ))}
                </div>
              </div>
            </div>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>

            {/* International Art Gallery */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => toggleSection("art")}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-zinc-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-zinc-900">International Art Gallery & Cultural Institutions</h3>
                    <p className="text-sm text-zinc-600 mt-1">Global art spaces and cultural programming</p>
                </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${expandedSection === "art" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
              {expandedSection === "art" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                    className="border-t border-zinc-200"
                  >
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-zinc-50 p-4 rounded-lg text-center">
                          <Award className="w-8 h-8 text-zinc-700 mb-3 mx-auto" />
                          <h4 className="font-medium text-zinc-900 mb-2">Global Art Galleries</h4>
                          <p className="text-zinc-600 text-sm">International chain celebrating digital and physical art.</p>
                      </div>
                        <div className="bg-zinc-50 p-4 rounded-lg text-center">
                          <Layers className="w-8 h-8 text-zinc-700 mb-3 mx-auto" />
                          <h4 className="font-medium text-zinc-900 mb-2">3D Printed Art</h4>
                          <p className="text-zinc-600 text-sm">State-of-the-art installations fusing art and technology.</p>
                    </div>
                        <div className="bg-zinc-50 p-4 rounded-lg text-center">
                          <Crown className="w-8 h-8 text-zinc-700 mb-3 mx-auto" />
                          <h4 className="font-medium text-zinc-900 mb-2">Art Olympics</h4>
                          <p className="text-zinc-600 text-sm">Global event celebrating creativity and collaboration.</p>
                    </div>
                  </div>
                  
                      <div className="bg-zinc-100 p-4 rounded-lg">
                        <h5 className="font-medium text-zinc-900 mb-3">Cultural Programming</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-600">
                          <ul className="space-y-1">
                            <li>• Artist residency programs</li>
                            <li>• International exhibitions</li>
                            <li>• Digital art marketplaces</li>
                        </ul>
                          <ul className="space-y-1">
                            <li>• Educational workshops</li>
                            <li>• Cultural festivals</li>
                            <li>• VR/AR experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>

            {/* Network State Infrastructure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => toggleSection("network")}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-zinc-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-zinc-900">Network State Infrastructure & Governance</h3>
                    <p className="text-sm text-zinc-600 mt-1">Innovative governance and financial systems</p>
                </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${expandedSection === "network" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
              {expandedSection === "network" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                    className="border-t border-zinc-200"
                  >
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h4 className="font-medium text-zinc-900 mb-3">Crypto Currency & Payments</h4>
                          <div className="space-y-3">
                      <div>
                              <div className="flex items-center mb-1">
                                <Zap className="w-4 h-4 text-zinc-600 mr-2" />
                                <span className="font-medium text-zinc-800 text-sm">Decentralized Finance</span>
                      </div>
                              <p className="text-zinc-600 text-xs">Proprietary cryptocurrency for frictionless payments.</p>
                      </div>
                      <div>
                              <div className="flex items-center mb-1">
                                <Shield className="w-4 h-4 text-zinc-600 mr-2" />
                                <span className="font-medium text-zinc-800 text-sm">Blockchain Transparency</span>
                    </div>
                              <p className="text-zinc-600 text-xs">Secured transactions and revenue-sharing.</p>
                </div>
                      </div>
                    </div>
                    
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h4 className="font-medium text-zinc-900 mb-2">Knights of the Round Table</h4>
                          <p className="text-zinc-600 text-sm mb-2">Legal framework ensuring fair governance.</p>
                          <ul className="space-y-1 text-xs text-zinc-600">
                            <li>• Innovative Legal Governance</li>
                            <li>• Decentralized Justice</li>
                            <li>• Community-driven rules</li>
                          </ul>
                </div>
                
                        <div className="bg-zinc-50 p-4 rounded-lg">
                          <h4 className="font-medium text-zinc-900 mb-2">Philosophical Army</h4>
                          <p className="text-zinc-600 text-sm mb-2">Thought leaders defining cultural direction.</p>
                          <ul className="space-y-1 text-xs text-zinc-600">
                            <li>• Ideological Vanguard</li>
                            <li>• Community Engagement</li>
                            <li>• Progressive organization</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Economic Model Highlight */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl border border-zinc-200 p-6 md:p-8 mb-0 shadow-sm"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-light text-zinc-900 mb-3">Self-Sustaining Creative Economy</h2>
                <p className="text-zinc-600 mb-4">Annual Revenue Potential Per Creative Professional</p>
                
                <div className="bg-zinc-50 rounded-xl p-4 md:p-6 border border-zinc-200 inline-block">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className="text-2xl md:text-3xl font-semibold text-zinc-900">100,000</span>
                    <span className="text-xl text-zinc-600">×</span>
                    <span className="text-2xl md:text-3xl font-semibold text-zinc-900">$100,000</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg text-zinc-600">=</span>
                    <span className="text-xl md:text-2xl font-semibold text-zinc-900 ml-2">$10 billion</span>
                    <p className="text-sm text-zinc-500 mt-1">in annual collective output</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-50 rounded-xl p-4 md:p-6 border border-zinc-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mr-3">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-zinc-900">Revenue Streams</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-zinc-700 font-medium mb-2 text-sm">Primary</p>
                      <ul className="space-y-1 text-sm text-zinc-600">
                        <li>• Media subscriptions</li>
                        <li>• Content licensing</li>
                        <li>• Production services</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-zinc-700 font-medium mb-2 text-sm">Secondary</p>
                      <ul className="space-y-1 text-sm text-zinc-600">
                        <li>• Platform fees</li>
                        <li>• Event experiences</li>
                        <li>• Education services</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-50 rounded-xl p-4 md:p-6 border border-zinc-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-zinc-900">Value Distribution</h4>
                  </div>
                  <p className="text-zinc-600 text-sm mb-3">Transparent blockchain-based system ensuring:</p>
                  <ul className="space-y-1 text-sm text-zinc-600">
                    <li>• Usage-based compensation</li>
                    <li>• Ownership stakes in works</li>
                    <li>• Performance incentives</li>
                    <li>• Network growth participation</li>
                  </ul>
                </div>
              </div>

              {/* Get Started With Haven */}
              <div className="text-center pt-6 border-t border-zinc-200">
                <h3 className="text-xl md:text-2xl font-light text-zinc-900 mb-3">Get Started With Haven</h3>
                <p className="text-zinc-600 mb-4 leading-relaxed max-w-2xl mx-auto">
                  Whether you're an artist, investor, creative professional, or a visionary brand, Haven offers a holistic 
                  environment where creativity, commerce, and community thrive in unison.
                </p>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
                >
                  <span className="mr-2">Request Information</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
} 