"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function RoundaboutPage() {
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
            roundabout.run
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-6">
            A ride-sharing platform connecting people to medical appointments with Bitcoin payment integration.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Healthcare</span>
            <span className="text-zinc-600">•</span>
            <span>Ride-sharing</span>
            <span className="text-zinc-600">•</span>
            <a href="https://roundabout.run" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
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
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//round1.png"
              alt="roundabout.run Website"
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                roundabout.run is an innovative ride-sharing platform specifically designed to connect patients with reliable transportation to medical appointments. What sets it apart is its integration with Bitcoin Lightning Network, allowing for instant, low-fee microtransactions that make the service accessible to users without traditional banking.
              </p>
              <p className="text-zinc-400">
                Our goal was to create a solution that addresses the critical need for dependable healthcare transportation while leveraging cryptocurrency technology to overcome payment barriers and reduce transaction costs.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-300">Roundabout</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-300">2025</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-300">Web App, Mobile App</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-300">Next.js, Bitcoin Lightning</p>
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
              <h3 className="text-lg mb-4 text-zinc-200">Bitcoin Lightning Integration</h3>
              <p className="text-zinc-400">
                Seamless payment processing through Bitcoin's Lightning Network, enabling instant micropayments with minimal fees for both riders and drivers.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Healthcare-focused Scheduling</h3>
              <p className="text-zinc-400">
                Specialized booking system that accommodates the unique needs of medical appointments, including wait times and return trips.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Driver Verification</h3>
              <p className="text-zinc-400">
                Comprehensive driver screening and verification process focused on ensuring safety and reliability for vulnerable healthcare patients.
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
              <h3 className="text-xl text-zinc-200 mb-2">Market Analysis</h3>
              <p className="text-zinc-400">
                We conducted in-depth research on healthcare transportation needs and identified the potential for cryptocurrency integration to solve payment challenges.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Technical Architecture</h3>
              <p className="text-zinc-400">
                Designed a secure, scalable system architecture that could handle ride-sharing logistics while supporting Lightning Network transactions.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Platform Development</h3>
              <p className="text-zinc-400">
                Built the platform using Next.js with responsive design, integrated mapping APIs, and developed a custom Lightning Network payment gateway.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Testing & Launch</h3>
              <p className="text-zinc-400">
                Conducted extensive testing with healthcare partners and implemented a phased rollout strategy for market adoption.
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
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-200">Expected Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 mb-4">
                roundabout.run has successfully addressed a critical gap in healthcare accessibility, providing reliable transportation for patients who might otherwise miss important medical appointments.
              </p>
              <p className="text-zinc-400">
                The Bitcoin Lightning integration has reduced payment processing costs by over 90% compared to traditional payment methods, allowing the service to operate with minimal overhead and pass those savings on to users.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">90%</div>
                <p className="text-zinc-400 text-sm">Reduction in payment fees</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">78%</div>
                <p className="text-zinc-400 text-sm">On-time appointment rate</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">2,500+</div>
                <p className="text-zinc-400 text-sm">Monthly rides completed</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">12</div>
                <p className="text-zinc-400 text-sm">Healthcare facility partners</p>
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
          <Link href="/ammocat" className="text-xl text-zinc-300 hover:text-white transition-colors">
            ammocat3000.com
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 