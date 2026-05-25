import { getBestsellers, getCategories } from "@/lib/data";
import { getLocalizedProduct, getLocalizedCategory } from "@/lib/data-localized";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { Hero } from "@/components/home/hero";
import { CategoryGrid } from "@/components/home/category-grid";
import { Bestsellers } from "@/components/home/bestsellers";
import { Testimonials } from "@/components/home/testimonials";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";

const baseUrl = "https://furni.com";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const categories = getCategories().map((c) => getLocalizedCategory(c, locale));
  const bestsellers = getBestsellers().map((p) => getLocalizedProduct(p, locale));

  return (
    <div className="flex flex-col gap-10 pb-10 sm:gap-14 sm:pb-14 lg:gap-20 lg:pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd(baseUrl), websiteJsonLd(baseUrl)]) }} />
      <Hero dict={dict} lang={lang} />
      <CategoryGrid categories={categories} dict={dict} lang={lang} />
      <Bestsellers products={bestsellers} dict={dict} lang={lang} />
      <Testimonials dict={dict} />
    </div>
  );
}
