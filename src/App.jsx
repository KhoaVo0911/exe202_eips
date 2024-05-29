import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Product from "./pages/product/Product";
import Payment from "./pages/product/Payment";
import Create from "./pages/product/Create";
import Cart from "./pages/product/Cart";
import ListOrdered from "./pages/product/ListOrdered";
import Homepage from "./admin/home/Homepage";

import ListShop from "./admin/home/ListShop";
import ListAccounts from "./admin/home/ListAccounts";
import ListCards from "./admin/home/ListCards";
import ListOrders from "./admin/home/ListOrders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/ListShop" element={<ListShop />} />
        <Route path="/ListAccounts" element={<ListAccounts />} />
        <Route path="/ListCards" element={<ListCards />} />
        <Route path="/ListOrders" element={<ListOrders/>} />

        <Route path="/Product" element={<Product />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ListOrdered" element={<ListOrdered />} />
      </Routes>
      {/* <CardList /> */}
    </Router>
  );
}

export default App;
