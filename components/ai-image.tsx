"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getRandomImage, getCategoryFromPrompt } from "@/utils/image-gallery"

interface AIImageProps {
  className?: string
  initialPrompt: string
  alt: string
  forcedCategory?: string
  showHoverText?: boolean
}

const AIImage = ({ className = "", initialPrompt, alt, forcedCategory, showHoverText = true }: AIImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [nextImageUrl, setNextImageUrl] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [category, setCategory] = useState(() => forcedCategory || getCategoryFromPrompt(initialPrompt))

  // Generate a new image based on the category
  const generateImage = () => {
    if (isTransitioning) return
    
    const newImageUrl = getRandomImage(category)
    setNextImageUrl(newImageUrl)
    setIsTransitioning(true)
    
    setTimeout(() => {
      setImageUrl(newImageUrl)
      setNextImageUrl(null)
      setIsTransitioning(false)
    }, 500)
  }

  // Generate the initial image on first render
  useEffect(() => {
    const initialImageUrl = getRandomImage(category)
    setImageUrl(initialImageUrl)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className} cursor-pointer group`} onClick={generateImage}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className={`object-contain transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          unoptimized={imageUrl.endsWith('.svg')}
        />
      )}
      
      {nextImageUrl && (
        <Image
          src={nextImageUrl}
          alt={alt}
          fill
          className={`object-contain transition-opacity duration-500 absolute inset-0 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
          unoptimized={nextImageUrl.endsWith('.svg')}
        />
      )}

      {showHoverText && (
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">Click for new SVG</p>
        </div>
      )}
    </div>
  )
}

export default AIImage

