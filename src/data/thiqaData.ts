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

/**
 * Official company details shown in "Who we are" and the footer.
 * Leave a field empty ("") to hide it; fill in real details only.
 */
export const COMPANY: {
  registration: string;
  address: Localized;
  hours: Localized;
  email: string;
} = {
  registration: "", // e.g. SSM registration number
  address: { ar: "", en: "" }, // office address in Kuala Lumpur
  hours: { ar: "", en: "" }, // e.g. "الأحد – الخميس، 9 ص – 6 م"
  email: "",
};

/** Official bodies students can use to check programs and visas themselves. */
export const OFFICIAL_CHECKS: { name: string; url: string; what: Localized }[] = [
  {
    name: "MQA",
    url: "https://www.mqa.gov.my/",
    what: {
      ar: "هيئة المؤهلات الماليزية: تحقق أن البرنامج الذي تقدّم عليه معتمد.",
      en: "Malaysian Qualifications Agency: check that your program is accredited.",
    },
  },
  {
    name: "EMGS",
    url: "https://educationmalaysia.gov.my/",
    what: {
      ar: "الجهة الرسمية لتأشيرات الطلاب الدوليين: تابع حالة طلب تأشيرتك بنفسك.",
      en: "The official body for international student visas: track your visa application yourself.",
    },
  },
  {
    name: "University",
    url: "",
    what: {
      ar: "مكتب القبول في الجامعة: تأكد من خطاب القبول والرسوم مباشرة من موقعها الرسمي.",
      en: "The university's admissions office: confirm your offer letter and fees on its official website.",
    },
  },
];

export const NAV_LINKS: NavLink[] = [
  { name: { ar: "من نحن", en: "About us" }, href: "#about" },
  { name: { ar: "خدماتنا", en: "Services" }, href: "#services" },
  { name: { ar: "خطوات التقديم", en: "How it works" }, href: "#journey" },
  { name: { ar: "الجامعات", en: "Universities" }, href: "#universities" },
  { name: { ar: "الأسئلة الشائعة", en: "FAQ" }, href: "#faq" },
];

export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  {
    id: "um",
    nameAr: "جامعة مالايا",
    nameEn: "Universiti Malaya (UM)",
    shortName: "UM",
    logoUrl: "/universities/um.svg",
  },
  {
    id: "utm",
    nameAr: "جامعة التكنولوجيا ماليزيا",
    nameEn: "Universiti Teknologi Malaysia (UTM)",
    shortName: "UTM",
    logoUrl: "/universities/utm.svg",
  },
  {
    id: "taylors",
    nameAr: "جامعة تيلورز العالمية",
    nameEn: "Taylor's University",
    shortName: "Taylor's",
    logoUrl: "/universities/taylors.svg",
  },
  {
    id: "apu",
    nameAr: "جامعة آسيا باسيفيك للتكنولوجيا",
    nameEn: "Asia Pacific University (APU)",
    shortName: "APU",
    logoUrl: "/universities/apu.svg",
  },
  {
    id: "sunway",
    nameAr: "جامعة صنواي الدولية",
    nameEn: "Sunway University",
    shortName: "Sunway",
    logoUrl: "/universities/sunway.svg",
  },
  {
    id: "monash",
    nameAr: "جامعة موناش ماليزيا (فرع أسترالي)",
    nameEn: "Monash University Malaysia",
    shortName: "Monash",
    logoUrl: "/universities/monash.svg",
  },
  {
    id: "unikl",
    nameAr: "جامعة كوالالمبور",
    nameEn: "Universiti Kuala Lumpur (UniKL)",
    shortName: "UniKL",
    logoUrl: "/universities/unikl.svg",
  },
  {
    id: "cyberjaya",
    nameAr: "جامعة سايبرجايا للعلوم الطبية",
    nameEn: "University of Cyberjaya (UOC)",
    shortName: "UOC",
    logoUrl: "/universities/cyberjaya.svg",
  },
  {
    id: "utem",
    nameAr: "جامعة ملاكا التقنية",
    nameEn: "Universiti Teknikal Malaysia Melaka (UTeM)",
    shortName: "UTeM",
    logoUrl: "/universities/utem.svg",
  },
  {
    id: "mahsa",
    nameAr: "جامعة ماهسا الطبية",
    nameEn: "MAHSA University",
    shortName: "MAHSA",
    logoUrl: "/universities/mahsa.svg",
  },
  {
    id: "city",
    nameAr: "جامعة سيتي ماليزيا",
    nameEn: "City University Malaysia",
    shortName: "City U",
    logoUrl: "/universities/city.svg",
  },
  {
    id: "mmu",
    nameAr: "جامعة الوسائط المتعددة",
    nameEn: "Multimedia University (MMU)",
    shortName: "MMU",
    logoUrl: "/universities/mmu.svg",
  },
];

export const JOURNEY_STEPS: { number: string; title: Localized; desc: Localized }[] = [
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
    { title: { ar: "من نحن", en: "About us" }, href: "#about" },
    { title: { ar: "خدماتنا", en: "Services" }, href: "#services" },
    { title: { ar: "خطوات التقديم", en: "How it works" }, href: "#journey" },
    { title: { ar: "الجامعات", en: "Universities" }, href: "#universities" },
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
