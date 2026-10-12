import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="materials-detail">
      <div className="site-container materials-scope">
        <section id="purchasing" className="anchor-section" aria-labelledby="purchase-title">
          <p className="technical-label">01 / {t('materialsPartnership.purchaseTitle')}</p>
          <h2 id="purchase-title">{t('materialsPartnership.purchaseTitle')}</h2>
          <p className="section-description">{t('redesign.purchasingIntro')}</p>
          <ol className="purchase-list">{purchaseMaterials.map((material, index) => <li key={material}><span className="list-number">0{index + 1}</span><div><h3>{t(`materialsPartnership.items.${material}.title`)}</h3><p>{t(`materialsPartnership.items.${material}.text`)}</p></div></li>)}</ol>
        </section>
        <aside id="toll-processing" className="toll-panel anchor-section" aria-labelledby="toll-title">
          <p className="technical-label">02 / {t('materialsPartnership.processingLabel')}</p>
          <h2 id="toll-title">{t('materialsPartnership.processingTitle')}</h2>
          <ul>{processingMaterials.map(material => <li key={material}><ArrowRight size={18} aria-hidden="true" />{t(`materialsPartnership.items.${material}.title`)}</li>)}</ul>
          <div className="material-forms"><h3>{t('materialsPartnership.formsTitle')}</h3><div>{materialForms.map(form => <span key={form}>{t(`materialsPartnership.forms.${form}`)}</span>)}</div></div>
          <Link to="/production-quality#testing-methods" className="action-text">{t('materialsPartnership.qualityLink')}<ArrowUpRight size={17} aria-hidden="true" /></Link>
        </aside>
      </div>
      <section id="material-assessment" className="assessment-section anchor-section" aria-labelledby="assessment-title">
        <div className="site-container assessment-grid"><div><p className="technical-label">03 / {t('redesign.assessment')}</p><h2 id="assessment-title">{t('materialsPartnership.enquiryTitle')}</h2><p className="section-description">{t('materialsPartnership.enquiryText')}</p></div><div className="assay-table"><div><h3>{t('materialsPartnership.mainAssays')}</h3><p className="principal-assays">{principalAssays.map(assay => <span key={assay}>{assay}</span>)}</p><p>{t('materialsPartnership.assayBasis')}</p></div><div><h3>{t('materialsPartnership.traceAssays')}</h3><p className="trace-assays">{traceAssays.join(' · ')}</p><p>{t('materialsPartnership.assayContext')}</p></div></div></div>
      </section>
      <section className="site-container enquiry-process" aria-labelledby="enquiry-process-title">
        <h2 id="enquiry-process-title" className="sr-only">{t('redesign.assessment')}</h2>
        <ol>{['flowReport', 'flowReview', 'flowQuote'].map((step, index) => <li key={step}><span>0{index + 1}</span><h3>{t(`redesign.${step}`)}</h3>{index < 2 && <ArrowRight size={21} aria-hidden="true" />}</li>)}</ol>
        <div className="enquiry-instruction"><FileText size={24} aria-hidden="true" /><p>{t('redesign.enquiryHelp')}</p><ContactButton subject={t('materialsPartnership.label')} className="action-solid">{t('materialsPartnership.contact')}<ArrowUpRight size={17} aria-hidden="true" /></ContactButton></div>
      </section>
    </div>
  );
};
export default MaterialsPartnership;
