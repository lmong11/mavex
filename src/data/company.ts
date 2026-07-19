export type GalleryCategory = 'Campus' | 'Operations' | 'Processing' | 'Infrastructure';

export interface GalleryImage {
  id: string;
  src: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  category: GalleryCategory;
  featured?: boolean;
}

const factoryImage = (fileName: string) => `/images/factory/${fileName}`;
const factoryThumbnail = (fileName: string) => `/images/factory/thumbs/${fileName}`;

export const galleryImages: GalleryImage[] = [
  {
    id: 'factory-overview',
    src: factoryImage('factory-overview.jpg'),
    thumbnailSrc: factoryThumbnail('factory-overview.jpg'),
    title: 'Production Campus Overview',
    description: 'A wide view across the production campus and its connected utility corridors in Laos.',
    category: 'Campus',
    featured: true,
  },
  {
    id: 'factory-entrance-sign',
    src: factoryImage('factory-entrance-sign.jpg'),
    thumbnailSrc: factoryThumbnail('factory-entrance-sign.jpg'),
    title: 'Zhongyu Production Base',
    description: 'The entrance signage for Zhongyu International Metal Materials Industry Co., Ltd.',
    category: 'Campus',
  },
  {
    id: 'factory-main-gate',
    src: factoryImage('factory-main-gate.jpg'),
    thumbnailSrc: factoryThumbnail('factory-main-gate.jpg'),
    title: 'Main Factory Entrance',
    description: 'The main access point connecting administration and production areas.',
    category: 'Campus',
  },
  {
    id: 'factory-reception',
    src: factoryImage('factory-reception.jpg'),
    thumbnailSrc: factoryThumbnail('factory-reception.jpg'),
    title: 'MAVEX Reception',
    description: 'The reception area at the Laos production base.',
    category: 'Campus',
  },
  {
    id: 'administration-building',
    src: factoryImage('administration-building.jpg'),
    thumbnailSrc: factoryThumbnail('administration-building.jpg'),
    title: 'Administration Building',
    description: 'Administrative facilities supporting the production campus.',
    category: 'Campus',
  },
  {
    id: 'production-line-wide',
    src: factoryImage('production-line-wide.jpg'),
    thumbnailSrc: factoryThumbnail('production-line-wide.jpg'),
    title: 'Integrated Processing Line',
    description: 'A wide view of the elevated processing line and collection system.',
    category: 'Processing',
    featured: true,
  },
  {
    id: 'reaction-vessels',
    src: factoryImage('reaction-vessels.jpg'),
    thumbnailSrc: factoryThumbnail('reaction-vessels.jpg'),
    title: 'Reaction Vessel Line',
    description: 'A sequence of industrial reaction vessels within the processing hall.',
    category: 'Processing',
  },
  {
    id: 'separation-platform',
    src: factoryImage('separation-platform.jpg'),
    thumbnailSrc: factoryThumbnail('separation-platform.jpg'),
    title: 'Separation Platform',
    description: 'Elevated equipment supporting material separation and process control.',
    category: 'Processing',
  },
  {
    id: 'reactor-line',
    src: factoryImage('reactor-line.jpg'),
    thumbnailSrc: factoryThumbnail('reactor-line.jpg'),
    title: 'Process Equipment Line',
    description: 'Process equipment arranged for controlled industrial material treatment.',
    category: 'Processing',
  },
  {
    id: 'processing-hall',
    src: factoryImage('processing-hall.jpg'),
    thumbnailSrc: factoryThumbnail('processing-hall.jpg'),
    title: 'Processing Hall',
    description: 'The main processing hall with tanks, piping, and utility systems.',
    category: 'Operations',
  },
  {
    id: 'process-tanks',
    src: factoryImage('process-tanks.jpg'),
    thumbnailSrc: factoryThumbnail('process-tanks.jpg'),
    title: 'Process Tank Area',
    description: 'Large-volume process tanks integrated with pumps and transfer lines.',
    category: 'Operations',
  },
  {
    id: 'material-handling-hall',
    src: factoryImage('material-handling-hall.jpg'),
    thumbnailSrc: factoryThumbnail('material-handling-hall.jpg'),
    title: 'Material Handling Hall',
    description: 'An indoor area supporting material staging and operational handling.',
    category: 'Operations',
  },
  {
    id: 'water-treatment',
    src: factoryImage('water-treatment.jpg'),
    thumbnailSrc: factoryThumbnail('water-treatment.jpg'),
    title: 'Water Treatment System',
    description: 'Supporting treatment infrastructure within the production facility.',
    category: 'Infrastructure',
  },
  {
    id: 'production-campus',
    src: factoryImage('production-campus.jpg'),
    thumbnailSrc: factoryThumbnail('production-campus.jpg'),
    title: 'Production Buildings',
    description: 'Purpose-built industrial buildings connected across the factory campus.',
    category: 'Infrastructure',
  },
];

export const galleryCategories: Array<'All' | GalleryCategory> = [
  'All',
  'Campus',
  'Operations',
  'Processing',
  'Infrastructure',
];
