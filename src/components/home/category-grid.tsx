import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Category } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface CategoryGridProps {
  categories: Category[];
  dict: Dictionary;
  lang: string;
}

export function CategoryGrid({ categories, dict, lang }: CategoryGridProps) {
  return (
    <section aria-labelledby="categories-heading">
      <div className="mx-auto max-w-screen-2xl px-4">
        <h2 id="categories-heading" className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          {dict.home.shopByRoom}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link key={category.slug} href={`/${lang}/catalog/${category.slug}`} className="group">
              <Card className="overflow-hidden border-0 shadow-none">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <span className="font-heading text-4xl font-bold text-muted-foreground/20">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <CardContent className="px-1 pt-3 pb-0">
                  <h3 className="text-sm font-medium">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {dict.catalog.productsCount.replace("{count}", String(category.productCount)).replace("{plural}", "")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
