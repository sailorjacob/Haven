"use client"

import { Inter } from "next/font/google"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export default function Contact() {
  return (
    <main className={`${inter.className} bg-black w-full contact-page`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-neutral-300 hover:text-[#3B82F6] transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Haven
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
                fill="#3B82F6"
              />
            </svg>
          </div>

          {/* Content Section */}
          <div>
            <section className="bg-neutral-900 rounded-2xl p-8 md:p-12 shadow-lg mb-4">
              <article className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl font-semibold text-neutral-100 mb-6 text-center">Haven: The Network State of Creative Excellence</h1>
                
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Haven is a self-sustaining network studio of dedicated creative artists reshaping global media and cultural production. It combines AI-driven filmmaking, music, and digital art with premium, hotel and residence style living, offering a sophisticated alternative to traditional institutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mt-8">
                  <div className="bg-neutral-800 p-6 rounded-xl border-l-4 border-[#3B82F6]">
                    <h3 className="text-xl font-semibold text-[#3B82F6] mb-4">Digital Experience</h3>
                    <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                      <li>AI-generated films with cutting-edge visual quality</li>
                      <li>AI-generated music across multiple genres</li>
                      <li>Proprietary streaming platform integrating all digital content</li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-800 p-6 rounded-xl border-l-4 border-[#3B82F6]">
                    <h3 className="text-xl font-semibold text-[#3B82F6] mb-4">Physical Experience</h3>
                    <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                      <li>Curated art galleries featuring digital and traditional works</li>
                      <li>State-of-the-art screening theaters for immersive viewing</li>
                      <li>Quality accommodations with residence-style amenities</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-neutral-300 text-lg leading-relaxed mb-12">
                  Below is an in-depth look at Haven's structure, economic impact, and revenue drivers, using identification and mutual employment principles as the foundation.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-100 mt-12 mb-6">1. Hierarchy & Organizational Structure</h2>

                <h3 className="text-xl font-medium text-neutral-200 mb-4">A. Leadership & Governance</h3>
                <p className="text-neutral-300 mb-4"><strong>Visionary Executive Council:</strong></p>
                <ul className="list-disc pl-6 text-neutral-300 mb-8">
                  <li className="mb-2">A core council of thought leaders—comparable to "Knights of the Round Table"—sets the strategic direction.</li>
                  <li className="mb-2">This leadership is balanced by input from a network of professionals who mutually employ their expertise in various disciplines.</li>
                </ul>

                <h3 className="text-xl font-medium text-neutral-200 mb-4">B. Network Structure</h3>
                <ul className="list-disc pl-6 text-neutral-300 mb-8">
                  <li className="mb-2"><strong>Core Creative Hive:</strong> A concentrated group of dedicated creators and professionals who drive Haven's artistic and technological innovations.</li>
                  <li className="mb-2"><strong>Extended Network:</strong> A broader circle of allied professionals and service providers who collaborate through mutual employment agreements.</li>
                  <li className="mb-2"><strong>Strategic Collaborations:</strong> Partnerships with specialized network states in security, biomedical, and infrastructure fields.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-100 mt-12 mb-6">2. Economic Force & Market Impact</h2>

                <h3 className="text-xl font-medium text-neutral-200 mb-4">A. Digital Media Revenue Potential</h3>
                <p className="text-neutral-300 mb-4"><strong>Hollywood vs. Haven:</strong></p>
                <ul className="list-disc pl-6 text-neutral-300 mb-8">
                  <li className="mb-2">A blockbuster Hollywood movie can generate over $1 billion in the Chinese market alone.</li>
                  <li className="mb-2">Haven's collective of creators, even capturing a modest share of that market, could potentially achieve multi-billion-dollar revenues through high-caliber, AI-generated content.</li>
                </ul>

                <h3 className="text-xl font-medium text-neutral-200 mb-4">B. Economic Impact of the Creative Collective</h3>
                <div className="bg-neutral-700 p-6 rounded-xl mb-8">
                  <p className="font-medium text-neutral-100 mb-4">Core Collective: 100,000 Identified Professionals</p>
                  <p className="text-neutral-300 mb-4">With each professional contributing an earning power of approximately $100,000 per year, the collective economic impact is:</p>
                  <p className="text-neutral-200 font-semibold mb-6">100,000 × $100,000 = $10 billion in annual earnings.</p>
                  
                  <p className="font-medium text-neutral-100 mb-4">Extrapolated Scale: 1,000,000 Professionals</p>
                  <p className="text-neutral-300 mb-4">At a larger scale, with 1,000,000 dedicated individuals, the network could command:</p>
                  <p className="text-neutral-200 font-semibold">1,000,000 × $100,000 = $100 billion in annual economic output.</p>
                </div>

                <p className="text-neutral-300 mb-8"><strong>Extended Ecosystem:</strong> Including allied professionals, affiliates, and service providers, the broader economic influence may reach tens of billions globally.</p>

                <h2 className="text-2xl font-semibold text-neutral-100 mt-12 mb-6">3. Community & Lifestyle</h2>
                
                <h3 className="text-xl font-medium text-neutral-200 mb-4">Open Digital Immigration & Mutual Employment:</h3>
                <ul className="list-disc pl-6 text-neutral-300 mb-8">
                  <li className="mb-2">We welcome storytellers and digital creators from all corners of the world who identify with our vision and want to contribute to a global creative community.</li>
                  <li className="mb-2">Individuals are not merely "members"; they are natives who mutually employ their skills and collaborate as equals, ensuring a collective commitment to creative excellence.</li>
                </ul>

                <h3 className="text-xl font-medium text-neutral-200 mb-4">Hotel and Residence Style Living:</h3>
                <ul className="list-disc pl-6 text-neutral-300 mb-8">
                  <li className="mb-2">Modern compounds designed with modern, minimalist aesthetics serve as both living and working spaces.</li>
                  <li className="mb-2">Amenities include upscale movie theaters, fine art galleries, communal workspaces, pools, and private residences—all fostering an environment where creative collaboration is inherent to daily life.</li>
                  <li className="mb-2">Maintaining 20-30% excess capacity in accommodation and facilities for temporary stays and commercial services, providing additional revenue streams through curated tourism and exclusive access to Haven's amenities such as screening theaters and art galleries.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-100 mt-12 mb-6">4. Revenue Drivers & Business Model</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-neutral-700 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-[#3B82F6] mb-4">A. Media & Content Platforms</h3>
                    <p className="text-neutral-300">Streaming & distribution platform for AI-generated content, with revenue through subscriptions and blockchain-enabled micro-payments.</p>
                  </div>
                  <div className="bg-neutral-700 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-[#3B82F6] mb-4">B. Advertising & Design</h3>
                    <p className="text-neutral-300">Global creative agency offering premium services to leading brands, with potential for billions in annual revenue.</p>
                  </div>
                  <div className="bg-neutral-700 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-[#3B82F6] mb-4">C. Real Estate & Hospitality</h3>
                    <p className="text-neutral-300">Income from premium residences and event venues across 250+ planned global accommodation centers.</p>
                  </div>
                  <div className="bg-neutral-700 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-[#3B82F6] mb-4">D. Art & Cultural Events</h3>
                    <p className="text-neutral-300">Revenue from exclusive events, exhibitions, and signature cultural initiatives like the "Art Olympics".</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-neutral-100 mt-12 mb-6">5. Integrated Economic & Cultural Impact</h2>
                
                <div className="bg-neutral-700 p-6 rounded-xl mb-12">
                  <h3 className="text-xl font-medium text-[#3B82F6] mb-4">Economic Ecosystem</h3>
                  <p className="text-neutral-300 mb-4">The convergence of digital media, advertising, and quality hospitality creates multiple, synergistic revenue channels, supported by a decentralized blockchain payment system.</p>
                  
                  <h3 className="text-xl font-medium text-[#3B82F6] mb-4">Cultural Leadership</h3>
                  <p className="text-neutral-300">Haven positions itself as a global benchmark in creative production and cultural innovation, challenging traditional power structures with a model built on collaboration and mutual employment.</p>
                </div>

                <div className="border-l-4 border-[#3B82F6] pl-6 py-2 mb-12">
                  <p className="text-neutral-300 italic">
                    Haven is more than a digital media platform or a premium living environment—it is a transformative network state where professionals who identify with its vision come together to redefine global narratives. Through rigorous identification and mutual employment, each individual contributes to a dynamic collective, driving economic and cultural innovation on a global scale. This network of creative excellence not only challenges the traditional paradigms of media and commerce but also offers a compelling, sophisticated alternative to established institutions.
                  </p>
                </div>
              </article>
            </section>

            {/* Contact Methods - Hidden as requested */}
            <section className="bg-neutral-900 rounded-2xl p-8 shadow-lg h-auto mb-4" style={{ display: 'none' }}>
              <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Get in Touch</h2>
              
              <div className="mb-8 p-6 bg-neutral-800 rounded-xl">
                <p className="text-neutral-100 font-medium mb-3">
                  Note: Haven welcomes digital creators from everywhere
                </p>
                <p className="text-neutral-300">
                  We are building a global community of creative professionals open to digital immigrants from anywhere in the world. Our collaborative network celebrates diversity of thought and experience, welcoming storytellers who share our passion for creative excellence and innovation. Join us to connect, create, and contribute to a worldwide community of digital natives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-0">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#3B82F6]">General Inquiries</h3>
                  <p className="text-neutral-300">
                    For questions about Haven's vision and creative ecosystem.
                  </p>
                  <a 
                    href="mailto:join@haven.engineer" 
                    className="inline-block text-neutral-300 hover:text-[#3B82F6] transition-colors duration-300"
                  >
                    join@haven.engineer
                  </a>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#3B82F6]">Join the Global Community</h3>
                  <p className="text-neutral-300">
                    For creators interested in joining our worldwide network from anywhere on the globe.
                  </p>
                  <a 
                    href="mailto:join@haven.engineer" 
                    className="inline-block text-neutral-300 hover:text-[#3B82F6] transition-colors duration-300"
                  >
                    join@haven.engineer
                  </a>
                </div>
              </div>
            </section>
            
            {/* Footer */}
            <footer className="text-center text-sm text-neutral-400 pb-0 mb-0 h-4">
              © {new Date().getFullYear()} Haven
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
} 