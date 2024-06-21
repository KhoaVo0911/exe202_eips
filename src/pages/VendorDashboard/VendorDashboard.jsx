import React, { useState } from "react";
import Sidebar from "./VendorSidebar";
import SalesOverview from "./SalesOverview/VendorSaleOverview";

import EventsManagement from "./Events/VendorEventsManagement";
import AccountManagement from "./Inventory/AccountManagement";

const DashboardVendor = () => {
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

export default DashboardVendor;
