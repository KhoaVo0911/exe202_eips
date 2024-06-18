import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SalesOverview from "./SalesOverview/SaleOverview";

import EventsManagement from "./Events/EventsManagement";
import AccountManagement from "./Inventory/AccountManagement";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("EventsManagement");

  const renderComponent = () => {
    switch (activeComponent) {
      case "SalesOverview":
        return <SalesOverview />;
      case "AccountManagement":
        return <AccountManagement />;
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
        return <EventsManagement />;
    }
  };

  return (
    <div>
      <div
        className="dashboard-container bg-[white]"
        style={{ display: "flex", height: "100vh" }}
      >
        <Sidebar setActiveComponent={setActiveComponent} />
        <div
          className="main-content h-5/6  p-4  my-10 mx-5 "
          style={{ flex: 1, padding: "20px", overflowY: "auto" }}
        >
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
