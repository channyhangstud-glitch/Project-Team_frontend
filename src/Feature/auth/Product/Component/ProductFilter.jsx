import { useProduct } from '../productContext';

export default function ProductFilter() {
  const { selectedCategory, filterByCategory, resetFilters } = useProduct();
  const categories = ['All', 'Hoodies', 'Bottoms', 'Dresses', 'Shorts', 'Bags', 'T-Shirts', 'Blazers', 'Jackets', 'Shoes', "Women's Footwear", 'School Backpacks', "Women's Handbags"];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="font-bold text-gray-800 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((cat) => (
          <button key={cat} onClick={() => filterByCategory(cat)} className={`block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}>
            {cat}
          </button>
        ))}
      </div>
      {selectedCategory !== 'All' && (
        <button onClick={resetFilters} className="mt-4 w-full text-center text-sm text-red-500 hover:text-red-600 font-medium">
          Clear Filters
        </button>
      )}
    </div>
  );
}
