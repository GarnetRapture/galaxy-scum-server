export function GuideCardSkeleton() {
  return (
    <div className="guide-skeleton-card">
      <div className="guide-skeleton-card__image"></div>
      <div className="guide-skeleton-card__body">
        <div className="guide-skeleton-line guide-skeleton-line--title"></div>
        <div className="guide-skeleton-line"></div>
        <div className="guide-skeleton-line guide-skeleton-line--short"></div>
        <div className="guide-skeleton-chip-row">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export function GuideListSkeleton() {
  return (
    <div className="guide-list">
      {[...Array(5)].map((_, i) => (
        <GuideCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function GuideDetailSkeleton() {
  return (
    <div className="guide-detail-skeleton">
      <div className="guide-skeleton-line guide-skeleton-line--short"></div>
      <div className="guide-skeleton-line guide-skeleton-line--title"></div>
      <div className="guide-detail-skeleton__media"></div>
      <div className="guide-skeleton-line"></div>
      <div className="guide-skeleton-line"></div>
      <div className="guide-skeleton-line guide-skeleton-line--short"></div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
      <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        ))}
      </div>
    </div>
  )
}
