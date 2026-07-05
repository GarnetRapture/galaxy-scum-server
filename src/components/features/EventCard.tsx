import React from "react"
import { Calendar, Circle, CircleDot, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/shared/utils/cn"

export interface EventCardProps {
  title: string
  description: string
  startDate: string
  endDate: string
  reward: string
  status: "live" | "upcoming" | "ended"
  type: "weekend" | "special" | "experience"
  className?: string
}

export const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  ({ title, description, startDate, endDate, reward, status, type, className }, ref) => {
    const statusColor = {
      live: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      upcoming: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      ended: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    }

    const typeLabel = {
      weekend: "주말 이벤트",
      special: "특별 이벤트",
      experience: "경험치 이벤트",
    }

    const statusLabel = {
      live: "진행중",
      upcoming: "예정",
      ended: "종료",
    }

    const StatusIcon = status === "live" ? CircleDot : Circle

    return (
      <Card ref={ref} className={cn("hover:shadow-lg transition-all", className)}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </p>
            </div>
            <Badge className={statusColor[status]}>
              <StatusIcon className="w-3 h-3" />
              {statusLabel[status]}
            </Badge>
          </div>

          <div className="mb-3">
            <Badge variant="secondary">{typeLabel[type]}</Badge>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {startDate} ~ {endDate}
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              {reward}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)
EventCard.displayName = "EventCard"
