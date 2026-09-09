import Productdata from '../../../data/Productdata';

export function getAllProducts() {
  return Productdata;
}

export function getProductById(id) {
  return Productdata.find((product) => product.id === Number(id));
}

export function getProductsByCategory(category) {
  if (!category || category === 'All') {
    return Productdata;
  }
  return Productdata.filter(
    (product) =>
      product.catergories.toLowerCase() === category.toLowerCase()
  );
}

export function searchProducts(query) {
  if (!query || query.trim() === '') {
    return Productdata;
  }
  const lowerQuery = query.toLowerCase();
  return Productdata.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery)
  );
}

export function getFlashSaleProducts() {
  return Productdata.filter((product) => product.flashsale === true);
}

export function getBestSellerProducts() {
  return Productdata.filter((product) => product.besseller === true);
}
