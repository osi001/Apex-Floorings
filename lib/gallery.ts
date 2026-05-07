export type Category = 'residential' | 'commercial' | 'sports' | 'industrial'

export type GalleryImage = {
  src: string
  alt: string
  category: Category
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/gallery/product-1.jpg',  alt: 'Apex Floorings hard hat on colourful tile arrangement',     category: 'commercial'  },
  { src: '/gallery/product-2.jpg',  alt: 'Full colour range — stacked tile edge view',                category: 'commercial'  },
  { src: '/gallery/product-3.jpg',  alt: 'Installer placing fuchsia interlocking tile',               category: 'residential' },
  { src: '/gallery/product-4.jpg',  alt: 'Apex Floorings hard hat balanced on tile stack',            category: 'commercial'  },
  { src: '/gallery/product-5.jpg',  alt: 'Apex team member holding red Terra tile',                   category: 'commercial'  },
  { src: '/gallery/product-6.jpg',  alt: 'Holding fan of multicolour interlocking tiles',             category: 'commercial'  },
  { src: '/gallery/product-7.jpg',  alt: 'Ocean Blue and fuchsia tiles — close detail',               category: 'residential' },
  { src: '/gallery/product-8.jpg',  alt: 'Apex Floorings team member on-site',                        category: 'commercial'  },
  { src: '/gallery/product-9.jpg',  alt: 'Apex Floorings installer on project site',                  category: 'industrial'  },
  { src: '/gallery/product-10.jpg', alt: 'Apex installer carrying tiles to project site',             category: 'industrial'  },
  { src: '/gallery/product-11.jpg', alt: 'Apex team reviewing project on laptop',                     category: 'commercial'  },
  { src: '/gallery/product-12.jpg', alt: 'Apex team with tile samples and project plan',              category: 'commercial'  },
  { src: '/gallery/product-13.jpg', alt: 'Full colour range on display — Apex Floorings',             category: 'commercial'  },
]
