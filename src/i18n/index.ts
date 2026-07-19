import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import th from './locales/th.json';
import vi from './locales/vi.json';
import zhCN from './locales/zh-CN.json';

export const languageStorageKey = 'mavex-language';

export const supportedLanguages = [
  { code: 'en', label: 'English', shortLabel: 'EN', htmlLang: 'en' },
  { code: 'zh-CN', label: '简体中文', shortLabel: '中', htmlLang: 'zh-CN' },
  { code: 'ja', label: '日本語', shortLabel: '日', htmlLang: 'ja' },
  { code: 'ko', label: '한국어', shortLabel: '한', htmlLang: 'ko' },
  { code: 'th', label: 'ไทย', shortLabel: 'ไทย', htmlLang: 'th' },
  { code: 'vi', label: 'Tiếng Việt', shortLabel: 'VI', htmlLang: 'vi' },
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number]['code'];

const supportedLanguageCodes = supportedLanguages.map(({ code }) => code);

const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window === 'undefined') return 'en';

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    if (storedLanguage && supportedLanguageCodes.includes(storedLanguage as SupportedLanguage)) {
      return storedLanguage as SupportedLanguage;
    }
  } catch {
    // Browsers can restrict local storage; English remains the safe default.
  }

  return 'en';
};

const resources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN },
  ja: { translation: ja },
  ko: { translation: ko },
  th: { translation: th },
  vi: { translation: vi },
};

const syncDocumentLanguage = (language: string) => {
  const resolvedLanguage = supportedLanguages.find(({ code }) => code === language) ?? supportedLanguages[0];
  document.documentElement.lang = resolvedLanguage.htmlLang;
  document.documentElement.dir = 'ltr';

  try {
    window.localStorage.setItem(languageStorageKey, resolvedLanguage.code);
  } catch {
    // Language switching still works for the current page when storage is unavailable.
  }
};

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: supportedLanguageCodes,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

i18n.on('languageChanged', syncDocumentLanguage);
syncDocumentLanguage(i18n.resolvedLanguage ?? 'en');

export default i18n;
