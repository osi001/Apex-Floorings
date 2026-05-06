export type Category = 'residential' | 'commercial' | 'sports' | 'industrial'

export type GalleryImage = {
  src: string
  alt: string
  category: Category
}

// Populate with client-provided images.
// File naming convention: /gallery/<category>-<n>.jpg
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/gallery/residential-1.jpg', alt: 'Residential flooring installation', category: 'residential' },
  { src: '/gallery/commercial-1.jpg',  alt: 'Commercial space flooring',          category: 'commercial'  },
  { src: '/gallery/sports-1.jpg',      alt: 'Sports court installation',           category: 'sports'      },
  { src: '/gallery/industrial-1.jpg',  alt: 'Industrial flooring project',         category: 'industrial'  },
]
