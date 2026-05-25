"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useAddToCart } from "@/lib/cart";
import type { Product } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface AddToCartProps {
  product: Product;
  dict: Dictionary;
}

export function AddToCart({ product, dict }: AddToCartProps) {
  const [selectedColor, setSelectedColor] = useState(product.colorVariants[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizeVariants?.[0]?.label ?? "");
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAddToCart();

  const activeColor = product.colorVariants.find((c) => c.name === selectedColor);
  const primaryImage = activeColor?.images[0] ?? product.images[0];

  const activeSize = product.sizeVariants?.find((s) => s.label === selectedSize);
  const price =
    product.price + (activeSize?.priceModifier ?? 0);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: primaryImage.src,
      color: selectedColor,
      size: product.sizeVariants ? selectedSize : undefined,
      price,
      quantity,
    }, {
      added: dict.toast?.addedToCart ?? "Added to cart",
      viewCart: dict.toast?.viewCart ?? "View cart",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      {product.colorVariants.length > 0 && (
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            {dict.product.color}: <span className="text-muted-foreground">{selectedColor}</span>
          </label>
          <ToggleGroup
            value={[selectedColor]}
            onValueChange={(val) => val && val.length > 0 && setSelectedColor(val[0])}
            className="flex-wrap justify-start"
          >
            {product.colorVariants.map((color) => (
              <ToggleGroupItem
                key={color.name}
                value={color.name}
                aria-label={color.name}
                className="size-10 rounded-full border-2 p-0 data-[state=on]:border-primary"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </ToggleGroup>
        </div>
      )}

      {product.sizeVariants && product.sizeVariants.length > 0 && (
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            {dict.product.size}: <span className="text-muted-foreground">{selectedSize}</span>
          </label>
          <ToggleGroup
            value={[selectedSize]}
            onValueChange={(val) => val && val.length > 0 && setSelectedSize(val[0])}
            className="flex-wrap justify-start"
          >
            {product.sizeVariants.map((size) => (
              <ToggleGroupItem
                key={size.label}
                value={size.label}
                className="px-4 py-2"
              >
                {size.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{dict.product.quantity}</label>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-lg border border-border">
            <Button
              variant="ghost"
              size="icon"
              className="size-9"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              aria-label={dict.cart.decreaseQty}
            >
              <Minus data-icon="inline-start" />
            </Button>
            <span className="w-10 text-center text-sm tabular-nums">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="size-9"
              onClick={() => setQuantity(quantity + 1)}
              aria-label={dict.cart.increaseQty}
            >
              <Plus data-icon="inline-start" />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="lg"
        className="mt-2"
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        <ShoppingCart data-icon="inline-start" />
        {product.inStock ? dict.product.addToCart : dict.product.outOfStock}
      </Button>
    </div>
  );
}
