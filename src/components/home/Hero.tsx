import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="technical-label"><span className="status-square" />{t('hero.label')}</p>
          <h1 id="hero-title">{t('redesign.heroTitle')}</h1>
          <p className="hero-intro">{t('hero.intro')}</p>
          <div className="hero-actions">
            <Link to="/#products" className="action-solid">{t('redesign.exploreProducts')}<ArrowRight size={17} aria-hidden="true" /></Link>
            <Link to="/materials-processing" className="action-text">{t('redesign.materialsLink')}<ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="hero-range" aria-label={t('redesign.navProducts')}><span>APT</span><i /><span>YTO</span><i /><span>BTO</span></div>
        </div>
        <figure className="hero-photo">
          <img src="/images/factory/production-line-wide.jpg" alt={t('operations.lineAlt')} width="1600" height="1200" />
          <figcaption><span>{t('redesign.productionBase')}</span><Link to="/production-quality">{t('redesign.navQuality')}<ArrowUpRight size={17} aria-hidden="true" /></Link></figcaption>
        </figure>
      </div>
      <div className="site-container">
        <dl className="capacity-strip">
          <div><dt>{t('company.processing')}</dt><dd>20,000 <span>{t('company.unit')}</span></dd></div>
          <div><dt>{t('company.aptCapacity')}</dt><dd>2,000 <span>{t('company.unit')}</span></dd></div>
          <div className="capacity-network"><dt>{t('footer.footprint')}</dt><dd>{t('redesign.regionalNetwork')}<span>{t('redesign.regionalRoles')}</span></dd></div>
        </dl>
      </div>
    </section>
  );
};
export default Hero;
