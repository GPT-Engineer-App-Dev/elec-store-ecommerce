import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;