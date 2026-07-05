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
    <div className="guide-detail-skeleton">
      <div className="guide-skeleton-line guide-skeleton-line--title"></div>
      <div className="guide-skeleton-line guide-skeleton-line--short"></div>
      <div className="wiki-section-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="guide-detail-skeleton__media"></div>
        ))}
      </div>
    </div>
  )
}
