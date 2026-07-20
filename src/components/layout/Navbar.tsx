import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../contact/ContactButton';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  scrolled: boolean;
}

const navigationItems = [
  { key: 'navigation.company', href: '/#company-profile' },
  { key: 'navigation.capabilities', href: '/#capabilities' },
  { key: 'navigation.operations', href: '/#operations' },
  { key: 'navigation.gallery', href: '/gallery' },
];
const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const solidNavigation = scrolled || location.pathname !== '/' || isOpen;

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        solidNavigation ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label={t('navigation.homeLabel')}>
            <img
              src="/images/mavex-logo.png"
              alt=""
              className="h-12 w-auto"
            />
            <span className="hidden sm:block text-[0.68rem] font-body font-semibold uppercase tracking-[0.2em] text-white/85">
              Investments
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label={t('navigation.primaryLabel')}>
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`navbar-link-light ${
                  (item.href === '/gallery' && location.pathname === '/gallery') ? 'text-copper-light' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSwitcher />
            <ContactButton
              className="inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-copper hover:bg-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-light"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t('navigation.contact')}
            </ContactButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white p-2"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? t('navigation.close') : t('navigation.open')}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden pb-4">
            <nav className="space-y-1 border border-white/10 bg-slate-dark/95 p-2 backdrop-blur-md" aria-label={t('navigation.mobileLabel')}>
              <LanguageSwitcher variant="mobile" />
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium text-white rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'bg-copper text-white'
                      : 'hover:bg-slate-light'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <ContactButton
                onOpen={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-white hover:bg-slate-light"
              >
                <Mail className="h-5 w-5 text-copper-light" aria-hidden="true" />
                business@mavexinvest.com
              </ContactButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
