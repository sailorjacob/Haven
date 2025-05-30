// A collection of curated images related to the Haven concept
// These are public domain/freely usable images from Unsplash and other sources

type ImageCategory = {
  [key: string]: string[]
}

// Define the base URL for the Supabase SVGs folder
const SUPABASE_SVG_URL = "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/svgs/";

// Create an array of SVG files from the Supabase bucket with the correct filenames from the screenshot
const svgImages = [
  `${SUPABASE_SVG_URL}beehive.svg`,
  `${SUPABASE_SVG_URL}beach.svg`,
  `${SUPABASE_SVG_URL}dwadwa.svg`,
  `${SUPABASE_SVG_URL}sailboat.svg`,
  `${SUPABASE_SVG_URL}olympian.svg`,
  `${SUPABASE_SVG_URL}security.svg`,
  `${SUPABASE_SVG_URL}bitcoin1.svg`,
  `${SUPABASE_SVG_URL}medusa.svg`,
  `${SUPABASE_SVG_URL}sculpture.svg`,
  `${SUPABASE_SVG_URL}socrates.svg`,
  `${SUPABASE_SVG_URL}2345433.svg`,
  `${SUPABASE_SVG_URL}345654.svg`,
  `${SUPABASE_SVG_URL}3er4t5y.svg`,
  `${SUPABASE_SVG_URL}e3r4.svg`,
  `${SUPABASE_SVG_URL}9876.svg`,
  `${SUPABASE_SVG_URL}76545.svg`,
  `${SUPABASE_SVG_URL}65456.svg`,
  `${SUPABASE_SVG_URL}23432.svg`,
  `${SUPABASE_SVG_URL}7654.svg`,
  `${SUPABASE_SVG_URL}6666.svg`,
  `${SUPABASE_SVG_URL}55555.svg`,
  `${SUPABASE_SVG_URL}44444.svg`,
  `${SUPABASE_SVG_URL}33333.svg`,
  `${SUPABASE_SVG_URL}22222.svg`,
  `${SUPABASE_SVG_URL}11111.svg`,
  `${SUPABASE_SVG_URL}345432.svg`,
  `${SUPABASE_SVG_URL}34543234.svg`,
  `${SUPABASE_SVG_URL}34543.svg`,
  `${SUPABASE_SVG_URL}3454334.svg`,
  `${SUPABASE_SVG_URL}345434.svg`,
  `${SUPABASE_SVG_URL}54345654.svg`,
  `${SUPABASE_SVG_URL}54345643.svg`,
  `${SUPABASE_SVG_URL}weew4.svg`,
  `${SUPABASE_SVG_URL}34565.svg`,
  `${SUPABASE_SVG_URL}hammock.svg`
];

// Keep the original image gallery for fallback
export const originalImageGallery: ImageCategory = {
  futuristic: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Luxury modern villa
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Modern architecture
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Futuristic building
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Luxury compound
    "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Night architecture
  ],
  resort: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Luxury resort
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Pool view
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Luxury interior
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Beachfront
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Modern architecture
  ],
  "digital-art": [
    "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Digital art
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Tech visualization
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Code/digital
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Colorful digital art
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Abstract digital
  ],
  people: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Creative professional
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Business person
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Confident professional
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Woman professional
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Team collaborating
  ],
  community: [
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // People meeting
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Meeting room
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Community gathering
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Young people collaborating
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Team high five
  ],
  artist: [
    "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Artist at work
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Creative workspace
    "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Digital artist
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Artist portrait
    "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Creative person
  ],
  "ai-tech": [
    "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // AI visualization
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Tech abstract
    "https://images.unsplash.com/photo-1677442135068-c81d6a4c6438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // AI concept
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Digital technology
    "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Technology
  ],
};

// For all categories, use the SVG images from Supabase
export const imageGallery: ImageCategory = {
  futuristic: [...svgImages],
  resort: [...svgImages],
  "digital-art": [...svgImages],
  people: [...svgImages],
  community: [...svgImages],
  artist: [...svgImages],
  "ai-tech": [...svgImages],
  workspace: [...svgImages],
  network: [...svgImages],
};

// Function to get a random image from a specific category
export const getRandomImage = (category: string): string => {
  // Always use the SVG images regardless of category
  const randomIndex = Math.floor(Math.random() * svgImages.length)
  return svgImages[randomIndex]
}

// Function to map a prompt to the closest category - this is kept for compatibility
// but doesn't affect which images are shown since all categories now return SVGs
export const getCategoryFromPrompt = (prompt: string): string => {
  const promptLower = prompt.toLowerCase()

  if (promptLower.includes("portrait") || promptLower.includes("artist")) {
    return "artist"
  }

  if (promptLower.includes("ai generating") || promptLower.includes("ai technology")) {
    return "ai-tech"
  }

  if (promptLower.includes("resort") || promptLower.includes("luxury") || promptLower.includes("compound")) {
    return "resort"
  }

  if (promptLower.includes("art") || promptLower.includes("digital content")) {
    return "digital-art"
  }

  if (promptLower.includes("people") || promptLower.includes("professional")) {
    return "people"
  }

  if (
    promptLower.includes("community") ||
    promptLower.includes("team") ||
    promptLower.includes("collaboration") ||
    promptLower.includes("decentralized community")
  ) {
    return "community"
  }

  // Default to futuristic
  return "futuristic"
}

