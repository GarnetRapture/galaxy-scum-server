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
        "inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-gray-900 dark:hover:text-gray-200">
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  )
)
Tag.displayName = "Tag"
