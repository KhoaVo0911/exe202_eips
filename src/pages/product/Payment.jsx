import React, { useState } from "react";
import "./product.scss";
import Coca from "../../assets/images/Coca.png";
import Pizza from "../../assets/images/Pizza.png";
import noodle from "../../assets/images/noodle.png";
import nuggets from "../../assets/images/nuggets.png";
import tiramisu from "../../assets/images/tiramisu.png";
import combo from "../../assets/images/combo.png";
import qr_code from "../../assets/images/qr_code.png";
// import Hero from "../hero/Hero";
import Footer from "../../admin/Footer";
import Logo from "../../assets/images/esms 4.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../../admin/Navbar";

const PaymentOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckoutClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              className="bg-[#0adc5d] hover:bg-[#40b36e] text-white py-5 px-10 rounded-full tracking-widest"
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

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 ">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <h3>You have 3 item in your cart</h3>
          <ul>
            <div className="card-product flex justify-between items-center p-10 gap-10 rounded-lg  bg-white shadow">
              <img src={Pizza} alt="" className="w-32" />
              <div className="flex flex-col items-start ml-4">
                <span className="text-base font-bold">Pizza</span>
                <span className="text-sm">Food</span>
              </div>
              <span className="text-lg">1</span>
              <div className="flex flex-col items-end">
                <span className="text-base">49.000</span>
                <span className="text-sm">VND</span>
              </div>
              <span>
                <DeleteIcon />
              </span>
            </div>
            <div className="card-product flex justify-between items-center p-10 gap-10 rounded-lg  bg-white shadow">
              <img src={Pizza} alt="" className="w-32" />
              <div className="flex flex-col items-start ml-4">
                <span className="text-base font-bold">Pizza</span>
                <span className="text-sm">Food</span>
              </div>
              <span className="text-lg">1</span>
              <div className="flex flex-col items-end">
                <span className="text-base">49.000</span>
                <span className="text-sm">VND</span>
              </div>
              <span>
                <DeleteIcon />
              </span>
            </div>
            <div className="card-product flex justify-between items-center p-10 gap-10 rounded-lg  bg-white shadow">
              <img src={Pizza} alt="" className="w-32" />
              <div className="flex flex-col items-start ml-4">
                <span className="text-base font-bold">Pizza</span>
                <span className="text-sm">Food</span>
              </div>
              <span className="text-lg">1</span>
              <div className="flex flex-col items-end">
                <span className="text-base">49.000</span>
                <span className="text-sm">VND</span>
              </div>
              <span>
                <DeleteIcon />
              </span>
            </div>
          </ul>
        </div>

        <div className="p-20 rounded-3xl max-h-11 ">
          <div className="p-6 rounded-lg shadow-md bg-[#0adc5d] text-white">
            <h1 className="text-5xl font-semibold mb-4 text-white">
              Card Details
            </h1>
            <form className="flex flex-col space-y-2 text-xl">
              <div className="flex flex-col text-white">
                <label htmlFor="card-number" className="font-medium text-white">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="Enter your card number"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="username" className="text-white font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone-number"
                  className="font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone-number"
                  name="phone-number"
                  placeholder="Enter your phone number"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="balance" className="font-medium text-white">
                  Balance
                </label>
                <input
                  type="text"
                  id="balance"
                  name="balance"
                  placeholder="Enter your balance"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="border-b border-gray-300"></div>

              <div className="flex justify-between ">
                <p>3 Items</p>
                <p> 119.000 VNĐ </p>
              </div>

              <div className="flex justify-between ">
                <p>Total</p>
                <p> 119.000 VNĐ </p>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCheckoutClick}
                  className="w-full bg-white text-[#0adc5d] py-2 px-4 rounded-md text-4xl font-bold"
                >
                  CHECKOUT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>QR Code</h2>
            <img src={qr_code} alt="QR Code" />
            <button onClick={handleCloseModal} className="close-modal">
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PaymentOrder;
