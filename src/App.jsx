import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Product from "./pages/product/Product";
import Payment from "./pages/product/Payment";
import Create from "./pages/product/Create";
import Homepage from "./admin/home/Homepage";
import CardList from "./admin/Card/CardList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />

        <Route path="/Product" element={<Product />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
      {/* <CardList /> */}
    </Router>
  );
}

export default App;
