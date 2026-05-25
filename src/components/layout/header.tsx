"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useCartDrawer } from "@/components/cart/cart-drawer-provider";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeaderProps {
  lang: string;
  dict: Dictionary;
}

export function Header({ lang, dict }: HeaderProps) {
  const { itemCount } = useCart();
  const { setOpen } = useCartDrawer();

  const navLinks = [
    { label: dict.nav.livingRoom, href: `/${lang}/catalog/living-room` },
    { label: dict.nav.bedroom, href: `/${lang}/catalog/bedroom` },
    { label: dict.nav.dining, href: `/${lang}/catalog/dining` },
    { label: dict.nav.office, href: `/${lang}/catalog/office` },
    { label: dict.nav.outdoor, href: `/${lang}/catalog/outdoor` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-6 px-4">
        <Link href={`/${lang}`} className="flex items-center gap-2 shrink-0">
          <span className="font-heading text-xl font-bold tracking-tight">{dict.site.name}</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink render={<Link href={`/${lang}/catalog`} />} className={navigationMenuTriggerStyle()}>
                {dict.nav.shopAll}
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink render={<Link href={link.href} />} className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon" aria-label={dict.nav.search}>
            <Search data-icon="inline-start" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label={dict.nav.cart} className="relative">
            <ShoppingCart data-icon="inline-start" />
            {itemCount > 0 && (
              <Badge
                variant="secondary"
                className="absolute -right-1 -top-1 size-5 items-center justify-center rounded-full p-0 text-xs"
              >
                {itemCount}
              </Badge>
            )}
          </Button>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" aria-label={dict.nav.menu} />}>
              <Menu data-icon="inline-start" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="sr-only">{dict.nav.menu}</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href={`/${lang}/catalog`} className="text-lg font-medium">
                  {dict.nav.shopAll}
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
