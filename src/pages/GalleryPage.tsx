import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from '../data/company';

type GalleryFilter = 'All' | GalleryCategory;

const categoryKeys: Record<GalleryFilter, string> = {
  All: 'all',
  Campus: 'campus',
  Operations: 'operations',
  Processing: 'processing',
  Infrastructure: 'infrastructure',
};

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const isModalOpen = selectedImage !== null;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const visibleImages = useMemo(
    () => activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory],
  );

  const openModal = (image: GalleryImage, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedImage(image);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    setSelectedImage((current) => {
      if (!current) return current;
      const currentIndex = visibleImages.findIndex((image) => image.id === current.id);
      const offset = direction === 'prev' ? -1 : 1;
      const newIndex = (currentIndex + offset + visibleImages.length) % visibleImages.length;
      return visibleImages[newIndex];
    });
  }, [visibleImages]);

  useEffect(() => {
    if (!isModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') navigateImage('prev');
      if (event.key === 'ArrowRight') navigateImage('next');
      if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLButtonElement>('button');
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, isModalOpen, navigateImage]);

  return (
    <div className="bg-warm-stone pb-20 pt-20">
      <section className="relative min-h-[520px] overflow-hidden bg-graphite text-white">
        <img
          src="/images/factory/factory-main-gate.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,17,24,0.96)_0%,rgba(11,17,24,0.82)_48%,rgba(11,17,24,0.25)_100%)]" aria-hidden="true" />
        <div className="industrial-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="container-custom relative flex min-h-[520px] items-end py-16 md:py-20">
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="section-label text-copper-light">{t('gallery.label')}</p>
              <h1 className="mt-5 text-6xl font-semibold uppercase leading-[0.88] md:text-8xl">{t('gallery.title')}</h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="border-l border-copper pl-5 text-lg text-white/[0.68]">
                {t('gallery.intro')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="mb-10 flex flex-col gap-6 border-b border-graphite/[0.15] pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-label text-copper-dark">{t('gallery.browse')}</p>
              <p className="mt-3 text-sm text-steel-gray">{t('gallery.photoCount', { count: visibleImages.length })}</p>
            </div>
            <div className="flex flex-wrap gap-2" aria-label={t('gallery.filterLabel')}>
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    activeCategory === category
                      ? 'border-graphite bg-graphite text-white'
                      : 'border-graphite/20 text-steel-gray hover:border-copper hover:text-copper-dark'
                  }`}
                >
                  {t(`gallery.categories.${categoryKeys[category]}`)}
                </button>
              ))}
            </div>
          </div>

          <div ref={ref} className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
            {visibleImages.map((image, index) => (
              <button
                type="button"
                key={image.id}
                className={`group relative overflow-hidden bg-graphite text-left transition-all duration-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper/45 ${
                  image.featured ? 'lg:col-span-8' : 'lg:col-span-4'
                } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${Math.min(index * 60, 360)}ms` }}
                onClick={(event) => openModal(image, event.currentTarget)}
                aria-label={t('gallery.openImage', { title: t(`gallery.images.${image.id}.title`) })}
              >
                <div className={image.featured ? 'aspect-[16/9] overflow-hidden' : 'aspect-[4/3] overflow-hidden'}>
                  <img
                    src={image.thumbnailSrc}
                    alt={t(`gallery.images.${image.id}.title`)}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/5 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-light">{t(`gallery.categories.${categoryKeys[image.category]}`)}</span>
                    <span className="font-display text-2xl text-white/50">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold uppercase">{t(`gallery.images.${image.id}.title`)}</h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-dialog-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <figure className="relative max-h-full max-w-6xl">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 border border-white/30 bg-graphite/70 p-3 text-white backdrop-blur-md transition-colors hover:bg-copper"
              aria-label={t('gallery.close')}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 border border-white/30 bg-graphite/70 p-3 text-white backdrop-blur-md transition-colors hover:bg-copper"
              aria-label={t('gallery.previous')}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 border border-white/30 bg-graphite/70 p-3 text-white backdrop-blur-md transition-colors hover:bg-copper"
              aria-label={t('gallery.next')}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <img
              src={selectedImage.src}
              alt={t(`gallery.images.${selectedImage.id}.title`)}
              className="max-h-[88vh] max-w-full object-contain"
            />

            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20 text-white md:p-8 md:pt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-light">{t(`gallery.categories.${categoryKeys[selectedImage.category]}`)} · {t('gallery.base')}</p>
              <h2 id="gallery-dialog-title" className="mt-2 text-3xl font-semibold uppercase">{t(`gallery.images.${selectedImage.id}.title`)}</h2>
              <p className="mt-2 max-w-2xl text-white/70">{t(`gallery.images.${selectedImage.id}.description`)}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
