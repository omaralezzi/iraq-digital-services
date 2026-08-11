import { notFound } from "next/navigation";
import { isLocale } from "@/src/content/siteSettings";
import { LocaleRuntime } from "@/src/components/LocaleRuntime";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LocaleRuntime locale={locale}>{children}</LocaleRuntime>;
}
