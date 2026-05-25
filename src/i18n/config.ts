export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { name: string; dir: "ltr" | "rtl"; label: string }> = {
  en: { name: "English", dir: "ltr", label: "EN" },
  ar: { name: "العربية", dir: "rtl", label: "عربي" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
