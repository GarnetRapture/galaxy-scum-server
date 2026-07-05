/**
 * 공용 타입 정의
 * 프로젝트 전역에서 사용되는 기본 타입들
 */

import type { LocalizedText } from "@/domains/galaxy-server/content/types"

// ============================================================================
// 1. 출처 신뢰도 및 자료 상태 타입
// ============================================================================

export type SourceReliability =
  | "official"      // 공식 (Gamepires 공식 사이트, Steam Store)
  | "steam"         // Steam 공식 채널
  | "wiki"          // SCUM 공식/준공식 위키
  | "community"     // 플레이어 커뮤니티 정보
  | "server-local"  // 갤럭시 서버 로컬 정보
  | "unverified"    // 확인되지 않았거나 오래된 정보

export type VerificationStatus =
  | "verified"      // 공식 자료 기준 확인 완료
  | "partial"       // 내용 확인 중
  | "needs-review"  // 업데이트 확인 필요
  | "deprecated"    // 패치로 더 이상 유효하지 않음
  | "server-local-only" // 갤럭시 서버 전용 정보

export type ContentFreshness =
  | "current"       // 최신 정보
  | "patch-sensitive" // 패치에 따라 변경될 가능성 높음
  | "stale-risk"    // 오래된 정보일 가능성
  | "unknown"       // 신선도 불명

export type ContentKnowledgeKind =
  | "official-game-system"   // SCUM 공식 게임 시스템
  | "server-local-policy"    // 갤럭시 서버 전용 정책
  | "beginner-guide"         // 신규 유저 대상
  | "advanced-guide"         // 중고급 플레이어 대상
  | "patch-dependent"        // 패치에 따라 변경되는 내용
  | "community-derived"      // 커뮤니티 확인 내용

// ============================================================================
// 2. 콘텐츠 분류 타입
// ============================================================================

export type ScumContentCategory =
  | "beginnerGuide"
  | "character"
  | "skill"
  | "metabolism"
  | "health"
  | "injury"
  | "looting"
  | "crafting"
  | "weapon"
  | "combat"
  | "hunting"
  | "fishing"
  | "cooking"
  | "farming"
  | "baseBuilding"
  | "vehicle"
  | "trader"
  | "fame"
  | "location"
  | "bunker"
  | "radiation"
  | "contamination"
  | "enemy"
  | "quest"
  | "cargoDrop"
  | "serverSetting"
  | "galaxyServer"
  | "patchNotes"
  | "galaxyDiscordShop"
  | "galaxyAdminContact"
  | "galaxyRulesEnforcement"
  | "beginnerRoute"
  | "gearPreset"
  | "beginnerChecklist"
  | "dangerMap"
  | "galaxyEvent"
  | "faq"

export type BeginnerPriority = 1 | 2 | 3 | 4 | 5

// ============================================================================
// 3. 출처 참조 및 자료 메타데이터
// ============================================================================

export type SourceRef = {
  id: string                    // 고유 식별자 (예: "source-scum-steam-store")
  title: string                 // 출처명 (예: "SCUM Steam Store")
  url?: string                  // 링크 URL (선택사항)
  reliability: SourceReliability // 신뢰도 등급 (Tier 1-6)
  checkedAt: string            // 마지막 확인 날짜 (ISO 8601)
  notes?: string               // 추가 설명 (선택사항)
}

export type VerifiableContentMeta = {
  sourceIds: string[]           // 참고한 출처 ID 목록 (필수, 1개 이상)
  verificationStatus: VerificationStatus
  knowledgeScope: ContentKnowledgeKind
  freshness: ContentFreshness
  checkedAt: string            // 마지막 확인 (ISO 8601)
  reviewBefore?: string        // 업데이트 확인 권장 날짜 (ISO 8601)
  reviewReason?: string        // 업데이트 확인 이유
}

// ============================================================================
// 4. API 응답 타입
// ============================================================================

export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  timestamp: string            // ISO 8601
}

export type PaginatedResponse<T> = {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// ============================================================================
// 5. 라벨 상수
// ============================================================================

export const CATEGORY_LABELS: Record<ScumContentCategory, LocalizedText> = {
  beginnerGuide: { ko: "신규 유저 시작", en: "New Player Start" },
  character: { ko: "캐릭터 생성", en: "Character Creation" },
  skill: { ko: "능력치/스킬", en: "Attributes/Skills" },
  metabolism: { ko: "대사/영양/수분/피로", en: "Metabolism/Nutrition/Hydration/Fatigue" },
  health: { ko: "건강/부상/질병", en: "Health/Injury/Illness" },
  injury: { ko: "부상/질병/치료", en: "Injury/Illness/Treatment" },
  looting: { ko: "루팅", en: "Looting" },
  crafting: { ko: "제작", en: "Crafting" },
  weapon: { ko: "무기/탄약", en: "Weapons/Ammo" },
  combat: { ko: "전투", en: "Combat" },
  hunting: { ko: "사냥", en: "Hunting" },
  fishing: { ko: "낚시", en: "Fishing" },
  cooking: { ko: "요리", en: "Cooking" },
  farming: { ko: "농사", en: "Farming" },
  baseBuilding: { ko: "기지 건설", en: "Base Building" },
  vehicle: { ko: "차량", en: "Vehicles" },
  trader: { ko: "거래소/상인", en: "Traders" },
  fame: { ko: "명성/평판", en: "Fame/Reputation" },
  location: { ko: "맵/지역", en: "Map/Locations" },
  bunker: { ko: "벙커/군사지역", en: "Bunkers/Military Zones" },
  radiation: { ko: "방사능/오염", en: "Radiation/Contamination" },
  contamination: { ko: "오염", en: "Contamination" },
  enemy: { ko: "적", en: "Enemies" },
  quest: { ko: "퀘스트", en: "Quests" },
  cargoDrop: { ko: "카고 드랍", en: "Cargo Drops" },
  serverSetting: { ko: "서버 설정", en: "Server Settings" },
  galaxyServer: { ko: "갤럭시 서버", en: "Galaxy Server" },
  patchNotes: { ko: "패치노트/버전 히스토리", en: "Patch Notes/Version History" },
  galaxyDiscordShop: { ko: "디스코드 상점", en: "Discord Shop" },
  galaxyAdminContact: { ko: "문의/지원", en: "Support/Contact" },
  galaxyRulesEnforcement: { ko: "금지 행위/처벌", en: "Rule Enforcement" },
  beginnerRoute: { ko: "추천 시작 루트", en: "Recommended Start Route" },
  gearPreset: { ko: "장비 세팅 프리셋", en: "Gear Preset" },
  beginnerChecklist: { ko: "초보 체크리스트", en: "Beginner Checklist" },
  dangerMap: { ko: "위험도 지도", en: "Danger Map" },
  galaxyEvent: { ko: "이벤트", en: "Events" },
  faq: { ko: "FAQ", en: "FAQ" },
}

export const PRIORITY_LABELS: Record<BeginnerPriority, LocalizedText> = {
  1: { ko: "최상 (필수)", en: "Top (Required)" },
  2: { ko: "높음", en: "High" },
  3: { ko: "보통", en: "Normal" },
  4: { ko: "낮음", en: "Low" },
  5: { ko: "심화", en: "Advanced" },
}

export const VERIFICATION_STATUS_LABELS: Record<VerificationStatus, LocalizedText> = {
  verified: { ko: "확인 완료", en: "Verified" },
  partial: { ko: "내용 확인 중", en: "Under Review" },
  "needs-review": { ko: "업데이트 확인 필요", en: "Review Needed" },
  deprecated: { ko: "사용 불가", en: "Deprecated" },
  "server-local-only": { ko: "갤럭시 전용", en: "Galaxy Only" },
}

export const SOURCE_RELIABILITY_LABELS: Record<SourceReliability, LocalizedText> = {
  official: { ko: "공식 (Tier 1)", en: "Official (Tier 1)" },
  steam: { ko: "Steam (Tier 2)", en: "Steam (Tier 2)" },
  wiki: { ko: "위키 (Tier 3)", en: "Wiki (Tier 3)" },
  community: { ko: "커뮤니티 (Tier 4)", en: "Community (Tier 4)" },
  "server-local": { ko: "갤럭시 (Tier 5)", en: "Galaxy (Tier 5)" },
  unverified: { ko: "확인 전 (Tier 6)", en: "Unverified (Tier 6)" },
}

export const FRESHNESS_LABELS: Record<ContentFreshness, LocalizedText> = {
  current: { ko: "최신", en: "Current" },
  "patch-sensitive": { ko: "패치 민감", en: "Patch Sensitive" },
  "stale-risk": { ko: "오래됨 위험", en: "Stale Risk" },
  unknown: { ko: "불명", en: "Unknown" },
}

export const KNOWLEDGE_SCOPE_LABELS: Record<ContentKnowledgeKind, LocalizedText> = {
  "official-game-system": { ko: "공식 시스템", en: "Official Game System" },
  "server-local-policy": { ko: "갤럭시 정책", en: "Galaxy Server Policy" },
  "beginner-guide": { ko: "신규 유저 가이드", en: "Beginner Guide" },
  "advanced-guide": { ko: "중고급 가이드", en: "Advanced Guide" },
  "patch-dependent": { ko: "패치 종속", en: "Patch Dependent" },
  "community-derived": { ko: "커뮤니티 확인", en: "Community Derived" },
}
