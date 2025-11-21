// Load cases and render
async function loadCases() {
  try {
    const response = await fetch('/data/cases.json');
    const cases = await response.json();
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category') || 'all';
    const selectedTier = urlParams.get('tier') || 'all';
    
    // Get unique categories
    const categories = Array.from(new Set(cases.map(c => c.category)));
    
    // Render filters
    renderCategoryFilters(categories, selectedCategory, selectedTier);
    renderTierFilters(selectedCategory, selectedTier);
    
    // Filter cases
    let filteredCases = cases;
    if (selectedCategory !== 'all') {
      filteredCases = filteredCases.filter(c => c.category === selectedCategory);
    }
    if (selectedTier === 'premium') {
      filteredCases = filteredCases.filter(c => c.designTier === 'premium');
    } else if (selectedTier === 'premium-plus') {
      filteredCases = filteredCases.filter(c => c.designTier === 'premium-plus');
    }
    
    // Group by tier
    const premiumCases = filteredCases.filter(c => c.designTier === 'premium');
    const premiumPlusCases = filteredCases.filter(c => c.designTier === 'premium-plus');
    
    // Render cases
    const casesGrid = document.getElementById('cases-grid');
    const noCases = document.getElementById('no-cases');
    
    if (filteredCases.length === 0) {
      casesGrid.classList.add('hidden');
      noCases.classList.remove('hidden');
      return;
    }
    
    casesGrid.classList.remove('hidden');
    noCases.classList.add('hidden');
    casesGrid.innerHTML = '';
    
    // Render premium-plus cases first if showing all tiers
    if (selectedTier === 'all' && premiumPlusCases.length > 0) {
      const section = document.createElement('div');
      section.className = 'mb-12 col-span-full';
      section.innerHTML = `
        <div class="mb-6 flex items-center gap-3">
          <h2 class="text-2xl font-semibold text-foreground dark:text-foreground-dark" data-i18n="cases.premiumPlusDesign">顶级设计（高级）</h2>
          <span class="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600">${premiumPlusCases.length} <span data-i18n="cases.count">个案例</span></span>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="premium-plus-grid"></div>
      `;
      casesGrid.appendChild(section);
      premiumPlusCases.forEach(caseItem => {
        const card = createCaseCard(caseItem);
        document.getElementById('premium-plus-grid').appendChild(card);
      });
    }
    
    // Render premium cases
    if (selectedTier === 'all' && premiumCases.length > 0) {
      const section = document.createElement('div');
      section.className = 'mb-12 col-span-full';
      section.innerHTML = `
        <div class="mb-6 flex items-center gap-3">
          <h2 class="text-2xl font-semibold text-foreground dark:text-foreground-dark" data-i18n="cases.premiumDesign">优质设计（初级）</h2>
          <span class="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600">${premiumCases.length} <span data-i18n="cases.count">个案例</span></span>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="premium-grid"></div>
      `;
      casesGrid.appendChild(section);
      premiumCases.forEach(caseItem => {
        const card = createCaseCard(caseItem);
        document.getElementById('premium-grid').appendChild(card);
      });
    }
    
    // Render filtered cases if specific tier selected
    if (selectedTier !== 'all') {
      filteredCases.forEach(caseItem => {
        const card = createCaseCard(caseItem);
        casesGrid.appendChild(card);
      });
    }
  } catch (error) {
    console.error('Failed to load cases:', error);
  }
}

function createCaseCard(caseItem) {
  const article = document.createElement('article');
  article.className = 'group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white transition-all duration-300 hover:border-brand-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900';
  
  const imageHtml = caseItem.isLive && caseItem.url && caseItem.image
    ? `<div class="relative h-full w-full">
         <a href="${caseItem.url}" target="_blank" rel="noopener noreferrer" class="block h-full w-full">
           <img src="${caseItem.image}" alt="${caseItem.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async">
           <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
             <span class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">访问网站 →</span>
           </div>
         </a>
       </div>`
    : `<div class="relative h-full w-full">
         <img src="${caseItem.image}" alt="${caseItem.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async">
         <div class="absolute top-4 right-4">
           <span class="rounded-full bg-purple-500/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">设计稿</span>
         </div>
       </div>`;
  
  article.innerHTML = `
    <div class="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
      ${imageHtml}
      <div class="absolute bottom-4 left-4 right-4">
        <div class="flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          ${caseItem.designTier === 'premium-plus' ? '<span class="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">顶级设计</span>' : ''}
          ${caseItem.designTier === 'premium' ? '<span class="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">优质设计</span>' : ''}
          <span class="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">${caseItem.category}</span>
          <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">${caseItem.year}</span>
        </div>
      </div>
    </div>
    <div class="p-6">
      <h3 class="mb-2 text-xl font-semibold text-foreground dark:text-foreground-dark">${caseItem.name}</h3>
      <p class="mb-4 text-sm leading-relaxed text-foreground-muted dark:text-slate-300">${caseItem.description}</p>
      <div class="mb-4 flex flex-wrap gap-2">
        ${caseItem.tags.map(tag => `<span class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">${tag}</span>`).join('')}
      </div>
      <div class="flex items-center justify-between gap-3">
        <button type="button" data-case-id="${caseItem.id}" data-view-details class="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">查看详情 →</button>
        ${caseItem.isLive && caseItem.url
          ? `<a href="${caseItem.url}" target="_blank" rel="noopener noreferrer" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600">访问网站</a>`
          : `<span class="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 dark:bg-slate-700 dark:text-slate-400">即将上线</span>`
        }
      </div>
    </div>
  `;
  
  return article;
}

function renderCategoryFilters(categories, selectedCategory, selectedTier) {
  const container = document.getElementById('category-filters');
  if (!container) return;
  
  const allLink = `/cases.html${selectedTier !== 'all' ? `?tier=${selectedTier}` : ''}`;
  const allActive = selectedCategory === 'all' && selectedTier === 'all';
  
  container.innerHTML = `
    <a href="${allLink}" class="rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      allActive ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
    }" data-i18n="cases.all">全部</a>
    ${categories.map(category => {
      const link = `/cases.html?category=${encodeURIComponent(category)}${selectedTier !== 'all' ? `&tier=${selectedTier}` : ''}`;
      const active = selectedCategory === category;
      return `<a href="${link}" class="rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
      }">${category}</a>`;
    }).join('')}
  `;
}

function renderTierFilters(selectedCategory, selectedTier) {
  const container = document.getElementById('tier-filters');
  if (!container) return;
  
  const baseUrl = `/cases.html${selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''}`;
  
  container.innerHTML = `
    <a href="${baseUrl}" class="rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      selectedTier === 'all' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
    }" data-i18n="cases.allDesigns">全部设计</a>
    <a href="${baseUrl}${selectedCategory !== 'all' ? '&' : '?'}tier=premium" class="rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      selectedTier === 'premium' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
    }" data-i18n="cases.premiumDesign">优质设计（初级）</a>
    <a href="${baseUrl}${selectedCategory !== 'all' ? '&' : '?'}tier=premium-plus" class="rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      selectedTier === 'premium-plus' ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
    }" data-i18n="cases.premiumPlusDesign">顶级设计（高级）</a>
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
  loadCases();
});
EOHTML
echo "Cases JS created"
