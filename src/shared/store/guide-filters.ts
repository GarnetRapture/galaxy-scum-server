/**
 * 가이드 필터 상태관리 (Zustand)
 */

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ScumContentCategory, BeginnerPriority } from "@/shared/types"

export interface GuideFiltersState {
  query: string
  category: ScumContentCategory | ""
  minPriority: BeginnerPriority | 0
  tags: string[]
  page: number

  setQuery: (query: string) => void
  setCategory: (category: ScumContentCategory | "") => void
  setMinPriority: (priority: BeginnerPriority | 0) => void
  setTags: (tags: string[]) => void
  setPage: (page: number) => void
  resetFilters: () => void
}

export const useGuideFiltersStore = create<GuideFiltersState>()(
  persist(
    (set) => ({
      query: "",
      category: "",
      minPriority: 0,
      tags: [],
      page: 1,

      setQuery: (query) => set({ query, page: 1 }),
      setCategory: (category) => set({ category, page: 1 }),
      setMinPriority: (minPriority) => set({ minPriority, page: 1 }),
      setTags: (tags) => set({ tags, page: 1 }),
      setPage: (page) => set({ page }),
      resetFilters: () =>
        set({
          query: "",
          category: "",
          minPriority: 0,
          tags: [],
          page: 1,
        }),
    }),
    {
      name: "guide-filters-store",
    }
  )
)
