import React from "react"
import { cn } from "@/shared/utils/cn"

export const Dialog = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("fixed inset-0 z-50 bg-black/50 dark:bg-black/70", className)} {...props} />
  )
)
Dialog.displayName = "Dialog"

export const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("fixed left-[50%] top-[50%] z-50 w-[calc(100%_-_32px)] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border border-[var(--scum-border)] bg-[rgba(17,21,46,0.96)] p-6 text-[var(--scum-text-primary)] shadow-2xl", className)}
      {...props}
    />
  )
)
DialogContent.displayName = "DialogContent"

export const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)} {...props} />
  )
)
DialogHeader.displayName = "DialogHeader"

export const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-lg font-bold leading-none tracking-normal text-[var(--scum-text-primary)]", className)} {...props} />
  )
)
DialogTitle.displayName = "DialogTitle"
