import React from "react";
import { COUNTRIES } from "../data/thiqaData";
import type { ContactDetails } from "../lib/consult";
import { useLang } from "../i18n/LanguageContext";

interface ContactFieldsProps {
  idPrefix: string;
  value: ContactDetails;
  onChange: (value: ContactDetails) => void;
  error?: string;
}

const TEXT = {
  ar: { name: "الاسم الكامل", country: "دولة الإقامة", phone: "رقم واتساب مع رمز الدولة" },
  en: { name: "Full name", country: "Country you live in", phone: "WhatsApp number with country code" },
};

/** Name, country and WhatsApp number — shared by the hero form and the dialog. */
export const ContactFields: React.FC<ContactFieldsProps> = ({ idPrefix, value, onChange, error }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const set = (key: keyof ContactDetails) => (e: React.ChangeEvent<HTMLInputElement>) => onChange({ ...value, [key]: e.target.value });

  return (
    <div className="grid gap-3.5">
      <div>
        <label htmlFor={`${idPrefix}-name`} className="field-label">{text.name}</label>
        <input id={`${idPrefix}-name`} className="field-input" autoComplete="name" value={value.name} onChange={set("name")} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-country`} className="field-label">{text.country}</label>
        <input
          id={`${idPrefix}-country`}
          className="field-input"
          list={`${idPrefix}-countries`}
          autoComplete="country-name"
          value={value.country}
          onChange={set("country")}
        />
        <datalist id={`${idPrefix}-countries`}>
          {COUNTRIES.map((c) => (
            <option key={c.en} value={t(c)} />
          ))}
        </datalist>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-phone`} className="field-label">{text.phone}</label>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          inputMode="tel"
          dir="ltr"
          placeholder="+966 50 123 4567"
          className="field-input text-start"
          autoComplete="tel"
          value={value.phone}
          onChange={set("phone")}
          aria-invalid={!!error}
          aria-describedby={error ? `${idPrefix}-error` : undefined}
        />
        {error && (
          <p id={`${idPrefix}-error`} role="alert" className="mt-1.5 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
