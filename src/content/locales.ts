import type { Locale } from "./siteSettings";

export const ui = {
  ar: {
    nav: { services: "الخدمات", industries: "الحلول حسب القطاع", automation: "الأتمتة", demos: "النماذج", process: "طريقة العمل", why: "لماذا هذا الأسلوب؟", faq: "الأسئلة", contact: "التواصل" },
    quote: "اطلب عرض سعر", consult: "ابدأ باستشارة أولية", describe: "ابدأ وصف مشروعك", demos: "شاهد النماذج", whatsapp: "WhatsApp", light: "الوضع الخفيف", normal: "الوضع الكامل",
  },
  en: {
    nav: { services: "Services", industries: "Industry solutions", automation: "Automation", demos: "Demos", process: "Process", why: "Why this approach", faq: "FAQ", contact: "Contact" },
    quote: "Request a quote", consult: "Start a consultation", describe: "Describe your project", demos: "Explore demos", whatsapp: "WhatsApp", light: "Lite mode", normal: "Full mode",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const governorates = ["بغداد", "البصرة", "نينوى", "أربيل", "النجف", "كربلاء", "دهوك", "السليمانية", "كركوك", "الأنبار", "ديالى", "واسط", "ميسان", "ذي قار", "بابل", "القادسية", "المثنى", "صلاح الدين", "حلبجة", "أخرى"];
