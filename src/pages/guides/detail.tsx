/**
 * 가이드 상세 페이지
 * 경로: /guides/:guideId
 */

import { useParams, useNavigate, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  XCircle,
  Lock,
  ChevronRight,
} from "lucide-react"
import { getGuideDetail, getRelatedGuides } from "@/shared/api/guides"
import { CATEGORY_LABELS, PRIORITY_LABELS, VERIFICATION_STATUS_LABELS } from "@/shared/types"
import { getCategoryIcon } from "@/shared/constants/icons"
import type { VerificationStatus } from "@/shared/types"
import "@/styles/scum-authentic.css"

const STATUS_ICONS: Record<VerificationStatus, React.ReactNode> = {
  verified: <CheckCircle2 className="w-5 h-5 text-green-600" />,
  partial: <AlertCircle className="w-5 h-5 text-yellow-600" />,
  "needs-review": <AlertTriangle className="w-5 h-5 text-orange-600" />,
  deprecated: <XCircle className="w-5 h-5 text-red-600" />,
  "server-local-only": <Lock className="w-5 h-5 text-blue-600" />,
}

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
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--scum-bg)' }}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div style={{ animation: 'pulse 2s infinite', display: 'space-y-6' }}>
            <div style={{ height: '24px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '6px', width: '25%' }}></div>
            <div style={{ height: '40px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '6px', width: '75%' }}></div>
            <div style={{ height: '256px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '6px' }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (guideError || !guide) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--scum-bg)' }}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate("/guides")}
            className="scum-button"
            style={{ marginBottom: '24px' }}
          >
            <ArrowLeft className="w-4 h-4" />
            가이드로 돌아가기
          </button>
          <div className="scum-card" style={{ textAlign: 'center', backgroundColor: 'rgba(255, 23, 68, 0.05)', borderColor: 'rgba(255, 23, 68, 0.2)' }}>
            <p style={{ color: 'var(--scum-red)', fontSize: '16px' }}>가이드를 찾을 수 없습니다.</p>
          </div>
        </div>
      </div>
    )
  }

  const CategoryIcon = getCategoryIcon(guide.category)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--scum-bg)' }}>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* 네비게이션 */}
        <button
          onClick={() => navigate("/guides")}
          className="scum-button"
          style={{ marginBottom: '24px' }}
        >
          <ArrowLeft className="w-4 h-4" />
          가이드로 돌아가기
        </button>

        {/* 헤더 */}
        <div className="scum-card" style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <h1 className="scum-title" style={{ fontSize: '32px', marginBottom: '12px' }}>{guide.title}</h1>
              <p style={{ fontSize: '16px', color: 'var(--scum-text-secondary)', marginBottom: '16px' }}>{guide.summary}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
                <span className="scum-badge">
                  <CategoryIcon className="w-4 h-4" />
                  {CATEGORY_LABELS[guide.category]}
                </span>
                <span className="scum-badge accent">
                  우선순위: {PRIORITY_LABELS[guide.beginnerPriority]}
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right', marginLeft: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '13px' }}>
                {STATUS_ICONS[guide.meta.verificationStatus]}
                <span style={{ fontWeight: 600, color: 'var(--scum-text-primary)' }}>
                  {VERIFICATION_STATUS_LABELS[guide.meta.verificationStatus]}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--scum-text-secondary)' }}>
                <Calendar className="w-3 h-3" />
                {new Date(guide.meta.checkedAt).toLocaleDateString("ko-KR")}
              </div>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div className="scum-card" style={{ marginBottom: '24px', whiteSpace: 'pre-wrap', color: 'var(--scum-text-secondary)', lineHeight: '1.8' }}>
          {guide.body}
        </div>

        {/* 태그 */}
        <div style={{ marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {guide.tags.map((tag) => (
            <span key={tag} className="scum-badge" style={{ fontSize: '12px' }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* 메타데이터 */}
        <div className="scum-card" style={{ backgroundColor: 'rgba(0, 217, 255, 0.05)', borderLeft: '3px solid var(--scum-cyan)', marginBottom: '32px' }}>
          <h3 style={{ fontWeight: 600, color: 'var(--scum-text-primary)', marginBottom: '16px' }}>가이드 정보</h3>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', fontSize: '13px' }}>
            <div>
              <dt style={{ color: 'var(--scum-text-secondary)', marginBottom: '4px' }}>검증 상태</dt>
              <dd style={{ color: 'var(--scum-text-primary)', fontWeight: 600, margin: 0 }}>
                {VERIFICATION_STATUS_LABELS[guide.meta.verificationStatus]}
              </dd>
            </div>
            <div>
              <dt style={{ color: 'var(--scum-text-secondary)', marginBottom: '4px' }}>마지막 확인</dt>
              <dd style={{ color: 'var(--scum-text-primary)', fontWeight: 600, margin: 0 }}>
                {new Date(guide.meta.checkedAt).toLocaleDateString("ko-KR")}
              </dd>
            </div>
            <div>
              <dt style={{ color: 'var(--scum-text-secondary)', marginBottom: '4px' }}>신선도</dt>
              <dd style={{ color: 'var(--scum-text-primary)', fontWeight: 600, margin: 0, textTransform: 'capitalize' }}>
                {guide.meta.freshness === "current"
                  ? "최신"
                  : guide.meta.freshness === "patch-sensitive"
                    ? "패치 민감"
                    : guide.meta.freshness === "stale-risk"
                      ? "오래됨 위험"
                      : "불명"}
              </dd>
            </div>
            <div>
              <dt style={{ color: 'var(--scum-text-secondary)', marginBottom: '4px' }}>지식 범위</dt>
              <dd style={{ color: 'var(--scum-text-primary)', fontWeight: 600, margin: 0, textTransform: 'capitalize' }}>
                {guide.meta.knowledgeScope === "official-game-system"
                  ? "공식 시스템"
                  : guide.meta.knowledgeScope === "server-local-policy"
                    ? "갤럭시 정책"
                    : "기타"}
              </dd>
            </div>
          </dl>

          {guide.meta.reviewBefore && (
            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'rgba(255, 255, 0, 0.1)', border: '1px solid rgba(255, 255, 0, 0.2)', borderRadius: '6px' }}>
              <p style={{ fontSize: '13px', color: 'var(--scum-orange)', margin: 0 }}>
                <span style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <AlertTriangle className="w-4 h-4" />
                  재검증 권장:
                </span>{" "}
                {new Date(guide.meta.reviewBefore).toLocaleDateString("ko-KR")} 이전에
                재검증이 필요합니다.
                {guide.meta.reviewReason && ` (${guide.meta.reviewReason})`}
              </p>
            </div>
          )}

          <div style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '12px', color: 'var(--scum-text-secondary)', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>출처:</span> {guide.meta.sourceIds.join(", ")}
            </p>
          </div>
        </div>

        {/* 관련 가이드 */}
        {relatedGuides.length > 0 && (
          <div>
            <h2 className="scum-title" style={{ fontSize: '24px', marginBottom: '24px' }}>관련 가이드</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              {relatedGuides.map((related) => (
                <Link
                  key={related.id}
                  to={`/guides/${related.id}`}
                  className="scum-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h4 style={{ fontWeight: 600, color: 'var(--scum-text-primary)', marginBottom: '8px', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {related.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--scum-text-secondary)', marginBottom: '12px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {related.summary}
                  </p>
                  <div style={{ fontSize: '12px', color: 'var(--scum-cyan)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    보기
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GuideDetailPage
