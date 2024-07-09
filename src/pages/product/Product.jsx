// import React from "react";
// import "./product.scss";
// import Coca from "../../assets/images/Coca.png";
// import Pizza from "../../assets/images/Pizza.png";
// import noodle from "../../assets/images/noodle.png";
// import nuggets from "../../assets/images/nuggets.png";
// import tiramisu from "../../assets/images/tiramisu.png";
// import gimbap from "../../assets/images/gimbap.png";
// import Footer from "../../components/Footer";
// import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
// import Navbar from "../../admin/Navbar";
// import ProductCart from "./ProductCart";

// const products = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     description:
//       "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.",
//     price: "10.000",
//     image: Pizza,
//     category: "Food",
//   },
//   {
//     id: 2,
//     name: "Coca Cola",
//     description: "The Origin of Coca-Cola",
//     price: "10.000",
//     image: Coca,
//     category: "10.000",
//   },
//   {
//     id: 3,
//     name: "Chicken Nuggets",
//     description: "Fast Food",
//     price: "10.000",
//     image: nuggets,
//     category: "Food",
//   },
//   {
//     id: 4,
//     name: "Noodle",
//     description: "A food in the form of long",
//     price: "10.000",
//     image: noodle,
//     category: "Food",
//   },
//   {
//     id: 5,
//     name: "Tiramisu",
//     description: "Where flavors create a harmonious symphony",
//     price: "10.000",
//     image: tiramisu,
//     category: "Food",
//   },
//   {
//     id: 6,
//     name: "Gimbap",
//     description: "1 Pizza + 1 Coca Cola",
//     price: "45.000",
//     image: gimbap,
//     category: "Food",
//   },
// ];

// const SalesShopOrder = () => {
//   return (
//     <div>
//       <div className="header">
//         <Navbar />
//         <div className="flex flex-row py-4 justify-between relative">
//           <div className="h-bot flex flex-col items-start px-20">
//             <h1>
//               <span className="h-title">
//                 <p
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >{`CHÀO MỪNG ĐẾN VỚI `}</p>
//                 <p className="mt-1">FEV - SHOP</p>
//               </span>
//             </h1>
//             <h3
//               className="h-content mt-3"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//             >
//               Vị ngon trên từng hương vị.
//             </h3>
//             <button
//               className="bg-[#00AEFF] text-white py-5 px-10 rounded-full tracking-widest mt-8"
//               style={{ fontSize: "24px", marginRight: "475px" }}
//             >
//               <b>TẠO ĐƠN HÀNG</b>
//             </button>
//           </div>

//           <div className="flex relative">
//             <div className="white-blur"></div>
//             <img
//               style={{ width: "800px" }}
//               loading="lazy"
//               alt=""
//               src={PizzaHeader}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="salesshop-order">
//         <div
//           className="mb-4 font-bold product-name uppercase text-center"
//           style={{ fontFamily: "Poppins, sans-serif", color: "#00AEFF" }}
//         >
//           sản phẩm
//         </div>
//         <div className="product-list-wrapper">
//           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {products.map((product) => (
//               <ProductCart key={product.id} data={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SalesShopOrder;

import React, { useState } from "react";
import { CartProvider, useCart } from "./CartContext";
import "./product.scss";
import Coca from "../../assets/images/Coca.png";
import Pizza from "../../assets/images/Pizza.png";
import noodle from "../../assets/images/noodle.png";
import nuggets from "../../assets/images/nuggets.png";
import tiramisu from "../../assets/images/tiramisu.png";
import gimbap from "../../assets/images/gimbap.png";
import Footer from "../../components/Footer";
import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
import { FaCirclePlus } from "react-icons/fa6";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../../admin/Navbar";

const ProductCart = ({ data }) => {
  const { image, name, price } = data;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div
      className="bg-white p-5 rounded-xl m-2 flex flex-col items-center"
      style={{ boxShadow: "0 10px 50px rgba(181, 179, 255, 0.25)" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover object-center drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] rounded-md"
      />
      <h3 className="text-xl py-3 text-center font-medium mt-6">{name}</h3>
      <div className="flex justify-between items-center w-full">
        <p className="text-lg font-semibold mt-3">{price} VND</p>
        <button
          className="p-2 rounded-md text-lg hover:bg-gray-300 flex items-center justify-center"
          onClick={handleAddToCart}
        >
          <FaCirclePlus />
        </button>
      </div>
    </div>
  );
};

const SalesShopOrderContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { cart, incrementQuantity, decrementQuantity, removeItem } = useCart();

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
                >{`CHÀO MỪNG ĐẾN VỚI `}</p>
                <p className="mt-1">FEV - SHOP</p>
              </span>
            </h1>
            <h3
              className="h-content mt-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Vị ngon trên từng hương vị.
            </h3>
            <button
              className="bg-[#00AEFF] text-white py-5 px-10 rounded-full tracking-widest mt-8"
              style={{ fontSize: "24px", marginRight: "475px" }}
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

      <div className="salesshop-order relative">
        <div
          className="mb-4 font-bold product-name uppercase text-center"
          style={{ fontFamily: "Poppins, sans-serif", color: "#00AEFF" }}
        >
          sản phẩm
        </div>
        <div className="absolute top-14 right-20">
          <button className="relative" onClick={() => setShowPopup(!showPopup)}>
            <ShoppingCartCheckoutIcon fontSize="large" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
        <div className="product-list-wrapper relative">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCart key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Giỏ Hàng</h2>
            <ul>
              {cart.map((product, index) => (
                <li
                  key={index}
                  className="mb-2 flex items-center justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{product.name}</p>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-300 px-2 rounded"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        className="bg-gray-300 px-2 rounded"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <p>
                      Giá:{" "}
                      {parseInt(product.price.replace(".", "")) *
                        product.quantity}{" "}
                      VND
                    </p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
                    onClick={() => removeItem(product.id)}
                  >
                    <DeleteIcon />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <p className="font-bold">
                Tổng cộng:{" "}
                {cart
                  .reduce(
                    (total, item) =>
                      total +
                      parseInt(item.price.replace(".", "")) * item.quantity,
                    0
                  )
                  .toLocaleString("vi-VN", { minimumFractionDigits: 0 })}{" "}
                VND
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
                  onClick={() => setShowPopup(false)}
                >
                  HỦY
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                  onClick={() => (window.location.href = "/payment")}
                >
                  THANH TOÁN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SalesShopOrder = () => {
  return (
    <CartProvider>
      <SalesShopOrderContent />
    </CartProvider>
  );
};

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
    name: "Gimbap",
    description: "1 Pizza + 1 Coca Cola",
    price: "45.000",
    image: gimbap,
    category: "Food",
  },
];

export default SalesShopOrder;

// import React, { useState } from "react";
// import "./product.scss";
// import Coca from "../../assets/images/Coca.png";
// import Pizza from "../../assets/images/Pizza.png";
// import noodle from "../../assets/images/noodle.png";
// import nuggets from "../../assets/images/nuggets.png";
// import tiramisu from "../../assets/images/tiramisu.png";
// import gimbap from "../../assets/images/gimbap.png";
// import Footer from "../../components/Footer";
// import Navbar from "../../admin/Navbar";
// import PizzaHeader from "../../assets/images/margherita-pizza_3.png";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import { RiEditCircleFill } from "react-icons/ri";
// import productService from "../../services/productService";

// const initialProducts = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     description: "Pizza",
//     price: "49.000 VND",
//     image: Pizza,
//     category: "Food",
//   },
//   {
//     id: 2,
//     name: "Coca Cola",
//     description: "The Origin of Coca-Cola",
//     price: "15.000 VND",
//     image: Coca,
//     category: "Food",
//   },
//   {
//     id: 3,
//     name: "Chicken Nuggets",
//     description: "Fast Food",
//     price: "39.000 VND",
//     image: nuggets,
//     category: "Food",
//   },
//   {
//     id: 4,
//     name: "Noodle",
//     description: "A food in the form of long",
//     price: "29.000 VND",
//     image: noodle,
//     category: "Food",
//   },
//   {
//     id: 5,
//     name: "Tiramisu",
//     description: "Where flavors create a harmonious symphony",
//     price: "19.000 VND",
//     image: tiramisu,
//     category: "Food",
//   },
//   {
//     id: 6,
//     name: "Gimbap",
//     description: "1 Pizza + 1 Coca Cola",
//     price: "45.000 VND",
//     image: gimbap,
//     category: "Food",
//   },
// ];

// const CreateProduct = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [productName, setProductName] = useState("");
//   const [price, setPrice] = useState("");
//   const [productImage, setProductImage] = useState("");
//   const [category, setCategory] = useState("");
//   const [status, setStatus] = useState("");
//   const [description, setDescription] = useState("");
//   const [products, setProducts] = useState(initialProducts); // Sử dụng state để quản lý danh sách sản phẩm

//   const selectedProduct = [];

//   const handleSelectProduct = () => {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newProduct = {
//       name: productName,
//       price,
//       image: productImage, // Thực tế bạn sẽ cần xử lý upload ảnh
//       category,
//       status,
//       description,
//     };

//     try {
//       const createdProduct = await productService.createVendorProduct(
//         newProduct
//       );
//       setProducts([...products, createdProduct]); // Cập nhật danh sách sản phẩm
//       console.log("Product created:", createdProduct);
//       setShowForm(false); // Ẩn form sau khi thêm sản phẩm
//     } catch (error) {
//       console.error("Error creating product:", error);
//     }
//   };

//   const handleCreateProductClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <div>
//       <div className="header">
//         <Navbar />
//         <div className="flex flex-row py-4 justify-between relative">
//           <div className="h-bot flex flex-col items-start px-20">
//             <h1>
//               <span className="h-title">
//                 <p
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >{`CHÀO MỪNG ĐẾN VỚI `}</p>
//                 <p className="mt-1">FEV - SHOP</p>
//               </span>
//             </h1>
//             <h3
//               className="h-content mt-3"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//             >
//               Vị ngon trên từng hương vị.
//             </h3>
//           </div>
//           <div className="flex relative">
//             <div className="white-blur"></div>
//             <img
//               style={{ width: "800px" }}
//               loading="lazy"
//               alt=""
//               src={PizzaHeader}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="salesshop-order">
//         <div className="product-list-wrapper">
//           <div className="product-list">
//             <div className="flex justify-between w-full">
//               <h3 className="mb-4 text-2xl font-bold product-name">SẢN PHẨM</h3>
//               <div className="flex gap-5">
//                 <button
//                   className="add-to-cart-wrapper mt-2 bg-blue-500 text-white text-sm p-2 rounded hover:bg-blue-600 transition duration-300"
//                   onClick={handleCreateProductClick}
//                 >
//                   <div className="add-to-cart" style={{ fontSize: "bold" }}>
//                     Thêm sản phẩm
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {showForm && (
//               <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//                 <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/2 max-w-lg">
//                   <div className="p-6">
//                     <h2 className="text-2xl font-semibold mb-4 text-center">
//                       Tạo mới sản phẩm
//                     </h2>
//                     <form onSubmit={handleSubmit}>
//                       <div className="mb-4 flex items-center ">
//                         <label
//                           htmlFor="productName"
//                           className="text-sm font-medium text-gray-700 w-1/4"
//                         >
//                           Tên sản phẩm
//                         </label>
//                         <input
//                           type="text"
//                           id="productName"
//                           name="productName"
//                           value={productName}
//                           onChange={(e) => setProductName(e.target.value)}
//                           className="mt-1 border border-gray-300 rounded-md w-3/4"
//                           required
//                         />
//                       </div>
//                       <div className="mb-4 flex items-center">
//                         <label
//                           htmlFor="price"
//                           className="text-sm font-medium text-gray-700 w-1/4"
//                         >
//                           Giá cả
//                         </label>
//                         <input
//                           type="text"
//                           id="price"
//                           name="price"
//                           value={price}
//                           onChange={(e) => setPrice(e.target.value)}
//                           className="mt-1 border border-gray-300 rounded-md w-3/4"
//                           required
//                         />
//                       </div>
//                       <div className="border-b-2 mb-4"></div>
//                       <div className="mb-4 flex items-center">
//                         <label
//                           htmlFor="productImage"
//                           className="text-sm font-medium text-gray-700 w-1/4"
//                         >
//                           Hình ảnh sản phẩm
//                         </label>
//                         <input
//                           type="file"
//                           id="productImage"
//                           name="productImage"
//                           className="hidden"
//                           accept="image/*"
//                           required
//                         />
//                         <label
//                           htmlFor="productImage"
//                           className="cursor-pointer p-2 border border-gray-300 rounded-md w-3/4 flex items-center justify-center"
//                         >
//                           <AddPhotoAlternateIcon />
//                         </label>
//                       </div>
//                       <div className="border-b-2 mb-4"></div>
//                       <div className="mb-4 flex items-center">
//                         <label
//                           htmlFor="category"
//                           className="text-sm font-medium text-gray-700 w-1/4"
//                         >
//                           Loại sản phẩm
//                         </label>
//                         <select
//                           id="category"
//                           name="category"
//                           value={category}
//                           onChange={(e) => setCategory(e.target.value)}
//                           className="mt-1 p-2 border border-gray-300 rounded-md w-3/4 text-sm"
//                           required
//                         >
//                           <option value="">Select a category</option>
//                           <option value="Food">Food</option>
//                           <option value="Drink">Drink</option>
//                           <option value="Snack">Snack</option>
//                         </select>
//                       </div>
//                       <div className="mb-4 flex items-center">
//                         <label
//                           htmlFor="status"
//                           className="text-sm font-medium text-gray-700 w-1/4"
//                         >
//                           Trạng thái
//                         </label>
//                         <select
//                           id="status"
//                           name="status"
//                           value={status}
//                           onChange={(e) => setStatus(e.target.value)}
//                           className="mt-1 p-2 border border-gray-300 rounded-md w-3/4 text-sm"
//                           required
//                         >
//                           <option value="">Chọn trạng thái</option>
//                           <option value="Active">Còn hàng</option>
//                           <option value="Inactive">Hết hàng</option>
//                         </select>
//                       </div>
//                       <div className="mb-4 flex items-center">
//                         <label
//                           htmlFor="description"
//                           className="text-sm font-medium text-gray-700 w-1/4"
//                         >
//                           Thông tin sản phẩm
//                         </label>
//                         <textarea
//                           id="description"
//                           name="description"
//                           value={description}
//                           onChange={(e) => setDescription(e.target.value)}
//                           className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-3/4 h-24 resize-none"
//                           required
//                         ></textarea>
//                       </div>
//                       <div className="border-b mb-4"></div>
//                       <div className="flex justify-between mt-4">
//                         <button
//                           type="button"
//                           className="w-1/3 text-[#00AEFF] border rounded-lg text-xl"
//                           onClick={() => setShowForm(false)}
//                         >
//                           Hủy bỏ
//                         </button>
//                         <button
//                           type="submit"
//                           className="w-1/3 bg-[#00AEFF] text-white p-2 rounded-lg text-xl"
//                         >
//                           Xác nhận
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
//               {products.map((product) => (
//                 <div
//                   className="bg-white p-5 rounded-xl m-2 flex flex-col"
//                   style={{ boxShadow: "0 10px 50px rgba(181, 179, 255, 0.25)" }}
//                   key={product.id}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-72 object-cover object-top drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] rounded-md"
//                   />
//                   <h3 className="text-xl py-3 text-center font-medium mt-6">
//                     {product.name}
//                   </h3>
//                   <div className="flex justify-between items-center">
//                     <p className="text-lg font-semibold mt-3">
//                       {product.price}
//                     </p>
//                     <button className="p-2 rounded-md text-sm hover:bg-gray-300 flex items-center justify-center">
//                       <span className="text-2xl font-medium">
//                         <RiEditCircleFill />
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="add-to-cart-wrapper mt-2 flex items-center justify-center border text-sm p-2 rounded">
//               <div className="add-to-cart">TẢI THÊM</div>
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );

// };

// export default CreateProduct;

