"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Interactive logo animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoContainerRef.current) {
        const rect = logoContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Calculate rotation angles based on mouse position
        const rotateY = (x / rect.width) * 30;
        const rotateX = (-y / rect.height) * 30;
        
        // Update logo rotation
        if (logoContainerRef.current) {
          const logoSvg = logoContainerRef.current.querySelector('svg');
          if (logoSvg) {
            logoSvg.style.transform = `
              perspective(800px) 
              rotateY(${rotateY}deg) 
              rotateX(${rotateX}deg)
            `;
          }
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center relative logo-container h-40" ref={logoContainerRef}>
          <div 
            className="absolute inset-0 pointer-events-none opacity-70 z-0 particle-container"
            ref={particlesRef}
          ></div>
          {/* Add coin sides */}
          <div className="logo-sides"></div>
          <div className="logo-sides" style={{ transform: 'rotateX(90deg) translateZ(70px)' }}></div>
          <svg 
            width="100" 
            height="100" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="logo-glow z-10 relative"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <path
              d="M12 3L16.39 5.25L20.78 7.5L20.78 12L20.78 16.5L16.39 18.75L12 21L7.61 18.75L3.22 16.5L3.22 12L3.22 7.5L7.61 5.25L12 3Z"
              fill="#3B82F6"
            />
          </svg>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Haven
        </h1>
        
        <p className="text-xl text-neutral-300 mb-12 text-center max-w-2xl">
          A hive of creative collaboration and interconnected living, 
          reshaping global media and cultural production.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
          <Link 
            href="/products"
            className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white py-4 px-8 rounded-xl transition-colors"
          >
            Explore Products
          </Link>
          
          <Link 
            href="/contact"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl transition-colors"
          >
            Request Information
          </Link>
        </div>
      </div>
    </main>
  )
}
