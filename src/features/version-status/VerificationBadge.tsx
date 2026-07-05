import type { SVGProps, ForwardRefExoticComponent } from "react"
import type { VerificationStatus } from "@/shared/types"
import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  XCircle,
  Lock,
} from "lucide-react"

export interface VerificationBadgeProps {
  status: VerificationStatus
  size?: "sm" | "md" | "lg"
}

type LucideIcon = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    size?: string | number
    absoluteStrokeWidth?: boolean
  }
> & {
  displayName?: string
}

type BadgeConfig = {
  label: string
  bgColor: string
  textColor: string
  borderColor: string
  icon: LucideIcon
}

const statusConfig = {
  verified: {
    label: "확인 완료",
    bgColor: "bg-emerald-950/40",
    textColor: "text-emerald-200",
    borderColor: "border-emerald-500/30",
    icon: CheckCircle2,
  },
  partial: {
    label: "내용 확인 중",
    bgColor: "bg-amber-950/40",
    textColor: "text-amber-200",
    borderColor: "border-amber-500/30",
    icon: AlertCircle,
  },
  "needs-review": {
    label: "업데이트 확인 필요",
    bgColor: "bg-orange-950/40",
    textColor: "text-orange-200",
    borderColor: "border-orange-500/30",
    icon: AlertTriangle,
  },
  deprecated: {
    label: "사용 불가",
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    borderColor: "border-red-300",
    icon: XCircle,
  },
  "server-local-only": {
    label: "갤럭시 전용",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    borderColor: "border-blue-300",
    icon: Lock,
  },
} satisfies Record<VerificationStatus, BadgeConfig>

export function VerificationBadge({ status, size = "md" }: VerificationBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  return (
    <div
      className={`inline-flex items-center ${sizeClasses[size]} rounded-md border ${config.bgColor} ${config.borderColor}`}
    >
      <Icon className={`${iconSizes[size]} ${config.textColor}`} />
      <span className={config.textColor}>{config.label}</span>
    </div>
  )
}
