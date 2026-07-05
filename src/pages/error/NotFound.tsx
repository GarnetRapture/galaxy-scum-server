/**
 * 404 페이지
 */

import { useNavigate } from "react-router-dom"
import { Home, Search } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"
import { useLanguage } from "@/i18n"
import "@/App.css"
import "@/styles/scum-authentic.css"

export function NotFoundPage() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <div className="galaxy-page error-page">
      <div className="galaxy-container error-page__content">
        <div className="error-page__code">404</div>
        <h1>{t("errorPage.notFoundTitle")}</h1>
        <p>{t("errorPage.notFoundDesc")}</p>

        <div className="error-page__actions">
          <button onClick={() => navigate("/")} className="scum-button accent">
            <Home className="w-5 h-5" />
            {t("errorPage.notFoundBackHome")}
          </button>
          <button onClick={() => navigate("/guides")} className="scum-button">
            <Search className="w-5 h-5" />
            {t("errorPage.notFoundSearchGuides")}
          </button>
        </div>

        <p className="error-page__contact">
          {t("errorPage.contactPrefix")}{" "}
          <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
            {t("errorPage.contactDiscord")}
          </a>
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage
