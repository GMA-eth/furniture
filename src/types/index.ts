export type RoomType = "living-room" | "bedroom" | "dining" | "office" | "outdoor";

export type CategorySlug = RoomType;

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
  productCount: number;
  updatedAt: Date;
  translations?: {
    ar?: { name?: string; description?: string };
  };
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPrimary?: boolean;
}

export interface ColorVariant {
  name: string;
  hex: string;
  images: ProductImage[];
}

export interface SizeVariant {
  label: string;
  dimensions: { width: number; depth: number; height: number };
  priceModifier?: number;
}

export interface Review {
  rating: number;
  text: string;
  author: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductTranslation {
  name?: string;
  seoTitle?: string;
  seoDescription?: string;
  description?: string;
  highlights?: string[];
  materials?: string[];
  reviews?: { text?: string }[];
  faq?: { question?: string; answer?: string }[];
  careInstructions?: string;
  colorVariants?: { name?: string }[];
  images?: { alt?: string }[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  seoTitle?: string;
  seoDescription: string;
  canonicalUrl?: string;
  price: number;
  compareAtPrice?: number;
  category: CategorySlug;
  subcategory?: string;
  tags: string[];
  images: ProductImage[];
  colorVariants: ColorVariant[];
  sizeVariants?: SizeVariant[];
  materials: string[];
  dimensions: { width: number; depth: number; height: number; unit: "in" };
  weight?: number;
  assemblyRequired?: boolean;
  inStock: boolean;
  leadTime?: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  description: string;
  highlights: string[];
  faq: FaqItem[];
  careInstructions?: string;
  shippingMethod: "parcel" | "freight" | "white-glove";
  shippingCost?: number;
  freeShippingThreshold?: number;
  roomType: RoomType;
  updatedAt: Date;
  translations?: {
    ar?: ProductTranslation;
  };
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string;
  color: string;
  size?: string;
  price: number;
  quantity: number;
}

export interface CatalogFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  color?: string;
  material?: string;
  inStock?: boolean;
  rating?: number;
  sort?: string;
  page?: number;
}

export interface PriceRange {
  min: number;
  max: number;
}
