import React, { useState } from "react";
import "./product.scss";
import Coca from "../../assets/images/Coca.png";
import Pizza from "../../assets/images/Pizza.png";
import noodle from "../../assets/images/noodle.png";
import nuggets from "../../assets/images/nuggets.png";
import tiramisu from "../../assets/images/tiramisu.png";
import combo from "../../assets/images/combo.png";
// import Hero from "../hero/Hero";
import Footer from "../Footer";
import Logo from "../../assets/images/esms 4.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
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

const CreateProduct = () => {
  const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
    console.log("Product name:", productName);
    console.log("Price:", price);
    console.log("Product image:", productImage);
    console.log("Category:", category);
    console.log("Status:", status);
    console.log("Description:", description);
  };

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
            <div className="flex justify-between w-full">
              <h3 className="mb-4 text-2xl font-bold product-name ">PRODUCT</h3>
              {/* your existing code */}

              <div className="flex gap-5">
                <button
                  className="add-to-cart-wrapper mt-2 bg-blue-500 text-white text-sm p-2 rounded hover:bg-blue-600 transition duration-300"
                  onClick={handleCreateProductClick}
                >
                  <div className="add-to-cart">Create Product</div>
                </button>
                <button className="add-to-cart-wrapper mt-2 bg-blue-500 text-white text-sm p-2 rounded hover:bg-blue-600 transition duration-300">
                  <div className="add-to-cart">Create Combo</div>
                </button>
              </div>
              {showForm && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-4">
                        Create Product
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4 flex gap-5">
                          <label
                            htmlFor="productName"
                            className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="mt-1 border border-gray-300 rounded-md w-full"
                            required
                          />
                        </div>
                        <div className="mb-4 flex gap-5">
                          <label
                            htmlFor="price"
                            className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1  border border-gray-300 rounded-md w-full "
                            required
                          />
                        </div>
                        <div className="border-b-2 mb-4"></div>
                        <div className="mb-4 flex items-center gap-5 justify-between">
                          <label
                            htmlFor="productImage"
                            className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                          >
                            Product Image
                          </label>
                          <input
                            type="file"
                            id="productImage"
                            name="productImage"
                            // onChange={(e) => handleImageChange(e)}
                            className="hidden" // Ẩn input để tạo một giao diện tải lên tùy chỉnh
                            accept="image/*" // Chỉ cho phép người dùng chọn các loại file ảnh
                            required
                          />
                          <label
                            htmlFor="productImage"
                            className="cursor-pointer p-2 border border-gray-300 rounded-md w-1/5"
                          >
                            <AddPhotoAlternateIcon />
                          </label>
                        </div>
                        <div className="border-b-2  mb-4"></div>
                        <div className="mb-4 flex gap-5 ">
                          <label
                            htmlFor="category"
                            className=" flex items-center text-sm font-medium text-gray-700 w-1/4"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-sm"
                            required
                          >
                            <option value="">Select a category</option>
                            <option value="Food">Food</option>
                            <option value="Drink">Drink</option>
                            <option value="Snack">Snack</option>
                            {/* Thêm các option khác nếu cần */}
                          </select>
                        </div>
                        <div className="mb-4 flex gap-5 ">
                          <label
                            htmlFor="status"
                            className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                          >
                            Status
                          </label>
                          <select
                            id="status"
                            name="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-sm"
                            required
                          >
                            <option value="">Select a status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            {/* Thêm các option khác nếu cần */}
                          </select>
                        </div>
                        <div className="mb-4 flex gap-5">
                          <label
                            htmlFor="description"
                            className="flex items-center text-sm font-medium text-gray-700 w-1/4 "
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
                            required
                          ></textarea>
                        </div>
                        <div className="border-b mb-4"></div>
                        <div className="flex justify-end"></div>
                      </form>
                    </div>

                    <div className="flex justify-center gap-5">
                      <button
                        className=" w-full text-[#0adc5d] border  rounded-lg text-xl"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className=" w-full bg-[#0adc5d] text-white p-2  rounded-lg text-xl"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                          <div className="add-to-cart">Edit Product</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="add-to-cart-wrapperr mt-2 flex items-center justify-center border text-sm p-2 rounded ">
              <div className="add-to-cartt">Load More</div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateProduct;
