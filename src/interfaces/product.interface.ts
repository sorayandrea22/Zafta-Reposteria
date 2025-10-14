export interface Product {
  name: string;
  slug: string;
  description: string;
  ingredients: string;
  price: number;
  stock: number;
  featured: boolean;
  images: string[];
  active: boolean;
}
