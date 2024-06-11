import React, { useState } from "react";
import "./product.scss";
import Coca from "../../assets/images/Coca.png";
import Pizza from "../../assets/images/Pizza.png";
import noodle from "../../assets/images/noodle.png";
import nuggets from "../../assets/images/nuggets.png";
import tiramisu from "../../assets/images/tiramisu.png";
import combo from "../../assets/images/combo.png";
import Footer from "../../admin/Footer";
import Logo from "../../assets/images/esms 4.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PopupTable from "./PopupTable";
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

const ListOrdered = () => {
  const [showForm, setShowForm] = useState(false);
  const handleCreateProductClick = () => {
    setShowForm(true);
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

      <div className="abc">
        <div className="product-list-wrapper">
          <div className="product-list ">
            <div className="flex justify-between w-full">
              <h3 className="mb-4 text-2xl font-bold product-name ">
                List Order
              </h3>
            </div>
          </div>
        </div>

        <div className="table-container flex justify-center ">
          <table className="product-table ">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>STT</th>
                <th>Product Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={handleCreateProductClick}>View</button>
                  </td>

                  {/* Nút View */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showForm && (
        <div className="fixed -inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center gap-5">
              <div className="table-container flex justify-center ">
                <table className="product-table ">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>STT</th>
                      <th>Product Name</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Category</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>
                          <img src={product.image} alt={product.name} />
                        </td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        {/* <td>
                          <button onClick={handleCreateProductClick}>
                            View
                          </button>
                        </td> */}

                        {/* Nút View */}
                      </tr>
                    ))}
                  </tbody>
                  <button
                    className=" w-full text-[#0adc5d] border  rounded-lg text-xl"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ListOrdered;
