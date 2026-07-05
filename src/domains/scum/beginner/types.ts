/**
 * 신규 유저 온보딩 타입 정의
 */

import type { VerifiableContentMeta } from "@/shared/types"

export type OnboardingStepIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type OnboardingStep = {
  id: string
  step: OnboardingStepIndex
  title: string
  description: string
  objectives: string[]
  tasks: OnboardingTask[]
  estimatedTime: number
  rewards?: string
  nextStepId?: string
  meta: VerifiableContentMeta
}

export type OnboardingTask = {
  id: string
  title: string
  description: string
  completed: boolean
  tips?: string[]
}

export type OnboardingProgress = {
  currentStep: OnboardingStepIndex
  completedSteps: OnboardingStepIndex[]
  completedTasks: Record<string, string[]>
  lastUpdated: string
}

export type GalaxySpecificTip = {
  id: string
  title: string
  content: string
  category: string
  priority: number
  meta: VerifiableContentMeta
}
