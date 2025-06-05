"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function BelovedPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      src: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//bloved1.png",
      alt: "be-loved.app Website - Homepage"
    },
    {
      src: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//bloved2.png", 
      alt: "be-loved.app Website - Services"
    },
    {
      src: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//bloved3.png",
      alt: "be-loved.app Website - Booking"
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/5 to-zinc-900 opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/" className="text-zinc-400 hover:text-zinc-300 transition-colors inline-flex items-center">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
            be-loved.app
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-6">
            An iOS app and web platform with personalized content and interactive scheduling for NEMT Provider BeLoved Transportation.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Healthcare</span>
            <span className="text-zinc-600">•</span>
            <span>Transportation</span>
            <span className="text-zinc-600">•</span>
            <a href="https://be-loved.app" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
              Visit Website
            </a>
          </div>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg group">
            {/* Images */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-zinc-500">
            {currentSlide + 1} / {slides.length}
          </div>
        </motion.div>

        {/* iOS App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-zinc-200">iOS Mobile App</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              The mobile app provides patients with convenient access to schedule rides, track their transportation, and manage their appointments on-the-go.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//iosapppreview.PNG"
                alt="be-loved.app iOS Mobile App Preview"
                width={400}
                height={800}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
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
                be-loved.app is a comprehensive platform designed for BeLoved Transportation, a Non-Emergency Medical Transportation (NEMT) provider. The platform includes both an iOS mobile app and a web interface that streamlines scheduling, tracking, and managing transportation services for healthcare appointments.
              </p>
              <p className="text-zinc-400">
                Our goal was to create an intuitive system that enables patients and healthcare providers to easily book and monitor transportation services while providing the transportation company with powerful tools to optimize their operations.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-300">BeLoved Transportation</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-300">2025</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-300">Mobile App, Web Platform</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-300">React, Node.js, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
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
              <h3 className="text-lg mb-4 text-zinc-200">Interactive Scheduling</h3>
              <p className="text-zinc-400">
                A user-friendly calendar interface that allows patients and healthcare providers to book transportation services with just a few taps or clicks.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Real-time Tracking</h3>
              <p className="text-zinc-400">
                GPS-enabled tracking system that provides real-time updates on vehicle location and estimated arrival times to enhance the user experience.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Personalized Content</h3>
              <p className="text-zinc-400">
                Customized user profiles and content delivery based on individual needs, preferences, and medical requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-200 mb-2">Research</h3>
              <p className="text-zinc-400">
                We conducted extensive research on NEMT services, user needs, and operational challenges to inform our approach.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">UX Design</h3>
              <p className="text-zinc-400">
                Created wireframes and prototypes focusing on accessibility and ease of use for diverse user groups, including elderly patients.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Development</h3>
              <p className="text-zinc-400">
                Built the platform using React for the frontend, Node.js for the backend, and integrated with PostgreSQL for data management.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Deployment & Training</h3>
              <p className="text-zinc-400">
                Launched the platform and provided comprehensive training to both transportation staff and healthcare partners.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                The be-loved.app platform has transformed BeLoved Transportation's operations, significantly reducing scheduling conflicts and improving overall efficiency.
              </p>
              <p className="text-zinc-400">
                Patients now enjoy a more reliable and transparent service, with easy access to scheduling and real-time updates, leading to increased satisfaction and fewer missed appointments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">42%</div>
                <p className="text-zinc-400 text-sm">Increase in on-time arrivals</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">65%</div>
                <p className="text-zinc-400 text-sm">Reduction in scheduling errors</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">28%</div>
                <p className="text-zinc-400 text-sm">Increase in daily rides</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">4.8</div>
                <p className="text-zinc-400 text-sm">Average user rating</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-16 border-t border-zinc-800"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-200 mb-6">
            Ready to Build?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let us create a custom digital experience that elevates your brand and connects with your audience.
          </p>
          <Link href="/contact">
            <div className="inline-flex items-center border border-white text-white font-medium py-2 px-8 rounded-full text-sm relative overflow-hidden group">
              {/* Yellow background that fills from left on hover */}
              <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {/* Text content */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-zinc-900">
                Start
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Next Project */}
        <div className="text-center mt-24">
          <p className="text-sm text-zinc-500 mb-4">Next Project</p>
          <Link href="/roundabout" className="text-xl text-zinc-300 hover:text-white transition-colors">
            roundabout.run
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 