"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, useUpdateQuantity, useRemoveFromCart } from "@/lib/cart";
import { formatCurrency, cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dict: Dictionary;
  lang: string;
}

export function CartDrawer({ open, onOpenChange, dict, lang }: CartDrawerProps) {
  const { items, itemCount, subtotal } = useCart();
  const updateQuantity = useUpdateQuantity();
  const removeFromCart = useRemoveFromCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>
            {dict.cart.yourCart}{itemCount > 0 ? ` (${itemCount})` : ""}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <Empty>
              <EmptyHeader>
                <EmptyTitle>{dict.cart.empty}</EmptyTitle>
                <EmptyDescription>
                  {dict.cart.emptyDescShort}
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Link
                  href={`/${lang}/catalog`}
                  className={cn(buttonVariants())}
                  onClick={() => onOpenChange(false)}
                >
                  {dict.cart.shopNow}
                </Link>
              </EmptyContent>
            </Empty>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="flex flex-col gap-4 px-0.5">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.color}-${item.size ?? "nosize"}`} className="flex gap-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link
                            href={`/${lang}/product/${item.slug}`}
                            onClick={() => onOpenChange(false)}
                            className="text-sm font-medium leading-snug hover:underline"
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-muted-foreground">
                            {item.color}{item.size ? ` / ${item.size}` : ""}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8"
                          onClick={() => removeFromCart(item.productId, item.color, item.size)}
                          aria-label={dict.cart.removeItem.replace("{name}", item.name)}
                        >
                          <Trash2 data-icon="inline-start" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1 rounded-lg border border-border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            onClick={() =>
                              updateQuantity(item.productId, item.color, item.size, item.quantity - 1)
                            }
                            aria-label={dict.cart.decreaseQty}
                          >
                            <Minus data-icon="inline-start" />
                          </Button>
                          <span className="w-8 text-center text-sm tabular-nums">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            onClick={() =>
                              updateQuantity(item.productId, item.color, item.size, item.quantity + 1)
                            }
                            aria-label={dict.cart.increaseQty}
                          >
                            <Plus data-icon="inline-start" />
                          </Button>
                        </div>
                        <p className="text-sm font-medium tabular-nums">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{dict.cart.subtotal}</span>
                <span className="font-medium tabular-nums">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{dict.cart.shippingCalc}</p>

              <SheetFooter className="mt-4">
                <Link
                  href={`/${lang}/checkout`}
                  className={cn(buttonVariants({ size: "lg" }), "w-full inline-flex")}
                  onClick={() => onOpenChange(false)}
                >
                  {dict.cart.checkout}
                </Link>
                <Link
                  href={`/${lang}/cart`}
                  className={cn(buttonVariants({ variant: "outline" }), "w-full inline-flex")}
                  onClick={() => onOpenChange(false)}
                >
                  {dict.cart.viewCart}
                </Link>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
