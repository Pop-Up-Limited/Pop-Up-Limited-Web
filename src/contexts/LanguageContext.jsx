'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('zh')

  useEffect(() => {
    // 从 localStorage 读取语言设置
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      // 根据浏览器语言设置默认语言
      const browserLang = navigator.language || navigator.userLanguage
      if (browserLang.startsWith('zh')) {
        setLanguage('zh')
      } else {
        setLanguage('en')
      }
    }
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

