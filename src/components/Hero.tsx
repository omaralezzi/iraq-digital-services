/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Locale } from "@/src/content/siteSettings";
import { siteSettings } from "@/src/content/siteSettings";

export function Hero({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <section className="hero">
    <div className="hero-grid" aria-hidden="true"></div>
    <div className="container hero-layout">
      <div className="hero-copy">
        <div className="eyebrow"><span></span>{ar ? "حلول رقمية للعراق وألمانيا" : locale === "de" ? "Digitale Lösungen für Deutschland und den Irak" : "Digital solutions for Iraq and Germany"}</div>
        <h1>{ar ? <>نحوّل فكرتك إلى <em>نظام رقمي</em> يعمل فعليًا.</> : locale === "de" ? <>Wir machen aus Ihrer Idee ein <em>digitales System</em>, das wirklich funktioniert.</> : <>Turn your idea into a <em>digital system</em> that actually works.</>}</h1>
        <p>{ar ? "خدمات رقمية للشركات وأصحاب الأعمال والمستقلين والمهنيين في العراق وألمانيا، تُدار وتُنفّذ من ألمانيا، مع تواصل بالعربية والإنجليزية والألمانية وخطة واضحة من الفكرة حتى الإطلاق." : locale === "de" ? "Digitale Leistungen für Unternehmen, Selbstständige und Berufstätige in Deutschland und im Irak – umgesetzt aus Deutschland, mit Kommunikation auf Deutsch, Englisch oder Arabisch und einem klaren Plan von der Idee bis zur Veröffentlichung." : "Digital services for companies, entrepreneurs, freelancers and professionals in Iraq and Germany, delivered from Germany with communication in Arabic, English or German and a clear plan from idea to launch."}</p>
        <div className="hero-actions">
          <Link className="button primary" href={`/${locale}#project-wizard`}>{ar ? "ابدأ وصف مشروعك" : locale === "de" ? "Beschreiben Sie Ihr Projekt" : "Describe your project"}<span>↗</span></Link>
          <Link className="button ghost" href={`/${locale}#contact`}>{ar ? "استشارة أولية" : locale === "de" ? "Erstberatung" : "Initial consultation"}</Link>
          <Link className="button ghost" href={`/${locale}/demos`}>{ar ? "جرّب النماذج" : locale === "de" ? "Probieren Sie die Demos aus" : "Try the demos"}</Link>
        </div>
        <div className="hero-experience"><span className="hero-experience-years" aria-hidden="true"><b>25</b><small>{ar ? "عامًا" : locale === "de" ? "Jahre" : "years"}</small></span><i aria-hidden="true"></i><p><strong>{ar ? "خبرة برمجية" : locale === "de" ? "Programmiererfahrung" : "Programming experience"}</strong><small>{ar ? <>منذ عام <b>2001</b></> : locale === "de" ? <>seit <b>2001</b></> : <>since <b>2001</b></>}</small></p></div>
        <div className="trust-row"><span><i>✓</i>{ar ? "تواصل بثلاث لغات" : locale === "de" ? "Kommunikation in drei Sprachen" : "Communication in three languages"}</span><span><i>✓</i>{ar ? "نطاق واضح" : locale === "de" ? "Klarer Leistungsumfang" : "Clear scope"}</span><span><i>✓</i>{ar ? "قابل للتوسع" : locale === "de" ? "Erweiterbar" : "Built to scale"}</span></div>
      </div>
      <div className="hero-scene" aria-label={ar ? "مشهد توضيحي يربط موقعًا وتطبيقًا ولوحة إدارة" : locale === "de" ? "Illustration, die eine Website, eine App und ein Dashboard verbindet" : "Illustration connecting a website, app and dashboard"}>
        <div className="scene-orbit one"></div><div className="scene-orbit two"></div>
        <div className="screen main-screen"><div className="screen-top"><span></span><span></span><span></span><b>workspace · sifrsifr.one</b></div><div className="screen-body"><div className="side-rail"></div><div className="dash-content"><div className="dash-heading"></div><div className="dash-cards"><i></i><i></i><i></i></div><div className="dash-chart"><span></span></div></div></div></div>
        <div className="phone"><div className="phone-notch"></div><div className="phone-logo"><img src="/app-icon-512.png" alt="" width="38" height="38" /></div><i></i><i></i><button aria-hidden="true"></button></div>
        <div className="code-card"><span>01</span><code>request → validate</code><code>CRM → notify</code><code>report → ready</code></div>
        <div className="flow-chip chip-one"><i>✓</i>{ar ? "تم تسجيل الطلب" : locale === "de" ? "Anfrage erfasst" : "Request captured"}</div><div className="flow-chip chip-two"><i>↯</i>{ar ? "الأتمتة تعمل" : locale === "de" ? "Automatisierung live" : "Automation live"}</div>
        <div className="data-dot d1"></div><div className="data-dot d2"></div><div className="data-dot d3"></div>
      </div>
    </div>
    <div className="container hero-foot"><span>{ar ? "مزوّد الخدمة والطرف المتعاقد" : locale === "de" ? "Dienstleister und Vertragspartner" : "Service provider and contracting party"}</span><b>{siteSettings.provider.legalName}</b><span>•</span><span>Düsseldorf, Germany</span><span>→</span><span>Iraq · Germany</span></div>
  </section>;
}
