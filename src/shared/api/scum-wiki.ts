import { scumWikiCatalogSchema, type ScumWikiCatalog } from "@/shared/schemas/scum-wiki-catalog.schema"
import { resolveAssetUrl } from "@/shared/utils/asset-url"

export async function getScumWikiCatalog(): Promise<ScumWikiCatalog> {
  const response = await fetch(resolveAssetUrl("/assets/scum/wiki/scum-wiki-catalog.json"))
  if (!response.ok) {
    throw new Error("SCUM 위키 카탈로그를 불러올 수 없습니다.")
  }

  const payload: unknown = await response.json()
  return scumWikiCatalogSchema.parse(payload)
}
