import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { CheckoutPageClient } from "./checkout-page-client";

interface CheckoutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <CheckoutPageClient dict={dict} lang={lang} />;
}
