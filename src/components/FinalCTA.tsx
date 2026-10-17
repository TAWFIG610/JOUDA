import React from "react";
import { COMPANY, CTA } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";

interface FinalCTAProps {
  onOpenConsult: (source: string) => void;
}

const TEXT = {
  ar: {
    title: "جاهز تبدأ؟",
    body: (h: string) =>
      `أخبرنا بشهادتك والتخصص الذي تفكر فيه${h ? `، ويرد عليك مستشار خلال ${h} ساعات عمل` : "، ويرد عليك مستشار من فريقنا"}.`,
  },
  en: {
    title: "Ready to start?",
    body: (h: string) =>
      `Tell us your certificate and the major you have in mind${h ? `. An advisor replies within ${h} working hours` : ", and one of our advisors will reply"}.`,
  },
};

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsult }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section className="section" aria-labelledby="final-title">
      <div className="page-container">
        <div className="panel-dark grid items-center gap-5 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <h2 id="final-title" className="text-xl md:text-2xl">
              {text.title}
            </h2>
            <p className="mt-2 text-on-navy">{text.body(COMPANY.replyHours)}</p>
          </div>
          <button type="button" onClick={() => onOpenConsult("final_cta")} className="btn btn-primary">
            {t(CTA)}
          </button>
        </div>
      </div>
    </section>
  );
};
