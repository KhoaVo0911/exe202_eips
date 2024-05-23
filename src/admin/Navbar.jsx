import React, { useState } from "react";
import Logo from "../assets/images/esms 4.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const handleLogout = () => {
    console.log("User logged out"); // Here you can add your logout functionality
  };

  // Giả sử bạn lưu URL avatar của người dùng trong localStorage
  const userAvatar = localStorage.getItem("userAvatar");

  return (
    <div className="header ">
      <div className="navbar flex flex-row justify-between items-center px-20 py-4">
        <div
          className="nav-logo flex flex-row items-center gap-x-4"
          style={{ width: "100px" }}
        >
          <img className="object-cover" loading="lazy" alt="" src={Logo} />
        </div>

        <div
          className="flex flex-row justify-between items-center gap-x-10 h-menu"
          style={{ fontFamily: "Fira Sans", fontSize: "20px" }}
        >
          <a href="#">
            <button className="font-semibold">Product</button>
          </a>
          <a href="#">
            <button className="font-semibold">Shop Order</button>
          </a>
          <a href="#">
            <button className="font-semibold">Order</button>
          </a>
          <a href="#">
            <button className="font-semibold">Setting</button>
          </a>
          <LogoutIcon />
          <PersonIcon />
        </div>
      </div>
    </div>
  );
}
