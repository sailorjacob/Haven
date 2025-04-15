"use client"

import { useEffect, useRef, useState } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import SimpleMenu from "@/components/simple-menu"
import Section from "@/components/section"
import FeatureItem from "@/components/feature-item"
import AIImage from "@/components/ai-image"
import SectionDivider from "@/components/section-divider"
import InteractiveGradient from "@/components/interactive-gradient"

// Using Inter for modern feel
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// Single golden color for consistency
const GOLD = "#3B82F6"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<HTMLDivElement>(null)

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
    <main className={`${inter.className} bg-gray-100 text-gray-800`}>
      <SimpleMenu activeSection={activeSection} />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 z-0">
          <InteractiveGradient />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=30&width=30')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 pointer-events-none">
          {/* Simple logo */}
          <div className="mb-8 inline-block">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
                fill="#3B82F6"
              />
            </svg>
          </div>

          <h1 className="text-5xl font-semibold mb-4 text-gray-900">Haven</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-xl mx-auto">
            dream builders
          </p>

          <div
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="mt-16 inline-flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-auto"
          >
            <span className="text-sm text-gray-500 mb-2">Explore</span>
            <ChevronDown size={20} color={GOLD} />
          </div>
        </div>
      </section>

      {/* Scrollable Sections Container */}
      <div ref={sectionsRef} className="relative">
        <Section id="vision" title="Vision" subtitle="A new paradigm for creative living">
          <SectionDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Haven is designed as a modern network state where a community of artists, technologists, and
                entrepreneurs collectively builds and distributes digital content.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Think of it as a fusion of a cinematic platform, a music service, and an entertainment conglomerate, all
                operating from interconnected resort compounds.
              </p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden h-[300px] md:h-[400px] relative shadow-lg">
              <AIImage
                initialPrompt="luxury resort compound with futuristic architecture, digital art displays, and advanced technology, cinematic quality, night view with glowing lights, aerial perspective showing multiple interconnected buildings"
                alt="Haven vision"
                className="w-full h-full"
                forcedCategory="futuristic"
                showHoverText={false}
              />
            </div>
          </div>
        </Section>

        <Section id="components" title="Key Components" subtitle="The building blocks of our network state">
          <SectionDivider />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FeatureItem
              title="AI-Generated Content"
              description="Production of films, music, and digital art using advanced AI tools."
              icon="Sparkles"
            />
            <FeatureItem
              title="Resort-Style Living"
              description="Luxury compounds where members reside and work together."
              icon="Home"
            />
            <FeatureItem
              title="Decentralized Structure"
              description="A network state that operates across borders with shared resources."
              icon="Network"
            />
          </div>
        </Section>

        <Section id="membership" title="Native identity" subtitle="A highly selective community">
          <SectionDivider />
          <div className="mt-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Haven is a selective community of artists and storytellers who share their craft and build generational
                skills in digital arts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our members identify with the network state over traditional nationality, sharing a collective mission
                as modern storytellers.
              </p>
              <div className="mt-8">
                <Link
                  href="/products"
                  className="text-sm font-medium py-2 px-4 border border-[#E6B325] text-[#E6B325] rounded-full hover:bg-[#E6B325]/10 transition-colors"
                >
                  Learn about selection
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                <AIImage
                  initialPrompt="elite luxury resort compound with private villas and creative spaces, cinematic quality, aerial view"
                  alt="Haven member"
                  className="w-full h-full"
                  forcedCategory="resort"
                  showHoverText={false}
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                <AIImage
                  initialPrompt="luxury creative workspace with advanced technology and art displays, cinematic quality"
                  alt="Haven technology"
                  className="w-full h-full"
                  forcedCategory="workspace"
                  showHoverText={false}
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                <AIImage
                  initialPrompt="exclusive luxury resort compound with private beach and creative spaces, cinematic quality"
                  alt="Haven compound"
                  className="w-full h-full"
                  forcedCategory="resort"
                  showHoverText={false}
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                <AIImage
                  initialPrompt="global network of luxury resort compounds connected by digital technology, cinematic quality, night view from space"
                  alt="Haven community"
                  className="w-full h-full"
                  forcedCategory="network"
                  showHoverText={false}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section id="ecosystem" title="Ecosystem" subtitle="A self-sustaining model">
          <SectionDivider />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 h-full shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-[#E6B325]">Digital Media Platform</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#E6B325] mr-2">•</span>
                  <span>AI-Generated films, music, and digital art</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E6B325] mr-2">•</span>
                  <span>Curated and distributed through a streaming ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E6B325] mr-2">•</span>
                  <span>Micro-payment systems via cryptocurrencies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 h-full shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-[#E6B325]">Economic Model</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#E6B325] mr-2">•</span>
                  <span>Income from content platforms and advertising services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E6B325] mr-2">•</span>
                  <span>Additional resort accommodations and public events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E6B325] mr-2">•</span>
                  <span>High-end advertising agency and fine art market</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Connect with Haven">
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 text-center mb-6">
                For inquiries about Haven and our selection process, please reach out through our secure channels.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="text-sm font-medium py-2 px-4 border border-[#E6B325] text-[#E6B325] rounded-full hover:bg-[#E6B325]/10 transition-colors"
                >
                  Request information
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}

