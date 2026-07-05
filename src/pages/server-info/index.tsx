import { AlertTriangle, Car, ExternalLink, MessageSquare, Server, Shield, Users } from "lucide-react"
import { useLanguage } from "@/i18n"
import { GALAXY_SERVER } from "@/shared/types/constants"
import {
  contentImages,
  galaxyRules,
  pickLocalizedText,
  versionKnowledge,
} from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import "@/App.css"
import "@/styles/scum-authentic.css"

const ruleSeverityLabel = {
  standard: { ko: "표준", en: "Standard" },
  important: { ko: "중요", en: "Important" },
  critical: { ko: "필수", en: "Critical" },
} as const

export function ServerInfoPage() {
  const { language } = useLanguage()
  const locale = language as LocaleCode
  const headerImage = contentImages[1]

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head galaxy-page-head--media">
        <div>
          <div className="galaxy-kicker">KOR_PVE · Galaxy · Since 2021</div>
          <h1>{language === "ko" ? "갤럭시 서버 정보" : "Galaxy Server Information"}</h1>
          <p>
            {language === "ko"
              ? "한국 PVE 갤럭시 서버의 운영 규칙, 신규 지원, 파밍 순환 기준, 최신 SCUM 서버 설정 변화를 한곳에서 확인합니다."
              : "Review Galaxy PvE server rules, newcomer support, looting rotation policy, and current SCUM server-setting changes in one place."}
          </p>
        </div>
        <img src={headerImage.src} alt={pickLocalizedText(headerImage.alt, locale)} />
      </section>

      <section className="galaxy-container galaxy-server-summary">
        <article className="galaxy-info-tile">
          <Shield className="w-6 h-6" />
          <h2>PVE</h2>
          <p>{language === "ko" ? "타인의 베이스, 깃발, 차량, 아이템을 침해하지 않는 협력형 서버입니다." : "A cooperative server where bases, flags, vehicles, and items are protected from player intrusion."}</p>
        </article>
        <article className="galaxy-info-tile">
          <Users className="w-6 h-6" />
          <h2>{language === "ko" ? "스쿼드 기준" : "Squad Policy"}</h2>
          <p>{language === "ko" ? "스쿼드당 깃발 1개, 최대 7명 기준으로 운영합니다." : "One flag per squad and a maximum of seven squad members."}</p>
        </article>
        <article className="galaxy-info-tile">
          <Car className="w-6 h-6" />
          <h2>{language === "ko" ? "차량 관리" : "Vehicle Care"}</h2>
          <p>{language === "ko" ? "10일마다 시동과 이동 기록이 필요하며 상점원 안 방치 주차는 금지입니다." : "Vehicles must be started and moved every 10 days; unattended trader parking is forbidden."}</p>
        </article>
        <article className="galaxy-info-tile">
          <MessageSquare className="w-6 h-6" />
          <h2>Discord</h2>
          <p>{language === "ko" ? "웰컴팩, 복귀 지원, 차량 지원, PVP 예정자 연결은 디스코드 문의로 진행합니다." : "Welcome packs, returning support, vehicle support, and PvP-intended player matching are handled through Discord."}</p>
          <a className="galaxy-inline-link" href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer">
            <span>discord.gg/VeNFX3CAwZ</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </article>
        <article className="galaxy-info-tile">
          <Server className="w-6 h-6" />
          <h2>{language === "ko" ? "서버 접속 IP" : "Server IP"}</h2>
          <p>{language === "ko" ? "SCUM 서버 목록 또는 직접 접속에서 아래 주소를 사용합니다." : "Use this address in the SCUM server list or direct connection flow."}</p>
          <strong className="galaxy-server-address">{GALAXY_SERVER.SERVER_ADDRESS}</strong>
        </article>
      </section>

      <section className="galaxy-container">
        <div className="galaxy-section-heading">
          <AlertTriangle className="w-5 h-5" />
          <div>
            <span>{language === "ko" ? "서버 규칙" : "Server Rules"}</span>
            <h2>{language === "ko" ? "갤럭시 PVE 전체 규칙" : "Galaxy PvE Rules"}</h2>
          </div>
        </div>
        <div className="galaxy-notice-list">
          {galaxyRules.map((rule, index) => (
            <article className={`galaxy-notice-card galaxy-notice-card--${rule.severity}`} key={rule.id}>
              <div className="galaxy-notice-card__meta">
                <span>{language === "ko" ? `공지 ${String(index + 1).padStart(2, "0")}` : `Notice ${String(index + 1).padStart(2, "0")}`}</span>
                <span>{language === "ko" ? `작성자: ${GALAXY_SERVER.NOTICE_AUTHOR}` : `Author: ${GALAXY_SERVER.NOTICE_AUTHOR}`}</span>
                <strong>{ruleSeverityLabel[rule.severity][locale]}</strong>
              </div>
              <h3>{pickLocalizedText(rule.title, locale)}</h3>
              {rule.detail ? <p>{pickLocalizedText(rule.detail, locale)}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="galaxy-container galaxy-panel">
        <div className="galaxy-section-heading">
          <Shield className="w-5 h-5" />
          <div>
            <span>{versionKnowledge.version}</span>
            <h2>{language === "ko" ? "최신 서버 설정 변화" : "Current Server Setting Changes"}</h2>
          </div>
        </div>
        <div className="galaxy-update-grid">
          {versionKnowledge.highlights
            .filter((section) => section.id === "server-controls" || section.id === "wildlife")
            .map((section) => (
              <article className="galaxy-info-tile" key={section.id}>
                <h3>{pickLocalizedText(section.title, locale)}</h3>
                <p>{pickLocalizedText(section.summary, locale)}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={pickLocalizedText(point, locale)}>{pickLocalizedText(point, locale)}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </section>
    </div>
  )
}

export default ServerInfoPage
