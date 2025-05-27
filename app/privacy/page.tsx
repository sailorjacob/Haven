import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700">
      <div className="container max-w-2xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-zinc-500 hover:text-zinc-700 transition-colors mb-8 text-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Haven
        </Link>
        
        <div className="bg-white rounded-lg p-8 shadow-sm border border-zinc-200">
          <h1 className="text-2xl font-light text-zinc-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Last updated:</strong> January 2024
            </p>
            
            <p>
              Haven respects your privacy. We collect minimal information necessary to provide our services.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Information We Collect</h2>
            <p>
              We may collect contact information when you reach out to us, including your name and email address.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">How We Use Information</h2>
            <p>
              Information is used solely to respond to inquiries and provide requested services.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Contact</h2>
            <p>
              For privacy questions, contact us at{" "}
              <a href="mailto:info@haven.engineer" className="text-zinc-900 hover:underline">
                info@haven.engineer
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 