
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';
import { formatCurrency } from '../utils/format';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  
  const cartItem = cartItems.find(item => item.id === product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      addToCart(product);
    }
  };
  
  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartItem && cartItem.quantity > 1) {
      updateQuantity(product.id, cartItem.quantity - 1);
    }
  };

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative pt-[100%]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            {product.organic && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                Organic
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mb-3">{product.unit}</p>
          
          <div className="flex justify-between items-center">
            <div>
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(product.price * (1 - product.discount / 100))}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {formatCurrency(product.price)}
                  </span>
                </div>
              ) : (
                <span className="font-semibold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>
            
            {cartItem ? (
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={handleDecreaseQuantity}
                  className="p-1 text-gray-500 hover:text-primary"
                  disabled={cartItem.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="px-2 text-sm">{cartItem.quantity}</span>
                <button 
                  onClick={handleIncreaseQuantity}
                  className="p-1 text-gray-500 hover:text-primary"
                >
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-colors"
              >
                <ShoppingCart size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;