import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface PageIntroProps { label: string; title: string; description: string; image: string; imageAlt: string; caption: string }
const PageIntro = ({ label, title, description, image, imageAlt, caption }: PageIntroProps) => {
  const { t } = useTranslation();
  return <section className="page-intro"><div className="site-container"><Link to="/" className="breadcrumb"><ArrowLeft size={14} aria-hidden="true" />{t('policy.backHome')}</Link><div className="page-intro-grid"><div><p className="technical-label">{label}</p><h1>{title}</h1><p className="page-intro-description">{description}</p></div><figure><img src={image} alt={imageAlt} width="1600" height="1200" /><figcaption>{caption}</figcaption></figure></div></div></section>;
};
export default PageIntro;
