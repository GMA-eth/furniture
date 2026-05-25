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
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <Link key={category.slug} href={`/${lang}/catalog/${category.slug}`} className="group">
              <Card className="overflow-hidden border-0 shadow-none">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 start-3 end-3">
                    <h3 className="text-sm font-medium text-white">{category.name}</h3>
                    <p className="text-xs text-white/70">
                      {dict.catalog.productsCount.replace("{count}", String(category.productCount)).replace("{plural}", "")}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
