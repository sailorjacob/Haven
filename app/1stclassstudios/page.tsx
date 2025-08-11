"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function FirstClassStudiosPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-800">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-zinc-50 opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-12">
          <Link href="/" className="text-zinc-500 hover:text-zinc-800 transition-colors inline-flex items-center">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-zinc-900 tracking-tight">1stclassstudios.com</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-600 mb-6">
            A premium recording and audio engineering studio just outside New York City with three dedicated spaces for artists. We set up booking, Stripe integration, and automated notifications for studio management and clients.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Music</span>
            <span className="text-zinc-600">•</span>
            <span>Studios</span>
            <span className="text-zinc-600">•</span>
            <a href="https://1stclassstudios.com" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900 transition-colors">Visit Website</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-24">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/1stclass//1stclassstudios-min.png" alt="1st Class Studios" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-24">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-800">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-600 mb-4">
                We built a streamlined booking experience across three studio rooms, with clear availability, pricing, and automated confirmations. Stripe powers payments and deposits, while email notifications keep both staff and clients informed.
              </p>
              <p className="text-zinc-600">
                The site emphasizes speed, clarity, and a premium aesthetic appropriate for serious artists and engineers near NYC.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-4 text-zinc-900">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-700">1st Class Studios</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-700">2025</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-700">Booking, Stripe, Automations</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-700">Next.js, Stripe, Email APIs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-24">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-zinc-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-2 text-zinc-900">Multi-room Booking</h3>
              <p className="text-zinc-600">Three rooms with independent schedules and pricing, surfaced clearly for artists.</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-2 text-zinc-900">Stripe Integration</h3>
              <p className="text-zinc-600">Deposits and full payments handled securely with receipts and refunds.</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-zinc-200">
              <h3 className="text-lg mb-2 text-zinc-900">Notification Automation</h3>
              <p className="text-zinc-600">Automatic emails for bookings, cancellations, and reminders keep everyone in sync.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16 pt-16 border-t border-zinc-200">
          <p className="text-zinc-600 mb-8 max-w-xl mx-auto">Need a booking experience that feels premium and effortless?</p>
          <Link href="/contact">
            <div className="inline-flex items-center border border-zinc-900 text-zinc-900 font-medium py-2 px-8 rounded-full text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Start</span>
            </div>
          </Link>
        </motion.div>

        <div className="text-center mt-24">
          <p className="text-sm text-zinc-500 mb-4">Next Project</p>
          <Link href="/salomatic" className="text-xl text-zinc-700 hover:text-zinc-900 transition-colors">
            Salomatic Pitch Deck
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

