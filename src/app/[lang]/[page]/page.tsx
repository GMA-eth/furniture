import Link from "next/link";
import { locales } from "@/i18n/config";

const pageKeys = ["about", "contact", "shipping", "returns", "assembly", "warranty", "sustainability", "careers", "press", "privacy", "terms"];

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
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl font-bold tracking-tight capitalize">
        {page.replace(/-/g, " ")}
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        This is the {page.replace(/-/g, " ")} page. Content coming soon.
      </p>
      <div className="mt-8">
        <Link href={`/${lang}/catalog`} className="text-sm text-primary hover:underline">
          Browse our furniture collection →
        </Link>
      </div>
    </div>
  );
}
