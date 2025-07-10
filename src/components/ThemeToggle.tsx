"use client";

import { useTheme } from "@/contexts/Theme";
import { cn } from "@/libs/utils";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative inline-flex items-center h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div
        className={cn(
          "absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out",
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        )}
      />
      <div className="flex items-center justify-between w-full px-2">
        <BsSunFill className="text-yellow-500 text-sm" />
        <BsMoonFill className="text-gray-800 dark:text-gray-300 text-sm" />
      </div>
    </div>
  );
}
