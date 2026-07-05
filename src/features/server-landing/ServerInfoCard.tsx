/**
 * 갤럭시 서버 정보 카드
 * getGalaxyServerProfile()의 데이터를 표시
 */

import { useQuery } from "@tanstack/react-query"
import { getGalaxyServerProfile } from "@/shared/api/galaxy-server"
import { CheckCircle2, ExternalLink, MessageSquare, Server, Users, Zap, Package, Car, BookOpen, Trophy } from "lucide-react"

export function ServerInfoCard() {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["galaxy-server-profile"],
    queryFn: getGalaxyServerProfile,
  })

  if (isLoading) {
    return (
      <div className="w-full border rounded-lg p-6 bg-white">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="w-full border border-red-300 rounded-lg p-6 bg-red-50">
        <p className="text-red-800">서버 정보를 불러올 수 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl border rounded-lg bg-white shadow-sm">
      {/* 헤더 */}
      <div className="border-b px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h2>
        <p className="text-sm text-gray-700">
          {profile.playStyle} · Since {profile.sinceYear} · 공지 작성자: Galaxy Notice
        </p>
      </div>

      {/* 콘텐츠 */}
      <div className="px-6 py-6">
        {/* 방제 */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">검색 방제</h3>
          <p className="text-base text-gray-900 p-3 bg-gray-50 rounded border border-gray-200">
            {profile.roomTitle}
          </p>
        </div>

        {/* 기본 정보 */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">서버 정보</h3>
          <dl className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded border border-gray-200">
              <dt className="text-xs font-medium text-gray-600 mb-1">플레이 스타일</dt>
              <dd className="text-sm font-semibold text-gray-900">{profile.playStyle}</dd>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200">
              <dt className="text-xs font-medium text-gray-600 mb-1">운영 시작</dt>
              <dd className="text-sm font-semibold text-gray-900">{profile.sinceYear}년</dd>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200">
              <dt className="text-xs font-medium text-gray-600 mb-1">센트리</dt>
              <dd className="text-sm font-semibold text-gray-900">없음 (PVE)</dd>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200">
              <dt className="text-xs font-medium text-gray-600 mb-1">공지 작성자</dt>
              <dd className="text-sm font-semibold text-gray-900">Galaxy Notice</dd>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200">
              <dt className="text-xs font-medium text-gray-600 mb-1">접속 IP</dt>
              <dd className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-600" />
                {profile.serverAddress}
              </dd>
            </div>
          </dl>
        </div>

        {/* 검색 키워드 */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">검색 키워드</h3>
          <div className="flex flex-wrap gap-2">
            {profile.searchKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-200"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t my-6"></div>

        {/* 지원 기능 */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">지원 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* 웰컴팩 */}
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded">
              <Package className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm text-green-900">웰컴팩</div>
                <div className="text-xs text-green-700">
                  {profile.welcomePackEnabled ? "신규 유저 메뉴 제공" : "미지원"}
                </div>
              </div>
            </div>

            {/* 차량 렌트 */}
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded">
              <Car className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm text-green-900">차량 렌트</div>
                <div className="text-xs text-green-700">
                  {profile.vehicleRentalEnabled ? "신규 유저 무료 렌트" : "미지원"}
                </div>
              </div>
            </div>

            {/* 뉴비 케어 */}
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded">
              <BookOpen className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm text-green-900">뉴비 케어</div>
                <div className="text-xs text-green-700">
                  {profile.newbieGuideEnabled
                    ? "적응 가이드 + 속성 안내 (~15분)"
                    : "미지원"}
                </div>
              </div>
            </div>

            {/* 주말 이벤트 */}
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded">
              <Trophy className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm text-green-900">주말 이벤트</div>
                <div className="text-xs text-green-700">
                  {profile.weekendEventsEnabled ? "매주 진행" : "미진행"}
                </div>
              </div>
            </div>

            {/* 경험치 이벤트 */}
            <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded">
              <Zap className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm text-orange-900">경험치 이벤트</div>
                <div className="text-xs text-orange-700">
                  {profile.experienceEventActive ? "현재 진행 중" : "진행 예정"}
                </div>
              </div>
            </div>

            {/* 커뮤니티 */}
            <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded">
              <Users className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm text-purple-900">커뮤니티 분위기</div>
                <div className="text-xs text-purple-700">가족 같은 분위기, 고인물/뉴비 공존</div>
              </div>
            </div>
          </div>
        </div>

        {/* 기타 특징 */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">기타 특징</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {profile.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 구분선 */}
        <div className="border-t my-6"></div>

        {/* 디스코드 버튼 */}
        <div className="flex gap-3">
          <a
            href={profile.discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            디스코드 참가
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 푸터 */}
      <div className="border-t px-6 py-3 bg-gray-50 rounded-b text-xs text-gray-500">
        <p>
          마지막 확인: {new Date(profile.meta.checkedAt).toLocaleDateString("ko-KR")}
        </p>
      </div>
    </div>
  )
}
