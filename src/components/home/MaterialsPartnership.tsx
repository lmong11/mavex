import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../contact/ContactButton';

const purchaseMaterials = ['catalysts', 'residues', 'scheelite', 'sodiumTungstate'];
const processingMaterials = ['sodiumTungstate', 'residues'];
const materialForms = ['powder', 'lumps', 'granules'];
const principalAssays = ['WO₃', 'Mo', 'Co', 'Ni'];
const traceAssays = ['Cr', 'Cu', 'Fe', 'Mn', 'Mg', 'Na', 'P', 'S'];

const MaterialsPartnership = () => {
  const { t } = useTranslation();

  return (
    <section id="materials" aria-labelledby="materials-title" className="section scroll-mt-24 bg-warm-stone">
      <div className="container-custom">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="section-label text-copper-dark">{t('materialsPartnership.label')}</p>
            <h2 id="materials-title" className="mt-5 text-4xl leading-tight text-graphite md:text-5xl">
              {t('materialsPartnership.title')}
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-steel-gray lg:col-span-5 lg:col-start-8">
            {t('materialsPartnership.intro')}
          </p>
        </div>

        <div className="mt-10 grid border-t border-graphite/20 lg:grid-cols-12">
          <div className="min-w-0 py-8 lg:col-span-7 lg:pr-12">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl text-graphite md:text-3xl">{t('materialsPartnership.purchaseTitle')}</h3>
              <ArrowDownRight className="h-6 w-6 shrink-0 text-jade-dark" aria-hidden="true" />
            </div>
            <ol className="mt-5 divide-y divide-graphite/15">
              {purchaseMaterials.map((material, index) => (
                <li key={material} className="grid grid-cols-[2rem_1fr] gap-3 py-5">
                  <span className="pt-1 font-display text-xl text-copper-dark" aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h4 className="text-xl leading-snug text-graphite">{t(`materialsPartnership.items.${material}.title`)}</h4>
                    <p className="mt-1 text-sm text-steel-gray">{t(`materialsPartnership.items.${material}.text`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="min-w-0 border-t border-graphite/15 bg-white p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jade-dark">{t('materialsPartnership.processingLabel')}</p>
            <h3 className="mt-3 text-2xl text-graphite md:text-3xl">{t('materialsPartnership.processingTitle')}</h3>
            <ul className="mt-6 space-y-4">
              {processingMaterials.map((material) => (
                <li key={material} className="flex items-start gap-3 text-lg font-medium text-graphite">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-jade-dark" aria-hidden="true" />
                  {t(`materialsPartnership.items.${material}.title`)}
                </li>
              ))}
            </ul>
            <div className="mt-9 border-t border-graphite/15 pt-6">
              <h4 className="font-body text-sm font-semibold text-steel-gray">{t('materialsPartnership.formsTitle')}</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {materialForms.map((form) => (
                  <li key={form} className="border border-graphite/20 px-3 py-1.5 text-sm text-graphite">{t(`materialsPartnership.forms.${form}`)}</li>
                ))}
              </ul>
            </div>
            <a href="#quality-control" className="mt-8 inline-flex items-center gap-3 border-b border-jade-dark pb-2 text-sm font-semibold text-jade-dark hover:text-graphite">
              {t('materialsPartnership.qualityLink')}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-y border-graphite/20 py-8 md:grid-cols-2">
          <div>
            <h3 className="font-body text-sm font-semibold text-steel-gray">{t('materialsPartnership.mainAssays')}</h3>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-3xl font-semibold text-graphite" aria-label={t('materialsPartnership.mainAssays')}>
              {principalAssays.map((assay) => <span key={assay}>{assay}</span>)}
            </p>
            <p className="mt-3 text-sm text-steel-gray">{t('materialsPartnership.assayBasis')}</p>
          </div>
          <div>
            <h3 className="font-body text-sm font-semibold text-steel-gray">{t('materialsPartnership.traceAssays')}</h3>
            <p className="mt-3 leading-loose text-graphite">{traceAssays.join(' · ')}</p>
            <p className="mt-2 text-sm text-steel-gray">{t('materialsPartnership.assayContext')}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 bg-graphite p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl items-start gap-4">
            <FileText className="mt-1 h-6 w-6 shrink-0 text-copper-light" aria-hidden="true" />
            <div>
              <h3 className="text-2xl">{t('materialsPartnership.enquiryTitle')}</h3>
              <p className="mt-2 text-sm text-white/75">{t('materialsPartnership.enquiryText')}</p>
              <p className="mt-3 text-xs leading-relaxed text-jade-light">{t('materialsPartnership.enquirySteps')}</p>
            </div>
          </div>
          <ContactButton className="btn-primary gap-3 self-start text-left lg:max-w-xs lg:shrink-0">
            {t('materialsPartnership.contact')}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </ContactButton>
        </div>
      </div>
    </section>
  );
};

export default MaterialsPartnership;
