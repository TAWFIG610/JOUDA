import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from "../data/thiqaData";
import { MessageCircle } from "lucide-react";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود البدء في التقديم للدراسة في ماليزيا.")}`;

  return (
    <section className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl bg-brand-800 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-bold leading-snug sm:text-3xl">جاهز تبدأ؟ تواصل معنا الآن.</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100 sm:text-lg">
              أخبرنا بشهادتك والتخصص الذي تفكر فيه، ويرد عليك مستشار من فريقنا. الاستشارة الأولى مجانية.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onOpenLeadModal("final_cta_primary")}
              className="btn btn-primary min-h-14 px-8 focus-visible:ring-offset-brand-800"
            >
              اطلب استشارة مجانية
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn min-h-14 border border-white/30 px-6 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-brand-800"
            >
              <MessageCircle className="h-5 w-5" />
              <span dir="ltr" className="font-latin">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
