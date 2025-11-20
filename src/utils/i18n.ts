import type { Language } from '../i18n/translations';

export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return 'zh';
  const stored = localStorage.getItem('language');
  return (stored === 'en' || stored === 'zh') ? stored : 'zh';
}

export function setLanguageToStorage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
}

export function getLanguageFromURL(): Language | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  return (lang === 'en' || lang === 'zh') ? lang : null;
}

