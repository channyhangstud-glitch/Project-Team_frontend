import { Link } from 'react-router-dom';
import { useCart } from '../../Cart/Component/cartContext';
import Productdata from '../../../data/Productdata';

function ProductCardItem({ product }) {
  const { addToCart } = useCart();
  const productImages = Array.isArray(product.Image) ? product.Image : [product.Image];
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img src={productImages[0]} alt={product.name} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
          {product.flashsale && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Flash Sale</span>}
          {product.besseller && <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">Best Seller</span>}
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-400">{product.catergories}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-indigo-600">${product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-gray-400 line-through">${product.original.toLocaleString('en-IN')}</span>
        </div>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.Decription}</p>
        <button onClick={() => addToCart(product)} className="mt-auto bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  if (product) return <ProductCardItem product={product} />;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {Productdata.map((p) => <ProductCardItem key={p.id} product={p} />)}
    </div>
  );
}
