'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { COMPANY_NAME, NAV_LINKS } from '../config/site.js'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const resolveActive = (href) => {
    return pathname === href
  }

  // 获取导航链接的翻译
  const getNavLabel = (href) => {
    if (href === '/services') return t.nav.services
    if (href === '/support') return t.nav.support
    if (href === '/contact') return t.nav.contact
    return href
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-brand-500 dark:text-foreground-dark" aria-label={`${COMPANY_NAME} home`}>
          <img src="/images/logo.svg" alt={`${COMPANY_NAME} logo`} className="h-11 w-11" />
          <span className="text-balance">
            {COMPANY_NAME}
          </span>
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 focus-visible:ring-brand-300 md:hidden dark:border-slate-700 dark:text-foreground-dark"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav 
          id="primary-navigation" 
          className={`${isMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-6 md:flex md:w-auto md:flex-row md:items-center md:gap-8`}
        >
          <ul className="flex flex-col gap-4 text-sm font-medium text-foreground md:flex-row md:items-center md:gap-6 dark:text-foreground-dark">
            {NAV_LINKS.map((item) => (
              item.children ? (
                <li key={item.href} className="relative">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100/80 dark:hover:bg-slate-800/80">
                      <span className={['transition', resolveActive(item.children[0].href) ? 'text-brand-500' : ''].join(' ')}>
                        {getNavLabel(item.href)}
                      </span>
                      <svg className="h-3.5 w-3.5 text-slate-500 transition group-open:rotate-180" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="md:absolute md:left-0 md:mt-2 md:w-48 md:rounded-2xl md:border md:border-slate-200 md:bg-white md:p-2 md:shadow-xl md:shadow-slate-900/10 dark:md:border-slate-700 dark:md:bg-slate-900">
                      <ul className="flex flex-col gap-1 text-sm">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block rounded-xl px-4 py-2 transition hover:bg-brand-500/10 hover:text-brand-600 ${
                                resolveActive(child.href) ? 'text-brand-500' : ''
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3 py-2 transition hover:bg-slate-100/80 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${
                      resolveActive(item.href) ? 'text-brand-500' : ''
                    }`}
                  >
                    {getNavLabel(item.href)}
                  </Link>
                </li>
              )
            ))}
          </ul>
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-3">
            <LanguageSwitcher />
            <Link href="/support" className="btn-primary">
              {t.nav.support}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

