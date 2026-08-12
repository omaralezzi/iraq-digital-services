"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";
import { InstallAppPrompt } from "@/src/components/InstallAppPrompt";

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
    const browserLocale: Locale = navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
    if (browserLocale !== locale && !sessionStorage.getItem("localeSuggestionDismissed")) queueMicrotask(() => setSuggestion(browserLocale));
  }, [locale]);
  const earlyLocaleScript = `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(locale === "ar" ? "rtl" : "ltr")};`;
  return <div className="site-shell" data-locale={locale}><script dangerouslySetInnerHTML={{ __html: earlyLocaleScript }} /><InstallAppPrompt locale={locale} />{children}{suggestion && <aside className="locale-suggestion" role="status"><span>{locale === "ar" ? "يبدو أن لغة متصفحك هي الإنجليزية." : "It looks like your browser language is Arabic."}</span><Link href={`/${suggestion}`}>{suggestion === "ar" ? "العربية" : "English"}</Link><button type="button" aria-label={locale === "ar" ? "إغلاق الاقتراح" : "Dismiss suggestion"} onClick={() => { sessionStorage.setItem("localeSuggestionDismissed", "true"); setSuggestion(null); }}>×</button></aside>}</div>;
}
