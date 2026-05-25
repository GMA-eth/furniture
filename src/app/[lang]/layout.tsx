import { type Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawerProvider } from "@/components/cart/cart-drawer-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { HtmlDir } from "@/components/layout/html-dir";
import { getDictionary } from "@/i18n/dictionaries";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const baseUrl = "https://furni.com";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: {
      default: `${dict.site.name} — ${dict.site.tagline}`,
      template: `%s | ${dict.site.name}`,
    },
    description: dict.site.tagline,
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: { en: "/en", ar: "/ar" },
    },
    openGraph: {
      type: "website",
      siteName: dict.site.name,
      title: `${dict.site.name} — ${dict.site.tagline}`,
      description: dict.site.tagline,
      images: [{ url: "/og-default.svg", width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const meta = localeMeta[locale];

  return (
    <>
      <HtmlDir lang={locale} dir={meta.dir} />
      <TooltipProvider>
        <CartDrawerProvider dict={dict} lang={locale}>
          <Header lang={locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer lang={locale} dict={dict} />
          <LanguageSwitcher lang={locale} dict={dict} />
        </CartDrawerProvider>
        <Toaster position={locale === "ar" ? "bottom-left" : "bottom-right"} richColors />
      </TooltipProvider>
    </>
  );
}

export type { Dictionary };
