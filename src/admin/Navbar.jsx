import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const handleOut = () => {
    localStorage.clear();
  };
  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString);

  return (
    <div>
      <nav
        className="bg-[#A8DADC] border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-900 shadow-md"
      >
        <div className="max-w-[1500px] flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            {/* Your logo here */}
          </Link>
          <div className="flex items-center">
            <NavLink
              style={({ isActive }) => (isActive ? { color: "#60a5fa" } : undefined)}
              to="/Admin"
              className="text-black mr-4"
            >
              <h6>Events</h6>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? { color: "#60a5fa" } : undefined)}
              to="/AccountAdmin"
              className="text-black mr-4"
            >
              <h6>Accounts</h6>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? { color: "#60a5fa" } : undefined)}
              to="/SettingAdmin"
              className="text-black"
            >
              <h6>Settings</h6>
            </NavLink>
          </div>
          <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
            <ul className="flex mt-4">
              <img
                src={userObject.image}
                className="-mt-[10px] h-12 w-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-bold text-2xl">{userObject.name}</p>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
