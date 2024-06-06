import { Divider } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/esms 4.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="w-1/5  p-4 border shadow-lg rounded-xl ml-10 bg-white my-10 flex flex-col">
      <div
        className="nav-logo flex  items-center gap-x-4"
        style={{ width: "100px" }}
      >
        <img className="object-cover" loading="lazy" alt="" src={Logo} />
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
      </div>
      <Divider />
      <div className="my-10 gap-y-20 flex justify-center flex-grow">
        <ul>
          <li
            onClick={() => setActiveComponent("SalesOverview")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Tổng Quan Bán Hàng
          </li>
          <li
            onClick={() => setActiveComponent("InventoryManagement")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Quản Lý Hàng Hóa
          </li>
          <li
            onClick={() => setActiveComponent("OrderManagement")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Quản Lý Đơn Hàng
          </li>
          <li
            onClick={() => setActiveComponent("CustomerAnalysis")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Phân Tích Khách Hàng
          </li>
          <li
            onClick={() => setActiveComponent("SalesPerformance")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Hiệu Suất Bán Hàng
          </li>
          <li
            onClick={() => setActiveComponent("SupplierManagement")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Quản Lý Nhà Cung Cấp
          </li>
          <li
            onClick={() => setActiveComponent("FinancialManagement")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Quản Lý Tài Chính
          </li>
          <li
            onClick={() => setActiveComponent("ReportsAndAnalytics")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Báo Cáo và Phân Tích
          </li>
          <li
            onClick={() => setActiveComponent("AlertsAndNotifications")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Cảnh Báo và Thông Báo
          </li>
          <li
            onClick={() => setActiveComponent("StaffManagement")}
            className="cursor-pointer mb-2 hover:bg-green-300 p-2 rounded"
          >
            Quản Lý Nhân Viên
          </li>
        </ul>
      </div>
      <Divider />
      <div className="flex gap-8 justify-center text-center my-5">
        <AccountCircleIcon sx={{ fontSize: 40 }} />
        <h1 className="text-lg">Admin</h1>
      </div>
    </div>
  );
};

export default Sidebar;
