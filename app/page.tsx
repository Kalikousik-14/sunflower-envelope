"use client"

import { EnvelopeCard } from "@/components/envelope-card"
import { Sunflower, SunflowerStem } from "@/components/sunflower"

export default function Home() {
  const message = `Dear Kindest Stranger,

I have moved from and to a lot of places, came across a lot of kind people, domestic and international. But no one bonded with me so close within a span of 2 days just by being kind and empathetic. You struck me like the first ray of sunshine over a sunflower field.

Eventhough I'm an extrovert, I have my own space that I rarely let people into. But you entered into it within hours, it was like a candle in a cold cabin. I know you felt comfortable with everyone but I was only comfortable with you.

Hope this friendship continues. Thank you.`

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-green-50 relative overflow-hidden">
      {/* Floating sunflowers background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top decorations - hidden on very small screens */}
        <div className="absolute -top-4 -left-4 opacity-40 animate-bounce hidden sm:block" style={{ animationDuration: "3s" }}>
          <Sunflower size={100} delay={0} />
        </div>
        <div className="absolute -top-2 right-4 sm:right-10 opacity-30 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
          <Sunflower size={50} delay={100} />
        </div>
        <div className="absolute top-16 sm:top-20 left-1/4 opacity-20 animate-bounce hidden sm:block" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
          <Sunflower size={60} delay={200} />
        </div>
        
        {/* Side decorations - smaller on mobile */}
        <div className="absolute top-1/3 -left-6 sm:-left-8 opacity-30 hidden sm:block">
          <Sunflower size={70} delay={50} />
        </div>
        <div className="absolute top-1/2 -right-4 sm:-right-6 opacity-25 hidden sm:block">
          <Sunflower size={65} delay={150} />
        </div>
        
        {/* Bottom bouquet arrangement - hidden on mobile to avoid overlap with card */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end hidden sm:flex">
          <div className="relative flex items-end gap-0">
            {/* Left flowers */}
            <div className="flex flex-col items-center -mr-8 z-10">
              <Sunflower size={45} delay={300} />
              <SunflowerStem height={120} />
            </div>
            
            {/* Center flowers */}
            <div className="flex flex-col items-center z-20">
              <Sunflower size={60} delay={0} />
              <SunflowerStem height={150} />
            </div>
            
            {/* Right flowers */}
            <div className="flex flex-col items-center -ml-8 z-10">
              <Sunflower size={45} delay={150} />
              <SunflowerStem height={120} />
            </div>
          </div>
        </div>
        
        {/* Additional scattered flowers - hidden on mobile */}
        <div className="absolute bottom-40 left-8 opacity-40 hidden sm:block">
          <Sunflower size={50} delay={250} />
        </div>
        <div className="absolute bottom-32 right-12 opacity-35 hidden sm:block">
          <Sunflower size={55} delay={350} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-6 sm:py-12">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-12">
          <div className="flex justify-center mb-2 sm:mb-4">
            <Sunflower size={45} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-amber-800 text-balance px-2">
            A Sunflower Bouquet For You
          </h1>
          <p className="text-amber-700/80 mt-1 sm:mt-2 font-serif text-sm sm:text-base">
            A special message wrapped with sunshine
          </p>
        </header>

        {/* Envelope Card */}
        <div className="py-4 sm:py-8">
          <EnvelopeCard 
            message={message}
            senderName="Your Friend"
            recipient="To The Kindest Sunflower"
          />
        </div>
      </div>

      {/* Ambient particles - fewer on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </main>
  )
}
