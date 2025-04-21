"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function MoonlightGarden() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const menuItems = [
    {
      id: "superman",
      name: "Superman Smoothie",
      ingredients: "Greek yogurt, almond milk, peanut butter, banana, strawberry, blueberry, oats",
      cost: 5.00,
      price: 10.00,
      profit: 5.00,
      description: "A protein-packed smoothie that gives you the energy of a superhero."
    },
    {
      id: "mayan",
      name: "Mayan's Curry (Vegan)",
      ingredients: "Chickpeas, coconut milk, tomatoes, spinach, spices",
      cost: 5.00,
      price: 10.00,
      profit: 5.00,
      description: "A flavorful plant-based curry inspired by ancient Mayan recipes."
    },
    {
      id: "spinach",
      name: "Maria's Spinach Salad",
      ingredients: "Spinach, avocado, cherry tomatoes, feta, vinaigrette",
      cost: 3.00,
      price: 8.00,
      profit: 5.00,
      description: "A fresh, nutrient-dense salad perfect for a light meal."
    },
    {
      id: "chicken",
      name: "Grilled Chicken",
      ingredients: "Chicken breast, olive oil, herbs",
      cost: 7.00,
      price: 12.00,
      profit: 5.00,
      description: "Simple, perfectly seasoned grilled chicken breast."
    },
    {
      id: "cookies",
      name: "Warm Chocolate Chip Cookies",
      ingredients: "Flour, butter, sugar, chocolate chips",
      cost: 1.00,
      price: 6.00,
      profit: 5.00,
      description: "Freshly baked cookies delivered warm to your door."
    },
    {
      id: "soup",
      name: "Potato Soup",
      ingredients: "Potatoes, vegetable broth, onions, cream",
      cost: 2.00,
      price: 7.00,
      profit: 5.00,
      description: "A comforting, creamy soup perfect for any time of day."
    },
    {
      id: "rice",
      name: "Brown Rice",
      ingredients: "Organic brown rice",
      cost: 1.00,
      price: 6.00,
      profit: 5.00,
      description: "Simple, nutritious organic brown rice."
    }
  ];

  return (
    <main className="min-h-screen text-zinc-300" style={{ backgroundColor: "#2a2045" }}>
      {/* Hero Section - reduced height */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2a2045] z-10"></div>
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "url('/moonlight-garden-bg.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) hue-rotate(15deg)'
        }}></div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-2 text-white tracking-tight">
              Moonlight Garden
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-300">
              A 24/7 mobile order-only restaurant serving healthy, 
              automated cuisine to Bloomington, Indiana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concept Section - reduced top padding */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-zinc-200">The Concept</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#352a54] p-6 rounded-sm">
              <h3 className="text-lg mb-2 text-zinc-100">24/7 Availability</h3>
              <p className="text-zinc-400">
                Order anytime day or night through popular delivery platforms
                like DoorDash, Uber Eats, and Grubhub.
              </p>
            </div>
            <div className="bg-[#352a54] p-6 rounded-sm">
              <h3 className="text-lg mb-2 text-zinc-100">Automation-First</h3>
              <p className="text-zinc-400">
                Our kitchen utilizes robotic prep systems and partners with
                self-driving delivery vehicles to minimize labor costs.
              </p>
            </div>
            <div className="bg-[#352a54] p-6 rounded-sm">
              <h3 className="text-lg mb-2 text-zinc-100">College Campus Focus</h3>
              <p className="text-zinc-400">
                Starting in Bloomington, Indiana, we're targeting college students
                seeking healthy food options with convenient delivery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Menu Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-zinc-200">Our Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className={`border cursor-pointer transition-all duration-300 ${
                  selectedItem === item.id 
                    ? "border-zinc-400 bg-[#352a54]" 
                    : "border-[#463a64] hover:border-zinc-500"
                }`}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
              >
                <div className="p-4">
                  <h3 className="text-zinc-200 font-medium">{item.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.description}</p>
                  <div className="mt-3 text-zinc-300 font-mono">${item.price.toFixed(2)}</div>
                </div>
                
                {selectedItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-[#231a3a] border-t border-[#463a64] p-4"
                  >
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-zinc-500">Ingredients:</div>
                      <div className="text-zinc-300">{item.ingredients}</div>
                      <div className="text-zinc-500">Cost:</div>
                      <div className="text-zinc-300">${item.cost.toFixed(2)}</div>
                      <div className="text-zinc-500">Profit:</div>
                      <div className="text-zinc-300">${item.profit.toFixed(2)}</div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Business Strategy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-zinc-200">Business Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-4 text-zinc-100">Automation Strategy</h3>
              <p className="text-zinc-400 mb-4">
                Moonlight Garden minimizes labor costs by leveraging robotic preparation 
                systems and partnering with self-driving delivery vehicles from roundabout.run. 
                The initial automation investment is $10,000.
              </p>
              <p className="text-zinc-400">
                We also create partnerships with local markets to source surplus produce, 
                reducing our ingredient costs while supporting local businesses.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-zinc-100">Revenue Potential</h3>
              <div className="bg-[#352a54] p-6 rounded-sm text-zinc-300 font-mono">
                <div className="grid grid-cols-2 gap-y-3">
                  <div>Annual Orders:</div>
                  <div>87,600</div>
                  <div>Average Price:</div>
                  <div>$8.43</div>
                  <div>Profit per Item:</div>
                  <div>$5.00</div>
                  <div className="text-zinc-200 pt-3 border-t border-[#463a64]">Annual Revenue:</div>
                  <div className="text-zinc-200 pt-3 border-t border-[#463a64]">$738,468</div>
                  <div className="text-zinc-200">Annual Profit:</div>
                  <div className="text-zinc-200">$438,000</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 