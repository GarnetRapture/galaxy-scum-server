/**
 * GuideCard 컴포넌트 (GitHub 스타일)
 */

import React from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/shared/utils/cn"
import type { GuideEntry } from "@/domains/scum/guides/types"
import { CATEGORY_LABELS, PRIORITY_LABELS } from "@/shared/types"
import { getCategoryIcon } from "@/shared/constants/icons"

export interface GuideCardProps {
  guide: GuideEntry
  className?: string
}

export const GuideCard = React.forwardRef<HTMLDivElement, GuideCardProps>(
  ({ guide, className }, ref) => {
    const CategoryIcon = getCategoryIcon(guide.category)

    return (
    <Link to={`/guides/${guide.id}`}>
      <Card
        ref={ref}
        className={cn(
          "group cursor-pointer transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700",
          className
        )}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                {guide.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {guide.summary}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-600 flex-shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">
              <CategoryIcon className="w-3 h-3" /> {CATEGORY_LABELS[guide.category]}
            </Badge>
            <Badge variant="default">
              우선순위: {PRIORITY_LABELS[guide.beginnerPriority]}
            </Badge>
            {guide.meta.verificationStatus === "verified" && (
              <Badge variant="success"><CheckCircle2 className="w-3 h-3" /> 검증됨</Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {guide.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs text-gray-700 dark:text-gray-300"
              >
                #{tag}
              </span>
            ))}
            {guide.tags.length > 3 && (
              <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400 px-2">
                +{guide.tags.length - 3}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
    )
  }
)
GuideCard.displayName = "GuideCard"
