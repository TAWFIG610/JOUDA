import React from 'react';
import { FOOTER_DATA, WHATSAPP_DISPLAY } from '../data/joudaData';
import { GraduationCap, MessageCircle, Video, Send, Heart, ArrowUp, Globe } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'WhatsApp': return <MessageCircle className="w-4 h-4" />;
      case 'Instagram': return <Globe className="w-4 h-4" />;
      case 'TikTok': return <Video className="w-4 h-4" />;
      case 'Telegram': return <Send className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight text-white font-arabic">
                    جَــوْدَة
                  </span>
                  <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    JOUDA
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  بوابتك للدراسة في ماليزيا
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              {FOOTER_DATA.brandDesc}
            </p>

            <div className="text-xs text-emerald-400 font-bold">
              واتساب المستشار: <span dir="ltr">{WHATSAPP_DISPLAY}</span>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              {FOOTER_DATA.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              {FOOTER_DATA.links.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="hover:text-emerald-400 transition-colors">
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">الدراسة في ماليزيا</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#universities" className="hover:text-emerald-400 transition-colors">الجامعات الشريكة</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">تخصصات الذكاء الاصطناعي</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">الأمن السيبراني والبرمجة</a></li>
              <li><a href="#journey" className="hover:text-emerald-400 transition-colors">متابعة تأشيرة EMGS</a></li>
              <li><a href="#why-malaysia" className="hover:text-emerald-400 transition-colors">دليل المعيشة والسكن</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">السياسات والشفافية</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-emerald-400 transition-colors text-start"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-emerald-400 transition-colors text-start"
                >
                  الشروط والأحكام
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-emerald-400 transition-colors text-start"
                >
                  سياسة الشفافية
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 JOUDA (جَـوْدَة) للخدمات الطلابية. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400 font-medium">
              صُنع لخدمة الطلاب الدوليين
              <Heart className="w-3.5 h-3.5 text-emerald-500 fill-current" />
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all"
              aria-label="الرجوع للأعلى"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
