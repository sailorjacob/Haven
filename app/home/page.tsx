"use client"

import { useEffect, useRef, useState } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion"

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

// Define interface for AnimatedSection
interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  threshold?: number;
}

// Enhanced 3D animation variants
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    transformPerspective: 1000,
    rotateX: 10,
    z: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    z: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay
    }
  })
};

// Component for animated sections
const AnimatedSection = ({ 
  id, 
  className, 
  children, 
  animate = true,
  threshold = 0.2
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!animate) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      },
      { threshold }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, animate, hasAnimated, threshold]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

// Child component to animate elements within sections
interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={delay}
      variants={childVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
                fill="#3B82F6"
              />
            </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl font-semibold mb-4 text-gray-900"
          >Haven</motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-gray-600 mb-6 max-w-xl mx-auto"
          >
            dream builders
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="mt-16 inline-flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-auto"
          >
            <span className="text-sm text-gray-500 mb-2">Explore</span>
            <ChevronDown size={20} color={GOLD} />
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
                variants={childVariants}
                className="text-3xl font-semibold mb-2 text-gray-900"
              >
                Vision
              </motion.h2>
              <motion.p 
                custom={1}
                variants={childVariants}
                className="text-gray-500 text-lg mb-4"
              >
                A new paradigm for creative living
              </motion.p>
              <SectionDivider />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <motion.p 
                    custom={2}
                    variants={childVariants}
                    className="text-gray-600 leading-relaxed"
                  >
                    Haven is designed as a modern network state where a community of artists, technologists, and
                    entrepreneurs collectively builds and distributes digital content.
                  </motion.p>
                  <motion.p 
                    custom={3}
                    variants={childVariants}
                    className="text-gray-600 leading-relaxed"
                  >
                    Think of it as a fusion of a cinematic platform, a music service, and an entertainment conglomerate, all
                    operating from interconnected residential compounds.
                  </motion.p>
                  
                  <motion.div 
                    custom={4}
                    variants={childVariants}
                    className="bg-white rounded-xl p-5 shadow-md mt-8"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Dual Innovation Model:</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-600 mb-2">Digital Experience</h4>
                        <ul className="text-gray-600 space-y-1 pl-4 list-disc">
                          <li>AI-generated films</li>
                          <li>AI-generated music</li>
                          <li>Streaming platform</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-600 mb-2">Physical Experience</h4>
                        <ul className="text-gray-600 space-y-1 pl-4 list-disc">
                          <li>Art galleries</li>
                          <li>Screening theaters</li>
                          <li>Accommodations</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div 
                  custom={5}
                  variants={childVariants}
                  className="bg-white rounded-2xl overflow-hidden h-[300px] md:h-[400px] relative shadow-lg"
                >
                  <AIImage
                    initialPrompt="premium residential compound with futuristic architecture, digital art displays, and advanced technology, cinematic quality, night view with glowing lights, aerial perspective showing multiple interconnected buildings"
                    alt="Haven vision"
                    className="w-full h-full"
                    forcedCategory="futuristic"
                    showHoverText={false}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="components">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                custom={0}
                variants={childVariants}
                className="text-3xl font-semibold mb-2 text-gray-900"
              >
                Key Components
              </motion.h2>
              <motion.p 
                custom={1}
                variants={childVariants}
                className="text-gray-500 text-lg mb-4"
              >
                The building blocks of our network state
              </motion.p>
              <SectionDivider />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div custom={2} variants={childVariants}>
                  <FeatureItem
                    title="AI-Generated Content"
                    description="Production of films, music, and digital art using advanced AI tools."
                    icon="Sparkles"
                  />
                </motion.div>
                <motion.div custom={3} variants={childVariants}>
                  <FeatureItem
                    title="Residence-Style Living"
                    description="Quality compounds where members reside and work together."
                    icon="Home"
                  />
                </motion.div>
                <motion.div custom={4} variants={childVariants}>
                  <FeatureItem
                    title="Decentralized Structure"
                    description="A network state that operates across borders with shared resources."
                    icon="Network"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="membership">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                custom={0}
                variants={childVariants}
                className="text-3xl font-semibold mb-2 text-gray-900"
              >
                Native identity
              </motion.h2>
              <motion.p 
                custom={1}
                variants={childVariants}
                className="text-gray-500 text-lg mb-4"
              >
                An open global community
              </motion.p>
              <SectionDivider />
              <div className="mt-12 flex flex-col md:flex-row gap-10 items-center">
                <motion.div 
                  custom={2}
                  variants={childVariants}
                  className="md:w-1/2"
                >
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Haven is an open community of artists and storytellers who share their craft and build generational
                    skills in digital arts.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our members come from all corners of the world, united by a shared passion for storytelling and digital creation. We welcome digital immigrants from anywhere on the globe who identify with our collective mission.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/products"
                      className="text-sm font-medium py-2 px-4 border border-[#E6B325] text-[#E6B325] rounded-full hover:bg-[#E6B325]/10 transition-colors"
                    >
                      Learn about our community
                    </Link>
                  </div>
                </motion.div>
                <motion.div 
                  custom={3}
                  variants={childVariants}
                  className="md:w-1/2 grid grid-cols-2 gap-4"
                >
                  <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                    <AIImage
                      initialPrompt="elite residential compound with private villas and creative spaces, cinematic quality, aerial view"
                      alt="Haven member"
                      className="w-full h-full"
                      forcedCategory="resort"
                      showHoverText={false}
                    />
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                    <AIImage
                      initialPrompt="premium creative workspace with advanced technology and art displays, cinematic quality"
                      alt="Haven technology"
                      className="w-full h-full"
                      forcedCategory="workspace"
                      showHoverText={false}
                    />
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                    <AIImage
                      initialPrompt="exclusive residential compound with private beach and creative spaces, cinematic quality"
                      alt="Haven compound"
                      className="w-full h-full"
                      forcedCategory="resort"
                      showHoverText={false}
                    />
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden aspect-square relative group shadow-lg">
                    <AIImage
                      initialPrompt="global network of premium residential compounds connected by digital technology, cinematic quality, night view from space"
                      alt="Haven community"
                      className="w-full h-full"
                      forcedCategory="network"
                      showHoverText={false}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="ecosystem">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                custom={0}
                variants={childVariants}
                className="text-3xl font-semibold mb-2 text-gray-900"
              >
                Ecosystem
              </motion.h2>
              <motion.p 
                custom={1}
                variants={childVariants}
                className="text-gray-500 text-lg mb-4"
              >
                A self-sustaining model
              </motion.p>
              <SectionDivider />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  custom={2}
                  variants={childVariants}
                  className="bg-white rounded-2xl p-6 h-full shadow-lg"
                >
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
                </motion.div>
                <motion.div 
                  custom={3}
                  variants={childVariants}
                  className="bg-white rounded-2xl p-6 h-full shadow-lg"
                >
                  <h3 className="text-lg font-medium mb-4 text-[#E6B325]">Economic Model</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#E6B325] mr-2">•</span>
                      <span>Income from content platforms and advertising services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E6B325] mr-2">•</span>
                      <span>Additional accommodation facilities and public events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E6B325] mr-2">•</span>
                      <span>High-end advertising agency and fine art market</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                custom={0}
                variants={childVariants}
                className="text-3xl font-semibold mb-2 text-gray-900"
              >
                Contact
              </motion.h2>
              <motion.p 
                custom={1}
                variants={childVariants}
                className="text-gray-500 text-lg mb-4"
              >
                Connect with Haven
              </motion.p>
              <div className="mt-12 max-w-md mx-auto">
                <motion.div 
                  custom={2}
                  variants={childVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <p className="text-gray-600 text-center mb-6">
                    For inquiries about Haven and our community, please reach out through our secure channels.
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="text-sm font-medium py-2 px-4 border border-[#E6B325] text-[#E6B325] rounded-full hover:bg-[#E6B325]/10 transition-colors"
                    >
                      Request information
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
} 