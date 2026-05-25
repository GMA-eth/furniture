"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { useCart } from "@/lib/cart";
import { formatCurrency, cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

interface CheckoutPageClientProps {
  dict: Dictionary;
  lang: string;
}

export function CheckoutPageClient({ dict, lang }: CheckoutPageClientProps) {
  const { items, subtotal } = useCart();
  const [step, setStep] = useState<"shipping" | "done">("shipping");

  if (items.length === 0 && step !== "done") {
    return (
      <div className="mx-auto max-w-screen-2xl px-4 py-20">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>{dict.cart.empty}</EmptyTitle>
            <EmptyDescription>{dict.cart.emptyDescShort}</EmptyDescription>
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

  if (step === "done") {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl">&#10003;</span>
          <h1 className="font-heading text-3xl font-bold tracking-tight">{dict.checkout.orderConfirmed}</h1>
          <p className="text-muted-foreground leading-relaxed">{dict.checkout.orderConfirmedDesc}</p>
          <Link href={`/${lang}/catalog`} className={cn(buttonVariants(), "mt-4")}>
            {dict.checkout.continueShopping}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-12">
      <h1 className="font-heading text-3xl font-bold tracking-tight">{dict.checkout.title}</h1>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{dict.checkout.shippingAddress}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">{dict.checkout.fullName}</Label>
                <Input id="name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="address">{dict.checkout.address}</Label>
                <Input id="address" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <Label htmlFor="city">{dict.checkout.city}</Label>
                  <Input id="city" />
                </div>
                <div className="w-32 flex flex-col gap-2">
                  <Label htmlFor="zip">{dict.checkout.zipCode}</Label>
                  <Input id="zip" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="country">{dict.checkout.country}</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder={dict.checkout.selectCountry} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="us">{dict.checkout.unitedStates}</SelectItem>
                      <SelectItem value="ca">{dict.checkout.canada}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">{dict.checkout.phone}</Label>
                <Input id="phone" type="tel" />
              </div>
            </CardContent>
          </Card>

          <Button size="lg" onClick={() => setStep("done")}>
            {dict.checkout.placeOrder}
          </Button>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{dict.checkout.orderSummary}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.color}`} className="flex items-center justify-between text-sm">
                    <div className="flex-1">
                      <p className="font-medium truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.color}{item.size ? ` / ${item.size}` : ""} &times; {item.quantity}
                      </p>
                    </div>
                    <span className="ml-4 tabular-nums">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{dict.checkout.subtotal}</span>
                <span className="tabular-nums">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{dict.checkout.shipping}</span>
                <span>{dict.cart.shippingFree}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-semibold">
                <span>{dict.checkout.total}</span>
                <span className="tabular-nums">{formatCurrency(subtotal)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
