"use client"

import Link from "next/link"
import { Hexagon, ChevronDown, Menu, X, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"
import ProcessDropdown from "@/components/ProcessDropdown"

const getSeededRandomColor = (seed: string) => {
  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
  return colors[Math.abs(hash) % colors.length]
}

export default function AIWorkNoShame() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const [activeVersion, setActiveVersion] = useState(1)
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header onMouseLeave={() => setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider text-zinc-900">Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative flex items-center" onMouseEnter={() => setProcessOpen(true)}>
                  <Link href="/" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  <motion.span className="ml-1" animate={{ rotate: processOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                  </motion.span>
                </div>

              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="hidden md:inline text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors">blog</Link>
              <Link href="/contact" className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm">msg</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
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
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white border-b border-zinc-200">
              <div className="w-full px-4 sm:px-6 py-3 space-y-3">

                <Link href="/blog" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group" onClick={() => setMobileMenuOpen(false)}>
                  blog
                </Link>
                <Link href="/contact" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group" onClick={() => setMobileMenuOpen(false)}>
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${navColors.contact}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50" />
      </div>

      <div className="pt-20" />

      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Back to blog */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>
        </div>

        {/* Article header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight mb-4">
            All of My Work is AI: Why I Use AI with No Shame
          </h1>
          <div className="flex items-center text-sm text-zinc-500 mb-6">
            <span>January 2025</span>
            <span className="mx-2">•</span>
            <span>AI & Creativity</span>
          </div>
          
          {/* Article images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/article.%201.png"
                alt="AI and creativity concept illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/article%202.png"
                alt="AI writing and human creativity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Version selector */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-zinc-900">Choose Version</h3>
              <span className="text-sm text-zinc-500">3 different perspectives</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setActiveVersion(1)}
                className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeVersion === 1
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300'
                }`}
              >
                Version 1
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${activeVersion === 1 ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => setActiveVersion(2)}
                className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeVersion === 2
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300'
                }`}
              >
                Version 2
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${activeVersion === 2 ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => setActiveVersion(3)}
                className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeVersion === 3
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300'
                }`}
              >
                Version 3
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${activeVersion === 3 ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Article content */}
        <article className="prose prose-zinc max-w-none">
          {activeVersion === 1 && (
            <>
              <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                I use AI for nearly all my writing. About 95% of the words come from AI, the other 5% are my prompts. That 5% might seem small, but it's just the start. The real work is in the thesis, the research, and crafting those prompts.
              </p>

              <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                If you think I'm just letting AI do everything, you're wrong. This isn't about being lazy. It's about working smarter. The value isn't in typing every word by hand. It's in the ideas and direction. This is the future of creating content.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Myth of "Original" Creation</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                People think "real" writing means typing every word by hand. That's wrong. Creators have always used tools. Typewriters, spell-check, now AI. The important part isn't typing. It's the thinking behind it.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                My process starts with the thesis. I spend hours researching the topic, figuring out what I want to say, and who I'm saying it to. I build the foundation first. Only then do I write prompts for AI that tell it exactly what to do.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                For example, writing about climate change: my prompt would be specific about the argument, what data to include, and how to structure it. The AI follows my direction. I'm not typing the words. I'm directing the work.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">Why AI? Efficiency Without Compromise</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                Some people worry AI makes things less authentic or like cheating. I understand the reaction. But AI doesn't create from nothing. It uses existing knowledge and follows my direction. Since I'm giving the instructions, the result is still mine.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                The benefits are practical:
              </p>

              <ul className="list-disc list-inside text-zinc-700 leading-relaxed mb-6 space-y-2 ml-4">
                <li><strong>Speed:</strong> What took a full day now takes an hour. This gives more time for thinking and editing.</li>
                <li><strong>Overcoming Blocks:</strong> AI helps when I'm stuck. It gives me a starting point to work from.</li>
                <li><strong>Better Quality:</strong> AI handles grammar and flow well. I still review and edit everything.</li>
                <li><strong>Accessibility:</strong> Not everyone has perfect writing skills. AI helps more people share their ideas.</li>
              </ul>

              <p className="text-zinc-700 leading-relaxed mb-6">
                I always mention when AI is used (like here). The ideas are mine, even if AI helps with the words. Plagiarism tools confirm this.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                This is just the start. I've made music with AI. I'll make movies with AI. I'll build houses with AI. In the future, I won't trust doctors without AI or precision robots. The possibilities are huge when you see AI as a tool for human work.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Real Work: 95% Thinking, 5% Typing</h2>

              <p className="text-zinc-700 leading-relaxed mb-6">
                The 95/5 split is misleading. The 5% of prompting is just the surface. The real 95% is the thinking work:
              </p>

              <ul className="list-disc list-inside text-zinc-700 leading-relaxed mb-6 space-y-2 ml-4">
                <li><strong>Thesis:</strong> Figuring out what I want to say and why it matters.</li>
                <li><strong>Research:</strong> Gathering facts, reading sources, building the argument.</li>
                <li><strong>Prompts:</strong> Writing clear instructions so AI understands what I want.</li>
              </ul>

              <p className="text-zinc-700 leading-relaxed mb-6">
                AI isn't replacing me. It's helping me work better. Human-AI teams do better than either alone.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">No Shame, Just Progress</h2>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Why no shame? Because there's nothing wrong here. AI is ethical when used transparently. News organizations, marketers, and schools already use it. If they aren't ashamed, neither am I.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                There are challenges. Some jobs change, but new ones appear. AI can be biased, so I check facts carefully. I also write some things without AI to keep my skills sharp.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                AI will make creation more accessible. Students in poor areas could write better essays. Entrepreneurs could create business plans faster. The focus moves from typing to thinking.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Future is Human-AI</h2>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Yes, 95% of these words came from AI based on my prompts. But the idea that AI helps without shame is mine. The belief that thinking matters more than typing is mine. If you're a creator afraid of AI, try it. Write good prompts and see your ideas improve.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                In the end, it's not about who types the words. It's about who has the vision. That will always be human.
              </p>
            </>
          )}

          {activeVersion === 2 && (
            <>
              <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                People either love AI as this amazing breakthrough or hate it for supposedly killing creativity. I'm somewhere in the middle - I use it for almost everything I write. From blog posts to reports, AI handles most of the words. But this isn't cheating - it's about understanding what real work means. The AI isn't replacing my effort; it's making my ideas stronger.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Numbers Game: 95% AI-Generated Words, But That's Not the Real Story</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                Let's get the controversial part out of the way: about 95% of the words in my final output are generated by AI. The remaining 5%? That's the raw prompting I feed into the system - carefully crafted instructions that guide the AI toward the desired result. At first glance, this might sound like I'm outsourcing the heavy lifting, letting a bot do the writing while I sip coffee. But here's the twist: that 5% of prompting represents only a sliver of the actual work involved.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                In reality, 95% of my effort goes into the foundational elements - the thesis, the premise, and the iterative prompting process. Think of it like this: the AI is my typewriter, my canvas, or my camera lens. It produces the visible artifact quickly, but the intellectual labor happens upstream. I spend hours (sometimes days) conceptualizing the core idea: What message am I trying to convey? What's the unique angle? How does this fit into a larger narrative? Then comes the prompting refinement - testing, tweaking, and regenerating until the output aligns perfectly with my intent.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                This isn't passive delegation; it's active direction. The AI doesn't dream up the thesis on its own. It doesn't intuit the emotional undertone or the strategic premise. That's all me. The words it spits out are merely the manifestation of my orchestrated input. If anything, using AI forces me to be more precise and thoughtful, because a vague prompt yields garbage. Garbage in, garbage out - except in this case, the "in" is where the magic (and the sweat) happens.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">Analogies That Click: AI as Paintbrush or Camera</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                Think of it like painting. Anyone can buy a brush and paint, but that doesn't make them an artist. The real work is in the vision - choosing what to paint, mixing the right colors, deciding how to arrange everything on the canvas. The paint itself doesn't create art; the artist does that through all their choices and decisions.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Photography is actually a better comparison. With digital cameras, anyone can point, shoot, and get a decent photo. But nobody calls photographers lazy for using cameras. The real skill is in the preparation - finding the right location, waiting for the best light, deciding how to frame the shot, and editing the final image to tell the story you want.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                AI writing tools operate the same way. I "point and shoot" by hitting generate, but the environment I've built-the conceptual framework, the timed prompts, the emotional intent-is what transforms a generic output into something meaningful. Just as a photographer might take dozens of shots to get one keeper, I iterate through multiple AI generations, reviewing and refining until it resonates. The instant generation is the easy part; the setup is the artistry.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Consider historical precedents. When the typewriter replaced quill and ink, writers didn't suddenly become obsolete-they became more productive. The printing press didn't steal jobs from scribes; it democratized knowledge. AI is the next evolution in this lineage of tools. It handles the rote task of word assembly, freeing me to focus on higher-level creativity. Shame? There's none to be had. This is progress, not plagiarism.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Broader Implications: Redefining Creativity in an AI World</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                Embracing AI without shame isn't just a personal stance; it's a call to rethink how we value creative work. In industries from marketing to journalism, education to entertainment, AI is already reshaping workflows. Those who resist it risk falling behind, clinging to outdated notions of "pure" effort. But purity is a myth-every creator has always relied on tools, from stone chisels to software suites.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                By leaning into AI, I'm not diminishing my role; I'm elevating it. The thesis and premise become the soul of the piece, the prompting a skilled conductor's baton. The final delivery? That's where the human touch shines brightest-ensuring the AI's output feels authentic, impactful, and aligned with my voice.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Of course, this approach demands ethical guardrails. I always disclose AI involvement when relevant, credit sources meticulously, and use it as a collaborator, not a crutch. But shame? Save that for those who waste time on mundane tasks when brilliance awaits.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                In the end, using AI is like wielding any powerful tool: it's about mastery, not mimicry. So, here's to the 95% that's mine-the ideas, the intent, the ingenuity. The words may come from code, but the work? That's all human. No shame, just pride.
              </p>
            </>
          )}

          {activeVersion === 3 && (
            <>
              <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                In a world where artificial intelligence is both hailed as a revolutionary tool and vilified as a creativity thief, I stand unapologetically on the side of embracing it. Yes, you read that right: all of my work is powered by AI. But before you dismiss me as lazy or inauthentic, let me pull back the curtain on what that really means. It's not about cheating the system-it's about redefining what "work" truly entails in the creative process. I use AI with no shame because it's not the crutch critics make it out to be; it's the brush, the camera, the amplifier that turns my ideas into something tangible and impactful.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Myth of the Blank Page</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                Let's start with the numbers, because they cut through the noise. In any piece I create-be it an article, a report, or even a social media post-about 95% of the actual words you see are generated by AI. The remaining 5%? That's the raw input: my prompts, tweaks, and refinements. But here's the twist that flips the script: that 5% of "prompting" represents only a tiny fraction of the overall effort. The real heavy lifting-95% of the work-happens in the conceptual trenches: crafting the thesis, building the premise, and engineering the prompts that guide the AI to produce something meaningful.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Think about it. Anyone can type a vague query into an AI tool and get a generic response. But to get something sharp, insightful, and aligned with a specific vision? That requires foresight, strategy, and iteration. I spend hours (sometimes days) honing the core idea: What's the central argument? What tone should it strike-witty, persuasive, introspective? What examples will resonate? This is the intellectual scaffolding that holds everything up. The AI doesn't dream up the thesis; I do. It doesn't wrestle with the premise's nuances; that's my domain. And the prompting? It's an art form in itself-precise, layered instructions that steer the AI away from fluff and toward substance.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Without this foundational work, the output would be soulless drivel. AI is a mirror reflecting my intent; if the intent is half-baked, so is the result. So, when I say 95% of the words come from AI, I'm not confessing to shortcuts-I'm highlighting how I've outsourced the rote task of word assembly to focus on what humans do best: ideating, synthesizing, and curating.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">The Analogy: From Brushstrokes to Shutter Clicks</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                To make this clearer, let's draw parallels to traditional creative tools. Imagine painting a masterpiece. You don't grind your own pigments or weave your canvas from scratch anymore-that's what modern tools handle. Instead, you select the paint, mix the colors, and apply them with intention. AI is like that pre-mixed palette: it provides the medium, but the vision, composition, and emotional depth are all yours.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                But a more accurate comparison? Photography. In the digital age, taking a photo is instantaneous: point, shoot, and voilà-an image appears. Yet, no serious photographer would claim the camera does 95% of the work. The real artistry lies in everything around that click: scouting the location, timing the light just right (golden hour, anyone?), conceptualizing the shot to evoke a specific emotion, and then reviewing, editing, and delivering the final product. You create the environment-physically and conceptually. You anticipate the moment. You infuse it with intent. The camera captures it, but without your orchestration, it's just a snapshot, not art.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                AI writing tools operate the same way. I "point and shoot" with a prompt, generating text in seconds. But the 95% of the work? That's me setting the stage: researching the topic deeply, defining the emotional arc (inspirational? Provocative?), and iterating on the output until it sings. If the first generation misses the mark, I refine the prompt-adjust the angle, so to speak-and shoot again. The final delivery? That's polishing it for clarity, flow, and impact, ensuring it lands with the audience as intended.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Critics might argue that AI diminishes originality, but consider this: photographers didn't stop creating when film went digital. Painters didn't abandon their craft with the advent of acrylics. Tools evolve, and so do we. Using AI isn't laziness; it's efficiency. It frees me from the drudgery of drafting filler sentences so I can pour energy into innovation and insight.
              </p>

              <h2 className="text-2xl font-medium text-zinc-900 mt-12 mb-6">Embracing the Future Without Apology</h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                So, why no shame? Because shame implies wrongdoing, and there's none here. AI isn't stealing jobs or souls-it's democratizing creation. It levels the playing field for those of us who aren't natural wordsmiths but have killer ideas. It accelerates iteration, allowing me to test theses and premises faster than ever. And in a fast-paced world, where content demands are relentless, it's a lifeline.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Of course, transparency matters. I disclose my process because authenticity isn't about how the words are formed-it's about the integrity of the ideas behind them. If my thesis resonates, if my premise challenges you, if the emotion hits home, does it matter that AI typed the sentences? I don't think so.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                In the end, all of my work is AI-assisted, and I'm proud of it. It's not about the 95% of words generated-it's about the 95% of effort in crafting something worthwhile. Like the photographer chasing the perfect shot, I'm here for the vision, the timing, the concept, and the delivery. And if AI helps me capture that faster, why on earth would I feel ashamed? Let's normalize this: AI is a tool, not a taboo. What's your take-ready to point, shoot, and create?
              </p>
            </>
          )}
        </article>

        {/* Article footer */}
        <div className="mt-16 pt-8 border-t border-zinc-200">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to blog
            </Link>
            <div className="text-sm text-zinc-500">
              <span>Written with AI assistance</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
