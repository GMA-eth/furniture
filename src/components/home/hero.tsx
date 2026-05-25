import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {dict.home.heroTitle}
        </h1>
        <p className="mt-6 text-lg text-white/80 leading-relaxed">
          {dict.home.heroSubtitle}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/catalog" className={cn(buttonVariants({ size: "lg" }))}>
            {dict.home.shopCollection}
          </Link>
          <Link href="/catalog/living-room" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            {dict.home.livingRoom}
          </Link>
        </div>
      </div>
    </section>
  );
}
