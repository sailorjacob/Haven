"use client"

import dynamic from 'next/dynamic'

// Use dynamic import with SSR disabled to prevent hydration errors
const StoryContent = dynamic(() => import('./StoryContent'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-white"></div>
})

export default function StoryPage() {
  return <StoryContent />
} 