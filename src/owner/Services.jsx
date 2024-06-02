// import React from "react";
// // import t1 from "../assets/images/t1.webp";
// // import t2 from "../assets/images/t2.webp";
// // import t3 from "../assets/images/t3.webp";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import { alpha, styled } from "@mui/material/styles";
// import PropTypes from 'prop-types';

// const StyledIcon = styled("div")(({ theme }) => ({
//   margin: "auto",
//   display: "flex",
//   borderRadius: "50%",
//   alignItems: "center",
//   width: theme.spacing(8),
//   height: theme.spacing(8),
//   justifyContent: "center",
//   marginBottom: theme.spacing(3),
// }));

// const testimonialData = [
//   {
//     id: 1,
//     name: "QUẢN LÝ SẢN PHẨM HIỆU QUẢ",
//     post: "MARKETING MANAGER",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//     icon: <CampaignIcon fontSize="large" />,
//   },
//   {
//     id: 2,
//     name: "Thanh toán nhanh chóng, tiện lợi",
//     post: "MARKETING MANAGER",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//     icon: <CampaignIcon fontSize="large" />,
//   },
//   {
//     id: 3,
//     name: "Mã QR theo từng đơn hàng",
//     post: "MARKETING MANAGER",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//     icon: <CampaignIcon fontSize="large" />,
//   },
//   {
//     id: 4,
//     name: "Quản lý đơn hàng tập trung",
//     post: "MARKETING MANAGER",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//     icon: <CampaignIcon fontSize="large" />,
//   },
//   {
//     id: 5,
//     name: "Quản lý khách hàng chuyên nghiệp",
//     post: "MARKETING MANAGER",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//     icon: <CampaignIcon fontSize="large" />,
//   },
//   {
//     id: 6,
//     name: "Dễ dàng sử dụng",
//     post: "MARKETING MANAGER",
//     desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//     icon: <CampaignIcon fontSize="large" />,
//   },
// ];

// // ----------------------------------------------------------------------

// Testimonial.propTypes = {
//   color: PropTypes.string,
//   icon: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
//   sx: PropTypes.object,
// };

// const Heading = ({ subtitle, title }) => {
//   return (
//     <div className="text-center mb-10">
//       <h2 className="text-2xl font-semibold text-gray-600">{subtitle}</h2>
//       <h1 className="text-4xl font-bold text-brandPrimary">{title}</h1>
//     </div>
//   );
// };

// const Testimonial = ({ title, total, icon, color = 'primary', sx, ...other }) => {
//   return (
//     <section className="py-12" id="service">
//       <div className="container mx-auto">
//         <Heading
//           subtitle="VÌ SAO NÊN ĐĂNG KÝ?"
//           title="ESMS - HỆ THỐNG QUẢN LÝ VÀ BÁN HÀNG TRONG SỰ KIỆN"
//         />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="service">
//           {testimonialData.map((val) => (
//             <div
//               key={val.id}
//               className="bg-white shadow-lg p-8 transition duration-500 hover:bg-brandPrimary hover:text-white cursor-pointer"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="relative mr-4">
//                   <StyledIcon
//                     sx={{
//                       color: (theme) => theme.palette[color].dark,
//                       backgroundImage: (theme) =>
//                         `linear-gradient(135deg, ${alpha(
//                           theme.palette[color].dark,
//                           0
//                         )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
//                     }}
//                   >
//                     {icon}
//                   </StyledIcon>
//                 </div>

//                 <div className="ml-6">
//                   <h2 className="text-xl font-semibold">{val.name}</h2>
//                   <span className="text-brandPrimary transition duration-500 hover:text-white">
//                     {val.post}
//                   </span>
//                 </div>
//               </div>
//               <p className="text-gray-600 transition duration-500 hover:text-white">
//                 {val.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaidIcon from "@mui/icons-material/Paid";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { alpha, styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

const testimonialData = [
  {
    id: 1,
    name: "QUẢN LÝ SẢN PHẨM HIỆU QUẢ",
    post: "MARKETING MANAGER",
    desc: "Phần mềm ESMS giúp bạn quản lý toàn bộ sản phẩm một cách hiệu quả, từ việc nhập hàng, theo dõi tồn kho, đến việc cập nhật thông tin sản phẩm.",
    icon: <Inventory2Icon fontSize="large" />,
  },
  {
    id: 2,
    name: "THANH TOÁN NHANH CHÓNG, TIỆN LỢI",
    post: "MARKETING MANAGER",
    desc: "ESMS tích hợp nhiều phương thức thanh toán hiện đại, giúp giao dịch diễn ra nhanh chóng và tiện lợi.",
    icon: <PaidIcon fontSize="large" />,
  },
  {
    id: 3,
    name: "MÃ QR THEO TỪNG ĐƠN HÀNG",
    post: "MARKETING MANAGER",
    desc: "Với tính năng mã QR độc đáo cho từng đơn hàng, ESMS giúp bạn quản lý và truy xuất thông tin đơn hàng một cách nhanh chóng và chính xác.",
    icon: <QrCode2Icon fontSize="large" />,
  },
  {
    id: 4,
    name: "QUẢN LÝ ĐƠN HÀNG TẬP TRUNG",
    post: "MARKETING MANAGER",
    desc: "Hệ thống thông báo theo thời gian thực giúp bạn kiểm soát chặt chẽ và xử lý kịp thời các đơn hàng.",
    icon: <ManageSearchIcon fontSize="large" />,
  },
  {
    id: 5,
    name: "QUẢN LÝ KHÁCH HÀNG CHUYÊN NGHIỆP",
    post: "MARKETING MANAGER",
    desc: "Dễ dàng quản lý thông tin liên hệ, lịch sử mua sắm và phản hồi của khách hàng.",
    icon: <SupportAgentIcon fontSize="large" />,
  },
  {
    id: 6,
    name: "DỄ DÀNG SỬ DỤNG",
    post: "MARKETING MANAGER",
    desc: "ESMS được thiết kế với giao diện thân thiện và dễ sử dụng, phù hợp cho mọi đối tượng người dùng.",
    icon: <CheckCircleOutlineIcon fontSize="large" />,
  },
];

const Heading = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl font-semibold text-gray-600">{subtitle}</h2>
      <h1 className="text-4xl font-bold text-brandPrimary">{title}</h1>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-12" id="service">
      <div className="container mx-auto">
        <Heading
          subtitle="VÌ SAO NÊN ĐĂNG KÝ?"
          title="ESMS - HỆ THỐNG QUẢN LÝ VÀ BÁN HÀNG TRONG SỰ KIỆN"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-radius" id="service">
          {testimonialData.map((val) => (
            <div
              key={val.id}
              className="bg-customHoverBg shadow-lg p-8 transition duration-500 hover:bg-brandPrimary hover:text-white cursor-pointer group rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative mr-5">
                  <StyledIcon
                    sx={{
                      color: (theme) => theme.palette.success.dark,
                      backgroundImage: (theme) =>
                        `linear-gradient(135deg, ${alpha(
                          theme.palette.success.dark,
                          0
                        )} 0%, ${alpha(theme.palette.info.dark, 0.24)} 100%)`,
                    }}
                  >
                    {val.icon}
                  </StyledIcon>
                </div>

                <div className="ml-6">
                  <h2 className="text-brandPrimary text-xl font-semibold group-hover:text-white">
                    {val.name}
                  </h2>
                  {/* <span className="text-brandPrimary transition duration-500 hover:text-white">
                    {val.post}
                  </span> */}
                </div>
              </div>
              <p className="text-gray-600 transition duration-500 group-hover:text-white">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default Testimonial;
