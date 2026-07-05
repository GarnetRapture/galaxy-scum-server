/**
 * 전체 헤더 네비게이션 - 현대 다크테마 게임 스타일
 */

import { useTheme } from "next-themes"
import { Link } from "react-router-dom"
import { MessageSquare, ExternalLink, Moon, Sun } from "lucide-react"
import { MAIN_NAV_ROUTES } from "@/shared/types/routes"
import { useLanguage } from "@/i18n"
import { GALAXY_SERVER } from "@/shared/types/constants"
import "@/styles/scum-authentic.css"

const navKeyByPath: Record<string, string> = {
  "/": "home",
  "/guides": "guides",
  "/server-info": "serverInfo",
  "/beginner": "beginner",
  "/events": "events",
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="scum-header sticky top-0 z-50" style={{ backgroundColor: 'var(--scum-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* 상단 - 로고 및 제목 */}
        <div className="scum-header-top py-3">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 className="scum-title" style={{ fontSize: '20px', marginBottom: '0' }}>{t("site.title")}</h2>
            <p style={{ fontSize: '12px', color: 'var(--scum-text-secondary)', letterSpacing: '0.5px', marginBottom: 0 }}>
              {t("site.subtitle")}
            </p>
          </Link>
        </div>

        {/* 네비게이션 바 */}
        <div className="flex items-center justify-between py-2">
          <nav className="flex items-center gap-6">
            {MAIN_NAV_ROUTES.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'var(--scum-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--scum-cyan)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--scum-text-secondary)'
                }}
              >
                {t(`nav.${navKeyByPath[route.path]}`, route.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* 언어 전환 */}
            <div className="scum-status active" style={{ fontSize: '0.75rem', gap: '4px' }}>
              <button
                onClick={() => setLanguage('ko')}
                style={{
                  padding: '2px 6px',
                  backgroundColor: language === 'ko' ? 'var(--scum-cyan)' : 'transparent',
                  color: language === 'ko' ? 'var(--scum-bg)' : 'var(--scum-cyan)',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                }}
              >
                한글
              </button>
              <span style={{ color: 'var(--scum-text-muted)' }}>|</span>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  padding: '2px 6px',
                  backgroundColor: language === 'en' ? 'var(--scum-cyan)' : 'transparent',
                  color: language === 'en' ? 'var(--scum-bg)' : 'var(--scum-cyan)',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                }}
              >
                EN
              </button>
            </div>

            {/* 다크모드 토글 */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="scum-button"
              style={{ padding: '6px 10px' }}
              aria-label="테마 전환"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" style={{ color: 'var(--scum-orange)' }} />
              ) : (
                <Moon className="w-4 h-4" style={{ color: 'var(--scum-cyan)' }} />
              )}
            </button>

            {/* 디스코드 버튼 */}
            <a
              href={GALAXY_SERVER.DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="scum-button"
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              <MessageSquare className="w-4 h-4" />
              DISCORD
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
