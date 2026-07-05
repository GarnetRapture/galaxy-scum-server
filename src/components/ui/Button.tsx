import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md border font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--scum-cyan)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-[rgba(0,217,255,0.35)] bg-[rgba(0,217,255,0.12)] text-[var(--scum-cyan)] hover:bg-[rgba(0,217,255,0.18)]",
        secondary: "border-[var(--scum-border)] bg-[rgba(255,255,255,0.04)] text-[var(--scum-text-primary)] hover:bg-[rgba(255,255,255,0.08)]",
        outline: "border-[var(--scum-border)] bg-transparent text-[var(--scum-text-primary)] hover:border-[rgba(0,217,255,0.35)] hover:bg-[rgba(0,217,255,0.08)]",
        ghost: "border-transparent bg-transparent text-[var(--scum-text-secondary)] hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--scum-text-primary)]",
        danger: "border-[rgba(255,23,68,0.35)] bg-[rgba(255,23,68,0.12)] text-[var(--scum-red)] hover:bg-[rgba(255,23,68,0.18)]",
        success: "border-[rgba(0,255,136,0.35)] bg-[rgba(0,255,136,0.12)] text-[var(--scum-green)] hover:bg-[rgba(0,255,136,0.18)]",
      },
      size: {
        sm: "min-h-9 px-3 py-1.5 text-sm",
        md: "min-h-10 px-4 py-2 text-sm",
        lg: "min-h-12 px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || isLoading}
      ref={ref}
      {...props}
    >
      {isLoading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />}
      {children}
    </button>
  )
)
Button.displayName = "Button"
