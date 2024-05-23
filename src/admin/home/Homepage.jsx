import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Homepage.scss";
import slider from "../../assets/images/slider.png";
import Navbar from "../Navbar";
import SearchBar from "../Search";
import Footer from "../../pages/Footer";

const Homepage = () => {
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
                <h1 className="title">HỘI XUÂN LÀNG CÓC 2024 </h1>
                <p className="title-name">LONG PHƯỢNG ĐÌNH</p>
                <p className="description">
                  MỪNG TẾT ĐẾN XUÂN VỀ TRÊN ĐẠI HỌC FPT TP.HCM
                </p>
                <div className="buttons">
                  <button className="edit-button">EDIT</button>
                  <button className="read-more-button">Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Homepage;
