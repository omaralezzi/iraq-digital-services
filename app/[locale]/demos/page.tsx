import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoLab } from "@/src/components/DemoLab";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { isLocale } from "@/src/content/siteSettings";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "نماذج المواقع والأنظمة" : locale === "de" ? "Website- und Systemdemos" : "Website and system demos",
    description: ar ? "نماذج توضيحية تفاعلية لمواقع ومتاجر وأنظمة مخصصة لقطاعات مختلفة." : locale === "de" ? "Interaktive, anschauliche Demos für Websites, Shops und Systeme in verschiedenen Branchen." : "Interactive illustrative demos for websites, stores and systems across different industries.",
  };
}

const demoLinks = [
  ["services/websites", "موقع شركة", "Company website", "Unternehmenswebsite", "صفحة خدمة ونموذج طلب واضح", "Service page and clear enquiry", "Leistungsseite mit klarer Anfrage"],
  ["industries/clinics", "حجز عيادة", "Clinic booking", "Praxisbuchung", "اختصاص وموعد وملخص الحجز", "Speciality, time and booking summary", "Fachgebiet, Termin und Buchungsübersicht"],
  ["industries/restaurants", "طلب مطعم", "Restaurant ordering", "Restaurantbestellung", "قائمة طعام وسلة وإرسال إلى المطبخ", "Menu, cart and kitchen handoff", "Speisekarte, Warenkorb und Übergabe an die Küche"],
  ["industries/retail", "متجر إلكتروني", "Online store", "Onlineshop", "منتجات وتصنيفات وسلة", "Products, categories and cart", "Produkte, Kategorien und Warenkorb"],
  ["services/management-systems", "إدارة مشاريع", "Project management", "Projektmanagement", "بطاقات تنتقل بين مراحل العمل", "Cards moving across work stages", "Aufgaben zwischen Arbeitsphasen verschieben"],
  ["industries/construction", "مقاولات وعقارات", "Construction and property", "Bau und Immobilien", "مشاريع ومراحل وتحديثات تنفيذ", "Projects, milestones and delivery updates", "Projekte, Meilensteine und Fortschrittsmeldungen"],
] as const;

export default async function DemosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";
  return <>
    <SiteHeader locale={locale} />
    <main className="standalone-page demos-page">
      <section className="standalone-hero container">
        <Link className="back-link" href={`/${locale}`}>← {ar ? "الرئيسية" : locale === "de" ? "Startseite" : "Home"}</Link>
        <span className="eyebrow">{ar ? "مكتبة النماذج" : locale === "de" ? "Demo-Bibliothek" : "Demo library"}</span>
        <h1>{ar ? "نماذج تساعدك على تصوّر الموقع أو النظام قبل بدء مشروعك." : locale === "de" ? "Demos, die zeigen, wie sich eine Website oder ein System anfühlen könnte, bevor Ihr Projekt beginnt." : "Demos that show what a website or system could feel like before your project begins."}</h1>
        <p>{ar ? "هذه الصفحة مخصصة للعرض والتجربة: اختر نموذجًا، وغيّر حالةً أو أضف طلبًا، ثم افتح النموذج المتخصص لمشاهدة الواجهة الكاملة." : locale === "de" ? "Diese Seite dient der Erkundung: Wählen Sie eine Demo aus, ändern Sie einen Status oder fügen Sie eine Anfrage hinzu und öffnen Sie dann ein spezielles Beispiel für die vollständige Benutzeroberfläche." : "This page is for exploration: choose a demo, change a status or add a request, then open a specialist example for the full interface."}</p>
      </section>
      <DemoLab locale={locale} />
      <section className="demo-library container" aria-labelledby="demo-library-title">
        <div className="section-heading"><span className="eyebrow">{ar ? "نماذج بحسب الحاجة" : locale === "de" ? "Demos nach Bedarf" : "Demos by need"}</span><h2 id="demo-library-title">{ar ? "افتح نموذجًا متخصصًا وجرّبه بنفسك." : locale === "de" ? "Öffnen Sie eine Fachdemo und probieren Sie es selbst aus." : "Open a specialist demo and try it yourself."}</h2></div>
        <div className="demo-library-grid">{demoLinks.map(([path, titleAr, titleEn, titleDe, copyAr, copyEn, copyDe], index) => <Link href={`/${locale}/${path}`} key={path}><span>{String(index + 1).padStart(2, "0")}</span><h3>{ar ? titleAr : locale === "de" ? titleDe : titleEn}</h3><p>{ar ? copyAr : locale === "de" ? copyDe : copyEn}</p><b>{ar ? "افتح النموذج" : locale === "de" ? "Demo öffnen" : "Open demo"} ↗</b></Link>)}</div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
