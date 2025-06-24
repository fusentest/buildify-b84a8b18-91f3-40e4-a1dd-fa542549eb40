
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/format';

interface OrderSummaryProps {
  showCheckoutButton?: boolean;
}

const OrderSummary = ({ showCheckoutButton = true }: OrderSummaryProps) => {
  const { cartItems } = useCart();
  
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.price * (1 - item.discount / 100);
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">{formatCurrency(subtotal)}</p>
        </div>
        
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">
            {shipping === 0 ? 'Free' : formatCurrency(shipping)}
          </p>
        </div>
        
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Tax (7%)</p>
          <p className="font-medium">{formatCurrency(tax)}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-base font-medium text-gray-900">{formatCurrency(total)}</p>
          </div>
        </div>
      </div>
      
      {showCheckoutButton && (
        <div className="mt-6">
          <a
            href="/checkout"
            className="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            Proceed to Checkout
          </a>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Free shipping on orders over $50</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;