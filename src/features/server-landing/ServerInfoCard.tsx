/**
 * 갤럭시 서버 정보 카드
 * getGalaxyServerProfile()의 데이터를 표시
 */

import { useQuery } from "@tanstack/react-query"
import { getGalaxyServerProfile } from "@/shared/api/galaxy-server"
import { CheckCircle2, Server, Users, Zap, Package, Car, BookOpen, Trophy } from "lucide-react"
import { useLanguage } from "@/i18n"
import { pickLocalizedText } from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import { PageSkeleton } from "@/features/loading/LoadingSkeleton"
import "@/App.css"
import "@/styles/scum-authentic.css"

export function ServerInfoCard() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["galaxy-server-profile"],
    queryFn: getGalaxyServerProfile,
  })

  if (isLoading) {
    return <PageSkeleton />
  }

  if (error || !profile) {
    return <div className="galaxy-panel guide-empty-state guide-empty-state--danger">{t("serverInfoCard.loadError")}</div>
  }

  const dateLocale = locale === "ko" ? "ko-KR" : "en-US"

  const supportFeatures = [
    { icon: Package, label: t("serverInfoCard.welcomePack"), on: profile.welcomePackEnabled, onLabel: t("serverInfoCard.welcomePackOn") },
    { icon: Car, label: t("serverInfoCard.vehicleRental"), on: profile.vehicleRentalEnabled, onLabel: t("serverInfoCard.vehicleRentalOn") },
    { icon: BookOpen, label: t("serverInfoCard.newbieCare"), on: profile.newbieGuideEnabled, onLabel: t("serverInfoCard.newbieCareOn") },
    { icon: Trophy, label: t("serverInfoCard.weekendEvent"), on: profile.weekendEventsEnabled, onLabel: t("serverInfoCard.weekendEventOn"), offLabel: t("serverInfoCard.weekendEventOff") },
    { icon: Zap, label: t("serverInfoCard.experienceEvent"), on: profile.experienceEventActive, onLabel: t("serverInfoCard.experienceEventOn"), offLabel: t("serverInfoCard.experienceEventOff") },
  ]

  return (
    <article className="galaxy-panel">
      <div className="galaxy-section-heading">
        <Server className="w-5 h-5" />
        <div>
          <span>
            {t("serverInfoCard.metaLine", undefined, {
              playStyle: profile.playStyle,
              year: profile.sinceYear,
              author: profile.adminDiscordName,
            })}
          </span>
          <h2>{pickLocalizedText(profile.name, locale)}</h2>
        </div>
      </div>

      <div className="galaxy-stack">
        <p className="galaxy-note">{profile.roomTitle}</p>

        <div className="galaxy-update-grid">
          <div className="galaxy-info-tile">
            <h3>{t("serverInfoCard.sentry")}</h3>
            <p>{t("serverInfoCard.none")}</p>
          </div>
          <div className="galaxy-info-tile">
            <h3>{t("serverInfoCard.operatingSince")}</h3>
            <p>{t("serverInfoCard.yearSuffix", undefined, { year: profile.sinceYear })}</p>
          </div>
        </div>

        <div className="galaxy-chip-row">
          {profile.searchKeywords.map((keyword) => (
            <span className="scum-badge" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>

        <div className="scum-divider"></div>

        <div className="galaxy-update-grid">
          {supportFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div className="galaxy-info-tile" key={feature.label}>
                <Icon className="w-5 h-5" />
                <h3>{feature.label}</h3>
                <p>{feature.on ? feature.onLabel : feature.offLabel ?? t("serverInfoCard.notSupported")}</p>
              </div>
            )
          })}
          <div className="galaxy-info-tile">
            <Users className="w-5 h-5" />
            <h3>{t("serverInfoCard.communityVibe")}</h3>
            <p>{t("serverInfoCard.communityVibeDesc")}</p>
          </div>
        </div>

        <div className="scum-divider"></div>

        <div className="galaxy-info-tile">
          <h3>{t("serverInfoCard.otherFeatures")}</h3>
          <ul>
            {profile.features.map((feature) => (
              <li key={pickLocalizedText(feature, locale)}>
                <CheckCircle2 className="w-4 h-4" />
                {pickLocalizedText(feature, locale)}
              </li>
            ))}
          </ul>
        </div>

        <p className="galaxy-note">
          {t("serverInfoCard.lastChecked", undefined, { date: new Date(profile.meta.checkedAt).toLocaleDateString(dateLocale) })}
        </p>
      </div>
    </article>
  )
}
