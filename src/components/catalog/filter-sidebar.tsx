"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { formatCurrency } from "@/lib/utils";
import type { Category, CatalogFilters, PriceRange } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface FilterSidebarProps {
  categories: Category[];
  priceRange: PriceRange;
  activeFilters: CatalogFilters;
  basePath: string;
  dict: Dictionary;
  lang: string;
}

export function FilterSidebar({ categories, priceRange, activeFilters, basePath, dict, lang }: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string | undefined | boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === undefined || value === false) {
      params.delete(key);
    } else if (typeof value === "boolean") {
      params.set(key, "true");
    } else {
      params.set(key, value);
    }
    router.push(`/${lang}${basePath}?${params.toString()}`, { scroll: false });
  };

  const clearAll = () => {
    router.push(`/${lang}${basePath}`, { scroll: false });
  };

  const hasAnyFilter =
    activeFilters.minPrice !== undefined ||
    activeFilters.maxPrice !== undefined ||
    activeFilters.inStock ||
    activeFilters.rating !== undefined;

  const FilterContent = () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{dict.catalog.filters}</span>
        {hasAnyFilter && (
          <Button variant="ghost" size="sm" onClick={clearAll}>
            <X data-icon="inline-start" /> {dict.catalog.clearAll}
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{dict.catalog.category}</span>
        {categories.map((cat) => (
          <div key={cat.slug} className="flex items-center gap-2">
            <Checkbox
              id={`cat-${cat.slug}`}
              checked={activeFilters.category === cat.slug}
              onCheckedChange={(checked) => {
                router.push(checked ? `/${lang}/catalog/${cat.slug}` : `/${lang}/catalog`, { scroll: false });
              }}
            />
            <Label htmlFor={`cat-${cat.slug}`} className="text-sm font-normal cursor-pointer">
              {cat.name}
              <span className="ms-1 text-xs text-muted-foreground">({cat.productCount})</span>
            </Label>
          </div>
        ))}
      </div>

      <Separator />

      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{dict.catalog.price}</span>
        <Slider
          defaultValue={[
            activeFilters.minPrice ?? priceRange.min,
            activeFilters.maxPrice ?? priceRange.max,
          ]}
          min={priceRange.min}
          max={priceRange.max}
          step={1000}
          onValueChange={(value) => {
            const [min, max] = Array.isArray(value) ? value : [value, value];
            const params = new URLSearchParams(searchParams.toString());
            params.set("minPrice", String(min));
            params.set("maxPrice", String(max));
            router.push(`/${lang}${basePath}?${params.toString()}`, { scroll: false });
          }}
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatCurrency(activeFilters.minPrice ?? priceRange.min)}</span>
          <span>{formatCurrency(activeFilters.maxPrice ?? priceRange.max)}</span>
        </div>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
          {dict.catalog.inStockOnly}
        </Label>
        <Switch
          id="in-stock"
          checked={activeFilters.inStock ?? false}
          onCheckedChange={(checked) => updateFilter("inStock", checked)}
        />
      </div>

      <Separator />

      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{dict.catalog.rating}</span>
        {[4, 3, 2].map((rating) => (
          <div key={rating} className="flex items-center gap-2">
            <Checkbox
              id={`rating-${rating}`}
              checked={activeFilters.rating === rating}
              onCheckedChange={(checked) => updateFilter("rating", checked ? String(rating) : undefined)}
            />
            <Label htmlFor={`rating-${rating}`} className="text-sm font-normal cursor-pointer">
              {dict.common.starRating.replace("{rating}", `${rating}+`)}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden w-60 shrink-0 lg:block">
        <FilterContent />
      </aside>

      <div className="mb-4 lg:hidden">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" size="sm" />}>
            <SlidersHorizontal data-icon="inline-start" /> {dict.catalog.filters}
          </SheetTrigger>
          <SheetContent side={lang === "ar" ? "right" : "left"} className="w-72 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>{dict.catalog.filters}</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
