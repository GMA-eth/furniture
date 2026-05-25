import { getProducts, getCategories } from "@/lib/data";

const baseUrl = "https://furni.com";

export default function sitemap() {
  const products = getProducts();
  const categories = getCategories();

  const entries: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: "daily" | "weekly";
    priority: number;
    alternates?: { languages: Record<string, string> };
  }> = [];

  const langs = ["en", "ar"] as const;

  for (const lang of langs) {
    entries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });
    entries.push({
      url: `${baseUrl}/${lang}/catalog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    });

    for (const cat of categories) {
      entries.push({
        url: `${baseUrl}/${lang}/catalog/${cat.slug}`,
        lastModified: cat.updatedAt,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const product of products) {
      entries.push({
        url: `${baseUrl}/${lang}/product/${product.slug}`,
        lastModified: product.updatedAt,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
