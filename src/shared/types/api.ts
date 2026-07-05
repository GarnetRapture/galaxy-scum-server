/**
 * API 관련 타입 정의
 */

// ============================================================================
// API 응답 기본 구조
// ============================================================================

export type ApiErrorCode =
  | "NOT_FOUND"
  | "INVALID_INPUT"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "SERVER_ERROR"
  | "SERVICE_UNAVAILABLE"

export type ApiError = {
  code: ApiErrorCode
  message: string
  details?: Record<string, unknown>
}

export type ApiResponse<T = unknown> = {
  success: boolean
  data?: T
  error?: ApiError
  timestamp: string // ISO 8601
  requestId?: string
}

// ============================================================================
// 페이지네이션
// ============================================================================

export type PaginationParams = {
  page?: number // 기본값: 1
  pageSize?: number // 기본값: 20
}

export type PaginationMeta = {
  page: number
  pageSize: number
  total: number
  totalPages: number
  hasMore: boolean
}

export type PaginatedResponse<T> = {
  items: T[]
  pagination: PaginationMeta
}

// ============================================================================
// API 클라이언트 옵션
// ============================================================================

export type ApiClientOptions = {
  baseUrl?: string
  timeout?: number // ms
  retries?: number
  cache?: boolean
  cacheMaxAge?: number // ms
}

// ============================================================================
// API 요청/응답 인터셉터
// ============================================================================

export type ApiInterceptor = {
  onRequest?(config: ApiRequestConfig): void
  onResponse?(response: ApiResponse): void
  onError?(error: ApiError): void
}

export type ApiRequestConfig = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  path: string
  query?: Record<string, unknown>
  body?: unknown
  headers?: Record<string, string>
}
