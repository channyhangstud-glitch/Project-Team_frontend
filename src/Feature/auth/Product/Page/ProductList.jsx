import { useProduct } from '../productContext';
import ProductSearch from '../Component/ProductSearch';
import ProductFilter from '../Component/ProductFilter';
import ProductGrid from '../Component/ProductGrid';

export default function ProductList() {
  const { filteredProducts } = useProduct();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
      <div className="mb-6"><ProductSearch /></div>
      <div className="flex gap-8">
        <aside className="w-64 flex-shrink-0"><ProductFilter /></aside>
        <main className="flex-1">
          <p className="text-gray-600 mb-4">Showing <span className="font-semibold">{filteredProducts.length}</span> products</p>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}
