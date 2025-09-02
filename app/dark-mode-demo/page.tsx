"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProcessDropdown from "../components/ProcessDropdown"

export default function DarkModeDemo() {
  const [processOpen, setProcessOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Dark themed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-light text-zinc-100">HAVEN</span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Process dropdown trigger */}
              <button
                onClick={() => setProcessOpen(!processOpen)}
                className={`text-sm font-light transition-colors tracking-wider uppercase ${
                  processOpen 
                    ? 'text-zinc-100' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                process
              </button>
              
              {/* Blog link */}
              <a
                href="#"
                className="hidden md:inline text-sm font-light text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                blog
              </a>
              
              {/* Contact button */}
              <button className="hidden md:inline-flex items-center border border-zinc-600 hover:border-zinc-500 hover:bg-zinc-800/50 text-zinc-200 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm">
                msg
              </button>
            </div>
          </nav>

          {/* Process dropdown */}
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Demo content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-light text-zinc-100 mb-8">
            Dark Mode Process Dropdown Demo
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            This demonstrates the homepage process dropdown menu styled with a dark theme. 
            Click the "process" button in the header to see the dropdown in action.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <h3 className="text-xl font-light text-zinc-100 mb-4">Key Changes</h3>
              <ul className="text-zinc-400 space-y-2">
                <li>• Background: white → zinc-900</li>
                <li>• Border: zinc-200 → zinc-700</li>
                <li>• Text: zinc-400/700 → zinc-300/100</li>
                <li>• Graphics: zinc-500/700 → zinc-400/200</li>
                <li>• Shadow: shadow-lg → shadow-2xl</li>
                <li>• Header: Integrated dark theme</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <h3 className="text-xl font-light text-zinc-100 mb-4">Header Integration</h3>
              <ul className="text-zinc-400 space-y-2">
                <li>• Seamless dark background</li>
                <li>• Active state indicators</li>
                <li>• Consistent color palette</li>
                <li>• Smooth transitions</li>
                <li>• No visual breaks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
