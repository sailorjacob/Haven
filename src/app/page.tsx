"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, useMotionValue, useTransform } from "framer-motion"

import SimpleMenu from "@/components/simple-menu"
import FeatureItem from "@/components/feature-item"
import SectionDivider from "@/components/section-divider"
import InteractiveGradient from "@/components/interactive-gradient"
import AnimatedSection from "@/components/animated-section"
import AnimatedElement from "@/components/animated-element"

// Single accent color for consistency
const ACCENT_COLOR = "#3B82F6"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<HTMLDivElement>(null)

  // Parallax for Services section
  const servicesRef = useRef<HTMLDivElement>(null)
  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)

  const handleServicesMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = servicesRef.current?.getBoundingClientRect()
    if (!rect) return
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 to 0.5
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5
    parallaxX.set(offsetX * 30) // max 30px shift
    parallaxY.set(offsetY * 30)
  }

  const resetParallax = () => {
    parallaxX.set(0)
    parallaxY.set(0)
  }

  // Handle scroll snapping and section detection
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRef.current) return

      const sectionElements = sectionsRef.current.querySelectorAll("section")
      const scrollPosition = window.scrollY

      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-gray-100 text-gray-800">
      <SimpleMenu activeSection={activeSection} />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 z-0">
          <InteractiveGradient />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=30&width=30')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 pointer-events-none">
          {/* Circular logo */}
          <motion.div 
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="35" stroke={ACCENT_COLOR} strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <circle cx="50" cy="50" r="25" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="8" fill={ACCENT_COLOR} />
            </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl font-semibold mb-4 text-gray-900"
          >Roundabout</motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-gray-600 mb-6 max-w-xl mx-auto"
          >
            Innovation in motion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="mt-16 inline-flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-auto"
          >
            <span className="text-sm text-gray-500 mb-2">Explore</span>
            <ChevronDown size={20} color={ACCENT_COLOR} />
          </motion.div>
        </div>
      </section>

      {/* Scrollable Sections Container */}
      <div ref={sectionsRef} className="relative">
        <AnimatedSection id="vision">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                custom={0}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                className="text-3xl font-semibold mb-2 text-gray-900"
              >
                Vision
              </motion.h2>
              <AnimatedElement delay={1} className="text-gray-500 text-lg mb-4">
                A collaborative hub for innovative projects
              </AnimatedElement>
              <SectionDivider />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <AnimatedElement delay={2} className="text-gray-600 leading-relaxed">
                    Roundabout is a dynamic platform where creators, innovators, and entrepreneurs 
                    converge to develop groundbreaking projects that combine digital and physical elements.
                  </AnimatedElement>
                  <AnimatedElement delay={3} className="text-gray-600 leading-relaxed">
                    We operate as a circular economy where resources, ideas, and expertise flow freely, 
                    creating sustainable value for all participants in our ecosystem.
                  </AnimatedElement>
                  
                  <AnimatedElement delay={4} className="bg-white rounded-xl p-5 shadow-md mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Dual Innovation Model:</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-600 mb-2">Digital Experience</h4>
                        <ul className="text-gray-600 space-y-1 pl-4 list-disc">
                          <li>Interactive platforms</li>
                          <li>Virtual showcases</li>
                          <li>Digital collaboration tools</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-600 mb-2">Physical Experience</h4>
                        <ul className="text-gray-600 space-y-1 pl-4 list-disc">
                          <li>Innovation hubs</li>
                          <li>Exhibition spaces</li>
                          <li>Community venues</li>
                        </ul>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
                <AnimatedElement delay={5} className="bg-white rounded-2xl overflow-hidden h-[300px] md:h-[400px] relative shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <svg width="150" height="150" viewBox="0 0 100 100" className="opacity-20">
                      <circle cx="50" cy="50" r="45" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="35" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="25" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="15" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="5" fill={ACCENT_COLOR} />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-md px-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Continuous Innovation</h3>
                      <p className="text-gray-600">Our circular approach ensures ideas flow freely, constantly evolving and improving through collaborative iteration.</p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services">
          <div
            ref={servicesRef}
            onMouseMove={handleServicesMouseMove}
            onMouseLeave={resetParallax}
            className="relative overflow-hidden container mx-auto px-6"
          >
            {/* Cover overlay to remove background artifacts */}
            <div className="pointer-events-none absolute inset-0 bg-white/90"></div>

            {/* Background image removed as per request */}
            <div className="max-w-5xl mx-auto relative">
              <AnimatedElement delay={0} className="text-3xl font-semibold mb-2 text-gray-900">
                Our Services
              </AnimatedElement>
              <AnimatedElement delay={1} className="text-gray-500 text-lg mb-4">
                Turning ideas into reality through collaboration
              </AnimatedElement>
              <SectionDivider />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <AnimatedElement delay={2}>
                  <FeatureItem
                    title="Innovation Workshops"
                    description="Collaborative sessions that bring together diverse expertise to solve complex challenges."
                    icon="Sparkles"
                  />
                </AnimatedElement>
                <AnimatedElement delay={3}>
                  <FeatureItem
                    title="Creative Spaces"
                    description="Physical and virtual environments designed to inspire creativity and productivity."
                    icon="Home"
                  />
                </AnimatedElement>
                <AnimatedElement delay={4}>
                  <FeatureItem
                    title="Resource Network"
                    description="Access to a global network of specialists, tools, and funding opportunities."
                    icon="Network"
                  />
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="community">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedElement delay={0} className="text-3xl font-semibold mb-2 text-gray-900">
                Our Community
              </AnimatedElement>
              <AnimatedElement delay={1} className="text-gray-500 text-lg mb-4">
                A diverse collective of forward-thinkers
              </AnimatedElement>
              <SectionDivider />
              <div className="mt-12 flex flex-col md:flex-row gap-10 items-center">
                <AnimatedElement delay={2} className="md:w-1/2">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Roundabout brings together individuals from various disciplines who share a passion for 
                    collaborative innovation and sustainable development.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our members include designers, engineers, artists, entrepreneurs, and thinkers who believe 
                    in the power of circular thinking and continuous improvement.
                  </p>
                  <div className="mt-8">
                    <button className="text-sm font-medium py-2 px-4 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                      Join our community
                    </button>
                  </div>
                </AnimatedElement>
                <AnimatedElement delay={3} className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-40 flex items-center justify-center overflow-hidden relative group shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium z-10">Innovators</span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl h-40 flex items-center justify-center overflow-hidden relative group shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="35" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium z-10">Creators</span>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl h-40 flex items-center justify-center overflow-hidden relative group shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="25" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium z-10">Entrepreneurs</span>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl h-40 flex items-center justify-center overflow-hidden relative group shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="15" stroke={ACCENT_COLOR} strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium z-10">Visionaries</span>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedElement delay={0} className="text-3xl font-semibold mb-2 text-gray-900">
                Our Projects
              </AnimatedElement>
              <AnimatedElement delay={1} className="text-gray-500 text-lg mb-4">
                From concept to reality
              </AnimatedElement>
              <SectionDivider />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedElement delay={2} className="bg-white rounded-2xl p-6 h-full shadow-lg">
                  <h3 className="text-lg font-medium mb-4 text-blue-500">Digital Initiatives</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Interactive virtual exhibitions and showcases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Collaborative online platforms for remote innovation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Digital marketplaces for sustainable products</span>
                    </li>
                  </ul>
                </AnimatedElement>
                <AnimatedElement delay={3} className="bg-white rounded-2xl p-6 h-full shadow-lg">
                  <h3 className="text-lg font-medium mb-4 text-blue-500">Physical Spaces</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Modular co-working hubs for collaborative innovation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Pop-up exhibition spaces for emerging creators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Community workshops with shared tools and resources</span>
                    </li>
                  </ul>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedElement delay={0} className="text-3xl font-semibold mb-2 text-gray-900">
                Contact
              </AnimatedElement>
              <AnimatedElement delay={1} className="text-gray-500 text-lg mb-4">
                Get in touch with us
              </AnimatedElement>
              <div className="mt-12 max-w-md mx-auto">
                <AnimatedElement delay={2} className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-gray-600 text-center mb-6">
                    Interested in joining our community or learning more about our projects? We'd love to hear from you.
                  </p>
                  <div className="flex justify-center">
                    <button className="text-sm font-medium py-2 px-4 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                      Connect with us
                    </button>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
