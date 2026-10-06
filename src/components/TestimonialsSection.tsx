import React from "react";
import { TESTIMONIALS } from "../data/thiqaData";
import { CheckCircle, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-[#F8FAFC] relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-amber-500" />
            <span>REAL STUDENT SUCCESS STORIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight">
            تجارب حقيقية لطلابنا المقبولين عبر THIQA UNI
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            قصص نجاح واقعية لطلاب انطلقوا من مختلف الدول العربية وبدأوا دراستهم في جامعاتهم المفضلة باطمئنان.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#F59E0B]/50 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
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

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
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
