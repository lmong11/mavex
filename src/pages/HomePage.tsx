import { ArrowRight, ArrowUpRight, FileText, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import PolicyAnnouncement from '../components/home/PolicyAnnouncement';
import ProductCatalogue from '../components/home/ProductCatalogue';
import ContactButton from '../components/contact/ContactButton';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="editorial-page pt-20">
      <Hero />
      <ProductCatalogue />
      <section id="materials" className="partner-section anchor-section">
        <div className="site-container partnership-grid">
          <div className="partnership-intro">
            <p className="technical-label">02 / {t('redesign.navMaterials')}</p>
            <h2>{t('redesign.materialsTitle')}</h2>
            <p>{t('materialsPartnership.intro')}</p>
            <Link to="/materials-processing" className="action-text">{t('redesign.materialsLink')}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="partner-path">
            <span className="path-code">A</span><h3>{t('materialsPartnership.purchaseTitle')}</h3>
            <ul>{['catalysts', 'residues', 'scheelite', 'sodiumTungstate'].map(item => <li key={item}>{t(`materialsPartnership.items.${item}.title`)}</li>)}</ul>
            <Link to="/materials-processing#purchasing" className="action-text">{t('redesign.viewScope')}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="partner-path">
            <span className="path-code">B</span><h3>{t('materialsPartnership.processingTitle')}</h3>
            <ul>{['sodiumTungstate', 'residues'].map(item => <li key={item}>{t(`materialsPartnership.items.${item}.title`)}</li>)}</ul>
            <p className="partner-note">{t('redesign.reportFirst')}</p>
            <Link to="/materials-processing#toll-processing" className="action-text">{t('redesign.viewProcessing')}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section id="quality-control" className="site-container home-quality anchor-section">
        <div className="section-heading"><div><p className="technical-label">03 / {t('redesign.navQuality')}</p><h2>{t('redesign.qualityTitle')}</h2></div><Link to="/production-quality" className="action-text">{t('redesign.exploreQuality')}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        <div className="quality-preview-grid">
          <figure><img src="/images/laboratory/instrument-room.jpg" alt={t('laboratory.images.overview.alt')} loading="lazy" width="1456" height="1092" /><figcaption>{t('laboratory.title')} · {t('laboratory.images.overview.title')}</figcaption></figure>
          <div className="quality-preview-copy"><FlaskConical className="text-jade-dark" size={27} aria-hidden="true" /><p>{t('qualityControl.intro')}</p><ol>{['sampling', 'process', 'product', 'traceability'].map((step, index) => <li key={step}><span>0{index + 1}</span>{t(`qualityControl.steps.${step}.title`)}</li>)}</ol><Link to="/production-quality#laboratory" className="action-text">{t('laboratory.visit')}<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section id="company-profile" className="company-brief anchor-section"><div className="site-container company-brief-grid"><div><p className="technical-label">04 / MAVEX INVESTMENTS</p><h2>{t('redesign.companyTitle')}</h2></div><div><p>{t('company.intro')}</p><div className="company-locations"><span>{t('operations.commercialHeadquarters')}</span><span>{t('redesign.productionBase')}</span></div></div></div></section>
      <section id="resources" className="resources-section anchor-section"><div className="site-container section-heading"><div><p className="technical-label">05 / {t('redesign.navResources')}</p><h2>{t('redesign.resourcesTitle')}</h2></div><FileText size={26} className="text-jade-dark" aria-hidden="true" /></div><PolicyAnnouncement /></section>
      <section className="enquiry-band"><div className="site-container"><div><p className="technical-label">{t('contactDialog.label')}</p><h2>{t('redesign.contactTitle')}</h2></div><ContactButton className="action-solid">{t('navigation.contact')}<ArrowUpRight size={18} aria-hidden="true" /></ContactButton></div></section>
    </div>
  );
};
export default HomePage;
