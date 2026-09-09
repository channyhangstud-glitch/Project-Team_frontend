import { useProduct } from '../productContext';

export default function ProductSearch() {
  const { searchProducts, searchQuery } = useProduct();

  return (
    <div className="relative max-w-md">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <input type="text" value={searchQuery} onChange={(e) => searchProducts(e.target.value)} placeholder="Search products..." className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
      {searchQuery && (
        <button onClick={() => searchProducts('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">&times;</button>
      )}
    </div>
  );
}
