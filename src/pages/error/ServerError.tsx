/**
 * 500 서버 오류 페이지
 */

import { useNavigate } from "react-router-dom"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import { GALAXY_SERVER } from "@/shared/types/constants"

export function ServerErrorPage() {
  const navigate = useNavigate()

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">서버 오류</h1>
        <p className="text-lg text-gray-600 mb-2">문제가 발생했습니다</p>
        <p className="text-gray-500 mb-8">잠시 후 다시 시도해주세요.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
          >
            <RefreshCw className="w-5 h-5" />
            새로고침
          </button>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 font-medium"
          >
            <Home className="w-5 h-5" />
            홈으로 돌아가기
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            문제가 지속되면{" "}
            <a href={GALAXY_SERVER.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
              디스코드에 문의하세요
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServerErrorPage
