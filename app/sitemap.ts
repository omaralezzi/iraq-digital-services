import type { MetadataRoute } from "next";
import { services } from "@/src/content/services";
import { industries } from "@/src/content/industries";
import { siteSettings } from "@/src/content/siteSettings";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sifrsifr.one";
  const routes = ["", "/automation", "/demos", ...services.map(s => `/services/${s.slug}`), ...industries.map(i => `/industries/${i.slug}`)];
  return siteSettings.locale.supported.flatMap(locale => routes.map(route => ({ url: `${base}/${locale}${route}`, changeFrequency: route ? "monthly" as const : "weekly" as const, priority: route ? 0.7 : 1 })));
}
