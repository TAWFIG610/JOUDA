import React from "react";
import { TESTIMONIALS } from "../data/thiqaData";
import { CheckCircle, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-10 sm:py-20 lg:py-24 bg-[#F8FAFC] relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-amber-500" />
            <span>قصص نجاح طلابنا الحقيقية</span>
          </div>

          <h2 className="section-title">
            تجارب حقيقية لطلابنا المقبولين عبر ثقة يوني
          </h2>

          <p className="section-description">
            قصص نجاح واقعية لطلاب انطلقوا من مختلف الدول العربية وبدأوا دراستهم في جامعاتهم المفضلة باطمئنان.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="content-card flex flex-col justify-between space-y-4 p-6"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-slate-700">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">{t.name}</h4>
                  <p className="text-xs text-[#64748B] font-medium">
                    {t.country} • {t.university}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#0F254B] font-bold bg-[#0F254B]/5 px-2.5 py-1 rounded-md border border-[#0F254B]/10">
                  <CheckCircle className="w-3 h-3 text-[#D97706]" />
                  <span>طالب معتمد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
