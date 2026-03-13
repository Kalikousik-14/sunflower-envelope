"use client"

interface SunflowerProps {
  size?: number
  className?: string
  delay?: number
}

export function Sunflower({ size = 80, className = "", delay = 0 }: SunflowerProps) {
  const petalCount = 16
  const petals = Array.from({ length: petalCount }, (_, i) => i)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Petals */}
      {petals.map((_, i) => {
        const angle = (i * 360) / petalCount
        return (
          <ellipse
            key={i}
            cx="50"
            cy="25"
            rx="8"
            ry="20"
            fill="#F6B93B"
            transform={`rotate(${angle} 50 50)`}
            className="origin-center"
          >
            <animate
              attributeName="ry"
              values="20;22;20"
              dur="2s"
              begin={`${i * 0.1}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        )
      })}
      
      {/* Inner petals */}
      {petals.map((_, i) => {
        const angle = (i * 360) / petalCount + 11.25
        return (
          <ellipse
            key={`inner-${i}`}
            cx="50"
            cy="30"
            rx="6"
            ry="15"
            fill="#F8C43A"
            transform={`rotate(${angle} 50 50)`}
          />
        )
      })}
      
      {/* Center */}
      <circle cx="50" cy="50" r="18" fill="#5D4037" />
      <circle cx="50" cy="50" r="14" fill="#6D4C41" />
      
      {/* Seeds pattern */}
      {Array.from({ length: 20 }, (_, i) => {
        const angle = (i * 137.5 * Math.PI) / 180
        const r = 3 + (i / 20) * 10
        const x = 50 + Math.cos(angle) * r
        const y = 50 + Math.sin(angle) * r
        return (
          <circle
            key={`seed-${i}`}
            cx={x}
            cy={y}
            r={1.5}
            fill="#4E342E"
          />
        )
      })}
    </svg>
  )
}

export function SunflowerStem({ height = 200, className = "" }: { height?: number; className?: string }) {
  return (
    <svg
      width="40"
      height={height}
      viewBox={`0 0 40 ${height}`}
      className={className}
    >
      {/* Main stem */}
      <path
        d={`M20 0 Q25 ${height * 0.3} 20 ${height * 0.5} Q15 ${height * 0.7} 20 ${height}`}
        stroke="#558B2F"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Leaf 1 */}
      <path
        d={`M20 ${height * 0.3} Q35 ${height * 0.25} 38 ${height * 0.35} Q35 ${height * 0.4} 20 ${height * 0.35}`}
        fill="#7CB342"
      />
      
      {/* Leaf 2 */}
      <path
        d={`M20 ${height * 0.55} Q5 ${height * 0.5} 2 ${height * 0.6} Q5 ${height * 0.65} 20 ${height * 0.6}`}
        fill="#8BC34A"
      />
    </svg>
  )
}
