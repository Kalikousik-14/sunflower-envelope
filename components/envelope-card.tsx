"use client"

import { useState } from "react"
import { Sunflower } from "./sunflower"

interface EnvelopeCardProps {
  message: string
  senderName?: string
  recipient?: string
}

export function EnvelopeCard({ message, senderName = "Your Friend", recipient = "For You" }: EnvelopeCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleEnvelopeClick = () => {
    if (!isFlipped && !isOpen) {
      setIsFlipped(true)
    }
  }

  const handleSealClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isFlipped && !isOpen) {
      setIsOpen(true)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsFlipped(false)
  }

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ perspective: "1000px" }}>
      {/* Card that slides up when envelope opens */}
      <div
        className={`absolute inset-x-4 bg-card rounded-lg shadow-lg transition-all duration-700 ease-out ${
          isOpen ? "z-20" : "z-0"
        }`}
        style={{
          height: isOpen ? "auto" : "280px",
          minHeight: "280px",
          transform: isOpen ? "translateY(-60px)" : "translateY(0)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-6 pt-8">
          {/* Decorative sunflowers at top */}
          <div className="flex justify-center gap-2 mb-4">
            <Sunflower size={40} delay={100} />
            <Sunflower size={50} delay={0} />
            <Sunflower size={40} delay={200} />
          </div>
          
          {/* Message content */}
          <div className="text-center space-y-4">
            <p className="text-card-foreground leading-relaxed text-balance whitespace-pre-line font-serif">
              {message}
            </p>
            
            <div className="pt-4 border-t border-primary/20">
              <p className="text-muted-foreground italic font-serif">With love,</p>
              <p className="text-card-foreground font-medium font-serif">{senderName}</p>
            </div>
          </div>
          
          {/* Bottom bouquet decoration */}
          <div className="flex justify-center items-end mt-4 gap-0">
            <div className="transform -rotate-12 -mr-2">
              <Sunflower size={28} delay={400} />
            </div>
            <div className="transform rotate-6 -mr-2">
              <Sunflower size={24} delay={300} />
            </div>
            <Sunflower size={35} delay={200} />
            <div className="transform -rotate-6 -ml-2">
              <Sunflower size={24} delay={350} />
            </div>
            <div className="transform rotate-12 -ml-2">
              <Sunflower size={28} delay={450} />
            </div>
          </div>
        </div>
      </div>

      {/* Envelope with flip animation */}
      <div
        className={`relative transition-all duration-500 ${
          isOpen ? "translate-y-40" : "translate-y-0"
        }`}
        style={{ 
          perspective: "1000px",
        }}
      >
        {/* Envelope container for flip */}
        <div
          onClick={handleEnvelopeClick}
          className={`relative transition-transform duration-700 ease-in-out ${!isFlipped && !isOpen ? 'cursor-pointer' : ''}`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT of envelope */}
          <div 
            className="relative bg-amber-100 rounded-lg shadow-xl overflow-hidden"
            style={{ 
              height: "220px",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Envelope texture pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(139, 90, 43, 0.1) 10px,
                  rgba(139, 90, 43, 0.1) 20px
                )`
              }} />
            </div>

            {/* Envelope inner shadow */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-200/50 to-transparent" />
            
            {/* Recipient text on envelope front */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-serif italic text-xl md:text-2xl text-amber-800/90 text-center px-4">
                {recipient}
              </p>
            </div>
            
            {/* Decorative sunflower corners */}
            <div className="absolute bottom-2 left-2 opacity-60">
              <Sunflower size={35} />
            </div>
            <div className="absolute bottom-2 right-2 opacity-60">
              <Sunflower size={35} />
            </div>
          </div>

          {/* BACK of envelope (shown after flip) */}
          <div 
            className="absolute inset-0 bg-amber-100 rounded-lg shadow-xl overflow-hidden"
            style={{ 
              height: "220px",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Envelope texture pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 10px,
                  rgba(139, 90, 43, 0.1) 10px,
                  rgba(139, 90, 43, 0.1) 20px
                )`
              }} />
            </div>

            {/* Envelope flap on back */}
            <div
              className="absolute inset-x-0 top-0 origin-top transition-transform duration-700 ease-in-out z-10"
              style={{
                transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Flap front */}
              <div
                className="relative"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <svg viewBox="0 0 400 120" className="w-full" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}>
                  <path
                    d="M0 0 L200 100 L400 0 L400 0 L0 0 Z"
                    fill="#D4A574"
                  />
                  <path
                    d="M0 0 L200 100 L400 0"
                    fill="none"
                    stroke="#C4956A"
                    strokeWidth="2"
                  />
                </svg>
                
                {/* Wax seal with button */}
                {!isOpen && isFlipped && (
                  <button
                    onClick={handleSealClick}
                    className="absolute left-1/2 -translate-x-1/2 top-8 w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group cursor-pointer border-4 border-amber-500/50"
                    style={{
                      boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.3)"
                    }}
                  >
                    {/* Sunflower emblem on seal */}
                    <div className="relative">
                      <Sunflower size={40} />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity bg-amber-700/80 rounded-full">
                        Open
                      </span>
                    </div>
                  </button>
                )}
              </div>

              {/* Flap back (inside) */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <svg viewBox="0 0 400 120" className="w-full">
                  <path
                    d="M0 0 L200 100 L400 0 L400 0 L0 0 Z"
                    fill="#C4956A"
                  />
                </svg>
              </div>
            </div>

            {/* Back content area */}
            <div className="absolute inset-0 flex items-center justify-center pt-16">
              <div className="opacity-30">
                <Sunflower size={60} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      {!isFlipped && !isOpen && (
        <p className="text-center mt-6 text-muted-foreground animate-pulse">
          Click the envelope to turn it over
        </p>
      )}

      {isFlipped && !isOpen && (
        <p className="text-center mt-6 text-muted-foreground animate-pulse">
          Click the seal to open
        </p>
      )}

      {/* Close button when open */}
      {isOpen && (
        <button
          onClick={handleClose}
          className="absolute -top-28 right-0 text-muted-foreground hover:text-foreground transition-colors text-sm underline"
        >
          Close card
        </button>
      )}
    </div>
  )
}
