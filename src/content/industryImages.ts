import type { Locale } from "./siteSettings";

type IndustryImage = {
  src: string;
  alt: Record<Locale, string>;
  position?: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=82`;

export const industryImages: Record<string, IndustryImage> = {
  "law-firms": {
    src: unsplash("photo-1450101499163-c8848c66ca85"),
    alt: { ar: "مستندات قانونية مرتبة على مكتب مهني", en: "Legal documents arranged on a professional desk" },
    position: "center",
  },
  "private-schools": {
    src: unsplash("photo-1509062522246-3755977927d7"),
    alt: { ar: "صف دراسي حديث ومنظم", en: "A modern organised classroom" },
    position: "center",
  },
  kindergartens: {
    src: unsplash("photo-1503454537195-1dcabb73ffb9"),
    alt: { ar: "طفل يشارك في نشاط تعليمي ملون", en: "A child taking part in a colourful learning activity" },
    position: "center 42%",
  },
  "medical-labs": {
    src: unsplash("photo-1532187863486-abf9dbad1b69"),
    alt: { ar: "معدات مخبرية وقوارير فحص", en: "Laboratory equipment and test vessels" },
    position: "center",
  },
  pharmacies: {
    src: unsplash("photo-1584308666744-24d5c474f2ae"),
    alt: { ar: "منتجات صيدلانية مرتبة للتجهيز", en: "Pharmacy products arranged for preparation" },
    position: "center",
  },
  "sports-clubs": {
    src: unsplash("photo-1534438327276-14e5300c3a48"),
    alt: { ar: "نادي رياضي مجهز بأدوات التمرين", en: "A gym equipped with training machines" },
    position: "center",
  },
  "beauty-salons": {
    src: unsplash("photo-1560066984-138dadb4c035"),
    alt: { ar: "مساحة أنيقة داخل صالون عناية", en: "An elegant beauty studio interior" },
    position: "center",
  },
  accounting: {
    src: unsplash("photo-1554224155-8d04cb21cd6c"),
    alt: { ar: "وثائق مالية ومحاسبية منظمة", en: "Organised financial and accounting documents" },
    position: "center",
  },
  architecture: {
    src: unsplash("photo-1600607687939-ce8a6c25118c"),
    alt: { ar: "تصميم معماري داخلي حديث", en: "A contemporary architectural interior" },
    position: "center",
  },
  "training-institutes": {
    src: unsplash("photo-1516321318423-f06f85e504b3"),
    alt: { ar: "متدرب يستخدم حاسوبًا ومواد تعليمية", en: "A learner using a laptop and study materials" },
    position: "center",
  },
  recruitment: {
    src: unsplash("photo-1521737711867-e3b97375f902"),
    alt: { ar: "فريق مهني يناقش المرشحين وخطة التوظيف", en: "A professional team discussing candidates and hiring" },
    position: "center",
  },
  automotive: {
    src: unsplash("photo-1487754180451-c456f719a1fc"),
    alt: { ar: "فني يعمل على صيانة مركبة داخل ورشة", en: "A technician servicing a vehicle in a workshop" },
    position: "center",
  },
  logistics: {
    src: unsplash("photo-1586528116311-ad8dd3c8310d"),
    alt: { ar: "مركز شحن وحاويات ضمن شبكة لوجستية", en: "A freight hub and containers in a logistics network" },
    position: "center",
  },
  hospitality: {
    src: unsplash("photo-1566073771259-6a8506099945"),
    alt: { ar: "غرفة فندقية مريحة بإضاءة دافئة", en: "A comfortable hotel room with warm lighting" },
    position: "center",
  },
  events: {
    src: unsplash("photo-1519167758481-83f550bb49b3"),
    alt: { ar: "قاعة مناسبة مجهزة بطاولات وإضاءة", en: "An event venue prepared with tables and lighting" },
    position: "center",
  },
  manufacturing: {
    src: unsplash("photo-1565793298595-6a879b1d9492"),
    alt: { ar: "معدات وخط تشغيل داخل مصنع", en: "Equipment and an operating line inside a factory" },
    position: "center",
  },
  insurance: {
    src: unsplash("photo-1560518883-ce09059eeffa"),
    alt: { ar: "منزل ومفتاح يعبّران عن حماية الممتلكات", en: "A home and key representing property protection" },
    position: "center",
  },
  "religious-travel": {
    src: unsplash("photo-1564769625905-50e93615e769"),
    alt: { ar: "مشهد معماري هادئ لمسجد وقباب", en: "A calm architectural view of a mosque and domes" },
    position: "center",
  },
};
