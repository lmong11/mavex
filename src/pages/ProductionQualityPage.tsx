import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageIntro from '../components/layout/PageIntro';
import QualityControl from '../components/home/QualityControl';

const ProductionQualityPage = () => {
  const { t } = useTranslation();
  return <div className="editorial-page pt-20"><PageIntro label={t('redesign.navQuality')} title={t('redesign.productionTitle')} description={t('qualityControl.intro')} image="/images/factory/factory-overview.jpg" imageAlt={t('gallery.images.factory-overview.description')} caption={t('redesign.productionBase')} /><nav className="page-sections" aria-label={t('policy.contents')}><div className="site-container"><a href="#quality-control">01 / {t('qualityControl.workflowTitle')}</a><a href="#testing-methods">02 / {t('qualityControl.methodsTitle')}</a><a href="#production-campus">03 / {t('redesign.productionBase')}</a></div></nav><QualityControl /><section id="production-campus" className="site-container production-campus anchor-section"><div className="section-heading"><div><p className="technical-label">{t('operations.label')}</p><h2>{t('redesign.productionBase')}</h2></div><p>{t('operations.intro')}</p></div><div className="campus-images">{['production-line-wide', 'water-treatment'].map(image => <figure key={image}><img src={`/images/factory/${image}.jpg`} alt={t(`gallery.images.${image}.description`)} loading="lazy" width="1600" height="1200" /><figcaption><strong>{t(`gallery.images.${image}.title`)}</strong><p>{t(`gallery.images.${image}.description`)}</p></figcaption></figure>)}</div><Link to="/gallery" className="action-text">{t('operations.openGallery')}<ArrowUpRight size={17} aria-hidden="true" /></Link></section></div>;
};
export default ProductionQualityPage;
