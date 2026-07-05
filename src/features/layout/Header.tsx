import { useTheme } from "next-themes"
import { Link } from "react-router-dom"
import { ExternalLink, MessageSquare, Moon, Sun } from "lucide-react"
import { MAIN_NAV_ROUTES } from "@/shared/types/routes"
import { useLanguage } from "@/i18n"
import { GALAXY_BRAND_ASSETS, GALAXY_SERVER } from "@/shared/types/constants"
import "@/styles/scum-authentic.css"

const navKeyByPath: Record<string, string> = {
  "/": "home",
  "/guides": "guides",
  "/wiki": "wiki",
  "/server-info": "serverInfo",
  "/beginner": "beginner",
  "/events": "events",
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="scum-header">
      <div className="app-shell app-header__inner">
        <Link to="/" className="galaxy-brand-link" aria-label="Galaxy Server home">
          <img className="galaxy-brand-logo" src={GALAXY_BRAND_ASSETS.LOGO} alt="SCUM Galaxy" />
          <span className="galaxy-brand-copy">
            <strong>{t("site.title")}</strong>
            <small>{t("site.subtitle")}</small>
          </span>
        </Link>

        <nav className="app-nav" aria-label="Main navigation">
          {MAIN_NAV_ROUTES.map((route) => (
            <Link key={route.path} to={route.path} className="app-nav__link">
              {t(`nav.${navKeyByPath[route.path]}`, route.label)}
            </Link>
          ))}
        </nav>

        <div className="app-header__actions">
          <div className="language-switch" aria-label="Language switch">
            <button
              className={language === "ko" ? "language-switch__button language-switch__button--active" : "language-switch__button"}
              type="button"
              onClick={() => setLanguage("ko")}
            >
              한글
            </button>
            <button
              className={language === "en" ? "language-switch__button language-switch__button--active" : "language-switch__button"}
              type="button"
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="icon-button"
            aria-label="테마 전환"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a className="scum-button app-header__discord" href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="w-4 h-4" />
            Discord
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  )
}
