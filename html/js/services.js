// Plans data (embedded in JS for simplicity, could also be loaded from JSON)
const plans = [
  {
    id: 'standard',
    name: '标准',
    price: '¥15,888',
    description: '适合初创企业和个人项目 | 优质设计（初级）',
    designTier: 'premium',
    caseUrl: 'https://pop-up-limited.github.io/pop-up-limited-website/',
    caseName: 'Pop Up Limited Website',
    caseImage: '/images/projects/popup-limited-website.png',
    limitations: ['仅限 1 页', '不支持自定义域名', '基础维护服务'],
    features: [
      { label: '交付', value: '源码+网址交付' },
      { label: '设计', value: '优质设计（初级）' },
      { label: '响应式设计', value: 'Responsive Design' },
      { label: '移动优先设计', value: 'Mobile-First Design' },
      { label: '跨浏览器兼容', value: 'Cross-Browser Compatibility' },
      { label: '部署', value: '免费部署（不支持自定义域名）' },
      { label: '页面数量', value: '最多 1 页' },
      { label: '维护', value: '¥ 1,888 / 年' },
      { label: 'SEO', value: '基础优化' },
      { label: '交付周期', value: '首次交付平均 3 天*¹' },
      { label: '修改', value: '2 次' },
      { label: '分析支持', value: '—' },
      { label: '客服与语言', value: '—' },
      { label: '合规与政策', value: '—' },
      { label: '数据追踪', value: '—' },
      { label: '品牌设计', value: '—' },
    ],
    popular: false,
  },
  {
    id: 'standard-pro',
    name: '标准 Pro',
    price: '¥18,888',
    description: '适合成长型企业和专业需求 | 优质设计（初级）',
    designTier: 'premium',
    caseUrl: 'https://pop-up-limited.github.io/popup-limited-landing/',
    caseName: 'Pop Up Limited Landing',
    caseImage: '/images/projects/popup-limited-landing.png',
    advantages: ['支持自定义域名', '页面数量不设上限', '免费维护 1 年', '专属客服支持'],
    features: [
      { label: '交付', value: '源码+网址交付' },
      { label: '设计', value: '优质设计（初级）' },
      { label: '响应式设计', value: 'Responsive Design' },
      { label: '移动优先设计', value: 'Mobile-First Design' },
      { label: '跨浏览器兼容', value: 'Cross-Browser Compatibility' },
      { label: '部署', value: '免费自定义域名部署' },
      { label: '页面数量', value: '不设上限' },
      { label: '维护', value: '免费 1 年' },
      { label: 'SEO', value: '进阶优化' },
      { label: '交付周期', value: '首次交付平均 3 天*¹' },
      { label: '修改', value: '5 次' },
      { label: '分析支持', value: '竞品分析' },
      { label: '客服与语言', value: '专属客服' },
      { label: '合规与政策', value: '—' },
      { label: '数据追踪', value: '—' },
      { label: '品牌设计', value: '—' },
    ],
    popular: true,
  },
  {
    id: 'custom',
    name: '全定制',
    price: '联系专属客服支持',
    description: '适合大型企业和复杂项目 | 顶级设计（高级）',
    designTier: 'premium-plus',
    caseUrl: 'https://mapier.ai/',
    caseName: 'Mapier.ai',
    caseImage: '/images/projects/mapier.png',
    advantages: ['顶级视觉设计', '定制化交互体验', '品牌形象深度整合', '多语言本地化'],
    features: [
      { label: '交付', value: '源码+网址交付' },
      { label: '设计', value: '顶级设计（高级）' },
      { label: '响应式设计', value: 'Responsive Design' },
      { label: '移动优先设计', value: 'Mobile-First Design' },
      { label: '跨浏览器兼容', value: 'Cross-Browser Compatibility' },
      { label: '部署', value: '免费自定义域名部署' },
      { label: '页面数量', value: '不设上限' },
      { label: '维护', value: '免费 5 年' },
      { label: 'SEO', value: '增强优化' },
      { label: '交付周期', value: '首次交付平均 3 天*¹' },
      { label: '修改', value: '直到满意*²' },
      { label: '分析支持', value: '金融与商业分析团队支持' },
      { label: '客服与语言', value: '多语言服务 + 本地化设计' },
      { label: '合规与政策', value: '隐私政策与服务条款模板' },
      { label: '数据追踪', value: '可选数据追踪服务*³' },
      { label: '品牌设计', value: 'Logo / 插画 / 字体 / 配色*⁴' },
    ],
    popular: false,
  },
];

const featureLabels = [
  '交付', '设计', '响应式设计', '移动优先设计', '跨浏览器兼容',
  '部署', '页面数量', '维护', 'SEO', '交付周期',
  '修改', '分析支持', '客服与语言', '合规与政策', '数据追踪', '品牌设计'
];

const highlightFeatureLabels = {
  standard: ['设计', '交付', '部署', '页面数量', '维护'],
  'standard-pro': ['设计', '交付', '部署', '页面数量', '客服与语言'],
  custom: ['设计', '交付', '分析支持', '数据追踪', '品牌设计']
};

function getHighlightedFeatures(plan) {
  const labels = highlightFeatureLabels[plan.id] ?? [];
  const selected = [];
  const designFeature = plan.features.find((item) => item.label === '设计');
  if (designFeature) selected.push(designFeature);
  
  labels.forEach((label) => {
    if (label === '设计') return;
    const feature = plan.features.find((item) => item.label === label);
    if (feature && feature.value && feature.value !== '—' && !selected.includes(feature)) {
      selected.push(feature);
    }
  });
  
  if (selected.length < 5) {
    const remainingFeatures = plan.features.filter(
      (feature) => 
        feature.value && 
        feature.value !== '—' && 
        !selected.includes(feature) &&
        feature.label !== '设计'
    );
    remainingFeatures.forEach((feature) => {
      if (selected.length < 5) {
        selected.push(feature);
      }
    });
  }
  
  return selected.slice(0, 5);
}

// Render plans
function renderPlans() {
  const container = document.getElementById('plans-grid');
  if (!container) return;
  
  plans.forEach(plan => {
    const card = document.createElement('div');
    card.className = `relative flex flex-col rounded-lg border transition-all duration-300 ${
      plan.popular
        ? 'border-brand-500 bg-white shadow-lg dark:border-brand-500 dark:bg-slate-900'
        : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
    }`;
    
    const highlightedFeatures = getHighlightedFeatures(plan);
    
    card.innerHTML = `
      ${plan.popular ? '<div class="absolute -top-3 left-1/2 -translate-x-1/2"><span class="inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white" data-i18n="services.plans.popular">推荐</span></div>' : ''}
      <div class="flex flex-col p-6">
        <div class="mb-6">
          <h3 class="mb-2 text-2xl font-bold text-foreground dark:text-foreground-dark" data-plan-name="${plan.id}">${plan.name}</h3>
          <div class="mb-2"><span class="text-4xl font-bold text-foreground dark:text-foreground-dark">${plan.price}</span></div>
          ${plan.price !== '联系专属客服支持' ? '<p class="text-sm text-foreground-muted dark:text-slate-400" data-i18n="services.plans.oneTime">一次性付费</p>' : ''}
        </div>
        <div class="mb-6">
          <div class="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
            <a href="${plan.caseUrl}" target="_blank" rel="noopener noreferrer" class="group relative block aspect-video overflow-hidden">
              <img src="${plan.caseImage}" alt="${plan.caseName} 预览" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async">
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">查看案例 →</span>
              </div>
            </a>
          </div>
          <p class="mt-2 text-center text-xs text-foreground-muted dark:text-slate-400">${plan.caseName}</p>
        </div>
        <div class="mb-6 flex-1 space-y-3">
          ${highlightedFeatures.map(feature => `
            <div class="flex items-start gap-3">
              ${feature.value !== '—' 
                ? '<svg class="mt-0.5 h-5 w-5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
                : '<svg class="mt-0.5 h-5 w-5 shrink-0 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>'
              }
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-sm text-foreground dark:text-foreground-dark" data-feature-label="${feature.label}">${feature.label}</span>
                  ${feature.label === '设计' ? '<a href="#design-tier-explanation" class="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-brand-500 hover:text-white dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-brand-500 dark:hover:text-white" title="了解设计分级说明"><svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></a>' : ''}
                </div>
                ${feature.value !== '—' ? `<p class="mt-0.5 text-xs text-foreground-muted dark:text-slate-400">${feature.value}</p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="mb-6 flex flex-wrap gap-2 text-xs font-semibold">
          <button type="button" data-view-details class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600" data-i18n="services.plans.viewDetails">查看完整服务</button>
          <button type="button" data-view-cases class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600" data-i18n="services.plans.viewCases">查看案例</button>
          <button type="button" data-view-design class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600" data-i18n="services.plans.viewDesign">设计</button>
        </div>
        <div class="mt-auto">
          <button type="button" data-contact-btn class="w-full rounded-lg ${plan.popular ? 'bg-brand-500 text-white hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600' : plan.price === '联系专属客服支持' ? 'bg-brand-500 text-white hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600' : 'bg-slate-100 text-foreground hover:bg-slate-200 dark:bg-slate-700 dark:text-foreground-dark dark:hover:bg-slate-600'} px-6 py-3 text-sm font-semibold transition-colors" data-i18n="${plan.price === '联系专属客服支持' ? 'services.plans.contactService' : 'services.plans.contact'}">${plan.price === '联系专属客服支持' ? '联系客服' : '立即咨询'}</button>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  // Add event listeners
  document.querySelectorAll('[data-view-details]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('detailed-comparison').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  document.querySelectorAll('[data-view-cases]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('cases-showcase').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  document.querySelectorAll('[data-view-design]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('design-tier-explanation').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Render comparison table
function renderComparisonTable() {
  const table = document.getElementById('comparison-table');
  if (!table) return;
  
  let html = `
    <thead>
      <tr class="border-b border-slate-200 dark:border-slate-700">
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.comparison.serviceItem">服务项</th>
        ${plans.map(plan => `<th class="px-4 py-3 text-center text-sm font-semibold ${plan.popular ? 'text-brand-600 dark:text-brand-400' : 'text-foreground dark:text-foreground-dark'}">${plan.name}</th>`).join('')}
      </tr>
    </thead>
    <tbody>
  `;
  
  featureLabels.forEach(label => {
    html += `
      <tr class="border-b border-slate-100 dark:border-slate-800">
        <td class="px-4 py-3 text-sm font-medium text-foreground-muted dark:text-slate-400">
          <div class="flex items-center gap-2">
            <span data-feature-label="${label}">${label}</span>
            ${label === '设计' ? '<a href="#design-tier-explanation" class="group relative flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-brand-500 hover:text-white dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-brand-500 dark:hover:text-white" title="了解设计分级说明"><svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></a>' : ''}
          </div>
        </td>
        ${plans.map(plan => {
          const feature = plan.features.find(f => f.label === label);
          return `<td class="px-4 py-3 text-center text-sm ${feature?.value === '—' ? 'text-slate-400 dark:text-slate-600' : plan.popular ? 'text-brand-600 dark:text-brand-400 font-medium' : 'text-foreground dark:text-foreground-dark'}">${feature?.value || '—'}</td>`;
        }).join('')}
      </tr>
    `;
  });
  
  html += '</tbody>';
  table.innerHTML = html;
}

// Render optional services
function renderOptionalServices() {
  const container = document.getElementById('optional-services');
  if (!container) return;
  
  const services = [
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
      titleKey: 'services.optional.form.title',
      descriptionKey: 'services.optional.form.description',
      features: ['services.optional.form.features.0', 'services.optional.form.features.1', 'services.optional.form.features.2']
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>',
      titleKey: 'services.optional.consultation.title',
      descriptionKey: 'services.optional.consultation.description',
      features: ['services.optional.consultation.features.0', 'services.optional.consultation.features.1', 'services.optional.consultation.features.2']
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>',
      titleKey: 'services.optional.products.title',
      descriptionKey: 'services.optional.products.description',
      features: ['services.optional.products.features.0', 'services.optional.products.features.1', 'services.optional.products.features.2']
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
      titleKey: 'services.optional.cms.title',
      descriptionKey: 'services.optional.cms.description',
      features: ['services.optional.cms.features.0', 'services.optional.cms.features.1', 'services.optional.cms.features.2']
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
      titleKey: 'services.optional.info.title',
      descriptionKey: 'services.optional.info.description',
      features: ['services.optional.info.features.0', 'services.optional.info.features.1', 'services.optional.info.features.2']
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>',
      titleKey: 'services.optional.custom.title',
      descriptionKey: 'services.optional.custom.description',
      features: ['services.optional.custom.features.0', 'services.optional.custom.features.1', 'services.optional.custom.features.2']
    }
  ];
  
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card-surface group p-6 transition-all duration-300 hover:shadow-lg';
    card.innerHTML = `
      <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        ${service.icon}
      </div>
      <h3 class="mb-2 text-lg font-semibold text-foreground dark:text-foreground-dark" data-i18n="${service.titleKey}"></h3>
      <p class="mb-4 text-sm leading-relaxed text-foreground-muted dark:text-slate-300" data-i18n="${service.descriptionKey}"></p>
      <ul class="space-y-2 text-xs text-foreground-muted dark:text-slate-400">
        ${service.features.map(featureKey => `
          <li class="flex items-start gap-2">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span data-i18n="${featureKey}"></span>
          </li>
        `).join('')}
      </ul>
    `;
    container.appendChild(card);
  });
}

// Render design tier explanations
async function renderDesignTierExplanations() {
  const container = document.getElementById('design-tier-explanation');
  if (!container) return;
  
  try {
    const response = await fetch('/data/cases.json');
    const cases = await response.json();
    
    const premiumCases = cases.filter(c => c.designTier === 'premium');
    const premiumPlusCases = cases.filter(c => c.designTier === 'premium-plus');
    const latestPremium = premiumCases[premiumCases.length - 1] || premiumCases[0];
    const latestPremiumPlus = premiumPlusCases[premiumPlusCases.length - 1] || premiumPlusCases[0];
    
    const grid = document.getElementById('design-tier-grid');
    if (!grid) return;
    
    grid.innerHTML = `
      <div class="rounded-xl border-2 border-brand-500/30 bg-brand-500/5 p-5">
        <div class="mb-3 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          </div>
          <h3 class="text-xl font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.designTier.premium.title">优质设计（初级）</h3>
        </div>
        ${latestPremium ? `
          <div class="mb-4 overflow-hidden rounded-lg border border-brand-200 dark:border-brand-800">
            <a href="${latestPremium.url}" target="_blank" rel="noopener noreferrer" class="group relative block aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img src="${latestPremium.image}" alt="${latestPremium.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async">
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">查看案例 →</span>
              </div>
            </a>
            <div class="bg-white/50 p-2 text-center dark:bg-slate-800/50">
              <p class="text-xs font-medium text-foreground dark:text-foreground-dark">${latestPremium.name}</p>
            </div>
          </div>
        ` : ''}
        <p class="mb-3 text-sm leading-relaxed text-foreground-muted dark:text-slate-300" data-i18n="services.designTier.premium.description">适用于标准套餐和标准 Pro 套餐。提供专业、实用的网页设计，注重功能性和用户体验，确保网站美观且易于使用。</p>
        <ul class="mb-4 space-y-2 text-sm text-foreground-muted dark:text-slate-300">
          <li class="flex items-start gap-2"><span class="mt-1 text-brand-500">•</span><span data-i18n="services.designTier.premium.features.0">现代化、简洁的设计风格</span></li>
          <li class="flex items-start gap-2"><span class="mt-1 text-brand-500">•</span><span data-i18n="services.designTier.premium.features.1">响应式布局，适配所有设备</span></li>
          <li class="flex items-start gap-2"><span class="mt-1 text-brand-500">•</span><span data-i18n="services.designTier.premium.features.2">优化的用户体验和交互设计</span></li>
        </ul>
        <a href="/cases.html?tier=premium" class="inline-flex items-center gap-2 rounded-lg border-2 border-brand-500 bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 hover:border-brand-600" data-i18n="services.designTier.premium.viewCases">查看案例</a>
      </div>
      <div class="rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-5">
        <div class="mb-3 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          </div>
          <h3 class="text-xl font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.designTier.premiumPlus.title">顶级设计（高级）</h3>
        </div>
        ${latestPremiumPlus ? `
          <div class="mb-4 overflow-hidden rounded-lg border border-purple-200 dark:border-purple-800">
            <a href="${latestPremiumPlus.url}" target="_blank" rel="noopener noreferrer" class="group relative block aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img src="${latestPremiumPlus.image}" alt="${latestPremiumPlus.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async">
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span class="rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white">查看案例 →</span>
              </div>
            </a>
            <div class="bg-white/50 p-2 text-center dark:bg-slate-800/50">
              <p class="text-xs font-medium text-foreground dark:text-foreground-dark">${latestPremiumPlus.name}</p>
            </div>
          </div>
        ` : ''}
        <p class="mb-3 text-sm leading-relaxed text-foreground-muted dark:text-slate-300" data-i18n="services.designTier.premiumPlus.description">适用于全定制套餐。提供卓越的视觉设计和创新体验，结合品牌特色和行业趋势，打造独特且令人印象深刻的网站。</p>
        <ul class="mb-4 space-y-2 text-sm text-foreground-muted dark:text-slate-300">
          <li class="flex items-start gap-2"><span class="mt-1 text-purple-500">•</span><span data-i18n="services.designTier.premiumPlus.features.0">定制化、独特的视觉设计</span></li>
          <li class="flex items-start gap-2"><span class="mt-1 text-purple-500">•</span><span data-i18n="services.designTier.premiumPlus.features.1">高级动画和交互效果</span></li>
          <li class="flex items-start gap-2"><span class="mt-1 text-purple-500">•</span><span data-i18n="services.designTier.premiumPlus.features.2">品牌形象深度整合</span></li>
        </ul>
        <a href="/cases.html?tier=premium-plus" class="inline-flex items-center gap-2 rounded-lg border-2 border-purple-500 bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-600 hover:border-purple-600" data-i18n="services.designTier.premiumPlus.viewCases">查看案例</a>
      </div>
    `;
  } catch (error) {
    console.error('Failed to load cases for design tier:', error);
  }
}

// Render terms
function renderTerms() {
  const container = document.getElementById('terms-content');
  if (!container) return;
  
  container.innerHTML = `
    <div>
      <p class="font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.terms.delivery.title">*¹ (关于交付周期):</p>
      <p class="mt-2" data-i18n="services.terms.delivery.content">交付周期（首次交付平均只用三天）指我方交付首个完整预览版本（V1）所需的平均工作时间。此周期的起算点为客户方提供了所有必要的、符合要求的资料（包括但不限于最终文案、图片、Logo、及明确的需求文档）之后。因客户方资料延迟或中途提出新需求导致的时间延长，不在此承诺时限内。</p>
    </div>
    <div>
      <p class="font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.terms.satisfaction.title">*² (关于"直到满意"):</p>
      <p class="mt-2" data-i18n="services.terms.satisfaction.content">"直到满意"条款适用于项目首版交付后的 60天 集中修改期内。在此期间，客户可就原始需求范围内的设计和功能提出不限次数的修改意见。</p>
      <ul class="mt-2 ml-6 list-disc space-y-1">
        <li data-i18n="services.terms.satisfaction.points.0">集中修改期结束后，服务将视为"满意"并自动关闭。后续的额外修改需求，将视为新的维护或迭代工作，可能产生额外费用。</li>
        <li data-i18n="services.terms.satisfaction.points.1">超出原始需求范围的修改（如增加新页面、新功能模块），即使在修改期内，也需另行评估和报价。</li>
      </ul>
    </div>
    <div>
      <p class="font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.terms.tracking.title">*³ (关于数据追踪):</p>
      <p class="mt-2" data-i18n="services.terms.tracking.content">"可选数据追踪服务"为附加高级服务。如客户选择此项，其具体需求（如埋点方案、报表配置）将另行沟通，且相关开发与部署时间不计入上述基础交付周期（*¹）内。</p>
    </div>
    <div>
      <p class="font-semibold text-foreground dark:text-foreground-dark" data-i18n="services.terms.branding.title">*⁴ (关于品牌设计):</p>
      <p class="mt-2">"品牌设计"服务（如 Logo、VI、配色方案）为独立于网站部署的专业服务。如果客户选择此服务包，<strong>网站的"交付周期"(*¹) 将从品牌设计方案最终确认后开始计算。</strong></p>
    </div>
  `;
}

// Load navbar and footer
async function loadNavbar() {
  try {
    const response = await fetch('/partials/navbar.html');
    const html = await response.text();
    document.getElementById('navbar-container').innerHTML = html;
  } catch (error) {
    console.error('Failed to load navbar:', error);
  }
}

async function loadFooter() {
  try {
    const response = await fetch('/partials/footer.html');
    const html = await response.text();
    document.getElementById('footer-container').innerHTML = html;
  } catch (error) {
    console.error('Failed to load footer:', error);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
  renderPlans();
  renderComparisonTable();
  renderOptionalServices();
  renderDesignTierExplanations();
  renderTerms();
});

