import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { GuideCard } from "@/components/features/GuideCard"
import { GuideListSkeleton } from "@/features/loading/LoadingSkeleton"
import { searchGuides } from "@/shared/api/guides"
import { PRIORITY_LABELS } from "@/shared/types"
import type { ScumContentCategory, BeginnerPriority } from "@/shared/types"
import "@/App.css"
import "@/styles/scum-authentic.css"

const CATEGORIES: Array<{ key: ScumContentCategory; label: string }> = [
  { key: "beginnerGuide", label: "신규 가이드" },
  { key: "character", label: "캐릭터" },
  { key: "skill", label: "스킬" },
  { key: "metabolism", label: "신진대사" },
  { key: "health", label: "건강" },
  { key: "looting", label: "루팅" },
  { key: "crafting", label: "제작" },
  { key: "weapon", label: "무기" },
  { key: "hunting", label: "사냥" },
  { key: "baseBuilding", label: "기지" },
  { key: "vehicle", label: "차량" },
  { key: "galaxyServer", label: "갤럭시" },
  { key: "faq", label: "FAQ" },
]

export function GuidesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("query") || "")
  const [selectedCategory, setSelectedCategory] = useState<ScumContentCategory | "">(
    (searchParams.get("category") as ScumContentCategory) || ""
  )
  const [selectedPriority, setSelectedPriority] = useState<BeginnerPriority | 0>(
    searchParams.get("priority") ? (parseInt(searchParams.get("priority")!) as BeginnerPriority) : 0
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
        <span className="galaxy-kicker">SCUM Guide Library</span>
        <h1>게임 가이드</h1>
        <p>SCUM 시스템, 갤럭시 서버 규칙, 퀘스트, 초보 루트를 같은 기준으로 탐색합니다.</p>
      </section>

      <section className="galaxy-container guide-page-layout">
        <aside className="galaxy-panel guide-filter-panel">
          <div className="guide-filter-panel__head">
            <div>
              <Filter className="w-5 h-5" />
              <h2>필터</h2>
            </div>
            {hasActiveFilters && (
              <button className="scum-button guide-filter-panel__clear" onClick={handleClearFilters}>
                <X className="w-4 h-4" />
                초기화
              </button>
            )}
          </div>

          <div className="guide-filter-group">
            <label className="guide-filter-label" htmlFor="guide-search">키워드 검색</label>
            <div className="guide-search-field">
              <Search className="w-4 h-4" />
              <Input
                id="guide-search"
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="가이드 검색"
              />
            </div>
          </div>

          <div className="guide-filter-group">
            <span className="guide-filter-label">카테고리</span>
            <div className="guide-filter-options guide-filter-options--scroll">
              {CATEGORIES.map((cat) => (
                <label className="guide-filter-option" key={cat.key}>
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat.key}
                    onChange={() => handleCategoryChange(cat.key)}
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="guide-filter-group">
            <span className="guide-filter-label">신규 우선순위</span>
            <div className="guide-filter-options">
              {[1, 2, 3, 4, 5].map((priority) => (
                <label className="guide-filter-option" key={priority}>
                  <input
                    type="checkbox"
                    checked={selectedPriority === priority}
                    onChange={() => handlePriorityChange(priority as BeginnerPriority)}
                  />
                  <span>{PRIORITY_LABELS[priority as BeginnerPriority]} 이상</span>
                </label>
              ))}
            </div>
          </div>

          <div className="guide-filter-result">
            <span>검색 결과</span>
            <strong>{guides.length}개</strong>
          </div>
        </aside>

        <main className="guide-list">
          {isLoading ? (
            <GuideListSkeleton />
          ) : guides.length === 0 ? (
            <div className="galaxy-panel guide-empty-state">
              <Search className="w-10 h-10" />
              <h2>검색 결과가 없습니다</h2>
              <p>{hasActiveFilters ? "필터를 조정해 다시 시도해주세요." : "검색어 또는 카테고리를 선택해보세요."}</p>
              {hasActiveFilters && (
                <button className="scum-button" onClick={handleClearFilters}>
                  <X className="w-4 h-4" />
                  필터 초기화
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
