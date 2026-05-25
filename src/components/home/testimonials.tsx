import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const testimonialAuthors = [
  { author: "Sarah M.", rating: 5 },
  { author: "Michael T.", rating: 5 },
  { author: "David L.", rating: 5 },
  { author: "Alex N.", rating: 5 },
  { author: "Tom H.", rating: 5 },
];

interface TestimonialsProps {
  dict: Dictionary;
}

export function Testimonials({ dict }: TestimonialsProps) {
  const texts: string[] = [
    (dict.home as Record<string, string>).testimonial1 ?? "",
    (dict.home as Record<string, string>).testimonial2 ?? "",
    (dict.home as Record<string, string>).testimonial3 ?? "",
    (dict.home as Record<string, string>).testimonial4 ?? "",
    (dict.home as Record<string, string>).testimonial5 ?? "",
  ];

  return (
    <section aria-labelledby="testimonials-heading" className="bg-muted/30">
      <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:py-16 lg:py-20">
        <h2 id="testimonials-heading" className="font-heading text-center text-2xl font-bold tracking-tight sm:text-3xl">
          {dict.home.testimonials}
        </h2>
        <Carousel className="mx-auto mt-12 max-w-3xl" opts={{ loop: true }}>
          <CarouselContent>
            {testimonialAuthors.map((t, i) => (
              <CarouselItem key={i}>
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="flex flex-col items-center gap-4 px-8 text-center">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="size-4 fill-primary text-primary" data-icon="inline-start" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed text-muted-foreground">
                      &ldquo;{texts[i]}&rdquo;
                    </blockquote>
                    <div>
                      <p className="text-sm font-medium">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{dict.home.verifiedBuyer}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
