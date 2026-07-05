import React from "react"
import { X } from "lucide-react"
import { cn } from "@/shared/utils/cn"

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: () => void
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, onRemove, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-[var(--scum-border)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-sm text-[var(--scum-text-secondary)]",
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-[var(--scum-cyan)]">
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  )
)
Tag.displayName = "Tag"
