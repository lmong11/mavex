import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../contact/ContactButton';

const products = [
  { key: 'apt', code: 'APT', description: 'capabilities.aptDescription', category: 'capabilities.primaryProduct' },
  { key: 'yto', code: 'YTO', description: 'redesign.ytoDescription', category: 'capabilities.groups.oxides' },
  { key: 'bto', code: 'BTO', description: 'redesign.btoDescription', category: 'capabilities.groups.oxides' },
];

const ProductCatalogue = () => {
  const { t } = useTranslation();
  return (
    <section id="products" className="site-container product-section anchor-section" aria-labelledby="products-title">
      <span id="capabilities" className="anchor-section" />
      <div className="section-heading"><div><p className="technical-label">01 / {t('redesign.navProducts')}</p><h2 id="products-title">{t('redesign.productsTitle')}</h2></div><p>{t('capabilities.intro')}</p></div>
      <div className="product-catalogue">
        {products.map(({ key, code, description, category }, index) => (
          <article key={key} id={`product-${key}`} className={`product-row product-${key} anchor-section`}>
            <div className="product-code"><span className="product-index">0{index + 1}</span><strong>{code}</strong><span className="product-marker" aria-hidden="true" /></div>
            <div className="product-information"><p className="technical-label">{t(category)}</p><h3>{t(`capabilities.${key}`)}</h3><p>{t(description)}</p></div>
            <ContactButton subject={t(`capabilities.${key}`)} className="product-enquiry">{t('redesign.productEnquiry')}<ArrowUpRight size={18} aria-hidden="true" /></ContactButton>
          </article>
        ))}
      </div>
      <div className="additional-products"><div><h3>{t('capabilities.groups.byproducts')}</h3><p>{['molybdicAcid', 'cobaltResidue', 'nickelResidue'].map(key => t(`capabilities.${key}`)).join(' · ')}</p></div><div><h3>{t('capabilities.groups.development')}</h3><p>{['cobaltSulfate', 'nickelSulfate'].map(key => t(`capabilities.${key}`)).join(' · ')}</p></div></div>
    </section>
  );
};
export default ProductCatalogue;
