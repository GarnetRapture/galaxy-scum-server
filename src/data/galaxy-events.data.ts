import type { GalaxyServerEvent } from "@/domains/galaxy-server/event/types"
import { GALAXY_SERVER } from "@/shared/types/constants"

export const galaxyEvents: GalaxyServerEvent[] = [
  {
    id: "event-outlaw-2025-08-16",
    type: "special",
    status: "ended",
    title: "황야의 무법자 이벤트",
    description: "토요일 밤 9시에 진행된 참가 보상형 서버 이벤트입니다.",
    schedule: {
      startDate: "2025-08-16",
      endDate: "2025-08-16",
      time: "21:00",
    },
    reward: "1등 40드라이버 2개와 어드밴스드 락픽 5개, 2등 40드라이버 1개와 어드밴스드 락픽 3개, 3등 40드라이버 1개, 모든 참가자 상품",
    meta: {
      sourceIds: ["source-galaxy-discord-event-2025-08-15"],
      verificationStatus: "verified",
      knowledgeScope: "server-local-policy",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "event-mafia-squad-2025-11-24",
    type: "special",
    status: "ended",
    title: "MAFIA 스쿼드 2주 이벤트",
    description: "MAFIA 스쿼드가 2주간 진행한 자유 참여형 서버 이벤트입니다. 상세 내용은 자유채팅방과 임시이벤트 방 기준입니다.",
    schedule: {
      startDate: "2025-11-24",
      endDate: "2025-12-08",
    },
    reward: "2주간 스쿼드원이 온라인일 때 자유 참여",
    meta: {
      sourceIds: ["source-galaxy-discord-event-2025-11-23"],
      verificationStatus: "verified",
      knowledgeScope: "server-local-policy",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "event-discord-notice-current",
    type: "experience",
    status: "live",
    title: "디스코드 공지 기준 이벤트",
    description: "현재 진행 이벤트와 보상은 디스코드 공지 채널에서 확인합니다.",
    schedule: {
      startDate: "2026-07-05",
      endDate: "2026-07-31",
    },
    reward: `작성자: ${GALAXY_SERVER.NOTICE_AUTHOR}`,
    meta: {
      sourceIds: ["source-galaxy-discord-current-notice"],
      verificationStatus: "partial",
      knowledgeScope: "server-local-policy",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
]
