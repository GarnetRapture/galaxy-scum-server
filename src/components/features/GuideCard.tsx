import React from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
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
    <Link to={`/guides/${guide.id}`} className="guide-card-link">
      <Card
        ref={ref}
        className={cn(
          "guide-card group cursor-pointer transition-all",
          className
        )}
      >
        <CardContent className="guide-card__content">
          <img className="guide-card__image" src={guide.image.src} alt={guide.image.alt} />
          <div className="guide-card__body">
            <div className="flex-1 min-w-0">
              <h3 className="guide-card__title">
                {guide.title}
              </h3>
              <p className="guide-card__summary">
                {guide.summary}
              </p>
            </div>
            <ChevronRight className="guide-card__arrow" />

            <div className="guide-card__badges">
              <Badge variant="secondary">
                <CategoryIcon className="w-3 h-3" /> {CATEGORY_LABELS[guide.category]}
              </Badge>
              <Badge variant="default">
                우선순위: {PRIORITY_LABELS[guide.beginnerPriority]}
              </Badge>
            </div>

            <div className="guide-card__tags">
              {guide.tags.slice(0, 3).map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
              {guide.tags.length > 3 && <span>+{guide.tags.length - 3}</span>}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
    )
  }
)
GuideCard.displayName = "GuideCard"
