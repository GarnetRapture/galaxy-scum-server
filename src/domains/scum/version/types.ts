/**
 * SCUM 게임 버전 타입 정의
 */

import type { VerifiableContentMeta } from "@/shared/types"

// ============================================================================
// 게임 버전 정보
// ============================================================================

export type GameVersion = {
  id: string // 버전 고유 ID (예: "version-1311")
  versionNumber: string // 버전번호 (예: "1.3.1.0.125621")
  updateName: string // 업데이트명 (예: "INTO THE WILD")
  releaseDate: string // 출시 날짜 (ISO 8601)
  officialReleaseDate?: string // 공식 정식 출시일 (ISO 8601, 선택)
  features: string[] // 주요 기능 목록
  bugFixes: string[] // 버그 수정 목록
  qolImprovements: string[] // QoL 개선 사항
  meta: VerifiableContentMeta // 자료 메타데이터
}

export type VersionInfo = {
  current: GameVersion
  previous?: GameVersion[]
}

// ============================================================================
// 버전별 기능 정보
// ============================================================================

export type VersionFeature = {
  id: string
  title: string
  description: string
  category: "feature" | "bugfix" | "qol"
  status: "verified" | "partial" | "needs-review"
  affectsGameplay: boolean // 게임플레이에 영향을 주는지 여부
  sourceIds: string[] // 출처 ID
}

export type VersionChangelog = {
  versionId: string
  features: VersionFeature[]
  publishedAt: string // ISO 8601
}
