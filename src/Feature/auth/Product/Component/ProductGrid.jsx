import { Link } from 'react-router-dom';
import { useCart } from '../../../Cart/Component/cartContext';

export default function ProductGrid({ products }) {
  const { addToCart } = useCart();

  if (!products || products.length === 0) {
    return <p className="text-gray-500 text-center py-10">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <Link to={`/product/${product.id}`}>
            <img src={Array.isArray(product.Image) ? product.Image[0] : product.Image} alt={product.name} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
          </Link>
          <div className="p-4 flex flex-col flex-1">
            <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
            <Link to={`/product/${product.id}`}><h3 className="text-lg font-semibold text-gray-800 mt-1 hover:text-indigo-600 line-clamp-1">{product.name}</h3></Link>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xl font-bold text-indigo-600">${product.price.toLocaleString('en-IN')}</span>
              <span className="text-sm text-gray-400 line-through">${product.original.toLocaleString('en-IN')}</span>
            </div>
            <button onClick={() => addToCart(product)} className="mt-auto bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
