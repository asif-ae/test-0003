"use client";

import { useTheme } from "@/contexts/Theme";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaBars, FaPowerOff } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa6";

type HeaderProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/login");
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <FaBars className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <FaSun className="w-6 h-6 text-yellow-500" />
            ) : (
              <FaMoon className="w-6 h-6 text-yellow-500" />
            )}
            {/* <FaSun
              className={`w-6 h-6 ${
                theme === "light" ? "text-yellow-500" : "text-gray-300"
              }`}
            /> */}
          </button>
          <button
            onClick={handleLogout}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors cursor-pointer"
          >
            <FaPowerOff className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
