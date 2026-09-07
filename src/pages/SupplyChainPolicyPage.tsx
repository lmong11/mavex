import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Copy, Download, FileText, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import policy from '../data/supply-chain-policy.json';

type ReadingMode = 'both' | 'zh' | 'en';
type BilingualText = { zh: string; en: string };

const PolicyText = ({ text, mode, heading = false }: { text: BilingualText; mode: ReadingMode; heading?: boolean }) => (
  <div className={heading ? 'space-y-2' : 'space-y-3'}>
    {mode !== 'en' && <p lang="zh-CN" className={`policy-copy ${heading ? 'font-semibold text-graphite' : 'text-graphite/90'}`}>{text.zh}</p>}
    {mode !== 'zh' && <p lang="en" className={`policy-copy ${heading ? 'font-semibold text-graphite' : 'text-steel-gray'}`}>{text.en}</p>}
  </div>
);

const SupplyChainPolicyPage = () => {
  const { t, i18n } = useTranslation();
  const [readingMode, setReadingMode] = useState<ReadingMode>('both');
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const isChinese = i18n.resolvedLanguage === 'zh-CN';
  const modes: { value: ReadingMode; label: string }[] = [
    { value: 'both', label: t('policy.bilingual') },
    { value: 'zh', label: '中文' },
    { value: 'en', label: 'English' },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('business@mavexinvest.com');
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  return (
    <div className="bg-warm-stone pb-16 pt-20 md:pb-24">
      <section className="relative overflow-hidden bg-graphite text-white" aria-labelledby="policy-title">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-jade/10 to-transparent" aria-hidden="true" />
        <div className="container-custom relative py-10 md:py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />{t('policy.backHome')}
          </Link>
          <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <p className="section-label text-copper-light">{t('policy.noticeLabel')}</p>
              <h1 id="policy-title" className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">{t('policy.title')}</h1>
              <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">{t('policy.summary')}</p>
              <dl className="mt-7 space-y-4 text-sm">
                <div><dt className="text-white/50">{t('policy.issuerLabel')}</dt><dd className="mt-1 max-w-2xl text-white/90">{isChinese ? policy.issuer.zh : policy.issuer.en}</dd></div>
                <div><dt className="text-white/50">{t('policy.dateLabel')}</dt><dd className="mt-1 text-white/90"><time dateTime={policy.date}>{policy.date}</time></dd></div>
              </dl>
            </div>
            <div className="border border-white/15 bg-white/[0.03] p-5 sm:p-6">
              <FileText className="h-7 w-7 text-copper-light" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold">{t('policy.originalDocument')}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{t('policy.documentInfo')}</p>
              <a href={policy.source.path} download className="btn-primary mt-5 w-full gap-2 normal-case tracking-normal">
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />{t('policy.download')}
              </a>
              <a href={policy.source.path} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white">
                {t('policy.openPdf')}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-copper via-jade to-transparent" aria-hidden="true" />
      </section>

      <div className="container-custom pt-8 md:pt-12">
        <div className="grid items-start gap-8 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="xl:sticky xl:top-28">
            <nav aria-label={t('policy.contents')} className="border border-graphite/10 bg-white/60 p-5">
              <p className="eyebrow">{t('policy.contents')}</p>
              <ol className="mt-4 grid gap-1 sm:grid-cols-2 xl:grid-cols-1">
                <li><a href="#policy-introduction" className="block py-2 text-sm text-steel-gray hover:text-copper-dark">{t('policy.introduction')}</a></li>
                {policy.sections.map((section) => (
                  <li key={section.number}>
                    <a href={`#policy-section-${section.number}`} className="flex items-start gap-3 py-2 text-sm text-steel-gray hover:text-copper-dark">
                      <span className="font-mono text-copper-dark">{String(section.number).padStart(2, '0')}</span>
                      <span>{t(`policy.sections.${section.number}`)}</span>
                    </a>
                  </li>
                ))}
                <li><a href="#policy-implementation" className="block py-2 text-sm text-steel-gray hover:text-copper-dark">{t('policy.implementation')}</a></li>
                <li><a href="#policy-grievance" className="block py-2 text-sm text-steel-gray hover:text-copper-dark">{t('policy.contactTitle')}</a></li>
              </ol>
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl">{t('policy.fullText')}</h2>
                <p className="mt-2 max-w-lg text-sm text-steel-gray">{t('policy.originalNote')}</p>
              </div>
              <div role="group" aria-label={t('policy.readingLanguage')} className="inline-flex self-start border border-graphite/20 bg-white p-1 sm:shrink-0">
                {modes.map(({ value, label }) => (
                  <button key={value} type="button" aria-pressed={readingMode === value} onClick={() => setReadingMode(value)} className={`px-3 py-2 text-xs font-semibold transition-colors ${readingMode === value ? 'bg-graphite text-white' : 'text-steel-gray hover:bg-warm-stone'}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <article className="border border-graphite/10 bg-white px-5 py-8 sm:p-8 lg:p-10" aria-label={t('policy.fullText')}>
              <section id="policy-introduction" className="scroll-mt-28">
                <h2 className="mb-6 font-body text-xl font-semibold md:text-2xl">
                  {readingMode !== 'en' && <span lang="zh-CN" className="policy-copy block">{policy.title.zh}</span>}
                  {readingMode !== 'zh' && <span lang="en" className="policy-copy mt-2 block">{policy.title.en}</span>}
                </h2>
                <PolicyText text={policy.introduction} mode={readingMode} />
              </section>

              {policy.sections.map((section) => (
                <section key={section.number} id={`policy-section-${section.number}`} className="mt-10 scroll-mt-28 border-t border-graphite/10 pt-8 md:mt-12 md:pt-10">
                  <div className="mb-7 flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-warm-stone text-sm font-semibold text-copper-dark" aria-hidden="true">{section.number}</span>
                    <h2 className="min-w-0 font-body text-lg font-semibold md:text-xl">
                      {readingMode !== 'en' && <span lang="zh-CN" className="policy-copy block">{section.title.zh}</span>}
                      {readingMode !== 'zh' && <span lang="en" className="policy-copy mt-2 block">{section.title.en}</span>}
                    </h2>
                  </div>
                  <div className="space-y-7">
                    {section.blocks.map((block, index) => block.kind === 'subheading' ? (
                      <h3 key={index} className="border-l-2 border-copper bg-warm-stone/70 p-4 font-body text-base font-semibold md:text-base">
                        {readingMode !== 'en' && <span lang="zh-CN" className="policy-copy block">{block.zh}</span>}
                        {readingMode !== 'zh' && <span lang="en" className="policy-copy mt-2 block">{block.en}</span>}
                      </h3>
                    ) : <PolicyText key={index} text={block} mode={readingMode} />)}
                  </div>
                </section>
              ))}

              <section id="policy-implementation" className="mt-10 scroll-mt-28 space-y-7 border-t border-graphite/10 pt-8 md:mt-12 md:pt-10" aria-label={t('policy.implementation')}>
                {policy.closing.map((text, index) => <PolicyText key={index} text={text} mode={readingMode} />)}
                <div className="border-t border-graphite/10 pt-7 text-right">
                  <PolicyText text={policy.issuer} mode={readingMode} heading />
                  <p className="mt-3 text-sm text-steel-gray"><time dateTime={policy.date}>{policy.date}</time></p>
                </div>
              </section>
            </article>

            <section id="policy-grievance" className="mt-6 scroll-mt-28 border-t-2 border-jade bg-white p-6 sm:p-8" aria-labelledby="policy-grievance-title">
              <h2 id="policy-grievance-title" className="text-2xl md:text-3xl">{t('policy.contactTitle')}</h2>
              <p className="mt-3 text-sm text-steel-gray">{t('policy.contactText')}</p>
              <div className="mt-6 flex flex-col gap-5">
                <a href="tel:+8562059617050" className="inline-flex w-fit items-center gap-3 text-sm font-semibold hover:text-jade-dark"><Phone className="h-4 w-4 shrink-0 text-jade-dark" aria-hidden="true" />00856-02059617050</a>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a href="mailto:business@mavexinvest.com" className="inline-flex items-center gap-3 break-all text-sm font-semibold hover:text-jade-dark"><Mail className="h-4 w-4 shrink-0 text-jade-dark" aria-hidden="true" />business@mavexinvest.com</a>
                  <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 border-b border-jade-dark/30 py-1 text-xs font-semibold text-jade-dark hover:border-jade-dark">
                    {copyState === 'copied' ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                    <span aria-live="polite">{t(copyState === 'copied' ? 'contactDialog.copied' : 'contactDialog.copy')}</span>
                  </button>
                </div>
                {copyState === 'failed' && <p role="status" className="text-sm text-copper-dark">{t('contactDialog.copyFailed')}</p>}
              </div>
            </section>
            <a href={policy.source.path} download className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-copper-dark hover:underline"><Download className="h-4 w-4" aria-hidden="true" />{t('policy.download')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainPolicyPage;
