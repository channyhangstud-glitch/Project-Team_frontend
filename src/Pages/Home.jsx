import { Link } from 'react-router-dom';
import Productdata from '../data/Productdata';
import Catergories from '../data/Catergories';
import { useCart } from '../Feature/Cart/Component/cartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const productImages = Array.isArray(product.Image) ? product.Image : [product.Image];
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="flex-1 flex overflow-hidden">
        <div className="relative overflow-hidden w-full flex-1 min-h-72">
          <img
            src={productImages[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {product.flashsale && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Flash Sale
            </span>
          )}
          {product.besseller && (
            <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Best Seller
            </span>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-indigo-600">${product.price.toLocaleString('en-IN')}</span>
          {product.original && (
            <span className="text-sm text-gray-400 line-through">${product.original.toLocaleString('en-IN')}</span>
          )}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const flashSaleProducts = Productdata.filter((p) => p.flashsale);
  const bestSellerProducts = Productdata.filter((p) => p.besseller);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Welcome to <span className="text-yellow-300">Fashion Style 👕👗</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-2xl">
           Discover timeless Khmer elegance, beautifully reimagined for today.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-yellow-400 text-indigo-900 font-bold text-lg px-10 py-4 rounded-full hover:bg-yellow-300 transition-colors duration-200 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Flash Sale Section */}
      {flashSaleProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Flash Sale</h2>
              <p className="text-gray-500 mt-1">Hurry up — limited time deals!</p>
            </div>
            <Link to="/shop" className="text-indigo-600 font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {flashSaleProducts.map((product) => (
                <div key={product.id} className="w-56 flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Catergories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.name}`}
                className="group flex flex-col items-center bg-gray-50 rounded-2xl p-4 hover:bg-indigo-50 hover:shadow-md transition-all duration-200"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-indigo-400 transition-all">
                  <img src={Array.isArray(cat.image) ? cat.image[0] : cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      {bestSellerProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Best Sellers</h2>
              <p className="text-gray-500 mt-1">Our most loved picks by customers</p>
            </div>
            <Link to="/shop" className="text-indigo-600 font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Elevate Your Wardrobe?</h2>
          <p className="mt-4 text-indigo-200 text-lg">Explore our latest collection and find your perfect look.</p>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-white text-indigo-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
