import { getProduct, getBestsellers, getCategory, getProducts } from "@/lib/data";
import { getLocalizedProduct, getLocalizedCategory } from "@/lib/data-localized";
import { productJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/product/breadcrumbs";
import { ImageGallery } from "@/components/product/image-gallery";
import { AddToCart } from "@/components/product/add-to-cart";
import { ProductTabs } from "@/components/product/product-details";
import { FaqAccordion } from "@/components/product/faq-accordion";
import { RelatedProducts } from "@/components/product/related-products";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { Star } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

const baseUrl = "https://furni.com";

export function generateStaticParams() {
  const products = getProducts();
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of locales) {
    for (const p of products) {
      params.push({ lang, slug: p.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  const localized = getLocalizedProduct(product, lang as Locale);
  const primaryImage = localized.images.find((i) => i.isPrimary) ?? localized.images[0];

  return {
    title: localized.seoTitle ?? localized.name,
    description: localized.seoDescription,
    alternates: {
      canonical: `${baseUrl}/${lang}/product/${localized.slug}`,
      languages: { en: `/en/product/${localized.slug}`, ar: `/ar/product/${localized.slug}` },
    },
    openGraph: {
      title: localized.seoTitle ?? localized.name,
      description: localized.seoDescription,
      images: [{ url: primaryImage.src, width: primaryImage.width, height: primaryImage.height, alt: primaryImage.alt }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const dict = await getDictionary(lang as Locale);
  const localized = getLocalizedProduct(product, lang as Locale);
  const related = getBestsellers()
    .filter((p) => p.id !== localized.id)
    .slice(0, 4)
    .map((p) => getLocalizedProduct(p, lang as Locale));
  const category = getLocalizedCategory(getCategory(localized.category)!, lang as Locale);

  const breadcrumbItems = [
    { name: dict.product.breadcrumbHome, item: `${baseUrl}/${lang}` },
    { name: category.name, item: `${baseUrl}/${lang}/catalog/${localized.category}` },
    { name: localized.name, item: `${baseUrl}/${lang}/product/${localized.slug}` },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd(localized, baseUrl),
            breadcrumbJsonLd(breadcrumbItems),
            faqJsonLd(localized.faq),
          ]),
        }}
      />

      <Breadcrumbs
        items={[
          { label: dict.product.breadcrumbHome, href: "/" },
          { label: category.name, href: `/catalog/${localized.category}` },
          { label: localized.name, href: `/product/${localized.slug}` },
        ]}
        lang={lang}
        dict={dict}
      />

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ImageGallery images={localized.images} productName={localized.name} dict={dict} />

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">{localized.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="size-4 fill-primary text-primary" data-icon="inline-start" aria-hidden="true" />
                <span className="text-sm font-medium">{localized.rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-muted-foreground">({localized.reviewCount} {dict.product.reviews})</span>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-bold tabular-nums">{formatCurrency(localized.price)}</span>
              {localized.compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through tabular-nums">{formatCurrency(localized.compareAtPrice)}</span>
              )}
            </div>
            {!localized.inStock && (
              <Badge variant="destructive" className="mt-3">{dict.product.outOfStock}</Badge>
            )}
          </div>

          <AddToCart product={localized} dict={dict} />

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            {localized.leadTime && <p>{localized.leadTime}</p>}
            {localized.shippingCost !== undefined && localized.shippingCost > 0 && (
              <p>{dict.product.shippingLabel.replace("{cost}", formatCurrency(localized.shippingCost))}</p>
            )}
            {localized.freeShippingThreshold && (
              <p>{dict.product.freeShippingOnOrders.replace("{amount}", formatCurrency(localized.freeShippingThreshold))}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ProductTabs product={localized} dict={dict} />
      </div>

      {localized.faq.length > 0 && (
        <div className="mt-16 max-w-2xl">
          <FaqAccordion faq={localized.faq} dict={dict} />
        </div>
      )}

      <div className="mt-20">
        <RelatedProducts products={related} dict={dict} lang={lang} />
      </div>
    </div>
  );
}
