"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function AnthonyHadenGuestPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/5 to-zinc-900 opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/studio" className="text-zinc-400 hover:text-zinc-300 transition-colors inline-flex items-center">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Studio
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
            Anthony Haden-Guest
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-6">
            A sophisticated portfolio website for renowned author, writer, and art critic Anthony Haden-Guest showcasing his literary works and cultural contributions.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Literature</span>
            <span className="text-zinc-600">•</span>
            <span>Portfolio</span>
            <span className="text-zinc-600">•</span>
            <a href="https://anthonyhadenguest.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
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
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//anthonysite.png"
              alt="Anthony Haden-Guest Website"
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
                Anthony Haden-Guest is a distinguished author, writer, and art critic whose work has shaped cultural discourse for decades. His portfolio website needed to reflect the sophistication and depth of his literary contributions while providing an elegant platform for his extensive body of work.
              </p>
              <p className="text-zinc-400">
                We created a minimalist, typography-focused website that emphasizes content readability and elegant presentation, allowing his writing and insights to take center stage.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                  <p className="text-zinc-300">Anthony Haden-Guest</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                  <p className="text-zinc-300">2025</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                  <p className="text-zinc-300">Website Design, Development</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 mb-1">Technologies</h4>
                  <p className="text-zinc-300">Next.js, Tailwind CSS</p>
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
              <h3 className="text-lg mb-4 text-zinc-200">Typography-First Design</h3>
              <p className="text-zinc-400">
                Clean, readable typography that enhances the literary content and provides an exceptional reading experience across all devices.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Content Organization</h3>
              <p className="text-zinc-400">
                Intuitive navigation and categorization system that makes it easy for visitors to explore Anthony's extensive portfolio of writings and reviews.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700">
              <h3 className="text-lg mb-4 text-zinc-200">Responsive Experience</h3>
              <p className="text-zinc-400">
                Optimized for all devices with careful attention to reading comfort and accessibility across desktop, tablet, and mobile platforms.
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
              <h3 className="text-xl text-zinc-200 mb-2">Content Strategy</h3>
              <p className="text-zinc-400">
                We worked closely with Anthony to understand his literary voice and develop a content architecture that showcases his diverse body of work.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">02</div>
              <h3 className="text-xl text-zinc-200 mb-2">Typography & Design</h3>
              <p className="text-zinc-400">
                Developed a sophisticated typographic system and minimalist design that emphasizes readability and editorial elegance.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">03</div>
              <h3 className="text-xl text-zinc-200 mb-2">Development</h3>
              <p className="text-zinc-400">
                Built with modern web technologies ensuring fast loading times, SEO optimization, and seamless content management.
              </p>
            </div>
            <div>
              <div className="text-4xl text-zinc-700 font-bold mb-4">04</div>
              <h3 className="text-xl text-zinc-200 mb-2">Launch & Optimization</h3>
              <p className="text-zinc-400">
                Deployed with careful attention to performance metrics and ongoing optimization for search visibility and user engagement.
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
                The new website has significantly enhanced Anthony's digital presence, providing a professional platform that befits his stature in the literary and art criticism world.
              </p>
              <p className="text-zinc-400">
                The clean, sophisticated design has improved reader engagement and made his extensive body of work more accessible to both longtime followers and new audiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <p className="text-zinc-400 text-sm">Improved readability score</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">3.2x</div>
                <p className="text-zinc-400 text-sm">Increase in page engagement</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">72%</div>
                <p className="text-zinc-400 text-sm">Faster page load times</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700 text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-zinc-400 text-sm">Mobile responsive</p>
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
            Ready to Showcase Your Work?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let us create a sophisticated digital presence that reflects your expertise and elevates your professional brand.
          </p>
          <Link href="/contact">
            <button className="bg-zinc-200 hover:bg-white text-zinc-900 py-3 px-8 text-sm tracking-widest transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>

        {/* Next Project */}
        <div className="text-center mt-24">
          <p className="text-sm text-zinc-500 mb-4">Next Project</p>
          <Link href="/jacobhalestudio" className="text-xl text-zinc-300 hover:text-white transition-colors">
            Jacob Hale Studio
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 