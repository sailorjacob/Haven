import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsPage() {
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
          <h1 className="text-2xl font-light text-zinc-900 mb-6">Terms of Service</h1>
          
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Last updated:</strong> January 2024
            </p>
            
            <p>
              By using Haven's services, you agree to these terms.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Services</h2>
            <p>
              Haven provides digital design and development services. We reserve the right to modify or discontinue services at any time.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">User Responsibilities</h2>
            <p>
              Users must provide accurate information and use our services lawfully and respectfully.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Intellectual Property</h2>
            <p>
              All content and materials are owned by Haven or our clients. Unauthorized use is prohibited.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Limitation of Liability</h2>
            <p>
              Haven's liability is limited to the maximum extent permitted by law.
            </p>
            
            <h2 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
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