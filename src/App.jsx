import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Feature/Cart/Component/cartContext'
import { ProductProvider } from './Feature/auth/Product/productContext'
import { DashboardProvider } from './Feature/Dashboard/dashboardContext'
import MainLayout from './components/Layout/MainLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Login from './Feature/auth/page/Login'
import Register from './Feature/auth/page/Register'
import ProductList from './Feature/auth/Product/Page/ProductList'
import ProductDetails from './Feature/auth/Product/Page/ProductDetails'
import Cart from './Feature/Cart/Component/Cart'
import Checkout from './Feature/Cheeckout/Checkout'
import Order from './Feature/orders/Order'
import OrderDetails from './Feature/orders/OrderDetails'
import Dashboard from './Feature/Dashboard/Pages/Dashboard'
import ManageOrders from './Feature/Dashboard/Pages/ManageOrders'
import ManageProducts from './Feature/Dashboard/Pages/ManageProducts'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <DashboardProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="products" element={<ProductList />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="orders" element={<Order />} />
                <Route path="orders/:id" element={<OrderDetails />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/orders" element={<ManageOrders />} />
                <Route path="dashboard/products" element={<ManageProducts />} />
              </Route>
            </Routes>
          </DashboardProvider>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  )
}
