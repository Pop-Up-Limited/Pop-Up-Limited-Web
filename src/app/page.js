import { HERO, WHY_US, COMPANY_NAME } from '../src/config/site.js'
import ProductDetail from '../components/ProductDetail'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-24 pt-16 md:px-6 md:pt-24">
        <div className="absolute inset-x-0 -top-32 -z-10 h-[420px] bg-gradient-to-b from-brand-500/25 to-transparent blur-3xl"></div>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
              Building innovative mobile applications
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl dark:text-foreground-dark">
              {HERO.title}
            </h1>
            <p className="max-w-xl text-lg text-foreground-muted dark:text-slate-300">
              {HERO.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={HERO.primaryCta.href} className="btn-primary">
                {HERO.primaryCta.label}
              </Link>
              <Link href={HERO.secondaryCta.href} className="btn-secondary">
                {HERO.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="card-surface relative overflow-hidden">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                  Launch faster with adaptive workflows
                </h2>
                <p className="text-sm leading-relaxed text-foreground-muted dark:text-slate-300">
                  Pop Up Limited combines AI copilots and human oversight so marketing and product teams can make ideas tangible within hours, not weeks.
                </p>
                <ul className="grid gap-3 text-sm text-foreground-muted dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <span>Secure compliance guardrails for sensitive industries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span>Zero-maintenance creative pipelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    <span>Insights that bridge product, design, and support</span>
                  </li>
                </ul>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/10 to-brand-500/10 dark:from-white/0 dark:via-white/5 dark:to-brand-500/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Section with Consult Modal */}
      <ProductDetail />

      {/* Why Us Section */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-6">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Why us
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl dark:text-foreground-dark">
            {WHY_US.headline}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {WHY_US.points.map((point, index) => (
            <div key={index} className="card-surface flex flex-col gap-4 p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                {index === 0 && (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted dark:text-slate-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mb-24 w-full max-w-6xl rounded-3xl border border-brand-500/20 bg-brand-500/10 px-6 py-12 text-center shadow-brand-md md:px-12">
        <h2 className="text-3xl font-semibold text-brand-700 md:text-4xl dark:text-brand-100">
          Ready to co-create with {COMPANY_NAME}?
        </h2>
        <p className="mt-4 text-base text-brand-800/80 dark:text-brand-200/80">
          Partner with us to develop your mobile applications, design user experiences, or launch your digital products. Let&apos;s create something extraordinary together!
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/support" className="btn-primary">
            Visit Support Center
          </Link>
          <Link href="/contact" className="btn-secondary">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}

