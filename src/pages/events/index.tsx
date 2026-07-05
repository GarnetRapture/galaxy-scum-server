import { useState } from "react"
import { Calendar, Circle, CircleDot, Gift } from "lucide-react"
import { galaxyEvents } from "@/data/galaxy-events.data"
import { GALAXY_SERVER } from "@/shared/types/constants"
import { useLanguage } from "@/i18n"
import { pickLocalizedText } from "@/data/galaxy-wiki-content.data"
import type { GalaxyServerEventStatus, GalaxyServerEventType } from "@/domains/galaxy-server/event/types"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import "@/styles/scum-authentic.css"
import "@/App.css"

const eventTypeKeyByType: Record<GalaxyServerEventType, string> = {
  weekend: "weekendEvent",
  special: "specialEvent",
  experience: "experienceEvent",
}

const eventStatusKeyByStatus: Record<GalaxyServerEventStatus, string> = {
  live: "live",
  upcoming: "upcoming",
  ended: "ended",
}

export function EventsPage() {
  const { t, language } = useLanguage()
  const locale = language as LocaleCode
  const [selectedType, setSelectedType] = useState<GalaxyServerEventType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<GalaxyServerEventStatus | null>(null)

  const filteredEvents = galaxyEvents.filter((event) => {
    if (selectedType && event.type !== selectedType) return false
    if (selectedStatus && event.status !== selectedStatus) return false
    return true
  })

  const typeFilterButtons: Array<{ label: string; value: GalaxyServerEventType | null }> = [
    { label: t("events.all"), value: null },
    { label: t(`events.${eventTypeKeyByType.weekend}`), value: "weekend" },
    { label: t(`events.${eventTypeKeyByType.special}`), value: "special" },
    { label: t(`events.${eventTypeKeyByType.experience}`), value: "experience" },
  ]

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head">
        <div className="galaxy-kicker">Galaxy Notice</div>
        <h1>{t("events.title")}</h1>
        <p>{t("events.subtitle")}</p>
      </section>

      <section className="galaxy-container event-filter-row">
        {typeFilterButtons.map((button) => (
          <button
            key={button.label}
            type="button"
            onClick={() => setSelectedType(button.value)}
            className={selectedType === button.value ? "scum-button event-filter-row__button--active" : "scum-button"}
          >
            {button.label}
          </button>
        ))}
        {(["live", "upcoming", "ended"] as GalaxyServerEventStatus[]).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
            className={selectedStatus === status ? "scum-button event-filter-row__button--active" : "scum-button"}
          >
            {t(`events.${eventStatusKeyByStatus[status]}`)}
          </button>
        ))}
      </section>

      <section className="galaxy-container galaxy-notice-list">
        {filteredEvents.map((event) => {
          const StatusIcon = event.status === "live" ? CircleDot : Circle
          return (
            <article className={`galaxy-notice-card galaxy-notice-card--${event.status}`} key={event.id}>
              <div className="galaxy-notice-card__meta">
                <span>{t(`events.${eventTypeKeyByType[event.type]}`)}</span>
                <span>{t("events.authorLabel", "Author: {{name}}", { name: GALAXY_SERVER.NOTICE_AUTHOR })}</span>
                <strong>{t(`events.${eventStatusKeyByStatus[event.status]}`)}</strong>
              </div>
              <h2>{pickLocalizedText(event.title, locale)}</h2>
              <p>{pickLocalizedText(event.description, locale)}</p>
              <div className="event-card__facts">
                <span>
                  <Calendar className="w-4 h-4" />
                  {event.schedule.startDate} ~ {event.schedule.endDate}
                  {event.schedule.time ? ` ${event.schedule.time}` : ""}
                </span>
                {event.reward ? (
                  <span>
                    <Gift className="w-4 h-4" />
                    {pickLocalizedText(event.reward, locale)}
                  </span>
                ) : null}
                <span>
                  <StatusIcon className="w-4 h-4" />
                  {t(`events.${eventStatusKeyByStatus[event.status]}`)}
                </span>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default EventsPage
