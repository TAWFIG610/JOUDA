import type { Lang } from "../types";
import { saveLead } from "./leads";
import { track } from "./analytics";

export interface ContactDetails {
  name: string;
  country: string;
  phone: string;
}

export interface QuizSummary {
  level: string; // localized label
  field: string; // localized label
  raw: string; // e.g. "bachelor / it / private"
}

/** True when name, country and an international WhatsApp number are present. */
export function isValidContact({ name, country, phone }: ContactDetails) {
  const p = phone.trim();
  return Boolean(name.trim() && country.trim() && (p.startsWith("+") || p.startsWith("00")) && p.replace(/\D/g, "").length >= 8);
}

/** Saves the lead (when a lead store is configured) and records the conversion. */
export function submitConsultation(details: ContactDetails, lang: Lang, source: string, quiz?: QuizSummary) {
  saveLead({
    name: details.name.trim(),
    whatsapp: details.phone.trim(),
    email: "",
    country: details.country.trim(),
    degree: quiz?.level ?? "",
    field: quiz?.field ?? "",
    notes: "",
    pathway: quiz?.raw ?? "",
    source,
    language: lang,
  });
  track("lead_submit", { source, quiz: quiz ? "yes" : "no" });
}

/** Prefilled WhatsApp message for the optional follow-up. */
export function consultationMessage(details: ContactDetails, lang: Lang, quiz?: QuizSummary) {
  const lines = [
    lang === "ar"
      ? `مرحباً ثقة يوني، أنا ${details.name.trim()} من ${details.country.trim()}.`
      : `Hello Thiqa Uni, I'm ${details.name.trim()} from ${details.country.trim()}.`,
  ];
  if (quiz) lines.push(lang === "ar" ? `المرحلة: ${quiz.level} · المجال: ${quiz.field}` : `Level: ${quiz.level} · Field: ${quiz.field}`);
  return lines.join("\n");
}
