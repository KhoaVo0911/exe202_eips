import { width } from "@mui/system";
import CardEvent from "./VendorCardEvent";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsManagement() {
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
  const CreateEventSection = ({ onCreateEventClick }) => {
    return (
      <div className="0">
        <button
          className="bg-[#393939] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
          onClick={onCreateEventClick}
        >
          Thêm sự kiện
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl mb-4 text-start font-bold">Quản lí Sự kiện</h1>
        <CreateEventSection onCreateEventClick={handleCreateEventClick} />
      </div>
      <div className="">
        <CardEvent style={{ width: "50%" }} />
      </div>
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Tạo sự kiện</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventTitle"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Tên sự kiện:
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
                    Tiêu đề:
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
                    Ngày bắt đầu:
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
                    Ảnh:
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
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-[#0adc5d] text-white p-2 rounded-lg text-xl"
                  >
                    Tạo
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
