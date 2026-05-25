"use client";

import { useState, useEffect, createContext, useContext, type ReactNode } from "react";
import { CartDrawer } from "./cart-drawer";
import type { Dictionary } from "@/i18n/dictionaries";

interface CartDrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartDrawerContext = createContext<CartDrawerContextValue>({
  open: false,
  setOpen: () => {},
});

export function useCartDrawer() {
  return useContext(CartDrawerContext);
}

export function CartDrawerProvider({ children, dict, lang }: { children: ReactNode; dict: Dictionary; lang: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-cart", handler);
    return () => window.removeEventListener("open-cart", handler);
  }, []);

  return (
    <CartDrawerContext.Provider value={{ open, setOpen }}>
      {children}
      <CartDrawer open={open} onOpenChange={setOpen} dict={dict} lang={lang} />
    </CartDrawerContext.Provider>
  );
}
