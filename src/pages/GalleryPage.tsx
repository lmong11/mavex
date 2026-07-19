import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "company-image-1",
    src: "/images/Weixin Image_20250821210338_440_23.jpg",
    title: "Old Factory Operations",
    description: "Laos old factory production facility operations"
  },
  {
    id: "company-image-2",
    src: "/images/Weixin Image_20250821210340_441_23.jpg",
    title: "Production Facilities",
    description: "Laos old factory metal processing and production facilities"
  },
  {
    id: "company-image-3",
    src: "/images/Weixin Image_20250821210342_442_23.jpg",
    title: "Industrial Operations",
    description: "Laos old factory advanced metal processing and recycling operations"
  },
  {
    id: "company-image-4",
    src: "/images/Weixin Image_20250822084257_460_23.jpg",
    title: "Processing Equipment",
    description: "Laos old factory advanced processing equipment and machinery"
  },
  {
    id: "company-image-5",
    src: "/images/Weixin Image_20250822084259_461_23.jpg",
    title: "Manufacturing Process",
    description: "Laos old factory metal recycling and manufacturing processes"
  },
  {
    id: "company-storefront",
    src: "/images/mavex-storefront.jpg",
    title: "MAVEX Singapore Office",
    description: "MAVEX Singapore company office and storefront"
  }
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const isModalOpen = selectedImage !== null;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      const currentIndex = galleryImages.findIndex((image) => image.id === current.id);
      const offset = direction === 'prev' ? -1 : 1;
      const newIndex = (currentIndex + offset + galleryImages.length) % galleryImages.length;
      return galleryImages[newIndex];
    });
  }, []);

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
    <div className="pb-20 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-dark py-20 text-white md:py-28">
        <div className="absolute inset-y-0 right-0 w-1/3 border-l border-white/10 bg-copper/10" aria-hidden="true" />
        <div className="container-custom">
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-copper-light">Company gallery</p>
              <h1 className="mt-4 text-5xl leading-tight md:text-6xl">Inside our operations</h1>
            </div>
            <p className="max-w-xl text-lg text-white/70 lg:col-span-4 lg:col-start-9">
              Laos Factory - Old Production Facility (New Factory Under Construction)
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div
            ref={ref}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image.id}
                className={`group relative overflow-hidden bg-slate-dark text-left transform transition-all duration-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper/45 ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={(event) => openModal(image, event.currentTarget)}
                aria-label={`Open image: ${image.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-light">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="mt-1 text-xl font-semibold">{image.title}</h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
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
          <figure className="relative max-h-full max-w-5xl">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-full object-contain"
            />

            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/75 to-transparent p-6 pt-16 text-white">
              <h2 id="gallery-dialog-title" className="text-xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="opacity-90">{selectedImage.description}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
