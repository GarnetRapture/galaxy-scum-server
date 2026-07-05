/**
 * 공용 타입 정의
 * 프로젝트 전역에서 사용되는 기본 타입들
 */

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

export const CATEGORY_LABELS: Record<ScumContentCategory, string> = {
  beginnerGuide: "신규 유저 시작",
  character: "캐릭터 생성",
  skill: "능력치/스킬",
  metabolism: "대사/영양/수분/피로",
  health: "건강/부상/질병",
  injury: "부상/질병/치료",
  looting: "루팅",
  crafting: "제작",
  weapon: "무기/탄약",
  combat: "전투",
  hunting: "사냥",
  fishing: "낚시",
  cooking: "요리",
  farming: "농사",
  baseBuilding: "기지 건설",
  vehicle: "차량",
  trader: "거래소/상인",
  fame: "명성/평판",
  location: "맵/지역",
  bunker: "벙커/군사지역",
  radiation: "방사능/오염",
  contamination: "오염",
  enemy: "적",
  quest: "퀘스트",
  cargoDrop: "카고 드랍",
  serverSetting: "서버 설정",
  galaxyServer: "갤럭시 서버",
  patchNotes: "패치노트/버전 히스토리",
  galaxyDiscordShop: "디스코드 상점",
  galaxyAdminContact: "문의/지원",
  galaxyRulesEnforcement: "금지 행위/처벌",
  beginnerRoute: "추천 시작 루트",
  gearPreset: "장비 세팅 프리셋",
  beginnerChecklist: "초보 체크리스트",
  dangerMap: "위험도 지도",
  galaxyEvent: "이벤트",
  faq: "FAQ",
}

export const PRIORITY_LABELS: Record<BeginnerPriority, string> = {
  1: "최상 (필수)",
  2: "높음",
  3: "보통",
  4: "낮음",
  5: "심화",
}

export const VERIFICATION_STATUS_LABELS: Record<VerificationStatus, string> = {
  verified: "확인 완료",
  partial: "내용 확인 중",
  "needs-review": "업데이트 확인 필요",
  deprecated: "사용 불가",
  "server-local-only": "갤럭시 전용",
}

export const SOURCE_RELIABILITY_LABELS: Record<SourceReliability, string> = {
  official: "공식 (Tier 1)",
  steam: "Steam (Tier 2)",
  wiki: "위키 (Tier 3)",
  community: "커뮤니티 (Tier 4)",
  "server-local": "갤럭시 (Tier 5)",
  unverified: "확인 전 (Tier 6)",
}
