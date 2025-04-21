"use client"

import { motion, AnimatePresence } from "framer-motion"
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
    <div className="bg-zinc-900 text-zinc-300">
      {/* Stars background */}
      <div className="absolute inset-x-0 top-0 h-24 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        <style jsx global>{`
          @keyframes twinkle {
            0% { opacity: 0.1; }
            50% { opacity: 0.5; }
            100% { opacity: 0.1; }
          }
          
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-1px) translateX(1px); }
            50% { transform: translateY(0px) translateX(2px); }
            75% { transform: translateY(1px) translateX(1px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          
          .stars-small, .stars-medium, .stars-large {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
          }
          
          .stars-small {
            animation: float 20s infinite ease-in-out;
          }
          
          .stars-medium {
            animation: float 30s infinite ease-in-out reverse;
          }
          
          .stars-large {
            animation: float 40s infinite ease-in-out;
          }
          
          .stars-small::after, .stars-medium::after, .stars-large::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(0.5px 0.5px at 10px 10px, rgba(255, 255, 255, 0.3) 50%, transparent 100%),
              radial-gradient(0.5px 0.5px at 25px 30px, rgba(255, 255, 255, 0.2) 50%, transparent 100%),
              radial-gradient(0.5px 0.5px at 40px 70px, rgba(255, 255, 255, 0.3) 50%, transparent 100%),
              radial-gradient(0.5px 0.5px at 55px 15px, rgba(255, 255, 255, 0.2) 50%, transparent 100%),
              radial-gradient(0.5px 0.5px at 70px 50px, rgba(255, 255, 255, 0.3) 50%, transparent 100%),
              radial-gradient(0.5px 0.5px at 85px 35px, rgba(255, 255, 255, 0.2) 50%, transparent 100%),
              radial-gradient(0.5px 0.5px at 100px 60px, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
            background-size: 120px 120px;
            animation: twinkle 3s infinite ease-in-out;
          }
          
          .stars-medium::after {
            background-image: 
              radial-gradient(0.7px 0.7px at 15px 15px, rgba(255, 255, 255, 0.4) 50%, transparent 100%),
              radial-gradient(0.7px 0.7px at 35px 45px, rgba(255, 255, 255, 0.3) 50%, transparent 100%),
              radial-gradient(0.7px 0.7px at 55px 20px, rgba(255, 255, 255, 0.4) 50%, transparent 100%),
              radial-gradient(0.7px 0.7px at 75px 50px, rgba(255, 255, 255, 0.3) 50%, transparent 100%),
              radial-gradient(0.7px 0.7px at 95px 30px, rgba(255, 255, 255, 0.4) 50%, transparent 100%),
              radial-gradient(0.7px 0.7px at 115px 65px, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
            background-size: 150px 150px;
            animation: twinkle 5s infinite ease-in-out 1s;
          }
          
          .stars-large::after {
            background-image: 
              radial-gradient(1px 1px at 20px 20px, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
              radial-gradient(1px 1px at 45px 40px, rgba(255, 255, 255, 0.4) 50%, transparent 100%),
              radial-gradient(1px 1px at 70px 15px, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
              radial-gradient(1px 1px at 95px 55px, rgba(255, 255, 255, 0.4) 50%, transparent 100%),
              radial-gradient(1px 1px at 120px 30px, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
            background-size: 180px 180px;
            animation: twinkle 7s infinite ease-in-out 2s;
          }
        `}</style>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="pt-14 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-2 text-white tracking-tight">
              Moonlight Garden
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-300 mb-3">
              A 24/7 mobile order-only restaurant serving healthy, 
              automated cuisine starting at college campuses.
            </p>
          </motion.div>
        </div>

        {/* Content sections - small gap added back */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-zinc-200">The Concept</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-sm">
              <h3 className="text-lg mb-2 text-zinc-100">24/7 Availability</h3>
              <p className="text-zinc-400">
                Order anytime day or night through popular delivery platforms
                like DoorDash, Uber Eats, and Grubhub.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-sm">
              <h3 className="text-lg mb-2 text-zinc-100">Automation-First</h3>
              <p className="text-zinc-400">
                Our kitchen utilizes robotic prep systems and partners with
                self-driving delivery vehicles to minimize labor costs.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-sm">
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
                className={`border cursor-pointer transition-colors duration-300 ${
                  selectedItem === item.id 
                    ? "border-zinc-400 bg-zinc-800" 
                    : "border-zinc-700 hover:border-zinc-500"
                }`}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
              >
                <div className="p-4">
                  <h3 className="text-zinc-200 font-medium">{item.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.description}</p>
                  <div className="mt-3 text-zinc-300 font-mono">${item.price.toFixed(2)}</div>
                </div>
                
                <AnimatePresence>
                  {selectedItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { 
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, delay: 0.15 } 
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { 
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.1 } 
                        }
                      }}
                      className="bg-zinc-900 border-t border-zinc-700 overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: 0.15, duration: 0.2 }
                        }}
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4"
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
                    </motion.div>
                  )}
                </AnimatePresence>
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
          className="pb-12"
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
              <div className="bg-zinc-800 p-6 rounded-sm text-zinc-300 font-mono">
                <div className="grid grid-cols-2 gap-y-3">
                  <div>Annual Orders:</div>
                  <div>87,600</div>
                  <div>Average Price:</div>
                  <div>$8.43</div>
                  <div>Profit per Item:</div>
                  <div>$5.00</div>
                  <div className="text-zinc-200 pt-3 border-t border-zinc-700">Annual Revenue:</div>
                  <div className="text-zinc-200 pt-3 border-t border-zinc-700">$738,468</div>
                  <div className="text-zinc-200">Annual Profit:</div>
                  <div className="text-zinc-200">$438,000</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 