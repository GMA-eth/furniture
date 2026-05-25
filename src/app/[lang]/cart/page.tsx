import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { CartPageClient } from "./cart-page-client";

interface CartPageProps {
  params: Promise<{ lang: string }>;
}

export default async function CartPage({ params }: CartPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <CartPageClient dict={dict} lang={lang} />;
}
