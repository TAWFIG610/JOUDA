export interface NavLink {
  name: string;
  href: string;
}

export interface PartnerUniversity {
  id: string;
  nameAr: string;
  nameEn: string;
  shortName: string;
  location: string;
  ranking: string;
  badge: string;
  accent: string;
  logoBg: string;
  popularFields: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  university: string;
  program: string;
  quote: string;
  year: string;
  rating: number;
}

export interface FAQItem {
  category: string;
  q: string;
  a: string;
}
