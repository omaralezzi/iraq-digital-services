import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/src/content/industries";
import { isLocale } from "@/src/content/siteSettings";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { ContextDemo } from "@/src/components/ContextDemo";

export function generateStaticParams() { return ["ar", "en"].flatMap(locale => industries.map(industry => ({ locale, slug: industry.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale)) return {}; const item = industries.find(x => x.slug === slug); return item ? { title: item.title[locale], description: item.intro[locale] } : {}; }
export default async function IndustryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; if (!isLocale(locale)) notFound(); const item = industries.find(x => x.slug === slug); if (!item) notFound();
  const ar = locale === "ar";
  const stages = ar ? ["فهم آلية العمل", "تحديد الأولويات", "تصوّر الحل", "التصميم والتنفيذ", "الاختبار والتسليم"] : ["Understand the workflow", "Set priorities", "Map the solution", "Design and build", "Test and hand over"];
  return <><SiteHeader locale={locale} /><main className="inner-page"><section className="inner-hero container"><Link className="back-link" href={`/${locale}#industries`}>← {ar ? "كل القطاعات" : "All industries"}</Link><span className="eyebrow">{ar ? "حلول تناسب طبيعة النشاط" : "Solutions shaped around the industry"}</span><div className="service-glyph" aria-hidden="true">{item.icon}</div><h1>{item.title[locale]}</h1><p>{item.intro[locale]}</p></section><section className="industry-detail container"><article><span className="eyebrow">{ar ? "مشكلات شائعة" : "Common problems"}</span><ul>{item.problems[locale].map(x => <li key={x}>{x}</li>)}</ul></article><article><span className="eyebrow">{ar ? "حلول مقترحة" : "Possible solutions"}</span><ul>{item.solutions[locale].map(x => <li key={x}>{x}</li>)}</ul></article><article><span className="eyebrow">{ar ? "فرص الأتمتة" : "Automation opportunities"}</span><ul>{item.automations[locale].map(x => <li key={x}>{x}</li>)}</ul></article></section><ContextDemo locale={locale} slug={slug} kind="industry" /><section className="container"><div className="section-heading"><span className="eyebrow">{ar ? "مراحل التنفيذ" : "Delivery stages"}</span><h2>{ar ? "مسار واضح من المشكلة إلى نظام عملي" : "A clear path from problem to practical system"}</h2></div><ol className="process-strip">{stages.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span>{x}</li>)}</ol></section><section className="center-cta container"><h2>{ar ? "دعنا نفهم نشاطك أولًا" : "Let us understand your business first"}</h2><p>{ar ? "يُحدَّد النطاق والتكلفة والمدة قبل التنفيذ، فلا توجد حزمة واحدة تناسب الجميع." : "Scope, cost and timeline are confirmed before implementation. One package does not fit every business."}</p><Link className="button primary" href={`/${locale}#project-wizard`}>{ar ? "احصل على تقييم أولي" : "Get an initial assessment"}</Link></section></main><SiteFooter locale={locale} /></>;
}
