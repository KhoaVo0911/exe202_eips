// import React, { useState } from "react";
// import Shop from "./Shop";
// import shop1 from "../../../assets/images/shop1.png";
// import shop2 from "../../../assets/images/shop2.png";
// import shop3 from "../../../assets/images/shop3.png";
// import shop4 from "../../../assets/images/shop4.png";
// import shop5 from "../../../assets/images/shop5.png";
// import shop6 from "../../../assets/images/shop6.png";
// import "./Shop.scss"

// const listshop = [
//   {
//     id: 1,
//     image: shop1,
//     title: "FPTU EVENT CLUB - THE WAY WE WENT",
//     description: "Câu Lạc Bộ Tổ Chức Sự Kiện Trường Đại Học FPT - FEV",
//   },
//   {
//     id: 2,
//     image: shop2,
//     title: "CÂU LẠC BỘ TRUYỀN THÔNG CÓC SÀI GÒN",
//     description: "Câu Lạc Bộ Truyền Thông Cóc Sài Gòn",
//   },
//   {
//     id: 3,
//     image: shop3,
//     title: "CỘNG ĐỒNG SINH VIÊN TÌNH NGUYỆN SITIGROUP",
//     description: "Cộng Đồng Sinh Viên Tình Nguyện SITIGROUP - Keep loving by sharing",
//   },
//   {
//     id: 4,
//     image: shop4,
//     title: "MEC - MULTIMEDIA & ENTERTAINMENT CLUB",
//     description: "Sân Chơi Bổ Ích Và Môi Trường Trải Nghiệm Cho Sinh Viên Ngành MC & GD",
//   },
//   {
//     id: 5,
//     image: shop5,
//     title: "FBK - FPT BEAT KING CLUB",
//     description: "Câu Lạc Bộ Âm Nhạc Thuộc Trường Đại Học FPT",
//   },
//   {
//     id: 6,
//     image: shop6,
//     title: "FFC - CÂU LẠC BỘ BÓNG ĐÁ FPTU HCM",
//     description: "Câu Lạc Bộ Bóng Đá Trường Đại Học FPT HCM",
//   },
// ];

// const ListShop = () => {
//   const [data, setData] = useState(listshop);
//   const [visibleShops, setVisibleShops] = useState(6);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [editingShop, setEditingShop] = useState(null);

//   const loadMore = () => {
//     setVisibleShops((prev) => prev + 3);
//     setCurrentPage((prev) => prev + 1);
//   };

//   const handleEdit = (shop) => {
//     setEditingShop(shop);
//   };

//   const handleSave = (updatedShop) => {
//     setData(
//       data.map((shop) => (shop.id === updatedShop.id ? updatedShop : shop))
//     );
//     setEditingShop(null);
//   };

//   return (
//     <div>
//       <div className="shop-list">
//         {data.slice(0, visibleShops).map((item) => (
//           <Shop
//             key={item.id}
//             item={item}
//             onEdit={handleEdit}
//             onSave={handleSave}
//             editingShop={editingShop}
//           />
//         ))}
//       </div>
//       <div className="clearfix"></div>
//       {visibleShops < data.length && (
//         <button className="btn-load-more" onClick={loadMore}>
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default ListShop;

// shopData.js
import shop1 from "../../../assets/images/shop1.png";
import shop2 from "../../../assets/images/shop2.png";
import shop3 from "../../../assets/images/shop3.png";
import shop4 from "../../../assets/images/shop4.png";
import shop5 from "../../../assets/images/shop5.png";
import shop6 from "../../../assets/images/shop6.png";

const listshop = [
  {
    id: 1,
    image: shop1,
    title: "FPTU EVENT CLUB - THE WAY WE WENT",
    description: "Câu Lạc Bộ Tổ Chức Sự Kiện Trường Đại Học FPT - FEV",
  },
  {
    id: 2,
    image: shop2,
    title: "CÂU LẠC BỘ TRUYỀN THÔNG CÓC SÀI GÒN",
    description: "Câu Lạc Bộ Truyền Thông Cóc Sài Gòn",
  },
  {
    id: 3,
    image: shop3,
    title: "CỘNG ĐỒNG SINH VIÊN TÌNH NGUYỆN SITIGROUP",
    description: "Cộng Đồng Sinh Viên Tình Nguyện SITIGROUP - Keep loving by sharing",
  },
  {
    id: 4,
    image: shop4,
    title: "MEC - MULTIMEDIA & ENTERTAINMENT CLUB",
    description: "Sân Chơi Bổ Ích Và Môi Trường Trải Nghiệm Cho Sinh Viên Ngành MC & GD",
  },
  {
    id: 5,
    image: shop5,
    title: "FBK - FPT BEAT KING CLUB",
    description: "Câu Lạc Bộ Âm Nhạc Thuộc Trường Đại Học FPT",
  },
  {
    id: 6,
    image: shop6,
    title: "FFC - CÂU LẠC BỘ BÓNG ĐÁ FPTU HCM",
    description: "Câu Lạc Bộ Bóng Đá Trường Đại Học FPT HCM",
  },
];

export default listshop;
