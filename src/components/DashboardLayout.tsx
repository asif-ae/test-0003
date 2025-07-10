import { useTheme } from "@/contexts/Theme";
import React, { useState } from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex h-screen bg-gray-100 ${
        theme === "dark" ? "dark" : ""
      } max-w-full`}
    >
      {/* Left Panel (Hidable Sidebar) */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 ease-in-out overflow-hidden bg-white dark:bg-gray-800 shadow-lg border-r dark:border-gray-700 z-50 hidden lg:block`}
      >
        <LeftPanel toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 ease-in-out overflow-hidden bg-white dark:bg-gray-800 shadow-lg border-r dark:border-gray-700 z-50 lg:hidden fixed top-0 left-0 h-full`}
      >
        <LeftPanel toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-full overflow-x-scroll">
        <div>
          <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="h-[calc(100vh-74px)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
