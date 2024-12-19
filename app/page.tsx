"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import FinancialRatios from "@/components/financial-ratios";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const mainValueData = [
  { date: "Jan", value: 0 },
  { date: "Feb", value: 35000 },
  { date: "Mar", value: 25000 },
  { date: "Apr", value: 40000 },
  { date: "May", value: 48762.29 },
  { date: "Jun", value: 20000 },
  { date: "Jul", value: 60000 },
  { date: "Aug", value: 43000.29 },
];

const revenueData = [
  { name: "Operating", value: 400 },
  { name: "Recurring", value: 300 },
  { name: "One-time", value: 200 },
];

const data = [
  { name: "Starting Balance", value: 60000 },
  { name: "Check written", value: -20000 },
  { name: "Deposit", value: 10000 },
  { name: "Tax", value: -5000 },
  { name: "Transfer In", value: 15000 },
  { name: "ATM Withdrawal", value: -1000 },
  { name: "Bank Fees", value: -500 },
  { name: "Ending Balance", value: 48762.29 },
];

const summaryData = [
  "Company Value up 10% from last Quarter.",
  "Revenue is projected to grow by 15% this year.",
  "Operating expenses decreased by 5% compared to last month.",
  "Profit margins are at an all-time high.",
];
export default function DashboardPage() {
  const [projectedRevenue, setProjectedRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const [summaryIndex, setSummaryIndex] = useState(0);

  const handleApply = () => {
    console.log("Projected Revenue: ", projectedRevenue);
    console.log("Expenses: ", expenses);
  };
  return (
    <Layout>
      <FinancialRatios />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <span className="text-2xl font-bold text-white mb-6">Main Value</span>
          <Card className="bg-zinc-900 border-zinc-800 p-4 mt-5">
            <h3 className="text-xl font-bold mb-4 text-white">$48,762.9</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mainValueData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#C6F386"
                    strokeWidth={2}
                  />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1.5">
          <span className="text-2xl font-bold text-white mb-6">Revenue</span>
          <Card className="bg-zinc-900 border-zinc-800 p-4 mt-5">
            <h3 className="text-lg font-semibold mb-4 text-white">Revenue</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#C6F386"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1.5">
          <span className="text-2xl font-bold text-white mb-6">Expenses</span>
          <Card className="bg-zinc-900 border-zinc-800 p-4 mt-5">
            <h3 className="text-lg font-semibold mb-4 text-white">Expenses</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#C6F386" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-gray-900 mt-3 text-white">
        <Card className="bg-zinc-900 text-white p-6 border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-6">Cash Flow</h2>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <h3 className="text-3xl font-bold">$48,762.29</h3>
              <span className="text-green-500">+12%</span>
              <span className="text-sm">VS Last Year</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-black text-white text-sm px-4 py-2 rounded">
                Month
              </button>
              <button className="bg-black text-white text-sm px-4 py-2 rounded">
                Year
              </button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#C6F386" />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 flex space-x-4">
            <span className="text-sm">Operating</span>
            <span className="text-sm">Depreciation</span>
          </div>
        </Card>
      </div>
      <div className="bg-zinc-900 p-8 text-white mt-6">
        {/* Scenario Analysis Section */}
        <div className="flex justify-between gap-8 mb-8">
          <div className="bg-zinc900 p-6 w-1/2 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Projected Revenue</h3>
            <input
              type="number"
              value={projectedRevenue}
              onChange={(e) => setProjectedRevenue(e.target.value)}
              className="w-full p-3 bg-black text-white border border-black rounded-md mb-4"
              placeholder="Write the expected number"
            />
            <select className="w-full p-3 bg-black text-white borderbg-black rounded-md mb-4">
              <option>Currency</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>

          <div className="bg-zinc-900 p-6 w-1/2 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Expenses</h3>
            <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-full p-3 bg-black text-white border border-black rounded-md mb-4"
              placeholder="Write the expected number"
            />
            <select className="w-full p-3 bg-black text-white border border-black rounded-md mb-4">
              <option>Currency</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mb-8">
          <button
            onClick={handleApply}
            className="bg-lime-300 text-black py-2 px-6 rounded-md hover:bg-green-600"
          >
            Apply
          </button>
        </div>

        {/* Summary Insights Section */}
        <div className="bg-black p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Summary Insights</h3>
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() =>
                setSummaryIndex((index) =>
                  index === 0 ? summaryData.length - 1 : index - 1
                )
              }
              className="text-lime-300 hover:text-green-600"
            >
              &#8592; {/* Left arrow */}
            </button>
            <p className="text-3xl text-center font-semibold">
              {summaryData[summaryIndex]}
            </p>
            <button
              onClick={() =>
                setSummaryIndex((index) =>
                  index === summaryData.length - 1 ? 0 : index + 1
                )
              }
              className="text-lime-300 hover:text-green-600"
            >
              &#8594; {/* Right arrow */}
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            ... more insights
          </div>
        </div>
      </div>
    </Layout>
  );
}
