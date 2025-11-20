'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage(language === 'zh' ? 'en' : 'zh')}
        className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-foreground-dark dark:hover:border-brand-500"
        aria-label="切换语言 / Switch Language"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span>{language === 'zh' ? '中文' : 'English'}</span>
      </button>
    </div>
  )
}

