"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { toast, Toaster } from "react-hot-toast"
import { Hexagon, ChevronDown, Menu, X } from "lucide-react"
import ProcessDropdown from "@/components/ProcessDropdown"

// FlyingBee component props interface
interface FlyingBeeProps {
  id: number;
  delay: number;
  imgSrc: string;
  positionY: number;
  size: number;
}

export default function BitcoinBankPage() {
  // Simulated prices (in BTC)
  const prices = { apple: 0.0001, orange: 0.0002 }; // 1 apple = 0.0001 BTC, 1 orange = 0.0002 BTC

  // Client-side only state
  const [clientLoaded, setClientLoaded] = useState(false);
  const [bees, setBees] = useState<FlyingBeeProps[]>([]);
  const [isTransactionInProgress, setIsTransactionInProgress] = useState(false);
  const [transactionParticles, setTransactionParticles] = useState<{ id: number; x: number; y: number; size: number; rotation: number; delay: number }[]>([]);

  // Initialize animation only on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClientLoaded(true);
      
      // Initialize the bees with remote URLs only
      const newBees: FlyingBeeProps[] = [];
      const beeImgs = [
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side.svg",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//simple-cute-thick-bumble-bee.svg",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side-2.svg"
      ];
      
      // Create 12 bees with different delays, positions, and sizes
      for (let i = 0; i < 12; i++) {
        const randomImgIndex = Math.floor(Math.random() * beeImgs.length);
        newBees.push({
          id: i,
          imgSrc: beeImgs[randomImgIndex],
          positionY: Math.random() * 70 + 10, // Position between 10% and 80% from bottom
          size: Math.random() * 30 + 70, // Random size between 70-100% of original
          delay: i * 0.8 + Math.random() * 2 // Shorter staggered delays
        });
      }
      
      setBees(newBees);
    }
  }, []);

  // Send a "transaction" animation
  const sendTransaction = () => {
    // Get random positions for animation particles
    const particles: { id: number; x: number; y: number; size: number; rotation: number; delay: number }[] = [];
    
    // Get transaction amount for scaling effects
    const amountElem = document.getElementById('btcAmount') as HTMLInputElement;
    const amount = parseFloat(amountElem?.value || '0.001');
    
    // Scale particle count based on transaction size (min 8, max 20)
    const particleCount = Math.min(20, Math.max(8, Math.floor(amount * 10000)));
    
    // Create multiple particles that will fly from the input to the output
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 40 - 20, // Random offset X
        y: Math.random() * 40 - 20, // Random offset Y
        size: Math.random() * 6 + 8, // Random size (8-14px)
        rotation: Math.random() * 360, // Random rotation
        delay: i * 0.1 // Staggered delay
      });
    }
    
    setIsTransactionInProgress(true);
    setTransactionParticles(particles);
    
    // Animate the individual bee in the interactive demo section
    const beeElement = document.getElementById('bee');
    if (beeElement) {
      // Reset position
      beeElement.style.left = '0';
      beeElement.style.transform = 'translateY(0)';
      // Show the bee
      beeElement.classList.remove('hidden');
      // Animate across screen
      setTimeout(() => {
        beeElement.style.left = 'calc(100% - 50px)';
        if (amount >= 0.01) {
          beeElement.style.transform = 'translateY(-20px)';
        }
      }, 50);
      // Hide the bee after animation completes
      setTimeout(() => {
        beeElement.classList.add('hidden');
      }, 1000);
    }
    
    // Clear transaction animation after completion and spawn new bees
    setTimeout(() => {
      setIsTransactionInProgress(false);
      setTransactionParticles([]);
      
      // Create new bees after transaction
      const newBees = [...bees];
      const beeImgs = [
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side.svg",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//simple-cute-thick-bumble-bee.svg",
        "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side-2.svg"
      ];
      
      // Add 2-4 new bees with immediate appearance
      const newBeesToAdd = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < newBeesToAdd; i++) {
        const randomImgIndex = Math.floor(Math.random() * beeImgs.length);
        const newBee: FlyingBeeProps = {
          id: bees.length + i + Date.now(), // Ensure unique ID
          imgSrc: beeImgs[randomImgIndex],
          positionY: Math.random() * 70 + 10,
          size: Math.random() * 30 + 70,
          delay: i * 0.3 // Quick sequence of new bees
        };
        newBees.push(newBee);
      }
      setBees(newBees);
      
      // Update comparison data after transaction
      updateComparison();
      
      // Show custom success toast based on transaction size
      if (amount >= 0.1) {
        // Large transaction
        toast.success(
          <div className="flex flex-col">
            <span className="font-bold">Large Transaction Sent!</span>
            <span className="text-xs">Your Bitcoin swarm is buzzing through the network.</span>
          </div>,
          {
            duration: 4000,
            position: "bottom-right",
            style: {
              background: '#f5f5f5',
              color: '#333',
              border: '2px solid #333',
              padding: '16px',
              borderRadius: '8px'
            },
            icon: '🐝🐝🐝'
          }
        );
      } else if (amount >= 0.01) {
        // Medium transaction
        toast.success(
          <div className="flex flex-col">
            <span className="font-bold">Transaction Sent!</span>
            <span className="text-xs">Your Bitcoin bees are on their way.</span>
          </div>,
          {
            duration: 3500,
            position: "bottom-right",
            style: {
              background: '#f5f5f5',
              color: '#333',
              border: '1px solid #333',
              padding: '12px',
              borderRadius: '6px'
            },
            icon: '🐝🐝'
          }
        );
      } else {
        // Small transaction
        toast.success("Transaction sent! Your Bitcoin is buzzing through the network.", {
          duration: 3000,
          position: "bottom-right",
          style: {
            background: '#f5f5f5',
            color: '#333',
            border: '1px solid #333',
            borderRadius: '4px'
          },
          icon: '🐝'
        });
      }
    }, 2000);
  };

  const updateComparison = () => {
    const btc = parseFloat((document.getElementById('btcInput') as HTMLInputElement)?.value || '0');
    const btcValueElement = document.getElementById('btcValue');
    const applesElement = document.getElementById('apples');
    const orangesElement = document.getElementById('oranges');

    if (btcValueElement) btcValueElement.textContent = btc.toString();
    if (applesElement) applesElement.textContent = Math.floor(btc / prices.apple).toString();
    if (orangesElement) orangesElement.textContent = Math.floor(btc / prices.orange).toString();
  };

  // Render the bees animation  
  const renderBees = () => {
    if (!clientLoaded || bees.length === 0) return null;
    
    return (
      <div className="fixed inset-0 pointer-events-none overflow-visible z-[1000]">
        {bees.map((bee) => (
          <motion.div
            key={bee.id}
            className="fixed pointer-events-none"
            style={{ 
              bottom: `${bee.positionY}%`, 
              right: "-50px", // Start slightly off-screen to the right
              zIndex: 1000 // Ensure bees are on top of everything
            }}
            initial={{ 
              x: 0,
              opacity: 0 
            }}
            animate={{ 
              x: "-110vw", // Move completely across the screen
              y: [0, -20, -40, -30, -50], // Create a more natural wavy flight path
              opacity: [0, 1, 1, 1, 0.8]
            }}
            transition={{
              duration: 20, // Slower animation so bees are visible longer
              delay: bee.delay,
              ease: "linear",
              y: {
                duration: 20,
                times: [0, 0.25, 0.5, 0.75, 1],
                ease: "easeInOut",
                repeat: 0
              },
              opacity: {
                times: [0, 0.05, 0.5, 0.9, 1],
                duration: 20
              }
            }}
          >
            <Image
              src={bee.imgSrc}
              alt="Flying Bee"
              width={100}
              height={100}
              className="transform -rotate-12 hover:rotate-0 transition-transform"
              style={{ width: `${bee.size}px`, height: 'auto' }}
              priority
            />
          </motion.div>
        ))}
      </div>
    );
  };

  // Render the transaction animation
  const renderTransactionAnimation = () => {
    if (!isTransactionInProgress || transactionParticles.length === 0) return null;
    
    // Get transaction amount (if available) for scaling effects
    const amountElem = document.getElementById('btcAmount') as HTMLInputElement;
    const amount = parseFloat(amountElem?.value || '0.001');
    const isLargeTransaction = amount >= 0.01;
    
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Special glow effect for large transactions */}
        {isLargeTransaction && (
          <motion.div 
            className="absolute rounded-full"
            style={{
              left: "calc(50% - 150px)",
              top: "calc(50% + 50px)",
              background: "radial-gradient(circle, rgba(242,169,0,0.4) 0%, rgba(242,169,0,0) 70%)",
              zIndex: 199,
            }}
            initial={{
              width: 10,
              height: 10,
              opacity: 0,
            }}
            animate={{
              width: 800,
              height: 800,
              opacity: [0, 0.8, 0],
              x: -400,
              y: -400,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />
        )}
        
        {transactionParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: "calc(50% - 150px)",
              top: "calc(50% + 50px)",
              background: isLargeTransaction ? 
                "radial-gradient(circle, #f2a900 30%, rgba(242,169,0,0.6) 70%)" : 
                "rgba(242,169,0,0.8)",
              boxShadow: isLargeTransaction ? 
                "0 0 15px 4px rgba(242,169,0,0.8), 0 0 5px 2px rgba(255,255,255,0.6)" : 
                "0 0 10px 2px rgba(242,169,0,0.6)",
              zIndex: 200,
              width: particle.size,
              height: particle.size,
            }}
            initial={{
              opacity: 0,
              x: particle.x,
              y: particle.y,
              rotate: particle.rotation,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [
                particle.x, 
                particle.x + 150 * Math.sign(particle.x || 1), 
                300 + particle.x * (isLargeTransaction ? 1.5 : 1)
              ],
              y: [
                particle.y, 
                particle.y - 50, 
                particle.y - (isLargeTransaction ? 150 : 100)
              ],
              rotate: [
                particle.rotation, 
                particle.rotation + 180, 
                particle.rotation + 360
              ],
              scale: isLargeTransaction ? 
                [0.5, 1.5, 0.8, 0] : 
                [0.5, 1.2, 0.8, 0],
            }}
            transition={{
              duration: isLargeTransaction ? 2.5 : 2,
              delay: particle.delay * (isLargeTransaction ? 0.8 : 1), // Compress delay for larger transactions
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1],
            }}
          />
        ))}
      </div>
    );
  };

  const getSeededRandomColor = (seed: string) => {
    const hash = seed.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)
    const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
    return colors[Math.abs(hash) % colors.length]
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)
  const navColors = useMemo(() => ({
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }), [])

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-700 flex flex-col p-6 font-sans relative overflow-hidden">
      {/* Header (same as homepage) */}
      <header onMouseLeave={() => setProcessOpen(false)} className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Hexagon className="w-8 h-8 text-zinc-900" strokeWidth={1} />
                <span className="ml-2 text-lg font-light tracking-wider text-zinc-900">Haven</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative flex items-center" onMouseEnter={() => setProcessOpen(true)}>
                  <Link href="/" className="text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors group">
                    <span className="group-hover:hidden">process</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>process</span>
                  </Link>
                  <motion.span className="ml-1" animate={{ rotate: processOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                  </motion.span>
                </div>

              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="hidden md:inline text-sm font-light text-zinc-600 hover:text-zinc-900 transition-colors">blog</Link>
              <Link href="/contact" className="hidden md:inline-flex items-center border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm">msg</Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
            </div>
          </nav>
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white border-b border-zinc-200">
              <div className="w-full px-4 sm:px-6 py-3 space-y-3">

                <Link href="/blog" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors group" onClick={() => setMobileMenuOpen(false)}>
                  blog
                </Link>
                <Link href="/contact" className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wider uppercase group" onClick={() => setMobileMenuOpen(false)}>
                  <span className="group-hover:hidden">Contact</span>
                  <span className={`hidden group-hover:inline ${navColors.contact}`}>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="pt-20" />
      {/* Toast notifications */}
      <Toaster />
      
      {/* Flying bees animation - separate render function */}
      {renderBees()}

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
          
          <div className="bg-zinc-100 p-6 rounded-lg mb-8 border-l-4 border-zinc-400">
            <p className="text-sm text-zinc-600 leading-relaxed italic">
              "The idea is more so to add designs, like the design of physical dollars, like a bee animation SVG logo that helps people wrap their head around and mentally model their bitcoin transaction. This could be paired with a data visualization website that compares everything you can trade as an item in the world, apples to oranges and how much of x would be equal to how much of y."
            </p>
          </div>
          
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
            A secure and intuitive platform for design on top of bitcoin assets. Built with modern security practices and a focus on user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-100 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Features</h2>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• Treasury level design</li>
                <li>• Visual value comparisons</li>
                <li>• Branded Transactions</li>
                <li>• Network flags</li>
                <li>• Automated portfolio tracking</li>
              </ul>
            </div>
            <div className="bg-zinc-100 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Security</h2>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• End-to-end encryption</li>
                <li>• Two-factor authentication</li>
                <li>• Biometric verification</li>
                <li>• Secure cold storage</li>
                <li>• Real-time market data</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//simple-cute-thick-bumble-bee.svg"
                alt="Bitcoin Bee Logo"
                width={80}
                height={80}
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Blockchain Branding</h2>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Since Bitcoin's blockchain is public, all transaction details - such as sender and receiver addresses, amounts, and timestamps - are openly accessible. By taking this information, you can cross-reference it with other data to identify patterns, verify specific members or use cases, and then brand around those datasets. Here's how this could work and why it might be useful.
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">How It Works</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                The Bitcoin blockchain records every transaction permanently, making it a rich source of data. You could:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Track Specific Addresses: Identify wallets or addresses tied to particular individuals, businesses, or groups. For example, a business could use a designated wallet for all its transactions, allowing you to filter and brand those transactions as "theirs."</li>
                <li>• Cross-Reference Data: Combine blockchain data with external information (e.g., a member list or purchase records) to verify who's spending, how much, and for what. This lets you tag transactions with specific use cases—like "customer purchases" or "membership fees."</li>
                <li>• Add Branding On-Chain: Use Bitcoin's OP_RETURN field to embed a small identifier (e.g., "BEES2023" for "Bees Bitcoin Bank") in transactions. This marks them directly on the ledger for easy verification.</li>
                <li>• Leverage Layer 2 (L2): On the Lightning Network, a Bitcoin L2 solution, you can add metadata to off-chain transactions (e.g., via invoices). This could include branding tags, which are then linked to the on-chain channel openings and closings.</li>
              </ul>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                For example, imagine a business wants to brand its customer transactions. They could:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Process payments through a specific Lightning node or wallet.</li>
                <li>• Tag each transaction with a unique identifier (on-chain via OP_RETURN or off-chain via Lightning metadata).</li>
                <li>• Cross-reference transaction IDs against their records to confirm they're from verified customers.</li>
                <li>• Use this branded dataset for marketing or rewards.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Why It's Valuable</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Branding transactions based on public ledger data offers several benefits:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Verification: You can prove certain transactions belong to specific members or meet criteria (e.g., a network state verifying citizen payments for voting rights).</li>
                <li>• Marketing: Businesses can showcase branded transaction volumes to highlight activity or offer loyalty rewards for using their "branded" payment system.</li>
                <li>• Analytics: Aggregating branded data reveals spending trends, helping tailor services or products.</li>
                <li>• Trust: In a space with scams, verified branding signals legitimacy to users.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Practical Example</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Suppose "Bees Bitcoin Bank" wants to brand its transactions:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• They use a wallet with "BEES2023" in the OP_RETURN field for every outgoing payment.</li>
                <li>• They scan the blockchain for transactions with this tag, cross-reference them with customer IDs, and confirm they're from their users.</li>
                <li>• They then display these branded transactions on a website, showing "Verified Bees Activity" to build trust or offer perks.</li>
                <li>• Alternatively, on Lightning, they could run a branded node, tag invoices with "BEES," and reward users who pay through it with discounts.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Challenges to Consider</h3>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Privacy: Since the ledger is public, branding could expose transaction patterns, reducing anonymity unless mitigated (e.g., with mixers or private L2 channels).</li>
                <li>• Scalability: Manually cross-referencing large datasets could be slow; automation or tools would be needed.</li>
                <li>• Adoption: For branding to matter, users and wallets must recognize and value it.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">Is This Happening Already?</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Not quite in this way. While some projects use blockchain metadata (e.g., OP_RETURN for timestamps), this specific implementation of visual transaction branding with animated bees and real-time value comparisons is unique. The combination of cute bee animations, intuitive value visualization, and user-friendly interface creates a fresh approach to making Bitcoin transactions more engaging and understandable.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                In short, yes, you can use the public nature of Bitcoin's ledger to brand transactions by cross-referencing and verifying data. It's a practical concept with real value for businesses, communities, or analytics—though it requires careful design to balance privacy and effectiveness.
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Visual Design & Data Visualization</h2>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                The idea is to enhance Bitcoin transactions with visual designs—think of it like adding the flair of physical dollar bills, such as a bee animation SVG logo—to help people better understand and mentally model their transactions. You also want to pair this with a data visualization website that compares the value of anything tradable in the world, like apples to oranges, showing how much of one item equals another in terms of Bitcoin or other assets. Let's break this down and bring it to life with a practical example.
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">How It Could Work</h3>
              <h4 className="text-sm font-medium text-zinc-700 mb-2">1. Visual Designs for Bitcoin Transactions</h4>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Bitcoin transactions are raw data on the blockchain, so we can't embed animations or logos directly into them. Instead, we can build a custom interface—like a wallet or browser extension—that overlays visual elements onto the transaction data. Here's how it could look:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Bee Animation for Transactions: When you send or receive Bitcoin, your wallet could display a buzzing bee animation. For example, sending 0.001 BTC might show a single bee flying across the screen with a message like "Funds delivered!" A larger transaction, say 0.1 BTC, could trigger a swarm of bees, visually representing the scale.</li>
                <li>• Mental Modeling: These visuals act like a bridge between the abstract nature of cryptocurrency and something more familiar, like cash with unique designs. A bee logo could become a recognizable symbol for your transactions, making them feel less intangible.</li>
                <li>• Implementation: This could be a standalone web-based wallet or an extension for existing blockchain explorers. It would fetch transaction data via APIs and pair it with SVG animations for a seamless experience.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-700 mb-2">2. Data Visualization Website</h4>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                The second part of your vision is a website that compares the value of tradable items—everything from apples to luxury cars—in terms of Bitcoin or other currencies. This would make Bitcoin's value more relatable and intuitive. Here's the concept:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 mb-4">
                <li>• Item-to-Item Comparisons: Users could see that 0.001 BTC equals 10 apples, 5 oranges, or half a movie ticket. Or they could compare goods directly: how many oranges equal one apple in Bitcoin terms?</li>
                <li>• Real-Time Data: The site would pull live price data for Bitcoin and various items using APIs, ensuring accuracy.</li>
                <li>• Interactive Design: Think sliders or dropdowns where users input an amount of Bitcoin or an item, and the site instantly shows equivalent values in other goods.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-medium text-zinc-800 mb-2">A Practical Example</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Below, I've created a simple web application that combines both ideas: a transaction visualizer with a bee animation and a basic data visualization tool. This is a starting point you could expand on.
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Interactive Demo</h2>
              <div className="bg-zinc-100 p-6 rounded-lg">
                <h3 className="text-md font-medium text-zinc-800 mb-4">Bitcoin Bee Visualizer</h3>
                
                {/* Transaction Visualizer */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-zinc-700 mb-3">Send Bitcoin</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <input 
                      type="number" 
                      id="btcAmount" 
                      placeholder="Enter BTC amount" 
                      step="0.0001" 
                      min="0"
                      className="px-3 py-2 border border-zinc-300 rounded-md text-sm"
                    />
                    <button 
                      onClick={sendTransaction}
                      className="px-4 py-2 bg-zinc-800 text-white rounded-md text-sm hover:bg-zinc-700 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                  <p id="status" className="text-sm text-zinc-600"></p>
                  <div className="relative h-20">
                    <Image
                      id="bee"
                      src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side.svg"
                      alt="Flying Bee"
                      width={50}
                      height={50}
                      className="hidden absolute transition-all duration-2000 ease-in-out"
                      style={{
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        transition: 'left 1s ease-in-out, transform 0.25s ease-in-out'
                      }}
                    />
                  </div>
                </div>

                {/* Data Visualization */}
                <div>
                  <h4 className="text-sm font-medium text-zinc-700 mb-3">Value Comparison</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <input 
                      type="number" 
                      id="btcInput" 
                      placeholder="Enter BTC" 
                      step="0.0001" 
                      min="0" 
                      onInput={updateComparison}
                      className="px-3 py-2 border border-zinc-300 rounded-md text-sm"
                    />
                  </div>
                  <p className="text-sm text-zinc-600 mb-2">
                    With <span id="btcValue" className="font-medium">0</span> BTC, you can buy:
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side-2.svg"
                        alt="Bee Icon"
                        width={20}
                        height={20}
                        className="transform hover:rotate-12 transition-transform duration-300"
                      />
                      Apples: <span id="apples" className="font-medium">0</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images//cute-flying-bumble-bee-side-2.svg"
                        alt="Bee Icon"
                        width={20}
                        height={20}
                        className="transform hover:rotate-12 transition-transform duration-300"
                      />
                      Oranges: <span id="oranges" className="font-medium">0</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">How to Use It</h2>
              <div className="bg-zinc-100 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Transaction Visualizer</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Enter a BTC amount and click "Send." A bee SVG (a simple placeholder here) animates across the screen to represent the transaction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Data Visualization</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Input a BTC amount in the comparison section, and it calculates how many apples or oranges that equals based on simulated prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Why It's Valuable</h2>
              <div className="bg-zinc-100 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Intuitive Transactions</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      The bee animation makes sending Bitcoin feel more concrete and engaging, like handling physical money with a design.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Value Clarity</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      The comparison tool shows Bitcoin's worth in everyday terms, helping users grasp its real-world purchasing power.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Accessibility</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      This could appeal to beginners, visual learners, or anyone who finds raw transaction data hard to process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-zinc-800 mb-3">Next Steps</h2>
              <div className="bg-zinc-100 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Enhance the Animation</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Use a more detailed bee SVG or add sound effects for a richer experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">Expand the Website</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Integrate real-time price APIs (e.g., CoinGecko for BTC, retail APIs for goods) and add more items to compare.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-zinc-800 mb-2">User Testing</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      See how people respond to the visuals and tweak them for clarity and fun.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-zinc-600 leading-relaxed">
                What do you think? Could this be the spark to make Bitcoin click for more people? Let me know your thoughts!
              </p>
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

      {/* Transaction animation */}
      {renderTransactionAnimation()}
    </main>
  )
} 