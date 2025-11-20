'use client'

import { useState } from 'react'
import { COMPANY_NAME } from '../../config/site.js'
import ConsultModal from '../../components/ConsultModal'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 根据语言生成 plans 数据
  const getPlans = () => {
    const plans = [
      {
        id: 'standard',
        name: t.services.standard,
        price: '¥15,888',
        description: t.services.standardDesc,
        caseUrl: 'https://pop-up-limited.github.io/pop-up-limited-website/',
        caseName: 'Pop Up Limited Website',
        caseImage: '/images/projects/popup-limited-website.png',
        features: [
          { label: t.services.delivery, value: t.services.sourceCodeDelivery },
          { label: t.services.design, value: t.services.premiumDesign },
          { label: t.services.responsiveDesign, value: t.services.responsiveDesign },
          { label: t.services.mobileFirstDesign, value: t.services.mobileFirstDesign },
          { label: t.services.crossBrowserCompatibility, value: t.services.crossBrowserCompatibility },
          { label: t.services.deployment, value: t.services.freeDeployment },
          { label: t.services.pageCount, value: t.services.maxOnePage },
          { label: t.services.maintenance, value: t.services.maintenanceFee },
          { label: t.services.seo, value: t.services.basicOptimization },
          { label: t.services.deliveryCycle, value: t.services.fastestTenDays },
          { label: t.services.modifications, value: t.services.twoTimes },
          { label: t.services.analysisSupport, value: t.services.none },
          { label: t.services.customerService, value: t.services.none },
          { label: t.services.compliance, value: t.services.none },
          { label: t.services.dataTracking, value: t.services.none },
          { label: t.services.brandDesign, value: t.services.none },
        ],
        popular: false,
      },
      {
        id: 'standard-pro',
        name: t.services.standardPro,
        price: '¥18,888',
        description: t.services.standardProDesc,
        caseUrl: 'https://pop-up-limited.github.io/popup-limited-landing/',
        caseName: 'Pop Up Limited Landing',
        caseImage: '/images/projects/popup-limited-landing.png',
        features: [
          { label: t.services.delivery, value: t.services.sourceCodeDelivery },
          { label: t.services.design, value: t.services.premiumDesign },
          { label: t.services.responsiveDesign, value: t.services.responsiveDesign },
          { label: t.services.mobileFirstDesign, value: t.services.mobileFirstDesign },
          { label: t.services.crossBrowserCompatibility, value: t.services.crossBrowserCompatibility },
          { label: t.services.deployment, value: t.services.freeCustomDomain },
          { label: t.services.pageCount, value: t.services.unlimitedPages },
          { label: t.services.maintenance, value: t.services.freeOneYear },
          { label: t.services.seo, value: t.services.advancedOptimization },
          { label: t.services.deliveryCycle, value: t.services.withinTenDays },
          { label: t.services.modifications, value: t.services.fiveTimes },
          { label: t.services.analysisSupport, value: t.services.competitorAnalysis },
          { label: t.services.customerService, value: t.services.dedicatedSupport },
          { label: t.services.compliance, value: t.services.none },
          { label: t.services.dataTracking, value: t.services.none },
          { label: t.services.brandDesign, value: t.services.none },
        ],
        popular: true,
      },
      {
        id: 'custom',
        name: t.services.custom,
        price: language === 'zh' ? '联系专属客服支持' : 'Contact Support',
        description: t.services.customDesc,
        caseUrl: 'https://mapier.ai/',
        caseName: 'Mapier.ai',
        caseImage: '/images/projects/mapier.png',
        features: [
          { label: t.services.delivery, value: t.services.sourceCodeDelivery },
          { label: t.services.design, value: t.services.topTierDesign },
          { label: t.services.responsiveDesign, value: t.services.responsiveDesign },
          { label: t.services.mobileFirstDesign, value: t.services.mobileFirstDesign },
          { label: t.services.crossBrowserCompatibility, value: t.services.crossBrowserCompatibility },
          { label: t.services.deployment, value: t.services.freeCustomDomain },
          { label: t.services.pageCount, value: t.services.unlimitedPages },
          { label: t.services.maintenance, value: t.services.freeFiveYears },
          { label: t.services.seo, value: t.services.enhancedOptimization },
          { label: t.services.deliveryCycle, value: t.services.fastestFifteenDays },
          { label: t.services.modifications, value: t.services.untilSatisfied },
          { label: t.services.analysisSupport, value: t.services.financialAnalysis },
          { label: t.services.customerService, value: t.services.multilingualService },
          { label: t.services.compliance, value: t.services.privacyPolicy },
          { label: t.services.dataTracking, value: t.services.optionalTracking },
          { label: t.services.brandDesign, value: t.services.brandDesignFull },
        ],
        popular: false,
      },
    ]
    return plans
  }

  const plans = getPlans()

  const featureLabels = [
    t.services.delivery,
    t.services.design,
    t.services.responsiveDesign,
    t.services.mobileFirstDesign,
    t.services.crossBrowserCompatibility,
    t.services.deployment,
    t.services.pageCount,
    t.services.maintenance,
    t.services.seo,
    t.services.deliveryCycle,
    t.services.modifications,
    t.services.analysisSupport,
    t.services.customerService,
    t.services.compliance,
    t.services.dataTracking,
    t.services.brandDesign,
  ]

  const scrollToSection = (id) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-surface dark:bg-surface-dark">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pt-16 pb-8 md:px-6 md:pt-20 md:pb-12">
        <div className="absolute inset-x-0 -top-32 -z-10 h-[300px] bg-gradient-to-b from-brand-500/25 to-transparent blur-3xl"></div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl dark:text-foreground-dark">
            {t.services.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-muted dark:text-slate-300">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {plans.map((plan) => {
            const coreFeatures = [
              plan.features.find(f => f.label === t.services.deliveryCycle),
              plan.features.find(f => f.label === t.services.design),
              plan.features.find(f => f.label === t.services.analysisSupport)
            ].filter(Boolean)

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand-500 bg-gradient-to-br from-brand-500/10 to-transparent shadow-brand-md'
                    : 'border-slate-200 bg-white/70 dark:border-slate-700 dark:bg-black/70'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-500 bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-brand-sm">
                      {t.services.popular}
                    </span>
                  </div>
                )}
            
                <div className="flex flex-col p-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-foreground-muted dark:text-slate-300">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-4 border-b border-slate-200 pb-4 dark:border-slate-700">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-foreground dark:text-foreground-dark">
                        {plan.price}
                      </span>
                    </div>
                    {plan.price !== (language === 'zh' ? '联系专属客服支持' : 'Contact Support') && (
                      <p className="mt-1 text-xs text-foreground-muted dark:text-slate-400">
                        {t.services.oneTimePayment}
                      </p>
                    )}
                  </div>

                  {/* 网站预览区域 */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted dark:text-slate-400">
                      {t.services.representativeCase}
                    </p>
                    <div className="relative mb-2 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                      <div className="aspect-video relative overflow-hidden group">
                        <a
                          href={plan.caseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full w-full"
                        >
                          <Image
                            src={plan.caseImage}
                            alt={`${plan.caseName} ${language === 'zh' ? '预览' : 'Preview'}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
                              {language === 'zh' ? '在新窗口打开 →' : 'Open in New Window →'}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <a
                        href={plan.caseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
                      >
                        {plan.caseName} ({t.services.clickToOpen}) →
                      </a>
                      <a
                        href={plan.caseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block break-all text-xs text-foreground-muted hover:text-brand-500 dark:text-slate-400 dark:hover:text-brand-400"
                      >
                        {plan.caseUrl} ({t.services.clickToOpen})
                      </a>
                    </div>
                  </div>

                  {/* 核心要点 */}
                  <div className="flex-1 space-y-3">
                    {coreFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 dark:border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-medium text-foreground-muted dark:text-slate-400">
                            {feature.label}
                          </span>
                          {feature.label === t.services.design && (
                            <button
                              onClick={() => scrollToSection('design-tier-explanation')}
                              className="group relative flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-brand-500 hover:text-white dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-brand-500 dark:hover:text-white"
                              title={language === 'zh' ? '了解设计分级说明' : 'Learn about design tiers'}
                            >
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                          )}
                        </div>
                        <span className={`text-right text-xs font-medium ${
                          feature.value === t.services.none 
                            ? 'text-slate-400 dark:text-slate-600' 
                            : plan.popular
                            ? 'text-brand-600 dark:text-brand-400'
                            : 'text-foreground dark:text-foreground-dark'
                        }`}>
                          {feature.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 查看详细对比按钮 */}
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => scrollToSection('detailed-comparison')}
                      className="w-full text-xs text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 transition-colors"
                    >
                      {t.services.viewDetailedComparison} ↓
                    </button>
                  </div>

                  <div className="mt-4">
                    {plan.price === (language === 'zh' ? '联系专属客服支持' : 'Contact Support') ? (
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="btn-primary block w-full text-center"
                      >
                        {t.services.contactSupport}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className={`block w-full text-center ${
                          plan.popular ? 'btn-primary' : 'btn-secondary'
                        }`}
                      >
                        {t.services.consultNow}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="detailed-comparison" className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 scroll-mt-24">
        <div className="card-surface">
          <h2 className="mb-8 text-2xl font-semibold text-foreground dark:text-foreground-dark">
            {t.services.detailedComparison}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground dark:text-foreground-dark">
                    {t.services.serviceItem}
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      className={`px-4 py-3 text-center text-sm font-semibold ${
                        plan.popular
                          ? 'text-brand-600 dark:text-brand-400'
                          : 'text-foreground dark:text-foreground-dark'
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureLabels.map((label, idx) => (
                  <tr key={idx} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 text-sm font-medium text-foreground-muted dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <span>{label}</span>
                        {label === t.services.design && (
                          <button
                            onClick={() => scrollToSection('design-tier-explanation')}
                            className="group relative flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-brand-500 hover:text-white dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-brand-500 dark:hover:text-white"
                            title={language === 'zh' ? '了解设计分级说明' : 'Learn about design tiers'}
                          >
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                    {plans.map((plan) => {
                      const feature = plan.features.find((f) => f.label === label)
                      return (
                        <td
                          key={plan.id}
                          className={`px-4 py-3 text-center text-sm ${
                            feature?.value === t.services.none
                              ? 'text-slate-400 dark:text-slate-600'
                              : plan.popular
                              ? 'text-brand-600 dark:text-brand-400 font-medium'
                              : 'text-foreground dark:text-foreground-dark'
                          }`}
                        >
                          {feature?.value || t.services.none}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design Tier Explanation */}
      <section id="design-tier-explanation" className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 scroll-mt-24">
        <div className="card-surface rounded-2xl p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-foreground dark:text-foreground-dark">
            {t.services.designTierExplanation}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-500/30 bg-brand-500/5 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                  {t.services.premiumDesignTitle}
                </h3>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-foreground-muted dark:text-slate-300">
                {t.services.premiumDesignDesc}
              </p>
              <ul className="mb-4 space-y-2 text-sm text-foreground-muted dark:text-slate-300">
                {t.services.premiumDesignFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-brand-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/cases?tier=premium"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-500 bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 hover:border-brand-600"
              >
                {t.services.viewCases}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                  {t.services.topTierDesignTitle}
                </h3>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-foreground-muted dark:text-slate-300">
                {t.services.topTierDesignDesc}
              </p>
              <ul className="mb-4 space-y-2 text-sm text-foreground-muted dark:text-slate-300">
                {t.services.topTierDesignFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-purple-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/cases?tier=premium-plus"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-purple-500 bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-600 hover:border-purple-600"
              >
                {t.services.viewCases}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
