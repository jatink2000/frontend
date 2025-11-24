import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import Buynow from "../components/Buynow";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Line Chart Data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Income",
        data: [30000, 40000, 35000, 50000, 75000, 90000],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Total Expense",
        data: [20000, 25000, 30000, 32000, 40000, 45000],
        borderColor: "#facc15",
        backgroundColor: "rgba(250,204,21,0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Doughnut Chart Data
  const salesData = {
    labels: ["Income", "Orders", "Refunds", "Shipping"],
    datasets: [
      {
        data: [8600, 1400, 1000, 330],
        backgroundColor: ["#22c55e", "#ef4444", "#facc15", "#60a5fa"],
      },
    ],
  };

  // Orders Table
  const orders = [
    {
      id: "#FC0005",
      product: "Haldiram's Sev Bhujia",
      date: "28 March 2023",
      price: "$18.00",
      status: "Shipped",
      color: "bg-green-100 text-green-700",
    },
    {
      id: "#FC0004",
      product: "NutriChoice Digestive",
      date: "24 March 2023",
      price: "$24.00",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "#FC0003",
      product: "Onion Flavour Potato",
      date: "8 Feb 2023",
      price: "$9.00",
      status: "Cancel",
      color: "bg-red-100 text-red-700",
    },
    {
      id: "#FC0002",
      product: "Blueberry Greek Yogurt",
      date: "20 Jan 2023",
      price: "$12.00",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "#FC0001",
      product: "Slurrp Millet Chocolate",
      date: "14 Jan 2023",
      price: "$8.00",
      status: "Processing",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="flex min-h-screen  bg-gray-50 font-[Poppins]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 p-5">
        <h2 className="text-green-600 text-2xl font-bold mb-5">🛒 FreshCart</h2>
        <ul className="space-y-2">
          {[
            "Dashboard",
            "Products",
            "Categories",
            "Orders",
            "Sellers / Vendors",
            "Customers",
            "Reviews",
          ].map((item, i) => (
            <li
              key={i}
              className={`p-2 rounded-lg cursor-pointer ${
                i === 0
                  ? "bg-green-100 text-green-600 font-medium"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-4 py-2 w-64"
          />
          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Welcome Section */}
        <section className="flex justify-between items-center bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mb-8">
          <div>
            <h1 className="text-xl font-semibold mb-2">
              Welcome back! FreshCart
            </h1>
            <p className="text-gray-600">
              FreshCart is simple & clean design for developer and designer.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700">
              Create Product
            </button>
          </div>
          <img
            src="https://freshcart-next-js.vercel.app/images/banner/grocery-banner.png"
            alt="banner"
            className="w-64 rounded-lg"
          />
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-2xl">💲</div>
            <h3 className="font-medium text-gray-600">Earnings</h3>
            <p className="text-2xl font-bold">$93,438.78</p>
            <span className="text-gray-500 text-sm">Monthly revenue</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-2xl">🛍️</div>
            <h3 className="font-medium text-gray-600">Orders</h3>
            <p className="text-2xl font-bold">42,339</p>
            <span className="text-gray-500 text-sm">35+ New Sales</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-2xl">👥</div>
            <h3 className="font-medium text-gray-600">Customers</h3>
            <p className="text-2xl font-bold">39,354</p>
            <span className="text-gray-500 text-sm">30+ new in 2 days</span>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm md:col-span-2">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-gray-700">Revenue</h3>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
              </select>
            </div>
            <Line data={revenueData} />
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
            <h3 className="font-semibold text-gray-700 mb-2">Total Sales</h3>
            <Doughnut data={salesData} />
            <p className="mt-4 font-semibold text-gray-700">
              Total Sales: <span className="text-green-600">9600</span>
            </p>
          </div>
        </section>

        {/* Sales Overview & Notifications */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm md:col-span-2">
            <h3 className="font-semibold mb-3 text-gray-700">
              Sales Overview
            </h3>

            <div className="mb-3">
              <p className="font-medium">Total Profit</p>
              <div className="h-2 bg-green-500 rounded-md w-[86%]"></div>
              <small className="text-gray-500">$1,689 (8.6%)</small>
            </div>
            <div className="mb-3">
              <p className="font-medium">Total Income</p>
              <div className="h-2 bg-blue-500 rounded-md w-[86%]"></div>
              <small className="text-gray-500">$3,571 (86.4%)</small>
            </div>
            <div>
              <p className="font-medium">Total Expenses</p>
              <div className="h-2 bg-red-500 rounded-md w-[74%]"></div>
              <small className="text-gray-500">$3,430 (74.5%)</small>
            </div>
          </div>

          <div>
            <div className="bg-yellow-50 p-4 rounded-xl mb-4">
              <h4 className="font-semibold">Start your day with new alerts</h4>
              <p className="text-gray-600 text-sm">You have 2 new notifications.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-semibold">Monitor your sales & profit</h4>
              <p className="text-gray-600 text-sm">View Performance</p>
            </div>
          </div>
        </section>

        {/* Recent Orders Table */}
        <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-700">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-600">
                  <th className="p-3">Order Number</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Order Date</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b">
                    <td className="p-3">{o.id}</td>
                    <td className="p-3">{o.product}</td>
                    <td className="p-3">{o.date}</td>
                    <td className="p-3">{o.price}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-medium ${o.color}`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    <Buynow/>
    </div>
    

  );
}
