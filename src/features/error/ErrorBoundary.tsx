/**
 * 에러 바운더리
 */

import { Component, type ReactNode } from "react"
import { AlertTriangle } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-gray-50 flex items-center justify-center px-6">
          <div className="text-center">
            <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">오류가 발생했습니다</h1>
            <p className="text-lg text-gray-600 mb-2">예상치 못한 문제가 발생했습니다.</p>
            <p className="text-gray-500 mb-8">페이지를 새로고침하거나 홈으로 돌아가주세요.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                홈으로 이동
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 font-medium"
              >
                페이지 새로고침
              </button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <div className="mt-12 max-w-2xl mx-auto text-left">
                <details className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold text-red-900">
                    오류 세부사항 (개발 모드)
                  </summary>
                  <pre className="mt-4 text-xs text-red-800 overflow-auto bg-red-100 p-3 rounded">
                    {this.state.error.toString()}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
