"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";
import { siteSettings } from "@/src/content/siteSettings";
import { InstallAppPrompt } from "@/src/components/InstallAppPrompt";
import { WhatsAppIcon } from "@/src/components/WhatsAppIcon";
import { languageNames } from "@/src/content/i18n";

export function LocaleRuntime({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const [suggestion, setSuggestion] = useState<Locale | null>(null);
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [locale]);
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("preferredLocale", locale);
    const savedLite = localStorage.getItem("liteMode") === "true";
    root.dataset.lite = String(savedLite);
    const query = new URLSearchParams(window.location.search);
    const ref = query.get("ref");
    if (ref && /^[a-zA-Z0-9_-]{2,32}$/.test(ref)) localStorage.setItem("referralCode", ref);
    const browserLanguage = navigator.language.toLowerCase();
    const browserLocale: Locale = browserLanguage.startsWith("ar") ? "ar" : browserLanguage.startsWith("de") ? "de" : "en";
    if (browserLocale !== locale && !sessionStorage.getItem("localeSuggestionDismissed")) queueMicrotask(() => setSuggestion(browserLocale));
  }, [locale]);
  const earlyLocaleScript = `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(locale === "ar" ? "rtl" : "ltr")};`;
  const contactLabel = locale === "ar" ? "تواصل معنا" : locale === "de" ? "Kontakt" : "Contact us";
  const suggestionText = locale === "ar" ? `يبدو أن لغة متصفحك هي ${languageNames[suggestion ?? "en"]}.` : locale === "de" ? `Ihre Browsersprache scheint ${languageNames[suggestion ?? "en"]} zu sein.` : `Your browser language appears to be ${languageNames[suggestion ?? "en"]}.`;
  return <div className="site-shell" data-locale={locale}><script dangerouslySetInnerHTML={{ __html: earlyLocaleScript }} /><InstallAppPrompt locale={locale} />{children}<a className="whatsapp-float" href={siteSettings.contact.whatsappHref} target="_blank" rel="noreferrer" aria-label={`${contactLabel} — WhatsApp`}><WhatsAppIcon /><span>{contactLabel}</span></a>{suggestion && <aside className="locale-suggestion" role="status"><span>{suggestionText}</span><Link href={`/${suggestion}`}>{languageNames[suggestion]}</Link><button type="button" aria-label={locale === "ar" ? "إغلاق الاقتراح" : locale === "de" ? "Vorschlag schließen" : "Dismiss suggestion"} onClick={() => { sessionStorage.setItem("localeSuggestionDismissed", "true"); setSuggestion(null); }}>×</button></aside>}</div>;
}
