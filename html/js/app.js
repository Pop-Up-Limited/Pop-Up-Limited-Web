// Global variables
let translations = {};
let currentLang = 'zh';

// Load translations
async function loadTranslations() {
  try {
    const response = await fetch('/data/translations.json');
    translations = await response.json();
    initializeApp();
  } catch (error) {
    console.error('Failed to load translations:', error);
    // Fallback to default language
    initializeApp();
  }
}

// Get language from storage or URL
function getLanguage() {
  if (typeof window === 'undefined') return 'zh';
  const stored = localStorage.getItem('language');
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  return (urlLang === 'en' || urlLang === 'zh') ? urlLang : (stored === 'en' || stored === 'zh') ? stored : 'zh';
}

// Set language to storage
function setLanguage(lang) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
  currentLang = lang;
}

// Update all texts on page
function updatePageTexts(lang) {
  if (!translations[lang]) {
    console.warn('Translation not found for language:', lang);
    return;
  }
  
  const t = translations[lang];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const keys = key.split('.');
      let value = t;
      for (const k of keys) {
        // Handle array indices (e.g., "whyUs.points.0.title")
        if (!isNaN(Number(k))) {
          value = value?.[Number(k)];
        } else {
          value = value?.[k];
        }
      }
      if (value && typeof value === 'string') {
        el.textContent = value;
      }
    }
  });
}

// Initialize language switchers
function initializeLanguageSwitchers() {
  const switchers = document.querySelectorAll('[data-language-switcher], [data-language-switcher-mobile]');
  
  switchers.forEach((switcher) => {
    const buttons = switcher.querySelectorAll('[data-lang]');
    
    buttons.forEach((btn) => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) {
        btn.setAttribute('data-active', 'true');
      } else {
        btn.setAttribute('data-active', 'false');
      }
      
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const clickedLang = btn.getAttribute('data-lang');
        if (clickedLang && (clickedLang === 'zh' || clickedLang === 'en')) {
          if (clickedLang === currentLang) {
            return;
          }
          
          setLanguage(clickedLang);
          
          // Update active state
          switchers.forEach((s) => {
            const btns = s.querySelectorAll('[data-lang]');
            btns.forEach((b) => {
              const l = b.getAttribute('data-lang');
              if (l === clickedLang) {
                b.setAttribute('data-active', 'true');
              } else {
                b.setAttribute('data-active', 'false');
              }
            });
          });
          
          // Update page texts
          updatePageTexts(clickedLang);
          
          // Update URL
          const url = new URL(window.location.href);
          url.searchParams.set('lang', clickedLang);
          window.history.replaceState({}, '', url.toString());
          
          // Dispatch custom event
          window.dispatchEvent(new CustomEvent('languagechange', {
            detail: { lang: clickedLang },
            bubbles: true,
            cancelable: true
          }));
        }
      });
    });
  });
}

// Initialize navigation toggle
function initializeNavigation() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      const expanded = !isHidden;
      toggle.setAttribute('aria-expanded', expanded.toString());
      
      if (!expanded) {
        menu.querySelectorAll('details').forEach((detail) => {
          detail.open = false;
        });
      }
    });
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    const target = event.target;
    const trigger = target && target.closest('[data-has-dropdown]');
    if (!trigger) {
      document.querySelectorAll('[data-has-dropdown] details').forEach((detail) => {
        detail.open = false;
      });
    }
  });
}

// Initialize contact modal
function initializeContactModal() {
  const modal = document.getElementById('contact-modal');
  const contactButtons = document.querySelectorAll('[data-contact-btn]');
  const closeButton = document.querySelector('[data-modal-close]');
  const copyButton = document.querySelector('[data-copy-wechat]');
  const wechatId = 'popup-service';
  
  if (!modal) return;
  
  const openModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };
  
  contactButtons.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });
  
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
  
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
  
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(wechatId);
        const originalText = copyButton.textContent || '';
        copyButton.textContent = '已复制';
        copyButton.classList.add('bg-green-500', 'hover:bg-green-600');
        copyButton.classList.remove('bg-brand-500', 'hover:bg-brand-600');
        
        setTimeout(() => {
          copyButton.textContent = originalText;
          copyButton.classList.remove('bg-green-500', 'hover:bg-green-600');
          copyButton.classList.add('bg-brand-500', 'hover:bg-brand-600');
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
        const textArea = document.createElement('textarea');
        textArea.value = wechatId;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    });
  }
}

// Initialize app
function initializeApp() {
  currentLang = getLanguage();
  updatePageTexts(currentLang);
  initializeLanguageSwitchers();
  initializeNavigation();
  initializeContactModal();
  
  // Listen for language change events
  window.addEventListener('languagechange', (e) => {
    const newLang = e.detail?.lang;
    if (newLang) {
      updatePageTexts(newLang);
    }
  });
  
  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'language' && e.newValue) {
      const newLang = (e.newValue === 'en' || e.newValue === 'zh') ? e.newValue : 'zh';
      setLanguage(newLang);
      updatePageTexts(newLang);
    }
  });
}

// Load translations and initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadTranslations);
} else {
  loadTranslations();
}

// Export for use in other scripts
window.updatePageTexts = updatePageTexts;
window.getLanguage = getLanguage;
window.setLanguage = setLanguage;

