"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";
import { ui } from "@/src/content/locales";
import { BrandLogo } from "@/src/components/BrandLogo";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [lite, setLite] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("liteMode") === "true"; if (saved) queueMicrotask(() => setLite(true)); }, []);
  const copy = ui[locale];
  const toggleLite = () => {
    const next = !lite;
    setLite(next);
    document.documentElement.dataset.lite = String(next);
    localStorage.setItem("liteMode", String(next));
  };
  const other = locale === "ar" ? "en" : "ar";
  const links = [
    [`/${locale}#services`, copy.nav.services],
    [`/${locale}#industries`, copy.nav.industries],
    [`/${locale}/automation`, copy.nav.automation],
    [`/${locale}/demos`, copy.nav.demos],
    [`/${locale}#process`, copy.nav.process],
    [`/${locale}#faq`, copy.nav.faq],
    [`/${locale}#contact`, copy.nav.contact],
  ];
  return <header className="site-header"><div className="container nav-wrap"><Link href={`/${locale}`} className="wordmark" aria-label={locale === "ar" ? "sifrsifr.one — الصفحة الرئيسية" : "sifrsifr.one — Home"}><BrandLogo priority /></Link><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><span></span><span></span><span></span><em>{locale === "ar" ? "القائمة" : "Menu"}</em></button><nav id="main-nav" className={open ? "nav-links open" : "nav-links"} aria-label={locale === "ar" ? "قائمة التنقل الرئيسية" : "Main navigation"}>{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><div className="nav-actions"><button className="wa-button" type="button" disabled title={locale === "ar" ? "يُفعَّل بعد إضافة رقم WhatsApp" : "Enabled after adding a WhatsApp number"}>WA</button><button className="lite-toggle" type="button" onClick={toggleLite} aria-pressed={lite}><span aria-hidden="true">◐</span>{lite ? copy.normal : copy.light}</button><Link className="lang-switch" href={`/${other}`} hrefLang={other}>{other.toUpperCase()}</Link><Link className="button small primary" href={`/${locale}#project-wizard`}>{copy.quote}</Link></div></div></header>;
}
