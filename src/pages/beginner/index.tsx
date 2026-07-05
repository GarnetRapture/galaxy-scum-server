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
import { NewbieCtaSection } from "@/features/server-landing/NewbieCtaSection"
import { toast } from "@/shared/utils/toast"
import "@/App.css"
import "@/styles/scum-authentic.css"

type StepNumber = 0 | 1 | 2 | 3 | 4

const stepNumbers: StepNumber[] = [0, 1, 2, 3, 4]

export function BeginnerPage() {
  const { t, language } = useLanguage()
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
      toast.success(
        t("beginner.toastStepDoneTitle", undefined, { step: pickLocalizedText(currentRouteStep.title, locale) }),
        t("beginner.toastStepDoneDesc"),
      )
      setCurrentStep((currentStep + 1) as StepNumber)
    } else {
      toast.success(t("beginner.toastAllDoneTitle"), t("beginner.toastAllDoneDesc"))
    }
  }

  return (
    <div className="galaxy-page">
      <section className="galaxy-container galaxy-page-head">
        <div className="galaxy-kicker">Galaxy PVE · Beginner Operations</div>
        <h1>{t("beginner.title")}</h1>
        <p>{t("beginner.subtitle")}</p>
      </section>

      <section className="galaxy-container">
        <NewbieCtaSection />
      </section>

      <section className="galaxy-container galaxy-beginner-layout">
        <aside className="galaxy-panel galaxy-beginner-nav">
          <h2>{t("beginner.progress")}</h2>
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
              <span>{t("beginner.progressCount", undefined, { current: currentStep + 1, total: beginnerRouteSteps.length })}</span>
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
            <strong>{t("beginner.galaxyTips")}</strong>
            <p>{pickLocalizedText(currentRouteStep.galaxyNote, locale)}</p>
          </div>

          <button onClick={handleStepComplete} className="scum-button">
            {completedSteps.includes(currentStep) ? t("beginner.next") : t("beginner.complete")}
            <ChevronRight className="w-4 h-4" />
          </button>
        </main>
      </section>

      <section className="galaxy-container">
        <div className="galaxy-section-heading">
          <Target className="w-5 h-5" />
          <div>
            <span>{t("beginner.statSectionKicker")}</span>
            <h2>{t("beginner.statSectionTitle")}</h2>
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
