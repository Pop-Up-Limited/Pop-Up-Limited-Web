'use client'

import { useState } from 'react'
import ConsultModal from './ConsultModal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

export default function ProductDetail() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="card-surface">
        <h1 className="mb-4 text-3xl font-semibold text-foreground dark:text-foreground-dark">
          {t.product.title}
        </h1>
        <p className="mb-6 text-foreground-muted dark:text-slate-300">
          {t.product.subtitle}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          {t.product.consultNow}
        </button>
      </div>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
