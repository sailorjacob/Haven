"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // show only client side
    if (typeof window !== "undefined") {
      const accepted = localStorage.getItem("cookie-accepted")
      if (!accepted) setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-accepted", "yes")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[1000] bg-black/40 flex items-center justify-center p-4">
      <div className="bg-zinc-200 text-zinc-900 max-w-md w-full rounded-md p-6 text-center shadow-lg">
        <p className="mb-4 text-sm leading-relaxed">
          This website uses cookies in order to provide its services. By using this website you accept the usage of cookies.{' '}
          <Link href="/cookies" className="underline">Learn more...</Link>
        </p>
        <button
          onClick={handleAccept}
          className="w-full border-2 border-zinc-900 py-2 rounded-sm font-medium hover:bg-zinc-100 transition-colors"
        >
          Ok
        </button>
      </div>
    </div>
  )
} 