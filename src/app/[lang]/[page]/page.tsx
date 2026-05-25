import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";

const pageKeys = ["about", "contact", "shipping", "returns", "assembly", "warranty", "sustainability", "careers", "press", "privacy", "terms"];

const pageLabels: Record<string, { en: string; ar: string }> = {
  about: { en: "About Us", ar: "من نحن" },
  contact: { en: "Contact Us", ar: "اتصل بنا" },
  shipping: { en: "Shipping & Delivery", ar: "الشحن والتوصيل" },
  returns: { en: "Returns & Exchanges", ar: "الإرجاع والاستبدال" },
  assembly: { en: "Assembly Guides", ar: "أدلة التركيب" },
  warranty: { en: "Warranty", ar: "الضمان" },
  sustainability: { en: "Sustainability", ar: "الاستدامة" },
  careers: { en: "Careers", ar: "وظائف" },
  press: { en: "Press", ar: "صحافة" },
  privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  terms: { en: "Terms of Service", ar: "شروط الخدمة" },
};

export function generateStaticParams() {
  const params: Array<{ lang: string; page: string }> = [];
  for (const lang of locales) {
    for (const page of pageKeys) {
      params.push({ lang, page });
    }
  }
  return params;
}

export default async function StaticPage({ params }: { params: Promise<{ lang: string; page: string }> }) {
  const { lang, page } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        {pageLabels[page]?.[lang as "en" | "ar"] ?? page.replace(/-/g, " ")}
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {lang === "ar"
          ? "محتوى هذه الصفحة قادم قريباً."
          : "This page content is coming soon."}
      </p>
      <div className="mt-8">
        <Link href={`/${lang}/catalog`} className="text-sm text-primary hover:underline">
          {lang === "ar" ? "تصفح مجموعة الأثاث ←" : "Browse our furniture collection →"}
        </Link>
      </div>
    </div>
  );
}
