export const siteSettings = {
  brand: {
    name: "[PROJECT_NAME]",
    arabicName: "[اسم المشروع]",
    tagline: {
      ar: "تقنيات حديثة، وتواصل بالعربية، وتنفيذ من ألمانيا.",
      en: "Modern technology, Arabic communication, delivery from Germany.",
    },
  },
  provider: {
    legalName: "Omar Al‑Ezzi",
    arabicName: "عمر العزي",
    address: ["Vautierstr. 57", "40237 Düsseldorf", "Germany"],
    serviceLocation: "Germany",
    targetMarket: "Iraq",
    legalForm: "[VERIFY: Einzelunternehmer / Freiberufler / other]",
    vatId: "[VERIFY IF AVAILABLE]",
    register: "[VERIFY IF APPLICABLE]",
    supervisoryAuthority: "[VERIFY IF APPLICABLE]",
  },
  contact: {
    domain: "[DOMAIN_TO_BE_SELECTED_LATER]",
    email: "[NEW_BUSINESS_EMAIL]",
    phone: "[TO_BE_ADDED]",
    whatsapp: "[TO_BE_ADDED]",
  },
  locale: {
    default: "ar" as const,
    supported: ["ar", "en"] as const,
    future: ["de"] as const,
  },
  legalReviewDate: "2026-08-11",
} as const;

export type Locale = (typeof siteSettings.locale.supported)[number];

export const isLocale = (value: string): value is Locale =>
  siteSettings.locale.supported.includes(value as Locale);
