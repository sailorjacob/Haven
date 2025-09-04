"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Footer } from "@/components/footer"
import { Hexagon, Menu, X } from "lucide-react"
import ProcessDropdown from "@/components/ProcessDropdown"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const { theme } = useTheme()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xyzwejry", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        alert("Submission failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting your form. Please try again.");
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-zinc-900 text-zinc-100'
        : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Header */}
      <header onMouseLeave={() => setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 bg-zinc-900/95 border-zinc-700">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 transition-colors duration-300 text-zinc-100" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider transition-colors duration-300 text-zinc-100">Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-sm font-light transition-colors group text-zinc-400 hover:text-zinc-200">
                  <span className="group-hover:hidden">process</span>
                  <span className="hidden group-hover:inline text-zinc-400">process</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="hidden md:inline text-sm font-light transition-colors text-zinc-400 hover:text-zinc-200">blog</Link>
              <Link href="/contact" className="hidden md:inline-flex items-center border font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm border-zinc-600 hover:bg-zinc-800 text-zinc-200">msg</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 transition-colors duration-300 text-zinc-400">
                {mobileMenuOpen ? <X className="w-5 h-5 transition-colors duration-300 text-zinc-400" /> : <Menu className="w-5 h-5 transition-colors duration-300 text-zinc-400" />}
              </button>
            </div>
          </nav>
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden border-b transition-colors duration-300 bg-zinc-900 border-zinc-700">
              <div className="w-full px-4 sm:px-6 py-4 space-y-4">
                <Link href={`/blog`} className="block text-right text-base font-light transition-all duration-300 delay-100 group hover:translate-x-1 text-zinc-400 hover:text-zinc-200" onClick={() => setMobileMenuOpen(false)}>
                  blog
                </Link>
                <Link href="/" className="block text-right text-base font-light transition-all duration-300 delay-100 group hover:translate-x-1 text-zinc-400 hover:text-zinc-200" onClick={() => setMobileMenuOpen(false)}>
                  home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 opacity-80'
            : 'bg-gradient-to-b from-white via-zinc-50 to-white opacity-80'
        }`}></div>
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-900/10 to-zinc-900 opacity-100'
            : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/20 via-white/5 to-white opacity-100'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link href="/" className={`mb-4 inline-block text-sm transition-colors ${
            theme === 'dark'
              ? 'text-zinc-400 hover:text-zinc-200'
              : 'text-zinc-600 hover:text-zinc-800'
          }`}>
            ← Back
          </Link>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-12">
              <h2 className={`text-2xl mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
              }`}>Thank you for reaching out!</h2>
              <p className={`mb-8 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}>We'll get back to you as soon as possible.</p>
              <Link href="/" className={`inline-flex items-center justify-center border py-2 px-8 text-sm tracking-widest transition-all duration-300 rounded-full ${
                theme === 'dark'
                  ? 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100'
                  : 'border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900'
              }`}>
                Return to Studio
              </Link>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xyzwejry"
              method="POST"
              onSubmit={handleSubmit}
              className={`space-y-6 p-8 border shadow-sm transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-zinc-800/50 border-zinc-700'
                  : 'bg-white/50 border-zinc-100'
              }`}
            >
              <div>
                <label htmlFor="name" className={`block mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full border p-3 transition-colors duration-300 focus:outline-none ${
                    theme === 'dark'
                      ? 'bg-zinc-800 border-zinc-600 text-zinc-100 focus:border-zinc-500'
                      : 'bg-white border-zinc-200 text-zinc-800 focus:border-zinc-300'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full border p-3 transition-colors duration-300 focus:outline-none ${
                    theme === 'dark'
                      ? 'bg-zinc-800 border-zinc-600 text-zinc-100 focus:border-zinc-500'
                      : 'bg-white border-zinc-200 text-zinc-800 focus:border-zinc-300'
                  }`}
                />
              </div>





              <div>
                <label htmlFor="message" className={`block mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`w-full border p-3 transition-colors duration-300 focus:outline-none ${
                    theme === 'dark'
                      ? 'bg-zinc-800 border-zinc-600 text-zinc-100 focus:border-zinc-500'
                      : 'bg-white border-zinc-200 text-zinc-800 focus:border-zinc-300'
                  }`}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className={`inline-flex items-center justify-center border py-3 px-10 text-sm tracking-widest transition-all duration-300 rounded-full w-full md:w-auto ${
                    theme === 'dark'
                      ? 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100'
                      : 'border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900'
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>
        
        <div className="text-center mt-8">
          <a href="mailto:info@haven.engineer" className={`text-xs transition-colors ${
            theme === 'dark'
              ? 'text-zinc-400 hover:text-zinc-200'
              : 'text-zinc-600 hover:text-zinc-800'
          }`}>
            info@haven.engineer
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
} 