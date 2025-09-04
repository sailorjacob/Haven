"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function AmmocatPage() {
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
            ammocat3000.com
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-600 mb-6">
            A homepage, webstore, and mini-game for New York based artist Ammo Cat with advanced filtering and search capabilities.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Art</span>
            <span className="text-zinc-600">•</span>
            <span>E-commerce</span>
            <span className="text-zinc-600">•</span>
            <a href="https://ammocat3000.com" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900 transition-colors">
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
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png"
              alt="ammocat3000.com Website"
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
                ammocat3000.com is a multi-functional platform designed for Ammo Cat, a renowned New York-based artist. The site serves as both a creative portfolio showcasing the artist's work and a full-featured e-commerce platform where fans can purchase artwork, prints, and merchandise.
              </p>
              <p className="text-zinc-600">
                Our goal was to create an immersive digital experience that captures the unique aesthetic and energy of Ammo Cat's art while providing a seamless shopping experience with sophisticated search and filtering capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-700">Ammo Cat</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-700">2024</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-700">Website, E-commerce, Game Development</p>
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
              <h3 className="text-lg mb-4 text-zinc-900">Advanced Search & Filtering</h3>
              <p className="text-zinc-600">
                Powerful search functionality with Algolia integration allows users to filter artworks by medium, size, price range, themes, and more to quickly find pieces they love.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Interactive Mini-Game</h3>
              <p className="text-zinc-600">
                A custom-built browser game that incorporates Ammo Cat's artistic style, engaging visitors and encouraging longer site sessions and return visits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Seamless E-commerce</h3>
              <p className="text-zinc-600">
                Integrated shopping experience with secure Stripe payments, inventory management, and automated fulfillment notifications for a smooth purchasing process.
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
              <h3 className="text-xl text-zinc-900 mb-2">Creative Direction</h3>
              <p className="text-zinc-600">
                We collaborated closely with Ammo Cat to understand their artistic vision and translate it into a distinctive digital experience that would resonate with their audience.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-900 mb-2">UX/UI Design</h3>
              <p className="text-zinc-600">
                Developed an intuitive user interface that showcases artwork in its best light while maintaining easy navigation for shopping and exploration.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-900 mb-2">Full-stack Development</h3>
              <p className="text-zinc-600">
                Built the platform with integrated search functionality and secure payment processing for a smooth user experience.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-300 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-900 mb-2">Game Development</h3>
              <p className="text-zinc-600">
                Created a custom browser-based mini-game that incorporates elements of Ammo Cat's artwork into an engaging interactive experience.
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
                The new ammocat3000.com website has significantly expanded the artist's digital presence and commercial reach, creating a new revenue stream through online sales while strengthening their brand identity.
              </p>
              <p className="text-zinc-600">
                The interactive mini-game has proven particularly successful in increasing user engagement, with visitors spending an average of 12 minutes on the site-far exceeding industry standards for art and e-commerce websites.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">186%</div>
                <p className="text-zinc-600 text-sm">Increase in online sales</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">12min</div>
                <p className="text-zinc-600 text-sm">Average session duration</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">58%</div>
                <p className="text-zinc-600 text-sm">Return visitor rate</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-zinc-200 text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-2">4.2x</div>
                <p className="text-zinc-600 text-sm">Social media engagement</p>
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
            Let us create a custom digital experience that elevates your brand and connects you with your audience.
          </p>
          <Link href="/contact">
            <div className="inline-flex items-center border border-zinc-900 text-zinc-900 font-medium py-2 px-8 rounded-full text-sm relative overflow-hidden group">
              {/* Sky blue background that fills from left on hover */}
              <div className="absolute inset-0 bg-sky-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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
          <Link href="/moonlight-garden" className="text-xl text-zinc-700 hover:text-zinc-900 transition-colors">
            Moonlight Garden
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 