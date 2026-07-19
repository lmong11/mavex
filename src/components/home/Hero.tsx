import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-graphite lg:h-[100svh]" aria-labelledby="hero-title">
      <img
        src="/images/factory/factory-overview.jpg"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,17,24,0.97)_0%,rgba(11,17,24,0.88)_43%,rgba(11,17,24,0.28)_78%,rgba(11,17,24,0.12)_100%)]" aria-hidden="true" />
      <div className="industrial-grid absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="relative flex min-h-[760px] items-start pb-16 pt-32 lg:h-full lg:min-h-0 lg:items-center lg:pb-0 lg:pt-20">
        <div className="container-custom min-w-0">
          <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 max-w-4xl text-white max-sm:w-[calc(100vw-2rem)] max-sm:max-w-[calc(100vw-2rem)] lg:col-span-7">
              <p className="section-label text-copper-light">
                {t('hero.label')}
              </p>
              <h1 id="hero-title" className="mt-6 max-w-3xl text-[3.7rem] font-semibold uppercase leading-[0.86] tracking-[-0.025em] sm:text-7xl lg:text-[6.5rem]">
                {t('hero.title')}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/[0.74] md:text-xl">
                {t('hero.intro')}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#capabilities" className="btn-primary">
                  {t('hero.explore')}
                  <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <Link to="/gallery" className="btn border border-white/[0.35] text-white hover:border-white hover:bg-white/10 focus:ring-white">
                  {t('hero.viewFactory')}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 max-sm:w-[calc(100vw-2rem)] max-sm:max-w-[calc(100vw-2rem)] lg:col-span-4 lg:col-start-9">
              <div className="min-w-0 border border-white/[0.18] bg-graphite/[0.72] p-6 text-white backdrop-blur-md md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper-light">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {t('hero.base')}
                </div>
                <dl className="mt-8 grid min-w-0 grid-cols-2 gap-px bg-white/15">
                  <div className="min-w-0 bg-graphite/90 p-4 sm:p-5">
                    <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-white/[0.48]">{t('hero.processingLabel')}</dt>
                    <dd className="mt-3 font-display text-3xl font-semibold sm:text-4xl">20,000</dd>
                    <span className="text-xs text-copper-light">{t('hero.processingUnit')}</span>
                  </div>
                  <div className="min-w-0 bg-graphite/90 p-4 sm:p-5">
                    <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-white/[0.48]">{t('hero.footprintLabel')}</dt>
                    <dd className="mt-3 whitespace-nowrap font-display text-3xl font-semibold">{t('hero.footprintValue')}</dd>
                    <span className="text-xs text-copper-light">{t('hero.footprintDetail')}</span>
                  </div>
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-white/[0.45]">
                  {t('hero.imageNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-copper via-jade to-transparent" aria-hidden="true" />
    </section>
  );
};

export default Hero;
