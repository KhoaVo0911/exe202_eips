import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SalesOverview from "./SalesOverview/SaleOverview";
import InventoryManagement from "./Inventory/InventoryManagement";
import EventsManagement from "./EventsManagement";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("SalesOverview");

  const renderComponent = () => {
    switch (activeComponent) {
      case "SalesOverview":
        return <SalesOverview />;
      case "InventoryManagement":
        return <InventoryManagement />;
      case "EventsManagement":
        return <EventsManagement />;
      // case "CustomerAnalysis":
      //   return <CustomerAnalysis />;
      // case "SalesPerformance":
      //   return <SalesPerformance />;
      // case "SupplierManagement":
      //   return <SupplierManagement />;
      // case "FinancialManagement":
      //   return <FinancialManagement />;
      // case "ReportsAndAnalytics":
      //   return <ReportsAndAnalytics />;
      // case "AlertsAndNotifications":
      //   return <AlertsAndNotifications />;
      // case "StaffManagement":
      //   return <StaffManagement />;
      default:
        return <SalesOverview />;
    }
  };

  return (
    <div>
      <div
        className="dashboard-container bg-[white]"
        style={{ display: "flex", height: "100%" }}
      >
        <Sidebar setActiveComponent={setActiveComponent} />
        <div
          className="main-content h-6/6  p-4  my-10 mx-5 "
          style={{ flex: 1, padding: "20px", overflowY: "auto" }}
        >
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
