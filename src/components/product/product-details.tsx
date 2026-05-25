"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import type { Product } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatCurrency } from "@/lib/utils";

interface ProductTabsProps {
  product: Product;
  dict: Dictionary;
}

export function ProductTabs({ product, dict }: ProductTabsProps) {
  return (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">{dict.product.details}</TabsTrigger>
        <TabsTrigger value="reviews">{dict.product.reviewsTab} ({product.reviewCount})</TabsTrigger>
        <TabsTrigger value="shipping">{dict.product.shipping}</TabsTrigger>
      </TabsList>

      <TabsContent value="details" className="mt-6 max-w-2xl">
        <div className="flex flex-col gap-6">
          <p className="leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">{dict.product.materials}</h3>
              <ul className="mt-2 flex flex-col gap-1">
                {product.materials.map((m) => (
                  <li key={m} className="text-sm text-muted-foreground">{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{dict.product.dimensions}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {product.dimensions.width} x {product.dimensions.depth} x {product.dimensions.height} {product.dimensions.unit}
              </p>
              {product.weight && (
                <p className="text-sm text-muted-foreground">{dict.product.weight}: {product.weight} {dict.product.weightUnit}</p>
              )}
              {product.assemblyRequired !== undefined && (
                <p className="text-sm text-muted-foreground">
                  {dict.product.assembly}: {product.assemblyRequired ? dict.product.required : dict.product.noneRequired}
                </p>
              )}
            </div>
          </div>

          {product.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold">{dict.product.whyThisPiece}</h3>
              <ul className="mt-2 flex flex-col gap-1">
                {product.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex gap-2">
                    <span aria-hidden="true">&bull;</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.careInstructions && (
            <div>
              <h3 className="text-sm font-semibold">{dict.product.careInstructions}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{product.careInstructions}</p>
            </div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6 max-w-2xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-primary text-primary" data-icon="inline-start" aria-hidden="true" />
              <span className="text-2xl font-bold">{product.rating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-muted-foreground">{product.reviewCount} {dict.product.reviews}</span>
          </div>

          <div className="flex flex-col gap-6">
            {product.reviews.map((review, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="size-3.5 fill-primary text-primary" data-icon="inline-start" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm leading-relaxed">{review.text}</p>
                <p className="text-xs font-medium">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="shipping" className="mt-6 max-w-2xl">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-semibold">{dict.product.shippingMethod}</h3>
            <p className="mt-1 text-sm text-muted-foreground capitalize">
              {product.shippingMethod.replace("-", " ")}
            </p>
          </div>
          {product.leadTime && (
            <div>
              <h3 className="text-sm font-semibold">{dict.product.deliveryTime}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.leadTime}</p>
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold">{dict.product.shippingCost}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.shippingCost && product.shippingCost > 0
                ? formatCurrency(product.shippingCost)
                : dict.common.free}
            </p>
          </div>
          {product.freeShippingThreshold && (
            <div>
              <h3 className="text-sm font-semibold">{dict.product.freeShipping}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {dict.product.onOrdersOver} {formatCurrency(product.freeShippingThreshold)}
              </p>
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
