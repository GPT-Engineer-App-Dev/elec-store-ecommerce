import React, { createContext, useState, useContext } from 'react';
import { products } from '../data/products';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, selectedCategories, selectedBrands, priceRange);
  };

  const handleCategoryChange = (category, isChecked) => {
    const updatedCategories = isChecked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    setSelectedCategories(updatedCategories);
    applyFilters(searchQuery, updatedCategories, selectedBrands, priceRange);
  };

  const handleBrandChange = (brand, isChecked) => {
    const updatedBrands = isChecked
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand);
    setSelectedBrands(updatedBrands);
    applyFilters(searchQuery, selectedCategories, updatedBrands, priceRange);
  };

  const handlePriceRangeChange = (min, max) => {
    const updatedPriceRange = { min, max };
    setPriceRange(updatedPriceRange);
    applyFilters(searchQuery, selectedCategories, selectedBrands, updatedPriceRange);
  };

  const applyFilters = (query, categories, brands, price) => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase()) ||
                            product.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = categories.length === 0 || categories.includes(product.category);
      const matchesBrand = brands.length === 0 || brands.includes(product.brand);
      const matchesPrice = product.price >= price.min && product.price <= price.max;
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{
      products,
      filteredProducts,
      searchQuery,
      selectedCategories,
      selectedBrands,
      priceRange,
      handleSearch,
      handleCategoryChange,
      handleBrandChange,
      handlePriceRangeChange
    }}>
      {children}
    </ProductContext.Provider>
  );
};