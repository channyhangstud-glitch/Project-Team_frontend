import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/Component/cartContext';
import { useDashboard } from '../Dashboard/dashboardContext';
import { getCurrentUser } from '../auth/page/authService';
import CheckoutForm from './CheeckoutForm';
import OrderSummary from './OrderSummary';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { addOrder } = useDashboard();
  const user = getCurrentUser();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
        <a href="/cart" className="text-indigo-600 font-semibold hover:underline">Go to Cart</a>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const total = subtotal + (subtotal >= 999 ? 0 : 5);

  const handlePlaceOrder = () => {
    const order = {
      id: `ORD${Date.now()}`,
      userId: user ? String(user.id) : 'guest',
      userName: user ? user.name : 'Guest',
      items: cart.map((item) => ({ name: item.name, quantity: item.quantity, price: item.price, image: Array.isArray(item.Image) ? item.Image[0] : item.Image, catergories: item.catergories })),
      total,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
    };
    addOrder(order);
    clearCart();
    navigate('/orders');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2"><CheckoutForm /></div>
        <div>
          <OrderSummary />
          <button onClick={handlePlaceOrder} className="mt-4 w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">
            Place Order — ${total.toLocaleString('en-IN')}
          </button>
        </div>
      </div>
    </div>
  );
}
