import { create } from "zustand"

export type ScumWikiCatalogView = "overview" | "pages" | "categories" | "images"

type ScumWikiStore = {
  query: string
  view: ScumWikiCatalogView
  setQuery: (query: string) => void
  setView: (view: ScumWikiCatalogView) => void
}

export const useScumWikiStore = create<ScumWikiStore>((set) => ({
  query: "",
  view: "overview",
  setQuery: (query) => set({ query }),
  setView: (view) => set({ view }),
}))
