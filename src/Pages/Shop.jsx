import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useProduct } from '../Feature/auth/Product/productContext';
import { useCart } from '../Feature/Cart/Component/cartContext';
import ProductSearch from '../Feature/auth/Product/Component/ProductSearch';
import ProductFilter from '../Feature/auth/Product/Component/ProductFilter';

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
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mt-1 hover:text-indigo-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
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

function getSection(product) {
  const category = (product.catergories || '').toLowerCase();
  if (category === 'shoes') return 'Shoes';
  if (category === 'bags') return 'Bags';
  return 'Clothing';
}

export default function Shop() {
  const { filteredProducts, filterByCategory, selectedCategory, resetFilters } = useProduct();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      filterByCategory(category);
    }
  }, [searchParams, filterByCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Shop</h1>
          <p className="mt-2 text-indigo-200">Browse our complete collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <ProductSearch />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <ProductFilter />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> products
                {selectedCategory !== 'All' && (
                  <span> in <span className="font-semibold text-indigo-600">{selectedCategory}</span></span>
                )}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="space-y-10">
                {['Clothing', 'Shoes', 'Bags'].map((section) => {
                  const items = filteredProducts.filter((p) => getSection(p) === section);
                  if (items.length === 0) return null;
                  return (
                    <div key={section}>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">{section}</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6">
                        {items.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-indigo-600 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
