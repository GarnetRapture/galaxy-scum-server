import type { SVGProps, ForwardRefExoticComponent } from "react"
import type { VerificationStatus } from "@/shared/types"
import { VERIFICATION_STATUS_LABELS } from "@/shared/types"
import { useLanguage } from "@/i18n"
import { pickLocalizedText } from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
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
  bgColor: string
  textColor: string
  borderColor: string
  icon: LucideIcon
}

const statusConfig = {
  verified: {
    bgColor: "bg-emerald-950/40",
    textColor: "text-emerald-200",
    borderColor: "border-emerald-500/30",
    icon: CheckCircle2,
  },
  partial: {
    bgColor: "bg-amber-950/40",
    textColor: "text-amber-200",
    borderColor: "border-amber-500/30",
    icon: AlertCircle,
  },
  "needs-review": {
    bgColor: "bg-orange-950/40",
    textColor: "text-orange-200",
    borderColor: "border-orange-500/30",
    icon: AlertTriangle,
  },
  deprecated: {
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    borderColor: "border-red-300",
    icon: XCircle,
  },
  "server-local-only": {
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    borderColor: "border-blue-300",
    icon: Lock,
  },
} satisfies Record<VerificationStatus, BadgeConfig>

export function VerificationBadge({ status, size = "md" }: VerificationBadgeProps) {
  const { language } = useLanguage()
  const locale = language as LocaleCode
  const config = statusConfig[status]
  const label = pickLocalizedText(VERIFICATION_STATUS_LABELS[status], locale)
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
      <span className={config.textColor}>{label}</span>
    </div>
  )
}
