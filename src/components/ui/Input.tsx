/**
 * Input 컴포넌트
 */

import React from "react"
import { cn } from "@/shared/utils/cn"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-blue-400",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"
