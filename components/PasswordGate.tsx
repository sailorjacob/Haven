"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Lock } from "lucide-react"

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [passwordInput, setPasswordInput] = useState("")
  const [passwordError, setPasswordError] = useState(false)

  // Skip password protection for homepage
  const isHomepage = pathname === "/"

  // Check if user is already authenticated
  useEffect(() => {
    if (isHomepage) {
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }
    
    const authenticated = sessionStorage.getItem('site_authenticated')
    if (authenticated === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [isHomepage])

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordInput === 'beehive1') {
      setIsAuthenticated(true)
      sessionStorage.setItem('site_authenticated', 'true')
      setPasswordError(false)
    } else {
      setPasswordError(true)
      setPasswordInput("")
    }
  }

  // Prevent body scroll when password modal is showing
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isAuthenticated, isLoading])

  // Show nothing while checking auth status
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-zinc-950 z-[100]" />
    )
  }

  return (
    <>
      {/* Password Protection Modal */}
      <AnimatePresence>
        {!isAuthenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-full bg-zinc-800 border border-zinc-700">
                    <Lock className="w-6 h-6 text-zinc-400" />
                  </div>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value)
                      setPasswordError(false)
                    }}
                    placeholder="Password"
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors ${
                      passwordError ? 'border-red-500/50' : 'border-zinc-700'
                    }`}
                    autoFocus
                  />
                  
                  {passwordError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm"
                    >
                      Incorrect password
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-lg text-zinc-200 font-medium transition-all duration-200"
                  >
                    Enter
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children only when authenticated */}
      {isAuthenticated && children}
    </>
  )
}

