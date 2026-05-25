import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import { buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface ProductGridProps {
  products: Product[];
  dict: Dictionary;
  lang: string;
}

export function ProductGrid({ products, dict, lang }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>{dict.catalog.noProducts}</EmptyTitle>
            <EmptyDescription>
              {dict.catalog.noProductsDesc}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Link href={`/${lang}/catalog`} className={cn(buttonVariants({ variant: "outline" }))}>
              {dict.catalog.clearFilters}
            </Link>
          </EmptyContent>
        </Empty>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <p className="mb-6 text-sm text-muted-foreground">
        {dict.catalog.productsCount
          .replace("{count}", String(products.length))
          .replace("{plural}", products.length !== 1 ? "s" : "")}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} dict={dict} lang={lang} />
        ))}
      </div>
    </div>
  );
}
