export type Category = 'residential' | 'commercial' | 'sports' | 'industrial'

export type GalleryImage = {
  src: string
  alt: string
  category: Category
}

// Replace with client-provided gallery images. Place in public/gallery/ using naming convention: <category>-<n>.jpg
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/assets/hero-1-team-portrait.jpg',      alt: 'Flooring installation, Lagos',       category: 'residential'  },
  { src: '/assets/hero-2-sports-flooring.jpg',    alt: 'Sports court installation',           category: 'sports'       },
  { src: '/assets/hero-3-warehouse-installation.jpg', alt: 'Industrial flooring installation', category: 'industrial' },
  { src: '/assets/hero-4-tile-stack-colors.jpg',  alt: 'Interlocking tile colour range',      category: 'commercial'   },
]
