/**
 * 로딩 스켈레톤 컴포넌트
 */

export function GuideCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3"></div>
      <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-full mb-4"></div>
      <div className="flex gap-2">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  )
}

export function GuideListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <GuideCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function GuideDetailSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
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
