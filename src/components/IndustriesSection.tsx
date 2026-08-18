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
    <div className="section-heading"><span className="eyebrow">{ar ? "حلول تفهم سياق العمل" : locale === "de" ? "Lösungen, die den Arbeitsablauf verstehen" : "Solutions that understand the workflow"}</span><h2>{ar ? "لكل قطاع تحدياته؛ لذلك لا نكرّر الحل نفسه." : locale === "de" ? "Jede Branche hat ihre eigenen Reibungspunkte. Die Lösung sollte dies widerspiegeln." : "Every industry has its own friction. The solution should reflect that."}</h2><p>{ar ? "اعثر على الحل الأقرب لطبيعة نشاطك، من جذب العملاء إلى تنظيم الطلبات والمواعيد والعمليات اليومية." : locale === "de" ? "Finden Sie die Lösung, die am besten zu Ihrem Unternehmen passt – von der Kundengewinnung über die Organisation von Bestellungen und Buchungen bis hin zum Tagesgeschäft." : "Find the closest fit for your business—from winning customers to organising orders, bookings and day-to-day operations."}</p></div>
    <div className="industry-group-heading"><span>01</span><div><h3>{ar ? "القطاعات الأساسية" : locale === "de" ? "Kernindustrien" : "Core industries"}</h3><p>{ar ? "ابدأ من أكثر الاحتياجات شيوعًا في المبيعات والخدمات والصحة والتشغيل." : locale === "de" ? "Beginnen Sie mit den häufigsten Anforderungen in den Bereichen Vertrieb, Dienstleistungen, Gesundheitswesen und Betrieb." : "Start with the most common needs across sales, services, healthcare and operations."}</p></div></div>
    <IndustryCards locale={locale} items={established} />
    <div className="industry-group-heading expanded"><span>02</span><div><h3>{ar ? "قطاعات متخصصة إضافية" : locale === "de" ? "Weitere Spezialbranchen" : "Additional specialist industries"}</h3><p>{ar ? "إن كان نشاطك أكثر تخصصًا، فستجد حلًا يراعي رحلة عميلك وطريقة عمل فريقك." : locale === "de" ? "Wenn Ihr Unternehmen spezialisierter ist, prüfen Sie eine Lösung, die auf Ihre Kunden und die Arbeitsweise Ihres Teams zugeschnitten ist." : "If your business is more specialised, explore a solution shaped around your customers and the way your team works."}</p></div></div>
    <IndustryCards locale={locale} items={expanded} />
  </div></section>;
}
