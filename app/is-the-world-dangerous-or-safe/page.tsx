"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Hexagon, ChevronDown, Menu, X, FileText, ArrowLeft, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import ProcessDropdown from "@/components/ProcessDropdown"

const getSeededRandomColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function IsTheWorldDangerousOrSafe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const { theme, setTheme } = useTheme() || { theme: 'light', setTheme: () => {} }
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'
    }`}>
      {/* Header */}
      <header onMouseLeave={() => setProcessOpen(false)} className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-zinc-900/90 border-zinc-700'
          : 'bg-white/90 border-zinc-200'
      }`}>
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className={`w-8 h-8 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`} strokeWidth={1} />
                <span className={`ml-2 text-lg font-light tracking-wider transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`}>Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative flex items-center" onMouseEnter={() => setProcessOpen(true)}>
                  <Link href="/" className={`text-sm font-light transition-colors group ${
                    theme === 'dark'
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}>
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  <motion.span className="ml-1" animate={{ rotate: processOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
                    }`} />
                  </motion.span>
                </div>


              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className={`hidden md:inline text-sm font-light transition-colors ${
                theme === 'dark'
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}>blog</Link>
              <Link href="/contact" className={`hidden md:inline-flex items-center border font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm ${
                theme === 'dark'
                  ? 'border-zinc-600 hover:bg-zinc-800 text-zinc-200'
                  : 'border-zinc-300 hover:bg-zinc-50 text-zinc-900'
              }`}>msg</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-900'
              }`}>{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
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
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className={`md:hidden border-b transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-zinc-900 border-zinc-700'
                : 'bg-white border-zinc-200'
            }`}>
              <div className="w-full px-4 sm:px-6 py-3 space-y-3">

                <Link href="/blog" className={`block text-sm transition-colors group ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`} onClick={() => setMobileMenuOpen(false)}>
                  blog
                </Link>
                <Link href="/contact" className={`block text-sm transition-colors tracking-wider uppercase group ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`} onClick={() => setMobileMenuOpen(false)}>
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${navColors.contact}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900'
            : 'bg-gradient-to-b from-zinc-50 via-white to-zinc-50'
        }`} />
      </div>

      <div className="pt-20" />

      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Back to blog link */}
        <div className="mb-8">
          <Link href="/blog" className={`inline-flex items-center text-sm transition-colors group ${
            theme === 'dark'
              ? 'text-zinc-400 hover:text-zinc-200'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}>
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>
        </div>

        {/* Article header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                theme === 'dark' ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-800'
              }`}>
                <FileText className="w-5 h-5" />
              </div>
              <span className={`text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
              }`}>Aug 2025</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors duration-200 ${
                theme === 'dark'
                  ? 'hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200'
                  : 'hover:bg-zinc-200 text-zinc-600 hover:text-zinc-800'
              }`}
              aria-label="Toggle reading mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          <h1 className={`text-3xl md:text-4xl font-light leading-tight mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            Is the world dangerous or safe?
          </h1>
          <p className={`text-lg leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            We have iPhones, we have video games, art museums, and sports. But we have hundreds of millions if not billions on the threshold of poverty. Does this mean there's a long way to fall for those at the top? Or will those at the bottom be lifted?
          </p>
        </div>

        {/* Article content */}
        <article className="prose prose-zinc max-w-none">
          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            The calculation is up to the individual to figure out and decide. What's possible in our lifetime? Major wars? Political movements? Dis-organization? Technological innovation and abundance? If the world needs organized, there's always a risk of chaos? Some of us probably get caught up and swept by the unfortunate tides of time.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            Is free will even a thing? Or is our life more of a romantic story. The science points to being in a world where captured Ukrainian soldiers are dying of rabies bites, today. We are talking about mars, but can barely fix teeth. The land of the free has the largest incarcerated population and has more guns than people.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            How is it that we live in a world with Spotify, Netflix, and Hamas. How many generations will it take to view a world without billions wasting years of their time on religious prayer? Us builders have to deal with the consequences of that. Alternatively, is music + art the same? Waste of time. IDK.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            In a world of abundance, in a world without war.. these things become the ultimate sport. Rap music, perhaps, replaces war. Replaces philosophical writing in the past. Or maybe, these things transcend the english language, video games, sound, aesthetic. Most signaling by young people is done through social media these days. Silent Snapchats > phone calls.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            What percentage of the world is violent? How do you account for that. Does being in the military count? does owning a gun count? Or is there something inevitable about violence throughout history. I don't think so. I think we are much more like dogs who need to be well trained & taken care of, and at that point we are each other's best friends.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            I honestly believe we can have a world without humans fighting each other (as much) and with far less weapons. In many ways the world is a jungle, we will be dealing with flus, natural disasters, and sunburns. But a few of my premises for the future are based on the optimistic assumption that humanoid robots will actually be helpful.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            Whereas I can't have chatgpt generate me a passive aggressive text to send to a failing friend due to limitation, or generate me true art. I do believe we might have robots powerful enough and worthwhile enough to do farming and construction. If we can manage that without killing each other, and if we can survive to that point as an individual, I think we can have food & shelter access much more easily.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            The question is in the turbulence and timeline before that point, and we have to protect elon, we have to be distractionless. We also have to be fierce proponents of the right thing to do. I don't mean wokeness, I mean, being actually right about things, at the right time.
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            Why aren't there any startups with the mission to eliminate weapons? Palmer Luckey is concerned with Putin specifically, but would rather create an entire industry, make fun of art, and present himself as an answer, than actually taking out Putin. His response to my tweet saying that a fighter drone can only kill upwards of thousands of people, while a movie can save millions of lives was, "good luck stopping putin with your movie bro."
          </p>

          <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'
          }`}>
            Well, why not? we know how powerful movements can be. It seems the latest movements in my lifetime has been embarrassing, but maybe a good one will come take place. There's something to be said about the power of ideas, stories, and collective action in shaping the world we want to live in.
          </p>

          {/* Signature at bottom of article */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
            <Image
              src={theme === 'dark'
                ? "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/signature(2).png"
                : "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/signature(black).png"
              }
              alt="Signature"
              width={140}
              height={70}
              className="opacity-70 hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        </article>
      </div>
    </main>
  )
}
