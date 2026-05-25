import { Suspense } from "react";
import { getFilteredProducts, getCategories, getPriceRange } from "@/lib/data";
import { getLocalizedProduct, getLocalizedCategory } from "@/lib/data-localized";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { ProductGrid } from "@/components/catalog/product-grid";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

const baseUrl = "https://furni.com";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.catalog.allFurniture,
    description: dict.site.tagline,
    alternates: {
      canonical: `${baseUrl}/${lang}/catalog`,
      languages: { en: "/en/catalog", ar: "/ar/catalog" },
    },
  };
}

export default async function CatalogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const products = getFilteredProducts({}).map((p) => getLocalizedProduct(p, lang as Locale));
  const categories = getCategories().map((c) => getLocalizedCategory(c, lang as Locale));
  const priceRange = getPriceRange();

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-12">
      <h1 className="font-heading text-3xl font-bold tracking-tight">{dict.catalog.allFurniture}</h1>
      <div className="mt-8 flex gap-8">
        <Suspense fallback={null}>
          <FilterSidebar categories={categories} priceRange={priceRange} activeFilters={{}} basePath={`/${lang}/catalog`} dict={dict} lang={lang} />
        </Suspense>
        <ProductGrid products={products} dict={dict} lang={lang} />
      </div>
    </div>
  );
}
