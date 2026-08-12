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
  const ar = locale !== "en";
  const title = ar ? "sifrsifr.one — تصميم مواقع وتطبيقات وأتمتة أعمال للعراق" : "sifrsifr.one — Websites, apps and business automation for Iraq";
  const description = ar ? "نحوّل فكرتك إلى موقع أو تطبيق أو نظام يعمل فعليًا، مع تنفيذ من ألمانيا وتواصل بالعربية." : "Turn your idea into a website, app or system that works—delivered from Germany with Arabic communication.";
  return { title: { absolute: title }, description, alternates: { languages: { ar: `${base}/ar`, en: `${base}/en` } }, openGraph: { siteName: "sifrsifr.one", title, description, type: "website", locale: ar ? "ar_IQ" : "en_US", images: [{ url: `${base}/og.png`, width: 1536, height: 1024, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [`${base}/og.png`] } };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteSettings.brand.name, description: locale === "ar" ? siteSettings.brand.tagline.ar : siteSettings.brand.tagline.en, founder: { "@type": "Person", name: siteSettings.provider.legalName }, address: { "@type": "PostalAddress", streetAddress: "Vautierstr. 57", postalCode: "40237", addressLocality: "Düsseldorf", addressCountry: "DE" }, areaServed: { "@type": "Country", name: "Iraq" } };
  return (
    <>
      <a className="skip-link" href="#main">{locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}</a>
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
