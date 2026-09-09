import { useCart } from './cartContext';
import { Link } from 'react-router-dom';

export default function CartSummary() {
  const { getCartTotal, getCartCount } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal >= 999 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-gray-600">Items ({getCartCount()})</span><span className="font-semibold">${subtotal.toLocaleString('en-IN')}</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className="font-semibold">{shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping}`}</span></div>
        <hr />
        <div className="flex justify-between text-lg"><span className="font-bold">Total</span><span className="font-bold text-indigo-600">${total.toLocaleString('en-IN')}</span></div>
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Coupon code" className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      <Link to="/checkout" className="mt-4 block w-full bg-indigo-600 text-white text-center font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors">Proceed to Checkout</Link>
    </div>
  );
}
