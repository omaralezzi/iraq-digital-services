"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";
import { ui } from "@/src/content/locales";
import { BrandLogo } from "@/src/components/BrandLogo";
import { WhatsAppIcon } from "@/src/components/WhatsAppIcon";
import { siteSettings } from "@/src/content/siteSettings";
import { languageNames } from "@/src/content/i18n";

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
  const goHome = () => {
    setOpen(false);
    if (window.location.pathname === `/${locale}`) {
      window.history.replaceState(null, "", `/${locale}`);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  const links = [
    [`/${locale}#services`, copy.nav.services],
    [`/${locale}#industries`, copy.nav.industries],
    [`/${locale}/automation`, copy.nav.automation],
    [`/${locale}/demos`, copy.nav.demos],
    [`/${locale}#process`, copy.nav.process],
    [`/${locale}#faq`, copy.nav.faq],
    [`/${locale}#contact`, copy.nav.contact],
  ];
  const homeLabel = locale === "ar" ? "sifrsifr.one — الصفحة الرئيسية" : locale === "de" ? "sifrsifr.one — Startseite" : "sifrsifr.one — Home";
  const menuLabel = locale === "ar" ? "القائمة" : locale === "de" ? "Menü" : "Menu";
  const navigationLabel = locale === "ar" ? "قائمة التنقل الرئيسية" : locale === "de" ? "Hauptnavigation" : "Main navigation";
  return <header className="site-header"><div className="container nav-wrap"><Link href={`/${locale}`} scroll className="wordmark" onClick={goHome} aria-label={homeLabel}><BrandLogo priority /></Link><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><span></span><span></span><span></span><em>{menuLabel}</em></button><nav id="main-nav" className={open ? "nav-links open" : "nav-links"} aria-label={navigationLabel}>{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><div className="nav-actions"><a className="wa-button" href={siteSettings.contact.whatsappHref} target="_blank" rel="noreferrer" aria-label={locale === "ar" ? "تواصل معنا عبر WhatsApp" : locale === "de" ? "Kontakt über WhatsApp" : "Contact us on WhatsApp"}><WhatsAppIcon />WhatsApp</a><button className="lite-toggle" type="button" onClick={toggleLite} aria-pressed={lite}><span aria-hidden="true">◐</span>{lite ? copy.normal : copy.light}</button><div className="language-menu" aria-label={locale === "ar" ? "اختر اللغة" : locale === "de" ? "Sprache wählen" : "Choose language"}>{siteSettings.locale.supported.map(option => <Link className={option === locale ? "active" : ""} aria-current={option === locale ? "page" : undefined} key={option} href={`/${option}`} hrefLang={option} title={languageNames[option]}>{option.toUpperCase()}</Link>)}</div><Link className="button small primary" href={`/${locale}#project-wizard`}>{copy.quote}</Link></div></div></header>;
}
