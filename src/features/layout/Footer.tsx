import { ExternalLink, MessageSquare, Server, BadgeCheck } from "lucide-react"
import { GALAXY_BRAND_ASSETS, GALAXY_SERVER } from "@/shared/types/constants"
import { useLanguage } from "@/i18n"
import "@/styles/scum-authentic.css"

const footerLinks = [
  { href: "/", navKey: "home" },
  { href: "/guides", navKey: "guides" },
  { href: "/server-info", navKey: "serverInfo" },
  { href: "/events", navKey: "events" },
] as const

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="app-shell app-footer__inner">
        <div className="app-footer__grid">
          <section>
            <div className="galaxy-footer-brand">
              <img src={GALAXY_BRAND_ASSETS.LOGO} alt="SCUM Galaxy" />
              <h3 className="scum-title">{t("footer.about")}</h3>
            </div>
            <p>{t("footer.aboutDesc")}</p>
          </section>

          <section>
            <h4>{t("footer.quickLinks")}</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{t(`nav.${link.navKey}`)}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4>{t("footer.community")}</h4>
            <ul>
              <li>
                <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="app-footer__icon-link">
                  <MessageSquare className="w-4 h-4" />
                  Discord
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>{t("footer.admin", "Notice Author: {{author}}", { author: GALAXY_SERVER.NOTICE_AUTHOR })}</li>
              <li>{t("footer.creator", "Site Built By: {{creator}}", { creator: GALAXY_SERVER.SITE_CREATOR })}</li>
            </ul>
          </section>

          <section>
            <h4>{t("footer.info")}</h4>
            <ul>
              <li>{t("footer.since", "Server Since: {{year}}", { year: GALAXY_SERVER.SINCE_YEAR })}</li>
              <li>{t("footer.game")}</li>
              <li>{t("footer.mode")}</li>
              <li className="app-footer__icon-line">
                <Server className="w-4 h-4" />
                {GALAXY_SERVER.SERVER_ADDRESS}
              </li>
            </ul>
          </section>
        </div>

        <div className="app-footer__bottom">
          <p>
            {t("footer.copyright", "© {{year}} {{name}}. Built by {{creator}}", {
              year: currentYear,
              name: t("footer.about"),
              creator: GALAXY_SERVER.SITE_CREATOR,
            })}
            <BadgeCheck className="w-4 h-4" />
          </p>
          <p>{t("footer.lastUpdate")}</p>
        </div>

        <p className="app-footer__disclaimer">{t("footer.disclaimer")}</p>
      </div>
    </footer>
  )
}
