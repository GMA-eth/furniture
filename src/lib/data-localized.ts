import type { Product, Category } from "@/types";
import type { Locale } from "@/i18n/config";

export function getLocalizedProduct(product: Product, lang: Locale): Product {
  if (lang === "en" || !product.translations?.[lang]) return product;

  const t = product.translations[lang];
  return {
    ...product,
    name: t.name ?? product.name,
    seoTitle: t.seoTitle ?? product.seoTitle,
    seoDescription: t.seoDescription ?? product.seoDescription,
    description: t.description ?? product.description,
    highlights: t.highlights ?? product.highlights,
    materials: t.materials ?? product.materials,
    faq: t.faq?.map((f, i) => ({
      question: f.question ?? product.faq[i]?.question ?? "",
      answer: f.answer ?? product.faq[i]?.answer ?? "",
    })) ?? product.faq,
    reviews: t.reviews?.map((r, i) => ({
      ...product.reviews[i],
      text: r.text ?? product.reviews[i]?.text ?? "",
    })) ?? product.reviews,
    careInstructions: t.careInstructions ?? product.careInstructions,
    images: t.images
      ? product.images.map((img, i) => ({
          ...img,
          alt: t.images?.[i]?.alt ?? img.alt,
        }))
      : product.images,
    colorVariants: t.colorVariants
      ? product.colorVariants.map((cv, i) => ({
          ...cv,
          name: t.colorVariants?.[i]?.name ?? cv.name,
        }))
      : product.colorVariants,
  };
}

export function getLocalizedCategory(category: Category, lang: Locale): Category {
  if (lang === "en" || !category.translations?.[lang]) return category;

  const t = category.translations[lang];
  return {
    ...category,
    name: t.name ?? category.name,
    description: t.description ?? category.description,
  };
}
