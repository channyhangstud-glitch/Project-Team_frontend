import { useParams, Link } from 'react-router-dom';
import { useDashboard } from '../Dashboard/dashboardContext';

export default function OrderDetails() {
  const { id } = useParams();
  const { orders } = useDashboard();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Order not found</h1>
        <Link to="/orders" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">Back to Orders</Link>
      </div>
    );
  }

  const statusColors = { Pending: 'bg-yellow-100 text-yellow-700', Processing: 'bg-blue-100 text-blue-700', Shipped: 'bg-purple-100 text-purple-700', Delivered: 'bg-green-100 text-green-700', Cancelled: 'bg-red-100 text-red-700' };
  const shipping = 5;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/orders" className="text-indigo-600 font-medium hover:underline mb-6 inline-block">&larr; Back to Orders</Link>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Order {order.id}</h1>
            <p className="text-gray-500">Placed on {order.date}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[order.status]}`}>{order.status}</span>
        </div>
        {order.userName && <p className="text-gray-600 mb-4">Customer: <span className="font-semibold">{order.userName}</span></p>}
        <table className="w-full text-sm mb-6">
          <thead><tr className="border-b text-left text-gray-500"><th className="py-2 font-medium">Item</th><th className="py-2 font-medium">Category</th><th className="py-2 font-medium">Qty</th><th className="py-2 font-medium">Price</th><th className="py-2 font-medium">Subtotal</th></tr></thead>
          <tbody>
            {order.items.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="py-3 font-medium">
                  <div className="flex items-center gap-3">
                    {item.image && <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />}
                    {item.name}
                  </div>
                </td>
                <td className="py-3 text-gray-500">{item.catergories || '-'}</td>
                <td className="py-3">{item.quantity}</td>
                <td className="py-3">${item.price.toLocaleString('en-IN')}</td>
                <td className="py-3 font-semibold">${(item.price * item.quantity).toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right space-y-1">
          <p className="text-sm text-gray-600">Shipping: ${shipping}</p>
          <p className="text-lg font-bold text-indigo-600">Total: ${order.total.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
}
