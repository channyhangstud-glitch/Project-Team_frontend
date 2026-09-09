
import React from 'react'
import Productdata from './data/Productdata.js'
export default function ProductCard() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Productdata.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md"
          >
            <img
              src={Array.isArray(product.Image) ? product.Image[0] : product.Image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.brand} - {product.catergories}</p>
            <p className="text-gray-400 line-through">Original: ${product.original}</p>
            <p className="text-red-600 font-bold">Price: ${product.price}</p>
            <p className="text-gray-500 text-sm">{product.Decription}</p>
            {product.flashsale && (
              <span className="inline-block mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Flash Sale
              </span>
            )}
            {product.besseller && (
              <span className="inline-block mt-2 ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                Best Seller
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
