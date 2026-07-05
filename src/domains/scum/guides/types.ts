/**
 * SCUM 가이드 타입 정의
 */

import type {
  ScumContentCategory,
  BeginnerPriority,
  VerifiableContentMeta,
} from "@/shared/types"

// ============================================================================
// 가이드 엔트리
// ============================================================================

export type GuideEntry = {
  // 기본 정보
  id: string // 고유 식별자 (예: "guide-001")
  slug: string // URL 친화적 슬러그 (예: "beginner-start")
  title: string // 가이드 제목
  category: ScumContentCategory // 카테고리

  // 콘텐츠
  summary: string // 요약 (1-2줄)
  body: string // 상세 내용 (Markdown)
  tags: string[] // 검색 태그

  // 메타정보
  beginnerPriority: BeginnerPriority // 신규 유저 우선순위 (1-5)
  meta: VerifiableContentMeta // 검증 메타데이터

  // 관계
  relatedGuideIds?: string[] // 관련 가이드 ID 목록 (최대 5개)
}

// ============================================================================
// 가이드 검색 및 페이지네이션
// ============================================================================

export type GuideSearchFilter = {
  query?: string // 키워드
  category?: ScumContentCategory // 카테고리 필터
  minPriority?: BeginnerPriority // 최소 우선순위
  tags?: string[] // 태그 필터
  page?: number
  pageSize?: number
}

export type GuidePage = {
  total: number
  items: GuideEntry[]
  hasMore: boolean
}

// ============================================================================
// 가이드 검색 결과
// ============================================================================

export type GuideSearchResult = GuideEntry & {
  relevanceScore?: number // 검색 관련성 점수 (0-1)
  matchedTags?: string[] // 매칭된 태그
}
