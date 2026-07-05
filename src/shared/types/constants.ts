/**
 * 공용 상수 정의
 */

// ============================================================================
// API 설정
// ============================================================================

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  TIMEOUT: 30000, // ms
  RETRIES: 3,
  CACHE_MAX_AGE: 5 * 60 * 1000, // 5분
} as const

// ============================================================================
// 페이지네이션 설정
// ============================================================================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const

// ============================================================================
// 재검증 스케줄
// ============================================================================

export const REVIEW_SCHEDULE = {
  TIER_2_MONTHLY: "월 1회", // Steam
  TIER_3_QUARTERLY: "분기 1회", // Wiki
  TIER_4_QUARTERLY: "분기 1회", // Community
  TIER_5_MONTHLY: "월 1회", // Server Local
} as const

// ============================================================================
// 검증 상태별 배지
// ============================================================================

export const VERIFICATION_BADGES = {
  verified: {
    icon: "CheckCircle2",
    color: "green",
    tooltip: "공식 출처에서 검증됨",
  },
  partial: {
    icon: "AlertCircle",
    color: "yellow",
    tooltip: "일부만 검증됨 (세부 사항 필요)",
  },
  "needs-review": {
    icon: "AlertTriangle",
    color: "orange",
    tooltip: "재검증 필요",
  },
  deprecated: {
    icon: "XCircle",
    color: "red",
    tooltip: "더 이상 유효하지 않음",
  },
  "server-local-only": {
    icon: "Lock",
    color: "blue",
    tooltip: "갤럭시 서버 전용",
  },
} as const

// ============================================================================
// 갤럭시 서버 설정
// ============================================================================

export const GALAXY_SERVER = {
  NAME: "갤럭시 서버",
  SEARCH_KEYWORDS: ["갤럭시", "KOR_", "kor_galaxy"],
  ROOM_TITLE: "KOR_PVE 갤럭시 since2021 경험치이벤트[디코상점-웰컴팩-직장인뉴비환영]",
  PLAY_STYLE: "PVE",
  DISCORD_URL: "https://discord.gg/VeNFX3CAwZ",
  SERVER_HOST: "121.137.41.200",
  SERVER_PORT: 7002,
  SERVER_ADDRESS: "121.137.41.200:7002",
  ADMIN_NAME: "블락",
  SINCE_YEAR: 2021,
} as const

// ============================================================================
// 콘텐츠 카테고리 그룹
// ============================================================================

export const CATEGORY_GROUPS = {
  BEGINNER: [
    "beginnerGuide",
    "character",
    "skill",
    "metabolism",
    "health",
    "injury",
  ],
  RESOURCE_MANAGEMENT: ["looting", "crafting", "weapon"],
  PRODUCTIVITY: ["combat", "hunting", "fishing", "cooking", "farming"],
  BASE_AND_MOVEMENT: ["baseBuilding", "vehicle", "trader", "fame"],
  LOCATION_AND_DANGER: ["location", "bunker", "radiation", "contamination", "enemy"],
  METAGAME: ["quest", "cargoDrop", "patchNotes"],
  GALAXY_SERVER: [
    "galaxyServer",
    "galaxyEvent",
    "galaxyDiscordShop",
    "galaxyAdminContact",
    "galaxyRulesEnforcement",
  ],
} as const

// ============================================================================
// 우선순위별 색상
// ============================================================================

export const PRIORITY_COLORS = {
  1: "#DC2626", // 빨강 (필수)
  2: "#F59E0B", // 주황 (높음)
  3: "#3B82F6", // 파랑 (보통)
  4: "#6B7280", // 회색 (낮음)
  5: "#9333EA", // 보라 (심화)
} as const
