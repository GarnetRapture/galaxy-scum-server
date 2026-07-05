/**
 * 갤럭시 서버 정보 타입 정의
 */

import type { VerifiableContentMeta } from "@/shared/types"

export type ServerRule = {
  id: string
  title: string
  description: string
  severity: "info" | "warning" | "critical"
  meta: VerifiableContentMeta
}

export type WelcomePack = {
  id: string
  title: string
  description: string
  items: string[]
  requirementLevel?: number
  meta: VerifiableContentMeta
}

export type VehicleRentalPolicy = {
  id: string
  title: string
  description: string
  rentType: "free" | "paid" | "limited"
  conditions: string[]
  meta: VerifiableContentMeta
}

export type NewbieCareProgram = {
  id: string
  title: string
  description: string
  duration: string
  mentor?: string
  benefits: string[]
  meta: VerifiableContentMeta
}

export type FarmingArea = {
  id: string
  name: string
  level: "beginner" | "intermediate" | "advanced" | "endgame"
  description: string
  lootTypes: string[]
  location: string
  danger: number
  meta: VerifiableContentMeta
}

export type ServerInfoSection = {
  profile: any
  rules: ServerRule[]
  welcomePack: WelcomePack
  vehicleRental: VehicleRentalPolicy
  newbieCare: NewbieCareProgram
  farmingAreas: FarmingArea[]
}
