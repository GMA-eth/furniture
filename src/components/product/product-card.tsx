import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { formatCurrency, formatRating } from "@/lib/utils";
import type { Product } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  dict: Dictionary;
  lang: string;
}

export function ProductCard({ product, priority = false, dict, lang }: ProductCardProps) {
  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];

  return (
    <Link href={`/${lang}/product/${product.slug}`} className="group">
      <Card className="overflow-hidden border-0 bg-transparent shadow-none">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
          />
          {product.compareAtPrice && (
            <Badge variant="secondary" className="absolute start-3 top-3">
              {dict.badge.sale}
            </Badge>
          )}
          {product.tags.includes("new") && !product.compareAtPrice && (
            <Badge variant="outline" className="absolute start-3 top-3 bg-background/80">
              {dict.badge.new}
            </Badge>
          )}
        </div>
        <CardContent className="px-1 pt-3 pb-0">
          <h3 className="text-sm font-medium leading-snug truncate">{product.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-base font-semibold tabular-nums">{formatCurrency(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through tabular-nums">
                {formatCurrency(product.compareAtPrice)}
              </span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-1">
            <Star className="size-3 fill-primary text-primary" data-icon="inline-start" aria-hidden="true" />
            <span className="text-xs font-medium">{formatRating(product.rating)}</span>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
