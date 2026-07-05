import { BookOpen, Gamepad2, MessageSquare, Package, Sparkles } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"
import { useLanguage } from "@/i18n"

const newcomerCards = [
  { icon: BookOpen, titleKey: "survivalGuide", descKey: "survivalDesc" },
  { icon: Package, titleKey: "welcomePack", descKey: "welcomePackDesc" },
  { icon: Sparkles, titleKey: "newbieCare", descKey: "newbieCareDesc" },
] as const

export function NewbieCtaSection() {
  const { t } = useLanguage()

  return (
    <section className="galaxy-panel newcomer-section">
      <div className="galaxy-section-heading">
        <Sparkles className="w-5 h-5" />
        <div>
          <span>{t("newcomer.kicker")}</span>
          <h2>{t("newcomer.title")}</h2>
        </div>
      </div>

      <p className="newcomer-section__lead">{t("newcomer.lead")}</p>

      <div className="newcomer-section__grid">
        {newcomerCards.map((card) => {
          const Icon = card.icon
          return (
            <article className="galaxy-info-tile" key={card.titleKey}>
              <Icon className="w-5 h-5" />
              <h3>{t(`newcomer.${card.titleKey}`)}</h3>
              <p>{t(`newcomer.${card.descKey}`)}</p>
            </article>
          )
        })}
      </div>

      <div className="galaxy-callout">
        <strong>
          <Gamepad2 className="w-4 h-4" />
          {t("newcomer.gameStart")}
        </strong>
        <ol className="newcomer-section__steps">
          <li>{t("newcomer.step1")}</li>
          <li>{t("newcomer.step2")}</li>
          <li>{t("newcomer.step3")}</li>
        </ol>
        <a className="galaxy-inline-link" href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
          <MessageSquare className="w-4 h-4" />
          {t("newcomer.discordNewTab")}
        </a>
      </div>
    </section>
  )
}
