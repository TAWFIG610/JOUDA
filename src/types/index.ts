export type Lang = "ar" | "en";

/** A piece of text in both site languages. */
export type Localized = Record<Lang, string>;

export interface NavLink {
  name: Localized;
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
  name: Localized;
  country: Localized;
  university: string;
  program: Localized;
  quote: Localized;
  year: Localized;
}

export interface FAQItem {
  q: Localized;
  a: Localized;
}

