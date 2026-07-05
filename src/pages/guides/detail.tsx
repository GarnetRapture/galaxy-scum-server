import { useParams, useNavigate, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  ChevronRight,
} from "lucide-react"
import { GuideDetailSkeleton } from "@/features/loading/LoadingSkeleton"
import { getGuideDetail, getRelatedGuides } from "@/shared/api/guides"
import { CATEGORY_LABELS, PRIORITY_LABELS, FRESHNESS_LABELS, KNOWLEDGE_SCOPE_LABELS } from "@/shared/types"
import { getCategoryIcon } from "@/shared/constants/icons"
import { scumMissionRefreshNotes, scumMissionSource, scumMissionTraderSections } from "@/data/scum-missions.data"
import { useLanguage } from "@/i18n"
import { pickLocalizedText } from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import "@/App.css"
import "@/styles/scum-authentic.css"

export function GuideDetailPage() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const { guideId } = useParams<{ guideId: string }>()
  const navigate = useNavigate()

  const {
    data: guide,
    isLoading: guideLoading,
    error: guideError,
  } = useQuery({
    queryKey: ["guide", guideId],
    queryFn: () => getGuideDetail(guideId!),
    enabled: !!guideId,
  })

  const { data: relatedGuides = [] } = useQuery({
    queryKey: ["relatedGuides", guideId],
    queryFn: () => getRelatedGuides(guideId!, 3),
    enabled: !!guideId && !!guide,
  })

  if (guideLoading) {
    return (
      <div className="galaxy-page">
        <main className="galaxy-container guide-detail-page">
          <GuideDetailSkeleton />
        </main>
      </div>
    )
  }

  if (guideError || !guide) {
    return (
      <div className="galaxy-page">
        <main className="galaxy-container guide-detail-page">
          <button
            onClick={() => navigate("/guides")}
            className="scum-button"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("guides.backToList")}
          </button>
          <div className="galaxy-panel guide-empty-state guide-empty-state--danger">
            <h1>{t("guides.notFound")}</h1>
            <p>{t("guides.notFoundDesc", "The requested guide address is not in the current list.")}</p>
          </div>
        </main>
      </div>
    )
  }

  const CategoryIcon = getCategoryIcon(guide.category)

  return (
    <div className="galaxy-page">
      <main className="galaxy-container guide-detail-page">
        <button
          onClick={() => navigate("/guides")}
          className="scum-button"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("guides.backToList")}
        </button>

        <article className="galaxy-panel guide-detail-hero">
          <img className="guide-detail__image" src={guide.image.src} alt={pickLocalizedText(guide.image.alt, locale)} />
          <div className="guide-detail-hero__content">
            <div>
              <span className="galaxy-kicker">Guide Detail</span>
              <h1>{pickLocalizedText(guide.title, locale)}</h1>
              <p>{pickLocalizedText(guide.summary, locale)}</p>
            </div>
            <div className="guide-detail-hero__badges">
              <span className="scum-badge">
                <CategoryIcon className="w-4 h-4" />
                {pickLocalizedText(CATEGORY_LABELS[guide.category], locale)}
              </span>
              <span className="scum-badge success">
                {t("guides.priorityLabel", undefined, { priority: pickLocalizedText(PRIORITY_LABELS[guide.beginnerPriority], locale) })}
              </span>
              <span className="scum-badge">
                <Calendar className="w-4 h-4" />
                {new Date(guide.meta.checkedAt).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US")}
              </span>
            </div>
          </div>
        </article>

        <section className="galaxy-panel guide-detail-body">
          {pickLocalizedText(guide.body, locale)}
        </section>

        {guide.id === "guide-015" ? (
          <section className="mission-guide">
            <div className="galaxy-panel">
              <div className="galaxy-section-heading">
                <BookOpen className="w-5 h-5" />
                <div>
                  <span>{scumMissionSource.fileName}</span>
                  <h2>{t("guides.missionSectionTitle")}</h2>
                </div>
              </div>
              <div className="mission-guide__summary">
                <strong>{t("guides.traderCount", undefined, { count: scumMissionSource.traderCount })}</strong>
                <strong>{t("guides.missionLineCount", undefined, { count: scumMissionSource.missionLineCount })}</strong>
                <strong>{t("guides.extractedAt", undefined, { date: scumMissionSource.extractedAt })}</strong>
              </div>
              <ul className="mission-guide__notes">
                {scumMissionRefreshNotes.map((note) => (
                  <li key={pickLocalizedText(note, locale)}>{pickLocalizedText(note, locale)}</li>
                ))}
              </ul>
            </div>

            {scumMissionTraderSections.map((section) => (
              <article className="galaxy-panel mission-trader" key={section.id}>
                <div className="galaxy-section-heading">
                  <BookOpen className="w-5 h-5" />
                  <div>
                    <span>{t("guides.missionsCount", undefined, { count: section.missions.length })}</span>
                    <h2>{section.traderName}</h2>
                  </div>
                </div>
                <ol className="mission-trader__list">
                  {section.missions.map((mission, index) => (
                    <li key={`${section.id}-${index}`}>{pickLocalizedText(mission, locale)}</li>
                  ))}
                </ol>
              </article>
            ))}
          </section>
        ) : null}

        <div className="guide-detail-tags">
          {guide.tags.map((tag) => (
            <span key={tag.ko} className="scum-badge">
              #{pickLocalizedText(tag, locale)}
            </span>
          ))}
        </div>

        <section className="galaxy-panel guide-detail-meta">
          <div className="galaxy-section-heading">
            <BookOpen className="w-5 h-5" />
            <div>
              <span>Guide Information</span>
              <h2>{t("guides.guideInfo")}</h2>
            </div>
          </div>
          <dl className="guide-detail-meta__grid">
            <div>
              <dt>{t("guides.lastCheckedLabel")}</dt>
              <dd>
                {new Date(guide.meta.checkedAt).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US")}
              </dd>
            </div>
            <div>
              <dt>{t("guides.freshness")}</dt>
              <dd>{pickLocalizedText(FRESHNESS_LABELS[guide.meta.freshness], locale)}</dd>
            </div>
            <div>
              <dt>{t("guides.knowledgeScope")}</dt>
              <dd>{pickLocalizedText(KNOWLEDGE_SCOPE_LABELS[guide.meta.knowledgeScope], locale)}</dd>
            </div>
            <div>
              <dt>{t("guides.source")}</dt>
              <dd>{guide.meta.sourceIds.join(", ")}</dd>
            </div>
          </dl>

          {guide.meta.reviewBefore && (
            <div className="guide-detail-meta__notice">
              <p>
                {t("guides.reviewRecommendedNote", undefined, {
                  date: new Date(guide.meta.reviewBefore).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US"),
                })}
                {guide.meta.reviewReason && ` (${guide.meta.reviewReason})`}
              </p>
            </div>
          )}
        </section>

        {relatedGuides.length > 0 && (
          <section className="guide-related">
            <div className="galaxy-section-heading">
              <BookOpen className="w-5 h-5" />
              <div>
                <span>Related Guides</span>
                <h2>{t("guides.relatedGuides")}</h2>
              </div>
            </div>
            <div className="guide-related__grid">
              {relatedGuides.map((related) => (
                <Link
                  key={related.id}
                  to={`/guides/${related.id}`}
                  className="galaxy-info-tile guide-related-card"
                >
                  <h3>{pickLocalizedText(related.title, locale)}</h3>
                  <p>{pickLocalizedText(related.summary, locale)}</p>
                  <span>
                    {t("guides.viewMore")}
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default GuideDetailPage
