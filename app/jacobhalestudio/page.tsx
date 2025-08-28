"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function JacobHaleStudioPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-800">
      {/* Light gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-zinc-50 opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/" className="text-zinc-500 hover:text-zinc-800 transition-colors inline-flex items-center">
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
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-zinc-900 tracking-tight">
            Jacob Hale Studio
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-600 mb-6">
            A minimalist photography portfolio showcasing fine art photography with a focus on visual storytelling.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Fine Art Photography</span>
            <span className="text-zinc-600">•</span>
            <span>Portfolio Website</span>
            <span className="text-zinc-600">•</span>
            <a href="https://jacobhalestudio.net" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900 transition-colors">
              Visit Website
            </a>
          </div>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//jacobhalestudio.png"
              alt="Jacob Hale Studio Website"
              fill
              className="object-cover"
            />
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-800">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-600 mb-4">
                Jacob Hale Studio is a professional photography portfolio website designed to showcase fine art photography with a clean, minimalist aesthetic that puts the focus on the imagery. The site features responsive galleries, smooth transitions, and intuitive navigation.
              </p>
              <p className="text-zinc-600">
                Our goal was to create a digital space that mirrors the thoughtful composition and attention to detail present in Jacob's photography, providing visitors with an immersive viewing experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-700">Jacob Hale</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-700">2022</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-700">Web Design, Development</p>
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Responsive Gallery</h3>
              <p className="text-zinc-600">
                A fluid, responsive gallery layout that adapts to any screen size, ensuring photographs are presented beautifully on all devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Image-First Design</h3>
              <p className="text-zinc-600">
                Minimalist interface that places the focus entirely on the photography, with subtle animations and transitions that enhance the viewing experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Portfolio Collections</h3>
              <p className="text-zinc-600">
                Organized collections that allow visitors to explore different themes and projects within the photographer's body of work.
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-800">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">01</div>
              <h3 className="text-xl text-zinc-900 mb-2">Discovery</h3>
              <p className="text-zinc-600">
                We analyzed Jacob's photographic style and portfolio needs to design a website that would complement his artistic vision.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-900 mb-2">Design</h3>
              <p className="text-zinc-600">
                Created wireframes and mockups focusing on a minimalist design that would showcase the photography without distraction.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-900 mb-2">Development</h3>
              <p className="text-zinc-600">
                Built the site with responsive galleries and smooth transitions for optimal viewing experience.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-900 mb-2">Launch</h3>
              <p className="text-zinc-600">
                Optimized all images for web performance and launched the site with comprehensive analytics tracking.
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-800">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-600 mb-4">
                The new website has significantly enhanced Jacob's online presence, providing a professional platform that effectively showcases his photography portfolio to potential clients and art collectors.
              </p>
              <p className="text-zinc-600">
                With improved user experience and optimized image loading, visitor engagement has increased, leading to longer session durations and more inquiries through the contact form.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">35%</div>
                <p className="text-zinc-600 text-sm">Increase in session duration</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">40%</div>
                <p className="text-zinc-600 text-sm">More client inquiries</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">90%</div>
                <p className="text-zinc-600 text-sm">Mobile visitors</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">3s</div>
                <p className="text-zinc-600 text-sm">Average load time</p>
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
          <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
            Let us create a custom website that perfectly showcases your work and elevates your brand.
          </p>
          <Link href="/contact">
            <div className="inline-flex items-center border border-zinc-900 text-zinc-900 font-medium py-2 px-8 rounded-full text-sm relative overflow-hidden group">
              {/* Yellow background that fills from left on hover */}
              <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {/* Text content */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Start
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Next Project */}
        <div className="text-center mt-24">
          <p className="text-sm text-zinc-500 mb-4">Next Project</p>
          <Link href="/beloved" className="text-xl text-zinc-700 hover:text-zinc-900 transition-colors">
            be-loved.app
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 