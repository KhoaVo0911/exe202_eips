import React from "react";
import "./product.scss";
import Coca from "../../assets/images/Coca.png";
import Pizza from "../../assets/images/Pizza.png";
import noodle from "../../assets/images/noodle.png";
import nuggets from "../../assets/images/nuggets.png";
import tiramisu from "../../assets/images/tiramisu.png";
import combo from "../../assets/images/combo.png";
import Footer from "../../components/Footer";
import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
import Navbar from "../../admin/Navbar";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.",
    price: "10.000",
    image: Pizza,
    category: "Food",
  },
  {
    id: 2,
    name: "Coca Cola",
    description: "The Origin of Coca-Cola",
    price: "10.000",
    image: Coca,
    category: "10.000",
  },
  {
    id: 3,
    name: "Chicken Nuggets",
    description: "Fast Food",
    price: "10.000",
    image: nuggets,
    category: "Food",
  },
  {
    id: 4,
    name: "Noodle",
    description: "A food in the form of long",
    price: "10.000",
    image: noodle,
    category: "Food",
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Where flavors create a harmonious symphony",
    price: "10.000",
    image: tiramisu,
    category: "Food",
  },
  {
    id: 6,
    name: "Combo A",
    description: "1 Pizza + 1 Coca Cola",
    price: "10.000",
    image: combo,
    category: "combo",
  },
];

const SalesShopOrder = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
        <div className="flex flex-row py-4 justify-between relative">
          <div className="h-bot flex flex-col items-start px-20">
            <h1>
              <span className="h-title">
                <p
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >{`Chào mừng đến với `}</p>
                <p className="mt-1" style={{ color: "#0adc5d" }}>
                  FEV - SHOP
                </p>
              </span>
            </h1>
            <h3
              className="h-content mt-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Vị ngon trên từng hương vị.
            </h3>
            <button
              className="bg-[#0adc5d] hover:bg-[#40b36e] text-white py-5 px-10 rounded-full tracking-widest mt-8"
              style={{ fontSize: "24px", marginRight: "420px" }}
            >
              <b>TẠO ĐƠN HÀNG</b>
            </button>
          </div>

          <div className="flex relative">
            <div className="white-blur"></div>
            <img
              style={{ width: "800px" }}
              loading="lazy"
              alt=""
              src={PizzaHeader}
            />
          </div>
        </div>
      </div>

      <div className="salesshop-order">
        <div
          className="mb-4 font-bold product-name uppercase text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          sản phẩm
        </div>
        <div className="product-list-wrapper">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCart key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalesShopOrder;
