import React, { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, type SupportedLanguage } from '../../i18n';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'desktop' }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const activeLanguage = supportedLanguages.find(({ code }) => code === i18n.resolvedLanguage)
    ?? supportedLanguages[0];

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const selectLanguage = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const isMobile = variant === 'mobile';

  return (
    <div ref={containerRef} className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="menu"
        aria-label={t('language.select')}
        className={`inline-flex items-center justify-between gap-2 border border-white/20 text-white transition-colors hover:border-copper-light hover:bg-white/[0.06] focus-visible:ring-copper-light ${
          isMobile ? 'w-full px-3 py-3 text-sm' : 'px-3 py-2 text-xs font-semibold'
        }`}
      >
        <span className="inline-flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-jade-light" aria-hidden="true" />
          <span>{isMobile ? activeLanguage.label : activeLanguage.shortLabel}</span>
        </span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className={`z-[70] border border-white/[0.14] bg-graphite/95 p-1.5 shadow-2xl backdrop-blur-xl ${
            isMobile ? 'mt-1 w-full' : 'absolute right-0 top-[calc(100%+0.55rem)] min-w-44'
          }`}
        >
          {supportedLanguages.map((language) => {
            const isActive = language.code === activeLanguage.code;
            return (
              <button
                key={language.code}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => selectLanguage(language.code)}
                className={`flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left text-sm transition-colors ${
                  isActive
                    ? 'bg-copper text-white'
                    : 'text-white/75 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                <span lang={language.htmlLang}>{language.label}</span>
                {isActive && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
