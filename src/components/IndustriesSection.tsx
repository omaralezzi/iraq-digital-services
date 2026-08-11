import Link from "next/link";
import type { Locale } from "@/src/content/siteSettings";
import { industries } from "@/src/content/industries";

const originalIndustryCount = 10;

function IndustryCards({ locale, items }: { locale: Locale; items: typeof industries }) {
  return <div className="industries-grid">{items.map(item => <Link className="industry-card" href={`/${locale}/industries/${item.slug}`} key={item.slug}>
    <span className="industry-icon">{item.icon}</span>
    <div><h3>{item.title[locale]}</h3><p>{item.intro[locale]}</p></div>
    <span className="arrow">↗</span>
  </Link>)}</div>;
}

export function IndustriesSection({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const established = industries.slice(0, originalIndustryCount);
  const expanded = industries.slice(originalIndustryCount);

  return <section id="industries" className="section industries-section"><div className="container">
    <div className="section-heading"><span className="eyebrow">{ar ? "حلول تفهم سياق العمل" : "Solutions that understand the workflow"}</span><h2>{ar ? "لكل قطاع تحدياته؛ لذلك لا نكرّر الحل نفسه." : "Every industry has its own friction. The solution should reflect that."}</h2><p>{ar ? "صفحات متخصصة تتضمن أمثلة وخصائص وفرص أتمتة تناسب طبيعة النشاط في العراق." : "Industry-specific problems, features and automation opportunities for businesses in Iraq."}</p></div>
    <div className="industry-group-heading"><span>01</span><div><h3>{ar ? "القطاعات الأساسية" : "Core industries"}</h3><p>{ar ? "نماذج للمبيعات والخدمات والصحة والتشغيل." : "Examples for sales, services, healthcare and operations."}</p></div></div>
    <IndustryCards locale={locale} items={established} />
    <div className="industry-group-heading expanded"><span>02</span><div><h3>{ar ? "قطاعات متخصصة إضافية" : "Additional specialist industries"}</h3><p>{ar ? "ثمانية عشر قطاعًا جديدًا، لكل منها تجربة ونموذج مختلفان." : "Eighteen additional industries, each with a distinct experience and demo."}</p></div></div>
    <IndustryCards locale={locale} items={expanded} />
  </div></section>;
}
