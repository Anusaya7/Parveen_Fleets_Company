import {
  COMPANY_INFO,
  FLEET_SHOWCASE,
  HERO_STATS,
  INITIAL_BLOGS,
  INITIAL_LEADS,
  SERVICES_DATA,
  TESTIMONIALS_DATA
} from '../data/mockData';

export const DEFAULT_HERO_SLIDES = [
  {
    type: 'image',
    image: '/images/fleet_luxury_suv.jpg',
    kicker: 'CXO & VIP travel',
    caption: 'Luxury SUVs for board meetings and delegations'
  },
  {
    type: 'image',
    image: '/images/hero_fleet.jpg',
    kicker: 'Enterprise grade mobility',
    caption: 'Toyota Hycross • Mercedes S-Class • Volvo Coaches'
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1920&q=80',
    kicker: 'Chauffeur-driven executive cars',
    caption: 'Mercedes, BMW and Audi protocol fleets'
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1544620341-11cb2cd57c62?auto=format&fit=crop&w=1920&q=80',
    kicker: 'Group & campus transport',
    caption: 'Luxury coaches and employee shuttle operations'
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80',
    kicker: 'PAN India coverage',
    caption: '112+ hubs with live GPS and 24×7 command support'
  }
];

export function buildDefaultContent() {
  return {
    hero: {
      title: "India's Most Trusted",
      highlight: 'Corporate Transportation Partner',
      tagline: COMPANY_INFO.tagline,
      sliderMode: 'image',
      videoUrl: '',
      videos: [],
      slides: DEFAULT_HERO_SLIDES
    },
    company: COMPANY_INFO,
    stats: HERO_STATS,
    services: SERVICES_DATA,
    fleet: FLEET_SHOWCASE,
    blogs: INITIAL_BLOGS,
    testimonials: TESTIMONIALS_DATA,
    instagramVideos: [],
    seo: {
      metaTitle: "Parveen Fleets Pvt Ltd | India's Most Trusted Corporate Transportation Partner",
      metaDesc: 'Technology-driven employee transportation, cab rentals, bus rentals, airport transfers across India.',
      keywords: 'corporate transportation, employee transport, cab rentals Pune, bus rental India, Parveen Fleets',
      canonicalUrl: 'https://www.parveenfleets.in',
      robots: 'index, follow'
    }
  };
}

export function buildSeedEnquiries() {
  return INITIAL_LEADS.map(({ id, ...lead }) => ({
    ...lead,
    source: 'seed',
    createdAt: lead.date ? new Date(lead.date) : new Date()
  }));
}
