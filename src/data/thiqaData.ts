import type { FAQItem, Localized, NavLink, PartnerUniversity, Testimonial } from "../types";

export const BRAND_NAME_EN = "THIQA UNI";
export const BRAND_NAME_AR = "ثقة يوني";
export const BRAND_TAGLINE: Localized = {
  ar: "شريكك الأكاديمي للتعليم الدولي",
  en: "Your global education partner",
};
export const BRAND_MOTTO: Localized = { ar: "ثقة • تعليم • مستقبل عالمي", en: "Trust • Education • A global future" };

export const WHATSAPP_PHONE = "60175341969";
export const WHATSAPP_DISPLAY = "+60 17-534 1969";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

/** Default opening message for WhatsApp links. */
export const WHATSAPP_GREETING: Localized = {
  ar: "مرحباً فريق ثقة يوني، أود الاستفسار عن الدراسة في ماليزيا.",
  en: "Hello THIQA UNI team, I'd like to ask about studying in Malaysia.",
};

export const whatsappUrl = (text: string) => `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS: NavLink[] = [
  { name: { ar: "الجامعات", en: "Universities" }, href: "#universities" },
  { name: { ar: "خطوات التقديم", en: "How it works" }, href: "#journey" },
  { name: { ar: "خدماتنا", en: "Services" }, href: "#services" },
  { name: { ar: "الدراسة في ماليزيا", en: "Studying in Malaysia" }, href: "#why-malaysia" },
  { name: { ar: "الأسئلة الشائعة", en: "FAQ" }, href: "#faq" },
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

export const DISCOVER_TO_APPLY_STEPS: { number: string; title: Localized; desc: Localized }[] = [
  {
    number: "1",
    title: { ar: "نتعرّف على وضعك", en: "We learn about you" },
    desc: {
      ar: "نسألك عن شهادتك ومعدلك والتخصص الذي تفكر فيه وميزانيتك السنوية، ونقترح عليك جامعات تناسبها.",
      en: "We ask about your certificate, grades, the major you have in mind and your yearly budget, then suggest universities that fit.",
    },
  },
  {
    number: "2",
    title: { ar: "تقارن وتختار", en: "You compare and choose" },
    desc: {
      ar: "نرسل لك الرسوم وشروط القبول ومواعيد الدفعات لكل خيار، وتختار أنت البرنامج الأنسب.",
      en: "We send you the fees, entry requirements and payment dates for each option, and you pick the program that suits you.",
    },
  },
  {
    number: "3",
    title: { ar: "نقدّم طلب القبول", en: "We submit your application" },
    desc: {
      ar: "نراجع مستنداتك ونرفع الطلب للجامعة ونتابعه معك حتى يصدر خطاب القبول (Offer Letter).",
      en: "We check your documents, submit the application to the university and follow it up until your offer letter is issued.",
    },
  },
  {
    number: "4",
    title: { ar: "التأشيرة والوصول", en: "Visa and arrival" },
    desc: {
      ar: "نتابع طلب تأشيرة الطالب عبر EMGS، ونستقبلك في مطار كوالالمبور ونساعدك في السكن والتسجيل.",
      en: "We follow your student visa through EMGS, meet you at Kuala Lumpur airport and help with housing and registration.",
    },
  },
];

/** Majors visitors ask about most; each opens the form pre-filled. */
export const POPULAR_MAJORS: Localized[] = [
  { ar: "الطب البشري", en: "Medicine" },
  { ar: "طب الأسنان", en: "Dentistry" },
  { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
  { ar: "الأمن السيبراني", en: "Cyber Security" },
  { ar: "إدارة الأعمال", en: "Business" },
  { ar: "الهندسة", en: "Engineering" },
];

export const COMPARISON_ROWS: { feature: Localized; traditional: Localized; thiqa: Localized }[] = [
  {
    feature: { ar: "الرسوم والتكاليف", en: "Fees and costs" },
    traditional: {
      ar: "هل استلمت الرسوم مكتوبة؟ وما الذي تشمله بالضبط؟",
      en: "Did you get the fees in writing? What exactly do they cover?",
    },
    thiqa: {
      ar: "نرسل لك رسوم الجامعة الرسمية مكتوبة، ونوضح أي تكلفة إضافية قبل أن تبدأ.",
      en: "We send you the university's official fees in writing and explain any extra cost before you start.",
    },
  },
  {
    feature: { ar: "مدة صدور القبول", en: "Time to get an offer" },
    traditional: {
      ar: "كم تستغرق هذه الجامعة عادةً؟ ومن يتابع الطلب؟",
      en: "How long does this university usually take? Who follows up?",
    },
    thiqa: {
      ar: "نتابع طلبك مع الجامعة ونبلغك بأي مستند ناقص أولاً بأول.",
      en: "We follow up with the university and tell you straight away if a document is missing.",
    },
  },
  {
    feature: { ar: "تأشيرة الطالب EMGS", en: "EMGS student visa" },
    traditional: {
      ar: "ما المستندات المطلوبة؟ ومن يتواصل مع EMGS؟",
      en: "Which documents are needed? Who deals with EMGS?",
    },
    thiqa: {
      ar: "نجهّز معك مستندات التأشيرة ونتابع حالة الطلب حتى صدور الموافقة.",
      en: "We prepare the visa documents with you and track the application until it is approved.",
    },
  },
  {
    feature: { ar: "بعد الوصول إلى ماليزيا", en: "After you arrive" },
    traditional: {
      ar: "من يستقبلك؟ ومن يساعدك في السكن والتسجيل؟",
      en: "Who meets you? Who helps with housing and registration?",
    },
    thiqa: {
      ar: "نستقبلك في المطار ونساعدك في السكن والفحص الطبي والتسجيل.",
      en: "We meet you at the airport and help with housing, the medical check and registration.",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: { ar: "عبدالرحمن العتيبي", en: "Abdulrahman Al-Otaibi" },
    country: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
    university: "Taylor's University",
    program: { ar: "بكالوريوس هندسة البرمجيات", en: "BSc Software Engineering" },
    quote: {
      ar: "منصة ثقة يوني اختصرت علي كل الحيرة. استلمت قبولي الرسمي في جامعة تيلورز في وقت قياسي، وكانت متابعة التأشيرة واضحة جداً وبدون أي تعقيد.",
      en: "THIQA UNI took away all the confusion. I got my official offer from Taylor's very quickly, and the visa follow-up was clear and simple.",
    },
    year: { ar: "دفعة 2024", en: "Class of 2024" },
  },
  {
    id: "2",
    name: { ar: "سارة المهدي", en: "Sara Al-Mahdi" },
    country: { ar: "جمهورية مصر العربية", en: "Egypt" },
    university: "Asia Pacific University (APU)",
    program: { ar: "ماجستير الأمن السيبراني", en: "MSc Cyber Security" },
    quote: {
      ar: "الشفافية والمصداقية هي أهم ما يميز ثقة يوني. لم أدفع أي دولار إضافي، ووجد موظف الاستقبال بانتظاري في المطار لمساعدتي حتى دخولي السكن.",
      en: "Honesty is what sets THIQA UNI apart. I didn't pay a single extra dollar, and someone was waiting for me at the airport and stayed until I moved into my housing.",
    },
    year: { ar: "دفعة 2025", en: "Class of 2025" },
  },
  {
    id: "3",
    name: { ar: "محمد باجعفر", en: "Mohammed Bajaafar" },
    country: { ar: "اليمن", en: "Yemen" },
    university: "Universiti Malaya (UM)",
    program: { ar: "بكالوريوس الهندسة الميكانيكية", en: "BEng Mechanical Engineering" },
    quote: {
      ar: "التقديم للجامعات الحكومية الأولى مثل جامعة مالايا يحتاج دقة عالية في ترجمة وتصديق الأوراق. مع إرشاد ثقة يوني تم قبولي وحصلت على منحة تفوق جزئية.",
      en: "Applying to a top public university like UM needs careful translation and attestation of documents. With THIQA UNI's guidance I was accepted and got a partial merit scholarship.",
    },
    year: { ar: "دفعة 2024", en: "Class of 2024" },
  },
];

export const FAQS: FAQItem[] = [
  {
    q: {
      ar: "كم يستغرق استخراج القبول الجامعي الرسمي عبر ثقة يوني؟",
      en: "How long does it take to get an official offer through THIQA UNI?",
    },
    a: {
      ar: "تختلف مدة مراجعة الطلب باختلاف الجامعة والبرنامج والفصل الدراسي واكتمال المستندات. تحقّق من المدة الحالية لدى الجامعة قبل ترتيب السفر.",
      en: "It depends on the university, the program, the intake and whether your documents are complete. Check the current processing time with the university before you book travel.",
    },
  },
  {
    q: {
      ar: "هل يمكنني التقديم وبدء الدراسة بدون شهادة IELTS أو TOEFL؟",
      en: "Can I apply and start studying without IELTS or TOEFL?",
    },
    a: {
      ar: "تختلف متطلبات اللغة وسياسة القبول المشروط من برنامج إلى آخر. راجع صفحة البرنامج واسأل الجامعة عن الخيارات المتاحة قبل التقديم.",
      en: "Language requirements and conditional offers differ from program to program. Check the program page and ask the university about your options before applying.",
    },
  },
  {
    q: {
      ar: "ما هي خطوات استخراج تأشيرة الطالب (EMGS) في ماليزيا؟",
      en: "What are the steps for a Malaysian student visa (EMGS)?",
    },
    a: {
      ar: "تتضمن الإجراءات تقديم المستندات ومتابعة الطلب عبر القنوات المعتمدة. المدة والقرار النهائي يخضعان للجهات المختصة وقد يختلفان حسب الحالة؛ راجع أحدث الإرشادات من EMGS.",
      en: "You submit your documents and the application is tracked through the official channels. Timing and the final decision rest with the authorities and vary by case; check the latest guidance from EMGS.",
    },
  },
  {
    q: {
      ar: "هل خدمة التقييم واختيار الجامعة مجانية لدى ثقة يوني؟",
      en: "Is the assessment and university selection free at THIQA UNI?",
    },
    a: {
      ar: "اسأل الفريق عن نطاق التقييم الأولي وما إذا كانت هناك رسوم على خدمات إضافية. اطلب توضيحاً كتابياً لأي تكلفة قبل بدء الخدمة.",
      en: "Ask the team what the first assessment covers and whether any extra services are charged. Ask for any cost in writing before the service starts.",
    },
  },
  {
    q: {
      ar: "كم تقدر تكلفة المعيشة الشهرية للطالب الدولي في كوالالمبور؟",
      en: "What does it cost per month to live in Kuala Lumpur as a student?",
    },
    a: {
      ar: "تعتمد الميزانية على المدينة والسكن ونمط الحياة، وقد تتغير الأسعار بمرور الوقت. استخدم تقديراً حديثاً يناسب خياراتك وتحقق مما إذا كان يشمل السكن والمواصلات والطعام.",
      en: "It depends on the city, your housing and lifestyle, and prices change over time. Use a recent estimate for your choices and check whether it includes housing, transport and food.",
    },
  },
];

export const FOOTER_DATA: {
  brandDesc: Localized;
  links: { title: Localized; href: string }[];
  socials: { name: string; href: string }[];
} = {
  brandDesc: {
    ar: "ثقة يوني تساعد الطلاب العرب على الدراسة في ماليزيا: اختيار الجامعة والتخصص، تقديم طلب القبول، متابعة تأشيرة EMGS، والاستقبال والسكن.",
    en: "THIQA UNI helps students study in Malaysia: choosing a university and major, applying for admission, following the EMGS visa, and arrival and housing.",
  },
  links: [
    { title: { ar: "الجامعات", en: "Universities" }, href: "#universities" },
    { title: { ar: "خطوات التقديم", en: "How it works" }, href: "#journey" },
    { title: { ar: "خدماتنا", en: "Services" }, href: "#services" },
    { title: { ar: "الدراسة في ماليزيا", en: "Studying in Malaysia" }, href: "#why-malaysia" },
    { title: { ar: "ما تسأل عنه قبل التقديم", en: "What to ask before applying" }, href: "#why-thiqa" },
    { title: { ar: "الأسئلة الشائعة", en: "FAQ" }, href: "#faq" },
  ],
  socials: [
    { name: "WhatsApp", href: `https://wa.me/${WHATSAPP_PHONE}` },
    { name: "Instagram", href: "https://instagram.com/thiqauni" },
    { name: "LinkedIn", href: "https://linkedin.com/company/thiqauni" },
    { name: "Facebook", href: "https://facebook.com/thiqauni" },
    { name: "TikTok", href: "https://tiktok.com/@thiqauni" },
  ],
};
