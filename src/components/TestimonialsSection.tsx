import React from "react";
import { TESTIMONIALS } from "../data/joudaData";
import { CheckCircle, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>قصص نجاح واقعية</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ماذا يقول طلابنا عن{" "}
            <span className="text-gradient-emerald">تجربتهم مع جودة؟</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            تجارب حقيقية لطلاب بدأوا رحلتهم الأكاديمية بنجاح في الجامعات
            الماليزية.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between transition-colors duration-200"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-current"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.country} • {t.university}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>طالب مؤكد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
