/**
 * 가이드 API
 */

import type { GuideEntry } from "@/domains/scum/guides/types"
import { getGuidesData, getGuideById } from "@/data/guides.data"

export async function searchGuides(filters?: {
  query?: string
  category?: string
  minPriority?: number
  tags?: string[]
}): Promise<GuideEntry[]> {
  return getGuidesData(filters)
}

export async function getGuideDetail(id: string): Promise<GuideEntry | null> {
  const guide = getGuideById(id)
  return guide || null
}

export async function getRelatedGuides(
  guideId: string,
  limit: number = 3
): Promise<GuideEntry[]> {
  const guide = getGuideById(guideId)
  if (!guide || !guide.relatedGuideIds) return []

  return guide.relatedGuideIds
    .slice(0, limit)
    .map((id) => getGuideById(id))
    .filter((g): g is GuideEntry => g !== undefined)
}
