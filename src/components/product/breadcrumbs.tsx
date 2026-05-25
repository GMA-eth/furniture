import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

import type { Dictionary } from "@/i18n/dictionaries";

interface BreadcrumbItemData {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemData[];
  lang: string;
  dict: Dictionary;
}

export function Breadcrumbs({ items, lang, dict }: BreadcrumbsProps) {
  return (
    <nav aria-label={dict.product.breadcrumbLabel}>
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <BreadcrumbItem key={item.href}>
              {index < items.length - 1 ? (
                <>
                  <BreadcrumbLink render={<Link href={`/${lang}${item.href}`} />}>{item.label}</BreadcrumbLink>
                  <BreadcrumbSeparator>
                    <ChevronRight data-icon="inline-start" />
                  </BreadcrumbSeparator>
                </>
              ) : (
                <span className="font-medium text-foreground">{item.label}</span>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}
