"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Hexagon, ArrowRight } from "lucide-react"

export default function WorkPage() {
  const workExamples = [
    {
      id: "beloved-logo",
      title: "BeLoved Transportation Logo",
      description: "Custom logo design for NEMT provider featuring clean, modern typography and professional branding.",
      category: "Logo Design",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//beloved%20logo.png",
      link: "/beloved",
      type: "image"
    },
    {
      id: "ammocat-game", 
      title: "Ammocat Mini Game",
      description: "Interactive browser-based game built for New York artist Ammo Cat featuring custom gameplay mechanics and art integration.",
      category: "Game Development",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//ammo3.png",
      link: "https://ammocat.com/game",
      type: "interactive"
    },
    {
      id: "anthony-ai-generator",
      title: "Anthony Haden-Guest AI Art Generator", 
      description: "Custom AI image generator trained on Anthony Haden-Guest's cartoon art style, enabling creation of new artwork in his distinctive aesthetic.",
      category: "AI Development",
      images: [
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_1_0001.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0027.png", 
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_3_0004.png",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs//My%20First%20Project_1_0019%20(1).png"
      ],
      link: "/anthonyhadenguest",
      type: "gallery"
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Clean gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
              <span className="ml-2 text-lg font-light tracking-wider">Haven Studio</span>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-lg border border-zinc-300 transition-all duration-300 text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative z-10 pt-20 px-6">
        <div className="container max-w-6xl mx-auto">
          
          {/* Back button and header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light text-zinc-900 mb-4 tracking-tight">
                Featured Work
              </h1>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                A selection of our custom development projects showcasing logos, interactive experiences, and AI-powered tools.
              </p>
            </div>
          </motion.div>

          {/* Work Examples */}
          <div className="space-y-24 pb-20">
            {workExamples.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium mb-4">
                    {work.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-light text-zinc-900 mb-4">
                    {work.title}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {work.description}
                  </p>
                  
                  {work.type === "interactive" ? (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
                    >
                      <span className="mr-2">Play Game</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={work.link}
                      className="inline-flex items-center text-zinc-900 hover:text-zinc-600 transition-colors font-medium group"
                    >
                      View Project
                      <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {work.type === "gallery" ? (
                    <div className="grid grid-cols-2 gap-4">
                      {work.images?.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors"
                        >
                          <Image
                            src={image}
                            alt={`${work.title} example ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors bg-white p-8 flex items-center justify-center"
                    >
                      <Image
                        src={work.image || work.images?.[0] || ""}
                        alt={work.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-16 border-t border-zinc-200"
          >
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
              Ready to Create Something Unique?
            </h2>
            <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
              Let's build custom solutions that showcase your brand and engage your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium py-2 px-6 rounded-full transition-all duration-300 group"
              >
                <span className="mr-2">Start Your Project</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-900 text-sm font-medium py-2 px-6 rounded-full border border-zinc-300 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 