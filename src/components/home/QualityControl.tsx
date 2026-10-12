import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../contact/ContactButton';

const qualitySteps = ['sampling', 'process', 'product', 'traceability'];
const testingMethods = ['spectroscopy', 'carbonSulfur', 'ions', 'physical'];

const QualityControl = () => {
  const { t } = useTranslation();

  return (
    <section id="quality-control" aria-labelledby="quality-title" className="section scroll-mt-24 border-y border-graphite/15 bg-warm-stone">
      <div className="container-custom">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="section-label text-copper-dark">{t('qualityControl.label')}</p>
            <h2 id="quality-title" className="mt-5 text-4xl leading-tight text-graphite md:text-5xl">{t('qualityControl.title')}</h2>
          </div>
          <p className="max-w-2xl text-lg text-steel-gray lg:col-span-5 lg:col-start-8">{t('qualityControl.intro')}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h3 className="border-b border-graphite/20 pb-4 text-2xl text-graphite">{t('qualityControl.workflowTitle')}</h3>
            <ol className="mt-1 divide-y divide-graphite/15">
              {qualitySteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] gap-4 py-5">
                  <span className="pt-0.5 font-display text-2xl text-copper-dark" aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h4 className="text-xl text-graphite">{t(`qualityControl.steps.${step}.title`)}</h4>
                    <p className="mt-2 text-sm text-steel-gray">{t(`qualityControl.steps.${step}.text`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="bg-graphite p-6 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <FlaskConical className="h-5 w-5 shrink-0 text-jade-light" aria-hidden="true" />
                <h3 className="text-2xl">{t('qualityControl.methodsTitle')}</h3>
              </div>
              <dl className="mt-5 divide-y divide-white/15">
                {testingMethods.map((method) => (
                  <div key={method} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] sm:gap-6">
                    <dt className="text-sm font-semibold text-copper-light">{t(`qualityControl.methods.${method}.title`)}</dt>
                    <dd className="text-sm leading-relaxed text-white/80">{t(`qualityControl.methods.${method}.text`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border-x border-b border-graphite/15 bg-white p-6 sm:p-8">
              <h3 className="text-2xl text-graphite">{t('qualityControl.processTitle')}</h3>
              <p className="mt-3 text-sm leading-loose text-jade-dark">{t('qualityControl.processStages')}</p>
              <p className="mt-3 text-sm text-steel-gray">{t('qualityControl.processText')}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-graphite/20 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-steel-gray">{t('qualityControl.contactText')}</p>
          <ContactButton className="inline-flex items-center gap-3 self-start border-b border-jade-dark pb-2 text-left text-sm font-semibold text-jade-dark hover:text-graphite md:max-w-xs">
            {t('qualityControl.contact')}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </ContactButton>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
