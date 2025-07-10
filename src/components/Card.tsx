import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { AreaChart } from "./AreaChart";

export function Card() {
  return (
    <div className="bg-white dark:bg-[#1E2235] rounded-3xl p-4 shadow-lg">
      <div className="flex items-start mb-4">
        <div
          className="bg-green-500 dark:bg-[#4CAF50] h-8 w-8 rounded-lg flex items-center justify-center relative"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <FaShoppingBag className="h-4 w-4 text-white" />
        </div>
        <div className="ml-6 flex-1">
          <h2 className="text-gray-600 dark:text-gray-300 text-[14px] font-medium">Total Sales</h2>
          <div className="flex items-center justify-between">
            <h1 className="text-gray-800 dark:text-gray-400 text-4xl font-bold mt-1">34,945</h1>
            <div className="flex items-center text-green-600 dark:text-[#4CAF50]">
              <FiTrendingUp className="h-5 w-5 mr-1" />
              <span className="font-bold">1.56%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8">
        <AreaChart />
      </div>
    </div>
  );
}
