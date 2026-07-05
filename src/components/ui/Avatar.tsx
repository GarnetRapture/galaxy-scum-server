/**
 * Avatar 컴포넌트
 */

import React from "react"
import { cn } from "@/shared/utils/cn"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: "sm" | "md" | "lg"
  fallback?: string
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = "md", fallback, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-gray-50",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt || "avatar"} className="h-full w-full rounded-full object-cover" />
        ) : fallback ? (
          fallback
        ) : (
          children
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"
