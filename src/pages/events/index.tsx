/**
 * 이벤트 페이지
 * 경로: /events
 */

import { useState } from "react"
import { Calendar, Circle, CircleDot, Clock, Gift } from "lucide-react"
import "@/styles/scum-authentic.css"

type EventStatus = "live" | "upcoming" | "ended"
type EventType = "weekend" | "special" | "experience"

const MOCK_EVENTS = [
  {
    id: "1",
    title: "주말 샌드박스 이벤트",
    type: "weekend" as EventType,
    status: "live" as EventStatus,
    startDate: "2026-07-05",
    endDate: "2026-07-06",
    description: "매주 토요일과 일요일에 진행되는 특별한 파밍 이벤트",
    reward: "경험치 2배, 드롭율 증가",
  },
  {
    id: "2",
    title: "경험치 이벤트",
    type: "experience" as EventType,
    status: "live" as EventStatus,
    startDate: "2026-07-01",
    endDate: "2026-07-31",
    description: "7월 한 달간 진행되는 경험치 부스트 이벤트",
    reward: "모든 활동 경험치 1.5배",
  },
  {
    id: "3",
    title: "여름 특별 이벤트",
    type: "special" as EventType,
    status: "upcoming" as EventStatus,
    startDate: "2026-07-15",
    endDate: "2026-07-22",
    description: "여름 시즌을 맞이한 특별한 이벤트",
    reward: "한정 아이템, 경험치",
  },
  {
    id: "4",
    title: "5월 봄 이벤트",
    type: "special" as EventType,
    status: "ended" as EventStatus,
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    description: "지난 봄 시즌 이벤트",
    reward: "경험치, 아이템",
  },
]

const EVENT_COLORS = {
  weekend: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-900", badge: "bg-purple-100" },
  special: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-900", badge: "bg-pink-100" },
  experience: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-900", badge: "bg-orange-100" },
}

export function EventsPage() {
  const [selectedType, setSelectedType] = useState<EventType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<EventStatus | null>(null)

  const filteredEvents = MOCK_EVENTS.filter((event) => {
    if (selectedType && event.type !== selectedType) return false
    if (selectedStatus && event.status !== selectedStatus) return false
    return true
  })

  const liveEvents = filteredEvents.filter((e) => e.status === "live")
  const upcomingEvents = filteredEvents.filter((e) => e.status === "upcoming")
  const endedEvents = filteredEvents.filter((e) => e.status === "ended")

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--scum-bg)', color: 'var(--scum-text-primary)', width: '100%' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px', paddingTop: '48px', paddingBottom: '48px' }}>
        {/* 헤더 */}
        <div style={{ marginBottom: '48px' }}>
          <h1 className="scum-title" style={{ fontSize: '36px', marginBottom: '8px' }}>갤럭시 서버 이벤트</h1>
          <p style={{ fontSize: '16px', color: 'var(--scum-text-secondary)' }}>현재 및 예정 이벤트 안내</p>
        </div>

        {/* 필터 */}
        <div style={{ marginBottom: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {[
            { label: '전체', value: null },
            { label: '주말 이벤트', value: 'weekend' as EventType },
            { label: '특별 이벤트', value: 'special' as EventType },
            { label: '경험치 이벤트', value: 'experience' as EventType },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={() => setSelectedType(btn.value)}
              className="scum-button"
              style={{
                backgroundColor: selectedType === btn.value ? 'rgba(0, 217, 255, 0.1)' : 'transparent',
                borderColor: selectedType === btn.value ? 'var(--scum-cyan)' : 'var(--scum-border)',
              }}
            >
              {btn.label}
            </button>
          ))}
          {[
            { label: '진행 중', value: 'live' as EventStatus },
            { label: '예정', value: 'upcoming' as EventStatus },
            { label: '종료', value: 'ended' as EventStatus },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={() => setSelectedStatus(selectedStatus === btn.value ? null : btn.value)}
              className="scum-button"
              style={{
                backgroundColor: selectedStatus === btn.value ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
                borderColor: selectedStatus === btn.value ? 'var(--scum-green)' : 'var(--scum-border)',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* 진행 중인 이벤트 */}
        {liveEvents.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CircleDot className="w-5 h-5 text-red-600" /> 진행 중인 이벤트
            </h2>
            <div className="space-y-4">
              {liveEvents.map((event) => {
                const colors = EVENT_COLORS[event.type]
                return (
                  <div
                    key={event.id}
                    className={`${colors.bg} border-2 ${colors.border} rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`${colors.badge} ${colors.text} px-3 py-1 rounded-full text-sm font-semibold`}>
                          {event.type === "weekend"
                            ? "주말 이벤트"
                            : event.type === "special"
                              ? "특별 이벤트"
                              : "경험치 이벤트"}
                        </span>
                      </div>
                      <span className="text-red-600 text-sm font-semibold">지금 진행 중</span>
                    </div>
                    <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {event.startDate} ~ {event.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Gift className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.reward}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* 예정 이벤트 */}
        {upcomingEvents.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Circle className="w-5 h-5 text-yellow-600" /> 예정 이벤트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map((event) => {
                const colors = EVENT_COLORS[event.type]
                return (
                  <div key={event.id} className={`${colors.bg} border-2 ${colors.border} rounded-lg p-6`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`${colors.badge} ${colors.text} px-2 py-1 rounded text-xs font-semibold`}>
                        {event.type === "weekend" ? "주말" : event.type === "special" ? "특별" : "경험치"}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold ${colors.text} mb-2`}>{event.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {event.startDate} 시작
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* 종료 이벤트 */}
        {endedEvents.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Circle className="w-5 h-5 text-gray-600" /> 종료된 이벤트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {endedEvents.map((event) => {
                const colors = EVENT_COLORS[event.type]
                return (
                  <div key={event.id} className={`${colors.bg} border ${colors.border} rounded-lg p-6 opacity-75`}>
                    <h3 className={`text-lg font-bold ${colors.text} mb-2`}>{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {event.startDate} ~ {event.endDate}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">해당하는 이벤트가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventsPage
