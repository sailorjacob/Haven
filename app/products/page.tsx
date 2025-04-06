"use client"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ChevronLeft, ArrowRight, Plus, Minus } from "lucide-react"
import { motion } from "framer-motion"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// Single gold color for consistency
const GOLD = "#E6B325"

export default function Products() {
  // State to track expanded sections
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Function to toggle section expansion
  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <main className={`${inter.className} bg-gray-50 min-h-screen w-full text-gray-800`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-[#E6B325] transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Haven
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
                fill="#E6B325"
              />
            </svg>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold text-gray-900 mb-6 text-center"
          >
            Haven: A Hive of Native Collaboration and Connected Living
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Haven is an integrated ecosystem where cutting‐edge creative production meets next-generation digital distribution, 
              luxurious living, and a new paradigm in cultural governance. This documentation outlines our multi-faceted services—from 
              advanced AI-generated content in adult entertainment to immersive real estate communities and an international art 
              and cultural platform.
            </p>
          </motion.div>
          
          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { id: "creative-content", title: "Creative Content Platforms", icon: "🎬" },
              { id: "safe-distribution", title: "Safe Distribution & Payments", icon: "🔒" },
              { id: "advertising", title: "Advertising & Creative Campaigns", icon: "📊" },
              { id: "living", title: "Interconnected Living", icon: "🏙️" },
              { id: "art", title: "International Art Gallery", icon: "🎨" },
              { id: "network", title: "Network State Infrastructure", icon: "🌐" },
            ].map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link href={`#${item.id}`}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col cursor-pointer border border-transparent hover:border-[#E6B325]/30">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h3>
                    <div className="mt-auto pt-4 flex justify-end">
                      <ArrowRight size={18} className="text-[#E6B325]" />
                    </div>
            </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Creative Content Platforms */}
          <section id="creative-content" className="mb-16 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection("creative-content")}>
                <div className="flex items-center">
                  <span className="text-3xl mr-6">🎬</span>
                  <h2 className="text-3xl font-bold text-gray-800">Creative Content Platforms</h2>
                      </div>
                      <div>
                  {expandedSection === "creative-content" ? (
                    <Minus size={24} className="text-[#E6B325]" />
                  ) : (
                    <Plus size={24} className="text-[#E6B325]" />
                  )}
                      </div>
                    </div>
                    
              {expandedSection === "creative-content" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="bg-gray-50 p-6 rounded-xl md:w-1/3">
                        <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                          <span className="w-6 h-6 rounded-full bg-[#E6B325] flex items-center justify-center mr-3">
                        <span className="text-white font-bold">1</span>
                          </span>
                          Adult Entertainment
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Harness the power of AI to produce next-generation adult films with cutting-edge technology, ensuring content that is both artistically innovative and responsibly produced.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Elite AI-Generated Content</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Safe and Ethical Production</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Collaborative Creative Hive</span>
                          </li>
                        </ul>
                    </div>
                    
                      <div className="bg-gray-50 p-6 rounded-xl md:w-1/3">
                        <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                          <span className="w-6 h-6 rounded-full bg-[#E6B325] flex items-center justify-center mr-3">
                        <span className="text-white font-bold">2</span>
                          </span>
                          Film & TV Production
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Inspired by Netflix and HBO, our platform leverages AI analytics to generate films and series that break the mold of traditional media.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Bespoke Video Platform</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Massive Collaborative Network</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Advanced Analytics & Personalization</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl md:w-1/3">
                        <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                          <span className="w-6 h-6 rounded-full bg-[#E6B325] flex items-center justify-center mr-3">
                            <span className="text-white font-bold">3</span>
                          </span>
                          Music & Digital Audio
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Thousands of artists and AI generators work side-by-side, producing innovative tracks and albums that resonate globally.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>AI-Powered Music Production</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Dynamic Label & Streaming</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E6B325] mr-2">•</span>
                            <span>Ecosystem-Driven Revenue</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-medium text-gray-800 mb-4">Economic Model</h4>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 mb-4">
                            Haven's economic model represents a paradigm shift from traditional media industry practices, creating a 
                            self-sustaining ecosystem where creators directly benefit from their contributions.
                          </p>
                          <div className="border-l-4 border-[#E6B325] pl-4 py-2">
                            <p className="text-gray-600 italic">
                              "Haven's model fundamentally reimagines the relationship between creators, audiences, and platforms, 
                              removing traditional intermediaries and ensuring value flows directly to creators."
                            </p>
                  </div>
                </div>
                
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                      <div>
                            <p className="text-gray-800 font-medium mb-2">Primary Revenue</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-1">
                              <li>Media subscriptions</li>
                              <li>Content licensing</li>
                              <li>Production services</li>
                              <li>Branded partnerships</li>
                            </ul>
                      </div>
                      <div>
                            <p className="text-gray-800 font-medium mb-2">Secondary Revenue</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-1">
                              <li>Marketplace transactions</li>
                              <li>Platform fees</li>
                              <li>Event experiences</li>
                              <li>Education & training</li>
                            </ul>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* Economic Model Section */}
          <section className="bg-white rounded-2xl shadow-lg mb-10 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-gray-800">Economic Model</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Self-Sustaining Creative Economy</h3>
                
                <p className="text-gray-600 mb-6">
                  Haven's economic model represents a paradigm shift from traditional media industry practices, creating a 
                  self-sustaining ecosystem where creators directly benefit from their contributions.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-medium text-gray-700 mb-4">Revenue Streams</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-800 font-medium mb-2">Primary</p>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Media subscriptions</li>
                        <li>Content licensing</li>
                        <li>Production services</li>
                        <li>Branded partnerships</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium mb-2">Secondary</p>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Marketplace transactions</li>
                        <li>Platform fees</li>
                        <li>Event experiences</li>
                        <li>Education & training</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-medium text-gray-800 mb-4">Value Distribution Model</h4>
                <p className="text-gray-600 mb-6">
                  Our economic model ensures that value is fairly distributed among all platform contributors through 
                  a transparent, blockchain-based accounting system that recognizes both direct and indirect contributions.
                </p>
                
                <div className="bg-gray-100 p-6 rounded-xl mb-8">
                  <p className="font-medium text-gray-800 mb-4">Annual Revenue Potential Per Creative Professional</p>
                  <p className="text-gray-600 mb-2">With each professional contributing an approximate value of $100,000 per year:</p>
                  <p className="text-[#E6B325] font-semibold mb-6">100,000 × $100,000 = $10 billion in annual collective output</p>
                  
                  <p className="text-gray-600 mb-2">A significant portion of this value returns directly to creators through:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li>Usage-based compensation</li>
                    <li>Ownership stakes in collaborative works</li>
                    <li>Performance-based incentives</li>
                    <li>Network growth participation</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#E6B325] pl-6 py-2 mb-8">
                  <p className="text-gray-600 italic">
                    "Haven's economic model fundamentally reimagines the relationship between creators, audiences, and platforms, 
                    removing traditional intermediaries and ensuring that value flows directly to those who generate it."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Safe Distribution, Age Verification & Payments */}
          <section id="safe-distribution" className="mb-16 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection("safe-distribution")}>
                <div className="flex items-center">
                  <span className="text-3xl mr-6">🔒</span>
                  <h2 className="text-3xl font-bold text-gray-800">Safe Distribution, Age Verification & Payments</h2>
                </div>
                <div>
                  {expandedSection === "safe-distribution" ? (
                    <Minus size={24} className="text-[#E6B325]" />
                  ) : (
                    <Plus size={24} className="text-[#E6B325]" />
                  )}
                </div>
            </div>
              
              {expandedSection === "safe-distribution" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl flex flex-col h-full">
                      <div className="w-12 h-12 rounded-full bg-[#E6B325] flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Safe Distribution Network</h4>
                      <p className="text-gray-600 flex-grow">Our content distribution is built on a secure, scalable infrastructure that ensures safe streaming and download capabilities for all users.</p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <span className="text-[#E6B325] font-medium">Key feature: End-to-end encryption</span>
                      </div>
                  </div>
                  
                    <div className="bg-gray-50 p-6 rounded-xl flex flex-col h-full">
                      <div className="w-12 h-12 rounded-full bg-[#E6B325] flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Advanced Age Verification</h4>
                      <p className="text-gray-600 flex-grow">Leveraging biometric and blockchain technologies, our age verification system guarantees that content is accessible only to verified adults, protecting both users and creators.</p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <span className="text-[#E6B325] font-medium">Key feature: Zero-knowledge proof systems</span>
                      </div>
                  </div>
                  
                    <div className="bg-gray-50 p-6 rounded-xl flex flex-col h-full">
                      <div className="w-12 h-12 rounded-full bg-[#E6B325] flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      </div>
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Integrated Payments System</h4>
                      <p className="text-gray-600 flex-grow">A modern, secure payment gateway supports both traditional transactions and crypto-based micro-payments, ensuring smooth, transparent, and borderless commerce.</p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <span className="text-[#E6B325] font-medium">Key feature: Blockchain-based token model</span>
                      </div>
                  </div>
                </div>
                
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-gray-700 mb-4">Security & Privacy Standards</h4>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <p className="text-gray-600 mb-4">
                    Haven implements industry-leading security protocols to ensure user data privacy and content protection:
                  </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Zero-knowledge proof systems for age verification</li>
                    <li>Multi-factor authentication for account access</li>
                        </ul>
                      </div>
                      <div className="md:w-1/2">
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Decentralized storage to prevent data breaches</li>
                    <li>Regular security audits by third-party specialists</li>
                          <li>Transparent data usage and privacy policies</li>
                  </ul>
                </div>
              </div>
            </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* Advertising & Creative Campaigns */}
          <section id="advertising" className="mb-16 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection("advertising")}>
                <div className="flex items-center">
                  <span className="text-3xl mr-6">📊</span>
                  <h2 className="text-3xl font-bold text-gray-800">Advertising & Creative Campaigns</h2>
                </div>
                <div>
                  {expandedSection === "advertising" ? (
                    <Minus size={24} className="text-[#E6B325]" />
                  ) : (
                    <Plus size={24} className="text-[#E6B325]" />
                  )}
                </div>
            </div>
              
              {expandedSection === "advertising" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <p className="text-gray-600 mb-8 max-w-3xl">
                  Haven's advertising division functions as a high-end creative agency, delivering compelling campaigns 
                  that resonate with audiences worldwide. Our expertise spans multiple industries, catering to elite 
                  clients seeking innovative marketing solutions.
                </p>
                
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                    {["Global Brands", "Governments", "Sports Teams", "Fortune 50 Companies", "Network States", "Celebrity Influencers"].map((client, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-gray-100 p-3 rounded-lg text-center hover:bg-[#E6B325]/10 transition-colors cursor-pointer"
                      >
                        <span className="text-gray-700 font-medium">{client}</span>
                      </motion.div>
                    ))}
                    </div>
                  
                  <h4 className="text-xl font-medium text-gray-800 mb-6">Agency Capabilities</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h5 className="text-lg font-medium text-gray-700 mb-3">Data-Driven Strategies</h5>
                      <p className="text-gray-600">Utilizing AI analytics, our campaigns are precisely tailored to resonate with target audiences, ensuring maximum engagement and ROI.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h5 className="text-lg font-medium text-gray-700 mb-3">Full-Spectrum Services</h5>
                      <p className="text-gray-600">From concept creation and multimedia production to digital marketing and strategic placement, our agency provides end-to-end services that elevate brand presence on a global scale.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h5 className="text-lg font-medium text-gray-700 mb-3">Cross-Platform Integration</h5>
                      <p className="text-gray-600">Seamless campaign delivery across traditional and emerging media channels, leveraging Haven's extensive digital ecosystem for maximum impact.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h5 className="text-lg font-medium text-gray-700 mb-3">Creative Excellence</h5>
                      <p className="text-gray-600">Award-winning design teams and content creators collaborate to produce visually stunning and emotionally resonant advertising materials.</p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-[#E6B325] pl-6 py-2 bg-gray-50 rounded-r-xl">
                    <p className="text-gray-600 italic">
                    "Haven's creative campaigns blend artistic vision with cutting-edge AI analytics, resulting in advertising that doesn't just reach audiences—it captivates them."
                  </p>
                </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* Interconnected Living & Real Estate Ecosystem */}
          <section id="living" className="mb-16 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection("living")}>
                <div className="flex items-center">
                  <span className="text-3xl mr-6">🏙️</span>
                  <h2 className="text-3xl font-bold text-gray-800">Interconnected Living & Real Estate Ecosystem</h2>
            </div>
                <div>
                  {expandedSection === "living" ? (
                    <Minus size={24} className="text-[#E6B325]" />
                  ) : (
                    <Plus size={24} className="text-[#E6B325]" />
                  )}
                </div>
                </div>
                
              {expandedSection === "living" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Luxury Compounds & Residences</h4>
                      <p className="text-gray-600">Haven's real estate network includes exclusive apartments, homes, townhouses, and condos designed for both members and visitors. Our living spaces combine the exclusivity of Soho House with the service standards of Hilton hotels.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Integrated Community Spaces</h4>
                      <p className="text-gray-600">Each compound features creative studios, collaborative workspaces, leisure facilities, and immersive event spaces—promoting a lifestyle where work and play converge.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Global Cultural Hubs</h4>
                      <p className="text-gray-600">Our properties are not just living spaces but dynamic cultural centers offering a Disney-like experience where visitors can engage with art, entertainment, and community events.</p>
                    </div>
                    </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h4 className="text-xl font-medium text-gray-700 mb-4">Compound Amenities</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["Creative Studios", "State-of-art Gyms", "Luxury Spas", "Fine Dining", "Art Galleries", "Performance Venues", "Private Theaters", "Recording Studios"].map((amenity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="bg-white p-3 rounded-lg text-center hover:shadow-md hover:bg-[#E6B325]/10 transition-all duration-300 cursor-pointer"
                        >
                          <span className="text-gray-700">{amenity}</span>
                        </motion.div>
                      ))}
                  </div>
                </div>
                
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <p className="text-gray-600 mb-6">
                  Our real estate holdings operate as a network of interconnected creative hubs, strategically positioned 
                  in major global cities and exclusive resort destinations. Each property is designed to foster collaboration, 
                  inspiration, and community among Haven's members while providing unparalleled luxury and amenities.
                </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="border-l-4 border-[#E6B325] pl-6 py-2 h-full flex items-center">
                        <p className="text-gray-600 italic">
                    "Haven's living spaces transcend traditional real estate by integrating creative workspaces, 
                    cultural programming, and luxury amenities into a cohesive ecosystem where innovation and lifestyle converge."
                  </p>
                </div>
              </div>
            </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* International Art Gallery & Cultural Institutions */}
          <section id="art" className="mb-16 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection("art")}>
                <div className="flex items-center">
                  <span className="text-3xl mr-6">🎨</span>
                  <h2 className="text-3xl font-bold text-gray-800">International Art Gallery & Cultural Institutions</h2>
                </div>
                <div>
                  {expandedSection === "art" ? (
                    <Minus size={24} className="text-[#E6B325]" />
                  ) : (
                    <Plus size={24} className="text-[#E6B325]" />
                  )}
                </div>
            </div>
              
              {expandedSection === "art" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <p className="text-gray-600 mb-8 max-w-3xl">
                  Haven's cultural division extends beyond digital media to embrace physical art spaces and cultural 
                  institutions that celebrate creativity in all its forms. Our international presence establishes new 
                  centers of artistic excellence and innovation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <div className="h-36 bg-gradient-to-b from-gray-200 to-white mb-4 rounded-lg flex items-center justify-center">
                        <span className="text-5xl">🖼️</span>
                      </div>
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Global Art Galleries</h4>
                      <p className="text-gray-600">An international chain of fine art galleries provides a platform for asset building, community events, and the celebration of both digital and physical art forms.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <div className="h-36 bg-gradient-to-b from-gray-200 to-white mb-4 rounded-lg flex items-center justify-center">
                        <span className="text-5xl">🗿</span>
                      </div>
                      <h4 className="text-xl font-medium text-gray-700 mb-3">3D Printed Art & Sculptures</h4>
                      <p className="text-gray-600">Innovative displays featuring state-of-the-art 3D printed statues and installations highlight the fusion of art and technology.</p>
                  </div>
                  
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <div className="h-36 bg-gradient-to-b from-gray-200 to-white mb-4 rounded-lg flex items-center justify-center">
                        <span className="text-5xl">🏆</span>
                      </div>
                      <h4 className="text-xl font-medium text-gray-700 mb-3">Art Olympics</h4>
                      <p className="text-gray-600">A flagship global event that brings together artists, collectors, and cultural influencers to celebrate creativity on an international stage, fostering competition and collaboration in the arts.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h4 className="text-xl font-medium text-gray-700 mb-4">Cultural Programming</h4>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <p className="text-gray-600 mb-4">
                      Haven's cultural institutions host a diverse array of programming designed to engage communities 
                      and advance artistic discourse:
                    </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Artist residency programs supporting emerging talent</li>
                      <li>International exhibition exchanges with leading museums</li>
                      <li>Digital art marketplaces with NFT integration</li>
                        </ul>
                      </div>
                      <div className="md:w-1/2">
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Educational workshops and masterclasses</li>
                      <li>Cross-disciplinary cultural festivals</li>
                      <li>VR/AR immersive art experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
                </motion.div>
              )}
            </motion.div>
          </section>

          {/* Network State Infrastructure & Governance */}
          <section id="network" className="mb-16 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection("network")}>
                <div className="flex items-center">
                  <span className="text-3xl mr-6">🌐</span>
                  <h2 className="text-3xl font-bold text-gray-800">Network State Infrastructure & Governance</h2>
                </div>
                <div>
                  {expandedSection === "network" ? (
                    <Minus size={24} className="text-[#E6B325]" />
                  ) : (
                    <Plus size={24} className="text-[#E6B325]" />
                  )}
                </div>
            </div>
              
              {expandedSection === "network" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <p className="text-gray-600 mb-8 max-w-3xl">
                  Haven operates as a forward-thinking network state with innovative governance structures and financial 
                  systems that support our creative ecosystem. Our infrastructure combines cutting-edge technology with 
                  progressive social organization to create a sustainable and equitable creative economy.
                </p>
                
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-full md:col-span-1">
                      <div className="bg-gray-50 p-6 rounded-xl h-full">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Crypto Currency & Payments</h3>
                        <div className="space-y-6">
                    <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E6B325] flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                              <h4 className="text-xl font-medium text-gray-700 mb-2">Decentralized Finance</h4>
                              <p className="text-gray-600">A proprietary cryptocurrency underpins all transactions within the Haven ecosystem, enabling frictionless payments across our digital and physical platforms.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E6B325] flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                              <h4 className="text-xl font-medium text-gray-700 mb-2">Blockchain Transparency</h4>
                              <p className="text-gray-600">All transactions, age verifications, and revenue-sharing mechanisms are secured via blockchain, ensuring trust and transparency for creators and consumers alike.</p>
                    </div>
                  </div>
                </div>
                      </div>
                    </div>
                    
                    <div className="col-span-full md:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">Knights of the Round Table Legal System</h3>
                          <p className="text-gray-600 mb-4">Drawing inspiration from historical chivalry, our legal framework ensures fair dispute resolution, ethical standards, and community-driven governance.</p>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Innovative Legal Governance</li>
                            <li>Decentralized Justice</li>
                            <li>Community-driven rule-making</li>
                          </ul>
                </div>
                
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">Philosophical Army</h3>
                          <p className="text-gray-600 mb-4">A collective of thought leaders and strategists who define the cultural and ethical directions of Haven.</p>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Ideological Vanguard</li>
                            <li>Community Engagement</li>
                            <li>Progressive social organization</li>
                          </ul>
                      </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </section>
          
          {/* Conclusion */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get Started With Haven</h2>
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Whether you're an artist, investor, creative professional, or a visionary brand, Haven offers a holistic 
                environment where creativity, commerce, and community thrive in unison.
              </p>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link 
                href="/contact" 
                  className="inline-block bg-white text-gray-700 border border-[#E6B325] hover:bg-[#E6B325]/10 font-medium py-4 px-10 rounded-full transition-colors"
              >
                Request Information
              </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
} 