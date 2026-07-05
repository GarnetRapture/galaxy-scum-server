/**
 * 갤럭시 서버 프로필 타입 정의
 */

import type { VerifiableContentMeta } from "@/shared/types"

// ============================================================================
// 갤럭시 서버 프로필
// ============================================================================

export type GalaxyServerProfile = {
  // 기본 정보
  name: "갤럭시 서버"
  searchKeywords: string[]
  roomTitle: string
  playStyle: "PVE" // PVE 전용

  // 운영 정보
  sinceYear: 2021
  discordInviteUrl: string
  serverAddress: string
  serverHost: string
  serverPort: number
  adminDiscordName: string

  // 특징
  features: string[]

  // 시스템 활성화 상태
  welcomePackEnabled: boolean
  vehicleRentalEnabled: boolean
  newbieGuideEnabled: boolean
  weekendEventsEnabled: boolean
  experienceEventActive: boolean

  // 메타데이터
  meta: VerifiableContentMeta
}

// ============================================================================
// 갤럭시 서버 기본 정보
// ============================================================================

export type ServerBasicInfo = {
  id: string
  name: string
  searchKeywords: string[]
  roomTitle: string
  playStyle: "PVE" | "PvP" | "Mixed"
  language: string
  region: string
  adminName: string
  sinceYear: number
}

export type ServerFeatureList = {
  // 신규 유저 지원
  welcomePackEnabled: boolean
  vehicleRentalEnabled: boolean
  newbieGuideEnabled: boolean

  // 이벤트
  weekendEventsEnabled: boolean
  experienceEventActive: boolean
  specialEventsEnabled: boolean

  // 커뮤니티
  discordIntegration: boolean
  tradingSystemEnabled: boolean
  GuildSystemEnabled: boolean
}
