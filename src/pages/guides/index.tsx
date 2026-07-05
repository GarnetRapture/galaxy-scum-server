import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { GuideCard } from "@/components/features/GuideCard"
import { GuideListSkeleton } from "@/features/loading/LoadingSkeleton"
import { searchGuides } from "@/shared/api/guides"
import { CATEGORY_LABELS, PRIORITY_LABELS } from "@/shared/types"
import type { ScumContentCategory, BeginnerPriority } from "@/shared/types"
import { useLanguage } from "@/i18n"
import { pickLocalizedText } from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import { GUIDE_FILTER_CATEGORIES, guideUrlQuerySchema } from "@/shared/schemas/guide-search.schema"
import "@/App.css"
import "@/styles/scum-authentic.css"

const FILTER_CATEGORIES: ScumContentCategory[] = [...GUIDE_FILTER_CATEGORIES]

export function GuidesPage() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = guideUrlQuerySchema.parse({
    query: searchParams.get("query") ?? undefined,
    category: searchParams.get("category") ?? undefined,
    priority: searchParams.get("priority") ?? undefined,
  })
  const [query, setQuery] = useState(initialQuery.query)
  const [selectedCategory, setSelectedCategory] = useState<ScumContentCategory | "">(
    initialQuery.category ?? ""
  )
  const [selectedPriority, setSelectedPriority] = useState<BeginnerPriority | 0>(
    initialQuery.priority as BeginnerPriority | 0
  )

  const { data: guides = [], isLoading } = useQuery({
    queryKey: ["guides", { query, selectedCategory, selectedPriority }],
    queryFn: () =>
      searchGuides({
        query: query || undefined,
        category: selectedCategory || undefined,
        minPriority: selectedPriority || undefined,
      }),
  })

  const handleSearch = (value: string) => {
    setQuery(value)
    const newParams = new URLSearchParams(searchParams)
    if (value) newParams.set("query", value)
    else newParams.delete("query")
    setSearchParams(newParams)
  }

  const handleCategoryChange = (category: ScumContentCategory) => {
    const newCategory = selectedCategory === category ? "" : category
    setSelectedCategory(newCategory)
    const newParams = new URLSearchParams(searchParams)
    if (newCategory) newParams.set("category", newCategory)
    else newParams.delete("category")
    setSearchParams(newParams)
  }

  const handlePriorityChange = (priority: BeginnerPriority) => {
    const newPriority = selectedPriority === priority ? 0 : priority
    setSelectedPriority(newPriority as BeginnerPriority | 0)
    const newParams = new URLSearchParams(searchParams)
    if (newPriority) newParams.set("priority", newPriority.toString())
    else newParams.delete("priority")
    setSearchParams(newParams)
  }

  const handleClearFilters = () => {
    setQuery("")
    setSelectedCategory("")
    setSelectedPriority(0)
    setSearchParams({})
  }

  const hasActiveFilters = query || selectedCategory || selectedPriority > 0

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head">
        <span className="galaxy-kicker">{t("guides.kicker")}</span>
        <h1>{t("guides.title")}</h1>
        <p>{t("guides.subtitle")}</p>
      </section>

      <section className="galaxy-container guide-page-layout">
        <aside className="galaxy-panel guide-filter-panel">
          <div className="guide-filter-panel__head">
            <div>
              <Filter className="w-5 h-5" />
              <h2>{t("guides.filter")}</h2>
            </div>
            {hasActiveFilters && (
              <button className="scum-button guide-filter-panel__clear" onClick={handleClearFilters}>
                <X className="w-4 h-4" />
                {t("guides.reset")}
              </button>
            )}
          </div>

          <div className="guide-filter-group">
            <label className="guide-filter-label" htmlFor="guide-search">{t("guides.keywordSearch")}</label>
            <div className="guide-search-field">
              <Search className="w-4 h-4" />
              <Input
                id="guide-search"
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={t("guides.searchPlaceholder")}
              />
            </div>
          </div>

          <div className="guide-filter-group">
            <span className="guide-filter-label">{t("guides.category")}</span>
            <div className="guide-filter-options guide-filter-options--scroll">
              {FILTER_CATEGORIES.map((cat) => (
                <label className="guide-filter-option" key={cat}>
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span>{pickLocalizedText(CATEGORY_LABELS[cat], locale)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="guide-filter-group">
            <span className="guide-filter-label">{t("guides.beginnerPriority")}</span>
            <div className="guide-filter-options">
              {[1, 2, 3, 4, 5].map((priority) => (
                <label className="guide-filter-option" key={priority}>
                  <input
                    type="checkbox"
                    checked={selectedPriority === priority}
                    onChange={() => handlePriorityChange(priority as BeginnerPriority)}
                  />
                  <span>
                    {t("guides.priorityAndAbove", undefined, {
                      priority: pickLocalizedText(PRIORITY_LABELS[priority as BeginnerPriority], locale),
                    })}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="guide-filter-result">
            <span>{t("guides.searchResults")}</span>
            <strong>{t("guides.resultCount", undefined, { count: guides.length })}</strong>
          </div>
        </aside>

        <main className="guide-list">
          {isLoading ? (
            <GuideListSkeleton />
          ) : guides.length === 0 ? (
            <div className="galaxy-panel guide-empty-state">
              <Search className="w-10 h-10" />
              <h2>{t("guides.noResults")}</h2>
              <p>{hasActiveFilters ? t("guides.noResultsWithFilter") : t("guides.noResultsNoFilter")}</p>
              {hasActiveFilters && (
                <button className="scum-button" onClick={handleClearFilters}>
                  <X className="w-4 h-4" />
                  {t("guides.clearFilters")}
                </button>
              )}
            </div>
          ) : (
            guides.map((guide) => <GuideCard key={guide.id} guide={guide} />)
          )}
        </main>
      </section>
    </div>
  )
}

export default GuidesPage
