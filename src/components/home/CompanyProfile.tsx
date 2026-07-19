import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ArrowUpRight,
  Building2,
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  PackageCheck,
  Recycle,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const capacityMetrics = [
  {
    value: '20,000',
    labelKey: 'company.processing',
  },
  {
    value: '2,000',
    labelKey: 'company.aptCapacity',
  },
  {
    value: '1,000',
    labelKey: 'company.ferroalloyCapacity',
  },
];

const materials = [
  { symbol: 'W', key: 'tungsten' },
  { symbol: 'Mo', key: 'molybdenum' },
  { symbol: 'V', key: 'vanadium' },
  { symbol: 'Co', key: 'cobalt' },
  { symbol: 'Ni', key: 'nickel' },
];

const valueChain = [
  {
    number: '01',
    icon: ShieldCheck,
    key: 'review',
  },
  {
    number: '02',
    icon: Recycle,
    key: 'recovery',
  },
  {
    number: '03',
    icon: FlaskConical,
    key: 'conversion',
  },
  {
    number: '04',
    icon: PackageCheck,
    key: 'delivery',
  },
];

const CompanyProfile: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <div ref={ref} className={inView ? 'opacity-100' : 'opacity-0'}>
      <section id="company-profile" className="section scroll-mt-20 bg-warm-stone">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="section-label text-copper-dark">{t('company.label')}</p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold uppercase leading-[0.92] text-graphite md:text-6xl">
                {t('company.title')}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-steel-gray">
                {t('company.intro')}
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-0 lg:grid-cols-12">
            <figure className="image-frame relative min-h-[420px] overflow-hidden lg:col-span-7">
              <img
                src="/images/concepts/regional-platform.jpg"
                alt={t('company.conceptAlt')}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/70">
                {t('company.conceptCaption')}
              </figcaption>
            </figure>
            <div className="bg-white p-8 md:p-12 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-dark">{t('company.platformLabel')}</p>
              <h3 className="mt-4 text-3xl font-semibold uppercase text-graphite">{t('company.platformTitle')}</h3>
              <p className="mt-5 text-steel-gray">
                {t('company.platformDescription')}
              </p>
              <dl className="mt-8 border-t border-graphite/[0.15]">
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-graphite/[0.15] py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-gray">{t('company.roleLabel')}</dt>
                  <dd className="font-medium text-graphite">{t('company.roleValue')}</dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-graphite/[0.15] py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-gray">{t('company.networkLabel')}</dt>
                  <dd className="font-medium text-graphite">{t('company.networkValue')}</dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-gray">{t('company.focusLabel')}</dt>
                  <dd className="font-medium text-graphite">{t('company.focusValue')}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-graphite/[0.15] sm:grid-cols-3">
            {capacityMetrics.map((metric) => (
              <div key={metric.labelKey} className="bg-warm-stone p-6 md:p-8">
                <div className="font-display text-5xl font-semibold text-graphite md:text-6xl">{metric.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-copper-dark">{t('company.unit')}</div>
                <p className="mt-5 text-sm text-steel-gray">{t(metric.labelKey)}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel-gray/70">{t('company.capacityNote')}</p>
        </div>
      </section>

      <section id="capabilities" className="section scroll-mt-20 overflow-hidden bg-graphite text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="section-label text-copper-light">{t('capabilities.label')}</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] md:text-6xl">{t('capabilities.title')}</h2>
              <p className="mt-7 max-w-xl text-lg text-white/[0.65]">
                {t('capabilities.intro')}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px bg-white/[0.12] sm:grid-cols-2">
                {materials.map((material, index) => (
                  <article key={material.symbol} className={`bg-graphite p-5 ${index === materials.length - 1 ? 'sm:col-span-2' : ''}`}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-jade/[0.45] font-display text-2xl font-semibold text-jade-light">
                        {material.symbol}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold uppercase">{t(`capabilities.materials.${material.key}.name`)}</h3>
                        <p className="mt-1 text-sm text-white/[0.48]">{t(`capabilities.materials.${material.key}.detail`)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <figure className="lg:col-span-7 lg:pl-8">
              <div className="relative overflow-hidden border border-white/[0.12]">
                <img
                  src="/images/concepts/strategic-metals.jpg"
                  alt={t('capabilities.conceptAlt')}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite via-graphite/75 to-transparent px-6 pb-5 pt-16">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">{t('capabilities.conceptCaption')}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-px bg-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">{t('capabilities.primaryProduct')}</span>
                  <p className="mt-2 font-semibold">{t('capabilities.apt')}</p>
                </div>
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">{t('capabilities.ferroalloy')}</span>
                  <p className="mt-2 font-semibold">{t('capabilities.ferrotungsten')}</p>
                </div>
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">{t('capabilities.ferroalloy')}</span>
                  <p className="mt-2 font-semibold">{t('capabilities.ferromolybdenum')}</p>
                </div>
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">{t('capabilities.ferroalloy')}</span>
                  <p className="mt-2 font-semibold">{t('capabilities.ferrovanadium')}</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section id="value-chain" className="section scroll-mt-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="section-label text-copper-dark">{t('valueChain.label')}</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] text-graphite md:text-6xl">{t('valueChain.title')}</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-steel-gray">
                {t('valueChain.intro')}
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 lg:grid-cols-12">
            <figure className="relative overflow-hidden bg-graphite lg:col-span-6">
              <img
                src="/images/concepts/circular-material-flow.jpg"
                alt={t('valueChain.conceptAlt')}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[440px] w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/60">
                {t('valueChain.conceptCaption')}
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 gap-px bg-graphite/[0.15] sm:grid-cols-2 lg:col-span-6">
              {valueChain.map((step) => (
                <article key={step.number} className="bg-warm-stone p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-semibold text-copper">{step.number}</span>
                    <step.icon className="h-6 w-6 text-jade-dark" aria-hidden="true" />
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold uppercase text-graphite">{t(`valueChain.steps.${step.key}.title`)}</h3>
                  <p className="mt-4 text-sm text-steel-gray">{t(`valueChain.steps.${step.key}.text`)}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-graphite/[0.15] md:grid-cols-3">
            <article className="bg-white p-7">
              <Leaf className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-semibold uppercase text-graphite">{t('valueChain.benefits.efficiency.title')}</h3>
              <p className="mt-3 text-steel-gray">{t('valueChain.benefits.efficiency.text')}</p>
            </article>
            <article className="bg-white p-7">
              <ShieldCheck className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-semibold uppercase text-graphite">{t('valueChain.benefits.sourcing.title')}</h3>
              <p className="mt-3 text-steel-gray">{t('valueChain.benefits.sourcing.text')}</p>
            </article>
            <article className="bg-white p-7">
              <Globe2 className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-semibold uppercase text-graphite">{t('valueChain.benefits.coordination.title')}</h3>
              <p className="mt-3 text-steel-gray">{t('valueChain.benefits.coordination.text')}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="operations" className="section scroll-mt-20 bg-warm-stone">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="section-label text-copper-dark">{t('operations.label')}</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] text-graphite md:text-6xl">{t('operations.title')}</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg text-steel-gray">
                {t('operations.intro')}
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-12">
            <figure className="group relative min-h-[480px] overflow-hidden md:col-span-8 md:row-span-2">
              <img
                src="/images/factory/production-line-wide.jpg"
                alt={t('operations.lineAlt')}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/70">{t('operations.lineCaption')}</figcaption>
            </figure>
            <figure className="group relative min-h-[232px] overflow-hidden md:col-span-4">
              <img
                src="/images/factory/factory-reception.jpg"
                alt={t('operations.receptionAlt')}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/70">{t('operations.receptionCaption')}</figcaption>
            </figure>
            <figure className="group relative min-h-[232px] overflow-hidden md:col-span-4">
              <img
                src="/images/factory/water-treatment.jpg"
                alt={t('operations.waterAlt')}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/70">{t('operations.waterCaption')}</figcaption>
            </figure>
          </div>

          <div className="mt-10 grid grid-cols-1 bg-copper text-white lg:grid-cols-12">
            <div className="p-8 md:p-10 lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{t('operations.exploreLabel')}</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[0.95] md:text-5xl">{t('operations.exploreTitle')}</h3>
            </div>
            <div className="flex flex-col justify-center gap-3 border-t border-white/20 p-8 lg:col-span-4 lg:border-l lg:border-t-0">
              <Link to="/gallery" className="inline-flex items-center justify-between border-b border-white/40 py-3 font-semibold hover:border-white">
                {t('operations.openGallery')}
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href="mailto:Business@mavexinvest.com" className="inline-flex items-center justify-between border-b border-white/40 py-3 font-semibold hover:border-white">
                {t('operations.discuss')}
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-graphite/15 md:grid-cols-2">
            <article className="bg-white p-8">
              <Building2 className="h-7 w-7 text-copper" aria-hidden="true" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-copper-dark">{t('operations.singapore')}</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase text-graphite">{t('operations.commercialHeadquarters')}</h3>
              <p className="mt-4 text-steel-gray">MAVEX INVESTMENTS PTE. LTD.<br />112 Robinson Road, #03-01, Singapore 068902</p>
            </article>
            <article className="bg-white p-8">
              <Factory className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-jade-dark">{t('operations.laos')}</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase text-graphite">{t('operations.productionOperations')}</h3>
              <p className="mt-4 text-steel-gray">Zhongyu International Metal Materials Industry Co., Ltd.<br />{t('operations.laosAddress')}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
