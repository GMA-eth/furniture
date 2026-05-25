import { ProductCard } from "@/components/product/product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Product } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface RelatedProductsProps {
  products: Product[];
  dict: Dictionary;
  lang: string;
}

export function RelatedProducts({ products, dict, lang }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="font-heading text-2xl font-bold tracking-tight">
        {dict.product.youMayAlsoLike}
      </h2>
      <Carousel className="mt-8" opts={{ align: "start" }}>
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="ps-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <ProductCard product={product} dict={dict} lang={lang} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
