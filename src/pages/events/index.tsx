import { useState } from "react"
import { Calendar, Circle, CircleDot, Gift } from "lucide-react"
import { galaxyEvents } from "@/data/galaxy-events.data"
import { GALAXY_SERVER } from "@/shared/types/constants"
import type { GalaxyServerEventStatus, GalaxyServerEventType } from "@/domains/galaxy-server/event/types"
import "@/styles/scum-authentic.css"
import "@/App.css"

const eventTypeLabels: Record<GalaxyServerEventType, string> = {
  weekend: "주말 이벤트",
  special: "특별 이벤트",
  experience: "경험치 이벤트",
}

const eventStatusLabels: Record<GalaxyServerEventStatus, string> = {
  live: "진행 중",
  upcoming: "예정",
  ended: "종료",
}

export function EventsPage() {
  const [selectedType, setSelectedType] = useState<GalaxyServerEventType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<GalaxyServerEventStatus | null>(null)

  const filteredEvents = galaxyEvents.filter((event) => {
    if (selectedType && event.type !== selectedType) return false
    if (selectedStatus && event.status !== selectedStatus) return false
    return true
  })

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head">
        <div className="galaxy-kicker">Galaxy Notice</div>
        <h1>갤럭시 서버 이벤트</h1>
        <p>디스코드 공지에서 제공된 이벤트 기록과 현재 공지 확인 흐름을 카드 리스트로 정리합니다.</p>
      </section>

      <section className="galaxy-container event-filter-row">
        {[
          { label: "전체", value: null },
          { label: "주말 이벤트", value: "weekend" as GalaxyServerEventType },
          { label: "특별 이벤트", value: "special" as GalaxyServerEventType },
          { label: "경험치 이벤트", value: "experience" as GalaxyServerEventType },
        ].map((button) => (
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
            {eventStatusLabels[status]}
          </button>
        ))}
      </section>

      <section className="galaxy-container galaxy-notice-list">
        {filteredEvents.map((event) => {
          const StatusIcon = event.status === "live" ? CircleDot : Circle
          return (
            <article className={`galaxy-notice-card galaxy-notice-card--${event.status}`} key={event.id}>
              <div className="galaxy-notice-card__meta">
                <span>{eventTypeLabels[event.type]}</span>
                <span>작성자: {GALAXY_SERVER.NOTICE_AUTHOR}</span>
                <strong>{eventStatusLabels[event.status]}</strong>
              </div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <div className="event-card__facts">
                <span>
                  <Calendar className="w-4 h-4" />
                  {event.schedule.startDate} ~ {event.schedule.endDate}
                  {event.schedule.time ? ` ${event.schedule.time}` : ""}
                </span>
                {event.reward ? (
                  <span>
                    <Gift className="w-4 h-4" />
                    {event.reward}
                  </span>
                ) : null}
                <span>
                  <StatusIcon className="w-4 h-4" />
                  {eventStatusLabels[event.status]}
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
