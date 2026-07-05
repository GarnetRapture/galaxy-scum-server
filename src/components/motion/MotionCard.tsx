import { ReactNode } from 'react'

interface MotionCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function MotionCard({ children, delay = 0, className = '' }: MotionCardProps) {
  return (
    <div
      className={`animate-slide-in-up ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}
