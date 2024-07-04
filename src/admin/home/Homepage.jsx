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
import Footer from "../../components/Footer";
import Shop from "./Shop/Shop";
import CardList from "../Card/CardList";
// import sk1 from "./"

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
                <h1 className="title">FPT EDU’S GOT TALENT 2023 </h1>
                <p className="title-name"> SLAY YOUR WAY</p>
                <p className="description">
                  CUỘC THI TÌM KIẾM TÀI NĂNG FPT EDU’S GOT TALENT 2023
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
      {/* <CardList />
      <Shop /> */}
      <SearchBar />
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
