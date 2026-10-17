import type { FAQItem, FieldId, Localized, NavLink, PartnerUniversity, Testimonial } from "../types";

/*
 * Site content. Anything left as "" (or an empty list) is hidden on the site,
 * so only real, checked information is ever shown. Fill these in as they
 * become available: COMPANY, HERO_IMAGE, PHOTOS, COSTS, university details,
 * FAQ answers and testimonial photos.
 */

const EMPTY: Localized = { ar: "", en: "" };

export const BRAND_NAME_EN = "THIQA UNI";
export const BRAND_NAME_AR = "ثقة يوني";
/** The one tagline used across the site (matches the logo). */
export const BRAND_TAGLINE: Localized = { ar: "شريكك الأكاديمي للتعليم الدولي", en: "Your global education partner" };

export const WHATSAPP_PHONE = "60175341969";
export const WHATSAPP_DISPLAY = "+60 17-534 1969";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;
export const whatsappUrl = (text: string) => `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;

/** The single call to action used everywhere. */
export const CTA: Localized = { ar: "احجز استشارة مجانية", en: "Book a free consultation" };

/** Official company details. Each filled field appears in "Who we are" and the footer. */
export const COMPANY = {
  registeredName: EMPTY, // e.g. "Thiqa Uni Sdn. Bhd."
  ssm: "", // SSM registration number
  address: EMPTY, // office address in Kuala Lumpur
  mapUrl: "", // Google Maps link to the office
  hours: EMPTY, // e.g. { ar: "الأحد – الخميس، 9 ص – 6 م", en: "Sun–Thu, 9am–6pm" }
  email: "",
  founded: "", // e.g. "2019"
  studentsHelped: "", // e.g. "350"
  advisors: "", // e.g. "6"
  replyHours: "", // e.g. "24" — "an advisor replies within 24 working hours"
  authorisation: EMPTY, // e.g. "Authorised representative of APU and UCSI"
};

/** Team members shown in "Who we are" (real names and photos only). */
export const TEAM: { name: Localized; role: Localized; photo: string }[] = [];

/** Real photos. Empty = the layout works without them. */
export const HERO_IMAGE = ""; // e.g. "/photos/students-campus.jpg"
export const PHOTOS = {
  arrival: "", // e.g. "/photos/airport-pickup.jpg" — shown in "How we work"
};

export const NAV_LINKS: NavLink[] = [
  { name: { ar: "كيف نعمل", en: "How we work" }, href: "#how" },
  { name: { ar: "الجامعات", en: "Universities" }, href: "#universities" },
  { name: { ar: "التكاليف", en: "Costs" }, href: "#costs" },
  { name: { ar: "تجارب الطلاب", en: "Student stories" }, href: "#stories" },
  { name: { ar: "الأسئلة الشائعة", en: "FAQ" }, href: "#faq" },
];

export const FIELDS: Record<FieldId, Localized> = {
  med: { ar: "الطب والصحة", en: "Medicine & health" },
  eng: { ar: "الهندسة", en: "Engineering" },
  it: { ar: "الحاسوب وتقنية المعلومات", en: "Computing & IT" },
  bus: { ar: "إدارة الأعمال", en: "Business" },
};

const uni = (u: Omit<PartnerUniversity, "intakes" | "fees" | "requirements"> & Partial<PartnerUniversity>): PartnerUniversity => ({
  intakes: EMPTY,
  fees: EMPTY,
  requirements: EMPTY,
  ...u,
});

/**
 * Arabic names follow each university's official English name, without
 * added words. Fill intakes/fees/requirements per university when confirmed.
 */
export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  uni({ id: "um", nameAr: "جامعة مالايا", nameEn: "Universiti Malaya (UM)", logoUrl: "/universities/um.svg", type: "public", city: { ar: "كوالالمبور", en: "Kuala Lumpur" }, fields: ["med", "eng", "it"] }),
  uni({ id: "utm", nameAr: "الجامعة التكنولوجية الماليزية", nameEn: "Universiti Teknologi Malaysia (UTM)", logoUrl: "/universities/utm.svg", type: "public", city: { ar: "جوهور باهرو / كوالالمبور", en: "Johor Bahru / Kuala Lumpur" }, fields: ["eng", "it"] }),
  uni({ id: "utem", nameAr: "جامعة ملاكا التقنية الماليزية", nameEn: "Universiti Teknikal Malaysia Melaka (UTeM)", logoUrl: "/universities/utem.svg", type: "public", city: { ar: "ملاكا", en: "Melaka" }, fields: ["eng", "it"] }),
  uni({ id: "taylors", nameAr: "جامعة تايلورز", nameEn: "Taylor's University", logoUrl: "/universities/taylors.svg", type: "private", city: { ar: "سوبانغ جايا", en: "Subang Jaya" }, fields: ["bus"] }),
  uni({ id: "apu", nameAr: "جامعة آسيا والمحيط الهادئ للتكنولوجيا والابتكار", nameEn: "Asia Pacific University of Technology & Innovation (APU)", logoUrl: "/universities/apu.svg", type: "private", city: { ar: "كوالالمبور", en: "Kuala Lumpur" }, fields: ["it", "bus"] }),
  uni({ id: "sunway", nameAr: "جامعة صنواي", nameEn: "Sunway University", logoUrl: "/universities/sunway.svg", type: "private", city: { ar: "بندر صنواي", en: "Bandar Sunway" }, fields: ["bus", "it"] }),
  uni({ id: "monash", nameAr: "جامعة موناش ماليزيا", nameEn: "Monash University Malaysia", logoUrl: "/universities/monash.svg", type: "private", branch: { ar: "فرع جامعة أسترالية", en: "Australian branch campus" }, city: { ar: "بندر صنواي", en: "Bandar Sunway" }, fields: ["med", "bus"] }),
  uni({ id: "unikl", nameAr: "جامعة كوالالمبور", nameEn: "Universiti Kuala Lumpur (UniKL)", logoUrl: "/universities/unikl.svg", type: "private", city: { ar: "كوالالمبور", en: "Kuala Lumpur" }, fields: ["it", "eng"] }),
  uni({ id: "cyberjaya", nameAr: "جامعة سايبرجايا", nameEn: "University of Cyberjaya", logoUrl: "/universities/cyberjaya.svg", type: "private", city: { ar: "سايبرجايا", en: "Cyberjaya" }, fields: ["med"] }),
  uni({ id: "mahsa", nameAr: "جامعة ماهسا", nameEn: "MAHSA University", logoUrl: "/universities/mahsa.svg", type: "private", city: { ar: "سيلانجور", en: "Selangor" }, fields: ["med"] }),
  uni({ id: "city", nameAr: "جامعة سيتي ماليزيا", nameEn: "City University Malaysia", logoUrl: "/universities/city.svg", type: "private", city: { ar: "بيتالينغ جايا", en: "Petaling Jaya" }, fields: ["bus", "med"] }),
  uni({ id: "mmu", nameAr: "جامعة الوسائط المتعددة", nameEn: "Multimedia University (MMU)", logoUrl: "/universities/mmu.svg", type: "private", city: { ar: "سايبرجايا / ملاكا", en: "Cyberjaya / Melaka" }, fields: ["it", "eng"] }),
];

/** Readable logos shown in the trust section. */
export const TRUST_LOGO_IDS = ["um", "taylors", "monash", "sunway", "unikl", "mmu"];

/** "How we work": services and steps in one list. */
export const STEPS: { title: Localized; desc: Localized }[] = [
  {
    title: { ar: "نراجع خياراتك", en: "We review your options" },
    desc: {
      ar: "شهادتك ومعدلك والتخصص وميزانيتك، ثم قائمة جامعات مناسبة لك.",
      en: "Your certificate, grades, major and budget, then a short list of suitable universities.",
    },
  },
  {
    title: { ar: "نجهّز الملف ونقدّم", en: "We prepare and apply" },
    desc: {
      ar: "نراجع المستندات وترجمتها، ونقدّم الطلب ونتابعه حتى خطاب القبول.",
      en: "We check and translate documents, submit your application and follow it until the offer letter.",
    },
  },
  {
    title: { ar: "تأشيرة الطالب (EMGS)", en: "Student visa (EMGS)" },
    desc: {
      ar: "نتابع طلب التأشيرة والفحص الطبي حتى خطاب الموافقة (VAL).",
      en: "We follow the visa application and medical check until your approval letter (VAL).",
    },
  },
  {
    title: { ar: "الوصول والاستقرار", en: "Arrival and settling in" },
    desc: {
      ar: "استقبال في مطار كوالالمبور، ومساعدة في السكن والتسجيل.",
      en: "Airport pickup in Kuala Lumpur, help with housing and university registration.",
    },
  },
];

/** Sample costs. A row appears once its value is filled in. */
export const COSTS_UPDATED: Localized = EMPTY; // e.g. { ar: "أكتوبر 2026", en: "October 2026" }
export const COSTS: { label: Localized; value: Localized }[] = [
  { label: { ar: "الرسوم الدراسية — جامعة حكومية (سنوياً)", en: "Tuition, public university (per year)" }, value: EMPTY },
  { label: { ar: "الرسوم الدراسية — جامعة خاصة (سنوياً)", en: "Tuition, private university (per year)" }, value: EMPTY },
  { label: { ar: "سكن طلابي في كوالالمبور (شهرياً)", en: "Student housing in Kuala Lumpur (per month)" }, value: EMPTY },
  { label: { ar: "الطعام والمواصلات (شهرياً)", en: "Food and transport (per month)" }, value: EMPTY },
  { label: { ar: "التأشيرة والفحص الطبي (EMGS، مرة واحدة)", en: "Student visa and medical check (EMGS, one-off)" }, value: EMPTY },
  { label: { ar: "استشارتنا واختيار الجامعة", en: "Our consultation and university selection" }, value: { ar: "مجاناً", en: "Free" } },
];

/** From THIQA UNI's own fee, privacy and service terms. */
export const COMMITMENTS: { title: Localized; desc: Localized }[] = [
  {
    title: { ar: "الاستشارة الأولى مجانية", en: "Your first consultation is free" },
    desc: {
      ar: "نراجع وضعك ونقترح عليك خيارات مناسبة قبل أن تلتزم بأي شيء.",
      en: "We review your situation and suggest suitable options before you commit to anything.",
    },
  },
  {
    title: { ar: "الرسوم الدراسية تُدفع للجامعة مباشرة", en: "Tuition is paid to the university directly" },
    desc: {
      ar: "تدفع رسومك للجامعة بفاتورة رسمية باسمها، بدون عمولات مخفية.",
      en: "You pay your fees to the university against its official invoice, with no hidden commissions.",
    },
  },
  {
    title: { ar: "أي تكلفة تكون مكتوبة مسبقاً", en: "Any cost is written down first" },
    desc: {
      ar: "إن كانت هناك رسوم على خدمة إضافية، نكتبها لك بوضوح قبل أن نبدأ.",
      en: "If an extra service has a fee, we put it in writing before we start.",
    },
  },
  {
    title: { ar: "مستنداتك للتقديم فقط", en: "Your documents are used only to apply" },
    desc: {
      ar: "نستخدم وثائقك للتقديم للجامعة وطلب التأشيرة فقط، ونحفظها بسرية.",
      en: "We use your documents only for your university and visa applications, and keep them confidential.",
    },
  },
];

/** Official bodies students can use to check programs and visas themselves. */
export const OFFICIAL_CHECKS: { name: Localized; url: string; what: Localized }[] = [
  {
    name: { ar: "MQA", en: "MQA" },
    url: "https://www.mqa.gov.my/",
    what: {
      ar: "هيئة المؤهلات الماليزية: تحقق أن البرنامج الذي تقدّم عليه معتمد.",
      en: "Malaysian Qualifications Agency: check that your program is accredited.",
    },
  },
  {
    name: { ar: "EMGS", en: "EMGS" },
    url: "https://educationmalaysia.gov.my/",
    what: {
      ar: "الجهة الرسمية لتأشيرات الطلاب الدوليين: تابع حالة طلب تأشيرتك بنفسك.",
      en: "The official body for international student visas: track your visa application yourself.",
    },
  },
  {
    name: { ar: "الجامعة", en: "The university" },
    url: "",
    what: {
      ar: "مكتب القبول في الجامعة: تأكد من خطاب القبول والرسوم مباشرة من موقعها الرسمي.",
      en: "The admissions office: confirm your offer letter and fees on its official website.",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: { ar: "عبدالرحمن العتيبي", en: "Abdulrahman Al-Otaibi" },
    country: { ar: "السعودية", en: "Saudi Arabia" },
    university: "Taylor's University",
    program: { ar: "هندسة البرمجيات", en: "Software Engineering" },
    quote: {
      ar: "منصة ثقة يوني اختصرت علي كل الحيرة. استلمت قبولي الرسمي في جامعة تيلورز في وقت قياسي، وكانت متابعة التأشيرة واضحة جداً وبدون أي تعقيد.",
      en: "THIQA UNI took away all the confusion. I got my official offer from Taylor's very quickly, and the visa follow-up was clear and simple.",
    },
    year: "2024",
    photo: "",
  },
  {
    id: "2",
    name: { ar: "سارة المهدي", en: "Sara Al-Mahdi" },
    country: { ar: "مصر", en: "Egypt" },
    university: "APU",
    program: { ar: "ماجستير الأمن السيبراني", en: "MSc Cyber Security" },
    quote: {
      ar: "لم أدفع أي دولار إضافي، ووجدت موظف الاستقبال بانتظاري في المطار لمساعدتي حتى دخولي السكن.",
      en: "I didn't pay a single extra dollar, and someone was waiting for me at the airport and stayed until I moved into my housing.",
    },
    year: "2025",
    photo: "",
  },
  {
    id: "3",
    name: { ar: "محمد باجعفر", en: "Mohammed Bajaafar" },
    country: { ar: "اليمن", en: "Yemen" },
    university: "Universiti Malaya",
    program: { ar: "الهندسة الميكانيكية", en: "Mechanical Engineering" },
    quote: {
      ar: "التقديم لجامعة مالايا يحتاج دقة عالية في ترجمة وتصديق الأوراق. مع إرشاد ثقة يوني تم قبولي وحصلت على منحة تفوق جزئية.",
      en: "Applying to UM needs careful translation and attestation of documents. With THIQA UNI's guidance I was accepted and got a partial merit scholarship.",
    },
    year: "2024",
    photo: "",
  },
];

/** Link to the company's Google reviews. Empty = hidden. */
export const GOOGLE_REVIEWS_URL = "";

/**
 * FAQ with direct answers. Items whose answer is still empty are hidden,
 * so add the real answer (and the "updated" date) to publish them.
 */
export const FAQS: FAQItem[] = [
  {
    q: { ar: "هل الاستشارة واختيار الجامعة مجانية؟", en: "Is the consultation and university selection free?" },
    a: [
      {
        ar: "نعم. الاستشارة الأولى وتقييم ملفك واختيار الجامعة مجانية. والرسوم الدراسية تُدفع للجامعة مباشرة بفاتورة رسمية.",
        en: "Yes. The first consultation, the assessment of your file and choosing a university are free. Tuition is paid to the university directly against its official invoice.",
      },
    ],
    updated: EMPTY,
  },
  {
    q: { ar: "هل لديكم رسوم على خدمات أخرى؟", en: "Do you charge for any other services?" },
    a: [EMPTY], // which services are paid (visa handling, housing, airport pickup…) and how much
    updated: EMPTY,
  },
  {
    q: { ar: "متى مواعيد القبول القادمة؟", en: "When are the next intakes?" },
    a: [EMPTY], // next intake months per university, and how early to start
    updated: EMPTY,
  },
  {
    q: { ar: "هل توجد منح دراسية؟", en: "Are there scholarships?" },
    a: [EMPTY], // university, percentage, minimum grade, deadline
    updated: EMPTY,
  },
  {
    q: { ar: "ما سياسة الاسترداد؟", en: "What is your refund policy?" },
    a: [EMPTY], // refund policy for any paid service
    updated: EMPTY,
  },
  {
    q: { ar: "كم تكلفة المعيشة الشهرية في كوالالمبور؟", en: "How much does it cost to live in Kuala Lumpur?" },
    a: [EMPTY], // monthly range for housing, food and transport
    updated: EMPTY,
  },
  {
    q: { ar: "هل أحتاج IELTS أو TOEFL؟", en: "Do I need IELTS or TOEFL?" },
    a: [
      {
        ar: "ليس دائماً. كثير من البرامج تقبل إثباتاً آخر للغة، أو تتيح لك البدء بدورة لغة إنجليزية في الجامعة قبل البرنامج. نخبرك بالحد الأدنى المطلوب لكل برنامج تختاره.",
        en: "Not always. Many programs accept other proof of English, or let you start with an English course at the university before the program. We tell you the minimum required for each program you choose.",
      },
    ],
    updated: EMPTY,
  },
  {
    q: { ar: "كيف تتم تأشيرة الطالب (EMGS)؟", en: "How does the student visa (EMGS) work?" },
    a: [
      {
        ar: "بعد صدور قبولك، تقدّم الجامعة طلب التأشيرة عبر EMGS، ونجهّز معك المستندات المطلوبة. يمكنك متابعة حالة الطلب بنفسك على موقع EMGS، والقرار النهائي للجهات الرسمية.",
        en: "After your offer, the university submits the visa application through EMGS and we prepare the documents with you. You can track the application yourself on the EMGS website; the final decision rests with the authorities.",
      },
    ],
    updated: EMPTY,
  },
];

/** Major finder: suggested majors per field. */
export const MAJORS: Record<FieldId | "any", Localized[]> = {
  med: [
    { ar: "الطب البشري", en: "Medicine" },
    { ar: "طب الأسنان", en: "Dentistry" },
    { ar: "الصيدلة", en: "Pharmacy" },
  ],
  eng: [
    { ar: "الهندسة الميكانيكية", en: "Mechanical Engineering" },
    { ar: "الهندسة الكهربائية", en: "Electrical Engineering" },
    { ar: "الهندسة المدنية", en: "Civil Engineering" },
  ],
  it: [
    { ar: "علوم الحاسب", en: "Computer Science" },
    { ar: "الأمن السيبراني", en: "Cyber Security" },
    { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
  ],
  bus: [
    { ar: "إدارة الأعمال", en: "Business Administration" },
    { ar: "المحاسبة والمالية", en: "Accounting & Finance" },
    { ar: "التسويق", en: "Marketing" },
  ],
  any: [
    { ar: "علوم الحاسب", en: "Computer Science" },
    { ar: "إدارة الأعمال", en: "Business Administration" },
    { ar: "الهندسة", en: "Engineering" },
  ],
};

export const COUNTRIES: Localized[] = [
  { ar: "السعودية", en: "Saudi Arabia" },
  { ar: "مصر", en: "Egypt" },
  { ar: "اليمن", en: "Yemen" },
  { ar: "الإمارات", en: "UAE" },
  { ar: "عُمان", en: "Oman" },
  { ar: "الكويت", en: "Kuwait" },
  { ar: "قطر", en: "Qatar" },
  { ar: "الأردن", en: "Jordan" },
  { ar: "السودان", en: "Sudan" },
  { ar: "العراق", en: "Iraq" },
  { ar: "ماليزيا", en: "Malaysia" },
];

export const SOCIALS: { id: "instagram" | "facebook" | "linkedin" | "tiktok"; name: string; href: string }[] = [
  { id: "instagram", name: "Instagram", href: "https://instagram.com/thiqauni" },
  { id: "facebook", name: "Facebook", href: "https://facebook.com/thiqauni" },
  { id: "linkedin", name: "LinkedIn", href: "https://linkedin.com/company/thiqauni" },
  { id: "tiktok", name: "TikTok", href: "https://tiktok.com/@thiqauni" },
];
