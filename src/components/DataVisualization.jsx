'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

export default function DataVisualization() {
  const { language } = useLanguage()
  const t = translations[language]

  const designTierData = [
    { name: t.dataViz.topTier, value: 2, color: '#a855f7' },
    { name: t.dataViz.premium, value: 3, color: '#F89393' },
  ]

  const serviceTypeData = [
    { name: t.dataViz.webDesign, value: 80, color: '#F89393' },
    { name: t.dataViz.frontendDevelopment, value: 100, color: '#F89393' },
    { name: t.dataViz.brandDesign, value: 40, color: '#F89393' },
  ]

  const deliveryCycleData = [
    { period: t.dataViz.withinTenDays, percentage: 60 },
    { period: t.dataViz.withinFifteenDays, percentage: 40 },
  ]

  const monthlyProjectsData = language === 'zh' 
    ? [
        { month: '1月', projects: 1 },
        { month: '2月', projects: 0 },
        { month: '3月', projects: 1 },
        { month: '4月', projects: 1 },
        { month: '5月', projects: 1 },
        { month: '6月', projects: 1 },
      ]
    : [
        { month: 'Jan', projects: 1 },
        { month: 'Feb', projects: 0 },
        { month: 'Mar', projects: 1 },
        { month: 'Apr', projects: 1 },
        { month: 'May', projects: 1 },
        { month: 'Jun', projects: 1 },
      ]

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-6">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-500">
          {t.dataViz.statistics}
        </span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl dark:text-foreground-dark">
          {t.dataViz.ourResults}
        </h2>
        <p className="max-w-2xl text-sm text-foreground-muted dark:text-slate-300">
          {t.dataViz.resultsDesc}
        </p>
      </div>

      {/* 核心指标 */}
      <div className="mb-12 grid gap-6 md:grid-cols-4">
        <div className="card-surface flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 text-4xl font-bold text-brand-600 dark:text-brand-400">5+</div>
          <div className="text-sm font-semibold text-foreground-muted dark:text-slate-400">{t.dataViz.successCases}</div>
        </div>
        <div className="card-surface flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 text-4xl font-bold text-brand-600 dark:text-brand-400">100%</div>
          <div className="text-sm font-semibold text-foreground-muted dark:text-slate-400">{t.dataViz.customerSatisfaction}</div>
        </div>
        <div className="card-surface flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 text-4xl font-bold text-brand-600 dark:text-brand-400">{language === 'zh' ? '10天' : '10 days'}</div>
          <div className="text-sm font-semibold text-foreground-muted dark:text-slate-400">{t.dataViz.fastestDelivery}</div>
        </div>
        <div className="card-surface flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 text-4xl font-bold text-brand-600 dark:text-brand-400">24/7</div>
          <div className="text-sm font-semibold text-foreground-muted dark:text-slate-400">{t.dataViz.techSupport}</div>
        </div>
      </div>

      {/* 图表可视化 */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* 设计分级分布 - 饼图 */}
        <div className="card-surface p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-foreground-dark">
            {t.dataViz.designTierDistribution}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={designTierData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}${language === 'zh' ? '个' : ''}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {designTierData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 服务类型分布 - 柱状图 */}
        <div className="card-surface p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-foreground-dark">
            {t.dataViz.serviceTypeDistribution}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={serviceTypeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="value" fill="#F89393" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 交付周期统计 - 柱状图 */}
        <div className="card-surface p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-foreground-dark">
            {t.dataViz.deliveryCycleStats}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deliveryCycleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="percentage" fill="#F89393" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <div className="mb-2 text-xs font-medium text-foreground-muted dark:text-slate-400">{t.dataViz.averageDelivery}</div>
            <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">{language === 'zh' ? '12 天' : '12 days'}</div>
          </div>
        </div>

        {/* 月度项目趋势 - 折线图 */}
        <div className="card-surface p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-foreground-dark">
            {t.dataViz.monthlyProjectTrend}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyProjectsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="projects" stroke="#F89393" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 客户反馈评分 */}
      <div className="mt-6">
        <div className="card-surface p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-foreground-dark">
            {t.dataViz.customerFeedback}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground-muted dark:text-slate-300">{t.dataViz.designQuality}</span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">5.0</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground-muted dark:text-slate-300">{t.dataViz.developmentEfficiency}</span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">5.0</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground-muted dark:text-slate-300">{t.dataViz.communicationService}</span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">5.0</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
