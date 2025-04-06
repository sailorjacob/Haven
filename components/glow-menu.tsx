"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Vision", href: "/vision" },
  { name: "Media", href: "/media" },
  { name: "Living", href: "/living" },
  { name: "Membership", href: "/membership" },
]

const GlowMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text">
              Haven
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <div className="relative flex bg-gray-900/70 backdrop-blur-md rounded-full p-2 border-2 border-amber-500/20">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-3 rounded-full text-lg font-medium transition-all duration-500 ${
                    activeItem === item.name ? "text-black" : "text-gray-400 hover:text-amber-300"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  {activeItem === item.name && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 -z-10"></span>
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
            <Button className="ml-4 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white rounded-full px-6 py-6 text-lg font-medium">
              Inquire
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-amber-400 hover:text-amber-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b-2 border-amber-900/30 animate-in fade-in slide-in-from-top-5 duration-500">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-4 rounded-xl text-xl font-medium ${
                    activeItem === item.name
                      ? "bg-gradient-to-r from-amber-600/20 to-amber-800/20 text-amber-300"
                      : "text-gray-400 hover:text-amber-300"
                  }`}
                  onClick={() => {
                    setActiveItem(item.name)
                    setIsOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white rounded-xl w-full mt-4 py-6 text-xl font-medium">
                Inquire
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default GlowMenu

