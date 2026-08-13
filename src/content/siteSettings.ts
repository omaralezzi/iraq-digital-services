export const siteSettings = {
  brand: {
    name: "sifrsifr.one",
    arabicName: "sifrsifr.one",
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
  },
  contact: {
    domain: "sifrsifr.one",
    email: "info@sifrsifr.one",
  },
  locale: {
    default: "ar" as const,
    supported: ["ar", "en"] as const,
    future: ["de"] as const,
  },
  legalReviewDate: "2026-08-13",
} as const;

export type Locale = (typeof siteSettings.locale.supported)[number];

export const isLocale = (value: string): value is Locale =>
  siteSettings.locale.supported.includes(value as Locale);
