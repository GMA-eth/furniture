import { getFilteredProducts, getCategories, getCategory, getPriceRange } from "@/lib/data";
import { getLocalizedProduct, getLocalizedCategory } from "@/lib/data-localized";
import { collectionJsonLd } from "@/lib/structured-data";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { ProductGrid } from "@/components/catalog/product-grid";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { CatalogFilters } from "@/types";
import type { Metadata } from "next";

interface CatalogPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const baseUrl = "https://furni.com";

export async function generateMetadata({ params, searchParams }: CatalogPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const sp = await searchParams;
  const categorySlug = typeof sp.category === "string" ? sp.category : undefined;
  const category = categorySlug ? getCategory(categorySlug) : undefined;

  if (category) {
    return {
      title: `${category.name} | ${dictionary.site.name}`,
      description: category.description,
      alternates: {
        canonical: `${baseUrl}/${lang}/catalog/${category.slug}`,
        languages: { en: `/en/catalog/${category.slug}`, ar: `/ar/catalog/${category.slug}` },
      },
    };
  }

  return {
    title: dictionary.catalog.allFurniture,
    description: dictionary.site.tagline,
    alternates: {
      canonical: `${baseUrl}/${lang}/catalog`,
      languages: { en: "/en/catalog", ar: "/ar/catalog" },
    },
  };
}

export default async function CatalogPage({ params, searchParams }: CatalogPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const sp = await searchParams;

  const filters: CatalogFilters = {
    category: typeof sp.category === "string" ? sp.category : undefined,
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
  const rawCategory = filters.category ? getCategory(filters.category) : undefined;
  const category = rawCategory ? getLocalizedCategory(rawCategory, lang as Locale) : undefined;

  const collectionSchema = category
    ? collectionJsonLd(category.name, category.description, `${baseUrl}/${lang}/catalog/${category.slug}`)
    : collectionJsonLd(dict.catalog.allFurniture, dict.site.tagline, `${baseUrl}/${lang}/catalog`);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <h1 className="font-heading text-3xl font-bold tracking-tight">
        {category ? category.name : dict.catalog.allFurniture}
      </h1>
      {category && (
        <p className="mt-2 text-muted-foreground">{category.description}</p>
      )}

      <div className="mt-8 flex gap-8">
        <FilterSidebar
          categories={categories}
          priceRange={priceRange}
          activeFilters={filters}
          basePath={`/${lang}/catalog`}
          dict={dict}
          lang={lang}
        />
        <ProductGrid products={products} dict={dict} lang={lang} />
      </div>
    </div>
  );
}
