import type {
  NavLink,
  PartnerUniversity,
  Testimonial,
  FAQItem,
} from "../types";

export const BRAND_NAME_EN = "THIQA UNI";
export const BRAND_NAME_AR = "ثقة يوني";
export const BRAND_TAGLINE = "شريكك الأكاديمي للتعليم الدولي";
export const BRAND_MOTTO = "ثقة • تعليم • مستقبل عالمي";

export const WHATSAPP_PHONE = "60175341969";
export const WHATSAPP_DISPLAY = "+60 17-534 1969";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const NAV_LINKS: NavLink[] = [
  { name: "الجامعات", href: "#universities" },
  { name: "خطوات التقديم", href: "#journey" },
  { name: "خدماتنا", href: "#services" },
  { name: "الدراسة في ماليزيا", href: "#why-malaysia" },
  { name: "الأسئلة الشائعة", href: "#faq" },
];

export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  {
    id: "um",
    nameAr: "جامعة مالايا",
    nameEn: "Universiti Malaya (UM)",
    shortName: "UM",
    location: "كوالالمبور",
    logoUrl: "/universities/um.svg",
    popularFields: ["الطب والجراحة", "علوم الحاسب والذكاء الاصطناعي", "الهندسة المدنية"],
    type: "حكومية",
    annualTuitionUSD: "$4,200 - $8,500",
    nextAdmissionIntakes: ["أكتوبر 2026", "مارس 2027"],
    scholarshipAvailable: "منح تفوق حتى 25%",
  },
  {
    id: "utm",
    nameAr: "جامعة التكنولوجيا ماليزيا",
    nameEn: "Universiti Teknologi Malaysia (UTM)",
    shortName: "UTM",
    location: "جوهور / كوالالمبور",
    logoUrl: "/universities/utm.svg",
    popularFields: ["هندسة الميكاترونكس", "هندسة البترول", "علوم البرمجيات"],
    type: "حكومية",
    annualTuitionUSD: "$3,800 - $6,500",
    nextAdmissionIntakes: ["سبتمبر 2026", "فبراير 2027"],
    scholarshipAvailable: "تخفيضات أكاديمية للمتفوقين",
  },
  {
    id: "taylors",
    nameAr: "جامعة تيلورز العالمية",
    nameEn: "Taylor's University",
    shortName: "Taylor's",
    location: "سيلانجور (Subang Jaya)",
    logoUrl: "/universities/taylors.svg",
    popularFields: ["إدارة الأعمال الدولية", "الضيافة والسياحة", "العمارة والتصميم"],
    type: "خاصة",
    annualTuitionUSD: "$7,500 - $11,500",
    nextAdmissionIntakes: ["أبريل 2026", "أغسطس 2026", "نوفمبر 2026"],
    scholarshipAvailable: "منح استحقاق حتى 50%",
  },
  {
    id: "apu",
    nameAr: "جامعة آسيا باسيفيك للتكنولوجيا",
    nameEn: "Asia Pacific University (APU)",
    shortName: "APU",
    location: "كوالالمبور (Technology Park)",
    logoUrl: "/universities/apu.svg",
    popularFields: ["الأمن السيبراني", "الذكاء الاصطناعي", "علوم البيانات والتكنولوجيا المالية"],
    type: "خاصة",
    annualTuitionUSD: "$6,200 - $8,800",
    nextAdmissionIntakes: ["مايو 2026", "سبتمبر 2026", "نوفمبر 2026"],
    scholarshipAvailable: "منح حصرية عبر THIQA حتى 30%",
  },
  {
    id: "sunway",
    nameAr: "جامعة صنواي الدولية",
    nameEn: "Sunway University",
    shortName: "Sunway",
    location: "بندر صنواي، سيلانجور",
    logoUrl: "/universities/sunway.svg",
    popularFields: ["المحاسبة والمالية", "علوم البيانات", "الفنون السينمائية والرقمية"],
    type: "خاصة",
    annualTuitionUSD: "$7,000 - $10,500",
    nextAdmissionIntakes: ["مارس 2026", "أغسطس 2026"],
    scholarshipAvailable: "منح التميز الأكاديمي حتى 40%",
  },
  {
    id: "monash",
    nameAr: "جامعة موناش ماليزيا (فرع أسترالي)",
    nameEn: "Monash University Malaysia",
    shortName: "Monash",
    location: "بندر صنواي",
    logoUrl: "/universities/monash.svg",
    popularFields: ["الطب البشري", "الصيدلة الإكلينيكية", "إدارة الأعمال الدولية"],
    type: "دولية فرع",
    annualTuitionUSD: "$11,000 - $18,000",
    nextAdmissionIntakes: ["يوليو 2026", "أكتوبر 2026"],
    scholarshipAvailable: "منح استحقاق دولية للمعدلات العالية",
  },
  {
    id: "unikl",
    nameAr: "جامعة كوالالمبور",
    nameEn: "Universiti Kuala Lumpur (UniKL)",
    shortName: "UniKL",
    location: "كوالالمبور",
    logoUrl: "/universities/unikl.svg",
    popularFields: ["تقنية المعلومات", "هندسة الطيران", "العلوم البحرية والتصنيع"],
    type: "خاصة",
    annualTuitionUSD: "$4,500 - $7,000",
    nextAdmissionIntakes: ["يوليو 2026", "سبتمبر 2026"],
    scholarshipAvailable: "خصومات خاصة للطلبة الدوليين",
  },
  {
    id: "cyberjaya",
    nameAr: "جامعة سايبرجايا للعلوم الطبية",
    nameEn: "University of Cyberjaya (UOC)",
    shortName: "UOC",
    location: "سايبرجايا",
    logoUrl: "/universities/cyberjaya.svg",
    popularFields: ["الطب البشري (MBBS)", "الصيدلة", "العلاج الطبيعي والتغذية"],
    type: "خاصة",
    annualTuitionUSD: "$6,000 - $16,000",
    nextAdmissionIntakes: ["أكتوبر 2026", "فبراير 2027"],
    scholarshipAvailable: "مقاعد محدودة بتخفيضات خاصة",
  },
  {
    id: "utem",
    nameAr: "جامعة ملاكا التقنية",
    nameEn: "Universiti Teknikal Malaysia Melaka (UTeM)",
    shortName: "UTeM",
    location: "ملاكا",
    logoUrl: "/universities/utem.svg",
    popularFields: ["الميكاترونكس الصناعي", "الذكاء الاصطناعي", "هندسة التصنيع"],
    type: "حكومية",
    annualTuitionUSD: "$3,200 - $5,000",
    nextAdmissionIntakes: ["سبتمبر 2026", "فبراير 2027"],
    scholarshipAvailable: "رسوم دراسية حكومية ميسرة",
  },
  {
    id: "mahsa",
    nameAr: "جامعة ماهسا الطبية",
    nameEn: "MAHSA University",
    shortName: "MAHSA",
    location: "سيلانجور",
    logoUrl: "/universities/mahsa.svg",
    popularFields: ["طب وجراحة الفم والأسنان", "التمريض الدولي", "التصوير الإشعاعي"],
    type: "خاصة",
    annualTuitionUSD: "$7,000 - $17,000",
    nextAdmissionIntakes: ["أبريل 2026", "سبتمبر 2026"],
    scholarshipAvailable: "منح استحقاق لطلبة طب الأسنان",
  },
  {
    id: "city",
    nameAr: "جامعة سيتي ماليزيا",
    nameEn: "City University Malaysia",
    shortName: "City U",
    location: "بيتالينغ جايا، كوالالمبور",
    logoUrl: "/universities/city.svg",
    popularFields: ["إدارة الأعمال والتسويق", "التصميم الجرافيكي", "التمريض"],
    type: "خاصة",
    annualTuitionUSD: "$3,900 - $5,800",
    nextAdmissionIntakes: ["شهرياً للغة", "مايو وسيبتمبر للأكاديمي"],
    scholarshipAvailable: "تخفيض 20% للتسجيل المبكر",
  },
  {
    id: "mmu",
    nameAr: "جامعة الوسائط المتعددة",
    nameEn: "Multimedia University (MMU)",
    shortName: "MMU",
    location: "سايبرجايا / ملاكا",
    logoUrl: "/universities/mmu.svg",
    popularFields: ["الرسوم المتحركة والمؤثرات", "هندسة الاتصالات", "أمن المعلومات"],
    type: "خاصة",
    annualTuitionUSD: "$5,200 - $7,500",
    nextAdmissionIntakes: ["يونيو 2026", "أكتوبر 2026"],
    scholarshipAvailable: "منح MMU للطلبة الموهوبين",
  },
];

export const DISCOVER_TO_APPLY_STEPS = [
  {
    number: "1",
    titleAr: "نتعرّف على وضعك",
    desc: "نسألك عن شهادتك ومعدلك والتخصص الذي تفكر فيه وميزانيتك السنوية، ونقترح عليك جامعات تناسبها.",
  },
  {
    number: "2",
    titleAr: "تقارن وتختار",
    desc: "نرسل لك الرسوم وشروط القبول ومواعيد الدفعات لكل خيار، وتختار أنت البرنامج الأنسب.",
  },
  {
    number: "3",
    titleAr: "نقدّم طلب القبول",
    desc: "نراجع مستنداتك ونرفع الطلب للجامعة ونتابعه معك حتى يصدر خطاب القبول (Offer Letter).",
  },
  {
    number: "4",
    titleAr: "التأشيرة والوصول",
    desc: "نتابع طلب تأشيرة الطالب عبر EMGS، ونستقبلك في مطار كوالالمبور ونساعدك في السكن والتسجيل.",
  },
];

/** Majors visitors ask about most; each opens the form pre-filled. */
export const POPULAR_MAJORS = [
  "الطب البشري",
  "طب الأسنان",
  "الذكاء الاصطناعي",
  "الأمن السيبراني",
  "إدارة الأعمال",
  "الهندسة",
];

export const COMPARISON_ROWS = [
  {
    feature: "الرسوم والتكاليف",
    traditional: "هل استلمت الرسوم مكتوبة؟ وما الذي تشمله بالضبط؟",
    thiqa: "نرسل لك رسوم الجامعة الرسمية مكتوبة، ونوضح أي تكلفة إضافية قبل أن تبدأ.",
  },
  {
    feature: "مدة صدور القبول",
    traditional: "كم تستغرق هذه الجامعة عادةً؟ ومن يتابع الطلب؟",
    thiqa: "نتابع طلبك مع الجامعة ونبلغك بأي مستند ناقص أولاً بأول.",
  },
  {
    feature: "تأشيرة الطالب EMGS",
    traditional: "ما المستندات المطلوبة؟ ومن يتواصل مع EMGS؟",
    thiqa: "نجهّز معك مستندات التأشيرة ونتابع حالة الطلب حتى صدور الموافقة.",
  },
  {
    feature: "بعد الوصول إلى ماليزيا",
    traditional: "من يستقبلك؟ ومن يساعدك في السكن والتسجيل؟",
    thiqa: "نستقبلك في المطار ونساعدك في السكن والفحص الطبي والتسجيل.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "عبدالرحمن العتيبي",
    country: "المملكة العربية السعودية",
    university: "Taylor's University",
    program: "بكالوريوس هندسة البرمجيات",
    quote:
      "منصة ثقة يوني اختصرت علي كل الحيرة. استلمت قبولي الرسمي في جامعة تيلورز في وقت قياسي، وكانت متابعة التأشيرة واضحة جداً وبدون أي تعقيد.",
    year: "دفعة 2024",
  },
  {
    id: "2",
    name: "سارة المهدي",
    country: "جمهورية مصر العربية",
    university: "Asia Pacific University (APU)",
    program: "ماجستير الأمن السيبراني",
    quote:
      "الشفافية والمصداقية هي أهم ما يميز ثقة يوني. لم أدفع أي دولار إضافي، ووجد موظف الاستقبال بانتظاري في المطار لمساعدتي حتى دخولي السكن.",
    year: "دفعة 2025",
  },
  {
    id: "3",
    name: "محمد باجعفر",
    country: "اليمن",
    university: "Universiti Malaya (UM)",
    program: "بكالوريوس الهندسة الميكانيكية",
    quote:
      "التقديم للجامعات الحكومية الأولى مثل جامعة مالايا يحتاج دقة عالية في ترجمة وتصديق الأوراق. مع إرشاد ثقة يوني تم قبولي وحصلت على منحة تفوق جزئية.",
    year: "دفعة 2024",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "كم يستغرق استخراج القبول الجامعي الرسمي عبر ثقة يوني؟",
    a: "تختلف مدة مراجعة الطلب باختلاف الجامعة والبرنامج والفصل الدراسي واكتمال المستندات. تحقّق من المدة الحالية لدى الجامعة قبل ترتيب السفر.",
  },
  {
    q: "هل يمكنني التقديم وبدء الدراسة بدون شهادة IELTS أو TOEFL؟",
    a: "تختلف متطلبات اللغة وسياسة القبول المشروط من برنامج إلى آخر. راجع صفحة البرنامج واسأل الجامعة عن الخيارات المتاحة قبل التقديم.",
  },
  {
    q: "ما هي خطوات استخراج تأشيرة الطالب (EMGS) في ماليزيا؟",
    a: "تتضمن الإجراءات تقديم المستندات ومتابعة الطلب عبر القنوات المعتمدة. المدة والقرار النهائي يخضعان للجهات المختصة وقد يختلفان حسب الحالة؛ راجع أحدث الإرشادات من EMGS.",
  },
  {
    q: "هل خدمة التقييم واختيار الجامعة مجانية لدى ثقة يوني؟",
    a: "اسأل الفريق عن نطاق التقييم الأولي وما إذا كانت هناك رسوم على خدمات إضافية. اطلب توضيحاً كتابياً لأي تكلفة قبل بدء الخدمة.",
  },
  {
    q: "كم تقدر تكلفة المعيشة الشهرية للطالب الدولي في كوالالمبور؟",
    a: "تعتمد الميزانية على المدينة والسكن ونمط الحياة، وقد تتغير الأسعار بمرور الوقت. استخدم تقديراً حديثاً يناسب خياراتك وتحقق مما إذا كان يشمل السكن والمواصلات والطعام.",
  },
];

export const FOOTER_DATA = {
  brandDesc:
    "ثقة يوني تساعد الطلاب العرب على الدراسة في ماليزيا: اختيار الجامعة والتخصص، تقديم طلب القبول، متابعة تأشيرة EMGS، والاستقبال والسكن.",
  links: [
    { title: "الجامعات", href: "#universities" },
    { title: "خطوات التقديم", href: "#journey" },
    { title: "خدماتنا", href: "#services" },
    { title: "الدراسة في ماليزيا", href: "#why-malaysia" },
    { title: "ما تسأل عنه قبل التقديم", href: "#why-thiqa" },
    { title: "الأسئلة الشائعة", href: "#faq" },
  ],
  socials: [
    { name: "WhatsApp", href: `https://wa.me/${WHATSAPP_PHONE}` },
    { name: "Instagram", href: "https://instagram.com/thiqauni" },
    { name: "LinkedIn", href: "https://linkedin.com/company/thiqauni" },
    { name: "Facebook", href: "https://facebook.com/thiqauni" },
    { name: "TikTok", href: "https://tiktok.com/@thiqauni" },
  ],
};
