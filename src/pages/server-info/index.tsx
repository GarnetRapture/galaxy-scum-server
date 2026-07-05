import { AlertTriangle, Car, Server, Shield, Users } from "lucide-react"
import { useLanguage } from "@/i18n"
import { GALAXY_SERVER } from "@/shared/types/constants"
import {
  contentImages,
  galaxyRules,
  pickLocalizedText,
  versionKnowledge,
} from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import { ServerInfoCard } from "@/features/server-landing/ServerInfoCard"
import { DiscordCta } from "@/features/server-landing/DiscordCta"
import "@/App.css"
import "@/styles/scum-authentic.css"

const ruleSeverityKey = {
  standard: "ruleSeverityStandard",
  important: "ruleSeverityImportant",
  critical: "ruleSeverityCritical",
} as const

export function ServerInfoPage() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const headerImage = contentImages[1]

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head galaxy-page-head--media">
        <div>
          <div className="galaxy-kicker">KOR_PVE · Galaxy · Since 2021</div>
          <h1>{t("serverInfo.title")}</h1>
          <p>{t("serverInfo.subtitle")}</p>
        </div>
        <img src={headerImage.src} alt={pickLocalizedText(headerImage.alt, locale)} />
      </section>

      <section className="galaxy-container galaxy-server-summary">
        <article className="galaxy-info-tile">
          <Shield className="w-6 h-6" />
          <h2>{t("serverInfo.pveTitle")}</h2>
          <p>{t("serverInfo.pveDesc")}</p>
        </article>
        <article className="galaxy-info-tile">
          <Users className="w-6 h-6" />
          <h2>{t("serverInfo.squadPolicy")}</h2>
          <p>{t("serverInfo.squadPolicyDesc")}</p>
        </article>
        <article className="galaxy-info-tile">
          <Car className="w-6 h-6" />
          <h2>{t("serverInfo.vehicleCare")}</h2>
          <p>{t("serverInfo.vehicleCareDesc")}</p>
        </article>
        <article className="galaxy-info-tile">
          <Server className="w-6 h-6" />
          <h2>{t("serverInfo.serverIpTitle")}</h2>
          <p>{t("serverInfo.serverIpDesc")}</p>
          <strong className="galaxy-server-address">{GALAXY_SERVER.SERVER_ADDRESS}</strong>
        </article>
      </section>

      <section className="galaxy-container">
        <ServerInfoCard />
      </section>

      <section className="galaxy-container">
        <DiscordCta />
      </section>

      <section className="galaxy-container">
        <div className="galaxy-section-heading">
          <AlertTriangle className="w-5 h-5" />
          <div>
            <span>{t("serverInfo.rulesKicker")}</span>
            <h2>{t("serverInfo.rulesTitle")}</h2>
          </div>
        </div>
        <div className="galaxy-notice-list">
          {galaxyRules.map((rule, index) => (
            <article className={`galaxy-notice-card galaxy-notice-card--${rule.severity}`} key={rule.id}>
              <div className="galaxy-notice-card__meta">
                <span>{t("serverInfo.noticeLabel", "Notice {{n}}", { n: String(index + 1).padStart(2, "0") })}</span>
                <span>{t("events.authorLabel", "Author: {{name}}", { name: GALAXY_SERVER.NOTICE_AUTHOR })}</span>
                <strong>{t(`serverInfo.${ruleSeverityKey[rule.severity]}`)}</strong>
              </div>
              <h3>{pickLocalizedText(rule.title, locale)}</h3>
              {rule.detail ? <p>{pickLocalizedText(rule.detail, locale)}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="galaxy-container galaxy-panel">
        <div className="galaxy-section-heading">
          <Shield className="w-5 h-5" />
          <div>
            <span>{versionKnowledge.version}</span>
            <h2>{t("serverInfo.settingsTitle")}</h2>
          </div>
        </div>
        <div className="galaxy-update-grid">
          {versionKnowledge.highlights
            .filter((section) => section.id === "server-controls" || section.id === "wildlife")
            .map((section) => (
              <article className="galaxy-info-tile" key={section.id}>
                <h3>{pickLocalizedText(section.title, locale)}</h3>
                <p>{pickLocalizedText(section.summary, locale)}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={pickLocalizedText(point, locale)}>{pickLocalizedText(point, locale)}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </section>
    </div>
  )
}

export default ServerInfoPage
