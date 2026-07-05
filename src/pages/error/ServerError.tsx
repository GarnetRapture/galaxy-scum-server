/**
 * 500 서버 오류 페이지
 */

import { useNavigate } from "react-router-dom"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"
import { useLanguage } from "@/i18n"
import "@/App.css"
import "@/styles/scum-authentic.css"

export function ServerErrorPage() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="galaxy-page error-page">
      <div className="galaxy-container error-page__content">
        <AlertTriangle className="error-page__icon" />
        <h1>{t("errorPage.serverErrorTitle")}</h1>
        <p>{t("errorPage.serverErrorDesc1")}</p>
        <p>{t("errorPage.serverErrorDesc2")}</p>

        <div className="error-page__actions">
          <button onClick={handleRefresh} className="scum-button accent">
            <RefreshCw className="w-5 h-5" />
            {t("errorPage.serverErrorRefresh")}
          </button>
          <button onClick={() => navigate("/")} className="scum-button">
            <Home className="w-5 h-5" />
            {t("errorPage.notFoundBackHome")}
          </button>
        </div>

        <p className="error-page__contact">
          {t("errorPage.serverErrorContactPrefix")}{" "}
          <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
            {t("errorPage.contactDiscord")}
          </a>
        </p>
      </div>
    </div>
  )
}

export default ServerErrorPage
