/**
 * 신규 유저 시작하기 CTA 섹션
 */

import { BookOpen, Gamepad2, Sparkles, Users } from "lucide-react"

export function NewbieCtaSection() {
  return (
    <div className="w-full max-w-4xl mx-auto border rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm">
      <div className="px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">신규 유저를 위한 안내</h2>
        </div>

        <p className="text-gray-700 mb-8 text-base">
          SCUM에 처음 입문하거나 갤럭시 서버에 새로 오신 분들을 위해 준비했습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* 생존 가이드 */}
          <div className="p-4 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">생존 가이드</h3>
            </div>
            <p className="text-sm text-gray-600">
              캐릭터 생성부터 기본 생존까지 단계별 안내
            </p>
          </div>

          {/* 웰컴팩 안내 */}
          <div className="p-4 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">웰컴팩 안내</h3>
            </div>
            <p className="text-sm text-gray-600">
              신규 유저 게임 시작 아이템 및 혜택 안내
            </p>
          </div>

          {/* 뉴비 케어 */}
          <div className="p-4 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">뉴비 케어</h3>
            </div>
            <p className="text-sm text-gray-600">
              관리자 블락의 약 15분 속성 가이드 및 지원
            </p>
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-green-700" />
            게임 시작 3단계
          </h3>
          <ol className="text-sm text-green-800 space-y-1">
            <li>
              <span className="font-semibold">1단계:</span> 캐릭터 생성 후 게임 시작
            </li>
            <li>
              <span className="font-semibold">2단계:</span> 웰컴팩 메뉴에서 생존 아이템 수령
            </li>
            <li>
              <span className="font-semibold">3단계:</span> 디스코드에서 관리자 블락에게 말 걸기 (뉴비 케어 신청)
            </li>
          </ol>
        </div>

        <p className="text-center text-gray-600 text-sm">
          질문이 있으신가요? 디스코드에서 <span className="font-semibold">관리자 블락</span>이나 다른 플레이어들과 대화하세요!
        </p>
      </div>
    </div>
  )
}
