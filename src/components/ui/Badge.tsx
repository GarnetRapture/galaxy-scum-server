import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/utils/cn"

const badgeVariants = cva("inline-flex min-h-7 items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-bold transition-colors", {
  variants: {
    variant: {
      default: "border-[rgba(0,217,255,0.24)] bg-[rgba(0,217,255,0.08)] text-[var(--scum-cyan)]",
      secondary: "border-[var(--scum-border)] bg-[rgba(255,255,255,0.04)] text-[var(--scum-text-secondary)]",
      success: "border-[rgba(0,255,136,0.24)] bg-[rgba(0,255,136,0.08)] text-[var(--scum-green)]",
      warning: "border-[rgba(255,107,53,0.28)] bg-[rgba(255,107,53,0.08)] text-[var(--scum-orange)]",
      danger: "border-[rgba(255,23,68,0.28)] bg-[rgba(255,23,68,0.08)] text-[var(--scum-red)]",
      purple: "border-[rgba(0,217,255,0.22)] bg-[rgba(0,217,255,0.06)] text-[var(--scum-cyan)]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
)
Badge.displayName = "Badge"
