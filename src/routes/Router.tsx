/**
 * 라우트 정의
 */

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ErrorBoundary } from "@/features/error/ErrorBoundary"
import { LanguageProvider } from "@/i18n"
import { Layout } from "@/features/layout/Layout"
import App from "@/App"
import GuidesPage from "@/pages/guides"
import GuideDetailPage from "@/pages/guides/detail"
import ServerInfoPage from "@/pages/server-info"
import BeginnerPage from "@/pages/beginner"
import EventsPage from "@/pages/events"
import WikiPage from "@/pages/wiki"
import NotFoundPage from "@/pages/error/NotFound"

export function Router() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/guides/:guideId" element={<GuideDetailPage />} />
              <Route path="/wiki" element={<WikiPage />} />
              <Route path="/server-info" element={<ServerInfoPage />} />
              <Route path="/beginner" element={<BeginnerPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
