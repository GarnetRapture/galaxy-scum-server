/**
 * 전체 푸터 - 현대 다크테마 스타일
 */

import { MessageSquare, ExternalLink, Server, BadgeCheck } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"
import "@/styles/scum-authentic.css"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--scum-bg-secondary)', borderTop: '1px solid var(--scum-border)', color: 'var(--scum-text-secondary)', marginTop: '64px' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 브랜드 */}
          <div>
            <h3 className="scum-title" style={{ fontSize: '16px', marginBottom: '12px' }}>갤럭시 서버</h3>
            <p style={{ fontSize: '14px', color: 'var(--scum-text-secondary)' }}>
              SCUM 한국 PVE 커뮤니티 서버의 공식 정보 사이트입니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--scum-text-primary)' }}>빠른 링크</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="/" style={{ fontSize: '14px', color: 'var(--scum-cyan)', textDecoration: 'none', borderBottom: 'none' }}>홈</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/guides" style={{ fontSize: '14px', color: 'var(--scum-cyan)', textDecoration: 'none', borderBottom: 'none' }}>가이드</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/server-info" style={{ fontSize: '14px', color: 'var(--scum-cyan)', textDecoration: 'none', borderBottom: 'none' }}>서버 정보</a>
              </li>
              <li>
                <a href="/events" style={{ fontSize: '14px', color: 'var(--scum-cyan)', textDecoration: 'none', borderBottom: 'none' }}>이벤트</a>
              </li>
            </ul>
          </div>

          {/* 커뮤니티 */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--scum-text-primary)' }}>커뮤니티</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '8px' }}>
                <a
                  href={GALAXY_SERVER.DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--scum-cyan)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: 'none' }}
                >
                  <MessageSquare className="w-4 h-4" />
                  디스코드
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li style={{ marginBottom: '8px', fontSize: '14px' }}>
                <span>관리자: 블락</span>
              </li>
              <li style={{ fontSize: '14px' }}>
                <span>공식 채널 참고</span>
              </li>
            </ul>
          </div>

          {/* 정보 */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--scum-text-primary)' }}>정보</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '8px', fontSize: '14px' }}>
                <span>서버 시작: 2021</span>
              </li>
              <li style={{ marginBottom: '8px', fontSize: '14px' }}>
                <span>게임: SCUM (Gamepires)</span>
              </li>
              <li style={{ fontSize: '14px' }}>
                <span>플레이 모드: PVE</span>
              </li>
              <li style={{ marginTop: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Server className="w-4 h-4" style={{ color: 'var(--scum-cyan)' }} />
                <span>{GALAXY_SERVER.SERVER_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="scum-divider"></div>

        {/* 하단 정보 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', textAlign: 'center', marginBottom: '16px' }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
            © {currentYear} 갤럭시 서버. 제작: <BadgeCheck className="w-4 h-4" style={{ color: 'var(--scum-green)' }} /> 플레이어들
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>출처 검증: Nekoi</span>
            <span>•</span>
            <span>마지막 업데이트: 2026-07-05</span>
          </div>
        </div>

        {/* 면책사항 */}
        <div style={{ borderTop: '1px solid var(--scum-border)', paddingTop: '16px', marginTop: '16px', fontSize: '12px', color: 'var(--scum-text-muted)' }}>
          <p>
            이 웹사이트는 갤럭시 서버의 팬 가이드입니다. SCUM은 Gamepires의 저작권 게임입니다.
            모든 정보는 최선을 다해 정확하게 유지되지만, 게임 업데이트에 따라 변경될 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
