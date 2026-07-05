import { z } from "zod"

export const scumWikiCatalogSchema = z.object({
  source: z.object({
    name: z.string(),
    url: z.string().url(),
    api: z.string().url(),
    syncedAt: z.string(),
  }),
  counts: z.object({
    pages: z.number(),
    categories: z.number(),
    images: z.number(),
    cachedImages: z.number(),
  }),
  pages: z.array(z.object({
    pageid: z.number().optional(),
    title: z.string(),
    url: z.string().url(),
  })),
  categories: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })),
  images: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
    mime: z.string().optional(),
    size: z.number().optional(),
  })),
  cachedImages: z.array(z.object({
    name: z.string(),
    sourceUrl: z.string().url(),
    localSrc: z.string(),
    mime: z.string(),
    size: z.number(),
  })),
  featuredExtracts: z.record(z.string(), z.string()),
})

export type ScumWikiCatalog = z.infer<typeof scumWikiCatalogSchema>
