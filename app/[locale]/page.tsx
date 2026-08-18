import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isLocale, siteSettings } from "@/src/content/siteSettings";
import { SiteHeader } from "@/src/components/SiteHeader";
import { Hero } from "@/src/components/Hero";
import { ServicesSection } from "@/src/components/ServicesSection";
import { IndustriesSection } from "@/src/components/IndustriesSection";
import { AutomationSection } from "@/src/components/AutomationSection";
import { DemoLab } from "@/src/components/DemoLab";
import { ProjectWizard } from "@/src/components/ProjectWizard";
import { ContactForm } from "@/src/components/ContactForm";
import { SiteFooter } from "@/src/components/SiteFooter";
import { ProcessAndTrust } from "@/src/components/ProcessAndTrust";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const h = await headers();
  const host = h.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = `${protocol}://${host}`;
  const ar = locale === "ar";
  const title = ar ? "sifrsifr.one — مواقع وتطبيقات وأتمتة أعمال للعراق وألمانيا" : locale === "de" ? "sifrsifr.one – Websites, Apps und Automatisierung für Deutschland und den Irak" : "sifrsifr.one — Websites, apps and automation for Iraq and Germany";
  const description = ar ? "نحوّل فكرتك إلى موقع أو تطبيق أو نظام يعمل فعليًا، مع تنفيذ من ألمانيا وتواصل بالعربية والإنجليزية والألمانية." : locale === "de" ? "Websites, Apps und digitale Systeme aus Deutschland – mit klarer Kommunikation auf Deutsch, Englisch oder Arabisch." : "Turn your idea into a website, app or system that works—delivered from Germany in Arabic, English or German.";
  return { title: { absolute: title }, description, alternates: { languages: { ar: `${base}/ar`, en: `${base}/en`, de: `${base}/de` } }, openGraph: { siteName: "sifrsifr.one", title, description, type: "website", locale: ar ? "ar_IQ" : locale === "de" ? "de_DE" : "en_US", images: [{ url: `${base}/og.png`, width: 1536, height: 1024, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [`${base}/og.png`] } };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteSettings.brand.name, description: siteSettings.brand.tagline[locale], founder: { "@type": "Person", name: siteSettings.provider.legalName }, address: { "@type": "PostalAddress", streetAddress: "Vautierstr. 57", postalCode: "40237", addressLocality: "Düsseldorf", addressCountry: "DE" }, areaServed: [{ "@type": "Country", name: "Iraq" }, { "@type": "Country", name: "Germany" }] };
  return (
    <>
      <a className="skip-link" href="#main">{locale === "ar" ? "انتقل إلى المحتوى" : locale === "de" ? "Zum Inhalt springen" : "Skip to content"}</a>
      <SiteHeader locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <ServicesSection locale={locale} />
        <IndustriesSection locale={locale} />
        <AutomationSection locale={locale} />
        <DemoLab locale={locale} />
        <ProjectWizard locale={locale} />
        <ProcessAndTrust locale={locale} />
        <ContactForm locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
