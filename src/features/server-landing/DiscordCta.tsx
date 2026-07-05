/**
 * 디스코드 CTA 섹션
 */

import { CheckCircle2, MessageSquare, ExternalLink } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"

export function DiscordCta() {
  const discordUrl = GALAXY_SERVER.DISCORD_URL

  return (
    <div className="w-full max-w-2xl mx-auto border rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 shadow-sm">
      <div className="px-6 py-8">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">디스코드 커뮤니티</h2>
        </div>

        <p className="text-gray-600 mb-6 text-lg">
          갤럭시 서버의 디스코드 채널에서 다른 플레이어들과 정보를 공유하고 이벤트에 참여하세요.
        </p>

        <div className="mb-6 p-4 bg-white rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-gray-900 mb-2">디스코드에서 제공하는 기능</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              플레이어 커뮤니티 및 팁 공유
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              주말 이벤트 일정 및 공지
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              디스코드 상점 (아이템 거래)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              관리자 블락과의 직접 연락
            </li>
          </ul>
        </div>

        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          디스코드 참가하기
          <ExternalLink className="w-4 h-4" />
        </a>

        <p className="text-xs text-gray-500 mt-4 text-center">
          초대 링크: discord.gg/VeNFX3CAwZ
        </p>
      </div>
    </div>
  )
}
