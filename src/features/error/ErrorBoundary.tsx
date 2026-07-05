/**
 * 에러 바운더리
 */

import { Component, type ReactNode } from "react"
import { AlertTriangle } from "lucide-react"
import "@/App.css"
import "@/styles/scum-authentic.css"

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
        <div className="galaxy-page error-page">
          <div className="galaxy-container error-page__content">
            <AlertTriangle className="error-page__icon" />
            <h1>오류가 발생했습니다</h1>
            <p>예상치 못한 문제가 발생했습니다.</p>
            <p>페이지를 새로고침하거나 홈으로 돌아가주세요.</p>

            <div className="error-page__actions">
              <button onClick={() => (window.location.href = "/")} className="scum-button accent">
                홈으로 이동
              </button>
              <button onClick={() => window.location.reload()} className="scum-button">
                페이지 새로고침
              </button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="scum-card error-page__details">
                <summary>오류 세부사항 (개발 모드)</summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
