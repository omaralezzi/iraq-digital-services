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
    legalName: "Omar Al-Ezzi",
    arabicName: "عمر العزي",
    professionalStatus: "Freiberuflich tätig",
    address: ["Vautierstr. 57", "40237 Düsseldorf", "Germany"],
    serviceLocation: "Germany",
    targetMarket: "Iraq",
  },
  contact: {
    domain: "sifrsifr.one",
    email: "info@sifrsifr.one",
    phone: "+964 776 209 3683",
    phoneHref: "+9647762093683",
    whatsapp: "+964 776 209 3683",
    whatsappHref: "https://wa.me/9647762093683",
  },
  locale: {
    default: "ar" as const,
    supported: ["ar", "en"] as const,
  },
  legalReviewDate: "2026-08-17",
} as const;

export type Locale = (typeof siteSettings.locale.supported)[number];

export const isLocale = (value: string): value is Locale =>
  siteSettings.locale.supported.includes(value as Locale);
