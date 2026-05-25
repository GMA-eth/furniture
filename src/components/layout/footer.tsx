import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";

interface FooterProps {
  lang: string;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const footerLinks = {
    [dict.footer.shop]: [
      { label: dict.footer.allFurniture, href: `/${lang}/catalog` },
      { label: dict.nav.livingRoom, href: `/${lang}/catalog/living-room` },
      { label: dict.nav.bedroom, href: `/${lang}/catalog/bedroom` },
      { label: dict.nav.dining, href: `/${lang}/catalog/dining` },
      { label: dict.nav.office, href: `/${lang}/catalog/office` },
      { label: dict.nav.outdoor, href: `/${lang}/catalog/outdoor` },
    ],
    [dict.footer.support]: [
      { label: dict.footer.contactUs, href: `/${lang}/contact` },
      { label: dict.footer.shippingDelivery, href: `/${lang}/shipping` },
      { label: dict.footer.returnsExchanges, href: `/${lang}/returns` },
      { label: dict.footer.assemblyGuides, href: `/${lang}/assembly` },
      { label: dict.footer.warranty, href: `/${lang}/warranty` },
    ],
    [dict.footer.company]: [
      { label: dict.footer.aboutUs, href: `/${lang}/about` },
      { label: dict.footer.sustainability, href: `/${lang}/sustainability` },
      { label: dict.footer.careers, href: `/${lang}/careers` },
      { label: dict.footer.press, href: `/${lang}/press` },
    ],
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-screen-2xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Link href={`/${lang}`} className="font-heading text-xl font-bold tracking-tight">
              {dict.site.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {dict.footer.description}
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading text-sm font-semibold">{title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {dict.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-4">
            <Link href={`/${lang}/privacy`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${lang}/terms`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
