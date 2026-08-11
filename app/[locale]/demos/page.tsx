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
    title: ar ? "نماذج المواقع والأنظمة" : "Website and system demos",
    description: ar ? "نماذج توضيحية تفاعلية لمواقع ومتاجر وأنظمة مخصصة لقطاعات مختلفة." : "Interactive illustrative demos for websites, stores and systems across different industries.",
  };
}

const demoLinks = [
  ["services/websites", "موقع شركة", "Company website", "صفحة خدمة ونموذج طلب واضح", "Service page and clear enquiry"],
  ["industries/clinics", "حجز عيادة", "Clinic booking", "اختصاص وموعد وملخص الحجز", "Speciality, time and booking summary"],
  ["industries/restaurants", "طلب مطعم", "Restaurant ordering", "قائمة طعام وسلة وإرسال إلى المطبخ", "Menu, cart and kitchen handoff"],
  ["industries/retail", "متجر إلكتروني", "Online store", "منتجات وتصنيفات وسلة", "Products, categories and cart"],
  ["services/management-systems", "إدارة مشاريع", "Project management", "بطاقات تنتقل بين مراحل العمل", "Cards moving across work stages"],
  ["industries/construction", "مقاولات وعقارات", "Construction and property", "مشاريع ومراحل وتحديثات تنفيذ", "Projects, milestones and delivery updates"],
] as const;

export default async function DemosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";
  return <>
    <SiteHeader locale={locale} />
    <main className="standalone-page demos-page">
      <section className="standalone-hero container">
        <Link className="back-link" href={`/${locale}`}>← {ar ? "الرئيسية" : "Home"}</Link>
        <span className="eyebrow">{ar ? "مكتبة النماذج" : "Demo library"}</span>
        <h1>{ar ? "نماذج تساعدك على تصوّر الموقع أو النظام قبل بدء مشروعك." : "Demos that show what a website or system could feel like before your project begins."}</h1>
        <p>{ar ? "هذه الصفحة مخصصة للعرض والتجربة: اختر نموذجًا، وغيّر حالةً أو أضف طلبًا، ثم افتح النموذج المتخصص لمشاهدة الواجهة الكاملة." : "This page is for exploration: choose a demo, change a status or add a request, then open a specialist example for the full interface."}</p>
      </section>
      <DemoLab locale={locale} />
      <section className="demo-library container" aria-labelledby="demo-library-title">
        <div className="section-heading"><span className="eyebrow">{ar ? "نماذج بحسب الحاجة" : "Demos by need"}</span><h2 id="demo-library-title">{ar ? "افتح نموذجًا متخصصًا وجرّبه بنفسك." : "Open a specialist demo and try it yourself."}</h2></div>
        <div className="demo-library-grid">{demoLinks.map(([path, titleAr, titleEn, copyAr, copyEn], index) => <Link href={`/${locale}/${path}`} key={path}><span>{String(index + 1).padStart(2, "0")}</span><h3>{ar ? titleAr : titleEn}</h3><p>{ar ? copyAr : copyEn}</p><b>{ar ? "افتح النموذج" : "Open demo"} ↗</b></Link>)}</div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
