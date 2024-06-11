import React, { useState } from "react";
import Logo from "../assets/images/esms 4.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleLogout = () => {
    console.log("User logged out"); // Here you can add your logout functionality
  };

  // Giả sử bạn lưu URL avatar của người dùng trong localStorage
  const userAvatar = localStorage.getItem("userAvatar");

  const menuItems = [
    {
      title: "Product",
      subItems: [
        { name: "List Product", url: "/Product" },
        { name: "Create Product", url: "/Create" },
        // { name: "Sub Product 3", url: "/sub-product-3" },
      ],
    },
    {
      title: "List",
      subItems: [
        { name: "Shop", url: "/ListShop" },
        { name: "Orders", url: "/ListOrders" },
        { name: "Cards", url: "/ListCards" },
        { name: "Accounts", url: "/ListAccounts" },
      ],
    },
    {
      title: "Order",
      subItems: [
        { name: "Cart", url: "Cart" },
        { name: "Payment", url: "/Payment" },
        { name: "Ordered", url: "/ListOrdered" },
      ],
    },
    {
      title: "Setting",
      subItems: [
        { name: "Admin Dashboard", url: "/dashboard" },
        // { name: "Sub Setting 2", url: "/sub-setting-2" },
        // { name: "Sub Setting 3", url: "/sub-setting-3" },
      ],
    },
  ];

  return (
    <div className="header relative z-50">
      <div className="navbar flex flex-row justify-between items-center px-20 py-4">
        <div
          className="nav-logo flex flex-row items-center gap-x-4"
          style={{ width: "100px" }}
        >
          <a href="/home">
            <img className="object-cover" loading="lazy" alt="" src={Logo} />
          </a>
        </div>

        <div
          className="flex flex-row justify-between items-center gap-x-10 h-menu"
          style={{ fontFamily: "Fira Sans", fontSize: "20px" }}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="font-semibold flex items-center"
                onClick={() => handleToggleDropdown(index)}
              >
                {item.title}
                {openDropdown === index ? (
                  <ExpandLessIcon className="ml-1" />
                ) : (
                  <ExpandMoreIcon className="ml-1" />
                )}
              </button>
              {openDropdown === index && (
                <div
                  className="absolute mt-2 bg-white shadow-lg rounded-lg z-50 overflow-hidden"
                  style={{ width: "200px" }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.url}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <LogoutIcon />
          <PersonIcon />
        </div>
      </div>
      {openDropdown !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setOpenDropdown(null)}
        ></div>
      )}
    </div>
  );
}
