import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Product from "./pages/product/Product";
import Payment from "./pages/product/Payment";
import Create from "./pages/product/Create";
import Cart from "./pages/product/Cart";
import ListOrdered from "./pages/product/ListOrdered";
import Homepage from "./admin/home/Homepage";
import OwnerPage from "./owner/OwnerPage";
import ListAccounts from "./admin/home/ListAccounts";
import ListCards from "./admin/home/ListCards";
import ListOrders from "./admin/home/ListOrders";

import Dashboard from "./pages/Dashboard/dashboard";

import Login from "./pages/login/login";
import Shop from "./admin/home/Shop/Shop";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root path to /owner */}
        <Route path="/" element={<Navigate to="/owner" />} />

        <Route path="/owner" element={<OwnerPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/ListAccounts" element={<ListAccounts />} />
        <Route path="/ListCards" element={<ListCards />} />
        <Route path="/ListOrders" element={<ListOrders />} />
        <Route path="/Dashboard" element={<Dashboard />} />
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
