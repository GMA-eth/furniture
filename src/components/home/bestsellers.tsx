import { ProductCard } from "@/components/product/product-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface BestsellersProps {
  products: Product[];
  dict: Dictionary;
  lang: string;
}

export function Bestsellers({ products, dict, lang }: BestsellersProps) {
  return (
    <section aria-labelledby="bestsellers-heading">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 id="bestsellers-heading" className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.home.bestsellers}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{dict.home.bestsellersSubtitle}</p>
          </div>
          <Link href={`/${lang}/catalog?sort=rating`} className={cn(buttonVariants({ variant: "outline" }))}>
            {dict.home.viewAll}
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} dict={dict} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
