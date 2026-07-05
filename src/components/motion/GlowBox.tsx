import type { ReactNode } from 'react'

interface GlowBoxProps {
  children: ReactNode
  className?: string
}

export function GlowBox({ children, className = '' }: GlowBoxProps) {
  return (
    <div
      className={`animate-glow ${className}`}
      style={{
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: 'rgba(0, 217, 255, 0.05)',
        border: '1px solid rgba(0, 217, 255, 0.2)',
      }}
    >
      {children}
    </div>
  )
}
