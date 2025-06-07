"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hexagon, Menu, X, ChevronDown, Briefcase, DollarSign, Users, Mail } from "lucide-react"
import { useState } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isApplyHovered, setIsApplyHovered] = useState(false)
  const [isJobExpanded, setIsJobExpanded] = useState(false)
  const [isArtDealerExpanded, setIsArtDealerExpanded] = useState(false)
  const [isBlockchainExpanded, setIsBlockchainExpanded] = useState(false)

  return (
    <main className="bg-white w-full text-zinc-900">
      {/* Animated Stars */}
      <AnimatedStars />

      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider">Haven Studio</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/studio" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Studio
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Pricing
                </Link>
                <Link 
                  href="/book" 
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors tracking-wider uppercase font-light ml-2"
                >
                  Design Book
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/contact"
                className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm"
              >
                Contact
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-b border-zinc-200"
            >
              <div className="container mx-auto px-6 py-4 space-y-3">
                <Link 
                  href="/studio" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Studio
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/book"
                  className="block text-sm text-zinc-500 hover:text-zinc-900 transition-colors tracking-wider uppercase font-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Design Book
                </Link>
                <Link 
                  href="/contact"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <section className="relative z-10 pt-32 px-6 pb-20">
        <div className="container max-w-6xl mx-auto">
          {/* Current Openings */}
          <div id="openings" className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Current Openings</h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Explore our available positions and find the perfect role for your skills and experience.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {/* Sales Representative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="p-8 cursor-pointer"
                onClick={() => setIsJobExpanded(!isJobExpanded)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">Sales Representative</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center text-zinc-600 text-sm">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>Commission-based</span>
                      </div>
                      <div className="flex items-center text-zinc-600 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium mr-3">
                      Sales
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isJobExpanded ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </div>
                
                <AnimatePresence>
                  {isJobExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-zinc-900 mb-2">Job Description</h4>
                        <p className="text-zinc-600 mb-4">
                          We're looking for motivated sales representatives to help grow our client base. In this role, you'll identify potential clients, pitch our services, and help expand our reach in the digital design market.
                        </p>
                        <h4 className="text-lg font-medium text-zinc-900 mb-2">Compensation</h4>
                        <p className="text-zinc-600 mb-4">
                          <span className="font-medium">Up to 50% commission on any sales made.</span> Our commission structure rewards your hard work and success directly.
                        </p>
                        <h4 className="text-lg font-medium text-zinc-900 mb-2">Requirements</h4>
                        <ul className="list-disc pl-5 text-zinc-600 mb-6 space-y-1">
                          <li>Strong communication and negotiation skills</li>
                          <li>Self-motivated with ability to work independently</li>
                          <li>Understanding of digital design and web development (preferred)</li>
                          <li>Previous sales experience (preferred but not required)</li>
                        </ul>
                      </div>
                      
                      <Link 
                        href="/contact"
                        className="inline-flex items-center border-2 border-yellow-400 bg-transparent text-zinc-900 font-medium py-3 px-8 rounded-full overflow-hidden transition-all duration-300 group relative"
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => setIsApplyHovered(true)}
                        onMouseLeave={() => setIsApplyHovered(false)}
                      >
                        <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        <span className="relative z-10 transition-opacity duration-300 flex items-center">
                          {isApplyHovered ? (
                            <>
                              <ArrowRight className="w-5 h-5 mr-2" />
                              Reach out & begin now
                            </>
                          ) : (
                            <>
                              <Mail className="w-5 h-5 mr-2" />
                              Apply Now
                            </>
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

              {/* Art Dealer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setIsArtDealerExpanded(!isArtDealerExpanded)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">Art Dealer</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-zinc-600 text-sm">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span>Commission-based</span>
                        </div>
                        <div className="flex items-center text-zinc-600 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>Remote / Hybrid</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mr-3">
                        Art & Culture
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isArtDealerExpanded ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isArtDealerExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6"
                      >
                        <div className="mb-6">
                          <h4 className="text-lg font-medium text-zinc-900 mb-2">Job Description</h4>
                          <p className="text-zinc-600 mb-4">
                            We're seeking an experienced art dealer to help us expand into the fine art and digital art markets. You'll be responsible for building relationships with artists, collectors, and galleries, while identifying opportunities to integrate our design services with the contemporary art world.
                          </p>
                          <h4 className="text-lg font-medium text-zinc-900 mb-2">Compensation</h4>
                          <p className="text-zinc-600 mb-4">
                            <span className="font-medium">Up to 50% commission on any sales made.</span> High-value art transactions can yield substantial commissions. Additional bonuses for establishing long-term partnerships.
                          </p>
                          <h4 className="text-lg font-medium text-zinc-900 mb-2">Requirements</h4>
                          <ul className="list-disc pl-5 text-zinc-600 mb-6 space-y-1">
                            <li>Established network in the art world (galleries, collectors, artists)</li>
                            <li>Deep understanding of contemporary art markets and trends</li>
                            <li>Experience with both physical and digital art sales</li>
                            <li>Knowledge of NFTs and digital art platforms (preferred)</li>
                            <li>Excellent relationship-building and negotiation skills</li>
                          </ul>
                        </div>
                        
                        <Link 
                          href="/contact"
                          className="inline-flex items-center border-2 border-purple-400 bg-transparent text-zinc-900 font-medium py-3 px-8 rounded-full overflow-hidden transition-all duration-300 group relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="absolute inset-0 bg-purple-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          <span className="relative z-10 transition-opacity duration-300 flex items-center">
                            <Mail className="w-5 h-5 mr-2" />
                            Apply Now
                          </span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Blockchain Developer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setIsBlockchainExpanded(!isBlockchainExpanded)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">Blockchain Developer</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-zinc-600 text-sm">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>Equity-based</span>
                        </div>
                        <div className="flex items-center text-zinc-600 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mr-3">
                        Blockchain
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isBlockchainExpanded ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isBlockchainExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6"
                      >
                        <div className="mb-6">
                          <h4 className="text-lg font-medium text-zinc-900 mb-2">Job Description</h4>
                          <p className="text-zinc-600 mb-4">
                            We're looking for a visionary blockchain developer to help us build advanced architecture structures outside of existing legacy systems. You'll be designing and implementing innovative blockchain solutions that push the boundaries of what's possible in decentralized technology.
                          </p>
                          <h4 className="text-lg font-medium text-zinc-900 mb-2">Compensation</h4>
                          <p className="text-zinc-600 mb-4">
                            <span className="font-medium">Equity-based compensation.</span> Join as a co-founder level position with significant equity stake. We're building the future together, and you'll own a meaningful piece of what we create.
                          </p>
                          <h4 className="text-lg font-medium text-zinc-900 mb-2">Requirements</h4>
                          <ul className="list-disc pl-5 text-zinc-600 mb-6 space-y-1">
                            <li>Expert-level knowledge of blockchain protocols and architecture</li>
                            <li>Experience building outside traditional frameworks and legacy systems</li>
                            <li>Proficiency in Solidity, Rust, or other blockchain languages</li>
                            <li>Understanding of DeFi, DAOs, and emerging blockchain paradigms</li>
                            <li>Ability to think beyond existing solutions and create new architectures</li>
                            <li>Entrepreneurial mindset and willingness to build for equity</li>
                          </ul>
                        </div>
                        
                        <Link 
                          href="/contact"
                          className="inline-flex items-center border-2 border-blue-400 bg-transparent text-zinc-900 font-medium py-3 px-8 rounded-full overflow-hidden transition-all duration-300 group relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="absolute inset-0 bg-blue-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          <span className="relative z-10 transition-opacity duration-300 flex items-center">
                            <Mail className="w-5 h-5 mr-2" />
                            Apply Now
                          </span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Why Join Us */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-50 rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join Haven Studio?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
              Be part of a creative team that values innovation, collaboration, and growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Competitive Pay</h3>
                <p className="text-zinc-600 text-sm">Compensation that rewards your skills and contributions.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-zinc-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Collaborative Culture</h3>
                <p className="text-zinc-600 text-sm">Work with talented professionals in a supportive environment.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Growth Opportunities</h3>
                <p className="text-zinc-600 text-sm">Develop your skills and advance your career with us.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
} 