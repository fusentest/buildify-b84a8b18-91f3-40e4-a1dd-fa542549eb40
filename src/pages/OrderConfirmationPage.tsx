
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  
  // If someone tries to access this page directly without checking out
  useEffect(() => {
    if (cartItems.length > 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle size={48} className="text-green-600" />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
      
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order has been received and is being processed.
      </p>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Order Number:</span>
          <span className="font-medium">{orderNumber}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Date:</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Payment Method:</span>
          <span className="font-medium">Credit Card</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Estimated Delivery:</span>
          <span className="font-medium">
            {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
            {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-8">
        We've sent a confirmation email with order details and tracking information.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </Link>
        
        <Link 
          to="#"
          className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <ShoppingBag size={18} className="mr-2" />
          Track Order
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;