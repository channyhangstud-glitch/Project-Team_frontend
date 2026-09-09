import { Link } from 'react-router-dom';
import { useDashboard } from '../dashboardContext';
import DashboardCard from '../components/DashboardCard';
import OrderTable from '../components/OrderTable';

export default function Dashboard() {
  const { orders, stats } = useDashboard();
  const recentOrders = orders.slice(-5).reverse();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Orders" value={stats.totalOrders} icon="📦" color="indigo" />
        <DashboardCard title="Revenue" value={`$${stats.totalRevenue.toLocaleString('en-IN')}`} icon="💰" color="green" />
        <DashboardCard title="Products Sold" value={stats.totalProducts} icon="👕" color="purple" />
        <DashboardCard title="Pending" value={stats.pendingOrders} icon="⏳" color="yellow" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
        <Link to="/dashboard/orders" className="text-indigo-600 font-medium hover:underline text-sm">View All</Link>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-4">
        <OrderTable orders={recentOrders} />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/dashboard/orders" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-center">
          <span className="text-3xl">📋</span>
          <h3 className="font-bold text-gray-800 mt-2">Manage Orders</h3>
        </Link>
        <Link to="/dashboard/products" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-center">
          <span className="text-3xl">🏷️</span>
          <h3 className="font-bold text-gray-800 mt-2">Manage Products</h3>
        </Link>
      </div>
    </div>
  );
}
