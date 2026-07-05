/**
 * 토스트 알림 헬퍼 (Sonner)
 */

import { toast as sonnerToast } from "sonner"

export const toast = {
  success: (message: string, description?: string) =>
    sonnerToast.success(message, { description }),
  error: (message: string, description?: string) =>
    sonnerToast.error(message, { description }),
  info: (message: string, description?: string) =>
    sonnerToast.info(message, { description }),
  loading: (message: string) => sonnerToast.loading(message),
  promise: <T,>(
    promise: Promise<T>,
    options: {
      loading: string
      success: string
      error: string
    }
  ) => sonnerToast.promise(promise, options),
}

export default toast
