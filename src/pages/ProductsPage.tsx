
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import { Product } from '../types';
import { getMockProducts, getMockCategories } from '../data/mockData';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const categories = getMockCategories();
  
  // Get filter values from URL params
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const organicParam = searchParams.get('organic');
  const discountParam = searchParams.get('discount');
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 100
  });
  const [showOrganic, setShowOrganic] = useState(organicParam === 'true');
  const [showDiscount, setShowDiscount] = useState(discountParam === 'true');
  
  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call with filters
        const data = getMockProducts();
        setProducts(data);
        
        // Find min and max prices
        const prices = data.map(p => p.price * (1 - p.discount / 100));
        const minPrice = Math.floor(Math.min(...prices));
        const maxPrice = Math.ceil(Math.max(...prices));
        setPriceRange({
          min: minPrice,
          max: maxPrice
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  useEffect(() => {
    // Apply filters
    let filtered = [...products];
    
    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Price filter
    filtered = filtered.filter(product => {
      const discountedPrice = product.price * (1 - product.discount / 100);
      return discountedPrice >= priceRange.min && discountedPrice <= priceRange.max;
    });
    
    // Organic filter
    if (showOrganic) {
      filtered = filtered.filter(product => product.organic);
    }
    
    // Discount filter
    if (showDiscount) {
      filtered = filtered.filter(product => product.discount > 0);
    }
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) {
      params.set('category', selectedCategories[0]);
    }
    if (searchQuery) {
      params.set('search', searchQuery);
    }
    if (showOrganic) {
      params.set('organic', 'true');
    }
    if (showDiscount) {
      params.set('discount', 'true');
    }
    
    setSearchParams(params, { replace: true });
  }, [products, selectedCategories, priceRange, showOrganic, showDiscount, searchQuery, setSearchParams]);
  
  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };
  
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {searchQuery 
            ? `Search results for "${searchQuery}"` 
            : selectedCategories.length === 1 
              ? categories.find(c => c.id === selectedCategories[0])?.name || 'All Products'
              : 'All Products'
          }
        </h1>
        
        <button 
          onClick={toggleMobileFilter}
          className="md:hidden flex items-center text-gray-700"
        >
          <Filter size={18} className="mr-1" />
          Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters - Desktop */}
        <div className="hidden md:block space-y-6">
          <CategoryFilter 
            categories={categories}
            selectedCategories={selectedCategories}
            onChange={handleCategoryChange}
          />
          
          <PriceFilter 
            minPrice={0}
            maxPrice={100}
            currentMin={priceRange.min}
            currentMax={priceRange.max}
            onChange={handlePriceChange}
          />
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-medium text-gray-900 mb-3">Product Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="organic"
                  checked={showOrganic}
                  onChange={() => setShowOrganic(!showOrganic)}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label 
                  htmlFor="organic"
                  className="ml-2 text-sm text-gray-700"
                >
                  Organic Products
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="discount"
                  checked={showDiscount}
                  onChange={() => setShowDiscount(!showDiscount)}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label 
                  htmlFor="discount"
                  className="ml-2 text-sm text-gray-700"
                >
                  On Sale
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Filters */}
        {isMobileFilterOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-4/5 h-full overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={toggleMobileFilter} className="text-gray-500">
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <CategoryFilter 
                  categories={categories}
                  selectedCategories={selectedCategories}
                  onChange={handleCategoryChange}
                />
                
                <PriceFilter 
                  minPrice={0}
                  maxPrice={100}
                  currentMin={priceRange.min}
                  currentMax={priceRange.max}
                  onChange={handlePriceChange}
                />
                
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Product Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="organic-mobile"
                        checked={showOrganic}
                        onChange={() => setShowOrganic(!showOrganic)}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label 
                        htmlFor="organic-mobile"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Organic Products
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="discount-mobile"
                        checked={showDiscount}
                        onChange={() => setShowDiscount(!showDiscount)}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label 
                        htmlFor="discount-mobile"
                        className="ml-2 text-sm text-gray-700"
                      >
                        On Sale
                      </label>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={toggleMobileFilter}
                  className="w-full bg-primary text-white py-2 rounded-md font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Product Grid */}
        <div className="md:col-span-3">
          <ProductGrid products={filteredProducts} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;