'use client'

import { useState } from 'react'

export default function ConsultModal({ isOpen, onClose }) {
  const [contactInfo, setContactInfo] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

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
          type: 'quick-consult',
          contactInfo,
        }),
      })

      if (response.ok) {
        alert('提交成功！我们会尽快联系您。')
        setContactInfo('')
        onClose()
      } else {
        alert('提交失败，请稍后重试。')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('提交失败，请稍后重试。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          aria-label="关闭"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="mb-6 text-2xl font-semibold text-foreground dark:text-foreground-dark">
          立即咨询
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* 方式 A: 微信联系方式 */}
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-brand-500/30 bg-brand-500/5 p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
              <svg className="h-8 w-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-foreground-dark">
              微信咨询
            </h3>
            <p className="mb-4 text-center text-sm text-foreground-muted dark:text-slate-300">
              添加客服微信
            </p>
            <div className="mb-4 rounded-lg bg-white px-4 py-2 text-center dark:bg-slate-800">
              <code className="text-base font-mono font-semibold text-brand-600 dark:text-brand-400">
                popup-service
              </code>
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-xl border-2 border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <span className="text-xs text-slate-400">二维码占位符</span>
            </div>
          </div>

          {/* 方式 B: 扫码咨询 */}
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-brand-500/30 bg-brand-500/5 p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
              <svg className="h-8 w-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-foreground-dark">
              扫码咨询
            </h3>
            <p className="mb-4 text-center text-sm text-foreground-muted dark:text-slate-300">
              使用微信扫描二维码
            </p>
            <div className="flex h-32 w-32 items-center justify-center rounded-xl border-2 border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <span className="text-xs text-slate-400">二维码占位符</span>
            </div>
          </div>

          {/* 方式 C: 快速表单 */}
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-brand-500/30 bg-brand-500/5 p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
              <svg className="h-8 w-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-foreground-dark">
              快速提交
            </h3>
            <p className="mb-4 text-center text-sm text-foreground-muted dark:text-slate-300">
              留下联系方式
            </p>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="微信号/手机号/邮箱"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-foreground-dark"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? '提交中...' : '提交'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

