import { useCart } from './cartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex gap-4">
      <img src={Array.isArray(item.Image) ? item.Image[0] : item.Image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.brand}</p>
        <p className="text-xs text-indigo-500 mt-0.5">{item.catergories}</p>
        <p className="text-indigo-600 font-bold mt-1">${item.price.toLocaleString('en-IN')}</p>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-l-lg">-</button>
            <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-r-lg">+</button>
          </div>
          <span className="text-sm text-gray-500">Total: <span className="font-semibold text-gray-800">${(item.price * item.quantity).toLocaleString('en-IN')}</span></span>
          <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 hover:text-red-600 text-sm font-medium">Remove</button>
        </div>
      </div>
    </div>
  );
}
