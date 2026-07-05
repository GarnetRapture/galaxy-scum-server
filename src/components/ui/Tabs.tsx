import React from "react"
import { cn } from "@/shared/utils/cn"

export const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (v: string) => void }>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-2", className)} {...props} />
  )
)
Tabs.displayName = "Tabs"

export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("inline-flex min-h-10 items-center justify-center gap-1 rounded-md border border-[var(--scum-border)] bg-[rgba(17,21,46,0.82)] p-1 text-[var(--scum-text-secondary)]", className)} {...props} />
  )
)
TabsList.displayName = "TabsList"

export const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("inline-flex min-h-8 items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-bold transition-colors hover:bg-[rgba(0,217,255,0.08)] hover:text-[var(--scum-cyan)]", className)} {...props} />
  )
)
TabsTrigger.displayName = "TabsTrigger"

export const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--scum-cyan)]", className)} {...props} />
  )
)
TabsContent.displayName = "TabsContent"
