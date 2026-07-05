/**
 * 전체 레이아웃 - 현대 다크테마 스타일 + i18n + 애니메이션
 */

import type { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import { Header } from "./Header"
import { Footer } from "./Footer"
import "@/styles/scum-authentic.css"
import "@/animations/transitions.css"
import "@/styles/responsive.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
    },
  },
})

export function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--scum-bg)', color: 'var(--scum-text-primary)' }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            theme="dark"
            expand={true}
            richColors
          />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
