/**
 * 가이드 검색 폼 스키마 (Zod)
 */

import { z } from "zod"

export const GUIDE_FILTER_CATEGORIES = [
  "beginnerGuide",
  "character",
  "skill",
  "metabolism",
  "health",
  "looting",
  "crafting",
  "weapon",
  "hunting",
  "baseBuilding",
  "vehicle",
  "galaxyServer",
  "faq",
] as const

export const guideSearchSchema = z.object({
  query: z.string().max(100, "검색어는 100자 이하여야 합니다").optional().default(""),
  category: z.string().optional().default(""),
  minPriority: z.number().min(0).max(5).optional().default(0),
  tags: z.array(z.string()).optional().default([]),
  page: z.number().min(1).optional().default(1),
})

export type GuideSearchInput = z.infer<typeof guideSearchSchema>

export const guideFilterSchema = z.object({
  query: z.string().max(100).optional(),
  category: z.string().optional(),
  minPriority: z.number().min(0).max(5).optional(),
  tags: z.array(z.string()).optional(),
})

export type GuideFilterInput = z.infer<typeof guideFilterSchema>

/**
 * URLSearchParams는 값이 항상 문자열이므로 coerce로 숫자/enum을 안전하게 복원한다.
 * 잘못되었거나 없는 값은 안전한 기본값으로 대체되며 예외를 던지지 않는다.
 */
export const guideUrlQuerySchema = z.object({
  query: z.string().max(100).catch(""),
  category: z.enum(GUIDE_FILTER_CATEGORIES).optional().catch(undefined),
  priority: z.coerce.number().int().min(0).max(5).catch(0),
})

export type GuideUrlQuery = z.infer<typeof guideUrlQuerySchema>
