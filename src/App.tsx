import { Link } from "react-router-dom"
import {
  BadgeCheck,
  BookOpen,
  Crosshair,
  ExternalLink,
  MapPinned,
  ShieldAlert,
  Sparkles,
  Server,
} from "lucide-react"
import { CurrentVersionCard } from "./features/version-status/CurrentVersionCard"
import { useLanguage } from "@/i18n"
import { GALAXY_SERVER } from "@/shared/types/constants"
import {
  beginnerRouteSteps,
  contentImages,
  galaxyRules,
  pickLocalizedText,
  scumKnowledgeSections,
  statRecommendations,
  versionKnowledge,
} from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import "./App.css"
import "./styles/scum-authentic.css"

function App() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const heroImage = contentImages[0]
  const capsuleImage = contentImages[2]
  const criticalRules = galaxyRules.filter((rule) => rule.severity === "critical").slice(0, 5)

  return (
    <div className="galaxy-page">
      <section className="galaxy-hero">
        <img className="galaxy-hero__image" src={heroImage.src} alt={pickLocalizedText(heroImage.alt, locale)} />
        <div className="galaxy-hero__shade" />
        <div className="galaxy-container galaxy-hero__content">
          <div className="galaxy-kicker">{t("home.kicker")}</div>
          <h1>{t("home.title")}</h1>
          <p>{t("home.description")}</p>
          <div className="galaxy-hero__actions">
            <Link className="scum-button" to="/beginner">
              <Sparkles className="w-4 h-4" />
              {t("home.startGuide")}
            </Link>
            <Link className="scum-button" to="/server-info">
              <ShieldAlert className="w-4 h-4" />
              {t("home.serverRules")}
            </Link>
            <a className="scum-button accent" href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Discord
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="galaxy-connection-strip">
            <div>
              <Server className="w-4 h-4" />
              <span>{t("home.serverIp")}</span>
              <strong>{GALAXY_SERVER.SERVER_ADDRESS}</strong>
            </div>
            <div>
              <ExternalLink className="w-4 h-4" />
              <span>{t("home.discordNewTab")}</span>
              <strong>discord.gg/VeNFX3CAwZ</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="galaxy-container galaxy-section-grid">
        <article className="galaxy-panel galaxy-panel--wide">
          <div className="galaxy-section-heading">
            <BadgeCheck className="w-5 h-5" />
            <div>
              <span>{versionKnowledge.releaseDate}</span>
              <h2>{pickLocalizedText(versionKnowledge.title, locale)}</h2>
            </div>
          </div>
          <div className="galaxy-update-grid">
            {versionKnowledge.highlights.map((section) => (
              <div className="galaxy-info-tile" key={section.id}>
                <h3>{pickLocalizedText(section.title, locale)}</h3>
                <p>{pickLocalizedText(section.summary, locale)}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={pickLocalizedText(point, locale)}>{pickLocalizedText(point, locale)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <aside className="galaxy-panel">
          <img className="galaxy-media" src={capsuleImage.src} alt={pickLocalizedText(capsuleImage.alt, locale)} />
          <h2>{t("home.currentInfoBasis")}</h2>
          <CurrentVersionCard />
        </aside>
      </section>

      <section className="galaxy-container">
        <div className="galaxy-section-heading">
          <Crosshair className="w-5 h-5" />
          <div>
            <span>{t("home.recommendedStart")}</span>
            <h2>{t("home.recommendedStartTitle")}</h2>
          </div>
        </div>
        <div className="galaxy-stat-grid">
          {statRecommendations.map((stat) => (
            <article className="galaxy-stat-card" key={stat.id}>
              <div className="galaxy-stat-card__head">
                <span>{stat.attribute}</span>
                <strong>{stat.recommendedValue}</strong>
              </div>
              <h3>{pickLocalizedText(stat.title, locale)}</h3>
              <p>{pickLocalizedText(stat.primaryRecommendation, locale)}</p>
              <div className="galaxy-chip-row">
                {stat.skills.map((skill) => (
                  <span className="scum-badge" key={pickLocalizedText(skill, locale)}>
                    {pickLocalizedText(skill, locale)}
                  </span>
                ))}
              </div>
              {stat.alternatives.map((alternative) => (
                <p className="galaxy-note" key={pickLocalizedText(alternative, locale)}>
                  {pickLocalizedText(alternative, locale)}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="galaxy-container galaxy-section-grid">
        <article className="galaxy-panel">
          <div className="galaxy-section-heading">
            <BookOpen className="w-5 h-5" />
            <div>
              <span>{t("home.scumSystems")}</span>
              <h2>{t("home.wikiCoreSummary")}</h2>
            </div>
          </div>
          <div className="galaxy-stack">
            {scumKnowledgeSections.map((section) => (
              <div className="galaxy-info-tile" key={section.id}>
                <h3>{pickLocalizedText(section.title, locale)}</h3>
                <p>{pickLocalizedText(section.summary, locale)}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={pickLocalizedText(point, locale)}>{pickLocalizedText(point, locale)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="galaxy-panel">
          <div className="galaxy-section-heading">
            <MapPinned className="w-5 h-5" />
            <div>
              <span>{t("home.beginnerRoute")}</span>
              <h2>{t("home.onboardingFlow")}</h2>
            </div>
          </div>
          <div className="galaxy-timeline">
            {beginnerRouteSteps.map((step, index) => (
              <div className="galaxy-timeline__item" key={step.id}>
                <span>{index + 1}</span>
                <div>
                  <strong>{pickLocalizedText(step.title, locale)}</strong>
                  <small>{pickLocalizedText(step.timeframe, locale)}</small>
                  <p>{pickLocalizedText(step.galaxyNote, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="galaxy-container galaxy-rules-preview">
        <div className="galaxy-section-heading">
          <ShieldAlert className="w-5 h-5" />
          <div>
            <span>{t("home.requiredReading")}</span>
            <h2>{t("home.criticalRules")}</h2>
          </div>
        </div>
        <div className="galaxy-rule-grid">
          {criticalRules.map((rule) => (
            <article className="galaxy-rule-card" key={rule.id}>
              <h3>{pickLocalizedText(rule.title, locale)}</h3>
              {rule.detail ? <p>{pickLocalizedText(rule.detail, locale)}</p> : null}
            </article>
          ))}
        </div>
        <Link className="scum-button" to="/server-info">
          {t("home.viewAllRules")}
        </Link>
      </section>
    </div>
  )
}

export default App
