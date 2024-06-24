import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
