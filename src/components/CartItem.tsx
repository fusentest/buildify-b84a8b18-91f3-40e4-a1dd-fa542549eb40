
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { CartItem as CartItemType } from '../types';
import { formatCurrency } from '../utils/format';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };
  
  const itemPrice = item.price * (1 - item.discount / 100);
  const itemTotal = itemPrice * item.quantity;

  return (
    <div className="flex py-6 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.name}</h3>
            <p className="ml-4">{formatCurrency(itemTotal)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.unit}</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={handleDecreaseQuantity}
              className="p-1 text-gray-500 hover:text-primary"
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="px-2">{item.quantity}</span>
            <button 
              onClick={handleIncreaseQuantity}
              className="p-1 text-gray-500 hover:text-primary"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={handleRemove}
              className="font-medium text-red-600 hover:text-red-500 flex items-center"
            >
              <Trash2 size={16} className="mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;