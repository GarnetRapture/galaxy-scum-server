/**
 * 갤럭시 서버 이벤트 타입 정의
 */

import type { VerifiableContentMeta } from "@/shared/types"

export type GalaxyServerEventType = "weekend" | "special" | "experience"

export type GalaxyServerEventStatus = "live" | "upcoming" | "ended"

export type GalaxyServerEvent = {
  id: string
  type: GalaxyServerEventType
  status: GalaxyServerEventStatus
  title: string
  description: string
  schedule: {
    startDate: string
    endDate: string
    time?: string
  }
  reward?: string
  meta: VerifiableContentMeta
}

export type EventFilter = {
  type?: GalaxyServerEventType
  status?: GalaxyServerEventStatus
}
