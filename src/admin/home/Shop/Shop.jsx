// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import slider from "../../../assets/images/slider.png";
// import Navbar from "../../Navbar";
// import Footer from "../../Footer";
// import a_1 from "../../../assets/images/a_1.png";
// import "react-datepicker/dist/react-datepicker.css";
// import { MdOutlineAddPhotoAlternate } from "react-icons/md";

// const Shop = ({ item, onEdit, onSave, editingShop }) => {
//   const { id, image, title, description } = item || {};
//   const [shopTitle, setShopTitle] = useState(title || "");
//   const [shopDescription, setShopDescription] = useState(description || "");
//   const [shopImage, setShopImage] = useState(image || null);
//   const [showForm, setShowForm] = useState(false);
//   const [weekday, setWeekday] = useState(""); // Added state for weekday
//   const [eventType, setEventType] = useState(""); // Added state for eventType
//   const [category, setCategory] = useState(""); // Added state for category

//   useEffect(() => {
//     if (editingShop && editingShop.id === id) {
//       setShopTitle(editingShop.title);
//       setShopDescription(editingShop.description);
//       setShopImage(editingShop.image);
//       setShowForm(true);
//     } else {
//       setShowForm(false);
//     }
//   }, [editingShop, id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({
//       ...item,
//       title: shopTitle,
//       description: shopDescription,
//       image: shopImage,
//     });
//     setShowForm(false);
//   };

//   return (
//     <div className="div">
//       <Navbar />
//       <div className="slider-container">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//         >
//           <SwiperSlide>
//             <div className="slide-content">
//               <div className="image-container">
//                 <img src={slider} alt="Event" />
//               </div>
//               <div className="text-container">
//                 <h1 className="title">HỘI XUÂN LÀNG CÓC 2024 </h1>
//                 <p className="title-name">LONG PHƯỢNG ĐÌNH</p>
//                 <div>
//                   <p>
//                     <strong>ID:</strong> 1
//                   </p>
//                   <p>
//                     <strong>Area:</strong> FPT Floor 2
//                   </p>
//                   <p>
//                     <strong>Description:</strong> Mừng tết đến xuân về trên đại
//                     học FPT
//                   </p>
//                   <p>
//                     <strong>Begin Date:</strong> 20/01/2024
//                   </p>
//                   <p>
//                     <strong>End Date:</strong> 20/01/2024
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//       <CreateShopSection onCreateShopClick={() => setShowForm(true)} />
//       <div className="bg-slate-100 p-10 mt-10">
//         <div className="flex space-x-10 ml-10 font-bold">
//           <a href="/ListShop">SHOP</a>
//           <a href="/ListCards">CARD</a>
//           <a href="/ListOrders">ORDER</a>
//         </div>
//       </div>
//       <div className="relative w-full mt-10 flex items-center mb-10">
//         <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold absolute left-[80px]">
//           LIST SHOP
//         </div>
//         <div className="flex ml-[900px] space-x-16">
//           <div style={{ minWidth: 140 }}>
//             <div>
//               <label htmlFor="weekday-select">Events</label>
//               <select
//                 id="weekday-select"
//                 value={weekday}
//                 onChange={(e) => setWeekday(e.target.value)}
//               >
//                 <option value={"Monday"}>Monday</option>
//                 <option value={"Tuesday"}>Tuesday</option>
//                 <option value={"Wednesday"}>Wednesday</option>
//                 <option value={"Thursday"}>Thursday</option>
//                 <option value={"Friday"}>Friday</option>
//                 <option value={"Saturday"}>Saturday</option>
//                 <option value={"Sunday"}>Sunday</option>
//               </select>
//             </div>
//           </div>
//           <div style={{ minWidth: 150 }}>
//             <div>
//               <label htmlFor="event-select">Area</label>
//               <select
//                 id="event-select"
//                 value={eventType}
//                 onChange={(e) => setEventType(e.target.value)}
//               >
//                 <option value={"Conference"}>Conference</option>
//                 <option value={"Workshop"}>Workshop</option>
//                 <option value={"Seminar"}>Seminar</option>
//                 <option value={"Webinar"}>Webinar</option>
//               </select>
//             </div>
//           </div>
//           <div style={{ minWidth: 150 }}>
//             <div>
//               <label htmlFor="category-select">Any Category</label>
//               <select
//                 id="category-select"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value={"Tech"}>Tech</option>
//                 <option value={"Business"}>Business</option>
//                 <option value={"Education"}>Education</option>
//                 <option value={"Health"}>Health</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showForm ? (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-4">Create Shop</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="shopTitle"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Shop Title
//                   </label>
//                   <input
//                     type="text"
//                     id="shopTitle"
//                     name="shopTitle"
//                     value={shopTitle}
//                     onChange={(e) => setShopTitle(e.target.value)}
//                     className="mt-1 border border-gray-300 rounded-md w-full"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="shopDescription"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Shop Description
//                   </label>
//                   <textarea
//                     id="shopDescription"
//                     name="shopDescription"
//                     value={shopDescription}
//                     onChange={(e) => setShopDescription(e.target.value)}
//                     className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="shopImage"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Shop Image
//                   </label>
//                   <input
//                     type="file"
//                     id="shopImage"
//                     name="shopImage"
//                     onChange={(e) =>
//                       setShopImage(URL.createObjectURL(e.target.files[0]))
//                     }
//                     className="hidden"
//                     accept="image/*"
//                     required
//                   />
//                   <label
//                     htmlFor="shopImage"
//                     className="cursor-pointer p-2 border border-gray-300 rounded-md w-1/5"
//                   >
//                     <MdOutlineAddPhotoAlternate />
//                   </label>
//                 </div>
//                 <div className="border-b mb-4"></div>
//                 <div className="flex justify-end gap-5">
//                   <button
//                     type="button"
//                     className="w-full text-[#0adc5d] border rounded-lg text-xl"
//                     onClick={() => setShowForm(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="w-full bg-[#0adc5d] text-white p-2 rounded-lg text-xl"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="shop-item-header">
//             <div className="shop-item-name">
//               <p>{title}</p>
//             </div>
//           </div>
//           <div className="shop-item-desc">
//             <button className="shop-item-button" onClick={() => onEdit(item)}>
//               EDIT
//             </button>
//             <p>{description}</p>
//           </div>
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// };

// const CreateShopSection = ({ onCreateShopClick }) => {
//   return (
//     <div className="flex justify-center items-center bg-purple-100 p-10 mt-10 space-x-10">
//       <img className="h-64 w-80" src={a_1} alt="People sitting on a sofa" />
//       <div>
//         <h2 className="text-4xl font-bold font-DmSans text-gray-900 mb-4">
//           Make your own Shop
//         </h2>
//         <p className="text-xl text-gray-600 font-DmSans mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//         <button
//           className="bg-[#000080] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
//           onClick={onCreateShopClick}
//         >
//           Create Shop
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Shop;

// Shop.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import slider from "../../../assets/images/slider.png";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import a_1 from "../../../assets/images/a_1.png";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import listshop from "./ListShop"; // Importing shop data
import "./Shop.scss"; // Importing CSS

const Shop = () => {
  const [shops, setShops] = useState(listshop);
  const [editingShop, setEditingShop] = useState(null);

  const handleEdit = (shop) => {
    setEditingShop(shop);
  };

  const handleSave = (updatedShop) => {
    if (updatedShop.id) {
      setShops((prevShops) =>
        prevShops.map((shop) =>
          shop.id === updatedShop.id ? updatedShop : shop
        )
      );
    } else {
      updatedShop.id = shops.length + 1;
      setShops([...shops, updatedShop]);
    }
    setEditingShop(null);
  };

  const handleCreateShopClick = () => {
    setEditingShop({
      id: null,
      title: "",
      description: "",
      startdate: "",
      image: null,
    });
  };

  return (
    <div className="div">
      <Navbar />
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img src={slider} alt="Event" />
              </div>
              <div className="text-container">
                <h1 className="title">HỘI XUÂN LÀNG CÓC 2024</h1>
                <p className="title-name">LONG PHƯỢNG ĐÌNH</p>
                <div>
                  <p>
                    <strong>ID:</strong> 1
                  </p>
                  <p>
                    <strong>Area:</strong> FPT Floor 2
                  </p>
                  <p>
                    <strong>Description:</strong> Mừng tết đến xuân về trên đại
                    học FPT
                  </p>
                  <p>
                    <strong>Begin Date:</strong> 20/01/2024
                  </p>
                  <p>
                    <strong>End Date:</strong> 20/01/2024
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <CreateShopSection onCreateShopClick={handleCreateShopClick} />
      <div className="bg-slate-100 p-10 mt-10">
        <div className="flex space-x-10 ml-10 font-bold">
          <a href="/ListShop">SHOP</a>
          <a href="/ListCards">CARD</a>
          <a href="/ListOrders">ORDER</a>
        </div>
      </div>
      <div className="relative w-full mt-10 flex items-center mb-10">
        <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold absolute left-[80px]">
          LIST SHOP
        </div>
        <div className="flex ml-[900px] space-x-16">
          {/* ... (filters section here) */}
        </div>
      </div>
      <div className="shop-list">
        {shops.map((shop) => (
          <ShopItem
            key={shop.id}
            item={shop}
            onEdit={handleEdit}
            onSave={handleSave}
            editingShop={editingShop}
          />
        ))}
      </div>
      {editingShop && (
        <ShopForm
          item={editingShop}
          onSave={handleSave}
          onCancel={() => setEditingShop(null)}
        />
      )}
      <Footer />
    </div>
  );
};

const ShopItem = ({ item, onEdit }) => {
  const { id, image, title, description } = item;

  return (
    <div className="shop-item">
      <div className="shop-item-img-container">
        <img className="shop-item-image" src={image} alt={title} />
      </div>
      <div className="shop-item-info">
        <div className="shop-item-header">
          <div className="shop-item-name">
            <p>{title}</p>
          </div>
        </div>
        <div className="shop-item-desc">
          <button className="shop-item-button" onClick={() => onEdit(item)}>
            EDIT
          </button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ShopForm = ({ item, onSave, onCancel }) => {
  const { id, image, title, description } = item;
  const [shopTitle, setShopTitle] = useState(title || "");
  const [shopDescription, setShopDescription] = useState(description || "");
  const [shopImage, setShopImage] = useState(image || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...item,
      title: shopTitle,
      description: shopDescription,
      image: shopImage,
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {id ? "Edit Shop" : "Create Shop"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-5">
              <label
                htmlFor="shopTitle"
                className="flex items-center text-sm font-medium text-gray-700 w-1/4"
              >
                Shop Title
              </label>
              <input
                type="text"
                id="shopTitle"
                name="shopTitle"
                value={shopTitle}
                onChange={(e) => setShopTitle(e.target.value)}
                className="mt-1 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4 flex gap-5">
              <label
                htmlFor="shopDescription"
                className="flex items-center text-sm font-medium text-gray-700 w-1/4"
              >
                Shop Description
              </label>
              <textarea
                id="shopDescription"
                name="shopDescription"
                value={shopDescription}
                onChange={(e) => setShopDescription(e.target.value)}
                className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
                required
              ></textarea>
            </div>
            <div className="mb-4 flex gap-5">
              <label
                htmlFor="shopImage"
                className="flex items-center text-sm font-medium text-gray-700 w-1/4"
              >
                Shop Image
              </label>
              <input
                type="file"
                id="shopImage"
                name="shopImage"
                onChange={(e) =>
                  setShopImage(URL.createObjectURL(e.target.files[0]))
                }
                className="hidden"
                accept="image/*"
                required
              />
              <label
                htmlFor="shopImage"
                className="cursor-pointer p-2 border border-gray-300 rounded-md w-1/5"
              >
                <MdOutlineAddPhotoAlternate />
              </label>
            </div>
            <div className="border-b mb-4"></div>
            <div className="flex justify-end gap-5">
              <button
                type="button"
                className="w-full text-[#0adc5d] border rounded-lg text-xl"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full bg-[#0adc5d] text-white p-2 rounded-lg text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CreateShopSection = ({ onCreateShopClick }) => {
  return (
    <div className="flex justify-center items-center bg-purple-100 p-10 mt-10 space-x-10">
      <img className="h-64 w-80" src={a_1} alt="People sitting on a sofa" />
      <div>
        <h2 className="text-4xl font-bold font-DmSans text-gray-900 mb-4">
          Make your own Shop
        </h2>
        <p className="text-xl text-gray-600 font-DmSans mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          className="bg-[#4F4F4F] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
          onClick={onCreateShopClick}
        >
          Create Shop
        </button>
      </div>
    </div>
  );
};

export default Shop;
