import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import banner from "../assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="w-full mx-auto"
        >
          <SwiperSlide>
            <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={banner} alt="" />
              </div>
              <div className="md:w-1/2 ml-14">
                <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                  HỆ THỐNG{" "}
                  <span className="text-brandPrimary leading-snug">
                    QUẢN LÝ{" "}
                  </span>
                  <span className="text-neutralDGrey leading-snug">VÀ </span>
                  <span className="text-brandPrimary leading-snug">
                    BÁN HÀNG
                  </span>
                  <span className="text-neutralDGrey leading-snug">
                    {" "}
                    TẠI SỰ KIỆN
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-2">
                  ESMS mang đến các nhà bán hàng trải nghiệm
                </p>
                <p className="text-black font-bold text-2xl mb-0">
                  NHANH CHÓNG, DỄ DÀNG, HIỆU QUẢ!
                </p>
                <button className="px-9 py-4 bg-brandPrimary text-white rounded hover:bg-neutralDGrey mt-6">
                  TRẢI NGHIỆM NGAY
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={banner2} alt="" />
              </div>
              <div className="md:w-1/2 ml-14">
                <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                  ESMS - "CHÌA KHÓA" NÂNG CAO{" "}
                  <span className="text-brandPrimary leading-snug">
                    HIỆU QUẢ KINH DOANH
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-2">
                  Giải pháp toàn diện cho việc quản lý và bán hàng
                </p>
                <p className="text-neutralGrey text-base mb-0">
                  tại các sự kiện với nhiều tiện ích.
                </p>
                <button className="px-9 py-4 bg-brandPrimary text-white rounded hover:bg-neutralDGrey mt-6">
                  TRẢI NGHIỆM NGAY
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={banner3} alt="" />
              </div>
              <div className="md:w-1/2 ml-14">
                <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                  QUẢN LÝ BÁN HÀNG{" "}
                  <span className="text-brandPrimary leading-snug">
                    MANG LẠI LỢI ÍCH GÌ?
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-1.5">
                  Quản lý hàng hóa hiệu quả
                </p>
                <p className="text-neutralGrey text-base mb-1.5">
                  Giao dịch nhanh chóng và an toàn
                </p>
                <p className="text-neutralGrey text-base mb-1.5">
                  Theo dõi doanh thu chính xác
                </p>
                <p className="text-neutralGrey text-base mb-1.5">
                  Nâng cao trải nghiệm khách hàng
                </p>
                <p className="text-neutralGrey text-base mb-1.5">
                  Tối ưu hóa hiệu suất kinh doanh
                </p>
                <button className="px-9 py-4 bg-brandPrimary text-white rounded hover:bg-neutralDGrey mt-6">
                  TRẢI NGHIỆM NGAY
                </button>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;

// Custom CSS for Swiper navigation buttons
const style = document.createElement("style");
style.textContent = `
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--neutralDGrey); /* Replace with the correct color value */
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: var(--neutralDHoverGrey); /* Replace with a hover color value if needed */
  }
`;
document.head.append(style);
