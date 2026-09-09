import { useCart } from '../Cart/Component/cartContext';

export default function OrderSummary() {
  const { cart, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal >= 999 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img src={Array.isArray(item.Image) ? item.Image[0] : item.Image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
            <div className="flex-1 text-sm">
              <p className="font-medium text-gray-800 truncate">{item.name}</p>
              <p className="text-gray-500">Qty: {item.quantity}</p>
            </div>
            <span className="text-sm font-semibold">${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-semibold">${subtotal.toLocaleString('en-IN')}</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className="font-semibold">{shipping === 0 ? 'Free' : `$${shipping}`}</span></div>
        <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-indigo-600">${total.toLocaleString('en-IN')}</span></div>
      </div>
    </div>
  );
}
