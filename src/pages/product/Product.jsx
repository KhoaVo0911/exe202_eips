// import React from "react";
// import "./product.scss"; // Đảm bảo đã có CSS phù hợp trong file này
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import Coca from "../../assets/images/Coca.png";
// import Pizza from "../../assets/images/Pizza.png";
// import noodle from "../../assets/images/noodle.png";
// import nuggets from "../../assets/images/nuggets.png";
// import tiramisu from "../../assets/images/tiramisu.png";
// import combo from "../../assets/images/combo.png";

// // Data for the products
// const products = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     description:
//       "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.",
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
//     name: "Combo A",
//     description: "1 Pizza + 1 Coca Cola",
//     price: "45.000 VND",
//     image: combo,
//     category: "combo",
//   },
// ];

// function Product() {
//   return (
//     <div className="salesshop-order">
//       <div className="salesshop-order-child" />
//       <section className="homepage">
//         <div className="first-fold">
//           <header className="hero-image" />
//           <img
//             className="first-fold-child"
//             loading="lazy"
//             alt=""
//             src="/group-38@2x.png"
//           />
//           <div className="setting">
//             <div className="setting-image" />
//             <img className="setting-icon" loading="lazy" alt="" src="/setting-icon.png" />
//             <b className="product">Product</b>
//             <b className="shop-order">Shop Order</b>
//             <b className="order">Order</b>
//             <b className="setting1">Setting</b>
//             <div className="avatar">
//               <img
//                 className="aspect-ratio-keeper-addition"
//                 loading="lazy"
//                 alt=""
//                 src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
//               />
//             </div>
//             <img
//               className="logout-icon"
//               loading="lazy"
//               alt=""
//               src="/logout.svg"
//             />
//           </div>
//           <h1 className="welcome-to-fev-container">
//             <span className="welcome-to-fev-container1">
//               <p className="welcome-to">Welcome to </p>
//               <p className="fev-shop">FEV - SHOP</p>
//             </span>
//           </h1>
//           <h3 className="time-to-enjoy">Time to enjoy our delicious food.</h3>
//           <button className="button">
//             <div className="order-now">ORDER NOW</div>
//           </button>
//         </div>
//         <img
//           className="margherita-pizza-3-icon"
//           loading="lazy"
//           alt=""
//           src="/margheritapizza-3@2x.png"
//         />
//         <div className="image" />
//       </section>
//       <section className="product-list-wrapper">
//         <div className="product-list">
//           <h3 className="product1">PRODUCT</h3>
//           <div className="product-items">
//             {products.map}
//             <div className="product-grid">
//               <div className="product-card">
//                 <div className="card-content-parent">
//                   <div className="card-content">
//                     <div className="wrapper-mask-group">
//                       <img
//                         className="mask-group-icon"
//                         loading="lazy"
//                         alt=""
//                         src="/mask-group@2x.png"
//                       />
//                     </div>
//                     <div className="product-details">
//                       <div className="product-name">Margherita Pizza</div>
//                       <div className="product-description">
//                         Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.
//                       </div>
//                     </div>
//                     <div className="product-price">49.000 VND</div>
//                     <div className="product-category">
//                       <div className="category">
//                         <div className="food">Food</div>
//                         <img
//                           className="noun-arrow-2333164-1-icon"
//                           alt=""
//                           src="/noun-arrow-2333164-1.svg"
//                         />
//                       </div>
//                       <button className="add-to-cart-wrapper">
//                         <div className="add-to-cart">Add to cart</div>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-grid-inner">
//                   <button className="rectangle-parent">
//                     <div className="frame-child" />
//                     <b className="load-more">Load More</b>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Product;

//       {/* <Navbar />
//       <div className="w-full flex flex-wrap justify-center items-center p-4">
//         <div className="card-content-parent">
//           <div className="grid grid-cols-3 gap-4">
//             {products.map((product) => (
//               <div key={product.id} className="card-content">
//                 <a href="#">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="mask-group-icon"
//                   />
//                   <div>
//                     <span className="text-gray-400 uppercase text-xs">
//                       Brand
//                     </span>
//                     <p className="text-lg font-bold text-black truncate">
//                       {product.name}
//                     </p>
//                     <p className="product-details">{product.description}</p>
//                     <div className="flex items-center justify-between mt-2">
//                       <p className="text-lg font-semibold text-black">
//                         {product.price}
//                       </p>
//                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer /> */}

// import React from "react";
// import "./product.scss";
// // import Navbar from "../Navbar";
// import Footer from "../Footer";
// import Coca from "../../assets/images/Coca.png";
// import Pizza from "../../assets/images/Pizza.png";
// import noodle from "../../assets/images/noodle.png";
// import nuggets from "../../assets/images/nuggets.png";
// import tiramisu from "../../assets/images/tiramisu.png";
// import combo from "../../assets/images/combo.png";

// const products = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     description:
//       "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.",
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
//     category: "Drink",
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
//     category: "Dessert",
//   },
//   {
//     id: 6,
//     name: "Combo A",
//     description: "1 Pizza + 1 Coca Cola",
//     price: "45.000 VND",
//     image: combo,
//     category: "Combo",
//   },
// ];

// function Product() {
//   return (
//     <div className="salesshop-order">
//       <div className="salesshop-order-child" />
//       <section className="homepage">
//         <div className="first-fold">
//           <header className="hero-image" />
//           <img
//             className="first-fold-child"
//             loading="lazy"
//             alt=""
//             src="/group-38@2x.png"
//           />
//           <div className="setting">
//             <div className="setting-image" />
//             <img className="setting-icon" loading="lazy" alt="" />
//             <b className="product">Product</b>
//             <b className="shop-order">Shop Order</b>
//             <b className="order">Order</b>
//             <b className="setting1">Setting</b>
//             <div className="avatar">
//               <img
//                 className="aspect-ratio-keeper-addition"
//                 loading="lazy"
//                 alt=""
//                 src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
//               />
//             </div>
//             <img
//               className="logout-icon"
//               loading="lazy"
//               alt=""
//               src="/logout.svg"
//             />
//           </div>
//           <h1 className="welcome-to-fev-container">
//             <span className="welcome-to-fev-container1">
//               <p className="welcome-to">{`Welcome to `}</p>
//               <p className="fev-shop">FEV - SHOP</p>
//             </span>
//           </h1>
//           <h3 className="time-to-enjoy">Time to enjoy our delicious food.</h3>
//           <button className="button">
//             <div className="order-now">ORDER NOW</div>
//           </button>
//         </div>
//         <img
//           className="margherita-pizza-3-icon"
//           loading="lazy"
//           alt=""
//           src="/margheritapizza-3@2x.png"
//         />
//         <div className="image" />
//       </section>
//       <section className="product-list-wrapper">
//         <div className="product-list">
//           <h3 className="product1">PRODUCT</h3>
//           <div className="product-items">
//             <div className="product-grid">
//               <div className="product-card">
//                 <div className="card-content-parent">
//                   <div className="card-content">
//                     <div className="wrapper-mask-group">
//                       <img
//                         className="mask-group-icon"
//                         loading="lazy"
//                         alt=""
//                         src="/mask-group@2x.png"
//                       />
//                     </div>
//                     <div className="product-details">
//                       <div className="product-name">Margherita Pizza</div>
//                       <div className="product-description">
//                         Made with San Marzano tomatoes, mozzarella cheese, and
//                         fresh basil.
//                       </div>
//                     </div>
//                     <div className="product-price">49.000 VND</div>
//                     <div className="product-category">
//                       <div className="category">
//                         <div className="food">Food</div>
//                         <img
//                           className="noun-arrow-2333164-1-icon"
//                           alt=""
//                           src="/noun-arrow-2333164-1.svg"
//                         />
//                       </div>
//                       <button className="add-to-cart-wrapper">
//                         <div className="add-to-cart">Add to cart</div>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-grid-inner">
//                   <button className="rectangle-parent">
//                     <div className="frame-child" />
//                     <b className="load-more">Load More</b>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Product;

import React from "react";
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
      {/* <div className="homepage">
        <div className="h-top">
          <img
            className="first-fold-child"
            loading="lazy"
            alt=""
            src="/group-38@2x.png"
          />

          <b className="product">Product</b>
          <b className="shop-order">Shop Order</b>
          <b className="order">Order</b>
          <b className="setting1">Setting</b>
          <div className="avatar">
            <img
              className="aspect-ratio-keeper-addition"
              loading="lazy"
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
            />
          </div>
          <img
            className="logout-icon"
            loading="lazy"
            alt=""
            src="/logout.svg"
          />
        </div>
        <div className="h-bot">
          <h1 className="welcome-to-fev-container">
            <span className="welcome-to-fev-container1">
              <p className="welcome-to">{`Welcome to `}</p>
              <p className="fev-shop">FEV - SHOP</p>
            </span>
          </h1>
          <h3 className="time-to-enjoy">Time to enjoy our delicious food.</h3>
          <button className="button">
            <div className="order-now">ORDER NOW</div>
          </button>
          <img
            className="margherita-pizza-3-icon"
            loading="lazy"
            alt=""
            src="/margheritapizza-3@2x.png"
          />
          <div className="image" />
        </div>
      </div> */}

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
