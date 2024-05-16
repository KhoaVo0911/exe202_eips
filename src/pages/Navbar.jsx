import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi"; // Importing logout icon from react-icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import logo_EIPS from "../assets/images/logo_EIPS.png";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Events",
      link: "#",
    },
    {
      label: "Accounts",
      link: "#",
    },
    {
      label: "Setting",
      link: "#",
    },
  ];

  const handleLogout = () => {
    console.log("User logged out"); // Here you can add your logout functionality
  };

  // Giả sử bạn lưu URL avatar của người dùng trong localStorage
  const userAvatar = localStorage.getItem("userAvatar");

  return (
    <main>
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="shrink-0">
            <img
              src={logo_EIPS} // Update the path to your logo image
              alt="Logo"
              className="w-32 h-auto lg:w-36" // Adjust width as per your design
            />
          </Link>
        </div>

        {/* Navigation links for large screens */}
        <div className="hidden lg:flex items-center gap-28 text-xl font-semibold">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="text-gray-400 hover:text-black"
              to={d.link}
            >
              {d.label}
            </Link>
          ))}
          <FiLogOut
            className="text-3xl cursor-pointer"
            onClick={handleLogout}
          />
          {userAvatar && (
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          )}
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
        </div>

        {/* Sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-transform",
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer self-end"
            />
            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold text-xl" to={d.link}>
                {d.label}
              </Link>
            ))}
            <FiLogOut
              className="mt-auto text-xl font-bold cursor-pointer"
              onClick={handleLogout}
            />
            {userAvatar && (
              <img
                src={userAvatar}
                alt="User Avatar"
                className="mt-4 w-10 h-10 rounded-full self-center"
              />
            )}
          </section>
        </div>
      </nav>
      <hr />
    </main>
  );
}
