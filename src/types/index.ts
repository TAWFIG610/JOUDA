export type Lang = "ar" | "en";

/** A piece of text in both site languages. */
export type Localized = Record<Lang, string>;

export interface NavLink {
  name: Localized;
  href: string;
}

export type FieldId = "med" | "eng" | "it" | "bus";

export interface PartnerUniversity {
  id: string;
  nameAr: string;
  nameEn: string;
  logoUrl: string;
  type: "public" | "private";
  /** Foreign university branch campus (e.g. Monash Malaysia). */
  branch?: Localized;
  city: Localized;
  fields: FieldId[];
  /** Filled-in details appear on the card; empty ones stay hidden. */
  intakes: Localized;
  fees: Localized;
  requirements: Localized;
}

export interface Testimonial {
  id: string;
  name: Localized;
  country: Localized;
  university: string;
  program: Localized;
  quote: Localized;
  year: string;
  /** Path to a real photo, with the student's consent. Empty = initials. */
  photo: string;
}

export interface FAQItem {
  q: Localized;
  /** Paragraphs of the answer. An item with an empty answer is not shown. */
  a: Localized[];
  /** e.g. { ar: "أكتوبر 2026", en: "October 2026" }. Empty = no date shown. */
  updated: Localized;
}
