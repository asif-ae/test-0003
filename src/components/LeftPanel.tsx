import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Accordion from "./Accordion";

type LeftPanelProps = {
  toggleSidebar: () => void;
};

function LeftPanel({ toggleSidebar }: LeftPanelProps) {
  const accordionDashboardData = {
    title: "Main Home",
    items: [
      {
        name: "Dashboard",
        links: [
          { label: "Home 01", href: "/" },
          { label: "Home 02", href: "/" },
          { label: "Home 03", href: "/" },
          { label: "Home 04", href: "/" },
          { label: "Home 05", href: "/" },
          { label: "Home 06", href: "/" },
          { label: "Home 07", href: "/" },
          { label: "Home 08", href: "/" },
          { label: "Home 09", href: "/" },
        ],
      },
    ],
  };
  const accordionAllPageData = {
    title: "All page",
    items: [
      {
        name: "Ecommerce",
        links: [
          { label: "Laptops", href: "/" },
          { label: "Smartphones", href: "/" },
          { label: "Headphones", href: "/" },
        ],
      },
      {
        name: "Category",
        links: [
          { label: "T-Shirts", href: "/" },
          { label: "Jeans", href: "/" },
        ],
      },
      {
        name: "Attributes",
        links: [
          { label: "Laptops", href: "/" },
          { label: "Smartphones", href: "/" },
          { label: "Headphones", href: "/" },
        ],
      },
      {
        name: "Order",
        links: [
          { label: "T-Shirts", href: "/" },
          { label: "Jeans", href: "/" },
        ],
      },
      {
        name: "User",
        links: [
          { label: "Laptops", href: "/" },
          { label: "Smartphones", href: "/" },
          { label: "Headphones", href: "/" },
        ],
      },
      {
        name: "Roles",
        links: [
          { label: "T-Shirts", href: "/" },
          { label: "Jeans", href: "/" },
        ],
      },
    ],
  };
  const accordionData = {
    title: "Product Catalog",
    items: [
      {
        name: "Electronics",
        links: [
          { label: "Laptops", href: "/" },
          { label: "Smartphones", href: "/" },
          { label: "Headphones", href: "/" },
        ],
      },
      {
        name: "Clothing",
        links: [
          { label: "T-Shirts", href: "/" },
          { label: "Jeans", href: "/" },
        ],
      },
    ],
  };
  const accordionSettingData = {
    title: "Setting",
    items: [
      {
        name: "Location",
        links: [
          { label: "Laptops", href: "/" },
          { label: "Smartphones", href: "/" },
          { label: "Headphones", href: "/" },
        ],
      },
      {
        name: "Setting",
        links: [
          { label: "T-Shirts", href: "/" },
          { label: "Jeans", href: "/" },
        ],
      },
      {
        name: "Pages",
        links: [
          { label: "T-Shirts", href: "/" },
          { label: "Jeans", href: "/" },
        ],
      },
    ],
  };
  return (
    <div className="h-screen overflow-y-auto bg-white dark:bg-gray-900">
      <div className="flex items-center justify-end px-4 h-[74px] bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
        >
          <MdOutlineClose className="w-6 h-6" />
        </button>
      </div>
      <div className="p-4 bg-white dark:bg-gray-900">
        {/* Add sidebar content here */}
        <div className="flex items-center justify-center flex-col py-2">
          <Accordion {...accordionDashboardData} />
          <Accordion {...accordionAllPageData} />
          <Accordion {...accordionData} />
          <Accordion {...accordionSettingData} />
          <Accordion {...accordionAllPageData} />
          <Accordion {...accordionData} />
          <Accordion {...accordionSettingData} />
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
