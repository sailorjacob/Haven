"use client"

import { Inter } from "next/font/google"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export default function Products() {
  return (
    <main className={`${inter.className} bg-black min-h-screen w-full`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-neutral-300 hover:text-[#3B82F6] transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Haven
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl font-semibold text-neutral-100 mb-6 text-center">
            Haven: A Hive of Creative Collaboration and Interconnected Living
          </h1>
          
          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg mb-10">
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Haven is an integrated ecosystem where cutting‐edge creative production meets next-generation digital distribution, 
              luxurious living, and a new paradigm in cultural governance. This documentation outlines our multi-faceted services—from 
              advanced AI-generated content in adult entertainment to immersive real estate communities and an international art 
              and cultural platform.
            </p>
            
            {/* Table of Contents */}
            <div className="bg-neutral-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-neutral-100 mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-center">
                  <span className="text-[#3B82F6] mr-2">1.</span>
                  <a href="#creative-content" className="hover:text-[#3B82F6] transition-colors">Creative Content Platforms</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#3B82F6] mr-2">2.</span>
                  <a href="#safe-distribution" className="hover:text-[#3B82F6] transition-colors">Safe Distribution, Age Verification & Payments</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#3B82F6] mr-2">3.</span>
                  <a href="#advertising" className="hover:text-[#3B82F6] transition-colors">Advertising & Creative Campaigns</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#3B82F6] mr-2">4.</span>
                  <a href="#living" className="hover:text-[#3B82F6] transition-colors">Interconnected Living & Real Estate Ecosystem</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#3B82F6] mr-2">5.</span>
                  <a href="#art" className="hover:text-[#3B82F6] transition-colors">International Art Gallery & Cultural Institutions</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#3B82F6] mr-2">6.</span>
                  <a href="#network" className="hover:text-[#3B82F6] transition-colors">Network State Infrastructure & Governance</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Creative Content Platforms */}
          <section id="creative-content" className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden scroll-mt-24">
            <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Creative Content Platforms</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                {/* Adult Entertainment Section */}
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Adult Entertainment & Porn Production</h3>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Elite AI-Generated Content</h4>
                        <p className="text-neutral-300">Harness the power of AI to produce next-generation adult films. With cutting-edge technology, we deliver content that is both artistically innovative and responsibly produced.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Safe and Ethical Production</h4>
                        <p className="text-neutral-300">Integrated workflows ensure that all content adheres to strict ethical guidelines, including performer consent and high-quality production values.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Collaborative Hive</h4>
                        <p className="text-neutral-300">Thousands of creative professionals—from scriptwriters and directors to digital artists—collaborate on projects, making adult entertainment a vibrant lifestyle career within Haven.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Film & TV Production Platform */}
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Film & TV Production Platform</h3>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Bespoke Video Platform</h4>
                        <p className="text-neutral-300">Inspired by the best of Netflix and HBO, our platform leverages elite AI technologies akin to Palantir-level analytics to generate films and series that break the mold of traditional media.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Massive Collaborative Network</h4>
                        <p className="text-neutral-300">Imagine a creative collective of 100,000+ professionals working in unison, ensuring every production is both a high-caliber artistic endeavor and a community-driven project.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Advanced Analytics & Personalization</h4>
                        <p className="text-neutral-300">Our backend uses deep-learning algorithms to analyze viewer preferences, enabling ultra-personalized recommendations and a seamless viewing experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Music & Digital Audio Platform */}
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Music & Digital Audio Platform</h3>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">AI-Powered Music Production</h4>
                        <p className="text-neutral-300">Thousands of artists and AI generators work side-by-side, producing a steady stream of innovative tracks and albums that resonate globally.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Dynamic Label & Streaming Experience</h4>
                        <p className="text-neutral-300">Similar to Spotify, but reimagined as an integrated label where artists can monetize and distribute their work seamlessly through an intuitive user interface.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Ecosystem-Driven Revenue</h4>
                        <p className="text-neutral-300">A robust micro-payment system and blockchain-based token model facilitate transparent and real-time revenue sharing for creators.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Economic Model Section */}
          <section className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-700 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Economic Model</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Self-Sustaining Creative Economy</h3>
                
                <p className="text-neutral-300 mb-6">
                  Haven's economic model represents a paradigm shift from traditional media industry practices, creating a 
                  self-sustaining ecosystem where creators directly benefit from their contributions.
                </p>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-medium text-[#3B82F6] mb-4">Revenue Streams</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-neutral-200 font-medium mb-2">Primary</p>
                      <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                        <li>Media subscriptions</li>
                        <li>Content licensing</li>
                        <li>Production services</li>
                        <li>Branded partnerships</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-neutral-200 font-medium mb-2">Secondary</p>
                      <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                        <li>Marketplace transactions</li>
                        <li>Platform fees</li>
                        <li>Event experiences</li>
                        <li>Education & training</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-medium text-neutral-100 mb-4">Value Distribution Model</h4>
                <p className="text-neutral-300 mb-6">
                  Our economic model ensures that value is fairly distributed among all platform contributors through 
                  a transparent, blockchain-based accounting system that recognizes both direct and indirect contributions.
                </p>
                
                <div className="bg-neutral-700 p-6 rounded-xl mb-8">
                  <p className="font-medium text-neutral-100 mb-4">Annual Revenue Potential Per Creative Professional</p>
                  <p className="text-neutral-300 mb-2">With each professional contributing an approximate value of $100,000 per year:</p>
                  <p className="text-[#3B82F6] font-semibold mb-6">100,000 × $100,000 = $10 billion in annual collective output</p>
                  
                  <p className="text-neutral-300 mb-2">A significant portion of this value returns directly to creators through:</p>
                  <ul className="list-disc pl-6 text-neutral-300 mb-4">
                    <li>Usage-based compensation</li>
                    <li>Ownership stakes in collaborative works</li>
                    <li>Performance-based incentives</li>
                    <li>Network growth participation</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#3B82F6] pl-6 py-2 mb-8">
                  <p className="text-neutral-300 italic">
                    "Haven's economic model fundamentally reimagines the relationship between creators, audiences, and platforms, 
                    removing traditional intermediaries and ensuring that value flows directly to those who generate it."
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Haven?</h3>
            <p className="text-blue-100 mb-6">
              Join our network of creators and explore how our platforms can amplify your creative potential.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Request Information
            </Link>
          </section>

          {/* Safe Distribution, Age Verification & Payments */}
          <section id="safe-distribution" className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden scroll-mt-24">
            <div className="h-48 bg-gradient-to-r from-blue-700 to-indigo-600 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Safe Distribution, Age Verification & Payments</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Safe Distribution Network</h4>
                    <p className="text-neutral-300">Our content distribution is built on a secure, scalable infrastructure that ensures safe streaming and download capabilities for all users.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Advanced Age Verification</h4>
                    <p className="text-neutral-300">Leveraging biometric and blockchain technologies, our age verification system guarantees that content is accessible only to verified adults, protecting both users and creators.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Integrated Payments System</h4>
                    <p className="text-neutral-300">A modern, secure payment gateway supports both traditional transactions and crypto-based micro-payments, ensuring smooth, transparent, and borderless commerce.</p>
                  </div>
                </div>
                
                <div className="bg-neutral-700 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Security & Privacy Standards</h4>
                  <p className="text-neutral-300 mb-4">
                    Haven implements industry-leading security protocols to ensure user data privacy and content protection:
                  </p>
                  <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Zero-knowledge proof systems for age verification</li>
                    <li>Multi-factor authentication for account access</li>
                    <li>Decentralized storage to prevent data breaches</li>
                    <li>Regular security audits by third-party specialists</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Advertising & Creative Campaigns */}
          <section id="advertising" className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden scroll-mt-24">
            <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Advertising & Creative Campaigns</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-neutral-300 mb-6">
                  Haven's advertising division functions as a high-end creative agency, delivering compelling campaigns 
                  that resonate with audiences worldwide. Our expertise spans multiple industries, catering to elite 
                  clients seeking innovative marketing solutions.
                </p>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-medium text-[#3B82F6] mb-4">Our Clients Include</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-neutral-200 font-medium">Global Brands</span>
                    </div>
                    <div className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-neutral-200 font-medium">Governments</span>
                    </div>
                    <div className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-neutral-200 font-medium">Sports Teams</span>
                    </div>
                    <div className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-neutral-200 font-medium">Fortune 50 Companies</span>
                    </div>
                    <div className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-neutral-200 font-medium">Network States</span>
                    </div>
                    <div className="bg-neutral-700 p-3 rounded-lg text-center">
                      <span className="text-neutral-200 font-medium">Celebrity Influencers</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-medium text-neutral-100 mb-4">Agency Capabilities</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h5 className="text-lg font-medium text-[#3B82F6] mb-3">Data-Driven Strategies</h5>
                    <p className="text-neutral-300">Utilizing AI analytics, our campaigns are precisely tailored to resonate with target audiences, ensuring maximum engagement and ROI.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h5 className="text-lg font-medium text-[#3B82F6] mb-3">Full-Spectrum Services</h5>
                    <p className="text-neutral-300">From concept creation and multimedia production to digital marketing and strategic placement, our agency provides end-to-end services that elevate brand presence on a global scale.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h5 className="text-lg font-medium text-[#3B82F6] mb-3">Cross-Platform Integration</h5>
                    <p className="text-neutral-300">Seamless campaign delivery across traditional and emerging media channels, leveraging Haven's extensive digital ecosystem for maximum impact.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h5 className="text-lg font-medium text-[#3B82F6] mb-3">Creative Excellence</h5>
                    <p className="text-neutral-300">Award-winning design teams and content creators collaborate to produce visually stunning and emotionally resonant advertising materials.</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-[#3B82F6] pl-6 py-2 mb-8">
                  <p className="text-neutral-300 italic">
                    "Haven's creative campaigns blend artistic vision with cutting-edge AI analytics, resulting in advertising that doesn't just reach audiences—it captivates them."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Interconnected Living & Real Estate Ecosystem */}
          <section id="living" className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden scroll-mt-24">
            <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Interconnected Living & Real Estate Ecosystem</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Luxury Compounds & Residences</h4>
                    <p className="text-neutral-300">Haven's real estate network includes exclusive apartments, homes, townhouses, and condos designed for both members and visitors. Our living spaces combine the exclusivity of Soho House with the service standards of Hilton hotels.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Integrated Community Spaces</h4>
                    <p className="text-neutral-300">Each compound features creative studios, collaborative workspaces, leisure facilities, and immersive event spaces—promoting a lifestyle where work and play converge.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Global Cultural Hubs</h4>
                    <p className="text-neutral-300">Our properties are not just living spaces but dynamic cultural centers offering a Disney-like experience where visitors can engage with art, entertainment, and community events.</p>
                  </div>
                </div>
                
                <div className="bg-neutral-700 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-medium text-[#3B82F6] mb-4">Compound Amenities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Creative Studios</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">State-of-art Gyms</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Luxury Spas</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Fine Dining</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Art Galleries</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Performance Venues</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Private Theaters</span>
                    </div>
                    <div className="bg-neutral-600 p-3 rounded-lg text-center">
                      <span className="text-neutral-200">Recording Studios</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-neutral-300 mb-6">
                  Our real estate holdings operate as a network of interconnected creative hubs, strategically positioned 
                  in major global cities and exclusive resort destinations. Each property is designed to foster collaboration, 
                  inspiration, and community among Haven's members while providing unparalleled luxury and amenities.
                </p>
                
                <div className="border-l-4 border-[#3B82F6] pl-6 py-2 mb-6">
                  <p className="text-neutral-300 italic">
                    "Haven's living spaces transcend traditional real estate by integrating creative workspaces, 
                    cultural programming, and luxury amenities into a cohesive ecosystem where innovation and lifestyle converge."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* International Art Gallery & Cultural Institutions */}
          <section id="art" className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden scroll-mt-24">
            <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">International Art Gallery & Cultural Institutions</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-neutral-300 mb-6">
                  Haven's cultural division extends beyond digital media to embrace physical art spaces and cultural 
                  institutions that celebrate creativity in all its forms. Our international presence establishes new 
                  centers of artistic excellence and innovation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Global Art Galleries</h4>
                    <p className="text-neutral-300">An international chain of fine art galleries provides a platform for asset building, community events, and the celebration of both digital and physical art forms.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">3D Printed Art & Sculptures</h4>
                    <p className="text-neutral-300">Innovative displays featuring state-of-the-art 3D printed statues and installations highlight the fusion of art and technology.</p>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl">
                    <h4 className="text-xl font-medium text-[#3B82F6] mb-3">Art Olympics</h4>
                    <p className="text-neutral-300">A flagship global event that brings together artists, collectors, and cultural influencers to celebrate creativity on an international stage, fostering competition and collaboration in the arts.</p>
                  </div>
                </div>
                
                <div className="bg-neutral-700 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-medium text-[#3B82F6] mb-4">Cultural Programming</h4>
                  <div className="space-y-4">
                    <p className="text-neutral-300">
                      Haven's cultural institutions host a diverse array of programming designed to engage communities 
                      and advance artistic discourse:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                      <li>Artist residency programs supporting emerging talent</li>
                      <li>International exhibition exchanges with leading museums</li>
                      <li>Digital art marketplaces with NFT integration</li>
                      <li>Educational workshops and masterclasses</li>
                      <li>Cross-disciplinary cultural festivals</li>
                      <li>VR/AR immersive art experiences</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-neutral-300 mb-6">
                  Through these cultural initiatives, Haven establishes new paradigms for experiencing and supporting the 
                  arts, creating economic opportunities for creators while enhancing the cultural fabric of communities worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Network State Infrastructure & Governance */}
          <section id="network" className="bg-neutral-900 rounded-2xl shadow-lg mb-10 overflow-hidden scroll-mt-24">
            <div className="h-48 bg-gradient-to-r from-rose-500 to-red-600 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Network State Infrastructure & Governance</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-neutral-300 mb-8">
                  Haven operates as a forward-thinking network state with innovative governance structures and financial 
                  systems that support our creative ecosystem. Our infrastructure combines cutting-edge technology with 
                  progressive social organization to create a sustainable and equitable creative economy.
                </p>
                
                {/* Crypto Currency & Payments */}
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Crypto Currency & Payments</h3>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Decentralized Finance</h4>
                        <p className="text-neutral-300">A proprietary cryptocurrency underpins all transactions within the Haven ecosystem, enabling frictionless payments across our digital and physical platforms.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Blockchain Transparency</h4>
                        <p className="text-neutral-300">All transactions, age verifications, and revenue-sharing mechanisms are secured via blockchain, ensuring trust and transparency for creators and consumers alike.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Knights of the Round Table Legal System */}
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Knights of the Round Table Legal System</h3>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Innovative Legal Governance</h4>
                        <p className="text-neutral-300">Drawing inspiration from historical chivalry, our legal framework—dubbed the Knights of the Round Table—ensures fair dispute resolution, ethical standards, and community-driven governance.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Decentralized Justice</h4>
                        <p className="text-neutral-300">A panel of legal experts, industry leaders, and community representatives collaboratively uphold the network's rules and ensure that all transactions and content adhere to high ethical standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Philosophical Army */}
                <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Philosophical Army</h3>
                
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Ideological Vanguard</h4>
                        <p className="text-neutral-300">The Philosophical Army is a collective of thought leaders and strategists who define the cultural and ethical directions of Haven.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#3B82F6] mb-2">Community Engagement</h4>
                        <p className="text-neutral-300">Through public discourse, workshops, and strategic initiatives, this group ensures that the Haven network remains a beacon of progressive thought and cultural innovation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Conclusion */}
          <section className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Conclusion</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-blue-100 mb-6">
                Haven is more than just a digital platform—it's a revolutionary network state that merges creative production, 
                secure digital distribution, immersive real estate living, and innovative governance. By uniting elite AI 
                technologies with human talent, our ecosystem empowers professionals, enhances cultural experiences, and 
                redefines modern living.
              </p>
              <p className="text-blue-100 mb-8">
                Whether you're an artist, investor, creative professional, or a visionary brand, Haven offers a holistic 
                environment where creativity, commerce, and community thrive in unison.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors"
              >
                Request Information
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 