/**
 * 갤럭시 서버 이벤트 타입 정의
 */

import type { VerifiableContentMeta } from "@/shared/types"
import type { LocalizedText } from "@/domains/galaxy-server/content/types"

export type GalaxyServerEventType = "weekend" | "special" | "experience"

export type GalaxyServerEventStatus = "live" | "upcoming" | "ended"

export type GalaxyServerEvent = {
  id: string
  type: GalaxyServerEventType
  status: GalaxyServerEventStatus
  title: LocalizedText
  description: LocalizedText
  schedule: {
    startDate: string
    endDate: string
    time?: string
  }
  reward?: LocalizedText
  meta: VerifiableContentMeta
}

export type EventFilter = {
  type?: GalaxyServerEventType
  status?: GalaxyServerEventStatus
}
