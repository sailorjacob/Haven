const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black z-10"></div>

      {/* Animated glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#E6B325] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
      <div
        className="absolute top-40 right-1/4 w-80 h-80 bg-[#E6B325] rounded-full blur-[150px] opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-64 h-64 bg-[#E6B325] rounded-full blur-[150px] opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Honeycomb pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=30&width=30')] bg-repeat opacity-5"></div>

      {/* Golden accent lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6B325]/20 to-transparent"></div>
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6B325]/20 to-transparent"></div>
    </div>
  )
}

export default HeroBackground

