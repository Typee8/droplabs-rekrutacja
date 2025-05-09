import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Homepage";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
