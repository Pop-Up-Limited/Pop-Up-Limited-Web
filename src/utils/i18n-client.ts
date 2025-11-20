// Client-side i18n utility
// Note: This file is used in client-side scripts only

export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'zh';
  const stored = localStorage.getItem('language');
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  return (urlLang === 'en' || urlLang === 'zh') ? urlLang : (stored === 'en' || stored === 'zh') ? stored : 'zh';
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}

export function updatePageTexts(lang: Language = getLanguage()): void {
  const t = translations[lang];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const keys = key.split('.');
      let value: any = t;
      for (const k of keys) {
        value = value?.[k];
      }
      if (value && typeof value === 'string') {
        el.textContent = value;
      } else if (value && typeof value === 'object' && el.hasAttribute('data-i18n-attr')) {
        const attr = el.getAttribute('data-i18n-attr') || 'textContent';
        if (attr === 'textContent') {
          el.textContent = JSON.stringify(value);
        } else {
          el.setAttribute(attr, String(value));
        }
      }
    }
  });
}

// Initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    updatePageTexts();
  });
}

