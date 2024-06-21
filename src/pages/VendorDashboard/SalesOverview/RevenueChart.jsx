import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const RevenueChart = ({ data }) => {
  const chartData = {
    labels: data.map((row) => row.month),
    datasets: [
      {
        label: "Doanh thu",
        data: data.map((row) => row.revenue),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default RevenueChart;
