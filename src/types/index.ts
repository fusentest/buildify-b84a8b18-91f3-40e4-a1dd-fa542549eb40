
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  unit: string;
  inStock: boolean;
  organic: boolean;
  rating: number;
  reviews: number;
  quantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}