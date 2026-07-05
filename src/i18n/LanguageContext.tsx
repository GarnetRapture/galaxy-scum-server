import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import ko from './locales/ko.json'
import en from './locales/en.json'

type Language = 'ko' | 'en'
type Translations = Record<Language, Record<string, any>>

type TranslationVars = Record<string, string | number>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, defaultValue?: string, vars?: TranslationVars) => string
}

const translations: Translations = {
  ko,
  en,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'ko' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string, defaultValue = key, vars?: TranslationVars): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        value = undefined
        break
      }
    }

    let result = typeof value === 'string' ? value : defaultValue

    if (vars) {
      for (const [varKey, varValue] of Object.entries(vars)) {
        result = result.replaceAll(`{{${varKey}}}`, String(varValue))
      }
    }

    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
