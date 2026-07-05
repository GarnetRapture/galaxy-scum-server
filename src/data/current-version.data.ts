/**
 * SCUM 현재 버전 데이터 (1.3.1.0.125621 - INTO THE WILD)
 *
 * 이 파일은 scum-current-version.md의 섹션 2-6 데이터를
 * TypeScript 정적 데이터로 구조화합니다.
 * 각 항목은 출처 ID와 검증 상태를 명시합니다.
 */

import type { GameVersion, VersionFeature } from "@/domains/scum/version/types"
import type { VerifiableContentMeta } from "@/shared/types"

// ============================================================================
// 버전 메타데이터
// ============================================================================

const versionMeta: VerifiableContentMeta = {
  sourceIds: [
    "source-scum-steam-news-2026-06-30",
    "source-scum-steam-store",
  ],
  verificationStatus: "verified",
  knowledgeScope: "official-game-system",
  freshness: "current",
  checkedAt: "2026-07-05T00:00:00Z",
  reviewBefore: "2026-08-05T00:00:00Z",
  reviewReason: "월 1회 Steam News 재검증 스케줄",
}

// ============================================================================
// 기능 데이터 (섹션 2 기능 테이블)
// ============================================================================

const features: VersionFeature[] = [
  {
    id: "feature-001-land-animals",
    title: "랜드 동물 추가",
    description: "새로운 야생동물 종류 추가, 자유로운 배회 행동 패턴",
    category: "feature",
    status: "partial",
    affectsGameplay: true,
    sourceIds: ["source-scum-into-wild-wildlife"],
  },
  {
    id: "feature-002-wildlife-server-control",
    title: "오픈월드 사냥",
    description: "동물 서버 컨트롤 추가 (관리자 설정 가능)",
    category: "feature",
    status: "verified",
    affectsGameplay: true,
    sourceIds: ["source-scum-into-wild-wildlife-config"],
  },
  {
    id: "feature-003-anniversary-quest",
    title: "1.0 퀘스트",
    description: "SCUM 1.0 기념 특별 퀘스트 시스템",
    category: "feature",
    status: "partial",
    affectsGameplay: true,
    sourceIds: ["source-scum-steam-news-2026-06-30"],
  },
  {
    id: "feature-004-trophy-fish",
    title: "트로피 물고기",
    description: "낚시 획득 물고기를 기지 벽에 전시 장식",
    category: "feature",
    status: "partial",
    affectsGameplay: false,
    sourceIds: ["source-scum-steam-news-2026-06-30"],
  },
  {
    id: "feature-005-improvised-cooking",
    title: "즉흥 요리",
    description: "새로운 요리 조합 및 임시 조리 레시피 추가",
    category: "feature",
    status: "partial",
    affectsGameplay: true,
    sourceIds: ["source-scum-into-wild-cooking"],
  },
  {
    id: "feature-006-custom-tombstone",
    title: "커스텀 묘비",
    description: "기지 내 커스터마이징 가능한 묘비 장식 추가",
    category: "feature",
    status: "verified",
    affectsGameplay: false,
    sourceIds: ["source-scum-steam-news-2026-06-30"],
  },
  {
    id: "feature-007-new-server-settings",
    title: "신규 설정",
    description: "INTO THE WILD 관련 새 서버 옵션 추가",
    category: "feature",
    status: "needs-review",
    affectsGameplay: true,
    sourceIds: ["source-scum-steam-news-2026-06-30"],
  },
  {
    id: "feature-008-qol-improvements",
    title: "QoL 개선",
    description: "게임 삶의 질 개선 사항 여러 건",
    category: "qol",
    status: "needs-review",
    affectsGameplay: false,
    sourceIds: ["source-scum-steam-news-2026-06-30"],
  },
]

// ============================================================================
// 현재 버전 데이터 (섹션 1 확인 테이블)
// ============================================================================

export const currentVersion: GameVersion = {
  id: "version-1311-125621",
  versionNumber: "1.3.1.0.125621",
  updateName: "SCUM: INTO THE WILD - June Update",
  releaseDate: "2026-06-30",
  officialReleaseDate: "2025-06-17",
  features: features.map((f) => f.title),
  bugFixes: [
    "여러 버그 수정 (패치노트 참조)",
  ],
  qolImprovements: [
    "게임 삶의 질 개선 사항 (세부사항 needs-review)",
  ],
  meta: versionMeta,
}

// ============================================================================
// 기능별 상세 데이터 내보내기
// ============================================================================

export const versionFeatures = features

export const getFeatureById = (id: string): VersionFeature | undefined => {
  return features.find((f) => f.id === id)
}

export const getFeaturesByStatus = (
  status: VersionFeature["status"]
): VersionFeature[] => {
  return features.filter((f) => f.status === status)
}

export const verifiedFeatures = features.filter((f) => f.status === "verified")
export const partialFeatures = features.filter((f) => f.status === "partial")
export const needsReviewFeatures = features.filter(
  (f) => f.status === "needs-review"
)

// ============================================================================
// 검증 상태 요약
// ============================================================================

export const versionSummary = {
  versionNumber: currentVersion.versionNumber,
  updateName: currentVersion.updateName,
  releaseDate: currentVersion.releaseDate,
  totalFeatures: features.length,
  verifiedCount: verifiedFeatures.length,
  partialCount: partialFeatures.length,
  needsReviewCount: needsReviewFeatures.length,
  verificationStatus: "mixed" as const,
  displayText: `SCUM ${currentVersion.versionNumber} (${currentVersion.updateName}) - 기능 ${verifiedFeatures.length}/8 검증 완료`,
}
