import React from "react"
import { cn } from "@/shared/utils/cn"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4 border-2",
      md: "h-8 w-8 border-2",
      lg: "h-12 w-12 border-3",
    }
    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-blue-600 border-r-transparent dark:border-blue-400",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = "Spinner"
