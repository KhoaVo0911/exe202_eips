import React from "react";
import RevenueTable from "./RevenueTable";
import RevenueChart from "./RevenueChart";

const sampleData = [
  { month: "Tháng 1", revenue: 50000 },
  { month: "Tháng 2", revenue: 45000 },
  { month: "Tháng 3", revenue: 60000 },
  { month: "Tháng 4", revenue: 70000 },
  { month: "Tháng 5", revenue: 65000 },
  { month: "Tháng 6", revenue: 75000 },
  // Add more data as needed
];

function SalesOverview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Thống kê doanh thu</h1>
      <RevenueChart data={sampleData} />
      <div className="mt-6">
        <RevenueTable data={sampleData} />
      </div>
    </div>
  );
}

export default SalesOverview;
