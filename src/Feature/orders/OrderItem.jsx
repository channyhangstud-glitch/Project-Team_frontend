import { Link } from 'react-router-dom';

export default function OrderItem({ order }) {
  const statusColors = { Pending: 'bg-yellow-100 text-yellow-700', Processing: 'bg-blue-100 text-blue-700', Shipped: 'bg-purple-100 text-purple-700', Delivered: 'bg-green-100 text-green-700', Cancelled: 'bg-red-100 text-red-700' };

  return (
    <Link to={`/orders/${order.id}`} className="block bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-800">{order.id}</p>
          <p className="text-sm text-gray-500">{order.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || 'bg-gray-100'}`}>{order.status}</span>
      </div>
      <div className="mt-3 text-sm text-gray-600">
        {order.items.map((item, i) => <span key={i}>{item.name} (x{item.quantity}){i < order.items.length - 1 ? ', ' : ''}</span>)}
      </div>
      <p className="mt-2 font-bold text-indigo-600">${order.total.toLocaleString('en-IN')}</p>
    </Link>
  );
}
