import { ArrowUpRight, FlaskConical, Layers3, Microscope, ScanLine } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../contact/ContactButton';
import LaboratoryShowcase from './LaboratoryShowcase';

const qualitySteps = ['sampling', 'process', 'product', 'traceability'];
const testingMethods = ['spectroscopy', 'carbonSulfur', 'ions', 'physical'];
const icons = [ScanLine, Layers3, FlaskConical, Microscope];

const QualityControl = () => {
  const { t } = useTranslation();
  return (
    <div className="quality-detail">
      <section id="quality-control" className="site-container quality-workflow anchor-section" aria-labelledby="quality-workflow-title">
        <div className="section-heading"><div><p className="technical-label">01 / {t('qualityControl.label')}</p><h2 id="quality-workflow-title">{t('qualityControl.workflowTitle')}</h2></div></div>
        <ol className="workflow-grid">{qualitySteps.map((step, index) => { const Icon = icons[index]; return <li key={step}><div className="workflow-number"><span>0{index + 1}</span><Icon size={22} aria-hidden="true" /></div><h3>{t(`qualityControl.steps.${step}.title`)}</h3><p>{t(`qualityControl.steps.${step}.text`)}</p></li>; })}</ol>
      </section>
      <LaboratoryShowcase />
      <section id="testing-methods" className="testing-section anchor-section" aria-labelledby="testing-title">
        <div className="site-container testing-grid"><div><p className="technical-label">03 / {t('qualityControl.methodsTitle')}</p><h2 id="testing-title">{t('qualityControl.methodsTitle')}</h2><p className="section-description">{t('redesign.methodsIntro')}</p><ContactButton subject={t('qualityControl.label')} className="action-text">{t('qualityControl.contact')}<ArrowUpRight size={17} aria-hidden="true" /></ContactButton></div><dl className="testing-table">{testingMethods.map(method => <div key={method}><dt>{t(`qualityControl.methods.${method}.title`)}</dt><dd>{t(`qualityControl.methods.${method}.text`)}</dd></div>)}</dl></div>
      </section>
      <section className="site-container apt-process" aria-labelledby="apt-process-title"><div><p className="technical-label">APT</p><h2 id="apt-process-title">{t('qualityControl.processTitle')}</h2></div><div><p className="process-stages">{t('qualityControl.processStages')}</p><p>{t('qualityControl.processText')}</p></div></section>
    </div>
  );
};
export default QualityControl;
