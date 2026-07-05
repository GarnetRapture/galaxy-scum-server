import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import ko from './locales/ko.json'
import en from './locales/en.json'

type Language = 'ko' | 'en'
type Translations = Record<Language, Record<string, any>>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, defaultValue?: string) => string
}

const translations: Translations = {
  ko,
  en,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'ko' || saved === 'en')) {
      setLanguageState(saved)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string, defaultValue = key): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return defaultValue
      }
    }

    return typeof value === 'string' ? value : defaultValue
  }

  if (!mounted) {
    return <>{children}</>
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
