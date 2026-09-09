export default function OrderTable({ orders }) {
  if (!orders || orders.length === 0) {
    return <p className="text-gray-500 text-center py-8">No orders found.</p>;
  }

  const statusColors = {
    Pending: 'bg-yellow-100 text-yellow-700',
    Processing: 'bg-blue-100 text-blue-700',
    Shipped: 'bg-purple-100 text-purple-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-700',
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-gray-500">
            <th className="py-3 px-4 font-medium">Order ID</th>
            <th className="py-3 px-4 font-medium">Customer</th>
            <th className="py-3 px-4 font-medium">Items</th>
            <th className="py-3 px-4 font-medium">Total</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">{order.id}</td>
              <td className="py-3 px-4">{order.userName || order.userId}</td>
              <td className="py-3 px-4">{order.items.reduce((s, i) => s + i.quantity, 0)}</td>
              <td className="py-3 px-4 font-semibold">${order.total.toLocaleString('en-IN')}</td>
              <td className="py-3 px-4"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>{order.status}</span></td>
              <td className="py-3 px-4 text-gray-500">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
