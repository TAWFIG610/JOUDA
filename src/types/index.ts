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
  logoUrl?: string;
  popularFields: string[];
  type?: "حكومية" | "خاصة" | "دولية فرع";
  annualTuitionUSD?: string;
  nextAdmissionIntakes?: string[];
  scholarshipAvailable?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  university: string;
  program: string;
  quote: string;
  year: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

