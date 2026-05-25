import { getProducts, getCategories } from "@/lib/data";

const baseUrl = "https://furni.com";
const staticPages = ["about", "contact", "shipping", "returns", "assembly", "warranty", "sustainability", "careers", "press", "privacy", "terms"];

export const dynamic = "force-static";

export default function sitemap() {
  const products = getProducts();
  const categories = getCategories();
  const langs = ["en", "ar"] as const;

  const entries: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: "daily" | "weekly" | "monthly";
    priority: number;
  }> = [];

  for (const lang of langs) {
    entries.push({ url: `${baseUrl}/${lang}`, lastModified: new Date(), changeFrequency: "daily", priority: 1 });
    entries.push({ url: `${baseUrl}/${lang}/catalog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 });

    for (const cat of categories) {
      entries.push({ url: `${baseUrl}/${lang}/catalog/${cat.slug}`, lastModified: cat.updatedAt, changeFrequency: "weekly", priority: 0.8 });
    }
    for (const p of products) {
      entries.push({ url: `${baseUrl}/${lang}/product/${p.slug}`, lastModified: p.updatedAt, changeFrequency: "weekly", priority: 0.7 });
    }
    for (const page of staticPages) {
      entries.push({ url: `${baseUrl}/${lang}/${page}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 });
    }
  }

  return entries;
}
