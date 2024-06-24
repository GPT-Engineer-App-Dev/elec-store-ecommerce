import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { products } from "./data/products.js";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{ filteredProducts, handleSearch }}>
      {children}
    </ProductContext.Provider>
  );
}

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;