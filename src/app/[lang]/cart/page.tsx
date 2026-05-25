import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import { CartPageClient } from "./cart-page-client";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function CartPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <CartPageClient dict={dict} lang={lang} />;
}
