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
import { CATEGORY_LABELS, PRIORITY_LABELS } from "@/shared/types"
import { getCategoryIcon } from "@/shared/constants/icons"
import { scumMissionRefreshNotes, scumMissionSource, scumMissionTraderSections } from "@/data/scum-missions.data"
import "@/App.css"
import "@/styles/scum-authentic.css"

export function GuideDetailPage() {
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
            가이드로 돌아가기
          </button>
          <div className="galaxy-panel guide-empty-state guide-empty-state--danger">
            <h1>가이드를 찾을 수 없습니다</h1>
            <p>요청한 가이드 주소가 현재 목록에 없습니다.</p>
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
          가이드로 돌아가기
        </button>

        <article className="galaxy-panel guide-detail-hero">
          <img className="guide-detail__image" src={guide.image.src} alt={guide.image.alt} />
          <div className="guide-detail-hero__content">
            <div>
              <span className="galaxy-kicker">Guide Detail</span>
              <h1>{guide.title}</h1>
              <p>{guide.summary}</p>
            </div>
            <div className="guide-detail-hero__badges">
              <span className="scum-badge">
                <CategoryIcon className="w-4 h-4" />
                {CATEGORY_LABELS[guide.category]}
              </span>
              <span className="scum-badge success">
                우선순위: {PRIORITY_LABELS[guide.beginnerPriority]}
              </span>
              <span className="scum-badge">
                <Calendar className="w-4 h-4" />
                {new Date(guide.meta.checkedAt).toLocaleDateString("ko-KR")}
              </span>
            </div>
          </div>
        </article>

        <section className="galaxy-panel guide-detail-body">
          {guide.body}
        </section>

        {guide.id === "guide-015" ? (
          <section className="mission-guide">
            <div className="galaxy-panel">
              <div className="galaxy-section-heading">
                <BookOpen className="w-5 h-5" />
                <div>
                  <span>{scumMissionSource.fileName}</span>
                  <h2>상인별 전체 미션</h2>
                </div>
              </div>
              <div className="mission-guide__summary">
                <strong>{scumMissionSource.traderCount}개 상인</strong>
                <strong>{scumMissionSource.missionLineCount}개 미션 원문 항목</strong>
                <strong>추출일: {scumMissionSource.extractedAt}</strong>
              </div>
              <ul className="mission-guide__notes">
                {scumMissionRefreshNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            {scumMissionTraderSections.map((section) => (
              <article className="galaxy-panel mission-trader" key={section.id}>
                <div className="galaxy-section-heading">
                  <BookOpen className="w-5 h-5" />
                  <div>
                    <span>{section.missions.length} Missions</span>
                    <h2>{section.traderName}</h2>
                  </div>
                </div>
                <ol className="mission-trader__list">
                  {section.missions.map((mission, index) => (
                    <li key={`${section.id}-${index}`}>{mission}</li>
                  ))}
                </ol>
              </article>
            ))}
          </section>
        ) : null}

        <div className="guide-detail-tags">
          {guide.tags.map((tag) => (
            <span key={tag} className="scum-badge">
              #{tag}
            </span>
          ))}
        </div>

        <section className="galaxy-panel guide-detail-meta">
          <div className="galaxy-section-heading">
            <BookOpen className="w-5 h-5" />
            <div>
              <span>Guide Information</span>
              <h2>가이드 정보</h2>
            </div>
          </div>
          <dl className="guide-detail-meta__grid">
            <div>
              <dt>마지막 확인</dt>
              <dd>
                {new Date(guide.meta.checkedAt).toLocaleDateString("ko-KR")}
              </dd>
            </div>
            <div>
              <dt>업데이트 민감도</dt>
              <dd>
                {guide.meta.freshness === "current"
                  ? "현재 기준"
                  : guide.meta.freshness === "patch-sensitive"
                    ? "패치 민감"
                    : guide.meta.freshness === "stale-risk"
                      ? "갱신 필요 가능성"
                      : "불명"}
              </dd>
            </div>
            <div>
              <dt>정보 범위</dt>
              <dd>
                {guide.meta.knowledgeScope === "official-game-system"
                  ? "공식 시스템"
                  : guide.meta.knowledgeScope === "server-local-policy"
                    ? "갤럭시 정책"
                    : "기타"}
              </dd>
            </div>
            <div>
              <dt>출처</dt>
              <dd>{guide.meta.sourceIds.join(", ")}</dd>
            </div>
          </dl>

          {guide.meta.reviewBefore && (
            <div className="guide-detail-meta__notice">
              <p>
                {new Date(guide.meta.reviewBefore).toLocaleDateString("ko-KR")} 이전에
                업데이트 여부 확인이 필요합니다.
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
                <h2>관련 가이드</h2>
              </div>
            </div>
            <div className="guide-related__grid">
              {relatedGuides.map((related) => (
                <Link
                  key={related.id}
                  to={`/guides/${related.id}`}
                  className="galaxy-info-tile guide-related-card"
                >
                  <h3>{related.title}</h3>
                  <p>{related.summary}</p>
                  <span>
                    보기
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
