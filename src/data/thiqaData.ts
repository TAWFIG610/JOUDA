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
  { name: "الجامعات الشريكة", href: "#universities" },
  { name: "خدماتنا", href: "#services" },
  { name: "رحلة الطالب (من الاستكشاف للتقديم)", href: "#journey" },
  { name: "لماذا ثقة يوني؟", href: "#why-thiqa" },
  { name: "الأسئلة الشائعة", href: "#faq" },
];

export const TRUST_STATS = [
  {
    value: "+35",
    label: "جامعة عالمية وماليزية معتمدة",
    desc: "تمثيل رسمي وشراكات مباشرة",
    accent: "#0F254B",
  },
  {
    value: "100%",
    label: "اعتماد رسمي وشفافية كاملة",
    desc: "بإشراف وزارة التعليم العالي و EMGS",
    accent: "#F59E0B",
  },
  {
    value: "+1,500",
    label: "طالب تم توجيههم وقبولهم",
    desc: "من السعودية ومصر والخليج وشمال أفريقيا",
    accent: "#0F254B",
  },
  {
    value: "0$",
    label: "رسوم الاستشارة والتقييم الأكاديمي",
    desc: "دراسة وتدقيق مؤهلاتك مجانية تماماً",
    accent: "#D97706",
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
    worldRank: 60,
    badge: "الجامعة الأولى في ماليزيا",
    accent: "#0F254B",
    logoBg: "#FFFFFF",
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
    ranking: "QS #181 عالمياً",
    worldRank: 181,
    badge: "قلعة الهندسة والتكنولوجيا",
    accent: "#800000",
    logoBg: "#FFFFFF",
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
    ranking: "QS #251 عالمياً",
    worldRank: 251,
    badge: "أفضل جامعة خاصة في جنوب شرق آسيا",
    accent: "#DC2626",
    logoBg: "#FFFFFF",
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
    ranking: "QS 5-Stars للابتكار الرقمي والتوظيف",
    worldRank: 580,
    badge: "رائدة الذكاء الاصطناعي والأمن السيبراني",
    accent: "#0F254B",
    logoBg: "#FFFFFF",
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
    ranking: "QS #500 عالمياً • شراكة مع Lancaster UK",
    worldRank: 500,
    badge: "شهادة مزدوجة بريطانية وماليزية",
    accent: "#D97706",
    logoBg: "#FFFFFF",
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
    ranking: "QS #42 عالمياً (حرم أستراليا)",
    worldRank: 42,
    badge: "شهادة أسترالية عالمية بتكلفة مخفضة",
    accent: "#0284C7",
    logoBg: "#FFFFFF",
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
    ranking: "رائدة التعليم التقني والتطبيقي",
    badge: "جامعة تقنية كبرى ذات 12 معهداً متخصصاً",
    accent: "#0F254B",
    logoBg: "#FFFFFF",
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
    ranking: "5 نجوم في التدريس الطبي والصحي",
    badge: "مستشفى جامعي وتدريب سريري متكامل",
    accent: "#581C87",
    logoBg: "#FFFFFF",
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
    ranking: "الجامعة الرائدة في الهندسة التطبيقية",
    badge: "اعتماد ألماني للمختبرات الصناعية",
    accent: "#003366",
    logoBg: "#FFFFFF",
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
    ranking: "الرائدة في طب الأسنان والعلوم الصحية",
    badge: "أكبر مركز تدريب لطب الأسنان",
    accent: "#004A8F",
    logoBg: "#FFFFFF",
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
    ranking: "عراقة أكاديمية منذ 1984",
    badge: "موقع مركزي ورسوم اقتصادية ممتازة",
    accent: "#E11D48",
    logoBg: "#FFFFFF",
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
    ranking: "الجامعة الرقمية الأولى بماليزيا",
    badge: "حاضنة كبرى لشركات التقنية العالمية",
    accent: "#0F254B",
    logoBg: "#FFFFFF",
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
    number: "01",
    phase: "استكشف",
    titleAr: "اكتشف خياراتك الأكاديمية",
    desc: "نحلل مؤهلاتك وطموحك وميزانيتك ونرشح لك أفضل الجامعات والتخصصات المتوافقة تماماً مع أهدافك.",
    badge: "تقييم أولي للخيارات",
  },
  {
    number: "02",
    phase: "قارن",
    titleAr: "قارن بموضوعية وشفافية",
    desc: "استعرض مقارنات تفصيلية بين الجامعات الحكومية والخاصة: الترتيب العالمي، تكاليف الدراسة، ومواعيد القبول والمنح.",
    badge: "تحقق من الرسوم الرسمية",
  },
  {
    number: "03",
    phase: "اختر",
    titleAr: "اختر برنامجك واحصل على القبول",
    desc: "نجهز ونراجع ملفك الأكاديمي ونقدم مباشرة عبر نظام الجامعات الشريكة لإصدار خطاب القبول الرسمي (Offer Letter).",
    badge: "المدة حسب الجامعة والبرنامج",
  },
  {
    number: "04",
    phase: "قدّم",
    titleAr: "تأشيرة السفر والاستقبال الجامعي",
    desc: "نتولى متابعة تأشيرة الطالب مع هيئة EMGS وإدارة الهجرة، ونستقبلك في المطار ونرافقك حتى استقرارك في السكن والحرم الجامعي.",
    badge: "مرافقة ميدانية شاملة",
  },
];

export const WHY_THIQA_POINTS = [
  {
    title: "تمثيل رسمي وشراكة مباشرة",
    desc: "نوضح لك طريقة التقديم والمتطلبات المتاحة، ونساعدك على التواصل مع الجهة المناسبة بحسب البرنامج والجامعة.",
    icon: "ShieldCheck",
  },
  {
    title: "وضوح الرسوم وخطوات الدفع",
    desc: "راجع الرسوم الدراسية والتكاليف الإضافية وطريقة الدفع من المصادر الرسمية للجامعة قبل اتخاذ قرارك.",
    icon: "BadgeCheck",
  },
  {
    title: "مستشار أكاديمي شخصي مخصص",
    desc: "طوال رحلتك، يتابع معك مستشار أكاديمي خبير للإجابة على استفساراتك وتدقيق وثائقك ومساعدتك في اختيار التخصص الأنسب.",
    icon: "UserCheck",
  },
  {
    title: "إشراف متكامل على تأشيرة الطالب (EMGS)",
    desc: "نسبة نجاح عالية في استخراج الموافقة الأمنية وخطاب التأشيرة (VAL) بفضل التدقيق الدقيق المسبق لجميع الوثائق.",
    icon: "FileCheck",
  },
  {
    title: "خدمة الاستقبال والتسكين الميداني",
    desc: "فريقنا المتواجد في كوالالمبور يستقبلك عند بوابة المطار، وينقلك لسكنك الجامعي، ويرافقك أثناء الفحص الطبي والتسجيل النهائي.",
    icon: "Compass",
  },
  {
    title: "دعم مستمر طوال فترة دراستك",
    desc: "علاقتنا بالطالب لا تنتهي بوصوله؛ نحن معك دوماً لأي مساعدة أكاديمية أو إدارية تحتاجها أثناء سنوات دراستك في ماليزيا.",
    icon: "Headphones",
  },
];

export const CORE_PROBLEMS = [
  {
    id: "confusion",
    q: "محتار في اختيار الجامعة والتخصص الأنسب لمعدلك وميزانيتك؟",
    solution:
      "يقوم مستشارو ثقة يوني بإعداد دراسة ومطابقة أكاديمية شاملة مجاناً لمعدلك وطموحك الوظيفي.",
  },
  {
    id: "fees",
    q: "تخشى الرسوم الخفية والوعود غير الدقيقة من المكاتب التجارية؟",
    solution:
      "تعتمد ثقة يوني مبدأ الشفافية المؤسسية؛ تعاملاتك ورسومك تسدد مباشرة للجامعة المعتمدة وبفواتير رسمية.",
  },
  {
    id: "visa",
    q: "قلق من تعقيدات تأشيرة الطالب (EMGS) ورفض الأوراق؟",
    solution:
      "نساعدك على فهم متطلبات التأشيرة ومراجعة مستنداتك؛ قرار التأشيرة ومدتها يخضعان للجهات المختصة.",
  },
  {
    id: "arrival",
    q: "تتساءل عن ترتيبات الوصول والسكن والمعيشة في ماليزيا؟",
    solution:
      "فريقنا في كوالالمبور يستقبلك من صالة الوصول بالمطار ويوفر لك خيارات سكن آمنة ومريحة قرب حرمك الجامعي.",
  },
];

export const COMPARISON_ROWS = [
  {
    feature: "الشفافية المالية والرسوم",
    traditional: "اطلب كشفاً مكتوباً بالرسوم والخدمات المشمولة",
    thiqa: "راجع الرسوم الرسمية للجامعة وأي تكلفة إضافية قبل البدء",
  },
  {
    feature: "سرعة استخراج القبول الأكاديمي",
    traditional: "مدة المعالجة تختلف حسب الجامعة والبرنامج والفصل",
    thiqa: "نساعدك على متابعة المتطلبات والاستفسار عن حالة الطلب",
  },
  {
    feature: "متابعة تأشيرة EMGS الرسمية",
    traditional: "تحقق من المستندات والمواعيد مع الجهة المختصة",
    thiqa: "نرشدك إلى خطوات التقديم ومتابعة الطلب لدى EMGS",
  },
  {
    feature: "الاستقبال والمرافقة بعد الوصول",
    traditional: "اسأل مسبقاً عن الخدمات المتاحة بعد الوصول",
    thiqa: "استفسر عن خيارات الاستقبال والسكن وما يشمله الدعم",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "عبدالرحمن العتيبي",
    country: "المملكة العربية السعودية 🇸🇦",
    university: "Taylor's University",
    program: "بكالوريوس هندسة البرمجيات",
    quote:
      "منصة ثقة يوني اختصرت علي كل الحيرة. استلمت قبولي الرسمي في جامعة تيلورز في وقت قياسي، وكانت متابعة التأشيرة واضحة جداً وبدون أي تعقيد.",
    year: "دفعة 2024",
    rating: 5,
  },
  {
    id: "2",
    name: "سارة المهدي",
    country: "جمهورية مصر العربية 🇪🇬",
    university: "Asia Pacific University (APU)",
    program: "ماجستير الأمن السيبراني",
    quote:
      "الشفافية والمصداقية هي أهم ما يميز ثقة يوني. لم أدفع أي دولار إضافي، ووجد موظف الاستقبال بانتظاري في المطار لمساعدتي حتى دخولي السكن.",
    year: "دفعة 2025",
    rating: 5,
  },
  {
    id: "3",
    name: "محمد باجعفر",
    country: "اليمن 🇾🇪",
    university: "Universiti Malaya (UM)",
    program: "بكالوريوس الهندسة الميكانيكية",
    quote:
      "التقديم للجامعات الحكومية الأولى مثل جامعة مالايا يحتاج دقة عالية في ترجمة وتصديق الأوراق. مع إرشاد ثقة يوني تم قبولي وحصلت على منحة تفوق جزئية.",
    year: "دفعة 2024",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "التسجيل والقبول",
    q: "كم يستغرق استخراج القبول الجامعي الرسمي عبر ثقة يوني؟",
    a: "تختلف مدة مراجعة الطلب باختلاف الجامعة والبرنامج والفصل الدراسي واكتمال المستندات. تحقّق من المدة الحالية لدى الجامعة قبل ترتيب السفر.",
  },
  {
    category: "شروط اللغة",
    q: "هل يمكنني التقديم وبدء الدراسة بدون شهادة IELTS أو TOEFL؟",
    a: "تختلف متطلبات اللغة وسياسة القبول المشروط من برنامج إلى آخر. راجع صفحة البرنامج واسأل الجامعة عن الخيارات المتاحة قبل التقديم.",
  },
  {
    category: "التأشيرة والفيزا",
    q: "ما هي خطوات استخراج تأشيرة الطالب (EMGS) في ماليزيا؟",
    a: "تتضمن الإجراءات تقديم المستندات ومتابعة الطلب عبر القنوات المعتمدة. المدة والقرار النهائي يخضعان للجهات المختصة وقد يختلفان حسب الحالة؛ راجع أحدث الإرشادات من EMGS.",
  },
  {
    category: "الرسوم والخدمات",
    q: "هل خدمة التقييم واختيار الجامعة مجانية لدى ثقة يوني؟",
    a: "اسأل الفريق عن نطاق التقييم الأولي وما إذا كانت هناك رسوم على خدمات إضافية. اطلب توضيحاً كتابياً لأي تكلفة قبل بدء الخدمة.",
  },
  {
    category: "المعيشة في ماليزيا",
    q: "كم تقدر تكلفة المعيشة الشهرية للطالب الدولي في كوالالمبور؟",
    a: "تعتمد الميزانية على المدينة والسكن ونمط الحياة، وقد تتغير الأسعار بمرور الوقت. استخدم تقديراً حديثاً يناسب خياراتك وتحقق مما إذا كان يشمل السكن والمواصلات والطعام.",
  },
];

export const FOOTER_DATA = {
  brandDesc:
    "ثقة يوني (THIQA UNI) — شريكك الأكاديمي العالمي للتعليم العالي والاستشارات الطلابية المعتمدة في أفضل الجامعات الدولية والماليزية. ثقة • تعليم • مستقبل عالمي.",
  links: [
    { title: "الرئيسية", href: "#hero" },
    { title: "الجامعات المعتمدة", href: "#universities" },
    { title: "خدماتنا الطلابية", href: "#services" },
    { title: "مسار الطالب (الخطوات)", href: "#journey" },
    { title: "لماذا ثقة يوني؟", href: "#why-thiqa" },
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
