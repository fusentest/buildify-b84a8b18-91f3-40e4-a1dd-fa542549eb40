
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid = ({ products, isLoading = false }: ProductGridProps) => {
  const [sortOption, setSortOption] = useState('featured');
  
  const getSortedProducts = () => {
    switch (sortOption) {
      case 'price-low':
        return [...products].sort((a, b) => {
          const aPrice = a.price * (1 - a.discount / 100);
          const bPrice = b.price * (1 - b.discount / 100);
          return aPrice - bPrice;
        });
      case 'price-high':
        return [...products].sort((a, b) => {
          const aPrice = a.price * (1 - a.discount / 100);
          const bPrice = b.price * (1 - b.discount / 100);
          return bPrice - aPrice;
        });
      case 'name':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products; // featured or default sorting
    }
  };
  
  const sortedProducts = getSortedProducts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
            <div className="pt-[100%] bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="flex justify-between">
                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">{products.length} products</p>
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm text-gray-500 mr-2">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-sm border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;