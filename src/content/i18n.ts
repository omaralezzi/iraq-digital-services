import type { Locale } from "./siteSettings";

export type Localized<T> = Record<Locale, T>;

export function text<T>(locale: Locale, values: Localized<T>): T {
  return values[locale];
}

export const languageNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  de: "Deutsch",
};
