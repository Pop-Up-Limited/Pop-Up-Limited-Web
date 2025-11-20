'use client'

import { useState } from 'react'
import { useLanguage } from '../../src/contexts/LanguageContext'
import { translations } from '../../src/i18n/translations'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact-form',
          ...formData,
        }),
      })

      if (response.ok) {
        alert(t.contact.submitSuccess)
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert(t.contact.submitError)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(t.contact.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-12">
      <div className="card-surface">
        <h1 className="mb-2 text-3xl font-semibold text-foreground dark:text-foreground-dark">
          {t.contact.title}
        </h1>
        <p className="mb-8 text-foreground-muted dark:text-slate-300">
          {t.contact.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground dark:text-foreground-dark">
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-foreground-dark"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground dark:text-foreground-dark">
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-foreground-dark"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground dark:text-foreground-dark">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-foreground-dark"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? t.contact.submitting : t.contact.submit}
          </button>
        </form>
      </div>
    </div>
  )
}
