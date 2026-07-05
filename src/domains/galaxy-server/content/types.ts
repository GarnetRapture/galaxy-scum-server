export type LocaleCode = "ko" | "en"

export type LocalizedText = Record<LocaleCode, string>

export type ContentImageAsset = {
  src: string
  alt: LocalizedText
  title: LocalizedText
  sourceId: string
}

export type StatRecommendation = {
  id: string
  attribute: "STR" | "CON" | "DEX" | "INT"
  title: LocalizedText
  recommendedValue: string
  primaryRecommendation: LocalizedText
  alternatives: LocalizedText[]
  skills: LocalizedText[]
}

export type GalaxyRule = {
  id: string
  title: LocalizedText
  detail?: LocalizedText
  severity: "standard" | "important" | "critical"
}

export type BeginnerRouteStep = {
  id: string
  title: LocalizedText
  timeframe: LocalizedText
  objectives: LocalizedText[]
  galaxyNote: LocalizedText
}

export type KnowledgeSection = {
  id: string
  title: LocalizedText
  summary: LocalizedText
  points: LocalizedText[]
  sourceIds: string[]
}

export type VersionKnowledge = {
  version: string
  title: LocalizedText
  releaseDate: string
  checkedAt: string
  highlights: KnowledgeSection[]
}
