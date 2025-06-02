"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Check, X, ArrowRight, Zap, Clock, Users, Star, Palette, Award, Repeat, Hexagon, Mail, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import AnimatedStars from "../components/AnimatedStars"
import { Footer } from "@/components/footer"

// Add custom styles
const customStyles = {
  ".rotate-neg-15": {
    transform: "rotate(-15deg)"
  }
};

export default function PricingPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<string>("monthly")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isJoinHovered, setIsJoinHovered] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Function to get a random highlight color - precompute for better performance
  const getRandomHighlightColor = () => {
    const colors = ['text-green-500 font-bold', 'text-red-500 font-bold', 'text-yellow-500 font-bold'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Precompute colors to avoid runtime calculations
  const precomputedColors = Array(10).fill(0).map(() => getRandomHighlightColor());

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const features = [
    { name: "Mobile Apps", included: true },
    { name: "Presentations", included: true },
    { name: "Logos", included: true },
    { name: "Social Media", included: true },
    { name: "Email", included: true },
    { name: "Print Design", included: true },
    { name: "Packaging", included: true },
    { name: "Ad Creative", included: true },
    { name: "Landing Pages", included: true },
    { name: "Branding", included: true },
    { name: "Display Ads", included: true },
    { name: "User Interface", included: true },
    { name: "eCommerce", included: true },
    { name: "Illustrations", included: true },
    { name: "Infographics", included: true },
  ]

  const faqs = [
    {
      question: "How fast will I receive my designs?",
      answer: "Most designs are delivered within 48 hours. Complex projects may take longer, but we'll always keep you updated on the progress."
    },
    {
      question: "How does onboarding work?",
      answer: "After signing up, you'll receive access to your submission system where you can submit requests. We'll schedule a quick onboarding call to understand your brand and preferences."
    },
    {
      question: "Is there a limit to how many requests I can make?",
      answer: "There's no limit to the number of requests you can add to your queue, but we work on one request at a time to ensure the highest quality output."
    },
    {
      question: "How does the pause feature work?",
      answer: "You can pause your subscription at any time from your account dashboard. Your billing will be suspended until you decide to resume, and we'll save your spot."
    },
    {
      question: "Do you accept crypto?",
      answer: "Yes, we accept payments in Bitcoin, Ethereum, or USDC."
    }
  ]

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
                  href="/advertising" 
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                >
                  Advertising
                </Link>
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-white border-b border-zinc-200"
              style={{ willChange: "opacity, height" }}
            >
              <div className="container mx-auto px-6 py-4 space-y-3">
                <Link 
                  href="/advertising" 
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Advertising
                </Link>
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

      {/* Single Combined Section - All Content Flows Together */}
      <section className="relative z-10 pt-20 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="pt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
                Design subscriptions <span className="text-primary">for everyone</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-6">
                One subscription to rule them all. Pause or cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                  onClick={scrollToFeatures}
                >
                  See Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                  >
                    Book a 15-min intro call
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* How It Works */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                The way design should've been done in the first place
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Repeat className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Subscribe</h3>
                <p className="text-zinc-600">
                  Subscribe to a plan & request as many designs as you'd like.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Request</h3>
                <p className="text-zinc-600">
                  Request whatever you'd like, from mobile apps to logos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900">Receive</h3>
                <p className="text-zinc-600">
                  Receive your design within two business days on average.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Design Categories */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Apps, websites, logos & more
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                All the things you need under one roof.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: Math.min(0.05 * index, 0.25), ease: "easeOut" }}
                  className="bg-white border border-zinc-200 p-4 rounded-lg text-center hover:border-primary/50 transition-colors"
                  style={{ willChange: "transform, opacity" }}
                >
                  <p className="text-zinc-800">{feature.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-sm font-medium text-primary mb-2">MEMBERSHIP BENEFITS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                It's "Everything you need."
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Replaces unreliable freelancers and expensive agencies for one flat monthly fee,
                with designs delivered so fast you won't want to go anywhere else.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-[#00ffff] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Palette className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Design submissions</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Easily manage your design queue with a dedicated submission system.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-[#ff00ff] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Zap className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Fixed monthly rate</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    No surprises here! Pay the same fixed price each month.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-[#ffd700] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Clock className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Fast delivery</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Get your design one at a time in just a couple days on average.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-sky-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Star className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Top-notch quality</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Senior-level design quality at your fingertips, whenever you need it.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-[#0f0] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Repeat className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Flexible and scalable</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Scale up or down as needed, and pause or cancel at anytime.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-xl border border-zinc-200 relative overflow-hidden group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-[#f00] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <Award className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-zinc-900 group-hover:text-white transition-colors">Unique and all yours</h3>
                  <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                    Every design is made especially for you and is 100% yours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pricing Section */}
          <div ref={featuresRef} id="pricing">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-sm font-medium text-primary mb-2">PRICING</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                One subscription, endless possibilities
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Start today with our unlimited design subscription
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Unified Card with Border */}
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 shadow-xl overflow-hidden">
                {/* Inner subtle pattern background */}
                <div className="absolute inset-0 bg-white opacity-80 mix-blend-overlay">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden">
                  {/* Monthly Club Card */}
                  <div className="flex items-center justify-center p-8 bg-gradient-to-br from-zinc-50 to-zinc-100">
                    <div className="relative rotate-neg-15 hover:-rotate-12 transition-transform duration-300" style={{ transform: "rotate(-15deg)" }}>
                      {/* Card */}
                      <div className="w-96 h-60 rounded-xl bg-white shadow-lg overflow-hidden relative border border-zinc-200">
                        {/* Silver metallic shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 via-white to-zinc-200"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sky-50/10 to-sky-100/20"></div>
                        
                        {/* Accent shapes */}
                        <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-sky-400/20 backdrop-blur-md"></div>
                        <div className="absolute top-6 left-16 w-16 h-16 rounded-full bg-indigo-500/10 backdrop-blur-md"></div>
                        <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-yellow-300/10 backdrop-blur-md"></div>
                        <div className="absolute bottom-10 right-24 w-14 h-14 rounded-full bg-zinc-800/5 backdrop-blur-md"></div>
                        
                        {/* Card content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-5">
                          {/* Card header */}
                          <div className="flex justify-between items-center">
                            <Hexagon className="w-8 h-8 text-zinc-800/80" strokeWidth={1} />
                            <div className="text-xs font-medium text-zinc-600">Premium</div>
                          </div>

                          {/* Card center content */}
                          <div className="mt-6">
                            <div className="text-3xl font-bold text-zinc-800">Haven Studio</div>
                            <div className="text-sm font-medium text-zinc-500 mt-1">Design Subscription</div>
                          </div>
                          
                          {/* Card footer */}
                          <div className="flex justify-between items-end">
                            <div className="text-sm font-medium tracking-wider text-zinc-600">MONTHLY CLUB</div>
                            <Link href="https://buy.stripe.com/3cI6oI2Ph3Du0kn6dB57W02">
                              <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white text-xs font-medium py-1.5 px-4 rounded-full shadow-sm hover:from-sky-500 hover:to-sky-600 transition-colors">
                                Start today
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing Details */}
                  <div className="bg-white p-8 border-l border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-zinc-800">Monthly Subscription</h3>
                      <div className="text-xs font-medium text-zinc-500">
                        Pause or cancel anytime
                      </div>
                    </div>
                    
                    <div className="border-b border-dashed border-zinc-200 pb-6 mb-6">
                      <div className="flex items-baseline mb-6">
                        <span className="text-5xl font-bold text-zinc-800">$4,995</span>
                        <span className="text-zinc-500 ml-2">/month</span>
                      </div>
                      
                      <div className="bg-zinc-50 px-6 py-6 rounded-lg mb-6 border border-zinc-100">
                        <div className="uppercase text-sm font-medium text-zinc-500 mb-3">INCLUDED</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">One request at a time</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Unlimited stock photos</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Avg. 48 hour delivery</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Up to 2 users</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Unlimited brands</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Pause or cancel anytime</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-sky-500 mr-2 shrink-0" />
                            <span className="text-zinc-700">Website Development</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link href="https://buy.stripe.com/3cI6oI2Ph3Du0kn6dB57W02">
                        <button className="group relative w-full border-2 border-yellow-400 bg-transparent text-zinc-900 font-medium py-3 px-8 rounded-full overflow-hidden transition-all duration-300">
                          <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          <span className="relative z-10 flex items-center justify-center">
                            Join today
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </button>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="mr-3 p-2 bg-zinc-100 rounded-full">
                          <Clock className="h-4 w-4 text-zinc-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-zinc-800">Pause anytime</h4>
                          <p className="text-xs text-zinc-500">No questions asked</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-3 p-2 bg-zinc-100 rounded-full">
                          <Zap className="h-4 w-4 text-zinc-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-zinc-800">Money back</h4>
                          <p className="text-xs text-zinc-500">75% refund first week</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="bg-zinc-50 rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-8"
              style={{ willChange: "transform, opacity" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3), ease: "easeOut" }}
                  className="bg-white border border-zinc-200 rounded-lg overflow-hidden"
                  style={{ willChange: "transform, opacity" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-medium text-zinc-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ willChange: "transform" }}
                    >
                      <ChevronDown className="w-5 h-5 text-zinc-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                        style={{ willChange: "opacity, height" }}
                      >
                        <div className="px-6 py-4 text-zinc-600 border-t border-zinc-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                See if our design service is the right fit for you
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-6">
                Schedule a quick, 15 minute guided tour through our process.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                  >
                    Book a 15-min intro call
                  </Button>
                </Link>
                <Link href="mailto:hello@example.com">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                  >
                    Prefer to email?
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 