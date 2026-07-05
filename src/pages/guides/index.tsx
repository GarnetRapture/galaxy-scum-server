/**
 * 가이드 검색 페이지 (GitHub 스타일)
 * 경로: /guides
 */

import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { GuideCard } from "@/components/features/GuideCard"
import { GuideListSkeleton } from "@/features/loading/LoadingSkeleton"
import { searchGuides } from "@/shared/api/guides"
import { PRIORITY_LABELS } from "@/shared/types"
import type { ScumContentCategory, BeginnerPriority } from "@/shared/types"
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
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--scum-bg)', color: 'var(--scum-text-primary)', width: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--scum-border)' }}>
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px', paddingTop: '48px', paddingBottom: '48px' }}>
          <h1 className="scum-title" style={{ fontSize: '36px', marginBottom: '8px' }}>게임 가이드</h1>
          <p style={{ fontSize: '16px', color: 'var(--scum-text-secondary)' }}>
            SCUM의 모든 정보를 검색하고 탐색하세요
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 - 필터 */}
          <aside className="lg:col-span-1">
            <div className="scum-card sticky top-20">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 600, color: 'var(--scum-text-primary)', margin: 0 }}>필터</h3>
                {hasActiveFilters && (
                  <button className="scum-button" style={{ padding: '4px 8px', fontSize: '12px' }} onClick={handleClearFilters}>
                    초기화
                  </button>
                )}
              </div>

              {/* 검색 */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--scum-cyan)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  키워드 검색
                </label>
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="가이드 검색..."
                  style={{ fontSize: '13px', backgroundColor: 'var(--scum-bg)', borderColor: 'var(--scum-border)', color: 'var(--scum-text-primary)' }}
                />
              </div>

              {/* 카테고리 필터 */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--scum-cyan)', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  카테고리
                </label>
                <div style={{ display: 'space-y-2', maxHeight: '192px', overflowY: 'auto' }}>
                  {CATEGORIES.map((cat) => (
                    <label key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px' }}>
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.key}
                        onChange={() => handleCategoryChange(cat.key)}
                        style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: 'var(--scum-cyan)' }}
                      />
                      <span style={{ fontSize: '13px', color: 'var(--scum-text-secondary)' }}>
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 우선순위 필터 */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--scum-cyan)', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  신규 우선순위
                </label>
                <div style={{ display: 'space-y-2' }}>
                  {[1, 2, 3, 4, 5].map((priority) => (
                    <label key={priority} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px' }}>
                      <input
                        type="checkbox"
                        checked={selectedPriority === priority}
                        onChange={() => handlePriorityChange(priority as BeginnerPriority)}
                        style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: 'var(--scum-cyan)' }}
                      />
                      <span style={{ fontSize: '13px', color: 'var(--scum-text-secondary)' }}>
                        {PRIORITY_LABELS[priority as BeginnerPriority]} 이상
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 결과 수 */}
              <div style={{ paddingTop: '24px', borderTop: '1px solid var(--scum-border)' }}>
                <p style={{ fontSize: '13px', color: 'var(--scum-text-secondary)', margin: 0 }}>
                  검색 결과: <span style={{ fontWeight: 600, color: 'var(--scum-text-primary)' }}>{guides.length}개</span>
                </p>
              </div>
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="lg:col-span-3">
            {isLoading ? (
              <GuideListSkeleton />
            ) : guides.length === 0 ? (
              <div className="scum-card" style={{ padding: '48px 24px', textAlign: 'center' }}>
                <Search style={{ width: '48px', height: '48px', color: 'var(--scum-border)', marginLeft: 'auto', marginRight: 'auto', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--scum-text-primary)', marginBottom: '8px' }}>
                  검색 결과가 없습니다
                </h3>
                <p style={{ color: 'var(--scum-text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                  {hasActiveFilters
                    ? "필터를 조정해 다시 시도해주세요"
                    : "가이드를 검색해보세요"}
                </p>
                {hasActiveFilters && (
                  <button className="scum-button" onClick={handleClearFilters}>
                    <X className="w-4 h-4" />
                    필터 초기화
                  </button>
                )}
              </div>
            ) : (
              <div style={{ display: 'space-y-4' }}>
                {guides.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default GuidesPage
