import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function AccountManagement({ value, onChange }) {
  const data = [
    {
      no: 1,
      username: "john_doe",
      password: "****",
      name: "John Doe",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Active",
    },
    {
      no: 2,
      username: "jane_smith",
      password: "****",
      name: "Jane Smith",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Inactive",
    },
    {
      no: 3,
      username: "sam_green",
      password: "****",
      name: "Sam Green",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Active",
    },
    {
      no: 4,
      username: "alice_jones",
      password: "****",
      name: "Alice Jones",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Inactive",
    },
    {
      no: 5,
      username: "michael_brown",
      password: "****",
      name: "Michael Brown",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Active",
    },
    {
      no: 6,
      username: "linda_white",
      password: "****",
      name: "Linda White",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Inactive",
    },
    {
      no: 7,
      username: "robert_black",
      password: "****",
      name: "Robert Black",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Active",
    },
    {
      no: 8,
      username: "patricia_wilson",
      password: "****",
      name: "Patricia Wilson",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Inactive",
    },
    {
      no: 9,
      username: "james_clark",
      password: "****",
      name: "James Clark",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Active",
    },
    {
      no: 10,
      username: "mary_lewis",
      password: "****",
      name: "Mary Lewis",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Inactive",
    },
    {
      no: 11,
      username: "david_harris",
      password: "****",
      name: "David Harris",
      role: "Vendor", // Thay đổi role thành Vendor
      status: "Active",
    },
    {
      no: 12,
      username: "susan_martin",
      password: "****",
      name: "Susan Martin",
      role: "Vendor", // Thay đổi role thành Vendor
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
    <div>
      <div className="relative w-full mt-10 flex justify-between mb-10">
        <div className="text-[#242565] text-center font-dmSansBold text-[40px] font-bold absolute left-[50px] bot-[100px] ">
          Quản lí tài khoản
        </div>
        <div className="flex justify-center ml-[20px] mt-[100px] space-x-36">
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
    </div>
  );
}
