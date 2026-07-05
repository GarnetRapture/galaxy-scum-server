import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { ExternalLink, ImageIcon, Layers3, Library, Search } from "lucide-react"
import { scumWikiHubSections, scumWikiSource } from "@/data/scum-wiki-hub.data"
import { getScumWikiCatalog } from "@/shared/api/scum-wiki"
import { useScumWikiStore, type ScumWikiCatalogView } from "@/shared/store/scum-wiki-store"
import { useLanguage } from "@/i18n"
import { pickLocalizedText } from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import "@/styles/scum-authentic.css"
import "@/App.css"

const wikiViewKeyById: Record<ScumWikiCatalogView, string> = {
  overview: "viewOverview",
  pages: "viewPages",
  categories: "viewCategories",
  images: "viewImages",
}

const wikiViewIds: ScumWikiCatalogView[] = ["overview", "pages", "categories", "images"]

export function WikiPage() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const { query, view, setQuery, setView } = useScumWikiStore()
  const { data: catalog, isLoading, error } = useQuery({
    queryKey: ["scum-wiki-catalog"],
    queryFn: getScumWikiCatalog,
  })

  const normalizedQuery = query.trim().toLowerCase()
  const pageResults = useMemo(() => {
    if (!catalog) return []
    return catalog.pages
      .filter((page) => page.title.toLowerCase().includes(normalizedQuery))
      .slice(0, 120)
  }, [catalog, normalizedQuery])

  const categoryResults = useMemo(() => {
    if (!catalog) return []
    return catalog.categories
      .filter((category) => category.name.toLowerCase().includes(normalizedQuery))
      .slice(0, 120)
  }, [catalog, normalizedQuery])

  const imageResults = useMemo(() => {
    if (!catalog) return []
    return catalog.cachedImages
      .filter((image) => image.name.toLowerCase().includes(normalizedQuery))
      .slice(0, 80)
  }, [catalog, normalizedQuery])

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head wiki-head">
        <img src={scumWikiSource.logo} alt="Scum Wiki" />
        <div>
          <div className="galaxy-kicker">SCUM Wiki Hub</div>
          <h1>{t("wiki.title")}</h1>
          <p>{t("wiki.description")}</p>
        </div>
      </section>

      <section className="galaxy-container wiki-source-card">
        <div>
          <strong>{t("wiki.sourceBasis")}</strong>
          <span>
            {catalog
              ? t("wiki.sourceSummary", undefined, {
                  name: catalog.source.name,
                  pages: catalog.counts.pages.toLocaleString(),
                  categories: catalog.counts.categories.toLocaleString(),
                  images: catalog.counts.images.toLocaleString(),
                  cachedImages: catalog.counts.cachedImages.toLocaleString(),
                })
              : `${scumWikiSource.name} · ${scumWikiSource.checkedAt}`}
          </span>
        </div>
        <a className="scum-button" href={scumWikiSource.url} target="_blank" rel="noopener noreferrer">
          {t("wiki.openOriginal")}
          <ExternalLink className="w-4 h-4" />
        </a>
      </section>

      <section className="galaxy-container wiki-toolbar">
        <div className="wiki-search">
          <Search className="w-4 h-4" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("wiki.searchPlaceholder")}
          />
        </div>
        <div className="wiki-tabs">
          {wikiViewIds.map((id) => (
            <button
              key={id}
              type="button"
              className={view === id ? "wiki-tab wiki-tab--active" : "wiki-tab"}
              onClick={() => setView(id)}
            >
              {t(`wiki.${wikiViewKeyById[id]}`)}
            </button>
          ))}
        </div>
      </section>

      {isLoading ? (
        <section className="galaxy-container galaxy-panel wiki-state">{t("wiki.loading")}</section>
      ) : error || !catalog ? (
        <section className="galaxy-container galaxy-panel wiki-state">{t("wiki.loadError")}</section>
      ) : (
        <>
          {view === "overview" ? (
            <section className="galaxy-container wiki-section-grid">
              {scumWikiHubSections.map((section) => {
                const Icon = section.icon
                const externalProps = section.sourceUrl.startsWith("/")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" }

                return (
                  <article className="galaxy-info-tile wiki-section-card" key={section.id}>
                    <div className="wiki-section-card__head">
                      <Icon className="w-5 h-5" />
                      <div>
                        <span>{section.sourceTitle}</span>
                        <h2>{pickLocalizedText(section.title, locale)}</h2>
                      </div>
                    </div>
                    <p>{pickLocalizedText(section.summary, locale)}</p>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={pickLocalizedText(bullet, locale)}>{pickLocalizedText(bullet, locale)}</li>
                      ))}
                    </ul>
                    <a className="galaxy-inline-link" href={section.sourceUrl} {...externalProps}>
                      {t("wiki.viewDetail")}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </article>
                )
              })}
            </section>
          ) : null}

          {view === "pages" ? (
            <section className="galaxy-container wiki-result-grid">
              {pageResults.map((page) => (
                <a className="wiki-result-card" href={page.url} target="_blank" rel="noopener noreferrer" key={page.pageid ?? page.title}>
                  <Library className="w-4 h-4" />
                  <span>{page.title}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </section>
          ) : null}

          {view === "categories" ? (
            <section className="galaxy-container wiki-result-grid">
              {categoryResults.map((category) => (
                <a className="wiki-result-card" href={category.url} target="_blank" rel="noopener noreferrer" key={category.name}>
                  <Layers3 className="w-4 h-4" />
                  <span>{category.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </section>
          ) : null}

          {view === "images" ? (
            <section className="galaxy-container wiki-image-grid">
              {imageResults.map((image) => (
                <a className="wiki-image-card" href={image.sourceUrl} target="_blank" rel="noopener noreferrer" key={image.localSrc}>
                  <img src={image.localSrc} alt={image.name} />
                  <span>
                    <ImageIcon className="w-4 h-4" />
                    {image.name}
                  </span>
                </a>
              ))}
            </section>
          ) : null}
        </>
      )}
    </div>
  )
}

export default WikiPage
