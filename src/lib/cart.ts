"use client";

import useSWR from "swr";
import { CartItem } from "@/types";
import { toast } from "sonner";

const CART_KEY = "cart";

function getLocalCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function persistCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function useCart() {
  const { data, mutate, isLoading } = useSWR<CartItem[]>(CART_KEY, getLocalCart, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const items = data ?? [];
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { items, itemCount, subtotal, isLoading, mutate };
}

export function useAddToCart() {
  const { mutate } = useCart();

  return (item: CartItem) => {
    const current = getLocalCart();
    const existing = current.find(
      (i) => i.productId === item.productId && i.color === item.color && i.size === item.size
    );

    let updated: CartItem[];
    if (existing) {
      updated = current.map((i) =>
        i.productId === item.productId && i.color === item.color && i.size === item.size
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
    } else {
      updated = [...current, item];
    }

    persistCart(updated);
    mutate(updated, false);
    toast.success("Added to cart", {
      description: item.name,
      action: {
        label: "View cart",
        onClick: () => {
          const event = new CustomEvent("open-cart");
          window.dispatchEvent(event);
        },
      },
    });
  };
}

export function useUpdateQuantity() {
  const { mutate } = useCart();

  return (productId: string, color: string, size: string | undefined, quantity: number) => {
    const current = getLocalCart();
    if (quantity <= 0) {
      const updated = current.filter(
        (i) => !(i.productId === productId && i.color === color && i.size === size)
      );
      persistCart(updated);
      mutate(updated, false);
      return;
    }

    const updated = current.map((i) =>
      i.productId === productId && i.color === color && i.size === size
        ? { ...i, quantity }
        : i
    );
    persistCart(updated);
    mutate(updated, false);
  };
}

export function useRemoveFromCart() {
  const { mutate } = useCart();

  return (productId: string, color: string, size: string | undefined) => {
    const current = getLocalCart();
    const updated = current.filter(
      (i) => !(i.productId === productId && i.color === color && i.size === size)
    );
    persistCart(updated);
    mutate(updated, false);
  };
}
