import { Suspense } from "react";
import { getFilteredProducts, getCategories, getCategory, getPriceRange } from "@/lib/data";
import { getLocalizedProduct, getLocalizedCategory } from "@/lib/data-localized";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { ProductGrid } from "@/components/catalog/product-grid";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import type { CatalogFilters } from "@/types";
import type { Metadata } from "next";

const baseUrl = "https://furni.com";

export function generateStaticParams() {
  const cats = getCategories();
  const params: Array<{ lang: string; category: string }> = [];
  for (const lang of locales) {
    for (const cat of cats) {
      params.push({ lang, category: cat.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; category: string }> }): Promise<Metadata> {
  const { lang, category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not Found" };

  return {
    title: `${category.name} | Furni`,
    description: category.description,
    alternates: {
      canonical: `${baseUrl}/${lang}/catalog/${slug}`,
      languages: { en: `/en/catalog/${slug}`, ar: `/ar/catalog/${slug}` },
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ lang: string; category: string }> }) {
  const { lang, category: slug } = await params;
  const dict = await getDictionary(lang as Locale);
  const rawCategory = getCategory(slug);
  if (!rawCategory) return <p>Not found</p>;
  const category = getLocalizedCategory(rawCategory, lang as Locale);
  const filters: CatalogFilters = { category: slug };
  const products = getFilteredProducts(filters).map((p) => getLocalizedProduct(p, lang as Locale));
  const categories = getCategories().map((c) => getLocalizedCategory(c, lang as Locale));
  const priceRange = getPriceRange();

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-12">
      <h1 className="font-heading text-3xl font-bold tracking-tight">{category.name}</h1>
      <p className="mt-2 text-muted-foreground">{category.description}</p>
      <div className="mt-8 flex gap-8">
        <Suspense fallback={null}>
          <FilterSidebar categories={categories} priceRange={priceRange} activeFilters={filters} basePath={`/${lang}/catalog/${slug}`} dict={dict} lang={lang} />
        </Suspense>
        <ProductGrid products={products} dict={dict} lang={lang} />
      </div>
    </div>
  );
}
