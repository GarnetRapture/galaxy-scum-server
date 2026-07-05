/**
 * 갤럭시 서버 프로필 데이터
 * scum-server-galaxy-profile.md 문서 기반
 */

import type { GalaxyServerProfile } from "./types"
import type { VerifiableContentMeta } from "@/shared/types"
import { GALAXY_SERVER } from "@/shared/types/constants"

// ============================================================================
// 갤럭시 서버 메타데이터
// ============================================================================

const galaxyServerMeta: VerifiableContentMeta = {
  sourceIds: ["source-galaxy-server-local-2026-07-05"],
  verificationStatus: "verified",
  knowledgeScope: "server-local-policy",
  freshness: "current",
  checkedAt: "2026-07-05T00:00:00Z",
  reviewBefore: "2026-08-05T00:00:00Z",
  reviewReason: "월 1회 갤럭시 서버 정보 확인",
}

// ============================================================================
// 갤럭시 서버 프로필 데이터
// ============================================================================

export const galaxyServerProfile: GalaxyServerProfile = {
  // 기본 정보
  name: { ko: "갤럭시 서버", en: "Galaxy Server" },
  searchKeywords: ["갤럭시", "KOR_", "kor_galaxy"],
  roomTitle:
    "KOR_PVE 갤럭시 since2021 경험치이벤트[디코상점-웰컴팩-직장인뉴비환영]",
  playStyle: "PVE",

  // 운영 정보
  sinceYear: 2021,
  discordInviteUrl: GALAXY_SERVER.DISCORD_URL,
  serverAddress: GALAXY_SERVER.SERVER_ADDRESS,
  serverHost: GALAXY_SERVER.SERVER_HOST,
  serverPort: GALAXY_SERVER.SERVER_PORT,
  adminDiscordName: "Galaxy Notice",

  // 특징
  features: [
    { ko: "신규 유저 웰컴팩 지원", en: "Welcome pack support for new players" },
    { ko: "차량 무료 렌트 (신규 유저)", en: "Free vehicle rental (new players)" },
    { ko: "뉴비 케어 가이드 (~15분)", en: "Newbie care guide (~15 min)" },
    { ko: "주말 이벤트", en: "Weekend events" },
    { ko: "경험치 이벤트 진행 중", en: "Experience event currently active" },
    { ko: "파밍지 지원 (뉴비용, 고인물용)", en: "Looting zone support (beginner and veteran tiers)" },
    { ko: "벙커, 원전 등 POI", en: "Points of interest such as bunkers and the nuclear plant" },
    { ko: "디스코드 상점 연동", en: "Discord shop integration" },
  ],

  // 시스템 활성화 상태
  welcomePackEnabled: true,
  vehicleRentalEnabled: true,
  newbieGuideEnabled: true,
  weekendEventsEnabled: true,
  experienceEventActive: true,

  // 메타데이터
  meta: galaxyServerMeta,
}
