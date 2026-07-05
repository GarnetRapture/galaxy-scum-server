import { ReactNode } from 'react'

interface MotionButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  delay?: number
}

export function MotionButton({ children, onClick, className = '', delay = 0 }: MotionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`hover-lift ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </button>
  )
}
