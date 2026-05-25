import { Product, FaqItem, Review } from "@/types";

interface BreadcrumbItem {
  name: string;
  item: string;
}

export function productJsonLd(product: Product, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: product.images.map((img) => img.src),
    sku: product.id,
    brand: { "@type": "Brand", name: "Furni" },
    offers: {
      "@type": "Offer",
      price: (product.price / 100).toFixed(2),
      priceCurrency: "USD",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      ...(product.compareAtPrice && {
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
      }),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: product.shippingCost
          ? { "@type": "MonetaryAmount", value: (product.shippingCost / 100).toFixed(2), currency: "USD" }
          : { "@type": "MonetaryAmount", value: "0.00", currency: "USD" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toFixed(1),
      reviewCount: product.reviewCount,
    },
    review: product.reviews.slice(0, 3).map((r: Review) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      datePublished: r.date,
    })),
    ...(product.colorVariants.length > 0 && {
      color: product.colorVariants.map((c) => c.name),
    }),
    ...(product.sizeVariants && {
      size: product.sizeVariants.map((s) => s.label),
    }),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function faqJsonLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function organizationJsonLd(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Furni",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      "https://instagram.com/furni",
      "https://pinterest.com/furni",
    ],
  };
}

export function websiteJsonLd(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Furni",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/catalog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function collectionJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Furni",
      url,
    },
  };
}
