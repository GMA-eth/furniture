"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, useUpdateQuantity, useRemoveFromCart } from "@/lib/cart";
import { formatCurrency, cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

interface CartPageClientProps {
  dict: Dictionary;
  lang: string;
}

export function CartPageClient({ dict, lang }: CartPageClientProps) {
  const { items, itemCount, subtotal } = useCart();
  const updateQuantity = useUpdateQuantity();
  const removeFromCart = useRemoveFromCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-screen-2xl px-4 py-20">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>{dict.cart.empty}</EmptyTitle>
            <EmptyDescription>{dict.cart.emptyDesc}</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Link href={`/${lang}/catalog`} className={cn(buttonVariants())}>
              {dict.cart.shopNow}
            </Link>
          </EmptyContent>
        </Empty>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
        {dict.cart.title} ({itemCount})
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {items.map((item) => (
            <div key={`${item.productId}-${item.color}-${item.size ?? "nosize"}`} className="flex gap-4 rounded-lg border border-border p-4">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div>
                    <Link href={`/${lang}/product/${item.slug}`} className="text-sm font-medium hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {item.color}{item.size ? ` / ${item.size}` : ""}
                    </p>
                  </div>
                  <p className="text-sm font-medium tabular-nums">{formatCurrency(item.price * item.quantity)}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 rounded-lg border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity - 1)}
                      aria-label={dict.cart.decreaseQty}
                    >
                      <Minus data-icon="inline-start" />
                    </Button>
                    <span className="w-8 text-center text-sm tabular-nums">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity + 1)}
                      aria-label={dict.cart.increaseQty}
                    >
                      <Plus data-icon="inline-start" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.productId, item.color, item.size)}
                  >
                    <Trash2 data-icon="inline-start" /> {dict.cart.remove}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold">{dict.cart.orderSummary}</h2>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{dict.cart.subtotal}</span>
              <span className="tabular-nums">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{dict.checkout.shipping}</span>
              <span>{dict.cart.shippingCalculated}</span>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between font-medium">
            <span>{dict.cart.total}</span>
            <span className="tabular-nums">{formatCurrency(subtotal)}</span>
          </div>
          <Link href={`/${lang}/checkout`} className={cn(buttonVariants({ size: "lg" }), "mt-6 w-full inline-flex")}>
            {dict.cart.proceedToCheckout}
          </Link>
          <Link href={`/${lang}/catalog`} className={cn(buttonVariants({ variant: "outline" }), "mt-3 w-full inline-flex")}>
            {dict.cart.continueShopping}
          </Link>
        </div>
      </div>
    </div>
  );
}
