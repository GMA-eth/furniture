import { getFilteredProducts, getCategories, getCategory, getPriceRange } from "@/lib/data";
import { getLocalizedProduct, getLocalizedCategory } from "@/lib/data-localized";
import { collectionJsonLd } from "@/lib/structured-data";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { ProductGrid } from "@/components/catalog/product-grid";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { CatalogFilters } from "@/types";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ lang: string; category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const baseUrl = "https://furni.com";

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { lang, category: slug } = await params;
  const rawCategory = getCategory(slug);
  if (!rawCategory) return { title: "Not Found" };
  const category = getLocalizedCategory(rawCategory, lang as Locale);

  return {
    title: `${category.name} | Furni`,
    description: category.description,
    alternates: {
      canonical: `${baseUrl}/${lang}/catalog/${category.slug}`,
      languages: { en: `/en/catalog/${category.slug}`, ar: `/ar/catalog/${category.slug}` },
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { lang, category: slug } = await params;
  const dict = await getDictionary(lang as Locale);
  const rawCategory = getCategory(slug);
  if (!rawCategory) notFound();
  const category = getLocalizedCategory(rawCategory, lang as Locale);

  const sp = await searchParams;
  const filters: CatalogFilters = {
    category: slug,
    sort: typeof sp.sort === "string" ? sp.sort : undefined,
    page: typeof sp.page === "string" ? parseInt(sp.page, 10) : undefined,
    ...(sp.minPrice !== undefined && { minPrice: Number(sp.minPrice) }),
    ...(sp.maxPrice !== undefined && { maxPrice: Number(sp.maxPrice) }),
    ...(sp.inStock !== undefined && { inStock: sp.inStock === "true" }),
    ...(sp.rating !== undefined && { rating: Number(sp.rating) }),
  };

  const products = getFilteredProducts(filters).map((p) => getLocalizedProduct(p, lang as Locale));
  const categories = getCategories().map((c) => getLocalizedCategory(c, lang as Locale));
  const priceRange = getPriceRange();

  const collectionSchema = collectionJsonLd(
    category.name,
    category.description,
    `${baseUrl}/${lang}/catalog/${category.slug}`
  );

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <h1 className="font-heading text-3xl font-bold tracking-tight">{category.name}</h1>
      <p className="mt-2 text-muted-foreground">{category.description}</p>

      <div className="mt-8 flex gap-8">
        <FilterSidebar
          categories={categories}
          priceRange={priceRange}
          activeFilters={filters}
          basePath={`/${lang}/catalog/${category.slug}`}
          dict={dict}
          lang={lang}
        />
        <ProductGrid products={products} dict={dict} lang={lang} />
      </div>
    </div>
  );
}
