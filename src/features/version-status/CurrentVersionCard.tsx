/**
 * 현재 버전 정보 카드 - 현대 다크테마 스타일
 */

import { useQuery } from "@tanstack/react-query"
import { getCurrentVersion } from "@/shared/api/version"
import { VerificationBadge } from "./VerificationBadge"
import { versionFeatures } from "@/data/current-version.data"
import type { VersionFeature } from "@/domains/scum/version/types"
import { VERIFICATION_STATUS_LABELS } from "@/shared/types"
import "@/styles/scum-authentic.css"

export function CurrentVersionCard() {
  const {
    data: version,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["current-version"],
    queryFn: getCurrentVersion,
  })

  if (isLoading) {
    return (
      <div className="scum-card" style={{ maxWidth: '600px' }}>
        <div style={{ animation: 'pulse 2s infinite' }}>
          <div style={{ height: '32px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '6px', marginBottom: '16px', width: '33%' }}></div>
          <div style={{ height: '16px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '4px', marginBottom: '24px', width: '50%' }}></div>
          <div style={{ display: 'space-y-3' }}>
            <div style={{ height: '16px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '4px', marginBottom: '12px' }}></div>
            <div style={{ height: '16px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '4px', marginBottom: '12px' }}></div>
            <div style={{ height: '16px', backgroundColor: 'var(--scum-bg-tertiary)', borderRadius: '4px' }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !version) {
    return (
      <div className="scum-card" style={{ maxWidth: '600px', borderColor: 'rgba(255, 23, 68, 0.3)', backgroundColor: 'rgba(255, 23, 68, 0.05)' }}>
        <p style={{ color: 'var(--scum-red)', fontSize: '14px' }}>버전 정보를 불러올 수 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="scum-card" style={{ maxWidth: '600px' }}>
      {/* 헤더 */}
      <div style={{ borderBottom: '1px solid var(--scum-border)', paddingBottom: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <h2 className="scum-title" style={{ fontSize: '24px', marginBottom: 0 }}>{version.updateName}</h2>
          <VerificationBadge status={version.meta.verificationStatus} size="lg" />
        </div>
        <p style={{ fontSize: '13px', color: 'var(--scum-text-secondary)', margin: 0 }}>
          v{version.versionNumber} · {version.releaseDate}
        </p>
      </div>

      {/* 기본 정보 */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--scum-cyan)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>버전 정보</h3>
        <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13px' }}>
          <div>
            <dt style={{ color: 'var(--scum-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>버전 번호</dt>
            <dd style={{ fontFamily: 'monospace', color: 'var(--scum-text-primary)', margin: 0 }}>{version.versionNumber}</dd>
          </div>
          <div>
            <dt style={{ color: 'var(--scum-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>출시일</dt>
            <dd style={{ color: 'var(--scum-text-primary)', margin: 0 }}>{version.releaseDate}</dd>
          </div>
          <div>
            <dt style={{ color: 'var(--scum-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>정식 출시일</dt>
            <dd style={{ color: 'var(--scum-text-primary)', margin: 0 }}>{version.officialReleaseDate || "—"}</dd>
          </div>
          <div>
            <dt style={{ color: 'var(--scum-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>자료 상태</dt>
            <dd style={{ color: 'var(--scum-text-primary)', margin: 0, textTransform: 'capitalize' }}>
              {VERIFICATION_STATUS_LABELS[version.meta.verificationStatus]}
            </dd>
          </div>
        </dl>
      </div>

      {/* 구분선 */}
      <div className="scum-divider"></div>

      {/* 기능 목록 */}
      <div>
        <h3 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--scum-cyan)', marginBottom: '12px', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          최신 업데이트 기능 ({versionFeatures.length}개)
        </h3>
        <div style={{ display: 'space-y-3' }}>
          {versionFeatures.map((feature: VersionFeature) => (
            <div key={feature.id} className="scum-card" style={{ marginBottom: '12px', padding: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <h4 style={{ fontWeight: 600, color: 'var(--scum-text-primary)', margin: 0, fontSize: '14px' }}>{feature.title}</h4>
                  <VerificationBadge status={feature.status} size="sm" />
                </div>
                <p style={{ fontSize: '13px', color: 'var(--scum-text-secondary)', margin: 0 }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 푸터 */}
      <div style={{ borderTop: '1px solid var(--scum-border)', paddingTop: '12px', marginTop: '16px', fontSize: '12px', color: 'var(--scum-text-muted)' }}>
        <p>
          마지막 확인: {new Date(version.meta.checkedAt).toLocaleDateString("ko-KR")}
          {version.meta.reviewBefore &&
            ` · 업데이트 확인: ${new Date(version.meta.reviewBefore).toLocaleDateString("ko-KR")}`}
        </p>
      </div>
    </div>
  )
}
