import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/src/content/siteSettings";
import { legalDocuments, legalSources } from "@/src/content/legalContent";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";

export function generateStaticParams() { return ["ar", "en"].flatMap(locale => legalDocuments.map(doc => ({ locale, slug: doc.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale)) return {}; const doc = legalDocuments.find(x => x.slug === slug); return doc ? { title: doc.title[locale], description: doc.summary[locale], robots: { index: false, follow: true } } : {}; }
export default async function LegalPage({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale, slug } = await params; if (!isLocale(locale)) notFound(); const doc = legalDocuments.find(x => x.slug === slug); if (!doc) notFound(); const ar = locale === "ar"; return <><SiteHeader locale={locale} /><main className="legal-page container"><Link className="back-link" href={`/${locale}`}>← {ar ? "الرئيسية" : "Home"}</Link><span className="legal-badge">{ar ? "مسودة تحتاج إلى مراجعة قانونية" : "Draft requiring legal review"}</span><h1>{doc.title[locale]}</h1><p className="legal-summary">{doc.summary[locale]}</p>{doc.sections.map(section => <section key={section.title[locale]}><h2>{section.title[locale]}</h2>{section.paragraphs[locale].map(p => <p key={p}>{p}</p>)}</section>)}{slug === "legal-review" && <section><h2>{ar ? "المصادر الرسمية التي جرت مراجعتها" : "Official sources consulted"}</h2><ul className="source-list">{legalSources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>}<p className="review-date">{ar ? "تاريخ آخر مراجعة للمصادر: 11 أغسطس 2026" : "Sources last reviewed: 11 August 2026"}</p></main><SiteFooter locale={locale} /></>; }
