// Chart instances storage
const chartInstances = {};

// Load cases and render portfolio
async function loadCases() {
  try {
    const response = await fetch('/data/cases.json');
    const cases = await response.json();
    
    const premiumCases = cases.filter(c => c.designTier === 'premium');
    const premiumPlusCases = cases.filter(c => c.designTier === 'premium-plus');
    
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    // Render premium-plus cases first
    premiumPlusCases.forEach(caseItem => {
      const card = createCaseCard(caseItem, 'premium-plus');
      portfolioGrid.appendChild(card);
    });
    
    // Then render premium cases
    premiumCases.forEach(caseItem => {
      const card = createCaseCard(caseItem, 'premium');
      portfolioGrid.appendChild(card);
    });
    
    // Initialize charts with case counts
    initializeCharts(premiumCases.length, premiumPlusCases.length);
  } catch (error) {
    console.error('Failed to load cases:', error);
  }
}

function createCaseCard(caseItem, tier) {
  const card = document.createElement('a');
  card.href = caseItem.url || '#';
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.className = `group relative block overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 hover:shadow-lg ${
    tier === 'premium-plus' 
      ? 'border-purple-500/30 dark:border-purple-500/50 dark:bg-slate-900 hover:border-purple-500' 
      : 'border-slate-200 dark:border-slate-700 dark:bg-slate-900 hover:border-brand-500'
  }`;
  
  card.innerHTML = `
    <div class="absolute top-3 right-3 z-10">
      <span class="rounded-full px-3 py-1 text-xs font-semibold text-white ${
        tier === 'premium-plus' ? 'bg-purple-500' : 'bg-brand-500'
      }" data-i18n="${tier === 'premium-plus' ? 'portfolio.premiumDesign' : 'portfolio.qualityDesign'}">${
        tier === 'premium-plus' ? '顶级设计' : '优质设计'
      }</span>
    </div>
    <div class="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src="${caseItem.image}" alt="${caseItem.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async">
      <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white" data-i18n="cases.visitSite">访问网站 →</span>
      </div>
    </div>
    <div class="p-4">
      <h3 class="mb-1 text-lg font-semibold text-foreground dark:text-foreground-dark">${caseItem.name}</h3>
      <p class="text-sm text-foreground-muted dark:text-slate-300">${caseItem.description}</p>
    </div>
  `;
  
  return card;
}

// Load why us points
function loadWhyUs() {
  const whyUsGrid = document.getElementById('why-us-grid');
  if (!whyUsGrid) return;
  
  const points = [
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
      titleKey: 'whyUs.points.0.title',
      descriptionKey: 'whyUs.points.0.description'
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
      titleKey: 'whyUs.points.1.title',
      descriptionKey: 'whyUs.points.1.description'
    },
    {
      icon: '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>',
      titleKey: 'whyUs.points.2.title',
      descriptionKey: 'whyUs.points.2.description'
    }
  ];
  
  points.forEach((point, index) => {
    const card = document.createElement('div');
    card.className = 'card-surface flex flex-col gap-4 p-6 transition-all duration-300 hover:shadow-lg';
    card.innerHTML = `
      <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
        ${point.icon}
      </div>
      <h3 class="text-lg font-semibold text-foreground dark:text-foreground-dark" data-i18n="${point.titleKey}"></h3>
      <p class="text-sm leading-relaxed text-foreground-muted dark:text-slate-300" data-i18n="${point.descriptionKey}"></p>
    `;
    whyUsGrid.appendChild(card);
  });
}

// Initialize charts
function initializeCharts(premiumCount, premiumPlusCount) {
  if (typeof window === 'undefined' || !window.Chart) {
    console.error('Chart.js is not available');
    return;
  }
  
  const currentLang = window.getLanguage ? window.getLanguage() : 'zh';
  
  // Design tier chart
  const designTierCanvas = document.getElementById('design-tier-chart');
  if (designTierCanvas) {
    const ctx = designTierCanvas.getContext('2d');
    chartInstances['design-tier'] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: currentLang === 'zh' ? ['顶级设计', '优质设计'] : ['Top-tier Design', 'Premium Design'],
        datasets: [{
          data: [premiumPlusCount, premiumCount],
          backgroundColor: [
            'rgba(248, 165, 194, 0.85)',  // 玫瑰粉 - 顶级设计 (与品牌色相近，偏紫)
            'rgba(248, 147, 147, 0.85)'   // 品牌粉色 - 优质设计
          ],
          borderColor: [
            'rgba(248, 165, 194, 1)',
            'rgba(248, 147, 147, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 15, font: { size: 12 } }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0';
                return `${label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }
  
  // Service type chart
  const serviceTypeCanvas = document.getElementById('service-type-chart');
  if (serviceTypeCanvas) {
    const ctx = serviceTypeCanvas.getContext('2d');
    chartInstances['service-type'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: currentLang === 'zh' 
          ? ['网站设计', '前端开发', '品牌设计', 'UI/UX设计', '移动端开发']
          : ['Web Design', 'Frontend Dev', 'Brand Design', 'UI/UX Design', 'Mobile Dev'],
        datasets: [{
          label: currentLang === 'zh' ? '占比 (%)' : 'Percentage (%)',
          data: [85, 100, 60, 90, 75],
          backgroundColor: [
            'rgba(248, 147, 147, 0.85)',  // 品牌粉色 - 网站设计
            'rgba(255, 179, 186, 0.85)',  // 浅粉红色 - 前端开发
            'rgba(248, 165, 194, 0.85)',  // 玫瑰粉 - 品牌设计
            'rgba(255, 193, 204, 0.85)',  // 更浅粉红色 - UI/UX设计
            'rgba(229, 115, 125, 0.85)'   // 深粉红色 - 移动端开发
          ],
          borderColor: [
            'rgba(248, 147, 147, 1)',
            'rgba(255, 179, 186, 1)',
            'rgba(248, 165, 194, 1)',
            'rgba(255, 193, 204, 1)',
            'rgba(229, 115, 125, 1)'
          ],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  }
  
  // Delivery cycle chart
  const deliveryCycleCanvas = document.getElementById('delivery-cycle-chart');
  if (deliveryCycleCanvas) {
    const ctx = deliveryCycleCanvas.getContext('2d');
    chartInstances['delivery-cycle'] = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: currentLang === 'zh'
          ? ['7-10 天', '11-15 天', '16-20 天', '21+ 天']
          : ['7-10 days', '11-15 days', '16-20 days', '21+ days'],
        datasets: [{
          data: [35, 45, 15, 5],
          backgroundColor: [
            'rgba(248, 147, 147, 0.85)',  // 品牌粉色 - 7-10天
            'rgba(255, 179, 186, 0.85)',  // 浅粉红色 - 11-15天
            'rgba(248, 165, 194, 0.85)',  // 玫瑰粉 - 16-20天
            'rgba(255, 193, 204, 0.85)'   // 更浅粉红色 - 21+天
          ],
          borderColor: [
            'rgba(248, 147, 147, 1)',
            'rgba(255, 179, 186, 1)',
            'rgba(248, 165, 194, 1)',
            'rgba(255, 193, 204, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 15, font: { size: 12 } }
          }
        }
      }
    });
  }
  
  // Make chartInstances globally accessible
  window.chartInstances = chartInstances;
}

// Update charts when language changes
function updateCharts(lang) {
  if (chartInstances['design-tier']) {
    chartInstances['design-tier'].data.labels = lang === 'zh'
      ? ['顶级设计', '优质设计']
      : ['Top-tier Design', 'Premium Design'];
    chartInstances['design-tier'].update();
  
  // Update chart colors when language changes (maintain same colors)
  if (chartInstances['design-tier']) {
    chartInstances['design-tier'].data.datasets[0].backgroundColor = [
      'rgba(248, 165, 194, 0.85)',
      'rgba(248, 147, 147, 0.85)'
    ];
    chartInstances['design-tier'].data.datasets[0].borderColor = [
      'rgba(248, 165, 194, 1)',
      'rgba(248, 147, 147, 1)'
    ];
    chartInstances['design-tier'].update();
  }
  }
  
  if (chartInstances['service-type']) {
    chartInstances['service-type'].data.labels = lang === 'zh'
      ? ['网站设计', '前端开发', '品牌设计', 'UI/UX设计', '移动端开发']
      : ['Web Design', 'Frontend Dev', 'Brand Design', 'UI/UX Design', 'Mobile Dev'];
    chartInstances['service-type'].data.datasets[0].label = lang === 'zh' ? '占比 (%)' : 'Percentage (%)';
    chartInstances['service-type'].update();
  }
  
  if (chartInstances['delivery-cycle']) {
    chartInstances['delivery-cycle'].data.labels = lang === 'zh'
      ? ['7-10 天', '11-15 天', '16-20 天', '21+ 天']
      : ['7-10 days', '11-15 days', '16-20 days', '21+ days'];
    chartInstances['delivery-cycle'].update();
  }
  
  // Update chart colors when language changes (maintain same colors)
  if (chartInstances['service-type']) {
    chartInstances['service-type'].data.datasets[0].backgroundColor = [
      'rgba(248, 147, 147, 0.85)',
      'rgba(255, 179, 186, 0.85)',
      'rgba(248, 165, 194, 0.85)',
      'rgba(255, 193, 204, 0.85)',
      'rgba(229, 115, 125, 0.85)'
    ];
    chartInstances['service-type'].data.datasets[0].borderColor = [
      'rgba(248, 147, 147, 1)',
      'rgba(255, 179, 186, 1)',
      'rgba(248, 165, 194, 1)',
      'rgba(255, 193, 204, 1)',
      'rgba(229, 115, 125, 1)'
    ];
    chartInstances['service-type'].update();
  }
  
  if (chartInstances['delivery-cycle']) {
    chartInstances['delivery-cycle'].data.datasets[0].backgroundColor = [
      'rgba(248, 147, 147, 0.85)',
      'rgba(255, 179, 186, 0.85)',
      'rgba(248, 165, 194, 0.85)',
      'rgba(255, 193, 204, 0.85)'
    ];
    chartInstances['delivery-cycle'].data.datasets[0].borderColor = [
      'rgba(248, 147, 147, 1)',
      'rgba(255, 179, 186, 1)',
      'rgba(248, 165, 194, 1)',
      'rgba(255, 193, 204, 1)'
    ];
    chartInstances['delivery-cycle'].update();
  }
}

window.updateCharts = updateCharts;

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

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
  loadCases();
  loadWhyUs();
  
  // Listen for language changes
  window.addEventListener('languagechange', (e) => {
    const newLang = e.detail?.lang;
    if (newLang) {
      updateCharts(newLang);
    }
  });
  
  // Wait for Chart.js to load
  function tryInitCharts() {
    if (window.Chart) {
      // Charts will be initialized when cases are loaded
      return true;
    }
    return false;
  }
  
  if (!tryInitCharts()) {
    let retries = 0;
    const maxRetries = 20;
    const checkInterval = setInterval(() => {
      retries++;
      if (tryInitCharts() || retries >= maxRetries) {
        clearInterval(checkInterval);
      }
    }, 100);
  }
});

