import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../Feature/Cart/Component/cartContext';
import { getCurrentUser, logout } from '../Feature/auth/page/authService';

const navLinkClass = ({ isActive }) =>
  `font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-md ring-2 ring-pink-100">
              NY
              <svg className="absolute -top-1 -right-1 w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0l2.2 6.9L21 9.6l-6.8 2.7L12 19l-2.2-6.7L3 9.6l6.8-2.7L12 0zm8 14l1 3.4 3.4 1-3.4 1-1 3.4-1-3.4-3.4-1 3.4-1 1-3.4z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-gray-800 tracking-tight">
              NY<span className="text-pink-500">Sreyme</span> <span className="text-sm font-bold text-gray-500">Clothes Shop</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative text-gray-600 hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.34-1.872l1.836-8.046A1.125 1.125 0 0018.054 3H5.106m2.394 11.25l-1.5-6h13.5" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-indigo-600">{user.name}</Link>
                <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600 font-medium">Logout</button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Login</Link>
                <Link to="/register" className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">Register</Link>
              </div>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)} end>Home</NavLink>
          <NavLink to="/shop" className={navLinkClass} onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <Link to="/cart" className="block text-gray-600" onClick={() => setMenuOpen(false)}>Cart ({getCartCount()})</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="block text-gray-700" onClick={() => setMenuOpen(false)}>{user.name}</Link>
              <button onClick={handleLogout} className="text-red-500 font-medium">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-gray-700" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="block text-indigo-600 font-semibold" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
