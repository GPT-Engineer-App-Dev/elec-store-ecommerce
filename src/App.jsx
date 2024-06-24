import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import { products } from "./data/products.js";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";

function App() {
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
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/products" element={<Products products={products} filteredProducts={filteredProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;