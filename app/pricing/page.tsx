"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Check, X, ArrowRight, Zap, Clock, Users, Star, Palette, Award, Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

export default function PricingPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<string>("monthly")

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const features = [
    { name: "Mobile Apps", included: true },
    { name: "Presentations", included: true },
    { name: "Logos", included: true },
    { name: "Social Media", included: true },
    { name: "Email", included: true },
    { name: "Webflow", included: true },
    { name: "Print Design", included: true },
    { name: "Packaging", included: true },
    { name: "Ad Creative", included: true },
    { name: "Landing Pages", included: true },
    { name: "Branding", included: true },
    { name: "Display Ads", included: true },
    { name: "User Interface", included: true },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,230,230,0.4),rgba(255,255,255,0))]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">
              Design subscriptions <span className="text-primary">for everyone</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-6">
              One subscription to rule them all. Pause or cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                onClick={scrollToFeatures}
              >
                See Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                >
                  Book a 15-min intro call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              The way design should've been done in the first place
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Repeat className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900">Subscribe</h3>
              <p className="text-zinc-600">
                Subscribe to a plan & request as many designs as you'd like.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Palette className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900">Request</h3>
              <p className="text-zinc-600">
                Request whatever you'd like, from mobile apps to logos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900">Receive</h3>
              <p className="text-zinc-600">
                Receive your design within two business days on average.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Categories */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Apps, websites, logos & more
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              All the things you need under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-zinc-200 p-4 rounded-lg text-center hover:border-primary/50 transition-colors"
              >
                <p className="text-zinc-800">{feature.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-sm font-medium text-primary mb-2">MEMBERSHIP BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              It's "you'll never go back" better
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Replaces unreliable freelancers and expensive agencies for one flat monthly fee,
              with designs delivered so fast you won't want to go anywhere else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl border border-zinc-200"
            >
              <div className="mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-zinc-900">Design board</h3>
              <p className="text-zinc-600">
                Easily manage your design queue with a dedicated board.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl border border-zinc-200"
            >
              <div className="mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-zinc-900">Fixed monthly rate</h3>
              <p className="text-zinc-600">
                No surprises here! Pay the same fixed price each month.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl border border-zinc-200"
            >
              <div className="mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-zinc-900">Fast delivery</h3>
              <p className="text-zinc-600">
                Get your design one at a time in just a couple days on average.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl border border-zinc-200"
            >
              <div className="mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-zinc-900">Top-notch quality</h3>
              <p className="text-zinc-600">
                Senior-level design quality at your fingertips, whenever you need it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-xl border border-zinc-200"
            >
              <div className="mb-4">
                <Repeat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-zinc-900">Flexible and scalable</h3>
              <p className="text-zinc-600">
                Scale up or down as needed, and pause or cancel at anytime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-xl border border-zinc-200"
            >
              <div className="mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-zinc-900">Unique and all yours</h3>
              <p className="text-zinc-600">
                Every design is made especially for you and is 100% yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={featuresRef} className="py-12 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-sm font-medium text-primary mb-2">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              One subscription, endless possibilities
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Start today with our unlimited design subscription
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white border-2 border-primary rounded-xl overflow-hidden">
              <div className="px-6 py-8 border-b border-zinc-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900">Monthly Subscription</h3>
                  <div className="bg-primary/10 text-primary text-xs font-medium py-1 px-3 rounded-full">
                    PAUSE OR CANCEL ANYTIME
                  </div>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-zinc-900">$4,000</span>
                  <span className="text-zinc-500 ml-2">/month</span>
                </div>
                <Button 
                  className="w-full border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full" 
                  variant="outline"
                  size="lg"
                >
                  Join today
                </Button>
              </div>
              
              <div className="px-6 py-8">
                <h4 className="font-medium text-lg mb-4 text-zinc-900">What's included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">One request at a time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">Avg. 48 hour delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">Unlimited brands</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">Webflow development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">Unlimited stock photos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">Up to 2 users</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-zinc-800">Pause or cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 flex items-center">
                <div className="mr-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-zinc-900">Pause anytime</h4>
                  <p className="text-sm text-zinc-600">
                    Temporarily pause your subscription anytime, no sweat.
                  </p>
                </div>
              </div>
              
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 flex items-center">
                <div className="mr-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-zinc-900">Try it for a week</h4>
                  <p className="text-sm text-zinc-600">
                    Not loving it after a week? Get 75% back, no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-zinc-200 rounded-lg p-6"
            >
              <h3 className="font-medium text-lg mb-2 text-zinc-900">How fast will I receive my designs?</h3>
              <p className="text-zinc-600">
                Most designs are delivered within 48 hours. Complex projects may take longer, but we'll always keep you updated on the progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-zinc-200 rounded-lg p-6"
            >
              <h3 className="font-medium text-lg mb-2 text-zinc-900">How does onboarding work?</h3>
              <p className="text-zinc-600">
                After signing up, you'll receive access to your design board where you can submit requests. We'll schedule a quick onboarding call to understand your brand and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-zinc-200 rounded-lg p-6"
            >
              <h3 className="font-medium text-lg mb-2 text-zinc-900">Is there a limit to how many requests I can make?</h3>
              <p className="text-zinc-600">
                There's no limit to the number of requests you can add to your queue, but we work on one request at a time to ensure the highest quality output.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-zinc-200 rounded-lg p-6"
            >
              <h3 className="font-medium text-lg mb-2 text-zinc-900">How does the pause feature work?</h3>
              <p className="text-zinc-600">
                You can pause your subscription at any time from your account dashboard. Your billing will be suspended until you decide to resume, and we'll save your spot.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              See if our design service is the right fit for you
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-6">
              Schedule a quick, 15 minute guided tour through our process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                >
                  Book a 15-min intro call
                </Button>
              </Link>
              <Link href="mailto:hello@example.com">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-zinc-300 hover:bg-zinc-50 text-zinc-900 rounded-full px-8"
                >
                  Prefer to email?
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 