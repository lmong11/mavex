import { ArrowRight, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PolicyAnnouncement = () => {
  const { t } = useTranslation();

  return (
    <aside className="border-b border-graphite/10 bg-warm-stone" aria-label={t('policy.noticeLabel')}>
      <div className="container-custom">
        <Link to="/policies/supply-chain" className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between md:py-7">
          <div className="flex min-w-0 items-start gap-4 sm:items-center">
            <FileText className="mt-1 h-6 w-6 shrink-0 text-copper-dark sm:mt-0" aria-hidden="true" />
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="eyebrow">{t('policy.noticeLabel')}</span>
                <span className="text-xs text-steel-gray">{t('policy.dateLabel')} · <time dateTime="2026-08-25">2026-08-25</time></span>
              </div>
              <p className="mt-1 text-lg font-semibold text-graphite">{t('policy.title')}</p>
              <p className="mt-1 max-w-3xl text-sm text-steel-gray">{t('policy.summary')}</p>
            </div>
          </div>
          <span className="ml-10 inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-copper-dark sm:ml-0">
            {t('policy.view')}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default PolicyAnnouncement;
