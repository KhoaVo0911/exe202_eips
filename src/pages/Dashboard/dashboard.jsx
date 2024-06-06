import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import Navbar from "../../admin/Navbar";
import Footer from "../Footer";
import CardList from "../../admin/Card/CardList";
import Sidebar from "./Sidebar";
import SalesOverview from "./SaleOverview";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("SalesOverview");

  const renderComponent = () => {
    switch (activeComponent) {
      case "SalesOverview":
        return <SalesOverview />;
      // case "InventoryManagement":
      //   return <InventoryManagement />;
      // case "OrderManagement":
      //   return <OrderManagement />;
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

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: null,
  });

  const openModal = (title, content) => {
    setModalData({
      isOpen: true,
      title,
      content,
    });
  };

  const closeModal = () => {
    setModalData({
      isOpen: false,
      title: "",
      content: null,
    });
  };

  return (
    <div className="">
      <div className="flex gap-5">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="w-3/4 border shadow-lg rounded-xl  bg-slate-300 my-10">
          {renderComponent()}
        </div>
      </div>

      {/* <div className="p-10 text-center  ">
        <h1 className="text-8xl font-bold mb-4  ">Dashboard</h1>
        <div className="space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 "
            onClick={() => openModal("Stores Management", <StoresTable />)}
          >
            Quản lý gian hàng
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => openModal("Products Management", <ProductsTable />)}
          >
            Quản lý sản phẩm của gian hàng
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => openModal("Events List", <EventsTable />)}
          >
            List các event
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => openModal("Vendors List", <VendorsTable />)}
          >
            List vendor
          </button>
        </div>
        <CardList />
      </div> */}

      <ModalComponent
        isOpen={modalData.isOpen}
        onRequestClose={closeModal}
        title={modalData.title}
      >
        {modalData.content}
      </ModalComponent>
      <Footer />
    </div>
  );
};

const StoresTable = () => (
  <table className="w-full bg-white border text-lg">
    <thead>
      <tr>
        <th className="py-4 px-6 border-b">Store Name</th>
        <th className="py-4 px-6 border-b">Location</th>
        <th className="py-4 px-6 border-b">Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-4 px-6 border-b">Store 1</td>
        <td className="py-4 px-6 border-b">Location 1</td>
        <td className="py-4 px-6 border-b">Owner 1</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b">Store 2</td>
        <td className="py-4 px-6 border-b">Location 2</td>
        <td className="py-4 px-6 border-b">Owner 2</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b">Store 3</td>
        <td className="py-4 px-6 border-b">Location 3</td>
        <td className="py-4 px-6 border-b">Owner 3</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b">Store 4</td>
        <td className="py-4 px-6 border-b">Location 4</td>
        <td className="py-4 px-6 border-b">Owner 4</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b">Store 5</td>
        <td className="py-4 px-6 border-b">Location 5</td>
        <td className="py-4 px-6 border-b">Owner 5</td>
      </tr>
    </tbody>
  </table>
);

const ProductsTable = () => (
  <table className="min-w-full bg-white border">
    <thead>
      <tr>
        <th className="py-2 border-b">Product Name</th>
        <th className="py-2 border-b">Category</th>
        <th className="py-2 border-b">Price</th>
      </tr>
    </thead>
    <tbody>
      {/* Example data */}
      <tr>
        <td className="py-2 border-b">Product 1</td>
        <td className="py-2 border-b">Category 1</td>
        <td className="py-2 border-b">$10</td>
      </tr>
      <tr>
        <td className="py-2 border-b">Product 2</td>
        <td className="py-2 border-b">Category 2</td>
        <td className="py-2 border-b">$20</td>
      </tr>
    </tbody>
  </table>
);

const EventsTable = () => (
  <table className="min-w-full bg-white border">
    <thead>
      <tr>
        <th className="py-2 border-b">Event Name</th>
        <th className="py-2 border-b">Date</th>
        <th className="py-2 border-b">Location</th>
      </tr>
    </thead>
    <tbody>
      {/* Example data */}
      <tr>
        <td className="py-2 border-b">Event 1</td>
        <td className="py-2 border-b">01/01/2024</td>
        <td className="py-2 border-b">Location 1</td>
      </tr>
      <tr>
        <td className="py-2 border-b">Event 2</td>
        <td className="py-2 border-b">02/01/2024</td>
        <td className="py-2 border-b">Location 2</td>
      </tr>
    </tbody>
  </table>
);

const VendorsTable = () => (
  <table className="min-w-full bg-white border">
    <thead>
      <tr>
        <th className="py-2 border-b">Vendor Name</th>
        <th className="py-2 border-b">Category</th>
        <th className="py-2 border-b">Contact</th>
      </tr>
    </thead>
    <tbody>
      {/* Example data */}
      <tr>
        <td className="py-2 border-b">Vendor 1</td>
        <td className="py-2 border-b">Category 1</td>
        <td className="py-2 border-b">Contact 1</td>
      </tr>
      <tr>
        <td className="py-2 border-b">Vendor 2</td>
        <td className="py-2 border-b">Category 2</td>
        <td className="py-2 border-b">Contact 2</td>
      </tr>
    </tbody>
  </table>
);

export default Dashboard;
