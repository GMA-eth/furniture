"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { localeMeta, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

interface LanguageSwitcherProps {
  lang: Locale;
  dict: Dictionary;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLang: Locale = lang === "en" ? "ar" : "en";
  const cleanPath = pathname.replace(/^\/furniture/, "").replace(`/${lang}`, `/${targetLang}`);
  const targetPath = cleanPath || `/${targetLang}`;

  return (
    <div className="fixed bottom-4 start-4 z-50">
      <Link
        href={targetPath}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shadow-lg")}
      >
        {localeMeta[targetLang].label}
      </Link>
    </div>
  );
}
