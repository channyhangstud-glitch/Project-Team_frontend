import { createContext, useContext, useState } from 'react';
import Productdata from '../../../data/Productdata';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products] = useState(Productdata);
  const [filteredProducts, setFilteredProducts] = useState(Productdata);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const applyFilters = (category, query) => {
    let result = [...products];

    if (category && category !== 'All') {
      result = result.filter(
        (product) =>
          product.catergories.toLowerCase() === category.toLowerCase()
      );
    }

    if (query && query.trim() !== '') {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.brand.toLowerCase().includes(lowerQuery) ||
          product.catergories.toLowerCase().includes(lowerQuery) ||
          product.Decription.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredProducts(result);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    applyFilters(category, searchQuery);
  };

  const searchProducts = (query) => {
    setSearchQuery(query);
    applyFilters(selectedCategory, query);
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setFilteredProducts(products);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        selectedCategory,
        searchQuery,
        filterByCategory,
        searchProducts,
        resetFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}
