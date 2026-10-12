import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const openGraphLocales: Record<string, string> = {
  en: 'en_SG',
  'zh-CN': 'zh_CN',
  ja: 'ja_JP',
  ko: 'ko_KR',
  th: 'th_TH',
  vi: 'vi_VN',
};

const Layout: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname, hash, key: navigationKey } = useLocation();

  useEffect(() => {
    // Preserve bookmarks from the former long homepage after splitting the routes.
    const legacyRoutes: Record<string, string> = {
      '#operations': '/production-quality#production-campus',
      '#value-chain': '/production-quality#quality-control',
    };
    if (pathname === '/' && legacyRoutes[hash]) {
      navigate(legacyRoutes[hash], { replace: true });
      return;
    }
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname, navigationKey, navigate]);

  useEffect(() => {
    const isPolicy = pathname === '/policies/supply-chain';
    const routeCopy: Record<string, { title: string; description: string }> = {
      '/materials-processing': { title: 'redesign.navMaterials', description: 'materialsPartnership.intro' },
      '/production-quality': { title: 'redesign.navQuality', description: 'qualityControl.intro' },
      '/gallery': { title: 'navigation.gallery', description: 'gallery.intro' },
    };
    const pageCopy = routeCopy[pathname];
    const title = isPolicy ? `${t('policy.title')} | MAVEX INVESTMENTS` : pageCopy ? `${t(pageCopy.title)} | MAVEX INVESTMENTS` : t('meta.title');
    const description = isPolicy ? t('policy.summary') : pageCopy ? t(pageCopy.description) : t('meta.description');
    const pageUrl = `https://mavexinvest.com${pathname === '/' ? '/' : pathname}`;
    document.title = title;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', pageUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', pageUrl);
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute('content', openGraphLocales[i18n.resolvedLanguage ?? 'en'] ?? 'en_SG');
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [i18n.resolvedLanguage, pathname, t]);

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">{t('accessibility.skip')}</a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
