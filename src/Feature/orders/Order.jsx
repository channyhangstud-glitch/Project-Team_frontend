import { useDashboard } from '../Dashboard/dashboardContext';
import { getCurrentUser } from '../auth/page/authService';
import OrderItem from './OrderItem';

export default function Order() {
  const { orders } = useDashboard();
  const user = getCurrentUser();
  const userOrders = user ? orders.filter((o) => o.userName === user.name) : orders;

  if (userOrders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">No Orders Yet</h1>
        <p className="text-gray-500">Start shopping to see your orders here.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>
      <div className="space-y-4">
        {userOrders.map((order) => <OrderItem key={order.id} order={order} />)}
      </div>
    </div>
  );
}
