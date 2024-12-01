import React from "react";
import { FaUserAlt, FaBox, FaClipboardList } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const AdminContent = () => {
  // Pie chart data
  const data = {
    labels: ["Users", "Products", "Orders"], // Labels for the pie chart
    datasets: [
      {
        label: "Platform Overview",
        data: [1250, 530, 1050], // Data for users, products, and orders
        backgroundColor: ["#4A90E2", "#50E3C2", "#F5A623"], // Colors for the pie segments
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className=" h-[500px] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-6">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">
            Quick overview of your platform's activity
          </p>
        </div>

        {/* Dashboard Summary Cards and Pie Chart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Total Users
                </h3>
                <p className="text-2xl font-bold text-blue-500">1,250</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <FaUserAlt className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Total Products */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Total Products
                </h3>
                <p className="text-2xl font-bold text-green-500">530</p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <FaBox className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Total Orders
                </h3>
                <p className="text-2xl font-bold text-yellow-500">1,050</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaClipboardList className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Larger Pie Chart Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-96 h-72">
            <Pie data={data} options={options} />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Manage your platform's content and monitor key metrics to stay on
            top of performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
