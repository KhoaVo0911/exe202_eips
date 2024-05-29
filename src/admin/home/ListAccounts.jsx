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

const ListAccounts = () => {
  const data = [
    {
      no: 1,
      username: "john_doe",
      password: "****",
      name: "John Doe",
      role: "Admin",
      status: "Active",
    },
    {
      no: 2,
      username: "jane_smith",
      password: "****",
      name: "Jane Smith",
      role: "User",
      status: "Inactive",
    },
    {
      no: 3,
      username: "sam_green",
      password: "****",
      name: "Sam Green",
      role: "Moderator",
      status: "Active",
    },
    {
      no: 4,
      username: "alice_jones",
      password: "****",
      name: "Alice Jones",
      role: "User",
      status: "Inactive",
    },
    {
      no: 5,
      username: "michael_brown",
      password: "****",
      name: "Michael Brown",
      role: "Admin",
      status: "Active",
    },
    {
      no: 6,
      username: "linda_white",
      password: "****",
      name: "Linda White",
      role: "User",
      status: "Inactive",
    },
    {
      no: 7,
      username: "robert_black",
      password: "****",
      name: "Robert Black",
      role: "Moderator",
      status: "Active",
    },
    {
      no: 8,
      username: "patricia_wilson",
      password: "****",
      name: "Patricia Wilson",
      role: "User",
      status: "Inactive",
    },
    {
      no: 9,
      username: "james_clark",
      password: "****",
      name: "James Clark",
      role: "Admin",
      status: "Active",
    },
    {
      no: 10,
      username: "mary_lewis",
      password: "****",
      name: "Mary Lewis",
      role: "User",
      status: "Inactive",
    },
    {
      no: 11,
      username: "david_harris",
      password: "****",
      name: "David Harris",
      role: "Moderator",
      status: "Active",
    },
    {
      no: 12,
      username: "susan_martin",
      password: "****",
      name: "Susan Martin",
      role: "User",
      status: "Inactive",
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

      <div className="relative w-full mt-10 flex items-center mb-10">
        <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold absolute left-[80px]  ">
          LIST ACCOUNTS
        </div>
        <div className="flex ml-[680px] space-x-16">
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="weekday-select-label">ADMIN</InputLabel>
                <Select
                  labelId="weekday-select-label"
                  id="weekday-select"
                  value={weekday}
                  onChange={handleWeekdayChange}
                  label="Weekdays"
                ></Select>
              </FormControl>
            </Box>
          </ThemeProvider>
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="weekday-select-label">Events</InputLabel>
                <Select
                  labelId="weekday-select-label"
                  id="weekday-select"
                  value={weekday}
                  onChange={handleWeekdayChange}
                  label="Weekdays"
                >
                  <MenuItem value={"Monday"}>Monday</MenuItem>
                  <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                  <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                  <MenuItem value={"Thursday"}>Thursday</MenuItem>
                  <MenuItem value={"Friday"}>Friday</MenuItem>
                  <MenuItem value={"Saturday"}>Saturday</MenuItem>
                  <MenuItem value={"Sunday"}>Sunday</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ThemeProvider>
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="event-select-label">Area</InputLabel>
                <Select
                  labelId="event-select-label"
                  id="event-select"
                  value={eventType}
                  onChange={handleEventTypeChange}
                  label="Event Type"
                >
                  <MenuItem value={"Conference"}>Conference</MenuItem>
                  <MenuItem value={"Workshop"}>Workshop</MenuItem>
                  <MenuItem value={"Seminar"}>Seminar</MenuItem>
                  <MenuItem value={"Webinar"}>Webinar</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ThemeProvider>
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Any Category</InputLabel>
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
      <div className="container mx-auto p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border border-gray-200">No</th>
              <th className="py-2 px-4 border border-gray-200">Username</th>
              <th className="py-2 px-4 border border-gray-200">Password</th>
              <th className="py-2 px-4 border border-gray-200">Name</th>
              <th className="py-2 px-4 border border-gray-200">Role</th>
              <th className="py-2 px-4 border border-gray-200">Status</th>
              <th className="py-2 px-4 border border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.no} className="text-center">
                <td className="py-2 px-4 border border-gray-200">{row.no}</td>
                <td className="py-2 px-4 border border-gray-200">
                  {row.username}
                </td>
                <td className="py-2 px-4 border border-gray-200">****</td>
                <td className="py-2 px-4 border border-gray-200">{row.name}</td>
                <td className="py-2 px-4 border border-gray-200">{row.role}</td>
                <td className="py-2 px-4 border border-gray-200">
                  <span
                    className={
                      row.status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  <a href="#" className="text-blue-500">
                    View
                  </a>
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
          Accounts Managers
        </h2>
        <p className="text-xl text-gray-600 font-DmSans mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          className="bg-[#000080] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
          onClick={onCreateEventClick}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
export default ListAccounts;
