import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/login/login";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
