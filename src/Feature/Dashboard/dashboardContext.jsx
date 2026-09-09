import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const DashboardContext = createContext();

const ORDERS_STORAGE_KEY = 'dashboard_orders';

const sampleOrders = [
  {
    id: 'ORD001',
    userId: 'USR001',
    items: [
      { name: 'Classic Formal Shirt', quantity: 2, price: 799 },
      { name: 'Slim Fit Denim Jeans', quantity: 1, price: 1499 },
    ],
    total: 3097,
    status: 'Delivered',
    date: '2026-08-15',
  },
  {
    id: 'ORD002',
    userId: 'USR002',
    items: [
      { name: 'Leather Jacket', quantity: 1, price: 3499 },
    ],
    total: 3499,
    status: 'Shipped',
    date: '2026-08-22',
  },
  {
    id: 'ORD003',
    userId: 'USR003',
    items: [
      { name: 'Floral Print Summer Dress', quantity: 1, price: 1299 },
      { name: 'Ethnic Kurti', quantity: 2, price: 899 },
    ],
    total: 3097,
    status: 'Pending',
    date: '2026-09-01',
  },
  {
    id: 'ORD004',
    userId: 'USR004',
    items: [
      { name: 'Tailored Blazer', quantity: 1, price: 2999 },
    ],
    total: 2999,
    status: 'Processing',
    date: '2026-09-03',
  },
];

function loadOrders() {
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : sampleOrders;
  } catch {
    return sampleOrders;
  }
}

export function DashboardProvider({ children }) {
  const [orders, setOrders] = useState(loadOrders);

  useEffect(() => {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalProducts = orders.reduce(
      (sum, order) =>
        sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0),
      0
    );
    const pendingOrders = orders.filter(
      (order) => order.status === 'Pending' || order.status === 'Processing'
    ).length;
    return { totalOrders, totalRevenue, totalProducts, pendingOrders };
  }, [orders]);

  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <DashboardContext.Provider
      value={{
        orders,
        stats,
        updateOrderStatus,
        addOrder,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
