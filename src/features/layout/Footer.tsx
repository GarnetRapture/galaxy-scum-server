import { ExternalLink, MessageSquare, Server, BadgeCheck } from "lucide-react"
import { GALAXY_BRAND_ASSETS, GALAXY_SERVER } from "@/shared/types/constants"
import "@/styles/scum-authentic.css"

const footerLinks = [
  { href: "/", label: "홈" },
  { href: "/guides", label: "가이드" },
  { href: "/server-info", label: "서버 정보" },
  { href: "/events", label: "이벤트" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="app-shell app-footer__inner">
        <div className="app-footer__grid">
          <section>
            <div className="galaxy-footer-brand">
              <img src={GALAXY_BRAND_ASSETS.LOGO} alt="SCUM Galaxy" />
              <h3 className="scum-title">갤럭시 서버</h3>
            </div>
            <p>SCUM 한국 PVE 커뮤니티 서버의 공식 정보 사이트입니다.</p>
          </section>

          <section>
            <h4>빠른 링크</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4>커뮤니티</h4>
            <ul>
              <li>
                <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="app-footer__icon-link">
                  <MessageSquare className="w-4 h-4" />
                  디스코드
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>공지 작성자: {GALAXY_SERVER.NOTICE_AUTHOR}</li>
              <li>웹앱 제작자: {GALAXY_SERVER.SITE_CREATOR}</li>
            </ul>
          </section>

          <section>
            <h4>정보</h4>
            <ul>
              <li>서버 시작: 2021</li>
              <li>게임: SCUM (Gamepires)</li>
              <li>플레이 모드: PVE</li>
              <li className="app-footer__icon-line">
                <Server className="w-4 h-4" />
                {GALAXY_SERVER.SERVER_ADDRESS}
              </li>
            </ul>
          </section>
        </div>

        <div className="app-footer__bottom">
          <p>
            © {currentYear} 갤럭시 서버. 제작: <BadgeCheck className="w-4 h-4" /> {GALAXY_SERVER.SITE_CREATOR}
          </p>
          <p>마지막 업데이트: 2026-07-05</p>
        </div>

        <p className="app-footer__disclaimer">
          이 웹사이트는 갤럭시 서버의 팬 가이드입니다. SCUM은 Gamepires의 저작권 게임입니다.
          모든 정보는 게임 업데이트에 맞춰 계속 확인하고 갱신합니다.
        </p>
      </div>
    </footer>
  )
}
