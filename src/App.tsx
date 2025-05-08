import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import Products from "./Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<Products />} />
    </Routes>
  );
}

export default App;
