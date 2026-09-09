import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Productdata from '../../../../data/Productdata';
import { useCart } from '../../../../Feature/Cart/Component/cartContext';
import Modal from '../../../../components/common/Modal';

export default function ProductDetails() {
  const { id } = useParams();
  const product = Productdata.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const productImages = product && Array.isArray(product.Image)
    ? product.Image
    : product ? [product.Image] : [];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/shop" className="text-indigo-600 font-medium hover:underline mb-6 inline-block">&larr; Back to Shop</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <button onClick={() => setLightboxOpen(true)} className="w-full block cursor-zoom-in">
            <img src={productImages[selectedImage]} alt={product.name} className="w-full h-96 object-cover rounded-3xl shadow-md" />
          </button>
          {productImages.length > 1 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl overflow-hidden border-2 ${index === selectedImage ? 'border-indigo-600' : 'border-gray-200'} hover:border-indigo-400 transition-colors`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-32 object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{product.catergories}</p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl font-bold text-indigo-600">${product.price.toLocaleString('en-IN')}</span>
            <span className="text-lg text-gray-400 line-through">${product.original.toLocaleString('en-IN')}</span>
            <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
              {Math.round((1 - product.price / product.original) * 100)}% OFF
            </span>
          </div>
          <p className="text-gray-600 mt-6 leading-relaxed">{product.Decription}</p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-xl">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-l-xl">-</button>
              <span className="px-4 py-2 font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-r-xl">+</button>
            </div>
            <button onClick={() => { addToCart(product, quantity); setQuantity(1); }} className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">
              Add to Cart
            </button>
          </div>
          {product.flashsale && <span className="inline-block mt-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Flash Sale</span>}
          {product.besseller && <span className="inline-block mt-4 ml-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Best Seller</span>}
        </div>
      </div>

      <Modal isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} title={product.name}>
        <div className="relative">
          <img src={productImages[selectedImage]} alt={product.name} className="w-full h-96 object-cover rounded-2xl" />
          {productImages.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImage((selectedImage - 1 + productImages.length) % productImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center shadow"
              >
                &lsaquo;
              </button>
              <button
                onClick={() => setSelectedImage((selectedImage + 1) % productImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center shadow"
              >
                &rsaquo;
              </button>
              <div className="flex justify-center gap-2 mt-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 ${index === selectedImage ? 'border-indigo-600' : 'border-gray-200'} hover:border-indigo-400 transition-colors`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
