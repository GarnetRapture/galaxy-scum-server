import { ReactNode } from 'react'

interface MotionTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function MotionText({ children, className = '', delay = 0, duration = 500 }: MotionTextProps) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}
