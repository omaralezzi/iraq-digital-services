import type { Locale } from "./siteSettings";

type Copy = Record<Locale, string>;

export type Service = {
  slug: string;
  icon: string;
  title: Copy;
  short: Copy;
  problem: Copy;
  solution: Copy;
  benefit: Copy;
  examples: Copy;
  features: Copy;
};

export const services: Service[] = [
  {
    slug: "websites",
    icon: "⌘",
    title: { ar: "المواقع والمنصات", en: "Websites & platforms" },
    short: { ar: "مواقع تعريفية ومتاجر وتجارب رقمية سريعة وواضحة.", en: "Fast, clear company sites, stores and digital experiences." },
    problem: { ar: "نشاطك يعتمد على الرسائل المتفرقة ولا توجد وجهة موثوقة تشرح خدمتك.", en: "Your business relies on scattered messages without a trusted digital home." },
    solution: { ar: "موقع مخصص يشرح العرض، يجمع الطلبات ويعمل بسلاسة على الهاتف.", en: "A tailored site that explains your offer, collects enquiries and works beautifully on mobile." },
    benefit: { ar: "صورة أوضح، وصول دائم، وطلبات منظمة بدل المحادثات الضائعة.", en: "A stronger presence, 24/7 reach and organised enquiries." },
    examples: { ar: "موقع شركة مقاولات، عيادة، مكتب هندسي، متجر أو مركز تدريب.", en: "A contractor, clinic, engineering office, shop or training centre." },
    features: { ar: "لغتان، نماذج، صفحات خدمات، خرائط، SEO، إدارة محتوى وربط أدوات خارجية.", en: "Bilingual content, forms, service pages, maps, SEO, CMS and integrations." },
  },
  {
    slug: "web-apps",
    icon: "◫",
    title: { ar: "تطبيقات الويب والهاتف", en: "Web & mobile apps" },
    short: { ar: "تجارب تفاعلية تحول فكرة العمل إلى أداة قابلة للاستخدام.", en: "Interactive products that turn an idea into a useful tool." },
    problem: { ar: "العمل يحتاج أكثر من صفحات ثابتة أو يعتمد على جداول وأدوات غير مترابطة.", en: "The work needs more than static pages or relies on disconnected tools." },
    solution: { ar: "تطبيق ويب، ومعه تطبيق هاتف عند الاتفاق، مبني حول رحلة المستخدم الفعلية.", en: "A web app—and a mobile app when agreed—built around the real user journey." },
    benefit: { ar: "خدمة أسرع، وتجربة أبسط، وبنية تقنية يمكن توسيعها مع نمو المشروع.", en: "Faster service, a simpler experience and room to scale." },
    examples: { ar: "بوابة عملاء، سوق متخصص، منصة تدريب أو أداة خدمة ذاتية.", en: "Client portals, specialist marketplaces, learning platforms or self-service tools." },
    features: { ar: "حسابات، صلاحيات، إشعارات، بحث، دفع عند الاتفاق، تقارير وواجهات API.", en: "Accounts, permissions, notifications, search, optional payments, reports and APIs." },
  },
  {
    slug: "commerce",
    icon: "◇",
    title: { ar: "المتاجر والطلبات", en: "Commerce & ordering" },
    short: { ar: "من الكتالوج البسيط إلى متجر وطلبات منظمة حسب طريقة عملك.", en: "From a simple catalogue to structured commerce tailored to your process." },
    problem: { ar: "الطلبات تصل بصيغ مختلفة، والأسعار والمخزون يصعب تحديثها ومتابعتها.", en: "Orders arrive in different formats while pricing and stock are hard to track." },
    solution: { ar: "متجر أو نظام طلبات يعرض المنتجات ويوجه العميل بخطوات واضحة.", en: "A store or order system that presents products and guides customers clearly." },
    benefit: { ar: "تقليل الأخطاء، تسريع تأكيد الطلب، ووضوح أفضل للمبيعات.", en: "Fewer errors, faster confirmations and clearer sales visibility." },
    examples: { ar: "متجر محلي، موزع جملة، مطعم، قطع غيار أو طلب عروض أسعار.", en: "Local shops, distributors, restaurants, spare parts or quote requests." },
    features: { ar: "سلة، كوبونات، مناطق توصيل، مخزون، WhatsApp، دفع عند التوفر وتقارير.", en: "Cart, coupons, delivery zones, inventory, WhatsApp, payments and reporting." },
  },
  {
    slug: "management-systems",
    icon: "▦",
    title: { ar: "أنظمة الإدارة الداخلية", en: "Internal management systems" },
    short: { ar: "مكان مركزي للعملاء والطلبات والمهام والملفات والتقارير.", en: "One place for customers, requests, tasks, files and reporting." },
    problem: { ar: "المعلومات موزعة بين الهاتف والجداول والدفاتر ولا أحد يرى الصورة كاملة.", en: "Information is split across phones, sheets and notebooks." },
    solution: { ar: "لوحة إدارة بصلاحيات ومسارات عمل مبنية حسب أدوار الموظفين.", en: "A role-based dashboard and workflow designed around your staff." },
    benefit: { ar: "قرار أسرع، متابعة أوضح، وبيانات منظمة يمكن الرجوع إليها.", en: "Faster decisions, clearer follow-up and organised records." },
    examples: { ar: "إدارة عقارات، صيانة، مشاريع، مخزون، موظفين أو مستندات.", en: "Property, maintenance, project, inventory, staff or document management." },
    features: { ar: "صلاحيات، حالات، بحث، تصدير، تقارير، سجل تغييرات ونسخ احتياطية.", en: "Permissions, statuses, search, exports, reports, audit trails and backups." },
  },
  {
    slug: "booking-crm",
    icon: "◎",
    title: { ar: "الحجز ومتابعة العملاء", en: "Booking & customer follow-up" },
    short: { ar: "نظّم المواعيد والفرص البيعية والمتابعة من نقطة واحدة.", en: "Organise appointments, sales opportunities and follow-up in one place." },
    problem: { ar: "مواعيد متداخلة ومتابعات للعملاء قد تُنسى في أوقات ضغط العمل.", en: "Overlapping appointments and follow-ups that are easy to miss." },
    solution: { ar: "نظام حجز أو CRM مبسط يوضح حالة كل موعد وعميل.", en: "A booking system or simple CRM showing every appointment and customer status." },
    benefit: { ar: "استجابة أسرع، وتقليل حالات الغياب، وفرص أقل ضياعًا بسبب ضعف المتابعة.", en: "Faster response, fewer no-shows and fewer lost opportunities." },
    examples: { ar: "عيادة، استشارات، صالون، مكتب عقاري أو فريق مبيعات.", en: "Clinics, consultants, salons, real estate offices or sales teams." },
    features: { ar: "تقويم، تذكير، ملفات عملاء، مراحل بيع، مهام ورسائل آلية عند الاتفاق.", en: "Calendar, reminders, customer profiles, pipelines, tasks and optional messaging." },
  },
  {
    slug: "automation",
    icon: "↯",
    title: { ar: "أتمتة الأعمال والتكاملات", en: "Automation & integrations" },
    short: { ar: "ربط الخطوات المتكررة بين النماذج وWhatsApp والبريد وCRM وAPIs.", en: "Connect repetitive steps across forms, WhatsApp, email, CRMs and APIs." },
    problem: { ar: "الفريق يعيد نسخ البيانات ويرسل الرسائل ويحدث الحالات يدويًا.", en: "Teams repeatedly copy data, send messages and update statuses by hand." },
    solution: { ar: "مسار آلي محدد بعد دراسة الأدوات والقيود الموجودة لديك.", en: "A tailored automated workflow based on your actual tools and constraints." },
    benefit: { ar: "وقت أقل للأعمال المتكررة وأخطاء أقل ومتابعة يمكن قياسها.", en: "Less repetitive work, fewer errors and measurable follow-up." },
    examples: { ar: "تسجيل طلب، إشعار مسؤول، تحديث CRM، إنشاء مهمة وإعداد تقرير.", en: "Register a request, notify an owner, update a CRM, create a task and report." },
    features: { ar: "خطافات الويب (Webhooks)، وواجهات API، والبريد، وWhatsApp عند توفره، والتصنيف، واستخدامات ذكاء اصطناعي معتمدة.", en: "Webhooks, APIs, email, supported WhatsApp flows, classification and permitted AI." },
  },
  {
    slug: "performance-care",
    icon: "△",
    title: { ar: "الأداء والحماية والصيانة", en: "Performance, security & care" },
    short: { ar: "تحسين الأنظمة الحالية وحمايتها ومتابعة تشغيلها عند الاتفاق.", en: "Improve, protect and maintain existing digital systems." },
    problem: { ar: "الموقع بطيء أو قديم أو يصعب تحديثه، ولا توجد خطة واضحة للنسخ الاحتياطي.", en: "The site is slow, dated, hard to update or lacks a backup plan." },
    solution: { ar: "تقييم تقني ثم خطة تحسين أو إعادة بناء محددة الأولويات.", en: "A technical assessment followed by a prioritised improvement or rebuild plan." },
    benefit: { ar: "تجربة أفضل، مخاطر أقل، وتكاليف تطوير يمكن توقعها.", en: "A better experience, lower risk and more predictable development." },
    examples: { ar: "تحسين سرعة، SEO تقني، تحديثات، مراقبة، نسخ احتياطي وترحيل استضافة.", en: "Speed, technical SEO, updates, monitoring, backups and hosting migration." },
    features: { ar: "تدقيق، إصلاحات، سياسات أمن، نسخ احتياطي، توثيق ودعم اختياري.", en: "Audits, fixes, security policies, backups, documentation and optional support." },
  },
];
