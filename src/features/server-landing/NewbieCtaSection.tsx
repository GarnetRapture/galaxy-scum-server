import { BookOpen, Gamepad2, MessageSquare, Package, Sparkles } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"

const newcomerCards = [
  {
    icon: BookOpen,
    title: "생존 가이드",
    description: "캐릭터 생성, 물과 음식 확보, 첫 피난처 확보까지 단계별로 확인합니다.",
  },
  {
    icon: Package,
    title: "웰컴팩 안내",
    description: "신규 유저가 초반 생존에 필요한 시작 아이템을 받을 수 있는 흐름을 안내합니다.",
  },
  {
    icon: Sparkles,
    title: "뉴비 케어",
    description: "디스코드 문의를 통해 서버 적응, 기본 규칙, 초반 이동 동선을 확인합니다.",
  },
]

export function NewbieCtaSection() {
  return (
    <section className="galaxy-panel newcomer-section">
      <div className="galaxy-section-heading">
        <Sparkles className="w-5 h-5" />
        <div>
          <span>New Player</span>
          <h2>신규 유저를 위한 안내</h2>
        </div>
      </div>

      <p className="newcomer-section__lead">
        SCUM에 처음 입문하거나 갤럭시 서버에 새로 온 플레이어가 첫 생존 루프를 놓치지 않도록 구성한 시작 안내입니다.
      </p>

      <div className="newcomer-section__grid">
        {newcomerCards.map((card) => {
          const Icon = card.icon
          return (
            <article className="galaxy-info-tile" key={card.title}>
              <Icon className="w-5 h-5" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          )
        })}
      </div>

      <div className="galaxy-callout">
        <strong>
          <Gamepad2 className="w-4 h-4" />
          게임 시작 3단계
        </strong>
        <ol className="newcomer-section__steps">
          <li>캐릭터 생성 후 서버에 접속합니다.</li>
          <li>웰컴팩과 기본 생존 아이템을 확인합니다.</li>
          <li>디스코드에서 질문과 지원 요청을 남깁니다.</li>
        </ol>
        <a className="galaxy-inline-link" href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
          <MessageSquare className="w-4 h-4" />
          디스코드 새창 연결
        </a>
      </div>
    </section>
  )
}
