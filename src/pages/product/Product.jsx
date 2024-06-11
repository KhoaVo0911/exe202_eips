import React from "react";
import "./product.scss";
import Coca from "../../assets/images/Coca.png";
import Pizza from "../../assets/images/Pizza.png";
import noodle from "../../assets/images/noodle.png";
import nuggets from "../../assets/images/nuggets.png";
import tiramisu from "../../assets/images/tiramisu.png";
import combo from "../../assets/images/combo.png";
// import Hero from "../hero/Hero";
import Footer from "../../admin/Footer";
import Logo from "../../assets/images/esms 4.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
import Navbar from "../../admin/Navbar";

const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.",
    price: "49.000 VND",
    image: Pizza,
    category: "Food",
  },
  {
    id: 2,
    name: "Coca Cola",
    description: "The Origin of Coca-Cola",
    price: "15.000 VND",
    image: Coca,
    category: "Food",
  },
  {
    id: 3,
    name: "Chicken Nuggets",
    description: "Fast Food",
    price: "39.000 VND",
    image: nuggets,
    category: "Food",
  },
  {
    id: 4,
    name: "Noodle",
    description: "A food in the form of long",
    price: "29.000 VND",
    image: noodle,
    category: "Food",
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Where flavors create a harmonious symphony",
    price: "19.000 VND",
    image: tiramisu,
    category: "Food",
  },
  {
    id: 6,
    name: "Combo A",
    description: "1 Pizza + 1 Coca Cola",
    price: "45.000 VND",
    image: combo,
    category: "combo",
  },
];

const SalesShopOrder = () => {
  return (
    <div>
      <div className="header ">
        <Navbar />
        <div className="flex flex-row py-4 justify-between relative">
          <div className="h-bot flex flex-row items-center px-20 ">
            <h1 className="">
              <span className="h-title">
                <p className="">{`Welcome to `}</p>
                <p className="">FEV - SHOP</p>
              </span>
            </h1>
            <h3 className="h-content">Time to enjoy our delicious food.</h3>
            <button className="">
              <div className="order-now">ORDER NOW</div>
            </button>
            <button
              className="bg-[#0adc5d] hover:bg-[#40b36e] text-white py-5 px-10 rounded-full tracking-widest	"
              style={{ fontSize: "24px" }}
            >
              <b>ORDER NOW</b>
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
        {/* other components */}
        <div className="product-list-wrapper">
          <div className="product-list ">
            <h3 className="mb-4 text-2xl font-bold product-name ">PRODUCT</h3>
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  className="product-card bg-white  rounded-lg p-4"
                  key={product.id}
                >
                  <div className="card-content-parent flex flex-col">
                    <div className="card-content">
                      <div className="wrapper-mask-group mb-3">
                        <img
                          className="mask-group-icon w-full h-40 object-cover rounded-md"
                          loading="lazy"
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
                      <div className="product-details">
                        <div className="margherita-pizza font-bold text-lg mb-1">
                          {product.name}
                        </div>
                        <div className="made-with-san text-sm mb-3">
                          {product.description}
                        </div>
                      </div>
                      <div className="vnd text-lg font-semibold">
                        {product.price}
                      </div>
                      <div className="category-parent mt-3">
                        <div className="category flex justify-between items-center">
                          <div className="food text-sm">{product.category}</div>
                          <img
                            className="noun-arrow-2333164-1-icon w-6 h-6"
                            alt=""
                            src="/noun-arrow-2333164-1.svg"
                          />
                        </div>
                        <button className="add-to-cart-wrapper mt-2 bg-blue-500 text-white text-sm p-2 rounded hover:bg-blue-600 transition duration-300">
                          <div className="add-to-cart">Add to cart</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalesShopOrder;
