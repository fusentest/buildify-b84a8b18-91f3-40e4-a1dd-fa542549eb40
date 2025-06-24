
import { Product, Category } from '../types';

// Mock categories data
const categories: Category[] = [
  { id: 'produce', name: 'Fruits & Vegetables' },
  { id: 'dairy', name: 'Dairy & Eggs' },
  { id: 'meat', name: 'Meat & Seafood' },
  { id: 'bakery', name: 'Bakery' },
  { id: 'pantry', name: 'Pantry' }
];

// Mock products data
const products: Product[] = [
  {
    id: 'p1',
    name: 'Organic Bananas',
    description: 'Sweet and nutritious organic bananas. Perfect for smoothies, baking, or as a quick snack.',
    price: 1.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'produce',
    unit: 'bunch',
    inStock: true,
    organic: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'p2',
    name: 'Red Apples',
    description: 'Crisp and juicy red apples. Rich in antioxidants and dietary fiber.',
    price: 2.49,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'produce',
    unit: '4 pcs',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 96
  },
  {
    id: 'p3',
    name: 'Avocado',
    description: 'Creamy and nutritious avocados. High in healthy fats and perfect for guacamole or toast.',
    price: 2.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'produce',
    unit: '2 pcs',
    inStock: true,
    organic: true,
    rating: 5,
    reviews: 214
  },
  {
    id: 'p4',
    name: 'Organic Strawberries',
    description: 'Sweet and juicy organic strawberries. Rich in vitamin C and antioxidants.',
    price: 4.99,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'produce',
    unit: '250g',
    inStock: true,
    organic: true,
    rating: 4.5,
    reviews: 178
  },
  {
    id: 'p5',
    name: 'Whole Milk',
    description: 'Fresh whole milk from grass-fed cows. Rich and creamy with essential nutrients.',
    price: 3.49,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'dairy',
    unit: '1 gallon',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 86
  },
  {
    id: 'p6',
    name: 'Organic Eggs',
    description: 'Farm-fresh organic eggs from free-range chickens. High in protein and omega-3 fatty acids.',
    price: 5.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'dairy',
    unit: '12 pcs',
    inStock: true,
    organic: true,
    rating: 5,
    reviews: 142
  },
  {
    id: 'p7',
    name: 'Greek Yogurt',
    description: 'Creamy Greek yogurt. High in protein and probiotics for gut health.',
    price: 4.49,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'dairy',
    unit: '500g',
    inStock: true,
    organic: false,
    rating: 4.5,
    reviews: 112
  },
  {
    id: 'p8',
    name: 'Cheddar Cheese',
    description: 'Aged cheddar cheese with a rich, sharp flavor. Perfect for sandwiches or cooking.',
    price: 6.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'dairy',
    unit: '250g',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 94
  },
  {
    id: 'p9',
    name: 'Chicken Breast',
    description: 'Boneless, skinless chicken breast. Lean protein source for healthy meals.',
    price: 8.99,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'meat',
    unit: '500g',
    inStock: true,
    organic: false,
    rating: 4.5,
    reviews: 156
  },
  {
    id: 'p10',
    name: 'Ground Beef',
    description: 'Premium ground beef. Perfect for burgers, meatballs, or pasta sauces.',
    price: 7.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'meat',
    unit: '500g',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 88
  },
  {
    id: 'p11',
    name: 'Atlantic Salmon',
    description: 'Fresh Atlantic salmon fillet. Rich in omega-3 fatty acids and protein.',
    price: 12.99,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'meat',
    unit: '300g',
    inStock: true,
    organic: false,
    rating: 4.5,
    reviews: 124
  },
  {
    id: 'p12',
    name: 'Organic Whole Chicken',
    description: 'Organic free-range whole chicken. Perfect for roasting or grilling.',
    price: 15.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'meat',
    unit: '1.5kg',
    inStock: true,
    organic: true,
    rating: 5,
    reviews: 168
  },
  {
    id: 'p13',
    name: 'Sourdough Bread',
    description: 'Artisan sourdough bread with a crispy crust and chewy interior.',
    price: 4.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1585478259715-1c093a7b70d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'bakery',
    unit: '1 loaf',
    inStock: true,
    organic: false,
    rating: 4.5,
    reviews: 132
  },
  {
    id: 'p14',
    name: 'Croissants',
    description: 'Buttery, flaky croissants. Perfect for breakfast or as a snack.',
    price: 6.99,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'bakery',
    unit: '4 pcs',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 98
  },
  {
    id: 'p15',
    name: 'Whole Grain Bagels',
    description: 'Nutritious whole grain bagels. Great with cream cheese or as sandwich bread.',
    price: 5.49,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1585478264836-b9649116f437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'bakery',
    unit: '6 pcs',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 76
  },
  {
    id: 'p16',
    name: 'Chocolate Chip Cookies',
    description: 'Freshly baked chocolate chip cookies. Crispy on the outside, chewy on the inside.',
    price: 4.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'bakery',
    unit: '8 pcs',
    inStock: true,
    organic: false,
    rating: 4.5,
    reviews: 108
  },
  {
    id: 'p17',
    name: 'Organic Quinoa',
    description: 'Organic quinoa, a complete protein source. Great for salads and side dishes.',
    price: 7.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'pantry',
    unit: '500g',
    inStock: true,
    organic: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: 'p18',
    name: 'Extra Virgin Olive Oil',
    description: 'Cold-pressed extra virgin olive oil. Rich in antioxidants and healthy fats.',
    price: 12.99,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'pantry',
    unit: '500ml',
    inStock: true,
    organic: false,
    rating: 5,
    reviews: 146
  },
  {
    id: 'p19',
    name: 'Organic Honey',
    description: 'Raw, unfiltered organic honey. Natural sweetener with antibacterial properties.',
    price: 8.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'pantry',
    unit: '350g',
    inStock: true,
    organic: true,
    rating: 4.5,
    reviews: 118
  },
  {
    id: 'p20',
    name: 'Pasta',
    description: 'Premium Italian pasta made from durum wheat semolina.',
    price: 2.99,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'pantry',
    unit: '500g',
    inStock: true,
    organic: false,
    rating: 4,
    reviews: 84
  }
];

// Export functions to get data
export const getMockProducts = (): Product[] => {
  return products;
};

export const getMockCategories = (): Category[] => {
  return categories;
};

export const getMockProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getMockProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getMockProductsBySearch = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm)
  );
};