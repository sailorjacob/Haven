"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function BitcoinBankPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col items-center p-6 font-sans">
      <div className="container max-w-xl mx-auto py-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600">
              Bitcoin Bank
            </span>
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-6"></div>
          
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
            A secure and intuitive platform for managing your bitcoin assets. Built with modern security practices and a focus on user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-100 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Features</h2>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• Secure cold storage</li>
                <li>• Real-time market data</li>
                <li>• Instant transactions</li>
                <li>• Multi-signature support</li>
                <li>• Automated portfolio tracking</li>
              </ul>
            </div>
            <div className="bg-zinc-100 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Security</h2>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• End-to-end encryption</li>
                <li>• Two-factor authentication</li>
                <li>• Biometric verification</li>
                <li>• Regular security audits</li>
                <li>• Insurance coverage</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Blockchain Branding</h2>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Since Bitcoin's blockchain is public, all transaction details—such as sender and receiver addresses, amounts, and timestamps—are openly accessible. By taking this information, you can cross-reference it with other data to identify patterns, verify specific members or use cases, and then brand around those datasets.
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">How It Works</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                The Bitcoin blockchain records every transaction permanently, making it a rich source of data. You could:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Track Specific Addresses: Identify wallets tied to particular individuals or businesses</li>
                <li>• Cross-Reference Data: Combine blockchain data with external information</li>
                <li>• Add Branding On-Chain: Use Bitcoin's OP_RETURN field for identifiers</li>
                <li>• Leverage Layer 2: Add metadata to off-chain transactions via Lightning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Why It's Valuable</h3>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Verification: Prove transactions belong to specific members</li>
                <li>• Marketing: Showcase branded transaction volumes</li>
                <li>• Analytics: Reveal spending trends and patterns</li>
                <li>• Trust: Signal legitimacy to users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Practical Example</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Suppose "Bees Bitcoin Bank" wants to brand its transactions:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Use a wallet with "BEES2023" in the OP_RETURN field</li>
                <li>• Scan the blockchain for transactions with this tag</li>
                <li>• Cross-reference with customer IDs</li>
                <li>• Display verified transactions to build trust</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Challenges to Consider</h3>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Privacy: Public ledger could expose transaction patterns</li>
                <li>• Scalability: Manual cross-referencing can be slow</li>
                <li>• Adoption: Users must recognize and value branding</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 text-zinc-700 py-2 px-6 text-xs lowercase tracking-widest transition-all duration-300"
            >
              return home
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM10 0h1v1h-1zM0 10h1v1H0zM10 10h1v1h-1z' fill='%23ccc' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </main>
  )
} 