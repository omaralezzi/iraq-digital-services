import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/src/content/services";
import { isLocale, siteSettings } from "@/src/content/siteSettings";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { ContextDemo } from "@/src/components/ContextDemo";

export function generateStaticParams() { return siteSettings.locale.supported.flatMap(locale => services.map(service => ({ locale, slug: service.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params; if (!isLocale(locale)) return {};
  const service = services.find(item => item.slug === slug); if (!service) return {};
  return { title: service.title[locale], description: service.short[locale], robots: { index: true, follow: true } };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; if (!isLocale(locale)) notFound();
  const service = services.find(item => item.slug === slug); if (!service) notFound();
  const labels = locale === "ar" ? { eyebrow: "خدمة رقمية تناسب احتياجك", problem: "المشكلة", solution: "الحل المقترح", benefit: "الفائدة العملية", examples: "أمثلة على الاستخدام", features: "خصائص مقترحة", cta: "أخبرنا عن مشروعك", back: "كل الخدمات" } : locale === "de" ? { eyebrow: "Eine digitale Lösung für Ihren Bedarf", problem: "Die Herausforderung", solution: "Vorgeschlagene Lösung", benefit: "Praktischer Nutzen", examples: "Anwendungsbeispiele", features: "Mögliche Funktionen", cta: "Projekt beschreiben", back: "Alle Leistungen" } : { eyebrow: "A digital service built around your needs", problem: "The problem", solution: "Proposed solution", benefit: "Practical value", examples: "Use cases", features: "Possible features", cta: "Tell us about your project", back: "All services" };
  const blocks = [[labels.problem, service.problem[locale]], [labels.solution, service.solution[locale]], [labels.benefit, service.benefit[locale]], [labels.examples, service.examples[locale]], [labels.features, service.features[locale]]];
  return <><SiteHeader locale={locale} /><main className="inner-page"><section className="inner-hero container"><Link className="back-link" href={`/${locale}#services`}>← {labels.back}</Link><span className="eyebrow">{labels.eyebrow}</span><div className="service-glyph" aria-hidden="true">{service.icon}</div><h1>{service.title[locale]}</h1><p>{service.short[locale]}</p></section><section className="detail-grid container">{blocks.map(([title, body], i) => <article className="detail-card" key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</section><ContextDemo locale={locale} slug={slug} kind="service" /><section className="center-cta container"><h2>{locale === "ar" ? "لا تحتاج إلى معرفة المصطلح التقني" : locale === "de" ? "Sie müssen den technischen Begriff nicht kennen" : "You do not need to know the technical term"}</h2><p>{locale === "ar" ? "اشرح لنا آلية العمل والمشكلة، وسنقترح نطاقًا واضحًا قبل التنفيذ." : locale === "de" ? "Beschreiben Sie Ihren Ablauf und die Herausforderung. Vor Projektbeginn schlagen wir einen klaren Umfang vor." : "Describe how you work and what is getting in the way. We will propose a clear scope before work starts."}</p><Link className="button primary" href={`/${locale}#project-wizard`}>{labels.cta}</Link></section></main><SiteFooter locale={locale} /></>;
}
