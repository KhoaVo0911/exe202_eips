// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import a_1 from "../assets/images/a_1.png";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import CardList from "./Card/CardList";
// import Shop from "./home/Shop/Shop";

// const SearchBar = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [place, setPlace] = useState("");
//   const [weekday, setWeekday] = useState("");
//   const [eventType, setEventType] = useState("");
//   const [category, setCategory] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [eventImage, setEventImage] = useState(null);
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDescription, setEventDescription] = useState("");
//   const [eventStartDate, setEventStartDate] = useState(null);

//   const handlePlaceChange = (event) => {
//     setPlace(event.target.value);
//   };

//   const handleWeekdayChange = (event) => {
//     setWeekday(event.target.value);
//   };

//   const handleEventTypeChange = (event) => {
//     setEventType(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleCreateEventClick = () => {
//     setShowForm(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Xử lý logic thêm sự kiện ở đây
//     console.log("Form submitted!");
//     console.log("Event Image:", eventImage);
//     console.log("Event Title:", eventTitle);
//     console.log("Event Description:", eventDescription);
//     console.log("Event Start Date:", eventStartDate);
//     setShowForm(false);
//   };

//   const defaultTheme = createTheme({
//     components: {
//       MuiSelect: {
//         styleOverrides: {
//           select: {
//             color: "white",
//             "&.MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "transparent",
//               },
//               "&:hover fieldset": {
//                 borderColor: "transparent",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "transparent",
//               },
//             },
//           },
//           icon: {
//             color: "white",
//           },
//         },
//       },
//       MuiMenuItem: {
//         styleOverrides: {
//           root: {
//             "&.Mui-selected": {
//               backgroundColor: "navy",
//               color: "white",
//             },
//             "&.Mui-selected:hover": {
//               backgroundColor: "darkblue",
//             },
//           },
//         },
//       },
//       MuiInputLabel: {
//         styleOverrides: {
//           root: {
//             color: "lightblue",
//           },
//         },
//       },
//     },
//   });

//   const customTheme = createTheme({
//     components: {
//       MuiSelect: {
//         styleOverrides: {
//           select: {
//             backgroundColor: "#F2F3FC",
//             borderRadius: "12px",
//             padding: "10px 16px",
//             "&:hover": {
//               backgroundColor: "#EDEFF9",
//             },
//             "&.Mui-focused": {
//               backgroundColor: "#EDEFF9",
//             },
//             "& .MuiOutlinedInput-notchedOutline": {
//               border: "none",
//             },
//           },
//           icon: {
//             color: "#242565",
//           },
//         },
//       },
//       MuiInputLabel: {
//         styleOverrides: {
//           root: {
//             color: "#242565",
//             fontSize: "14px",
//             fontWeight: "bold",
//             top: "-4px",
//           },
//         },
//       },
//       MuiMenuItem: {
//         styleOverrides: {
//           root: {
//             "&.Mui-selected": {
//               backgroundColor: "#D6D8F2",
//               color: "#242565",
//             },
//             "&.Mui-selected:hover": {
//               backgroundColor: "#C2C4E6",
//             },
//           },
//         },
//       },
//     },
//   });

//   return (
//     <div className="">
//       <div className="flex justify-center items-center">
//         {/* <div className="relative bg-[#00AEFF] rounded-[20px] w-[1086px] h-[140px] shadow-[0px_10px_50px_0px_rgba(61,55,241,0.25)]">
//           <div className="absolute w-full h-full flex justify-around items-center">
//             <div className="inline-block w-[290px] h-[35px]">
//               <input
//                 type="text"
//                 placeholder="Search Event"
//                 className="bg-[#00AEFF] border-b border-[#00AEFF] text-white text-left font-DmSans font-bold text-[22px] w-full outline-none"
//               />
//             </div>
//             <ThemeProvider theme={defaultTheme}>
//               <Box sx={{ minWidth: 120 }}>
//                 <div className="inline-block w-[290px] h-[65px]">
//                   <FormControl fullWidth sx={{ border: "none" }}>
//                     <InputLabel
//                       id="demo-simple-select-label"
//                       sx={{ color: "white" }}
//                     >
//                       Place
//                     </InputLabel>
//                     <Select
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       value={place}
//                       label="Place"
//                       onChange={handlePlaceChange}
//                       sx={{ border: "none" }}
//                     >
//                       <MenuItem value={"FPT Ho Chi Minh Campus"}>
//                         FPT Ho Chi Minh Campus
//                       </MenuItem>
//                       <MenuItem value={"FPT Hanoi Campus"}>
//                         FPT Hanoi Campus
//                       </MenuItem>
//                       <MenuItem value={"FPT Da Nang Campus"}>
//                         FPT Da Nang Campus
//                       </MenuItem>
//                     </Select>
//                   </FormControl>
//                   <div className="border-t border-[#ffffff] w-full h-0 mt-[3px]" />
//                 </div>
//               </Box>
//             </ThemeProvider>
//             <div className="inline-block w-[290px] h-[65px]">
//               <div className="text-white text-left font-DmSans font-normal text-[16px]">
//                 Time
//               </div>
//               <div className="text-white text-left font-DmSans font-bold text-[22px] underline">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   placeholderText="Select a date"
//                   className="bg-transparent border-b border-[#ffffff] text-white text-left font-DmSans font-bold text-[22px] w-full outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//       <CreateEventSection onCreateEventClick={handleCreateEventClick} />
//       <div className=" w-full mt-10 mb-10 flex justify-between ">
//         <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold ml-10  ">
//           CÁC SỰ KIỆN NỔI BẬT
//         </div>
//         <div className="flex mr-10 space-x-16">
//           <ThemeProvider theme={customTheme}>
//             <Box sx={{ minWidth: 140 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="weekday-select-label">Weekdays</InputLabel>
//                 <Select
//                   labelId="weekday-select-label"
//                   id="weekday-select"
//                   value={weekday}
//                   onChange={handleWeekdayChange}
//                   label="Weekdays"
//                 >
//                   <MenuItem value={"Monday"}>Monday</MenuItem>
//                   <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
//                   <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
//                   <MenuItem value={"Thursday"}>Thursday</MenuItem>
//                   <MenuItem value={"Friday"}>Friday</MenuItem>
//                   <MenuItem value={"Saturday"}>Saturday</MenuItem>
//                   <MenuItem value={"Sunday"}>Sunday</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </ThemeProvider>
//           <ThemeProvider theme={customTheme}>
//             <Box sx={{ minWidth: 150 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="event-select-label">Event Type</InputLabel>
//                 <Select
//                   labelId="event-select-label"
//                   id="event-select"
//                   value={eventType}
//                   onChange={handleEventTypeChange}
//                   label="Event Type"
//                 >
//                   <MenuItem value={"Conference"}>Conference</MenuItem>
//                   <MenuItem value={"Workshop"}>Workshop</MenuItem>
//                   <MenuItem value={"Seminar"}>Seminar</MenuItem>
//                   <MenuItem value={"Webinar"}>Webinar</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </ThemeProvider>
//           <ThemeProvider theme={customTheme}>
//             <Box sx={{ minWidth: 150 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="category-select-label">Category</InputLabel>
//                 <Select
//                   labelId="category-select-label"
//                   id="category-select"
//                   value={category}
//                   onChange={handleCategoryChange}
//                   label="Category"
//                 >
//                   <MenuItem value={"Tech"}>Tech</MenuItem>
//                   <MenuItem value={"Business"}>Business</MenuItem>
//                   <MenuItem value={"Education"}>Education</MenuItem>
//                   <MenuItem value={"Health"}>Health</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </ThemeProvider>
//         </div>
//       </div>
//       <CardList />
//       <Shop />

//       {showForm && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-4">Tạo mới sự kiện</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventTitle"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Tiêu đề sự kiện
//                   </label>
//                   <input
//                     type="text"
//                     id="eventTitle"
//                     name="eventTitle"
//                     value={eventTitle}
//                     onChange={(e) => setEventTitle(e.target.value)}
//                     className="mt-1 border border-gray-300 rounded-md w-full"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventDescription"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Thông tin sự kiện
//                   </label>
//                   <textarea
//                     id="eventDescription"
//                     name="eventDescription"
//                     value={eventDescription}
//                     onChange={(e) => setEventDescription(e.target.value)}
//                     className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventStartDate"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Ngày bắt đầu
//                   </label>
//                   <DatePicker
//                     selected={eventStartDate}
//                     onChange={(date) => setEventStartDate(date)}
//                     placeholderText="Chọn ngày diễn ra"
//                     className="bg-transparent border-b border-[#000] text-black text-left font-DmSans font-bold text-[16px] w-full outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventImage"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Hình ảnh sự kiện
//                   </label>
//                   <input
//                     type="file"
//                     id="eventImage"
//                     name="eventImage"
//                     onChange={(e) => setEventImage(e.target.files[0])}
//                     className="hidden"
//                     accept="image/*"
//                     required
//                   />
//                   <label
//                     htmlFor="eventImage"
//                     className="cursor-pointer p-2 border border-gray-300 rounded-md w-1/5"
//                   >
//                     <AddPhotoAlternateIcon />
//                   </label>
//                 </div>
//                 <div className="border-b mb-4"></div>
//                 <div className="flex justify-end gap-5">
//                   <button
//                     type="button"
//                     className="w-full text-[#0adc5d] border rounded-lg text-xl"
//                     onClick={() => setShowForm(false)}
//                   >
//                     Hủy bỏ
//                   </button>
//                   <button
//                     type="submit"
//                     className="w-full bg-[#0adc5d] text-white p-2 rounded-lg text-xl"
//                   >
//                     Xác nhận
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const CreateEventSection = ({ onCreateEventClick }) => {
//   return (
//     <div className="flex justify-center items-center bg-purple-100 p-10 mt-10 space-x-10">
//       <img className="h-64 w-80" src={a_1} alt="People sitting on a sofa" />
//       <div>
//         <h2 className="text-4xl font-bold font-DmSans text-gray-900 mb-4">
//           Danh sách sự kiện
//         </h2>
//         <button
//           className="bg-[#393939] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
//           onClick={onCreateEventClick}
//         >
//           Thêm sự kiện
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import a_1 from "../assets/images/a_1.png";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import CardList from "./Card/CardList";
// import Shop from "./home/Shop/Shop";
// import {
//   createEvent,
//   getAllEvents,
//   updateEvent,
// } from "../services/eventService"; // Import các hàm API

// const SearchBar = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [place, setPlace] = useState("");
//   const [weekday, setWeekday] = useState("");
//   const [eventType, setEventType] = useState("");
//   const [category, setCategory] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [editingEvent, setEditingEvent] = useState(null);
//   const [eventImage, setEventImage] = useState(null);
//   const [eventName, setEventName] = useState("");
//   const [eventDescription, setEventDescription] = useState("");
//   const [eventStartDate, setEventStartDate] = useState(null);
//   const [events, setEvents] = useState([]);

//   const handlePlaceChange = (event) => {
//     setPlace(event.target.value);
//   };

//   const handleWeekdayChange = (event) => {
//     setWeekday(event.target.value);
//   };

//   const handleEventTypeChange = (event) => {
//     setEventType(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleCreateEventClick = () => {
//     setShowForm(true);
//     setEditingEvent(null);
//   };

//   const fetchEvents = async () => {
//     try {
//       console.log("Fetching events..."); // Log trước khi lấy sự kiện
//       const allEvents = await getAllEvents();
//       console.log("Fetched events:", allEvents); // Log sau khi lấy sự kiện
//       setEvents(allEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newEvent = {
//       eventName,
//       description: eventDescription,
//       startDate: eventStartDate,
//       image: eventImage, // Bạn có thể cần xử lý upload hình ảnh riêng
//     };

//     try {
//       if (editingEvent) {
//         // Update event
//         const updatedEvent = await updateEvent(editingEvent.id, newEvent);
//         setEvents((prevEvents) =>
//           prevEvents.map((event) =>
//             event.id === editingEvent.id ? updatedEvent : event
//           )
//         );
//       } else {
//         // Create new event
//         const createdEvent = await createEvent(newEvent);
//         setEvents((prevEvents) => [...prevEvents, createdEvent]);
//       }

//       setShowForm(false);
//       setEventName("");
//       setEventDescription("");
//       setEventStartDate(null);
//       setEventImage(null);
//     } catch (error) {
//       console.error("Error creating/updating event:", error);
//     }
//   };

//   const handleEditEvent = (event) => {
//     setEditingEvent(event);
//     setEventName(event.eventName);
//     setEventDescription(event.description);
//     setEventStartDate(new Date(event.startDate));
//     setEventImage(event.image);
//     setShowForm(true);
//   };

//   // Fetch events when component mounts
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const defaultTheme = createTheme({
//     components: {
//       MuiSelect: {
//         styleOverrides: {
//           select: {
//             color: "white",
//             "&.MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "transparent",
//               },
//               "&:hover fieldset": {
//                 borderColor: "transparent",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "transparent",
//               },
//             },
//           },
//           icon: {
//             color: "white",
//           },
//         },
//       },
//       MuiMenuItem: {
//         styleOverrides: {
//           root: {
//             "&.Mui-selected": {
//               backgroundColor: "navy",
//               color: "white",
//             },
//             "&.Mui-selected:hover": {
//               backgroundColor: "darkblue",
//             },
//           },
//         },
//       },
//       MuiInputLabel: {
//         styleOverrides: {
//           root: {
//             color: "lightblue",
//           },
//         },
//       },
//     },
//   });

//   const customTheme = createTheme({
//     components: {
//       MuiSelect: {
//         styleOverrides: {
//           select: {
//             backgroundColor: "#F2F3FC",
//             borderRadius: "12px",
//             padding: "10px 16px",
//             "&:hover": {
//               backgroundColor: "#EDEFF9",
//             },
//             "&.Mui-focused": {
//               backgroundColor: "#EDEFF9",
//             },
//             "& .MuiOutlinedInput-notchedOutline": {
//               border: "none",
//             },
//           },
//           icon: {
//             color: "#242565",
//           },
//         },
//       },
//       MuiInputLabel: {
//         styleOverrides: {
//           root: {
//             color: "#242565",
//             fontSize: "14px",
//             fontWeight: "bold",
//             top: "-4px",
//           },
//         },
//       },
//       MuiMenuItem: {
//         styleOverrides: {
//           root: {
//             "&.Mui-selected": {
//               backgroundColor: "#D6D8F2",
//               color: "#242565",
//             },
//             "&.Mui-selected:hover": {
//               backgroundColor: "#C2C4E6",
//             },
//           },
//         },
//       },
//     },
//   });

//   return (
//     <div className="">
//       <div className="flex justify-center items-center">
//         {/* <div className="relative bg-[#00AEFF] rounded-[20px] w-[1086px] h-[140px] shadow-[0px_10px_50px_0px_rgba(61,55,241,0.25)]">
//           <div className="absolute w-full h-full flex justify-around items-center">
//             <div className="inline-block w-[290px] h-[35px]">
//               <input
//                 type="text"
//                 placeholder="Search Event"
//                 className="bg-[#00AEFF] border-b border-[#00AEFF] text-white text-left font-DmSans font-bold text-[22px] w-full outline-none"
//               />
//             </div>
//             <ThemeProvider theme={defaultTheme}>
//               <Box sx={{ minWidth: 120 }}>
//                 <div className="inline-block w-[290px] h-[65px]">
//                   <FormControl fullWidth sx={{ border: "none" }}>
//                     <InputLabel
//                       id="demo-simple-select-label"
//                       sx={{ color: "white" }}
//                     >
//                       Place
//                     </InputLabel>
//                     <Select
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       value={place}
//                       label="Place"
//                       onChange={handlePlaceChange}
//                       sx={{ border: "none" }}
//                     >
//                       <MenuItem value={"FPT Ho Chi Minh Campus"}>
//                         FPT Ho Chi Minh Campus
//                       </MenuItem>
//                       <MenuItem value={"FPT Hanoi Campus"}>
//                         FPT Hanoi Campus
//                       </MenuItem>
//                       <MenuItem value={"FPT Da Nang Campus"}>
//                         FPT Da Nang Campus
//                       </MenuItem>
//                     </Select>
//                   </FormControl>
//                   <div className="border-t border-[#ffffff] w-full h-0 mt-[3px]" />
//                 </div>
//               </Box>
//             </ThemeProvider>
//             <div className="inline-block w-[290px] h-[65px]">
//               <div className="text-white text-left font-DmSans font-normal text-[16px]">
//                 Time
//               </div>
//               <div className="text-white text-left font-DmSans font-bold text-[22px] underline">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   placeholderText="Select a date"
//                   className="bg-transparent border-b border-[#ffffff] text-white text-left font-DmSans font-bold text-[22px] w-full outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//       <CreateEventSection onCreateEventClick={handleCreateEventClick} />
//       <div className=" w-full mt-10 mb-10 flex justify-between ">
//         <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold ml-10  ">
//           CÁC SỰ KIỆN NỔI BẬT
//         </div>
//         <div className="flex mr-10 space-x-16">
//           <ThemeProvider theme={customTheme}>
//             <Box sx={{ minWidth: 140 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="weekday-select-label">Weekdays</InputLabel>
//                 <Select
//                   labelId="weekday-select-label"
//                   id="weekday-select"
//                   value={weekday}
//                   onChange={handleWeekdayChange}
//                   label="Weekdays"
//                 >
//                   <MenuItem value={"Monday"}>Monday</MenuItem>
//                   <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
//                   <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
//                   <MenuItem value={"Thursday"}>Thursday</MenuItem>
//                   <MenuItem value={"Friday"}>Friday</MenuItem>
//                   <MenuItem value={"Saturday"}>Saturday</MenuItem>
//                   <MenuItem value={"Sunday"}>Sunday</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </ThemeProvider>
//           <ThemeProvider theme={customTheme}>
//             <Box sx={{ minWidth: 150 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="event-select-label">Event Type</InputLabel>
//                 <Select
//                   labelId="event-select-label"
//                   id="event-select"
//                   value={eventType}
//                   onChange={handleEventTypeChange}
//                   label="Event Type"
//                 >
//                   <MenuItem value={"Conference"}>Conference</MenuItem>
//                   <MenuItem value={"Workshop"}>Workshop</MenuItem>
//                   <MenuItem value={"Seminar"}>Seminar</MenuItem>
//                   <MenuItem value={"Webinar"}>Webinar</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </ThemeProvider>
//           <ThemeProvider theme={customTheme}>
//             <Box sx={{ minWidth: 150 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="category-select-label">Category</InputLabel>
//                 <Select
//                   labelId="category-select-label"
//                   id="category-select"
//                   value={category}
//                   onChange={handleCategoryChange}
//                   label="Category"
//                 >
//                   <MenuItem value={"Tech"}>Tech</MenuItem>
//                   <MenuItem value={"Business"}>Business</MenuItem>
//                   <MenuItem value={"Education"}>Education</MenuItem>
//                   <MenuItem value={"Health"}>Health</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </ThemeProvider>
//         </div>
//       </div>
//       <CardList events={events} onEditEvent={handleEditEvent} />{" "}
//       {/* Truyền các sự kiện vào CardList */}
//       <Shop />
//       {showForm && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-4">
//                 {editingEvent ? "Chỉnh sửa sự kiện" : "Tạo mới sự kiện"}
//               </h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventName"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Tiêu đề sự kiện
//                   </label>
//                   <input
//                     type="text"
//                     id="eventName"
//                     name="eventName"
//                     value={eventName}
//                     onChange={(e) => setEventName(e.target.value)}
//                     className="mt-1 border border-gray-300 rounded-md w-full"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventDescription"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Thông tin sự kiện
//                   </label>
//                   <textarea
//                     id="eventDescription"
//                     name="eventDescription"
//                     value={eventDescription}
//                     onChange={(e) => setEventDescription(e.target.value)}
//                     className="mt-1 text-sm p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventStartDate"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Ngày bắt đầu
//                   </label>
//                   <DatePicker
//                     selected={eventStartDate}
//                     onChange={(date) => setEventStartDate(date)}
//                     placeholderText="Chọn ngày diễn ra"
//                     className="bg-transparent border-b border-[#000] text-black text-left font-DmSans font-bold text-[16px] w-full outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 flex gap-5">
//                   <label
//                     htmlFor="eventImage"
//                     className="flex items-center text-sm font-medium text-gray-700 w-1/4"
//                   >
//                     Hình ảnh sự kiện
//                   </label>
//                   <input
//                     type="file"
//                     id="eventImage"
//                     name="eventImage"
//                     onChange={(e) => setEventImage(e.target.files[0])}
//                     className="hidden"
//                     accept="image/*"
//                     required={!editingEvent}
//                   />
//                   <label
//                     htmlFor="eventImage"
//                     className="cursor-pointer p-2 border border-gray-300 rounded-md w-1/5"
//                   >
//                     <AddPhotoAlternateIcon />
//                   </label>
//                 </div>
//                 <div className="border-b mb-4"></div>
//                 <div className="flex justify-end gap-5">
//                   <button
//                     type="button"
//                     className="w-full text-[#0adc5d] border rounded-lg text-xl"
//                     onClick={() => setShowForm(false)}
//                   >
//                     Hủy bỏ
//                   </button>
//                   <button
//                     type="submit"
//                     className="w-full bg-[#0adc5d] text-white p-2 rounded-lg text-xl"
//                   >
//                     Xác nhận
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const CreateEventSection = ({ onCreateEventClick }) => {
//   return (
//     <div className="flex justify-center items-center bg-purple-100 p-10 mt-10 space-x-10">
//       <img className="h-64 w-80" src={a_1} alt="People sitting on a sofa" />
//       <div>
//         <h2 className="text-4xl font-bold font-DmSans text-gray-900 mb-4">
//           Danh sách sự kiện
//         </h2>
//         <button
//           className="bg-[#393939] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
//           onClick={onCreateEventClick}
//         >
//           Thêm sự kiện
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import a_1 from "../assets/images/a_1.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CardList from "./Card/CardList";
import Shop from "./home/Shop/Shop";
import { createEvent, getAllEvents } from "../services/eventService"; // Import các hàm API
import sk1 from "../assets/images/sk1.png";
import sk2 from "../assets/images/sk2.png";
import sk3 from "../assets/images/sk3.png";
import sk4 from "../assets/images/sk4.png";
import sk5 from "../assets/images/sk5.png";
import sk6 from "../assets/images/sk6.png";

const SearchBar = () => {
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
  const [events, setEvents] = useState([]);

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

  const fetchEvents = async () => {
    try {
      const allEvents = await getAllEvents();
      setEvents(allEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      title: eventTitle,
      description: eventDescription,
      startDate: eventStartDate,
      image: eventImage, // Bạn có thể cần xử lý upload hình ảnh riêng
    };
    try {
      const createdEvent = await createEvent(newEvent);
      console.log("Form submitted!");
      console.log("Created Event:", createdEvent);
      setShowForm(false);
      fetchEvents(); // Refresh events list
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  // Fetch events when component mounts
  React.useEffect(() => {
    fetchEvents();
  }, []);

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
    <div className="">
      <div className="flex justify-center items-center">
        {/* <div className="relative bg-[#00AEFF] rounded-[20px] w-[1086px] h-[140px] shadow-[0px_10px_50px_0px_rgba(61,55,241,0.25)]">
          <div className="absolute w-full h-full flex justify-around items-center">
            <div className="inline-block w-[290px] h-[35px]">
              <input
                type="text"
                placeholder="Search Event"
                className="bg-[#00AEFF] border-b border-[#00AEFF] text-white text-left font-DmSans font-bold text-[22px] w-full outline-none"
              />
            </div>
            <ThemeProvider theme={defaultTheme}>
              <Box sx={{ minWidth: 120 }}>
                <div className="inline-block w-[290px] h-[65px]">
                  <FormControl fullWidth sx={{ border: "none" }}>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "white" }}
                    >
                      Place
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={place}
                      label="Place"
                      onChange={handlePlaceChange}
                      sx={{ border: "none" }}
                    >
                      <MenuItem value={"FPT Ho Chi Minh Campus"}>
                        FPT Ho Chi Minh Campus
                      </MenuItem>
                      <MenuItem value={"FPT Hanoi Campus"}>
                        FPT Hanoi Campus
                      </MenuItem>
                      <MenuItem value={"FPT Da Nang Campus"}>
                        FPT Da Nang Campus
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <div className="border-t border-[#ffffff] w-full h-0 mt-[3px]" />
                </div>
              </Box>
            </ThemeProvider>
            <div className="inline-block w-[290px] h-[65px]">
              <div className="text-white text-left font-DmSans font-normal text-[16px]">
                Time
              </div>
              <div className="text-white text-left font-DmSans font-bold text-[22px] underline">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select a date"
                  className="bg-transparent border-b border-[#ffffff] text-white text-left font-DmSans font-bold text-[22px] w-full outline-none"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <CreateEventSection onCreateEventClick={handleCreateEventClick} />
      <div className=" w-full mt-10 mb-10 flex justify-between ">
        <div className="text-[#242565] text-left font-dmSansBold text-[40px] font-bold ml-10  ">
          CÁC SỰ KIỆN NỔI BẬT
        </div>
        <div className="flex mr-10 space-x-16">
          <ThemeProvider theme={customTheme}>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="weekday-select-label">Weekdays</InputLabel>
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
                <InputLabel id="event-select-label">Event Type</InputLabel>
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
      <CardList events={events} /> {/* Truyền các sự kiện vào CardList */}
      <Shop />
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Tạo mới sự kiện</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventTitle"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Tiêu đề sự kiện
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
                    Thông tin sự kiện
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
                    Ngày bắt đầu
                  </label>
                  <DatePicker
                    selected={eventStartDate}
                    onChange={(date) => setEventStartDate(date)}
                    placeholderText="Chọn ngày diễn ra"
                    className="bg-transparent border-b border-[#000] text-black text-left font-DmSans font-bold text-[16px] w-full outline-none"
                    required
                  />
                </div>
                <div className="mb-4 flex gap-5">
                  <label
                    htmlFor="eventImage"
                    className="flex items-center text-sm font-medium text-gray-700 w-1/4"
                  >
                    Hình ảnh sự kiện
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
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-[#0adc5d] text-white p-2 rounded-lg text-xl"
                  >
                    Xác nhận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CreateEventSection = ({ onCreateEventClick }) => {
  return (
    <div className="flex justify-center items-center bg-purple-100 p-10 mt-10 space-x-10">
      <img className="h-64 w-80" src={a_1} alt="People sitting on a sofa" />
      <div>
        <h2 className="text-4xl font-bold font-DmSans text-gray-900 mb-4">
          Danh sách sự kiện
        </h2>
        <button
          className="bg-[#393939] text-white font-bold py-2 px-4 w-[182px] h-[60px] text-[16px] cursor-pointer rounded-full shadow-[0_10px_50px_rgba(61,55,241,0.25)] font-DmSans"
          onClick={onCreateEventClick}
        >
          Thêm sự kiện
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
