import type React from "react"
import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  subtitle: string
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="min-h-screen flex items-center py-20 snap-start">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2 text-gray-900">{title}</h2>
          <p className="text-gray-500 text-lg mb-4">{subtitle}</p>
          <div className="h-px w-16 bg-[#E6B325] mb-8"></div>

          {children}
        </div>
      </div>
    </section>
  )
}

export default Section

