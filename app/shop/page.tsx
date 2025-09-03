"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react"
import { useTheme } from "next-themes"

export default function ShopPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const { theme } = useTheme()

  const products = [
    {
      id: "transrealallah",
      name: "Trans Real Allah",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/transrealallah2.png",
      description: "Premium graphic design on soft cotton blend",
      price: "$45"
    },
    {
      id: "nskk",
      name: "NSKK",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/NSKK.png",
      description: "Bold statement piece with vintage aesthetic",
      price: "$42"
    }
  ]

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-zinc-900 text-zinc-100'
        : 'bg-white text-zinc-900'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-zinc-900/80 border-zinc-700'
          : 'bg-white/80 border-zinc-200'
      }`}>
        <div className="w-full px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full border transition-colors duration-300 ${
                    theme === 'dark' ? 'border-zinc-600' : 'border-zinc-300'
                  }`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowLeft className={`w-4 h-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`} />
                  </div>
                </div>
              </Link>
              <h1 className="text-xl font-light">Shop</h1>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 px-6 pb-12">
        <div className="container max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Limited Edition
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Unique designs crafted with attention to detail
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
                    : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'
                }`}>
                  {/* Product Image */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-light transition-colors duration-300 ${
                        theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                      }`}>
                        {product.name}
                      </h3>
                      <span className={`text-xl font-medium transition-colors duration-300 ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                      }`}>
                        {product.price}
                      </span>
                    </div>

                    <p className={`text-sm mb-6 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className={`flex-1 flex items-center justify-center border font-medium py-3 px-6 rounded-full text-sm transition-all duration-300 ${
                        theme === 'dark'
                          ? 'border-zinc-600 text-zinc-200 hover:bg-zinc-700'
                          : 'border-zinc-300 text-zinc-900 hover:bg-zinc-50'
                      }`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>

                      <button className={`p-3 rounded-full border transition-all duration-300 ${
                        theme === 'dark'
                          ? 'border-zinc-600 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
                          : 'border-zinc-300 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                      }`}>
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-center mt-16 pt-8 border-t transition-colors duration-300 ${
              theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
            }`}
          >
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              All designs are printed on demand. Shipping worldwide.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
