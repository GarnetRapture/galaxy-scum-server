import { CheckCircle2, ExternalLink, MessageSquare } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"

const discordFeatures = [
  "플레이어 커뮤니티 및 팁 공유",
  "서버 공지와 주말 이벤트 일정 확인",
  "디스코드 상점과 아이템 거래 정보 확인",
  "신규 유저 질문과 지원 요청",
]

export function DiscordCta() {
  return (
    <section className="galaxy-panel discord-cta">
      <div className="galaxy-section-heading">
        <MessageSquare className="w-5 h-5" />
        <div>
          <span>Discord</span>
          <h2>디스코드 커뮤니티</h2>
        </div>
      </div>

      <p>갤럭시 서버의 디스코드 채널에서 공지, 질문, 이벤트, 상점 정보를 확인합니다.</p>

      <ul className="discord-cta__list">
        {discordFeatures.map((feature) => (
          <li key={feature}>
            <CheckCircle2 className="w-4 h-4" />
            {feature}
          </li>
        ))}
      </ul>

      <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="scum-button">
        <MessageSquare className="w-4 h-4" />
        디스코드 참가하기
        <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  )
}
