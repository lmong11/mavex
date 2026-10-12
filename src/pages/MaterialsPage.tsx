import { useTranslation } from 'react-i18next';
import PageIntro from '../components/layout/PageIntro';
import MaterialsPartnership from '../components/home/MaterialsPartnership';

const MaterialsPage = () => {
  const { t } = useTranslation();
  return <div className="editorial-page pt-20"><PageIntro label={t('redesign.navMaterials')} title={t('materialsPartnership.title')} description={t('materialsPartnership.intro')} image="/images/factory/material-handling-hall.jpg" imageAlt={t('gallery.images.material-handling-hall.description')} caption={t('gallery.images.material-handling-hall.title')} /><nav className="page-sections" aria-label={t('policy.contents')}><div className="site-container"><a href="#purchasing">01 / {t('materialsPartnership.purchaseTitle')}</a><a href="#toll-processing">02 / {t('materialsPartnership.processingLabel')}</a><a href="#material-assessment">03 / {t('redesign.assessment')}</a></div></nav><MaterialsPartnership /></div>;
};
export default MaterialsPage;
