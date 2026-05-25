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
                className="absolute -end-1 -top-1 size-5 items-center justify-center rounded-full p-0 text-xs"
              >
                {itemCount}
              </Badge>
            )}
          </Button>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" aria-label={dict.nav.menu} />}>
              <Menu data-icon="inline-start" />
            </SheetTrigger>
            <SheetContent side={lang === "ar" ? "right" : "left"}>
              <SheetTitle className="sr-only">{dict.nav.menu}</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 pb-6 border-b border-border">
                  <div className="size-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-heading text-lg font-bold">{dict.site.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold leading-tight">{dict.site.name}</p>
                    <p className="text-xs text-muted-foreground">{dict.site.tagline}</p>
                  </div>
                </div>

                <nav className="flex flex-col gap-1 py-6 flex-1 overflow-y-auto">
                  <Link href={`/${lang}/catalog`} className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted">
                    {dict.nav.shopAll}
                  </Link>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors hover:bg-muted">
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-border pt-4 space-y-2">
                  <Link href={`/${lang}/cart`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted">
                    <ShoppingCart className="size-4 text-muted-foreground" />
                    {dict.cart.title}{itemCount > 0 && <span className="ms-auto text-xs text-muted-foreground">({itemCount})</span>}
                  </Link>
                  <Link href={`/${lang}/about`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted">
                    {dict.footer.aboutUs}
                  </Link>
                  <Link href={`/${lang}/contact`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted">
                    {dict.footer.contactUs}
                  </Link>
                </div>

                <div className="border-t border-border pt-4 mt-4 pb-2">
                  <div className="flex gap-2">
                    <Link href={`/${lang}`} className="flex-1 text-center rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
                      EN
                    </Link>
                    <Link href={lang === "en" ? "/ar" : "/en"} className="flex-1 text-center rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:bg-muted">
                      عربي
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
