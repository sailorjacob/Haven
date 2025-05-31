"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  
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
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/20 via-white/5 to-white opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link href="/" className="text-zinc-600 mb-4 inline-block text-sm hover:text-zinc-800 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-zinc-900 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700">
              Message Us
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-700 mb-6 lowercase">
            Let's discuss your next project
          </p>
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
              <h2 className="text-2xl text-zinc-900 mb-4">Thank you for reaching out!</h2>
              <p className="text-zinc-700 mb-8">We'll get back to you as soon as possible.</p>
              <Link href="/" className="inline-flex items-center justify-center border border-zinc-200 text-zinc-700 py-2 px-8 text-sm tracking-widest transition-all duration-300 rounded-full hover:border-zinc-300 hover:text-zinc-900">
                Return to Studio
              </Link>
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/xyzwejry" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/50 p-8 border border-zinc-100 shadow-sm"
            >
              <div>
                <label htmlFor="name" className="block text-zinc-800 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white border border-zinc-200 p-3 text-zinc-800 focus:outline-none focus:border-zinc-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-zinc-800 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white border border-zinc-200 p-3 text-zinc-800 focus:outline-none focus:border-zinc-300"
                />
              </div>
                
              <div>
                <label htmlFor="projectType" className="block text-zinc-800 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full bg-white border border-zinc-200 p-3 text-zinc-800 focus:outline-none focus:border-zinc-300 appearance-none cursor-pointer rounded-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="website">Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="design">Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
                
              <div>
                <label htmlFor="budget" className="block text-zinc-800 mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full bg-white border border-zinc-200 p-3 text-zinc-800 focus:outline-none focus:border-zinc-300 appearance-none cursor-pointer rounded-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-zinc-800 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-white border border-zinc-200 p-3 text-zinc-800 focus:outline-none focus:border-zinc-300"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center border border-zinc-200 text-zinc-700 py-3 px-10 text-sm tracking-widest transition-all duration-300 rounded-full hover:border-zinc-300 hover:text-zinc-900 w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>
        
        <div className="text-center mt-8">
          <a href="mailto:info@haven.engineer" className="text-xs text-zinc-600 hover:text-zinc-800 transition-colors">
            info@haven.engineer
          </a>
        </div>
      </div>
    </main>
  )
} 