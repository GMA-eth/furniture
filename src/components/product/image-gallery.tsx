"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import type { ProductImage } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

interface ImageGalleryProps {
  images: ProductImage[];
  productName: string;
  dict: Dictionary;
}

export function ImageGallery({ images, productName, dict }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setZoomOpen(true)}
        className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
        aria-label={dict.product.viewImageFullscreen
          .replace("{name}", productName)
          .replace("{current}", String(activeIndex + 1))}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-md bg-background/80 px-2.5 py-1.5 text-xs backdrop-blur-sm">
            <Maximize2 data-icon="inline-start" /> {dict.product.zoom}
          </span>
        </div>
      </button>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={dict.product.viewImage
              .replace("{name}", productName)
              .replace("{current}", String(index + 1))}
            className={`relative size-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
              index === activeIndex ? "border-primary" : "border-transparent hover:border-border"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
        <DialogContent className="max-w-screen-lg">
          <DialogTitle className="sr-only">
            {dict.product.imageOf
              .replace("{current}", String(activeIndex + 1))
              .replace("{total}", String(images.length))}
          </DialogTitle>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              unoptimized
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
