import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import { CheckoutPageClient } from "./checkout-page-client";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function CheckoutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <CheckoutPageClient dict={dict} lang={lang} />;
}
