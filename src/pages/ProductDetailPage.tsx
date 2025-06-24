
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Truck, RotateCcw, Shield, Star, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { getMockProducts } from '../data/mockData';
import { formatCurrency } from '../utils/format';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, cartItems, updateQuantity } = useCart();
  
  const cartItem = cartItems.find(item => item.id === id);
  const cartQuantity = cartItem?.quantity || 0;
  
  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        const allProducts = getMockProducts();
        const foundProduct = allProducts.find(p => p.id === id);
        
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Get related products from the same category
          const related = allProducts
            .filter(p => p.category === foundProduct.category && p.id !== id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      fetchProduct();
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      if (cartQuantity > 0) {
        updateQuantity(product.id, cartQuantity + quantity);
      } else {
        addToCart({
          ...product,
          quantity
        });
      }
      toast.success(`${product.name} added to cart`);
    }
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg h-96"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3 mt-6"></div>
            <div className="h-12 bg-gray-200 rounded w-full mt-6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products" 
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div>
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <Link 
          to={`/products?category=${product.category}`} 
          className="text-gray-500 hover:text-primary"
        >
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <span className="text-gray-900">{product.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="mb-4">
            {product.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-3">
                  {formatCurrency(discountedPrice)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatCurrency(product.price)}
                </span>
                <span className="ml-3 bg-red-100 text-red-800 text-sm font-semibold px-2 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>
          
          <div className="flex items-center mb-4">
            <span className={`inline-block h-3 w-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-sm font-medium">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            {product.organic && (
              <span className="ml-4 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                Organic
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-4">
                Quantity:
              </label>
              <div className="flex border border-gray-300 rounded-md">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-1 text-gray-500 hover:text-primary"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                />
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-gray-500 hover:text-primary"
                >
                  +
                </button>
              </div>
              <span className="ml-3 text-sm text-gray-500">
                {product.unit}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center px-6 py-3 rounded-md font-medium ${
                product.inStock 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              } transition-colors`}
            >
              <ShoppingCart size={18} className="mr-2" />
              {cartQuantity > 0 ? 'Add More to Cart' : 'Add to Cart'}
            </button>
            
            <button className="p-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              <Heart size={18} />
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-start">
              <Truck size={18} className="text-primary mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Free Shipping</p>
                <p className="text-sm text-gray-500">On orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <RotateCcw size={18} className="text-primary mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Easy Returns</p>
                <p className="text-sm text-gray-500">30 day return policy</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Shield size={18} className="text-primary mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Satisfaction Guaranteed</p>
                <p className="text-sm text-gray-500">100% quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;