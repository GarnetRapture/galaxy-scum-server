import type { ReactNode } from 'react'

interface AnimatedListProps {
  items: Array<{ id: string | number; content: ReactNode }>
  className?: string
  itemClassName?: string
  staggerDelay?: number
}

export function AnimatedList({
  items,
  className = '',
  itemClassName = '',
  staggerDelay = 50,
}: AnimatedListProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`animate-slide-in-up ${itemClassName}`}
          style={{
            animationDelay: `${index * staggerDelay}ms`,
            animationFillMode: 'both',
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
