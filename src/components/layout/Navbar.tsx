import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../contact/ContactButton';
import LanguageSwitcher from './LanguageSwitcher';

const items = [
  { key: 'redesign.navProducts', href: '/#products' },
  { key: 'redesign.navMaterials', href: '/materials-processing' },
  { key: 'redesign.navQuality', href: '/production-quality' },
  { key: 'navigation.company', href: '/#company-profile' },
  { key: 'redesign.navResources', href: '/#resources' },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setIsOpen(false); }, [location.key]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  const isActive = (href: string) => href.includes('#') ? `${location.pathname}${location.hash}` === href : location.pathname === href;
  return (
    <header className="site-header">
      <div className="site-container header-row">
        <Link to="/" className="site-brand" aria-label={t('navigation.homeLabel')}><img src="/images/mavex-logo.png" alt="" width="52" height="52" /><span>INVESTMENTS</span></Link>
        <nav className="desktop-navigation" aria-label={t('navigation.primaryLabel')}>
          {items.map(item => <Link key={item.key} to={item.href} aria-current={isActive(item.href) ? 'location' : undefined}>{t(item.key)}</Link>)}
        </nav>
        <div className="header-tools">
          <LanguageSwitcher />
          <ContactButton className="header-contact">{t('navigation.contact')}<ArrowUpRight size={15} aria-hidden="true" /></ContactButton>
          <button type="button" className="mobile-toggle" onClick={() => setIsOpen(open => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={t(isOpen ? 'navigation.close' : 'navigation.open')}>{isOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>
      {isOpen && <nav id="mobile-navigation" className="mobile-navigation site-container" aria-label={t('navigation.mobileLabel')}>{items.map(item => <Link key={item.key} to={item.href} onClick={() => setIsOpen(false)} aria-current={isActive(item.href) ? 'location' : undefined}>{t(item.key)}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}</nav>}
    </header>
  );
};
export default Navbar;
