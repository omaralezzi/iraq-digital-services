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
  de: {
    nav: { services: "Leistungen", industries: "Branchenlösungen", automation: "Automatisierung", demos: "Beispiele", process: "Ablauf", why: "Warum dieser Ansatz?", faq: "FAQ", contact: "Kontakt" },
    quote: "Angebot anfragen", consult: "Erstgespräch starten", describe: "Projekt beschreiben", demos: "Beispiele ansehen", whatsapp: "WhatsApp", light: "Reduzierter Modus", normal: "Vollständiger Modus",
  },
} satisfies Record<Locale, Record<string, unknown>>;

type LocationOption = { value: string; label: Record<Locale, string> };

export const countries: LocationOption[] = [
  { value: "IQ", label: { ar: "العراق", en: "Iraq", de: "Irak" } },
  { value: "DE", label: { ar: "ألمانيا", en: "Germany", de: "Deutschland" } },
];

export const regions: Record<"IQ" | "DE", LocationOption[]> = {
  IQ: [
    ["Baghdad", "بغداد"], ["Basra", "البصرة"], ["Nineveh", "نينوى"], ["Erbil", "أربيل"], ["Najaf", "النجف"], ["Karbala", "كربلاء"], ["Duhok", "دهوك"], ["Sulaymaniyah", "السليمانية"], ["Kirkuk", "كركوك"], ["Al Anbar", "الأنبار"], ["Diyala", "ديالى"], ["Wasit", "واسط"], ["Maysan", "ميسان"], ["Dhi Qar", "ذي قار"], ["Babil", "بابل"], ["Al-Qadisiyyah", "القادسية"], ["Al Muthanna", "المثنى"], ["Saladin", "صلاح الدين"], ["Halabja", "حلبجة"], ["Other", "أخرى"],
  ].map(([value, ar]) => ({ value, label: { ar, en: value, de: value === "Other" ? "Andere" : value } })),
  DE: [
    "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen",
  ].map(value => ({ value, label: { ar: value, en: value, de: value } })),
};

export const regionLabels: Record<"IQ" | "DE", Record<Locale, string>> = {
  IQ: { ar: "المحافظة", en: "Governorate", de: "Gouvernement" },
  DE: { ar: "الولاية الألمانية", en: "Federal state", de: "Bundesland" },
};
