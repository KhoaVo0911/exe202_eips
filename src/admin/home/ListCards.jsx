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
import Footer from "../../pages/Footer";
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

const ListCards = () => {
  const data = [
    {
      id: 1,
      username: "john_doe",
      phone: "0123456789",
      cardId: "1234",
      balance: 5000000,
      status: true,
    },
    {
      id: 2,
      username: "jane_smith",
      phone: "0987654321",
      cardId: "5678",
      balance: 1500000,
      status: false,
    },
    {
      id: 3,
      username: "sam_green",
      phone: "0123456780",
      cardId: "9101",
      balance: 2500000,
      status: true,
    },
    {
      id: 4,
      username: "alice_jones",
      phone: "0987654320",
      cardId: "1121",
      balance: 7500000,
      status: false,
    },
    {
      id: 5,
      username: "michael_brown",
      phone: "0123456781",
      cardId: "3141",
      balance: 9500000,
      status: true,
    },
    {
      id: 6,
      username: "linda_white",
      phone: "0987654322",
      cardId: "5161",
      balance: 8500000,
      status: false,
    },
    {
      id: 7,
      username: "robert_black",
      phone: "0123456782",
      cardId: "7181",
      balance: 3500000,
      status: true,
    },
    {
      id: 8,
      username: "patricia_wilson",
      phone: "0987654323",
      cardId: "9202",
      balance: 4500000,
      status: false,
    },
    {
      id: 9,
      username: "james_clark",
      phone: "0123456783",
      cardId: "2232",
      balance: 6500000,
      status: true,
    },
    {
      id: 10,
      username: "mary_lewis",
      phone: "0987654324",
      cardId: "4252",
      balance: 5500000,
      status: false,
    },
    {
      id: 11,
      username: "david_harris",
      phone: "0123456784",
      cardId: "6272",
      balance: 10000000,
      status: true,
    },
    {
      id: 12,
      username: "susan_martin",
      phone: "0987654325",
      cardId: "8292",
      balance: 2000000,
      status: false,
    },
  ];
  const [startDate, setStartDate] = useState(null);
  const [place, setPlace] = useState("");
  const [weekday, setWeekday] = useState("");
  const [eventType, setEventType] = useState("");
  const [category, setCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [eventImage, setEventImage] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState(null);

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleWeekdayChange = (event) => {
    setWeekday(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCreateEventClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic thêm sự kiện ở đây
    console.log("Form submitted!");
    console.log("Event Image:", eventImage);
    console.log("Event Title:", eventTitle);
    console.log("Event Description:", eventDescription);
    console.log("Event Start Date:", eventStartDate);
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
      <CreateEventSection onCreateEventClick={handleCreateEventClick} />
      <div className=" bg-slate-100 p-10 mt-10">
        <div className="flex space-x-10 ml-10 font-bold">
          <a href="/ListShop">SHOP</a>
          <a href="/ListCards">CARD</a>
          <a href="/ListOrders">ORDER</a>
        </div>
      </div>
      <div className="relative w-full mt-10 flex items-center mb-10">
        <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold absolute left-[80px]  ">
          List Accounts
        </div>
      </div>
      <div className="mx-auto p-4 flex  justify-center items-center">
        <table className="w-4/5 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border border-gray-200 text-center">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border border-gray-200 text-center">
                #
              </th>
              <th className="py-2 px-4 border border-gray-200 text-center">
                Username
              </th>
              <th className="py-2 px-4 border border-gray-200 text-center">
                Phone Number
              </th>
              <th className="py-2 px-4 border border-gray-200 text-center">
                Card ID
              </th>
              <th className="py-2 px-4 border border-gray-200 text-center">
                Balance (VNĐ)
              </th>
              <th className="py-2 px-4 border border-gray-200 text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id} className="text-center">
                <td className="py-2 px-4 border border-gray-200">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 border border-gray-200">{row.id}</td>
                <td className="py-2 px-4 border border-gray-200">
                  {row.username}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {row.phone}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full">
                    {row.cardId}
                  </span>
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {row.balance.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {row.status ? "✔️" : "❌"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Create Event</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventTitle"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Event Title
                  </label>
                  <input
                    type="text"
                    id="eventTitle"
                    name="eventTitle"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    className="mt-1 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventDescription"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Event Description
                  </label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
                    required
                  ></textarea>
                </div>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventStartDate"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Event Start Date
                  </label>
                  <DatePicker
                    selected={eventStartDate}
                    onChange={(date) => setEventStartDate(date)}
                    placeholderText="Select a date"
                    className="bg-transparent border-b border-[#000] text-black text-left font-DmSans font-bold text-[16px] w-full outline-none"
                    required
                  />
                </div>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventImage"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Event Image
                  </label>
                  <input
                    type="file"
                    id="eventImage"
                    name="eventImage"
                    onChange={(e) => setEventImage(e.target.files[0])}
                    className="hidden"
                    accept="image/*"
                    required
                  />
                  <label
                    htmlFor="eventImage"
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
const CreateEventSection = ({ onCreateEventClick }) => {
  return (
    <div className="flex justify-center items-center bg-purple-100 p-10 mt-10 space-x-10">
      <img className="h-64 w-80" src={a_1} alt="People sitting on a sofa" />
      <div>
        <h2 className="text-4xl font-bold font-DmSans text-gray-900 mb-4">
          Make your Card
        </h2>
        <p className="text-xl text-gray-600 font-DmSans mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="gap-5 flex">
          <button
            className="bg-[#000080] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
            onClick={onCreateEventClick}
          >
            Create Card
          </button>
          <button
            className="bg-[#000080] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
            onClick={onCreateEventClick}
          >
            Create 50 Cards
          </button>
        </div>
      </div>
    </div>
  );
};
export default ListCards;
