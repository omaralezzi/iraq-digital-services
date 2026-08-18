import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AutomationSection } from "@/src/components/AutomationSection";
import { ContextDemo } from "@/src/components/ContextDemo";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { isLocale } from "@/src/content/siteSettings";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "أتمتة الأعمال والتكاملات" : locale === "de" ? "Geschäftsautomatisierung und Integrationen" : "Business automation and integrations",
    description: ar ? "مسارات أتمتة تربط النماذج والفرق والأنظمة وتقلل العمل اليدوي." : locale === "de" ? "Automatisierungsworkflows verbinden Formulare, Teams und Systeme und reduzieren gleichzeitig den manuellen Aufwand." : "Automation workflows connecting forms, teams and systems while reducing manual work.",
  };
}

export default async function AutomationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";
  return <>
    <SiteHeader locale={locale} />
    <main className="standalone-page automation-page">
      <section className="standalone-hero container">
        <Link className="back-link" href={`/${locale}`}>← {ar ? "الرئيسية" : locale === "de" ? "Startseite" : "Home"}</Link>
        <span className="eyebrow">{ar ? "الأتمتة والتكاملات" : locale === "de" ? "Automatisierung und Integrationen" : "Automation & integrations"}</span>
        <h1>{ar ? "دع الطلب ينتقل بين أدواتك من دون نسخ البيانات يدويًا." : locale === "de" ? "Verschieben Sie jede Anfrage zwischen Ihren Tools, ohne sie manuell kopieren zu müssen." : "Move each request across your tools without manual copying."}</h1>
        <p>{ar ? "توضح هذه الصفحة آلية الأتمتة: نقطة البداية، وقواعد التحقق، والأنظمة المرتبطة، والتنبيهات، والنتائج التي يحصل عليها الفريق." : locale === "de" ? "Auf dieser Seite geht es speziell um Automatisierung: Auslöser, Validierungsregeln, verbundene Systeme, Warnungen und das Ergebnis für Ihr Team." : "This page is specifically about automation: triggers, validation rules, connected systems, alerts and the outcome for your team."}</p>
        <div className="standalone-actions"><Link className="button primary" href={`/${locale}/services/automation`}>{ar ? "تفاصيل خدمة الأتمتة" : locale === "de" ? "Entdecken Sie den Automatisierungsservice" : "Explore automation service"}</Link><Link className="button ghost" href={`/${locale}#project-wizard`}>{ar ? "صف مسار العمل الحالي" : locale === "de" ? "Beschreiben Sie Ihren aktuellen Arbeitsablauf" : "Describe your current workflow"}</Link></div>
      </section>
      <AutomationSection locale={locale} />
      <ContextDemo locale={locale} slug="automation" kind="service" />
    </main>
    <SiteFooter locale={locale} />
  </>;
}
