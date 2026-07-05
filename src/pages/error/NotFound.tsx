/**
 * 404 페이지
 */

import { useNavigate } from "react-router-dom"
import { Home, Search } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-9xl font-bold text-blue-200 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">페이지를 찾을 수 없습니다</h1>
        <p className="text-lg text-gray-600 mb-8">요청한 페이지가 존재하지 않습니다.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            <Home className="w-5 h-5" />
            홈으로 돌아가기
          </button>
          <button
            onClick={() => navigate("/guides")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 font-medium"
          >
            <Search className="w-5 h-5" />
            가이드 검색
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            계속 문제가 발생하나요?{" "}
            <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              디스코드에 문의하세요
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
