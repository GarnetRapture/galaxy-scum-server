import { CheckCircle2, ExternalLink, MessageSquare } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"
import { useLanguage } from "@/i18n"

const discordFeatureKeys = ["feature1", "feature2", "feature3", "feature4"] as const

export function DiscordCta() {
  const { t } = useLanguage()

  return (
    <section className="galaxy-panel discord-cta">
      <div className="galaxy-section-heading">
        <MessageSquare className="w-5 h-5" />
        <div>
          <span>Discord</span>
          <h2>{t("discord.title")}</h2>
        </div>
      </div>

      <p>{t("discord.description")}</p>

      <ul className="discord-cta__list">
        {discordFeatureKeys.map((key) => (
          <li key={key}>
            <CheckCircle2 className="w-4 h-4" />
            {t(`discord.${key}`)}
          </li>
        ))}
      </ul>

      <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="scum-button">
        <MessageSquare className="w-4 h-4" />
        {t("discord.cta")}
        <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  )
}
