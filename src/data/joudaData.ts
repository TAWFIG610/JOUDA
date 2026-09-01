import type {
  NavLink,
  PartnerUniversity,
  Testimonial,
  FAQItem,
} from "../types";

export const WHATSAPP_PHONE = "601117633940";
export const WHATSAPP_DISPLAY = "+60 11-1763 3940";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const NAV_LINKS: NavLink[] = [
  { name: "الجامعات الشريكة", href: "#universities" },
  { name: "خدماتنا", href: "#services" },
  { name: "خطوات القبول", href: "#journey" },
  { name: "لماذا ماليزيا؟", href: "#why-malaysia" },
  { name: "الأسئلة الشائعة", href: "#faq" },
];

export const TRUST_STATS = [
  {
    value: "+30",
    label: "جامعة ماليزية معتمدة",
    desc: "شراكات وتنسيق مباشر",
    color: "emerald",
  },
  {
    value: "100%",
    label: "شفافية وتدقيق رسمي",
    desc: "بإشراف وزارة التعليم و EMGS",
    color: "blue",
  },
  {
    value: "+1,500",
    label: "طالب تم توجيههم",
    desc: "من مختلف الدول العربية",
    color: "purple",
  },
  {
    value: "0$",
    label: "رسوم الاستشارة والتقييم",
    desc: "دراسة ملفك مجانية تماماً",
    color: "amber",
  },
];

export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  {
    id: "um",
    nameAr: "جامعة مالايا",
    nameEn: "Universiti Malaya (UM)",
    shortName: "UM",
    location: "كوالالمبور",
    ranking: "QS #60 عالمياً",
    badge: "المرتبة الأولى في ماليزيا",
    accent: "#1E3A8A",
    logoBg: "#EEF2FF",
    popularFields: ["الطب والعلوم الصحية", "الهندسة", "الذكاء الاصطناعي"],
  },
  {
    id: "taylors",
    nameAr: "جامعة تيلورز",
    nameEn: "Taylor's University",
    shortName: "Taylor's",
    location: "سيلانجور",
    ranking: "QS #251 عالمياً",
    badge: "أفضل جامعة خاصة في جنوب شرق آسيا",
    accent: "#DC2626",
    logoBg: "#FEF2F2",
    popularFields: ["إدارة الأعمال", "الضيافة والسياحة", "التصميم والعمارة"],
  },
  {
    id: "apu",
    nameAr: "جامعة آسيا باسيفيك للتكنولوجيا",
    nameEn: "Asia Pacific University (APU)",
    shortName: "APU",
    location: "كوالالمبور (TPM)",
    ranking: "رائدة التكنولوجيا والذكاء الاصطناعي",
    badge: "الأولى تقنياً ورقمياً",
    accent: "#059669",
    logoBg: "#ECFDF5",
    popularFields: ["الأمن السيبراني", "هندسة البرمجيات", "الذكاء الاصطناعي"],
  },
  {
    id: "sunway",
    nameAr: "جامعة صنواي",
    nameEn: "Sunway University",
    shortName: "Sunway",
    location: "بندر صنواي",
    ranking: "QS #500 عالمياً",
    badge: "شراكات مع Lancaster البريطانية",
    accent: "#D97706",
    logoBg: "#FFFBEB",
    popularFields: ["علوم البيانات", "المحاسبة والمالية", "الفنون الرقمية"],
  },
  {
    id: "ukm",
    nameAr: "الجامعة الوطنية الماليزية",
    nameEn: "Universiti Kebangsaan Malaysia (UKM)",
    shortName: "UKM",
    location: "بانغي، سيلانجور",
    ranking: "QS #138 عالمياً",
    badge: "جامعة بحثية كبرى",
    accent: "#7C3AED",
    logoBg: "#F5F3FF",
    popularFields: [
      "العلوم التطبيقية",
      "الهندسة الكيميائية",
      "العلوم الإنسانية",
    ],
  },
  {
    id: "utm",
    nameAr: "جامعة التكنولوجيا ماليزيا",
    nameEn: "Universiti Teknologi Malaysia (UTM)",
    shortName: "UTM",
    location: "جوهور / كوالالمبور",
    ranking: "QS #181 عالمياً",
    badge: "قلعة الهندسة والتكنولوجيا",
    accent: "#991B1B",
    logoBg: "#FEF2F2",
    popularFields: ["الهندسة الميكانيكية", "هندسة البترول", "علوم الحاسب"],
  },
  {
    id: "ucsi",
    nameAr: "جامعة يو سي إس آي",
    nameEn: "UCSI University",
    shortName: "UCSI",
    location: "كوالالمبور",
    ranking: "QS #265 عالمياً",
    badge: "تميز أكاديمي وبحثي",
    accent: "#0284C7",
    logoBg: "#F0F9FF",
    popularFields: ["الموسيقى والفنون", "الصيدلة", "الهندسة الطبية"],
  },
  {
    id: "upm",
    nameAr: "جامعة بوترا ماليزيا",
    nameEn: "Universiti Putra Malaysia (UPM)",
    shortName: "UPM",
    location: "سردانج، سيلانجور",
    ranking: "QS #148 عالمياً",
    badge: "المرتبة الثانية حكومياً",
    accent: "#0D9488",
    logoBg: "#F0FDFA",
    popularFields: ["العلوم الزراعية", "التقنية الحيوية", "إدارة الأعمال"],
  },
  {
    id: "mmu",
    nameAr: "جامعة الوسائط المتعددة",
    nameEn: "Multimedia University (MMU)",
    shortName: "MMU",
    location: "سايبرجايا",
    ranking: "رائدة الاتصالات والإنترنت",
    badge: "حاضنة التكنولوجيا الماليزية",
    accent: "#4F46E5",
    logoBg: "#EEF2FF",
    popularFields: ["الوسائط الرقمية", "هندسة الاتصالات", "البرمجة"],
  },
  {
    id: "uniten",
    nameAr: "جامعة تينوجا الوطنية",
    nameEn: "Universiti Tenaga Nasional (UNITEN)",
    shortName: "UNITEN",
    location: "كوالالمبور / بوتراجايا",
    ranking: "متخصصة في الطاقة والهندسة",
    badge: "شراكات صناعية كبرى",
    accent: "#EA580C",
    logoBg: "#FFF7ED",
    popularFields: ["الهندسة الكهربائية", "الطاقة المتجددة", "علوم البيانات"],
  },
  {
    id: "monash",
    nameAr: "جامعة موناش ماليزيا",
    nameEn: "Monash University Malaysia",
    shortName: "Monash",
    location: "سيلانجور",
    ranking: "QS #42 عالمياً (فرع أسترالي)",
    badge: "شهادة أسترالية عالمية في آسيا",
    accent: "#0369A1",
    logoBg: "#F0F9FF",
    popularFields: ["الطب البشري", "الصيدلة الإكلينيكية", "إدارة الأعمال"],
  },
  {
    id: "nottingham",
    nameAr: "جامعة نوتنغهام ماليزيا",
    nameEn: "University of Nottingham Malaysia",
    shortName: "Nottingham",
    location: "سيميني، سيلانجور",
    ranking: "QS #100 عالمياً (فرع بريطاني)",
    badge: "شهادة بريطانية عريقة في ماليزيا",
    accent: "#047857",
    logoBg: "#ECFDF5",
    popularFields: ["الهندسة الكيميائية", "علم النفس", "العلاقات الدولية"],
  },
];

export const CORE_PROBLEMS = [
  {
    id: "confusion",
    q: "محتار في اختيار الجامعة والتخصص الأنسب لمعدلك وميزانيتك؟",
    solution:
      "نقدم لك دراسة ومطابقة مجانية دقيقة بناءً على ميزانيتك ومعدلك ومتطلبات سوق العمل.",
  },
  {
    id: "fees",
    q: "تخشى الرسوم الخفية والوسطاء غير الموثوقين؟",
    solution:
      "تعامل رسمي ومباشر مع الجامعات بفواتير معتمدة وبدون أي عمولات مستترة.",
  },
  {
    id: "visa",
    q: "قلق من تعقيدات تأشيرة الطالب (EMGS) والمتطلبات الورقية؟",
    solution:
      "فريقنا المختص يدقق مستنداتك ويتابع إصدار الموافقة الأمنية والتأشيرة خطوة بخطوة.",
  },
  {
    id: "arrival",
    q: "تتساءل عن ترتيبات الوصول والسكن والمعيشة في ماليزيا؟",
    solution:
      "نستقبلك بالمطار، نوفر خيارات سكن آمنة، ونرافقك لإنهاء الفحص الطبي والتسجيل الجامعي.",
  },
];

export const COMPARISON_ROWS = [
  {
    feature: "شفافية الرسوم والتكاليف",
    traditional: "رسوم خفية وعمولات غير واضحة",
    jouda: "شفافية تامة ورسوم جامعية مباشرة بدون زيادة",
  },
  {
    feature: "سرعة ودقة استخراج القبول",
    traditional: "تأخير في المتابعة وبطء التواصل",
    jouda: "متابعة يومية مباشرة مع مسؤولي القبول بالجامعات",
  },
  {
    feature: "متابعة التأشيرة (EMGS)",
    traditional: "إرشادات غير دقيقة تسبب رفض المعاملات",
    jouda: "تدقيق احترافي للأوراق يضمن سلامة الإجراءات",
  },
  {
    feature: "الدعم بعد الوصول إلى ماليزيا",
    traditional: "ينتهي التواصل بمجرد سفر الطالب",
    jouda: "استقبال ميداني، مرافقة للفحص الطبي، ومتابعة مستمرة",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "عبدالرحمن العتيبي",
    country: "السعودية 🇸🇦",
    university: "Taylor's University",
    program: "بكالوريوس هندسة برمجيات",
    quote:
      "فريق جودة اختصر علي شهوراً من الحيرة. حصلت على قبولي في تيلورز خلال 5 أيام، ومتابعة الفيزا كانت سلسة جداً.",
    year: "دفعة 2024",
    rating: 5,
  },
  {
    id: "2",
    name: "سارة المهدي",
    country: "مصر 🇪🇬",
    university: "Asia Pacific University (APU)",
    program: "ماجستير الأمن السيبراني",
    quote:
      "أكثر ما أعجبني هو الشفافية التامة. لم أدفع أي مبالغ إضافية، واستقبلوني في المطار وساعدوني في حجز سكن ممتاز.",
    year: "دفعة 2025",
    rating: 5,
  },
  {
    id: "3",
    name: "محمد باجعفر",
    country: "اليمن 🇾🇪",
    university: "Universiti Malaya (UM)",
    program: "بكالوريوس هندسة ميكانيكية",
    quote:
      "التقديم في الجامعات الحكومية يحتاج دقة عالية في الأوراق. بفضل الله ثم إرشاد جودة تم قبولي في جامعة مالايا الأولى بماليزيا.",
    year: "دفعة 2024",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "التسجيل والقبول",
    q: "كم يستغرق استخراج القبول الجامعي الرسمي؟",
    a: "في الجامعات الخاصة يستغرق إصدار القبول من 3 إلى 7 أيام عمل. أما في الجامعات الحكومية فيستغرق من 3 إلى 6 أسابيع حسب مواعيد فتح بوابات القبول.",
  },
  {
    category: "التسجيل والقبول",
    q: "هل أحتاج لاختبار IELTS أو TOEFL للتقديم؟",
    a: "يمكنك الحصول على القبول المبدئي بدون لغة، وتمنحك معظم الجامعات فرصة دراسة دورة لغة إنجليزية مكثفة بالحرم الجامعي أو تقديم اختبار IELTS لاحقاً.",
  },
  {
    category: "التأشيرة والسفر",
    q: "كم يستغرق إصدار تأشيرة الطالب (EMGS) في ماليزيا؟",
    a: "تستغرق إجراءات الموافقة الأمنية وإصدار خطاب التأشيرة (VAL) من 3 إلى 5 أسابيع، وفريق جودة يتابع معاملتك خطوة بخطوة حتى وصول نسبة الإنجاز إلى 100%.",
  },
  {
    category: "التكاليف والرسوم",
    q: "هل تقدم منصة جودة استشارات وتقييمات مجانية؟",
    a: "نعم! تقييم شهاداتك، اختيار التخصص، ومطابقة الجامعات مجاني بالكامل بدون أي التزام مالي.",
  },
  {
    category: "الحياة في ماليزيا",
    q: "كم تبلغ تكلفة المعيشة الشهرية للطالب في ماليزيا؟",
    a: "تتراوح تكلفة المعيشة شاملة السكن والطعام والمواصلات بين 350 إلى 600 دولار شهرياً، وتعتبر من أكثر الدول ملاءمة لميزانيات الطلاب.",
  },
];

export const FOOTER_DATA = {
  brandDesc:
    "جودة (JOUDA) — بوابتك الرسمية للاستشارات والخدمات الطلابية، نرافقك من أول خطوة لاختيار التخصص وتأمين القبول الجامعي والتأشيرة حتى استقرارك في ماليزيا.",
  links: [
    { title: "الرئيسية", href: "#hero" },
    { title: "الجامعات الشريكة", href: "#universities" },
    { title: "الخدمات الطلابية", href: "#services" },
    { title: "خطوات القبول", href: "#journey" },
    { title: "التخصصات المطلوبة", href: "#programs" },
    { title: "الأسئلة الشائعة", href: "#faq" },
  ],
  socials: [
    { name: "WhatsApp", href: `https://wa.me/${WHATSAPP_PHONE}` },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "TikTok", href: "https://tiktok.com" },
    { name: "Telegram", href: "https://t.me" },
  ],
};
