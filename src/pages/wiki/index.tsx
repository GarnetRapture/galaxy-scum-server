import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { ExternalLink, ImageIcon, Layers3, Library, Search } from "lucide-react"
import { scumWikiHubSections, scumWikiSource } from "@/data/scum-wiki-hub.data"
import { getScumWikiCatalog } from "@/shared/api/scum-wiki"
import { useScumWikiStore, type ScumWikiCatalogView } from "@/shared/store/scum-wiki-store"
import "@/styles/scum-authentic.css"
import "@/App.css"

const wikiViews: Array<{ id: ScumWikiCatalogView; label: string }> = [
  { id: "overview", label: "요약 허브" },
  { id: "pages", label: "전체 문서" },
  { id: "categories", label: "카테고리" },
  { id: "images", label: "이미지" },
]

export function WikiPage() {
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
          <h1>SCUM 위키 허브</h1>
          <p>
            공식 SCUM Wiki API에서 가져온 문서 인덱스, 카테고리, 이미지 메타데이터를 내부 검색 허브로 구성했습니다.
            원문 전체 복제가 아니라 앱에서 필요한 탐색과 요약 중심으로 재구성합니다.
          </p>
        </div>
      </section>

      <section className="galaxy-container wiki-source-card">
        <div>
          <strong>자료 기준</strong>
          <span>
            {catalog
              ? `${catalog.source.name} · 문서 ${catalog.counts.pages.toLocaleString()}개 · 카테고리 ${catalog.counts.categories.toLocaleString()}개 · 이미지 메타 ${catalog.counts.images.toLocaleString()}개 · 로컬 이미지 ${catalog.counts.cachedImages.toLocaleString()}개`
              : `${scumWikiSource.name} · ${scumWikiSource.checkedAt}`}
          </span>
        </div>
        <a className="scum-button" href={scumWikiSource.url} target="_blank" rel="noopener noreferrer">
          원문 열기
          <ExternalLink className="w-4 h-4" />
        </a>
      </section>

      <section className="galaxy-container wiki-toolbar">
        <div className="wiki-search">
          <Search className="w-4 h-4" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="SCUM 문서, 카테고리, 이미지 검색"
          />
        </div>
        <div className="wiki-tabs">
          {wikiViews.map((item) => (
            <button
              key={item.id}
              type="button"
              className={view === item.id ? "wiki-tab wiki-tab--active" : "wiki-tab"}
              onClick={() => setView(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {isLoading ? (
        <section className="galaxy-container galaxy-panel wiki-state">SCUM 위키 카탈로그를 불러오는 중입니다.</section>
      ) : error || !catalog ? (
        <section className="galaxy-container galaxy-panel wiki-state">SCUM 위키 카탈로그를 불러올 수 없습니다.</section>
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
                        <h2>{section.title}</h2>
                      </div>
                    </div>
                    <p>{section.summary}</p>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <a className="galaxy-inline-link" href={section.sourceUrl} {...externalProps}>
                      자세히 보기
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
