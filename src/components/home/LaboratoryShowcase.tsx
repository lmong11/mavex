import { useTranslation } from 'react-i18next';

const laboratoryImages = [
  { key: 'overview', file: 'instrument-room' },
  { key: 'instruments', file: 'instrument-workstation' },
  { key: 'chemistry', file: 'chemical-analysis-room' },
];

const LaboratoryShowcase = () => {
  const { t } = useTranslation();

  return (
    <section id="laboratory" className="site-container laboratory-section anchor-section" aria-labelledby="laboratory-title">
      <div className="section-heading">
        <div>
          <p className="technical-label">02 / {t('laboratory.label')}</p>
          <h2 id="laboratory-title">{t('laboratory.title')}</h2>
        </div>
        <p>{t('laboratory.intro')}</p>
      </div>
      <div className="laboratory-photo-grid">
        {laboratoryImages.map(({ key, file }) => (
          <figure key={key} className="laboratory-photo">
            <img src={`/images/laboratory/${file}.jpg`} alt={t(`laboratory.images.${key}.alt`)} loading="lazy" width="1456" height="1092" />
            <figcaption>
              <strong>{t(`laboratory.images.${key}.title`)}</strong>
              <p>{t(`laboratory.images.${key}.caption`)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default LaboratoryShowcase;
