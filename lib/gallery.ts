export type Category = 'residential' | 'commercial' | 'sports' | 'industrial'

export type GalleryImage = {
  src: string
  alt: string
  category: Category
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Real finished installs — JETOUR auto-launch event floor
  { src: '/gallery/jetour-4.jpg',   alt: 'JETOUR launch event — yellow & black checker floor with vehicle lifts',  category: 'commercial'  },
  { src: '/gallery/jetour-3.jpg',   alt: 'JETOUR auto launch installation — yellow tile event flooring',            category: 'commercial'  },
  { src: '/gallery/jetour-1.jpg',   alt: 'Apex installer cutting tiles on-site — JETOUR project',                   category: 'commercial'  },
  { src: '/gallery/jetour-2.jpg',   alt: 'Green & black checker tile wall installation',                            category: 'commercial'  },

  // Latest product range & team shots
  { src: '/gallery/product-13.jpg', alt: 'Full colour range on display — Apex Floorings',                           category: 'commercial'  },
  { src: '/gallery/product-17.jpg', alt: 'Overhead arrangement of all tile colours',                                category: 'commercial'  },
  { src: '/gallery/product-16.jpg', alt: 'Apex team member holding stack of multi-colour tiles',                    category: 'commercial'  },
  { src: '/gallery/product-19.jpg', alt: 'Multi-colour interlocking tile mat on wood flooring',                     category: 'residential' },
  { src: '/gallery/product-18.jpg', alt: 'Installer placing grey interlocking tile arrangement',                    category: 'residential' },
  { src: '/gallery/product-20.jpg', alt: 'Apex team member showcasing blue tile range',                             category: 'commercial'  },
  { src: '/gallery/product-14.jpg', alt: 'Apex team member with blue tiles in warehouse',                           category: 'industrial'  },
  { src: '/gallery/product-15.jpg', alt: 'Apex team member with stock in warehouse',                                category: 'industrial'  },

  // Earlier studio shots
  { src: '/gallery/product-1.jpg',  alt: 'Apex Floorings hard hat on colourful tile arrangement',                   category: 'commercial'  },
  { src: '/gallery/product-2.jpg',  alt: 'Full colour range — stacked tile edge view',                              category: 'commercial'  },
  { src: '/gallery/product-3.jpg',  alt: 'Installer placing fuchsia interlocking tile',                             category: 'residential' },
  { src: '/gallery/product-4.jpg',  alt: 'Apex Floorings hard hat balanced on tile stack',                          category: 'commercial'  },
  { src: '/gallery/product-5.jpg',  alt: 'Apex team member holding red Terra tile',                                 category: 'commercial'  },
  { src: '/gallery/product-6.jpg',  alt: 'Holding fan of multicolour interlocking tiles',                           category: 'commercial'  },
  { src: '/gallery/product-7.jpg',  alt: 'Ocean Blue and fuchsia tiles — close detail',                             category: 'residential' },
  { src: '/gallery/product-8.jpg',  alt: 'Apex Floorings team member on-site',                                      category: 'commercial'  },
  { src: '/gallery/product-9.jpg',  alt: 'Apex Floorings installer on project site',                                category: 'industrial'  },
  { src: '/gallery/product-10.jpg', alt: 'Apex installer carrying tiles to project site',                           category: 'industrial'  },
  { src: '/gallery/product-11.jpg', alt: 'Apex team reviewing project on laptop',                                   category: 'commercial'  },
  { src: '/gallery/product-12.jpg', alt: 'Apex team with tile samples and project plan',                            category: 'commercial'  },
]
