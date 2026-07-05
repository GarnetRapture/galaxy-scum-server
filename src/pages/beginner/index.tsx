import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { CheckCircle2, Circle, ChevronRight, Target } from "lucide-react"
import { useLanguage } from "@/i18n"
import {
  beginnerRouteSteps,
  pickLocalizedText,
  statRecommendations,
} from "@/data/galaxy-wiki-content.data"
import type { LocaleCode } from "@/domains/galaxy-server/content/types"
import "@/App.css"
import "@/styles/scum-authentic.css"

type StepNumber = 0 | 1 | 2 | 3 | 4

const stepNumbers: StepNumber[] = [0, 1, 2, 3, 4]

export function BeginnerPage() {
  const { language } = useLanguage()
  const locale = language as LocaleCode
  const [searchParams] = useSearchParams()
  const requestedStep = Number.parseInt(searchParams.get("step") || "0", 10)
  const initialStep = stepNumbers.includes(requestedStep as StepNumber) ? (requestedStep as StepNumber) : 0
  const [currentStep, setCurrentStep] = useState<StepNumber>(initialStep)
  const [completedSteps, setCompletedSteps] = useState<StepNumber[]>([])
  const currentRouteStep = beginnerRouteSteps[currentStep]
  const checklist = useMemo(
    () => currentRouteStep.objectives.map((objective) => pickLocalizedText(objective, locale)),
    [currentRouteStep.objectives, locale],
  )

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep])
    }
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as StepNumber)
    }
  }

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head">
        <div className="galaxy-kicker">Galaxy PVE · Beginner Operations</div>
        <h1>{language === "ko" ? "신규 유저 가이드" : "New Player Guide"}</h1>
        <p>
          {language === "ko"
            ? "캐릭터 생성, 추천 스탯, 갤럭시 서버 규칙, 첫 파밍 루틴을 실제 플레이 순서대로 정리했습니다."
            : "Character creation, recommended stats, Galaxy server rules, and the first looting loop are arranged in actual play order."}
        </p>
      </section>

      <section className="galaxy-container galaxy-beginner-layout">
        <aside className="galaxy-panel galaxy-beginner-nav">
          <h2>{language === "ko" ? "진행도" : "Progress"}</h2>
          {beginnerRouteSteps.map((step, index) => {
            const stepNumber = index as StepNumber
            const isCompleted = completedSteps.includes(stepNumber)
            const isCurrent = currentStep === stepNumber

            return (
              <button
                key={step.id}
                className={isCurrent ? "galaxy-step-button galaxy-step-button--active" : "galaxy-step-button"}
                onClick={() => setCurrentStep(stepNumber)}
              >
                {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                <span>
                  <strong>{pickLocalizedText(step.title, locale)}</strong>
                  <small>{pickLocalizedText(step.timeframe, locale)}</small>
                </span>
              </button>
            )
          })}
        </aside>

        <main className="galaxy-panel galaxy-beginner-main">
          <div className="galaxy-section-heading">
            <Target className="w-5 h-5" />
            <div>
              <span>{`${currentStep + 1} / ${beginnerRouteSteps.length}`}</span>
              <h2>{pickLocalizedText(currentRouteStep.title, locale)}</h2>
            </div>
          </div>

          <div className="scum-meter">
            <div className="scum-meter-fill" style={{ width: `${((currentStep + 1) / beginnerRouteSteps.length) * 100}%` }} />
          </div>

          <div className="galaxy-objective-list">
            {checklist.map((objective) => (
              <label key={objective}>
                <input type="checkbox" />
                <span>{objective}</span>
              </label>
            ))}
          </div>

          <div className="galaxy-callout">
            <strong>{language === "ko" ? "갤럭시 서버 기준" : "Galaxy Server Note"}</strong>
            <p>{pickLocalizedText(currentRouteStep.galaxyNote, locale)}</p>
          </div>

          <button onClick={handleStepComplete} className="scum-button">
            {completedSteps.includes(currentStep)
              ? language === "ko" ? "다음 단계" : "Next Step"
              : language === "ko" ? "단계 완료" : "Mark Complete"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </main>
      </section>

      <section className="galaxy-container">
        <div className="galaxy-section-heading">
          <Target className="w-5 h-5" />
          <div>
            <span>{language === "ko" ? "캐릭터 생성" : "Character Build"}</span>
            <h2>{language === "ko" ? "초보 추천 스탯 상세" : "Recommended Starter Stats"}</h2>
          </div>
        </div>
        <div className="galaxy-stat-grid">
          {statRecommendations.map((stat) => (
            <article className="galaxy-stat-card" key={stat.id}>
              <div className="galaxy-stat-card__head">
                <span>{stat.attribute}</span>
                <strong>{stat.recommendedValue}</strong>
              </div>
              <h3>{pickLocalizedText(stat.title, locale)}</h3>
              <p>{pickLocalizedText(stat.primaryRecommendation, locale)}</p>
              {stat.alternatives.map((alternative) => (
                <p className="galaxy-note" key={pickLocalizedText(alternative, locale)}>
                  {pickLocalizedText(alternative, locale)}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BeginnerPage
