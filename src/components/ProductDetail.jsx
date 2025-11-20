'use client'

import { useState } from 'react'
import ConsultModal from './ConsultModal'

export default function ProductDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="card-surface">
        <h1 className="mb-4 text-3xl font-semibold text-foreground dark:text-foreground-dark">
          产品详情页示例
        </h1>
        <p className="mb-6 text-foreground-muted dark:text-slate-300">
          这是一个示例产品详情页面，展示如何集成咨询弹窗功能。
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          立即咨询
        </button>
      </div>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

