import React, { useState } from 'react';
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Company Gallery</h1>
            <div className="w-20 h-1 bg-copper mx-auto mb-6"></div>
            <p className="text-xl opacity-90">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-700 ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
