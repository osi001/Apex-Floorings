export type Application = {
  label: string
  body: string
  category: 'residential' | 'commercial' | 'sports' | 'industrial'
  img: string
}

export const APPLICATIONS: Application[] = [
  {
    label: 'Estates & Compounds',
    body: 'Driveways, courtyards and walkways across residential estates — durable, drainable and weather-tested for Nigerian conditions.',
    category: 'residential',
    img: '/applications/estates.png',
  },
  {
    label: 'Parking Lots',
    body: 'High-load interlocking surfaces engineered for commercial parking — modular, easy to maintain and built for daily traffic.',
    category: 'commercial',
    img: '/applications/parking-lot.png',
  },
  {
    label: 'Pool Sides',
    body: 'Slip-resistant, fast-draining tiles designed for poolside decks and water-edge environments.',
    category: 'residential',
    img: '/applications/pool-side.png',
  },
  {
    label: 'Event Floors & Showrooms',
    body: 'Quick-install modular floors for activations, launches, exhibitions and showroom builds — like our JETOUR launch installation.',
    category: 'commercial',
    img: '/applications/event-floors.jpg',
  },
]
