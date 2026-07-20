import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const businessEmail = 'business@mavexinvest.com';

type CopyState = 'idle' | 'copied' | 'failed';

interface ContactButtonProps {
  children: React.ReactNode;
  className?: string;
  onOpen?: () => void;
}

const fallbackCopy = (value: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  return copied;
};

const ContactButton: React.FC<ContactButtonProps> = ({ children, className, onOpen }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setCopyState('idle');
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDialog();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeDialog, isOpen]);

  const openDialog = () => {
    onOpen?.();
    setCopyState('idle');
    setIsOpen(true);
  };

  const copyEmail = async () => {
    let copied = false;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(businessEmail);
        copied = true;
      } catch {
        copied = fallbackCopy(businessEmail);
      }
    } else {
      copied = fallbackCopy(businessEmail);
    }

    setCopyState(copied ? 'copied' : 'failed');
  };

  const mailtoHref = `mailto:${businessEmail}?subject=${encodeURIComponent(t('contactDialog.subject'))}`;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={className}
      >
        {children}
      </button>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite/85 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative w-full max-w-xl overflow-hidden border border-white/15 bg-warm-stone text-graphite shadow-2xl"
          >
            <div className="h-1 bg-gradient-to-r from-copper via-jade to-transparent" aria-hidden="true" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeDialog}
              className="absolute right-4 top-5 border border-graphite/15 p-2 text-steel-gray transition-colors hover:border-copper hover:bg-white hover:text-graphite"
              aria-label={t('contactDialog.close')}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper-dark">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t('contactDialog.label')}
              </div>
              <h2 id={titleId} className="mt-5 pr-10 text-4xl font-semibold uppercase leading-none md:text-5xl">
                {t('contactDialog.title')}
              </h2>
              <p id={descriptionId} className="mt-5 max-w-lg text-steel-gray">
                {t('contactDialog.description')}
              </p>

              <div className="mt-8 border border-graphite/15 bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-gray">
                  {t('contactDialog.emailLabel')}
                </p>
                <p className="mt-2 select-all break-all text-lg font-semibold sm:text-xl">
                  {businessEmail}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn-primary w-full"
                >
                  {copyState === 'copied' ? (
                    <Check className="mr-2 h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
                  )}
                  <span aria-live="polite">
                    {copyState === 'copied' ? t('contactDialog.copied') : t('contactDialog.copy')}
                  </span>
                </button>
                <a
                  href={mailtoHref}
                  className="btn w-full border-graphite/25 text-graphite hover:border-graphite hover:bg-white focus:ring-graphite"
                >
                  {t('contactDialog.openMail')}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {copyState === 'failed' && (
                <p className="mt-4 text-sm font-medium text-copper-dark" role="status">
                  {t('contactDialog.copyFailed')}
                </p>
              )}
              <p className="mt-5 text-xs text-steel-gray/75">{t('contactDialog.note')}</p>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default ContactButton;
