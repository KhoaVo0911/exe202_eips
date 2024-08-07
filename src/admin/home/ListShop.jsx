import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Homepage.scss";
import slider from "../../assets/images/slider.png";
import Navbar from "../Navbar";
import SearchBar from "../Search";
import Footer from "../Footer";
import a_1 from "../../assets/images/a_1.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-datepicker/dist/react-datepicker.css";
import CardList from "../Card/CardList";

const ListShop = () => {
  const [startDate, setStartDate] = useState(null);
  const [place, setPlace] = useState("");
  const [shopType, setShopType] = useState("");
  const [category, setCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [shopImage, setShopImage] = useState(null);
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [shopStartDate, setShopStartDate] = useState(null);

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleShopTypeChange = (event) => {
    setShopType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCreateShopClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle logic for adding a shop here
    console.log("Form submitted!");
    console.log("Shop Image:", shopImage);
    console.log("Shop Name:", shopName);
    console.log("Shop Description:", shopDescription);
    console.log("Shop Start Date:", shopStartDate);
    setShowForm(false);
  };

  const defaultTheme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            color: "white",
            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          },
          icon: {
            color: "white",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "navy",
              color: "white",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "darkblue",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "lightblue",
          },
        },
      },
    },
  });

  const customTheme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            backgroundColor: "#F2F3FC",
            borderRadius: "12px",
            padding: "10px 16px",
            "&:hover": {
              backgroundColor: "#EDEFF9",
            },
            "&.Mui-focused": {
              backgroundColor: "#EDEFF9",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          icon: {
            color: "#242565",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#242565",
            fontSize: "14px",
            fontWeight: "bold",
            top: "-4px",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#D6D8F2",
              color: "#242565",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#C2C4E6",
            },
          },
        },
      },
    },
  });

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
        <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold absolute left-[80px]  ">
          LIST SHOP
        </div>
        <div className="flex ml-[900px] space-x-16">
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="shop-type-select-label">Shop Type</InputLabel>
                <Select
                  labelId="shop-type-select-label"
                  id="shop-type-select"
                  value={shopType}
                  onChange={handleShopTypeChange}
                  label="Shop Type"
                >
                  <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  <MenuItem value={"Electronics"}>Electronics</MenuItem>
                  <MenuItem value={"Food"}>Food</MenuItem>
                  <MenuItem value={"Books"}>Books</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ThemeProvider>
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value={category}
                  onChange={handleCategoryChange}
                  label="Category"
                >
                  <MenuItem value={"Tech"}>Tech</MenuItem>
                  <MenuItem value={"Business"}>Business</MenuItem>
                  <MenuItem value={"Education"}>Education</MenuItem>
                  <MenuItem value={"Health"}>Health</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ThemeProvider>
        </div>
      </div>
      <CardList />
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Create Shop</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="shopName"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Shop Name
                  </label>
                  <input
                    type="text"
                    id="shopName"
                    name="shopName"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
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
                    htmlFor="shopStartDate"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Shop Start Date
                  </label>
                  <DatePicker
                    selected={shopStartDate}
                    onChange={(date) => setShopStartDate(date)}
                    placeholderText="Select a date"
                    className="bg-transparent border-b border-[#000] text-black text-left font-DmSans font-bold text-[16px] w-full outline-none"
                    required
                  />
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
                    onChange={(e) => setShopImage(e.target.files[0])}
                    className="hidden"
                    accept="image/*"
                    required
                  />
                  <label
                    htmlFor="shopImage"
                    className="cursor-pointer p-2 border border-gray-300 rounded-md w-1/5"
                  >
                    <AddPhotoAlternateIcon />
                  </label>
                </div>
                <div className="border-b mb-4"></div>
                <div className="flex justify-end gap-5">
                  <button
                    type="button"
                    className="w-full text-[#0adc5d] border rounded-lg text-xl"
                    onClick={() => setShowForm(false)}
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
      )}
      <Footer />
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
          className="bg-[#000080] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
          onClick={onCreateShopClick}
        >
          Create Shop
        </button>
      </div>
    </div>
  );
};

export default ListShop;
