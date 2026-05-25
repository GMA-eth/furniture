"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface FaqAccordionProps {
  faq: FaqItem[];
  dict: Dictionary;
}

export function FaqAccordion({ faq, dict }: FaqAccordionProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight">{dict.product.faqs}</h2>
      <Accordion className="mt-4">
        {faq.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-start">{item.question}</AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
