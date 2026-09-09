import Productdata from '../../../data/Productdata';

export default function ManageProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Products</h1>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-left text-gray-500 bg-gray-50">
              <th className="py-3 px-4 font-medium">Image</th>
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">Brand</th>
              <th className="py-3 px-4 font-medium">Category</th>
              <th className="py-3 px-4 font-medium">Price</th>
              <th className="py-3 px-4 font-medium">Original</th>
            </tr></thead>
            <tbody>
              {Productdata.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4"><img src={Array.isArray(product.Image) ? product.Image[0] : product.Image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" /></td>
                  <td className="py-3 px-4 font-medium">{product.name}</td>
                  <td className="py-3 px-4">{product.brand}</td>
                  <td className="py-3 px-4">{product.catergories}</td>
                  <td className="py-3 px-4 font-semibold text-indigo-600">${product.price.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-4 text-gray-400 line-through">${product.original.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
