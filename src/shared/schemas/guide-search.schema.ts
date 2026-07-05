/**
 * 가이드 검색 폼 스키마 (Zod)
 */

import { z } from "zod"

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
